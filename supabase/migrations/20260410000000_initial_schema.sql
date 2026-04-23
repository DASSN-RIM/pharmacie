-- Initial Schema for Pharmacy Inventory System

-- 1. Pharmacies
CREATE TABLE IF NOT EXISTS pharmacies (
    id SERIAL PRIMARY KEY,
    name_ar TEXT NOT NULL,
    name_fr TEXT NOT NULL,
    color TEXT DEFAULT '#047857',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Medicines (Central Stock)
CREATE TABLE IF NOT EXISTS medicines (
    id BIGSERIAL PRIMARY KEY,
    code TEXT,
    name TEXT NOT NULL,
    batch TEXT,
    qty INTEGER DEFAULT 0,
    entry_date DATE,
    expiry_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Pharmacy Stock (Current inventory per pharmacy)
CREATE TABLE IF NOT EXISTS pharmacy_stock (
    id BIGSERIAL PRIMARY KEY,
    pharmacy_id INTEGER REFERENCES pharmacies(id) ON DELETE CASCADE,
    medicine_id BIGINT REFERENCES medicines(id) ON DELETE CASCADE,
    qty INTEGER DEFAULT 0,
    UNIQUE(pharmacy_id, medicine_id)
);

-- 4. Patients
CREATE TABLE IF NOT EXISTS patients (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    national_id TEXT,
    phone TEXT,
    hospital TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Dispensations (To patients)
CREATE TABLE IF NOT EXISTS dispensations (
    id BIGSERIAL PRIMARY KEY,
    date TIMESTAMPTZ DEFAULT NOW(),
    patient_name TEXT,
    medicine_id BIGINT REFERENCES medicines(id),
    medicine_name TEXT,
    qty INTEGER NOT NULL,
    pharmacy_id INTEGER REFERENCES pharmacies(id),
    dispensed_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Transfers (Central to Pharmacy or Return)
CREATE TABLE IF NOT EXISTS transfers (
    id BIGSERIAL PRIMARY KEY,
    date TIMESTAMPTZ DEFAULT NOW(),
    medicine_id BIGINT REFERENCES medicines(id),
    medicine_name TEXT,
    qty INTEGER NOT NULL,
    to_pharmacy_id INTEGER REFERENCES pharmacies(id),
    is_return BOOLEAN DEFAULT FALSE,
    dispensed_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Orders (Pharmacy to Central)
CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY, -- CMD-XXXXXX
    date TIMESTAMPTZ DEFAULT NOW(),
    pharmacy_id INTEGER REFERENCES pharmacies(id),
    worker_name TEXT,
    status TEXT DEFAULT 'PENDING',
    items JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Users
CREATE TABLE IF NOT EXISTS users (
    email TEXT PRIMARY KEY,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'pharmacy',
    name_ar TEXT,
    name_fr TEXT,
    pharmacy_id INTEGER REFERENCES pharmacies(id),
    recovery_email TEXT,
    recovery_phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. User Security / Recovery
CREATE TABLE IF NOT EXISTS user_security (
    login_email TEXT PRIMARY KEY REFERENCES users(email) ON DELETE CASCADE,
    recovery_email TEXT,
    recovery_phone TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Initial Pharmacies ...

