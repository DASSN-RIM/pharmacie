-- Change le calcul de la semaine dans les RPC analytiques : jeudi -> mercredi (au lieu de mercredi -> mardi)
CREATE OR REPLACE FUNCTION public.get_analytics_global(p_start text, p_timeframe text DEFAULT 'day'::text)
 RETURNS TABLE(period_key text, medicine_name text, unique_patients bigint, total_qty bigint)
 LANGUAGE sql
 SECURITY DEFINER
AS $function$
  SELECT
    CASE p_timeframe
      WHEN 'day'   THEN (date AT TIME ZONE 'UTC')::date::text
      WHEN 'week'  THEN ((date AT TIME ZONE 'UTC')::date
                        - ((EXTRACT(DOW FROM date AT TIME ZONE 'UTC')::int - 4 + 7) % 7))::text
      WHEN 'month' THEN to_char(date AT TIME ZONE 'UTC', 'YYYY-MM')
      WHEN 'year'  THEN to_char(date AT TIME ZONE 'UTC', 'YYYY')
      ELSE (date AT TIME ZONE 'UTC')::date::text
    END AS period_key,
    medicine_name,
    COUNT(DISTINCT patient_name) AS unique_patients,
    SUM(qty)::BIGINT AS total_qty
  FROM dispensations
  WHERE date >= p_start::timestamptz
  GROUP BY period_key, medicine_name
  ORDER BY period_key DESC, medicine_name;
$function$;

CREATE OR REPLACE FUNCTION public.get_analytics_pharm(p_start text, p_timeframe text DEFAULT 'day'::text)
 RETURNS TABLE(period_key text, pharmacy_id integer, unique_patients bigint)
 LANGUAGE sql
 SECURITY DEFINER
AS $function$
  SELECT
    CASE p_timeframe
      WHEN 'day'   THEN (date AT TIME ZONE 'UTC')::date::text
      WHEN 'week'  THEN ((date AT TIME ZONE 'UTC')::date
                        - ((EXTRACT(DOW FROM date AT TIME ZONE 'UTC')::int - 4 + 7) % 7))::text
      WHEN 'month' THEN to_char(date AT TIME ZONE 'UTC', 'YYYY-MM')
      WHEN 'year'  THEN to_char(date AT TIME ZONE 'UTC', 'YYYY')
      ELSE (date AT TIME ZONE 'UTC')::date::text
    END AS period_key,
    pharmacy_id,
    COUNT(DISTINCT patient_name) AS unique_patients
  FROM dispensations
  WHERE date >= p_start::timestamptz
  GROUP BY period_key, pharmacy_id
  ORDER BY period_key DESC, pharmacy_id;
$function$;
