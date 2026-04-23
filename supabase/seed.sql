-- Seed Initial Medicines (Central Stock)
INSERT INTO medicines (id, code, name, batch, qty, entry_date, expiry_date) VALUES
(1, 'MD-001', 'Cinacalcet 30mg', 'B-1002', 25, '2026-01-10', '2027-12-01'),
(2, 'MD-002', 'Erythropoietin 4000 IU', 'IS-992', 350, '2026-02-15', '2026-08-15'),
(3, 'MD-003', 'Calcium Carbonate', 'CC-401', 1200, '2026-03-01', '2028-01-20'),
(4, 'MD-004', 'Iron Sucrose 100mg', 'SV-732', 80, '2026-04-05', '2026-05-10')
ON CONFLICT (id) DO NOTHING;

-- Seed some Stock for Pharmacie Nasr (id: 1)
INSERT INTO pharmacy_stock (pharmacy_id, medicine_id, qty) VALUES
(1, 2, 50)
ON CONFLICT DO NOTHING;
