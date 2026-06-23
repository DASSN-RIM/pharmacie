console.log("APP.JS PARSED - VERSION 42 - SYSTEM READY");

// Translations
const i18n = {
    ar: {
        page_dashboard: 'لوحة التحكم', page_central: 'المخزون المركزي', page_distribution: 'توزيع الأدوية للصيدليات', page_pharmacy: 'صيدلية',
        alert_low_stock: 'تنبيه: المخزون منخفض —', stat_total_meds: 'إجمالي الأدوية', stat_pharmacies: 'الصيدليات', stat_distributions: 'التوزيعات', stat_patients: 'المرضى',
        block_latest_dist: 'آخر التوزيعات', block_pharmacies: 'الصيدليات', patients_suffix: 'مريض', no_recent_dist: 'لا توجد توزيعات حديثة',
        search_placeholder: 'ابحث عن دواء...', add_med: 'إضافة دواء', th_med: 'الدواء', th_batch: 'الدفعة', th_qty: 'الكمية', th_entry: 'تاريخ الدخول', th_expiry: 'الصلاحية', th_status: 'الحالة',
        status_good: 'متوفر', status_low: 'منخفض', status_empty: 'نفذ', btn_transfer_new: 'عملية تحويل جديدة', trans_select_med: '-- اختر الدواء --', trans_select_pharm: '-- إلى الصيدلية --', trans_qty: 'الكمية', btn_transfer: 'تحويل',
        history_dist: 'سجل التوزيع', th_date: 'التاريخ', th_id: 'الرقم', th_to: 'إلى', alert_success: 'عملية ناجحة!', alert_error: 'خطأ: الكمية المطلوبة غير متوفرة',
        dispense_title: 'صرف دواء لمريض', patient_name: 'اسم المريض', btn_dispense: 'صرف', stock_available: 'المخزون المتوفر', history_dispense: 'سجل الصرف', th_patient: 'المريض',
        page_patients: 'المرضى المستفيدين', page_records: 'سجل الحركات العام', page_reports: 'التقارير والإحصائيات',
        btn_print: 'طباعة PDF', btn_excel: 'تصدير Excel', th_action: 'نوع العملية', action_add: 'إضافة للمركزي', action_transfer: 'تحويل', action_dispense: 'صرف',
        th_pharmacy: 'الصيدلية / الجهة', th_total_qty: 'إجمالي ما استلمه', th_worker: 'المسؤول',
        btn_import: 'استيراد من Excel', th_actions: 'إجراءات', confirm_delete: 'هل أنت متأكد من حذف هذا الدواء نهائياً؟', transfer_from: 'من:', transfer_to: 'إلى:', btn_return: 'إرجاع للمركزي',
        pending_returns_title: 'طلبات إرجاع الأدوية (بانتظار الموافقة)', btn_approve: 'موافقة', btn_reject: 'رفض', alert_request_sent: 'تم إرسال طلب الإرجاع لإدارة المستودع وبانتظار الموافقة.', btn_delete_selected: 'مسح المحدد',
        btn_import_patients: 'استيراد مرضى', th_patient_nid: 'الرقم الوطني', th_patient_phone: 'رقم الهاتف', th_patient_hospital: 'مستشفى المتابعة', error_unregistered_patient: 'يجب اختيار مريض معتمد من القائمة فقط.',
        nav_weekly_reports: 'التقارير الأسبوعية', th_beneficiaries: 'عدد المستفيدين', th_consumed_qty: 'الكمية المنصرفة', th_week_ending: 'نهاية الأسبوع (الأربعاء)', nav_my_register: 'سجلي (التحركات)',
        nav_analyses: 'التحليلات والتقارير الدورية', th_period: 'الفترة الزمنية', th_day: 'يومي', th_week: 'أسبوعي', th_month: 'شهري', th_year: 'سنوي',
        th_global_report: 'التقرير الإجمالي للأدوية', th_total_consumed: 'إجمالي المستهلك'
    },
    fr: {
        page_dashboard: 'Tableau de bord', page_central: 'Stock Central', page_distribution: 'Distribution', page_pharmacy: 'Pharmacie',
        alert_low_stock: 'Alerte: Stock Faible —', stat_total_meds: 'Total Méd.', stat_pharmacies: 'Pharmacies', stat_distributions: 'Distributions', stat_patients: 'Patients',
        block_latest_dist: 'Dernières dist.', block_pharmacies: 'Pharmacies', patients_suffix: 'pat.', no_recent_dist: 'Aucune dist.',
        search_placeholder: 'Rechercher...', add_med: 'Ajouter', th_med: 'Médicament', th_batch: 'Lot', th_qty: 'Quant.', th_entry: 'Date d\'entrée', th_expiry: 'Expiration', th_status: 'Statut',
        status_good: 'Disponible', status_low: 'Faible', status_empty: 'Rupture', btn_transfer_new: 'Nouveau transfert', trans_select_med: '-- Médicament --', trans_select_pharm: '-- Pharmacie --', trans_qty: 'Quantité', btn_transfer: 'Transférer',
        history_dist: 'Historique Dist.', th_date: 'Date', th_id: 'ID', th_to: 'Vers', alert_success: 'Opération réussie !', alert_error: 'Erreur: Stock insuffisant',
        dispense_title: 'Délivrer', patient_name: 'Patient', btn_dispense: 'Délivrer', stock_available: 'Stock Actuel', history_dispense: 'Historique', th_patient: 'Patient',
        page_patients: 'Patients Bénéficiaires', page_records: 'Registre des Opérations', page_reports: 'Rapports et Statistiques',
        btn_print: 'Imprimer PDF', btn_excel: 'Exporter Excel', th_action: 'Type d\'opération', action_add: 'Ajout Central', action_transfer: 'Transfert', action_dispense: 'Délivrance',
        th_pharmacy: 'Pharmacie / Dest.', th_total_qty: 'Total Reçu', th_worker: 'Responsable',
        btn_import: 'Importer d\'Excel', th_actions: 'Actions', confirm_delete: 'Êtes-vous sûr de supprimer ce médicament ?', transfer_from: 'De:', transfer_to: 'Vers:', btn_return: 'Retour Central',
        pending_returns_title: 'Demandes de retour (En attente)', btn_approve: 'Approuver', btn_reject: 'Refuser', alert_request_sent: 'Demande envoyée, en attente d\'approbation.', btn_delete_selected: 'Supprimer Sélection',
        btn_import_patients: 'Importer Patients', th_patient_nid: 'ID National', th_patient_phone: 'Téléphone', th_patient_hospital: 'Hôpital', error_unregistered_patient: 'Veuillez sélectionner un patient valide de la liste.',
        btn_add_med_row: 'Ajouter un médicament', btn_confirm_dist: 'Confirmer la distribution', select_pharm: '-- Sélectionner la pharmacie --',
        nav_weekly_reports: 'Rapports Hebdo', th_beneficiaries: 'Bénéficiaires', th_consumed_qty: 'Quantité Sortie', th_week_ending: 'Fin de semaine (Mercredi)', nav_my_register: 'Mon Registre',
        nav_analyses: 'Analyses & Rapports', th_period: 'Période', th_day: 'Quotidien', th_week: 'Hebdomadaire', th_month: 'Mensuel', th_year: 'Annuel',
        th_global_report: 'Rapport Global des Médicaments', th_total_consumed: 'Total Consommé'
    }
};

const staticDict = {
    ar: {
        login_title: 'تسجيل الدخول', login_subtitle: 'نظام إدارة المخزون', login_user: 'اسم المستخدم', login_pass: 'كلمة المرور', login_error: 'خطأ في تسجيل الدخول!', login_btn: 'دخول',
        brand_title: 'إدارة الصيدليات', brand_subtitle: 'MASEF',
        nav_dashboard: 'لوحة التحكم', nav_central: 'المخزون المركزي', nav_distribution: 'التوزيع', nav_admin_orders: 'الطلبيات', nav_patients: 'المرضى', nav_reports: 'السجلات', nav_history: 'التقارير',
        user_name: 'محمد أمين', user_role: 'مسؤول المخزون',
        add_med_title: 'إضافة عقار (المركزي)', add_med_name: 'اسم الدواء', add_med_batch: 'رقم التشغيلة', add_med_qty: 'الكمية المستلمة', add_med_entry: 'تاريخ الدخول', add_med_expiry: 'تاريخ الصلاحية', add_med_btn: 'إضافة',
        forgot_password: 'نسيت كلمة السر؟',
        secure_account: 'تأمين الحساب'
    },
    fr: {
        login_title: 'Connexion', login_subtitle: 'Gestion des Stocks', login_user: 'Identifiant', login_pass: 'Mot de passe', login_error: 'Identifiants incorrects!', login_btn: 'Se connecter',
        brand_title: 'Gestion des Pharmacies', brand_subtitle: 'MASEF',
        nav_dashboard: 'Tableau de bord', nav_central: 'Stock Central', nav_distribution: 'Distribution', nav_admin_orders: 'Commandes', nav_patients: 'Patients', nav_reports: 'Registres', nav_history: 'Rapports',
        user_name: 'Mohamed Amine', user_role: 'Admin Stock',
        add_med_title: 'Ajout Médicament', add_med_name: 'Médicament', add_med_batch: 'Lot', add_med_qty: 'Quant. reçue', add_med_entry: 'Date d\'entrée', add_med_expiry: 'Expiration', add_med_btn: 'Ajouter',
        page_expired: 'Stock Expiré (Périmés)', th_days_left: 'Jours restants', expired_tag: 'EXPIRÉ',
        forgot_password: 'Mot de passe oublié ?',
        secure_account: 'Sécuriser'
    }
};

function isExpired(dateStr) {
    if (!dateStr || dateStr === '-') return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const parts = dateStr.split(/[-/]/);
    let exp;
    if (parts.length === 3) {
        if (parts[0].length === 4) {
            exp = new Date(parts[0], parts[1] - 1, parts[2]);
        } else if (parts[2].length === 4) {
            exp = new Date(parts[2], parts[1] - 1, parts[0]);
        } else {
            exp = new Date(dateStr);
        }
    } else {
        exp = new Date(dateStr);
    }

    if (isNaN(exp.getTime())) return false;
    exp.setHours(0, 0, 0, 0);
    return exp < now;
}

window.formatDate = function (dateStr) {
    if (!dateStr || dateStr === '-' || dateStr === 'undefined') return '-';
    if (typeof dateStr !== 'string') return dateStr;
    const justDate = dateStr.split('T')[0];
    const parts = justDate.split(/[-/]/);
    if (parts.length === 3) {
        if (parts[0].length === 4) { // YYYY-MM-DD
            const y = parts[0], m = parts[1].padStart(2, '0'), d = parts[2].padStart(2, '0');
            return `${d}/${m}/${y}`;
        }
        if (parts[2].length === 4) { // DD/MM/YYYY
            const d = parts[0].padStart(2, '0'), m = parts[1].padStart(2, '0'), y = parts[2];
            return `${d}/${m}/${y}`;
        }
    }
    return dateStr;
};

window.attachTableSort = function(tableEl, onSortCb) {
    if (!tableEl) return;
    const ths = Array.from(tableEl.querySelectorAll('thead th'));
    ths.forEach((th, colIdx) => {
        if (th.querySelector('input[type="checkbox"]') || th.querySelector('button')) return;
        if (!th.textContent.trim()) return;
        th.style.cursor = 'pointer';
        th.style.userSelect = 'none';
        th._sortDir = null;
        const arrow = document.createElement('span');
        arrow.className = 'sort-arrow';
        arrow.style.cssText = 'margin-left:4px; opacity:0.35; font-size:0.7em; vertical-align:middle;';
        arrow.textContent = '↕';
        th.appendChild(arrow);
        th.addEventListener('click', () => {
            const wasDir = th._sortDir;
            ths.forEach(h => { h._sortDir = null; const a = h.querySelector('.sort-arrow'); if (a) { a.textContent = '↕'; a.style.opacity = '0.35'; } });
            th._sortDir = wasDir === 'asc' ? 'desc' : 'asc';
            arrow.textContent = th._sortDir === 'asc' ? '↑' : '↓';
            arrow.style.opacity = '1';
            const col = th.dataset.col;
            if (onSortCb && col) {
                onSortCb(col, th._sortDir);
            } else {
                const tbody = tableEl.querySelector('tbody');
                if (!tbody) return;
                const rows = Array.from(tbody.querySelectorAll('tr'));
                if (rows.length <= 1) return;
                const parseVal = (text) => {
                    const s = text.trim();
                    const dm = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
                    if (dm) return new Date(+dm[3], +dm[2] - 1, +dm[1]).getTime();
                    const n = parseFloat(s.replace(/\s/g, '').replace(',', '.'));
                    if (!isNaN(n) && /^[\d\s,.\-]+$/.test(s)) return n;
                    return s.toLowerCase();
                };
                rows.sort((a, b) => {
                    const aV = parseVal(a.cells[colIdx]?.textContent || '');
                    const bV = parseVal(b.cells[colIdx]?.textContent || '');
                    if (aV < bV) return th._sortDir === 'asc' ? -1 : 1;
                    if (aV > bV) return th._sortDir === 'asc' ? 1 : -1;
                    return 0;
                });
                rows.forEach(r => tbody.appendChild(r));
            }
        });
    });
};

window.formatReportPeriod = function (pKey, timeframe) {
    if (!pKey || pKey === '-' || pKey === 'undefined') return '-';
    if (timeframe === 'day') return window.formatDate(pKey);
    if (timeframe === 'week') {
        const d = new Date(pKey);
        const startStr = window.formatDate(pKey);
        d.setDate(d.getDate() + 7);
        const endStr = window.formatDate(d.toISOString().split('T')[0]);
        return currentLang === 'ar' ? `من ${startStr} إلى ${endStr}` : `Du ${startStr} au ${endStr}`;
    }
    if (timeframe === 'month') {
        const parts = pKey.split('-');
        if (parts.length < 2) return pKey;
        const monthNames = {
            '01': { ar: 'يناير', fr: 'Janvier' }, '02': { ar: 'فبراير', fr: 'Février' }, '03': { ar: 'مارس', fr: 'Mars' },
            '04': { ar: 'أبريل', fr: 'Avril' }, '05': { ar: 'مايو', fr: 'Mai' }, '06': { ar: 'يونيو', fr: 'Juin' },
            '07': { ar: 'يوليو', fr: 'Juillet' }, '08': { ar: 'أغسطس', fr: 'Août' }, '09': { ar: 'سبتمبر', fr: 'Septembre' },
            '10': { ar: 'أكتوبر', fr: 'Octobre' }, '11': { ar: 'نوفمبر', fr: 'Novembre' }, '12': { ar: 'ديسمبر', fr: 'Décembre' }
        };
        const m = monthNames[parts[1]] ? monthNames[parts[1]][currentLang] : parts[1];
        return `${m} ${parts[0]}`;
    }
    return pKey;
};

// Utility: Debounce
window.debounce = function (func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Logic for finding the Wednesday that ends the week of a given date
function getWeekStartWednesday(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '-';
    const day = d.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
    let diff = (day >= 3) ? (3 - day) : (3 - day - 7);
    d.setDate(d.getDate() + diff);
    return d.toISOString().split('T')[0];
}

// Generalized grouping logic
function getGroupedKey(dateStr, unit) {
    if (!dateStr || dateStr === '-') return '-';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '-';

    if (unit === 'day') return d.toISOString().split('T')[0];
    if (unit === 'week') return getWeekStartWednesday(dateStr);
    if (unit === 'month') return dateStr.substring(0, 7); // YYYY-MM
    if (unit === 'year') return dateStr.substring(0, 4); // YYYY
    return dateStr;
}

let activeReportTab = 'week';

window.userDatabase = {};
let currentUser = null;
let currentUserEmail = null;

// Promise that resolves when users are loaded from Supabase
let usersReadyResolve;
window.usersReady = new Promise(resolve => { usersReadyResolve = resolve; });

// --- Global Sync Status Manager ---
window.updateSyncStatus = function (status, msg) {
    const indicator = document.getElementById('sync-status-indicator');
    const text = document.getElementById('sync-stat-text');
    if (!indicator || !text) return;

    indicator.classList.remove('syncing', 'success', 'error');

    if (status === 'syncing') {
        indicator.classList.add('syncing');
        text.innerText = msg || (currentLang === 'ar' ? 'جاري المزامنة...' : 'Synchronisation...');
    } else if (status === 'success') {
        indicator.classList.add('success');
        text.innerText = msg || (currentLang === 'ar' ? 'متصل' : 'Connecté');
        setTimeout(() => {
            if (indicator.classList.contains('success')) {
                text.innerText = (currentLang === 'ar' ? 'متصل' : 'Connecté');
            }
        }, 3000);
    } else if (status === 'error') {
        indicator.classList.add('error');
        text.innerText = msg || (currentLang === 'ar' ? 'خطأ في الربط' : 'Erreur Sync');
    }
};

window.syncUsers = async function () {
    window.updateSyncStatus('syncing');
    try {
        console.log("Syncing user roles from Supabase...");
        const { data, error } = await _supabase.from('users').select('id, email, role, pharmacy_id, name_ar, name_fr');

        if (error) {
            console.error("Supabase Error:", error);
            window.updateSyncStatus('error', currentLang === 'ar' ? 'خطأ في السحاب' : 'Erreur Cloud');
            return;
        }

        const db = {};
        if (data) {
            data.forEach(u => {
                let forcedRole = u.role;
                if (u.email.toLowerCase().trim() === 'stock@masef.com') forcedRole = 'manager';
                if (u.email.toLowerCase().trim() === 'admin@masef.com') forcedRole = 'admin';

                db[u.email.toLowerCase().trim()] = {
                    id: u.id,
                    role: forcedRole,
                    pharmacyId: u.pharmacy_id,
                    name: { ar: u.name_ar, fr: u.name_fr },
                    recoveryEmail: u.recovery_email,
                    recoveryPhone: u.recovery_phone
                };
            });
        }
        window.userDatabase = db;
        console.log("User roles synced successfully.");
        window.updateSyncStatus('success');
    } catch (err) {
        console.error("Sync Catch Error:", err);
        window.updateSyncStatus('error');
    }
}

// Ensure users are loaded before login is possible
// Initial sync moved after Supabase initialization

function t(key) {
    const val = (i18n[currentLang] && i18n[currentLang][key]) || (staticDict[currentLang] && staticDict[currentLang][key]);
    return val || key;
}

function saveSettings() {
    localStorage.setItem('pharmacy_lang', 'fr');
}

window.parseWorkerName = function (val, lang = 'fr') {
    if (!val) return '-';
    if (typeof val === 'object') return val[lang] || '-';
    if (typeof val === 'string' && val.startsWith('{')) {
        try { const obj = JSON.parse(val); return obj[lang] || '-'; } catch (e) { }
    }
    return val;
};

function updateStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = (staticDict[currentLang] && staticDict[currentLang][key]) || (i18n[currentLang] && i18n[currentLang][key]);
        if (val) {
            el.innerText = val;
        }
    });
}

// Toast Notification System
window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};

window.setLang = function (lang) {
    currentLang = lang;
    saveSettings();
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    updateStaticTranslations();
};

const SUPABASE_URL = 'https://spargooprxgbxqmiopjz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_uEvawosIK3GP1u8U1eugyQ_AKWWo1Ma';

// Custom Dialog System (Replaces alert, prompt, confirm)
window.showCustomDialog = function ({ title, msg, type = 'alert', defaultValue = '', icon = 'fa-circle-info' }) {
    return new Promise((resolve) => {
        const modal = document.getElementById('custom-dialog-modal');
        const titleEl = document.getElementById('dialog-title');
        const msgEl = document.getElementById('dialog-msg');
        const inputContainer = document.getElementById('dialog-input-container');
        const input = document.getElementById('dialog-input');
        const confirmBtn = document.getElementById('dialog-confirm-btn');
        const cancelBtn = document.getElementById('dialog-cancel-btn');
        const iconContainer = document.getElementById('dialog-icon');

        titleEl.innerText = title;
        msgEl.innerText = msg;
        iconContainer.innerHTML = `<i class="fa-solid ${icon}"></i>`;

        // Smarter contextual colors
        iconContainer.className = '';
        const iconLower = icon.toLowerCase();
        if (iconLower.includes('check') || iconLower.includes('good') || iconLower.includes('success')) iconContainer.classList.add('success');
        else if (iconLower.includes('xmark') || iconLower.includes('exclamation') || iconLower.includes('error')) iconContainer.classList.add('error');
        else if (iconLower.includes('warning') || iconLower.includes('triangle')) iconContainer.classList.add('warning');
        else iconContainer.classList.add('info');

        if (type === 'prompt') {
            inputContainer.style.display = 'block';
            input.value = defaultValue;
            cancelBtn.style.display = 'block';
        } else if (type === 'confirm') {
            inputContainer.style.display = 'none';
            cancelBtn.style.display = 'block';
        } else {
            inputContainer.style.display = 'none';
            cancelBtn.style.display = 'none';
        }

        modal.classList.add('active');

        const cleanup = () => {
            modal.classList.remove('active');
            confirmBtn.onclick = null;
            cancelBtn.onclick = null;
        };

        confirmBtn.onclick = () => {
            const val = type === 'prompt' ? input.value : true;
            cleanup();
            resolve(val);
        };

        cancelBtn.onclick = () => {
            cleanup();
            resolve(null);
        };
    });
};

// Robust initialization for CDN version
let _supabase;
try {
    const lib = window.supabase || window.Supabase;
    if (!lib) {
        console.error("Supabase library not found! Check your script tags in index.html.");
    } else {
        _supabase = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase Client initialized.");
    }
} catch (e) {
    console.error("Critical initialization error:", e);
}
const _db = _supabase;

// syncUsers() is called later after all functions are defined (see bottom of file)

const defaultState = {
    medicines: [],
    pharmacies: {
        1: { name: { ar: 'صيدلية النصر', fr: 'Pharmacie Nasr' }, patients: 0, percent: 0, color: '#047857', stock: [] },
        2: { name: { ar: 'صيدلية الأمل', fr: 'Pharmacie Amal' }, patients: 0, percent: 0, color: '#d97706', stock: [] },
        3: { name: { ar: 'صيدلية الشفاء', fr: 'Pharmacie Chifa' }, patients: 0, percent: 0, color: '#ef4444', stock: [] },
        4: { name: { ar: 'صيدلية الرحمة', fr: 'Pharmacie Rahma' }, patients: 0, percent: 0, color: '#047857', stock: [] }
    },
    transfers: [],
    dispensations: [],
    patientsStats: 0,
    pendingReturns: [],
    patients: [],
    receipts: [],
    orders: [],
    counters: { delivery: 0, order: 0 },
    stats: {
        totalMeds: 0,
        totalTypes: 0,
        totalPatients: 0,
        totalDistributions: 0,
        totalDispensations: 0,
        totalExpired: 0
    }
};

let state = defaultState;
let activeView = 'dashboard';
let pagination = {
    central: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    patients: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    records: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    expired: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    transfers: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    dispensations: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    pharmacy_stock: { currentPage: 1, pageSize: 25, total: 0, search: '' },
    analytical_global: { currentPage: 1, pageSize: 25, total: 0 },
    analytical_pharm: { currentPage: 1, pageSize: 25, total: 0 }
};

// Global tracking for active pharmacy view (used by changePage for pharmacy pagination)
window.activePharmacyId = null;
window.activeSubView = 'all';

async function fetchTableData(table, { page = 1, pageSize = 25, search = '', searchCol = 'name', filters = {}, order = { col: 'id', ascending: false }, select = '*', extraOrFilter = null } = {}) {
    let query = _supabase.from(table).select(select, { count: 'exact' });

    if (extraOrFilter) query = query.or(extraOrFilter);

    if (search) {
        if (table === 'medicines') {
            // Search in both name and batch for medicines
            query = query.or(`name.ilike.%${search}%,batch.ilike.%${search}%`);
        } else if (table === 'patients') {
            // Search in both name and national ID for patients
            query = query.or(`name.ilike.%${search}%,national_id.ilike.%${search}%`);
        } else if (table === 'pharmacy_stock') {
            // Search in joined medicines table (Name and Batch)
            query = query.or(`name.ilike.%${search}%,batch.ilike.%${search}%`, { foreignTable: 'medicines' });
        } else if (table === 'dispensations') {
            // Search in med name, patient name or reference
            query = query.or(`medicine_name.ilike.%${search}%,patient_name.ilike.%${search}%,reference.ilike.%${search}%`);
        } else if (table === 'transfers') {
            // Search in med name or target pharmacy (manual search might be needed for joins)
            query = query.or(`medicine_name.ilike.%${search}%,dispensed_by.ilike.%${search}%`);
        } else {
            query = query.ilike(searchCol, `%${search}%`);
        }
    }

    Object.entries(filters).forEach(([col, val]) => {
        if (val !== null && val !== undefined && val !== '') {
            if (typeof val === 'object' && val.op === 'lt') {
                query = query.lt(col, val.val);
            } else {
                query = query.eq(col, val);
            }
        }
    });

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);

    if (order.col) {
        query = query.order(order.col, { ascending: order.ascending });
    }

    const { data, count, error } = await query;
    if (error) throw error;
    return { data, total: count };
}

let searchTimeout;
function debounceSearch(callback, ms = 500) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callback, ms);
}


async function fetchAllRecords(table, selectQuery = '*') {
    let allData = [];
    let from = 0;
    const step = 1000;
    let fetchMore = true;

    while (fetchMore) {
        const { data, error } = await _supabase.from(table).select(selectQuery).range(from, from + step - 1);
        if (error) throw error;
        allData = allData.concat(data);
        if (data.length < step) fetchMore = false;
        else from += step;
    }
    return { data: allData };
}

async function loadDataFromSupabase() {
    if (!_supabase) {
        console.warn("Supabase not initialized. Skipping cloud sync.");
        window.updateSyncStatus('error', 'Mode Hors-ligne');
        return;
    }
    try {
        window.updateSyncStatus('syncing');
        console.log("Fetching configuration from Supabase...");

        // Fetch small config tables and global counts
        const [pharms, counters, returns, totalMeds, totalPats, totalTrans, totalDisps, totalExpired, totalLow] = await Promise.all([
            _supabase.from('pharmacies').select('*'),
            _supabase.from('app_counters').select('*'),
            _supabase.from('return_requests').select('*').eq('status', 'PENDING').order('id', { ascending: false }).limit(100),
            _supabase.from('medicines').select('id', { count: 'exact', head: true }),
            _supabase.from('patients').select('id', { count: 'exact', head: true }),
            _supabase.from('transfers').select('id', { count: 'exact', head: true }),
            _supabase.from('dispensations').select('id', { count: 'exact', head: true }),
            _supabase.from('medicines').select('id', { count: 'exact', head: true }).lt('expiry_date', new Date().toISOString().split('T')[0]),
            _supabase.from('medicines').select('id', { count: 'exact', head: true }).lt('qty', 50)
        ]);

        // SCALABILITY: Get real sums for the dashboard using RPC if possible
        let sumMeds = 0;
        const { data: rpcSum, error: rpcErr } = await _supabase.rpc('get_total_stock');

        if (!rpcErr && rpcSum !== null) {
            sumMeds = parseInt(rpcSum);
        } else {
            // Fallback: Fetch ONLY the qty column (minimizes network payload)
            const { data: medQtyData } = await _supabase.from('medicines').select('qty');
            sumMeds = (medQtyData || []).reduce((acc, m) => {
                const q = parseInt(m.qty);
                return acc + (isNaN(q) ? 0 : q);
            }, 0);
        }

        // Update state statistics
        state.stats = {
            totalMeds: sumMeds,
            totalTypes: totalMeds.count || 0,
            totalPatients: totalPats.count || 0,
            totalDistributions: totalTrans.count || 0,
            totalDispensations: totalDisps.count || 0,
            totalExpired: totalExpired.count || 0,
            totalLowStock: totalLow.count || 0
        };

        // Map Pharmacies
        if (pharms.data) {
            pharms.data.forEach(p => {
                const existing = state.pharmacies[p.id] || {};
                state.pharmacies[p.id] = {
                    ...existing,
                    id: p.id,
                    name: { ar: p.name_ar || '', fr: p.name_fr || '' },
                    color: p.color || '#047857',
                    // Preserve patients and stock if they already exist to avoid UI flicker/disappearance
                    patients: existing.patients || 0,
                    stock: existing.stock || []
                };
            });
        }

        // Map Counters
        if (counters.data) {
            counters.data.forEach(c => {
                if (c.id === 'delivery') state.counters.delivery = c.value;
                if (c.id === 'order') state.counters.order = c.value;
                if (c.id === 'dispense') state.counters.dispense = c.value;
            });
        }

        // SCALABILITY: Fetch pharmacy activity stats (patient counts and percentages)
        // RPC is now mandatory to prevent N sequential requests
        const { data: activityData } = await _supabase.rpc('get_pharmacy_stats');

        if (activityData) {
            activityData.forEach(row => {
                if (state.pharmacies[row.pharmacy_id]) {
                    state.pharmacies[row.pharmacy_id].patients = row.patient_count;
                    state.pharmacies[row.pharmacy_id].percent = Math.min(100, Math.floor(row.activity_percent));
                }
            });
        }

        // Map Pending Returns — normaliser snake_case → camelCase
        const mapReturn = r => ({
            id: r.id,
            pharmacyId: r.pharmacy_id,
            medId: r.medicine_id,
            medName: r.med_name,
            qty: r.qty,
            workerName: r.worker_name,
            status: r.status,
            date: r.created_at
        });
        state.pendingReturns = (returns.data || []).map(mapReturn);

        // Charger aussi l'historique (APPROVED + REJECTED) pour la vue admin_returns
        const { data: allReturnsData } = await _supabase
            .from('return_requests').select('*')
            .neq('status', 'PENDING')
            .order('id', { ascending: false })
            .limit(200);
        state.allReturns = (allReturnsData || []).map(mapReturn);

        // Fetch recent transfers for dashboard
        const { data: recentTrans } = await _supabase.from('transfers').select('*').order('date', { ascending: false }).limit(6);
        state.transfers = recentTrans ? recentTrans.map(t => ({
            id: t.id, date: t.date.split('T')[0], medName: t.medicine_name,
            qty: t.qty, toPharmacy: t.to_pharmacy_id, isReturn: t.is_return,
            dispensedBy: t.dispensed_by
        })) : [];

        // Fetch pending orders (OPTIMIZED: Only fetch PENDING to avoid massive payloads)
        const { data: pendingOrds } = await _supabase.from('orders').select('*').eq('status', 'PENDING');
        state.orders = pendingOrds || [];

        window.updateSidebarPharmacies();
        window.updateSyncStatus('success');
    } catch (err) {
        console.error("Supabase Load Error:", err);
        window.updateSyncStatus('error', 'Erreur de chargement');
    }
}

// Optimistic State Update Helper
// Debounce timer: collapses multiple rapid central_stock_change calls into one reload
let _stockReloadTimer = null;

window.optimisticUpdate = function (action, payload = {}) {
    if (!state.stats) return;

    switch (action) {
        case 'order_added':
            state.counters.order = (state.counters.order || 0) + 1;
            state.orders.push({
                id: payload.id,
                date: new Date().toISOString(),
                pharmacy_id: payload.pharmId,
                worker_name: payload.workerName,
                status: 'PENDING',
                items: payload.items
            });
            break;
        case 'order_processed':
            state.orders = state.orders.filter(o => o.id !== payload.id);
            if (state.counters.order > 0) state.counters.order -= 1;
            break;
        case 'patient_deleted':
            state.stats.totalPatients = Math.max(0, (state.stats.totalPatients || 0) - 1);
            break;
        case 'patient_added':
            state.stats.totalPatients = (state.stats.totalPatients || 0) + 1;
            break;
        case 'dispense_pharmacy':
            state.stats.totalDispensations = (state.stats.totalDispensations || 0) + 1;
            state.counters.dispense = (state.counters.dispense || 0) + 1;
            break;
        case 'return_pending':
            state.pendingReturns.unshift(payload);
            break;
        case 'return_approved':
            state.pendingReturns = state.pendingReturns.filter(r => r.id !== payload.id);
            state.stats.totalMeds += payload.qty; // Returns to central stock
            break;
        case 'transfer_added':
            state.stats.totalDistributions = (state.stats.totalDistributions || 0) + 1;
            state.transfers.unshift(payload);
            if (state.transfers.length > 6) state.transfers.pop();
            break;
        case 'central_stock_change':
            // Debounced: multiple rapid calls within 400ms collapse into a single reload
            clearTimeout(_stockReloadTimer);
            _stockReloadTimer = setTimeout(() => {
                loadDataFromSupabase().then(() => {
                    if (typeof activeView !== 'undefined' && activeView === 'dashboard') {
                        window.renderView('dashboard');
                    }
                });
            }, 400);
            return;
    }

    window.updateSidebarPharmacies();
    // Refresh dashboard instantly if active
    if (typeof activeView !== 'undefined' && activeView === 'dashboard') {
        window.renderView('dashboard');
    }
};



// PATCH MARKER START - BULLETPROOF importPharmacyStock
window.importPharmacyStock = async function (event, pharmId) {
    const file = event.target.files[0];
    if (!file) return;

    const confirmClear = await window.showCustomDialog({
        title: currentLang === "ar" ? "تأكيد عملية الاستيراد" : "Confirmation d'importation",
        msg: currentLang === "ar" ? "سيتم تحديث كميات الأدوية في هذه الصيدلية. هل أنت متأكد؟" : "Le stock de cette pharmacie sera mis à jour. Continuer ?",
        type: "confirm",
        icon: "fa-file-import"
    });
    if (!confirmClear) { event.target.value = ""; return; }

    window.showToast("Analyse du fichier...", "info");
    const reader = new FileReader();
    reader.onload = async function (evt) {
        try {
            const data = evt.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.SheetNames[0];
            const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { header: 1, defval: '' });

            if (rawRows.length === 0) { window.showToast("Fichier vide.", "error"); return; }

            let nameIdx = -1, batchIdx = -1, qtyIdx = -1, expIdx = -1, startIndex = 0;
            const firstRow = rawRows[0];
            for (let i = 0; i < firstRow.length; i++) {
                let v = String(firstRow[i] || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (v.includes('nom') || v.includes('name') || v.includes('article') || v.includes('اسم') || v.includes('دواء')) nameIdx = i;
                else if (v.includes('lot') || v.includes('batch') || v.includes('تشغيل') || v.includes('لوت')) batchIdx = i;
                else if (v === 'qty' || v === 'qte' || v === 'quantite' || v.includes('كمية') || (v.includes('stock') && !v.includes('central'))) qtyIdx = i;
                else if (v.includes('exp') || v.includes('perem') || v.includes('صلاحية')) expIdx = i;
            }
            if (nameIdx !== -1) startIndex = 1; else nameIdx = 0;
            if (batchIdx === -1) batchIdx = 1;
            if (qtyIdx === -1) qtyIdx = 2;
            if (expIdx === -1) expIdx = 3;

            const processedRows = [];
            for (let i = startIndex; i < rawRows.length; i++) {
                const r = rawRows[i];
                if (!r || !r[nameIdx]) continue;
                const name = String(r[nameIdx]).trim();
                const batch = String(r[batchIdx] || '').trim() || 'N/A';
                const qty = parseInt(r[qtyIdx]) || 0;
                const expiry = window.cleanDateForImport(r[expIdx]);
                if (name) processedRows.push({ name, batch, expiry, qty });
            }

            if (processedRows.length === 0) { throw new Error("Aucun médicament trouvé dans le fichier."); }

            window.updateSyncStatus('syncing', 'Mise à jour DB...');

            // Step 1: Ensure medicines exist (Upsert based on Name + Batch)
            const { data: existingMeds } = await _supabase.from('medicines').select('id, name, batch');
            const medMap = {};
            (existingMeds || []).forEach(m => {
                const key = `${m.name.toLowerCase()}|${m.batch.toLowerCase()}`;
                medMap[key] = m.id;
            });

            const newMeds = [];
            const { data: maxIdRow } = await _supabase.from('medicines').select('id').order('id', { ascending: false }).limit(1).maybeSingle();
            let nextId = maxIdRow ? (parseInt(maxIdRow.id) + 1) : 1000;

            const processedUnique = [];
            const seen = new Set();
            processedRows.forEach(r => {
                const key = `${r.name.toLowerCase()}|${r.batch.toLowerCase()}`;
                if (!seen.has(key)) {
                    processedUnique.push(r);
                    seen.add(key);
                }
            });

            processedUnique.forEach(m => {
                const key = `${m.name.toLowerCase()}|${m.batch.toLowerCase()}`;
                if (!medMap[key]) {
                    newMeds.push({
                        id: nextId++,
                        name: m.name,
                        batch: m.batch,
                        expiry_date: m.expiry,
                        qty: 0,
                        entry_date: new Date().toISOString().split('T')[0]
                    });
                }
            });

            if (newMeds.length > 0) {
                const { data: inserted, error: insErr } = await _supabase.from('medicines').insert(newMeds).select();
                if (insErr) throw insErr;
                inserted.forEach(m => {
                    const key = `${m.name.toLowerCase()}|${m.batch.toLowerCase()}`;
                    medMap[key] = m.id;
                });
            }

            // Step 2: Update Stock (Additive / Merge)
            // CRITICAL FIX: We NO LONGER delete all stock before import.
            // This preserves distributions from Central Stock that might not be in the Excel file.

            const stockUpserts = processedRows.map(row => {
                const key = `${row.name.toLowerCase()}|${row.batch.toLowerCase()}`;
                const medId = medMap[key];
                if (!medId) return null;
                return { pharmacy_id: pharmId, medicine_id: medId, qty: row.qty };
            }).filter(u => u !== null);

            for (let i = 0; i < stockUpserts.length; i += 500) {
                const chunk = stockUpserts.slice(i, i + 500);
                const { error: upsertErr } = await _supabase.from('pharmacy_stock').upsert(chunk, { onConflict: 'pharmacy_id,medicine_id' });
                if (upsertErr) console.error("Chunk failed:", upsertErr);
            }

            window.showToast(currentLang === 'ar' ? 'تم الاستيراد بنجاح' : "Importation terminée !");
            window.optimisticUpdate('central_stock_change');
            window.invalidatePharmacyStockCache(pharmId);
            await window.renderPharmacy(pharmId, 'all');
        } catch (err) {
            console.error("Critical Import Error:", err);
            window.showCustomDialog({ title: "Erreur d'importation", msg: err.message, icon: "fa-circle-xmark" });
            window.updateSyncStatus('error');
        }
    };
    reader.readAsBinaryString(file);
};

// =============================================
// COUNTER LOGIC
// =============================================
window.getNextCounterValue = async function (type) {
    try {
        const { data, error } = await _supabase
            .from('app_counters')
            .select('value')
            .eq('id', type)
            .single();

        if (error) throw error;

        const newValue = (data.value || 0) + 1;

        const { error: updateError } = await _supabase
            .from('app_counters')
            .update({ value: newValue, updated_at: new Date().toISOString() })
            .eq('id', type);

        if (updateError) throw updateError;

        // Update local state
        state.counters[type] = newValue;

        let prefix = 'TRN';
        if (type === 'delivery') prefix = 'BL';
        if (type === 'order') prefix = 'BC';
        if (type === 'dispense') prefix = 'PR';

        return `${prefix}-${newValue.toString().padStart(6, '0')}`;
    } catch (err) {
        console.error("Counter error:", err);
        let fallbackPrefix = 'TRN-';
        if (type === 'order') fallbackPrefix = 'CMD-';
        if (type === 'dispense') fallbackPrefix = 'PR-';
        return fallbackPrefix + new Date().getTime().toString().slice(-6);
    }
};

window.resetCounters = async function () {
    const confirm = await window.showCustomDialog({
        title: "Réinitialisation",
        msg: "Voulez-vous vraiment remettre les compteurs à ZERO (0001) ?",
        type: 'confirm',
        icon: 'fa-rotate'
    });

    if (confirm) {
        try {
            await _supabase.from('app_counters').update({ value: 0 }).in('id', ['delivery', 'order', 'dispense']);
            window.optimisticUpdate('central_stock_change');
            window.showToast("Compteurs réinitialisés à 0");
        } catch (err) {
            console.error(err);
            window.showToast("Erreur lors de la réinitialisation", "error");
        }
    }
};

window.migrateLocalData = async function () {
    const localData = localStorage.getItem('pharmacy_inventory_state');
    if (!localData) {
        window.showToast("Aucune donnée locale à migrer.", "info");
        return;
    }
    const localState = JSON.parse(localData);
    window.showToast("Migration en cours... Patientez.", "info");

    try {
        // 0. Migrate Medicines (This was missing!)
        if (localState.medicines && localState.medicines.length > 0) {
            const meds = localState.medicines.map(m => {
                let eDate = m.entryDate || m.entry_date;
                let expDate = m.expiry || m.expiry_date;
                if (!eDate || eDate === '-' || eDate === '') eDate = null;
                if (!expDate || expDate === '-' || expDate === '') expDate = null;
                return {
                    id: m.id, name: m.name || 'Inconnu', batch: m.batch || '-', qty: parseInt(m.qty) || 0,
                    entry_date: eDate, expiry_date: expDate
                };
            });
            // Chunking to be safe if there are too many meds
            for (let i = 0; i < meds.length; i += 1000) {
                const res = await _supabase.from('medicines').upsert(meds.slice(i, i + 1000));
                if (res.error) {
                    console.error("Migration error meds:", res.error);
                }
            }
        }

        // 1. Migrate Patients
        if (localState.patients && localState.patients.length > 0) {
            const pats = localState.patients.map(p => ({
                id: p.id, name: p.name, national_id: p.nationalId, phone: p.phone, hospital: p.hospital
            }));
            for (let i = 0; i < pats.length; i += 1000) {
                await _supabase.from('patients').upsert(pats.slice(i, i + 1000));
            }
        }

        // 2. Migrate Transfers
        if (localState.transfers && localState.transfers.length > 0) {
            const trans = localState.transfers.map(t => ({
                id: t.id, date: t.date, medicine_id: t.medId, medicine_name: t.medName,
                qty: t.qty, to_pharmacy_id: t.toPharmacy, is_return: !!t.isReturn, dispensed_by: t.dispensedBy || 'System'
            }));
            for (let i = 0; i < trans.length; i += 1000) {
                await _supabase.from('transfers').upsert(trans.slice(i, i + 1000));
            }
        }

        // 3. Migrate Dispensations
        if (localState.dispensations && localState.dispensations.length > 0) {
            const disps = localState.dispensations.map(d => ({
                id: d.id, date: d.date, patient_name: d.patientName,
                medicine_name: d.medName, qty: d.qty, pharmacy_id: d.pharmacyId, dispensed_by: d.dispensedBy
            }));
            for (let i = 0; i < disps.length; i += 1000) {
                await _supabase.from('dispensations').upsert(disps.slice(i, i + 1000));
            }
        }

        // 4. Migrate Orders
        if (localState.orders && localState.orders.length > 0) {
            const ords = localState.orders.map(o => ({
                id: o.id, date: o.date, pharmacy_id: o.pharmacyId,
                worker_name: o.workerName, status: o.status, items: o.items
            }));
            for (let i = 0; i < ords.length; i += 1000) {
                await _supabase.from('orders').upsert(ords.slice(i, i + 1000));
            }
        }

        // 5. Migrate Pharmacy Stocks
        for (let pid in localState.pharmacies) {
            const p = localState.pharmacies[pid];
            if (p.stock && p.stock.length > 0) {
                const stocks = p.stock.map(s => ({
                    pharmacy_id: parseInt(pid), medicine_id: s.id, qty: s.qty
                }));
                for (let i = 0; i < stocks.length; i += 1000) {
                    await _supabase.from('pharmacy_stock').upsert(stocks.slice(i, i + 1000), { onConflict: 'pharmacy_id,medicine_id' });
                }
            }
        }
        // 6. Migrate Users (Accounts)
        let localUsers = localState.users || localState.userDatabase || JSON.parse(localStorage.getItem('user_database') || '{}');
        const usersToMigrate = [];

        // Handle both Array and Object formats for legacy data
        if (Array.isArray(localUsers)) {
            localUsers.forEach(u => {
                if (u.email) {
                    usersToMigrate.push({
                        email: u.email.toLowerCase().trim(),
                        password: u.pass || u.password || '123456',
                        role: u.role || 'pharmacy',
                        name_fr: (u.name && u.name.fr) || u.name_fr || u.name || '-',
                        name_ar: (u.name && u.name.ar) || u.name_ar || u.name || '-',
                        pharmacy_id: u.pharmacyId || u.pharmacy_id || null
                    });
                }
            });
        } else if (typeof localUsers === 'object') {
            Object.keys(localUsers).forEach(email => {
                const u = localUsers[email];
                usersToMigrate.push({
                    email: email.toLowerCase().trim(),
                    password: u.pass || u.password || '123456',
                    role: u.role || 'pharmacy',
                    name_fr: (u.name && u.name.fr) || u.name_fr || u.name || '-',
                    name_ar: (u.name && u.name.ar) || u.name_ar || u.name || '-',
                    pharmacy_id: u.pharmacyId || u.pharmacy_id || null
                });
            });
        }

        if (usersToMigrate.length > 0) {
            console.log("Migrating users:", usersToMigrate.length);
            await _supabase.from('users').upsert(usersToMigrate, { onConflict: 'email' });
            await syncUsers();
        }

        window.showToast(currentLang === 'ar' ? "تم ترحيل البيانات والحسابات بنجاح !" : "Migration terminée avec succès !");
        window.optimisticUpdate('central_stock_change');
    } catch (err) {
        console.error("Migration error:", err);
        window.showToast("Erreur pendant la migration.", "error");
    }
}

window.downloadLocalBackup = async function () {
    const localData = localStorage.getItem('pharmacy_inventory_state');
    if (!localData) {
        await window.showCustomDialog({ title: "Données Locales", msg: "Aucune donnée locale trouvée.", icon: "fa-folder-open" });
        return;
    }
    const blob = new Blob([localData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_stock_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

async function saveState() {
    // Note: Local storage is kept as temporary backup
    localStorage.setItem('pharmacy_inventory_state', JSON.stringify(state));
    // For specific mutations, we should use atomic Supabase calls. 
    // I will refactor mutation functions to call _supabase directly.
}

window.exportCentralStockToExcel = async function () {
    window.showToast("Préparation du fichier Excel...", "info");

    const { data: meds, error } = await _supabase.rpc('get_all_medicines');

    if (error || !meds || meds.length === 0) {
        window.showToast(currentLang === 'ar' ? 'المخزون فارغ أو حدث خطأ.' : 'Le stock est vide ou une erreur est survenue.', 'error');
        return;
    }

    const dataToExport = meds.map(m => {
        let statusText = currentLang === 'ar' ? 'جيد' : 'Bon';
        if (m.qty === 0) statusText = currentLang === 'ar' ? 'نافذ' : 'Rupture';
        else if (m.qty < 50) statusText = currentLang === 'ar' ? 'ضعيف' : 'Faible';

        return {
            "ID (Système)": m.id,
            [currentLang === 'ar' ? 'الدواء' : 'Médicament']: m.name,
            [currentLang === 'ar' ? 'رقم الحصة' : 'Lot']: m.batch || '-',
            [currentLang === 'ar' ? 'الكمية' : 'Quantité']: m.qty,
            [currentLang === 'ar' ? 'سعر الشراء' : 'Prix d\'achat']: m.price || 0,
            [currentLang === 'ar' ? 'تاريخ الدخول' : 'Date d\'entrée']: m.entry_date || '-',
            [currentLang === 'ar' ? 'تاريخ الانتهاء' : 'Date d\'expiration']: m.expiry_date || '-',
            [currentLang === 'ar' ? 'الحالة' : 'Statut']: statusText
        };
    });

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, currentLang === 'ar' ? "المخزون" : "Stock Central");

    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Stock_Central_${dateStr}.xlsx`);
    window.showToast(currentLang === 'ar' ? 'تم تصدير ملف Excel بنجاح!' : "Export Excel réussi !");
};

window.exportPharmacyStockToExcel = async function (pharmId) {
    window.showToast("Préparation du fichier Excel...", "info");
    const pharmName = state.pharmacies[pharmId]?.name?.fr || ('Pharmacie_' + pharmId);

    const { data, error } = await _supabase
        .from('pharmacy_stock')
        .select('qty, medicines(name, batch, expiry_date, entry_date, price)')
        .eq('pharmacy_id', pharmId)
        .gt('qty', 0);

    if (data) data.sort((a, b) => (a.medicines?.name || '').localeCompare(b.medicines?.name || ''));

    if (error || !data || data.length === 0) {
        window.showToast('Stock vide ou erreur.', 'error');
        return;
    }

    const dateStr = new Date().toISOString().split('T')[0];
    const dataToExport = data.map(row => {
        const m = row.medicines || {};
        const qty = row.qty;
        return {
            'Médicament': m.name || '-',
            'Lot': m.batch || '-',
            'Quantité': qty,
            'Statut': qty === 0 ? 'Rupture' : qty < 50 ? 'Faible' : 'Bon',
            'Date d\'expiration': m.expiry_date ? m.expiry_date.substring(0, 10) : '-',
            'Date d\'entrée': m.entry_date ? m.entry_date.substring(0, 10) : '-'
        };
    });

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    ws['!cols'] = [{ wch: 35 }, { wch: 15 }, { wch: 10 }, { wch: 12 }, { wch: 18 }, { wch: 14 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Stock');
    XLSX.writeFile(wb, `Stock_${pharmName.replace(/\s+/g, '_')}_${dateStr}.xlsx`);
    window.showToast('Export Excel réussi !');
};

const viewContainer = document.getElementById('view-container');
const pageTitle = document.getElementById('page-title');
const navButtons = document.querySelectorAll('.nav-btn');
const addMedModal = document.getElementById('add-medicine-modal');
const addMedForm = document.getElementById('add-medicine-form');

document.addEventListener('DOMContentLoaded', () => {
    const d = new Date();
    document.getElementById('date-display').innerText = d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Login Logic - Load saved email if available
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const savedEmail = localStorage.getItem('pharmacy_saved_email');
        if (savedEmail) {
            document.getElementById('login-user').value = savedEmail;
        }
    }
    // Check Auto-Login Session immediately
    const performAutoLogin = async () => {
        if (typeof _supabase !== 'undefined') {
            const loginBtn = document.querySelector('#login-form button[type="submit"]');
            if (loginBtn) { loginBtn.disabled = true; loginBtn.innerText = 'Chargement...'; }

            try {
                const { data: { session } } = await _supabase.auth.getSession();
                if (session && session.user) {
                    const email = session.user.email;
                    const { data: userData } = await _supabase.from('users').select('id, email, role, pharmacy_id, name_ar, name_fr').eq('email', email).maybeSingle();
                    if (userData) {
                        let forcedRole = userData.role;
                        if (userData.email.toLowerCase().trim() === 'stock@masef.com') forcedRole = 'manager';
                        if (userData.email.toLowerCase().trim() === 'admin@masef.com') forcedRole = 'admin';
                        await window.syncUsers(); // Sync all users first
                        currentUser = window.userDatabase[email];
                        currentUserEmail = email;
                        document.getElementById('login-screen').style.display = 'none';
                        document.getElementById('main-app').style.display = 'flex';
                        await window.performLoginSuccess();
                        return; // Auto-login successful
                    }
                }
            } catch (e) {
                console.error("Auto-login failed:", e);
            }

            // If we reach here, auto-login didn't happen (no session or error)
            if (loginBtn) { loginBtn.disabled = false; loginBtn.innerText = currentLang === 'ar' ? 'تسجيل الدخول' : 'Connexion'; }
        }
    };
    performAutoLogin();

}); // END of DOMContentLoaded

// =============================================
// attemptLogin & performLoginSuccess
// =============================================
window.performLoginSuccess = async function () {
    await loadDataFromSupabase();

    document.querySelectorAll('.nav-btn, .nav-group-title, .nav-divider').forEach(el => {
        if (el.hasAttribute('data-pharmacy-only')) {
            if (currentUser.role === 'pharmacy') {
                el.style.display = el.classList.contains('nav-btn') ? 'flex' : 'block';
            } else {
                el.style.display = 'none';
            }
        } else if (el.classList.contains('nav-btn')) {
            const view = el.dataset.view;
            if (currentUser.role === 'pharmacy') {
                if (view === 'dashboard' || view === 'my_register' || (el.dataset.pharmacyId && parseInt(el.dataset.pharmacyId) === currentUser.pharmacyId)) {
                    el.style.display = 'flex';
                } else {
                    el.style.display = 'none';
                }
            } else {
                if (view === 'my_register') {
                    el.style.display = 'none';
                } else if ((view === 'manage_pharmacies' || view === 'users' || view === 'analytical_reports' || view === 'admin_decharges' || view === 'patients' || view === 'records' || view === 'reports') && currentUser.role === 'manager') {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'flex';
                }
            }
        } else if (el.classList.contains('nav-divider') && !el.hasAttribute('data-pharmacy-only')) {
            if (currentUser.role === 'pharmacy' && el.previousElementSibling && el.previousElementSibling.dataset.view === 'reports') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        }
    });

    if (currentUser.role === 'admin' || currentUser.role === 'manager') {
        window.renderView('dashboard');
    } else {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const pBtn = document.querySelector(`.nav-btn[data-pharmacy-id="${currentUser.pharmacyId}"]`);
        if (pBtn) pBtn.classList.add('active');
        window.renderPharmacy(currentUser.pharmacyId);
    }
    window.setLang('fr');
    window.updateSidebarPharmacies();
};

window.attemptLogin = async function () {
    try {
        console.log("Login Attempted!");

        const loginBtn = document.querySelector('#login-form button[type="submit"]');
        if (loginBtn) { loginBtn.disabled = true; loginBtn.innerText = 'Vérification...'; }

        // Try to sync users from Supabase, but fall back to hardcoded users if unavailable
        if (_supabase) {
            try {
                await syncUsers();
            } catch (syncErr) {
                console.warn("syncUsers failed, using local credentials:", syncErr);
            }
        } else {
            console.warn("Supabase not available - using hardcoded credentials only.");
        }

        if (loginBtn) { loginBtn.disabled = false; loginBtn.innerText = t('login_btn') || 'Connexion'; }

        window.showToast("Vérification en cours...", "success");

        let email = document.getElementById('login-user').value.toLowerCase().trim();
        const pass = document.getElementById('login-pass').value;

        if (!email.includes('@')) {
            email = email + '@masef.com'; // Auto completion fallback
        }

        if (!email.endsWith('@masef.com')) {
            document.getElementById('login-error').innerText = 'L\'adresse email doit se terminer par @masef.com';
            document.getElementById('login-error').style.display = 'block';
            return;
        }

        const { data: authData, error: authError } = await _supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        });

        if (authError || !authData.user) {
            document.getElementById('login-error').innerText = currentLang === 'ar' ? 'البريد أو كلمة المرور غير صحيحة' : 'Email ou mot de passe incorrect';
            document.getElementById('login-error').style.display = 'block';
            return;
        }

        // Ensure user metadata is loaded
        if (!window.userDatabase[email]) {
            const { data: userData } = await _supabase.from('users').select('id, email, role, pharmacy_id, name_ar, name_fr').eq('email', email).maybeSingle();
            if (userData) {
                let forcedRole = userData.role;
                if (userData.email.toLowerCase().trim() === 'stock@masef.com') forcedRole = 'manager';
                if (userData.email.toLowerCase().trim() === 'admin@masef.com') forcedRole = 'admin';
                window.userDatabase[email] = {
                    id: userData.id,
                    role: forcedRole,
                    pharmacyId: userData.pharmacy_id,
                    name: { ar: userData.name_ar, fr: userData.name_fr }
                };
            } else {
                document.getElementById('login-error').innerText = 'Profil introuvable.';
                document.getElementById('login-error').style.display = 'block';
                return;
            }
        }

        // Save the email
        localStorage.setItem('pharmacy_saved_email', email);

        console.log("Logged in as:", email, "Role:", window.userDatabase[email].role);
        currentUser = window.userDatabase[email];
        currentUserEmail = email;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';

        await window.performLoginSuccess();
    } catch (err) {
        console.error("Critical Login Error:", err);
        await window.showCustomDialog({ title: "Erreur de Connexion", msg: "Erreur Interne: " + err.message, icon: "fa-circle-xclamation" });
    }
};

window.logout = async function () {
    if (_supabase) {
        await _supabase.auth.signOut();
    }
    // Clear everything and reload to ensure a fresh state
    localStorage.removeItem('pharmacy_saved_email'); // Optional: force re-entry of email if desired
    window.location.reload();
};
document.addEventListener('DOMContentLoaded', () => {
    navButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            navButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const view = e.currentTarget.dataset.view;
            if (view && view.startsWith('pharmacy-')) {
                await window.renderPharmacy(e.currentTarget.dataset.pharmacyId, 'all');
            } else if (view === 'pharm-inbox' || view === 'pharm-order' || view === 'pharm-dispense') {
                await window.renderPharmacy(currentUser.pharmacyId, view);
            } else if (view === 'dashboard' && currentUser && currentUser.role === 'pharmacy') {
                await window.renderPharmacy(currentUser.pharmacyId, 'all');
            } else if (view) {
                window.renderView(view);
            }
        });
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        });
    });

    addMedForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('med-name').value;
        const batch = document.getElementById('med-batch').value;
        const qty = parseInt(document.getElementById('med-qty').value);
        const entryDate = document.getElementById('med-entry').value;
        const expiry = document.getElementById('med-expiry').value;
        const price = parseFloat(document.getElementById('med-price').value) || 0;

        const isEditId = document.getElementById('add-medicine-form').dataset.editId;
        const medData = {
            name, batch, qty, price,
            entry_date: (entryDate && entryDate !== '-') ? entryDate : null,
            expiry_date: (expiry && expiry !== '-') ? expiry : null
        };

        try {
            if (isEditId) {
                const { error } = await _supabase.from('medicines').update(medData).eq('id', isEditId);
                if (error) throw error;
            } else {
                // Let Postgres generate the ID using SERIAL/IDENTITY

                const { error } = await _supabase.from('medicines').insert([medData]);
                if (error) throw error;
            }

            window.optimisticUpdate('central_stock_change'); // Reload global state
            showToast("Médicament enregistré avec succès");

            addMedModal.classList.remove('active');
            addMedForm.reset();
            document.getElementById('add-medicine-form').removeAttribute('data-edit-id');
            window.renderView('central');
        } catch (err) {
            console.error("Error saving medicine:", err);
        }
    });

    // 2. Recovery Form Listener
    const recoveryForm = document.getElementById('recovery-form');
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const recovEmail = document.getElementById('recov-email').value.trim();
            const recovPhone = document.getElementById('recov-phone').value.trim();

            if (!currentUserEmail) {
                await window.showCustomDialog({ title: "Session Expirée", msg: "Erreur de session. Veuillez vous reconnecter.", icon: "fa-user-lock" });
                return;
            }
            const loginEmail = currentUserEmail;

            try {
                // Table user_security should have columns: login_email (primary), recovery_email, recovery_phone
                const { error } = await _supabase.from('user_security').upsert({
                    login_email: loginEmail,
                    recovery_email: recovEmail,
                    recovery_phone: recovPhone
                }, { onConflict: 'login_email' });

                if (error) {
                    console.error("Erreur de sauvegarde de sécurité:", error);
                    let errDetails = error.message;
                    if (error.code === '42P01') errDetails = "La table 'user_security' n'existe pas.";
                    if (error.code === '42501') errDetails = "Accès refusé. Veuillez désactiver le 'Row Level Security' (RLS) pour cette table dans Supabase.";
                    await window.showCustomDialog({ title: "Erreur Supabase", msg: errDetails, icon: "fa-database" });
                    showToast("Action requise: Assurez-vous que la table 'user_security' est bien créée et RLS désactivé.", "error");
                } else {
                    showToast(currentLang === 'ar' ? 'تم حفظ معلومات الأمان' : "Infos de sécurité enregistrées");
                    document.getElementById('recovery-modal').classList.remove('active');
                }
            } catch (err) {
                console.error(err);
                showToast("Erreur serveur", "error");
            }
        });
    }

    window.forgotPassword = async function () {
        const email = await window.showCustomDialog({
            title: currentLang === 'ar' ? 'استعادة الحساب' : 'Récupération',
            msg: currentLang === 'ar' ? 'أدخل إيميل الدخول الخاص بك:' : 'Entrez votre email de connexion :',
            type: 'prompt',
            icon: 'fa-user-lock'
        });
        if (!email) return;

        try {
            const { data, error } = await _supabase.from('user_security').select('recovery_email, recovery_phone').eq('login_email', email.toLowerCase().trim()).single();
            if (error || !data) {
                window.showCustomDialog({
                    title: "Oups",
                    msg: currentLang === 'ar' ? 'لم يتم العثور على معلومات استرجاع لهذا الحساب.' : 'Aucune information de récupération trouvée.',
                    icon: 'fa-circle-exclamation'
                });
            } else {
                const mask = (str) => {
                    if (!str) return '---';
                    const parts = str.split('@');
                    if (parts.length === 2) return parts[0].substring(0, 2) + '***@' + parts[1];
                    return str.substring(0, 4) + '****';
                };
                window.showCustomDialog({
                    title: currentLang === 'ar' ? 'معلومات الاستعادة' : 'Infos Récupération',
                    msg: (currentLang === 'ar' ? 'الإيميل:' : 'Email:') + ' ' + mask(data.recovery_email) + '\n' + (currentLang === 'ar' ? 'الهاتف:' : 'Tél:') + ' ' + mask(data.recovery_phone),
                    icon: 'fa-user-shield'
                });
            }
        } catch (err) { console.error(err); }
    };

    window.openRecoveryModal = async function () {
        if (!currentUser) return;
        document.getElementById('recovery-modal').classList.add('active');

        // Try to pre-load existing data
        const loginEmail = Object.keys(userDatabase).find(k => userDatabase[k] === currentUser);
        const { data } = await _supabase.from('user_security').select('recovery_email, recovery_phone').eq('login_email', loginEmail).single();
        if (data) {
            document.getElementById('recov-email').value = data.recovery_email || '';
            document.getElementById('recov-phone').value = data.recovery_phone || '';
        }
    };

    window.setLang('fr');
}); // END of second DOMContentLoaded

// Unified changePage: handles both generic views and pharmacy-specific views
window.changePage = function (view, page) {
    if (!pagination[view]) return;
    pagination[view].currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Pharmacy-specific pagination needs renderPharmacy, not renderView
    if ((view.startsWith('pharmacy_') || view.startsWith('history_') || view === 'dispensations') && window.activePharmacyId) {
        window.renderPharmacy(window.activePharmacyId, window.activeSubView || 'all');
    } else if (view === 'analytical_global' || view === 'analytical_pharm') {
        window.renderView('analytical_reports');
    } else {
        window.renderView(view);
    }
};

function renderPaginationControls(view, totalItems) {
    const p = pagination[view];
    if (!p) return '';
    const total = (totalItems !== undefined) ? totalItems : (p.total || 0);
    const totalPages = Math.ceil(total / p.pageSize);
    if (totalPages <= 1) return '';

    let buttons = '';
    const start = Math.max(1, p.currentPage - 2);
    const end = Math.min(totalPages, p.currentPage + 2);

    if (p.currentPage > 1) {
        buttons += `<button class="pagination-btn" onclick="window.changePage('${view}', ${p.currentPage - 1})"><i class="fa-solid fa-chevron-left"></i> Précédent</button>`;
    }

    for (let i = start; i <= end; i++) {
        buttons += `<button class="pagination-btn ${i === p.currentPage ? 'active' : ''}" onclick="window.changePage('${view}', ${i})">${i}</button>`;
    }

    if (p.currentPage < totalPages) {
        buttons += `<button class="pagination-btn" onclick="window.changePage('${view}', ${p.currentPage + 1})">Suivant <i class="fa-solid fa-chevron-right"></i></button>`;
    }

    const currentStart = total === 0 ? 0 : (p.currentPage - 1) * p.pageSize + 1;
    const currentEnd = Math.min(p.currentPage * p.pageSize, total);

    return `
        <div class="pagination-container">
            <div class="pagination-info">Affichage de ${currentStart} à ${currentEnd} sur ${total}</div>
            <div class="pagination-buttons">${buttons}</div>
        </div>
    `;
}

window.renderView = async function (viewName) {
    activeView = viewName;
    const viewContainer = document.getElementById('view-container');
    const pageTitle = document.getElementById('page-title');

    let content = `
        <!-- Orphan Repair Tool (Global for Admin) -->
        ${(currentUser && currentUser.role === 'admin') ? `
        <div id="orphan-repair-container" style="display:none; margin-bottom: 20px; padding: 20px; background: #fff1f2; border: 2px dashed #f43f5e; border-radius: 12px;">
            <h3 style="color: #be123c; margin-top: 0;"><i class="fa-solid fa-microscope"></i> أداة إصلاح الأدوية المفقودة (Inconnu)</h3>
            <p style="font-size: 14px; color: #4b5563;">تم اكتشاف أدوية في المخزون ليس لها أسماء. يرجى ربطها بالدواء الصحيح من القائمة أدناه:</p>
            <div id="orphan-repair-list" style="display: flex; flex-direction: column; gap: 10px;"></div>
        </div>` : ''}
    `;
    // Show loading indicator
    viewContainer.innerHTML = `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:100px; color:var(--primary-brand);">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size:3rem; margin-bottom:15px;"></i>
        <p style="font-weight:600;">${currentLang === 'ar' ? 'جاري جلب البيانات...' : 'Chargement des données...'}</p>
    </div>`;



    if (viewName === 'dashboard') {
        pageTitle.innerText = t('page_dashboard');

        // Scalability: Get counts from state.stats instead of full array
        const totalCentralCount = state.stats.totalMeds || 0;

        // Fetch one sample low stock item for the alert bar if not already cached
        const { data: lowStockItems } = await _supabase.from('medicines').select('name').lt('qty', 50).limit(1);
        const lowStock = lowStockItems && lowStockItems[0];
        const alertHtml = lowStock ? `
            <div class="alert-bar">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>${t('alert_low_stock')} <strong>${lowStock.name}</strong></span>
            </div>
        ` : '';

        const migrationBtn = `
        <div style="display:flex; gap:10px; margin-bottom:20px;">
            <button class="primary-btn" style="background:var(--highlight-gold); color:var(--primary-dark);" onclick="window.migrateLocalData()"><i class="fa-solid fa-upload"></i> ${currentLang === 'ar' ? 'ترحيل البيانات السابقة للسحاب' : 'Migrer les données vers Supabase'}</button>
            <button class="primary-btn" style="background:var(--info-blue);" onclick="window.downloadLocalBackup()"><i class="fa-solid fa-download"></i> Sauvegarder Localement (Backup)</button>
        </div>
        `;



        const distItems = state.transfers.slice(-6).reverse().map(t => {
            const pName = state.pharmacies[t.toPharmacy] ? state.pharmacies[t.toPharmacy].name.fr : 'Inconnu';
            return `
            <div class="dist-item">
                <div class="dist-info">
                    <div class="dist-med">${t.medName}</div>
                    <div class="dist-pharm">${pName}</div>
                </div>
                <div class="dist-meta">
                    <div class="dist-qty">+${t.qty}</div>
                    <div class="dist-date">${window.formatDate(t.date)}</div>
                </div>
            </div>`;
        }).join('');

        const pharmItems = Object.keys(state.pharmacies).map(k => {
            const p = state.pharmacies[k];
            if (!p || !p.name) return '';
            return `
            <div class="pharm-prog-item">
                <div class="pharm-prog-top">
                    <span>${p.name.fr || p.name.ar || 'Pharmacie'}</span>
                    <span>${p.percent || 0}%</span>
                </div>
                <div class="pharm-prog-bar-bg">
                    <div class="pharm-prog-bar-fill" style="width: ${p.percent}%; background-color: ${p.color};"></div>
                </div>
                <div class="pharm-prog-meta">
                    <span>${p.patients} Patients</span>
                </div>
            </div>`;
        }).join('');

        let approvalsHtml = '';
        if (currentUser && currentUser.role === 'admin' && state.pendingReturns.length > 0) {
            approvalsHtml = `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border:2px solid var(--warning-orange);">
                    <div class="block-title" style="color:var(--warning-orange);"><i class="fa-solid fa-bell"></i> ${t('pending_returns_title')}</div>
                    <table>
                        <thead><tr><th>${t('th_pharmacy')}</th><th>${t('th_med')}</th><th>${t('th_qty')}</th><th>${t('th_worker')}</th><th>${t('th_actions')}</th></tr></thead>
                        <tbody>
                            ${state.pendingReturns.map(req => `
                            <tr>
                                <td>${state.pharmacies[req.pharmacyId]?.name?.fr || 'Pharmacie #' + req.pharmacyId}</td>
                                <td><strong>${req.medName}</strong></td>
                                <td><span class="status-badge warning">${req.qty}</span></td>
                                <td>${window.parseWorkerName(req.workerName, 'fr')}</td>
                                <td style="display:flex; gap:5px;">
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#059669;" onclick="window.approveReturn(${req.id})">${t('btn_approve')}</button>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#ef4444;" onclick="window.rejectReturn(${req.id})">${t('btn_reject')}</button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        const pendingOrders = (state.orders || []).filter(o => o.status === 'PENDING');
        let ordersHtml = '';
        if (pendingOrders.length > 0) {
            ordersHtml = `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border:2px solid var(--highlight-gold);">
                    <div class="block-title" style="color:var(--highlight-gold);"><i class="fa-solid fa-cart-shopping"></i> Commandes en attente (Pharmacies)</div>
                    <table>
                        <thead><tr><th>Réf. Commande</th><th>Pharmacie</th><th>Émetteur</th><th>Date</th><th>Action</th></tr></thead>
                        <tbody>
                            ${pendingOrders.map(o => `
                            <tr>
                                <td><strong>${o.id && o.id.startsWith('BC-') ? o.id : '#' + o.id}</strong></td>
                                <td>${state.pharmacies[o.pharmacyId]?.name?.fr || 'Pharmacie #' + o.pharmacyId}</td>
                                <td>${o.workerName}</td>
                                <td>${new Date(o.date).toLocaleDateString('fr-FR')}</td>
                                <td>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--info-blue); margin-right:5px;" onclick="window.downloadSavedReceipt('${o.id}')"><i class="fa-solid fa-file-pdf"></i> PDF</button>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--primary-brand);" onclick="window.markOrderTreated('${o.id}')"><i class="fa-solid fa-check"></i> Traité</button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        content += `
            ${alertHtml}
            ${currentUser.role === 'admin' ? migrationBtn : ''}
            ${ordersHtml}
            ${approvalsHtml}
            
            ${currentUser.role === 'admin' ? `
            ` : ''}
            <div class="stat-grid-6">
                <div class="stat-card sc-green" onclick="window.renderView('central')">
                    <div class="stat-val">${(state.stats.totalTypes || 0).toLocaleString()}</div>
                    <div class="stat-label">${t('stat_total_meds')}</div>
                </div>
                <div class="stat-card sc-red" onclick="window.renderView('expired')">
                    <div class="stat-val">${(state.stats.totalExpired || 0).toLocaleString()}</div>
                    <div class="stat-label">Périmés</div>
                </div>
                <div class="stat-card sc-orange" onclick="window.renderView('central')">
                    <div class="stat-val">${(state.stats.totalLowStock || 0).toLocaleString()}</div>
                    <div class="stat-label">Stock Faible</div>
                </div>
                <div class="stat-card sc-blue" onclick="window.renderView('distribution')">
                    <div class="stat-val">${(state.stats.totalDistributions || 0).toLocaleString()}</div>
                    <div class="stat-label">${t('stat_distributions')}</div>
                </div>
                <div class="stat-card sc-purple" onclick="window.renderView('patients')">
                    <div class="stat-val">${(state.stats.totalPatients || 0).toLocaleString()}</div>
                    <div class="stat-label">${t('stat_patients')}</div>
                </div>
            </div>


            <div class="dash-row">
                <div class="dash-col shadow-sm">
                    <div class="block-title"><i class="fa-solid fa-truck-ramp-box"></i> Distributions Récentes</div>
                    <div class="dist-list">
                        ${distItems || '<div style="text-align:center; padding:40px; color:#9ca3af;">Aucune donnée</div>'}
                    </div>
                </div>
                ${currentUser.role !== 'manager' ? `
                <div class="dash-col shadow-sm">
                    <div class="block-title"><i class="fa-solid fa-chart-line"></i> État des Pharmacies</div>
                    <div class="pharm-list">
                        ${pharmItems}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }
    else if (viewName === 'central') {
        pageTitle.innerText = t('page_central');
        const p = pagination.central;

        try {
            const todayIso = new Date().toISOString().split('T')[0];
            const { data: meds, total } = await fetchTableData('medicines', {
                page: p.currentPage,
                pageSize: p.pageSize,
                search: p.search,
                searchCol: 'name',
                order: p.order || { col: 'id', ascending: false },
                extraOrFilter: `expiry_date.gte.${todayIso},expiry_date.is.null`
            });
            p.total = total;

            const currentMeds = meds.map(m => ({
                id: m.id, name: m.name, batch: m.batch, qty: m.qty, price: m.price || 0,
                entryDate: m.entry_date || '-', expiry: m.expiry_date || '-'
            }));

            const pendingOrders = (state.orders || []).filter(o => o.status === 'PENDING');
            let ordersHtml = '';
            if (pendingOrders.length > 0) {
                ordersHtml = `
                <div class="dash-row" style="margin-bottom:20px;">
                    <div class="dash-col" style="flex:1; border:2px solid var(--highlight-gold); min-height: auto;">
                        <div class="block-title" style="color:var(--highlight-gold);">
                            <i class="fa-solid fa-cart-shopping"></i> 
                            ${currentLang === 'ar' ? 'طلبات التموين (Bon de Commande)' : 'Commandes en attente (Bon de Commande)'}
                        </div>
                        <table style="font-size: 0.8rem;">
                            <thead><tr><th>Réf</th><th>Pharmacie</th><th>Date</th><th>Action</th></tr></thead>
                            <tbody>
                                ${pendingOrders.map(o => `
                                <tr>
                                    <td><strong>${o.id && o.id.startsWith('BC-') ? o.id : '#' + o.id}</strong></td>
                                    <td>${state.pharmacies[o.pharmacyId]?.name?.fr || 'Pharmacie #' + o.pharmacyId}</td>
                                    <td>${new Date(o.date).toLocaleDateString('fr-FR')}</td>
                                    <td>
                                        <button class="primary-btn" style="padding:2px 6px; font-size:11px; background:var(--info-blue);" onclick="window.downloadSavedReceipt('${o.id}')">PDF</button>
                                        <button class="primary-btn" style="padding:2px 6px; font-size:11px; background:var(--primary-brand);" onclick="window.markOrderTreated('${o.id}')">Traiter</button>
                                    </td>
                                </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>`;
            }

            content += `
                ${ordersHtml}
                <div class="page-header" style="justify-content: space-between;">
                    <div style="display:flex; gap:10px;">
                        ${currentUser && currentUser.role === 'admin' ? `
                        <button class="primary-btn" onclick="document.getElementById('add-medicine-form').removeAttribute('data-edit-id'); document.getElementById('add-medicine-form').reset(); document.getElementById('add-medicine-modal').classList.add('active')">
                            <i class="fa-solid fa-plus"></i> ${t('add_med')}
                        </button>
                        ` : ''}
                        ${currentUser && currentUser.role === 'admin' ? `
                        <label class="primary-btn" style="background:#059669; cursor:pointer;">
                            <i class="fa-solid fa-file-import"></i> ${t('btn_import')}
                            <input type="file" id="import-excel" accept=".xlsx, .xls, .csv" style="display:none;">
                        </label>
                        <button class="primary-btn" style="background:#0284c7;" onclick="window.exportCentralStockToExcel()">
                            <i class="fa-solid fa-file-export"></i> ${currentLang === 'ar' ? 'سحب Excel' : 'Exporter Excel'}
                        </button>
                        <button class="primary-btn" style="background:#ef4444;" onclick="window.deleteSelectedMeds()">
                            <i class="fa-solid fa-trash-can"></i> ${t('btn_delete_selected')}
                        </button>
                        <button class="primary-btn" style="background:#b91c1c;" onclick="window.deleteAllMeds()">
                            <i class="fa-solid fa-circle-exclamation"></i> ${currentLang === 'ar' ? 'حذف الكل (تصفير)' : 'Tout Supprimer'}
                        </button>
                        ` : `
                        <button class="primary-btn" style="background:#0284c7;" onclick="window.exportCentralStockToExcel()">
                            <i class="fa-solid fa-file-export"></i> ${currentLang === 'ar' ? 'سحب Excel' : 'Exporter Excel'}
                        </button>
                        `}
                    </div>
                    <div class="search-box">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-med" placeholder="${t('search_placeholder')}" value="${p.search || ''}">
                    </div>
                </div>
                
                <div class="table-container shadow-sm">
                    <table id="central-table">
                        <thead>
                            <tr>
                                ${currentUser && currentUser.role === 'admin' ? `<th><input type="checkbox" id="select-all-meds" onchange="window.toggleAllMeds(this)"></th>` : ''}
                                <th data-col="name">${t('th_med')}</th>
                                <th data-col="batch">${t('th_batch')}</th>
                                <th data-col="qty">${t('th_qty')}</th>
                                <th data-col="entry_date">${t('th_entry')}</th>
                                <th data-col="expiry_date">${t('th_expiry')}</th>
                                <th data-col="price">${currentLang === 'ar' ? 'سعر الشراء' : 'Prix d\'achat'}</th>
                                <th>${t('th_status')}</th>
                                ${currentUser && currentUser.role === 'admin' ? `<th>${t('th_actions')}</th>` : ''}
                            </tr>
                        </thead>
                        <tbody>${generateCentralTableRows(currentMeds)}</tbody>
                    </table>
                </div>
                ${renderPaginationControls('central')}
            `;
            viewContainer.innerHTML = content;
            window.attachTableSort(document.getElementById('central-table'), (col, dir) => {
                p.order = { col, ascending: dir === 'asc' };
                p.currentPage = 1;
                window.renderView('central');
            });

            // Re-attach Search Listener with Debounce
            const searchInput = document.getElementById('search-med');
            if (searchInput) {
                searchInput.focus();
                // Place cursor at the end of text
                const val = searchInput.value;
                searchInput.value = '';
                searchInput.value = val;

                searchInput.addEventListener('input', (e) => {
                    p.search = e.target.value;
                    p.currentPage = 1;
                    debounceSearch(() => window.renderView('central'), 500);
                });
            }

            // Handle Import Excel Listener
            const importInput = document.getElementById('import-excel');
            if (importInput) {
                importInput.addEventListener('change', window.handleCentralImport);
            }

        } catch (err) {
            console.error("Central View Error:", err);
            viewContainer.innerHTML = `<div class="error-state">${err.message}</div>`;
        }
        return;
    }

    else if (viewName === 'distribution') {
        pageTitle.innerText = t('page_distribution');

        const { data: allMedsRaw } = await _supabase.rpc('get_all_medicines');
        const _todayDist = new Date().toISOString().split('T')[0];
        const activeMeds = (allMedsRaw || []).filter(m => m.qty > 0 && (!m.expiry_date || m.expiry_date >= _todayDist));

        content += `
            ${(currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager')) ? `
            <div class="transfer-card">
                <div class="block-title"><i class="fa-solid fa-truck-ramp-box" style="margin: 0 8px;"></i> Distribution par lots</div>
                <form id="bulk-transfer-form">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="display:block; margin-bottom:8px; font-weight:800;">1. Choisir la Pharmacie Destination</label>
                        <select id="bulk-trans-pharmacy" required style="max-width: 400px; border: 2px solid var(--primary-brand);">
                            <option value="">${t('select_pharm')}</option>
                            ${Object.keys(state.pharmacies).map(k => `<option value="${k}" ${window.preSelectedPharm == k ? 'selected' : ''}>${state.pharmacies[k].name.fr}</option>`).join('')}
                        </select>
                    </div>
                    ${(window.preSelectedPharm = null, '')} <!-- Clear after use -->

                    <label style="display:block; margin-bottom:12px; font-weight:800;">2. Liste des Médicaments à Distribuer</label>
                    <div class="table-container" style="margin-bottom: 20px; border: 1px solid #e5e7eb;">
                        <table style="width:100%;">
                            <thead>
                                <tr style="background:#f9fafb;">
                                    <th style="width:60%;">${t('th_med')}</th>
                                    <th style="width:25%;">${t('th_qty')}</th>
                                    <th style="width:15%;"></th>
                                </tr>
                            </thead>
                            <tbody id="bulk-trans-tbody">
                                <!-- Dynamic rows here -->
                            </tbody>
                        </table>
                    </div>
                    <datalist id="distribution-meds-list">
                        ${activeMeds.map(m => `<option value="${m.name} [Lot: ${m.batch}] (Stock: ${m.qty})" data-id="${m.id}"></option>`).join('')}
                    </datalist>
                    
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <button type="button" class="primary-btn" style="background:var(--primary-brand);" onclick="window.addDistRow()">
                            <i class="fa-solid fa-plus-circle"></i> ${t('btn_add_med_row')}
                        </button>
                        <button type="submit" class="primary-btn" style="background:var(--accent-green); padding: 12px 32px; font-size: 1rem;">
                            <i class="fa-solid fa-check-double"></i> ${t('btn_confirm_dist')}
                        </button>
                    </div>
                </form>
            </div>
            ` : ''}

            <div class="table-container shadow-sm">
                <div class="table-header" style="display:flex; justify-content:space-between; align-items:center;">
                    <span>${t('history_dist')}</span>
                    <div class="search-box" style="margin:0; width:250px;">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-dist-history" placeholder="${t('search_placeholder')}" value="${pagination.transfers.search || ''}">
                    </div>
                </div>
                <table id="dist-history-table">
                    <thead>
                        <tr>
                            <th>${t('th_date')}</th>
                            <th>${t('th_id')}</th>
                            <th>${t('th_med')}</th>
                            <th>${t('th_qty')}</th>
                            <th>${t('th_to')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.transfers.slice().reverse().map((tItem) => `
                            <tr>
                                <td>${window.formatDate(tItem.date)}</td>
                                <td>#TRN-${tItem.id}</td>
                                <td><strong>${tItem.medName}</strong></td>
                                <td><span class="status-badge ${tItem.isReturn ? 'warning' : 'good'}">${tItem.isReturn ? '-' + tItem.qty : '+' + tItem.qty}</span></td>
                                <td>${state.pharmacies[tItem.toPharmacy]?.name.fr || ''} <small>${tItem.isReturn ? '(Retour)' : ''}</small></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        viewContainer.innerHTML = content;
        window.attachTableSort(document.getElementById('dist-history-table'));

        // Search Listener for Distribution History
        const distSearchInput = document.getElementById('search-dist-history');
        if (distSearchInput) {
            distSearchInput.focus();
            const val = distSearchInput.value; distSearchInput.value = ''; distSearchInput.value = val;
            distSearchInput.addEventListener('input', (e) => {
                pagination.transfers.search = e.target.value;
                pagination.transfers.currentPage = 1;
                debounceSearch(() => window.renderView('distribution'), 500);
            });
        }

        // Add first row automatically
        window.addDistRow = function () {
            const tbody = document.getElementById('bulk-trans-tbody');
            const row = document.createElement('tr');
            row.className = 'bulk-row';
            row.innerHTML = `
                <td>
                    <input type="text" class="row-med-search" list="distribution-meds-list" required style="width:100%; border:1px solid #d1d5db; border-radius:6px; padding:10px;" placeholder="Rechercher médicament...">
                </td>
                <td>
                    <input type="number" class="row-qty" min="1" required placeholder="Qté" style="width:100%;">
                </td>
                <td style="text-align:center;">
                    <button type="button" class="icon-btn delete-btn" onclick="window.removeDistRow(this)"><i class="fa-solid fa-xmark"></i></button>
                </td>
            `;
            tbody.appendChild(row);
        };

        window.removeDistRow = function (btn) {
            const row = btn.closest('tr');
            if (document.querySelectorAll('.bulk-row').length > 1) {
                row.remove();
            } else {
                window.showToast("Vous devez avoir au moins un médicament dans la liste.", 'error');
            }
        };

        window.addDistRow(); // Initial row

        const form = document.getElementById('bulk-transfer-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const pharmId = parseInt(document.getElementById('bulk-trans-pharmacy').value);
            const rows = document.querySelectorAll('.bulk-row');

            const batch = [];
            let valid = true;

            // Scalability Fix: Fetch only required medicines from Supabase (since state.medicines is now empty)
            const medNamesRequested = Array.from(rows).map(r => {
                const val = r.querySelector('.row-med-search').value;
                if (val.includes(' [')) return val.split(' [')[0].trim();
                if (val.includes(' (')) return val.split(' (')[0].trim();
                return val.trim();
            }).filter(n => n);

            if (medNamesRequested.length === 0) return;

            const { data: dbStock, error: dbErr } = await _supabase.from('medicines')
                .select('id, name, batch, qty, expiry_date')
                .in('name', medNamesRequested)
                .gt('qty', 0);

            if (dbErr) {
                console.error("Error fetching stock:", dbErr);
                window.showToast("Erreur lors de la vérification du stock", "error");
                return;
            }

            // Create a local copy of stock to track allocations within this session
            const localStock = dbStock.map(m => ({ ...m, expiry: m.expiry_date }));

            for (const row of rows) {
                const searchValue = row.querySelector('.row-med-search').value;
                const qtyRequested = parseInt(row.querySelector('.row-qty').value);
                if (!searchValue || isNaN(qtyRequested)) continue;

                let medName = searchValue;
                if (searchValue.includes(' [')) {
                    medName = searchValue.split(' [')[0].trim();
                } else if (searchValue.includes(' (')) {
                    medName = searchValue.split(' (')[0].trim();
                }

                // FEFO: Get matching batches from local tracking, sorted by expiry
                const eligibleBatches = localStock.filter(m =>
                    m.name === medName &&
                    m.qty > 0 &&
                    !isExpired(m.expiry)
                ).sort((a, b) => {
                    const parseDate = (d) => {
                        if (!d || d === '-') return new Date(8640000000000000);
                        const parts = d.split('T')[0].split(/[-/]/);
                        if (parts.length === 3) {
                            if (parts[0].length === 4) return new Date(parts[0], parts[1] - 1, parts[2]);
                            if (parts[2].length === 4) return new Date(parts[2], parts[1] - 1, parts[0]);
                        }
                        return new Date(d);
                    };
                    return parseDate(a.expiry) - parseDate(b.expiry);
                });

                const totalAvailable = eligibleBatches.reduce((acc, curr) => acc + curr.qty, 0);

                if (eligibleBatches.length === 0 || totalAvailable < qtyRequested) {
                    await window.showCustomDialog({ title: "Erreur", msg: `Erreur: Stock insuffisant pour ${medName}. Disponible: ${totalAvailable}`, icon: "fa-triangle-exclamation" });
                    valid = false;
                    break;
                }

                // Automatic FEFO Allocation
                let remaining = qtyRequested;

                // STRICT CHECK: If user explicitly picked a lot, it MUST be the best one
                if (searchValue.includes(' [Lot: ')) {
                    const selectedLot = searchValue.split(' [Lot: ')[1].split(']')[0].trim();
                    const bestLot = eligibleBatches[0].batch;
                    if (selectedLot !== bestLot) {
                        const isManager = currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager');
                        let bypass = false;
                        if (isManager) {
                            bypass = await window.showCustomDialog({
                                title: currentLang === 'ar' ? 'تجاوز شرط الصلاحية' : "Contournement FEFO",
                                msg: currentLang === 'ar' ? `تحذير! الدفعة [${bestLot}] تنتهي صلاحيتها في [${eligibleBatches[0].expiry}] (أولوية FEFO). هل تريد حقاً صرف الدفعة [${selectedLot}]؟` : `Attention! Le Lot [${bestLot}] expire le [${eligibleBatches[0].expiry}] (Priorité FEFO). Voulez-vous vraiment délivrer le Lot [${selectedLot}] ?`,
                                type: 'confirm',
                                icon: 'fa-triangle-exclamation'
                            });
                        }

                        if (!bypass) {
                            if (!isManager) {
                                await window.showCustomDialog({
                                    title: "Alerte de Validité",
                                    msg: `Attention! Le Lot [${bestLot}] expire le [${eligibleBatches[0].expiry}] (Priorité FEFO). Veuillez l'utiliser en premier avant le Lot [${selectedLot}].`,
                                    icon: 'fa-triangle-exclamation'
                                });
                            }
                            valid = false;
                            break;
                        }
                    }

                    // Prioritize the selected lot whether it's best or bypassed
                    const selectedIndex = eligibleBatches.findIndex(b => b.batch === selectedLot);
                    if (selectedIndex > -1) {
                        const selectedBatchObj = eligibleBatches.splice(selectedIndex, 1)[0];
                        eligibleBatches.unshift(selectedBatchObj);
                    }
                }

                for (const b of eligibleBatches) {
                    if (remaining <= 0) break;
                    const take = Math.min(b.qty, remaining);
                    batch.push({ medId: b.id, qty: take, medName: b.name, batch: b.batch, expiry: b.expiry });

                    // Deduct from local tracking so we don't double-count in next rows
                    b.qty -= take;
                    remaining -= take;
                }
            }

            if (!valid || batch.length === 0) return;

            try {
                window.showToast("Traitement de l'envoi...", "info");

                // Fetch current pharmacy stock for these medicines to calculate new totals correctly
                const medIds = batch.map(b => b.medId);
                const { data: pStockData } = await _supabase.from('pharmacy_stock')
                    .select('medicine_id, qty')
                    .eq('pharmacy_id', pharmId)
                    .in('medicine_id', medIds);

                const pStockMap = {};
                if (pStockData) pStockData.forEach(ps => pStockMap[ps.medicine_id] = ps.qty);

                // Optimized Parallel Execution — Map for O(1) lookup instead of O(n) find()
                const dbStockMap = new Map(dbStock.map(m => [m.id, m]));
                const medicineUpdates = batch.map(item => {
                    const med = dbStockMap.get(item.medId);
                    return _supabase.from('medicines').update({ qty: med.qty - item.qty }).eq('id', item.medId);
                });

                const pharmacyStockUpserts = batch.map(item => {
                    const currentQty = pStockMap[item.medId] || 0;
                    return {
                        pharmacy_id: pharmId,
                        medicine_id: item.medId,
                        qty: currentQty + item.qty
                    };
                });

                const transferInserts = batch.map(item => ({
                    date: new Date().toISOString(),
                    medicine_id: item.medId,
                    medicine_name: item.medName,
                    qty: item.qty,
                    to_pharmacy_id: pharmId,
                    is_return: false,
                    dispensed_by: (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name)
                }));

                // Run all medicine updates in parallel
                await Promise.all(medicineUpdates);

                // Bulk upsert pharmacy stocks
                await _supabase.from('pharmacy_stock').upsert(pharmacyStockUpserts, { onConflict: 'pharmacy_id,medicine_id' });

                // Bulk insert transfers
                await _supabase.from('transfers').insert(transferInserts);
                const barcode = await window.getNextCounterValue('delivery');

                const newReceipt = {
                    id: barcode, date: new Date().toISOString(), type: 'DISTRIBUTION',
                    pharmacy_id: pharmId, items: batch,
                    worker_name: currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Système',
                    target_name: state.pharmacies[pharmId].name.fr,
                    signed_photo: null
                };

                // Try to save to Supabase
                const { error: recError } = await _supabase.from('receipts').insert([newReceipt]);
                if (recError) {
                    console.warn("Could not save receipt to Supabase natively (missing table?). Using Fallback.", recError);
                    if (!state.receipts) state.receipts = [];
                    state.receipts.push(newReceipt);
                    localStorage.setItem('local_receipts', JSON.stringify(state.receipts));
                }

                // Targeted state update: only update stats counter, no full reload needed
                if (state.stats) state.stats.totalDistributions = (state.stats.totalDistributions || 0) + batch.length;
                state.transfers = [{ date: new Date().toISOString().split('T')[0], medName: batch[0]?.medName, qty: batch[0]?.qty, toPharmacy: pharmId, isReturn: false }].concat(state.transfers).slice(0, 6);
                window.showToast(t('alert_success'));
                await window.autoDownloadReceipt('DISTRIBUTION', state.pharmacies[pharmId].name.fr, batch, barcode);
                window.renderView('distribution');
            } catch (err) {
                console.error("Distribution error:", err);
                window.showToast("Erreur lors de la distribution", "error");
            }
        });

        return; // Already rendered manually
    }
    else if (viewName === 'admin_orders' && currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager')) {
        pageTitle.innerText = "Gestion des Commandes";

        // Auto-sync orders from Supabase every time this view is opened
        loadDataFromSupabase();

        const pendingOrders = (state.orders || []).filter(o => o.status === 'PENDING').slice().reverse();
        const treatedOrders = (state.orders || []).filter(o => o.status === 'TREATED').slice().reverse();

        content += `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border-top: 4px solid var(--highlight-gold);">
                    <div class="block-title" style="color:var(--highlight-gold);"><i class="fa-solid fa-clock"></i> Commandes en attente (${pendingOrders.length})</div>
                    <div class="table-container">
                        <table>
                            <thead><tr><th>Réf. Commande</th><th>Pharmacie</th><th>Émetteur</th><th>Date</th><th>Action</th></tr></thead>
                            <tbody>
                                ${pendingOrders.length > 0 ? pendingOrders.map(o => `
                                <tr>
                                    <td><strong>#${o.id}</strong></td>
                                    <td>${state.pharmacies[o.pharmacyId]?.name?.fr || 'Pharmacie #' + o.pharmacyId}</td>
                                    <td>${o.workerName || '---'}</td>
                                    <td>${formatDate(o.date)}</td>
                                    <td>
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--info-blue); margin-right:5px;" onclick="window.downloadSavedReceipt('${o.id}')"><i class="fa-solid fa-file-pdf"></i> PDF</button>
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--primary-brand);" onclick="window.markOrderTreated('${o.id}')"><i class="fa-solid fa-check"></i> Traiter</button>
                                    </td>
                                </tr>
                                `).join('') : `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Aucune commande en attente.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="dash-row">
                <div class="dash-col" style="flex:1; border-top: 4px solid var(--accent-green);">
                    <div class="block-title" style="color:var(--accent-green);"><i class="fa-solid fa-check-double"></i> Historique des Commandes Traitées</div>
                    <div class="table-container shadow-sm">
                        <table id="admin-orders-history">
                            <thead><tr><th>Date</th><th>Réf. Commande</th><th>Pharmacie</th><th>Émetteur</th><th>Action</th></tr></thead>
                            <tbody>
                                ${treatedOrders.length > 0 ? treatedOrders.map(o => `
                                <tr>
                                    <td>${formatDate(o.date)}</td>
                                    <td><strong>#${o.id}</strong></td>
                                    <td>${state.pharmacies[o.pharmacyId]?.name?.fr || 'Pharmacie #' + o.pharmacyId}</td>
                                    <td>${o.workerName || '---'}</td>
                                    <td>
                                        <button class="icon-btn" style="color:var(--danger-red);" onclick="window.downloadSavedReceipt('${o.id}')" title="Télécharger PDF"><i class="fa-solid fa-file-pdf"></i></button>
                                    </td>
                                </tr>
                                `).join('') : `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Aucun historique disponible.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
    else if (viewName === 'admin_returns' && currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager')) {
        pageTitle.innerText = "Gestion des Retours Stock";

        const pending = (state.pendingReturns || []).slice().reverse();
        const history = (state.allReturns || []).filter(r => r.status !== 'PENDING').slice().reverse();

        content += `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border-top: 4px solid var(--warning-orange);">
                    <div class="block-title" style="color:var(--warning-orange);"><i class="fa-solid fa-clock"></i> Demandes de retour en attente (${pending.length})</div>
                    <div class="table-container">
                        <table>
                            <thead><tr><th>Pharmacie</th><th>Médicament</th><th>Quantité</th><th>Émetteur</th><th>Date</th><th>Action</th></tr></thead>
                            <tbody>
                                ${pending.length > 0 ? pending.map(r => `
                                <tr>
                                    <td>${state.pharmacies[r.pharmacyId]?.name?.fr || 'Pharmacie #' + r.pharmacyId}</td>
                                    <td><strong>${r.medName}</strong></td>
                                    <td><span class="status-badge warning">${r.qty}</span></td>
                                    <td>${window.parseWorkerName(r.workerName, 'fr')}</td>
                                    <td>${formatDate(r.date)}</td>
                                    <td style="display:flex; gap:5px;">
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#059669;" onclick="window.approveReturn(${r.id})">${t('btn_approve')}</button>
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#ef4444;" onclick="window.rejectReturn(${r.id})">${t('btn_reject')}</button>
                                    </td>
                                </tr>
                                `).join('') : `<tr><td colspan="6" style="text-align:center; color:#94a3b8; padding:20px;">Aucune demande en attente.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="dash-row">
                <div class="dash-col" style="flex:1; border-top: 4px solid #94a3b8;">
                    <div class="block-title" style="color:#64748b;"><i class="fa-solid fa-clock-rotate-left"></i> Historique des retours (Traités/Refusés)</div>
                    <div class="table-container shadow-sm">
                        <table>
                            <thead><tr><th>Date</th><th>Pharmacie</th><th>Médicament</th><th>Quantité</th><th>Statut</th></tr></thead>
                            <tbody>
                                ${history.length > 0 ? history.map(r => `
                                <tr>
                                    <td>${formatDate(r.date)}</td>
                                    <td>${state.pharmacies[r.pharmacyId]?.name?.fr || 'Pharmacie #' + r.pharmacyId}</td>
                                    <td><strong>${r.medName}</strong></td>
                                    <td>${r.qty}</td>
                                    <td><span class="status-badge ${r.status === 'APPROVED' ? 'good' : 'bad'}">${r.status}</span></td>
                                </tr>
                                `).join('') : `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Aucun historique.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
    else if (viewName === 'patients') {
        pageTitle.innerText = t('page_patients');
        const pState = pagination.patients;

        try {
            const { data: currentPats, total } = await fetchTableData('patients', {
                page: pState.currentPage,
                pageSize: pState.pageSize,
                search: pState.search,
                searchCol: 'name',
                order: pState.order || { col: 'name', ascending: true }
            });
            pState.total = total;

            // Fetch dispensation total per patient
            const dispByPatient = {};
            if (currentPats.length > 0) {
                const patientNames = currentPats.map(p => p.name);
                const { data: dispRows } = await _supabase
                    .from('dispensations')
                    .select('patient_name, qty')
                    .in('patient_name', patientNames);
                (dispRows || []).forEach(d => {
                    if (!dispByPatient[d.patient_name]) dispByPatient[d.patient_name] = { total: 0 };
                    dispByPatient[d.patient_name].total += (d.qty || 0);
                });
            }

            const pRows = currentPats.map(p => {
                let actions = '';
                let checkbox = '';
                if (currentUser && currentUser.role === 'admin') {
                    checkbox = `<td><input type="checkbox" class="patient-checkbox" value="${p.id}"></td>`;
                    actions = `
                        <td>
                            <button class="icon-btn edit-btn" onclick="window.editPatient(${p.id})"><i class="fa-solid fa-pen"></i></button>
                            <button class="icon-btn delete-btn" onclick="window.deletePatient(${p.id})"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    `;
                }
                const pDisp = dispByPatient[p.name];
                const isActif = (p.status || 'actif') === 'actif';
                const statusBadge = isActif
                    ? '<span class="status-badge good">Actif</span>'
                    : '<span class="status-badge" style="background:#fee2e2;color:#dc2626;">Inactif</span>';
                const statusToggle = (currentUser && currentUser.role === 'admin')
                    ? `<button class="icon-btn" style="color:${isActif ? '#dc2626' : '#059669'};font-size:12px;" title="${isActif ? 'Désactiver' : 'Activer'}" onclick="window.togglePatientStatus(${p.id}, '${p.status || 'actif'}')"><i class="fa-solid fa-${isActif ? 'ban' : 'circle-check'}"></i></button>`
                    : '';
                const histBtn = `<button class="icon-btn" title="Historique (double-clic sur le nom)" style="color:var(--primary-brand);" onclick="window.showPatientHistory(${p.id})"><i class="fa-solid fa-clock-rotate-left"></i></button>`;
                return `<tr data-pid="${p.id}">
                    ${checkbox}
                    <td ondblclick="window.showPatientHistory(${p.id})" style="cursor:pointer;" title="Double-cliquer pour voir l'historique"><strong>${p.name}</strong></td>
                    <td>${p.national_id || '-'}</td>
                    <td dir="ltr">${p.phone || '-'}</td>
                    <td>${p.hospital || '-'}</td>
                    <td>${statusBadge} ${statusToggle}</td>
                    <td>${pDisp ? pDisp.total : '-'}</td>
                    <td>${histBtn}</td>
                    ${actions}
                </tr>`;
            }).join('');

            content += `
                <div class="page-header" style="justify-content: space-between;">
                    <div style="display:flex; gap: 10px;">
                        ${currentUser && currentUser.role === 'admin' ? `
                        <button class="primary-btn" onclick="window.openPatientModal()">
                            <i class="fa-solid fa-plus"></i> ${currentLang === 'ar' ? 'إضافة مريض' : 'Ajouter Patient'}
                        </button>
                        <label class="primary-btn" style="background:#059669; cursor:pointer;">
                            <i class="fa-solid fa-file-import"></i> ${t('btn_import_patients')}
                            <input type="file" id="import-patients-excel" accept=".xlsx, .xls, .csv" style="display:none;">
                        </label>
                        <button class="primary-btn" style="background:#ef4444;" onclick="window.deleteSelectedPatients()">
                            <i class="fa-solid fa-trash-can"></i> ${t('btn_delete_selected')}
                        </button>
                        ` : ''}
                    </div>
                    <div class="search-box">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-patient" placeholder="${t('search_placeholder')}" value="${pState.search || ''}">
                    </div>
                </div>
                <div class="table-container shadow-sm">
                    <table id="patients-table">
                        <thead><tr>
                            ${currentUser && currentUser.role === 'admin' ? `<th><input type="checkbox" id="select-all-patients" onchange="window.toggleAllPatients(this)"></th>` : ''}
                            <th data-col="name">${t('th_patient')}</th><th data-col="national_id">${t('th_patient_nid')}</th><th data-col="phone">${t('th_patient_phone')}</th>
                            <th data-col="hospital">${t('th_patient_hospital')}</th>
                            <th data-col="status">Statut</th><th>${t('th_total_qty')}</th>
                            <th style="width:48px;"></th>
                            ${currentUser && currentUser.role === 'admin' ? `<th>Actions</th>` : ''}
                        </tr></thead>
                        <tbody>${pRows || `<tr><td colspan="${currentUser && currentUser.role === 'admin' ? 9 : 7}" style="text-align:center;">---</td></tr>`}</tbody>
                    </table>
                </div>
                ${renderPaginationControls('patients')}
            `;
            viewContainer.innerHTML = content;
            window.attachTableSort(document.getElementById('patients-table'), (col, dir) => {
                pState.order = { col, ascending: dir === 'asc' };
                pState.currentPage = 1;
                window.renderView('patients');
            });

            // Search Listener
            const searchInput = document.getElementById('search-patient');
            if (searchInput) {
                searchInput.focus();
                const val = searchInput.value;
                searchInput.value = ''; searchInput.value = val;
                searchInput.addEventListener('input', (e) => {
                    pState.search = e.target.value;
                    pState.currentPage = 1;
                    debounceSearch(() => window.renderView('patients'), 500);
                });
            }
        } catch (err) {
            console.error(err);
            viewContainer.innerHTML = `<div class="error-state">${err.message}</div>`;
        }
        return;
    }
    else if (viewName === 'expired') {
        pageTitle.innerText = t('page_expired');
        const p = pagination.expired;
        const now = new Date().toISOString().split('T')[0];

        try {
            const { data: meds, total } = await fetchTableData('medicines', {
                page: p.currentPage,
                pageSize: p.pageSize,
                search: p.search,
                filters: { expiry_date: { val: now, op: 'lt' } },
                order: p.order || { col: 'expiry_date', ascending: true }
            });
            p.total = total;

            const rows = meds.map(m => `
                <tr style="background:#fef2f2;">
                    <td><strong>${m.name}</strong></td>
                    <td>${m.batch}</td>
                    <td><span class="status-badge danger">${m.qty}</span></td>
                    <td style="color:var(--danger-red); font-weight:bold;">${formatDate(m.expiry_date)}</td>
                    <td><span class="status-badge danger">${t('expired_tag')}</span></td>
                </tr>
            `).join('');

            content += `
                <div class="page-header" style="justify-content: space-between;">
                    <div class="search-box">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-expired" placeholder="${t('search_placeholder')}" value="${p.search || ''}">
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                        <button class="primary-btn btn-excel" onclick="window.exportToExcel('expired-table', 'Expired_Stock')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                    </div>
                </div>
                <div class="table-container shadow-sm">
                    <table id="expired-table">
                        <thead><tr>
                            <th data-col="name">${t('th_med')}</th><th data-col="batch">${t('th_batch')}</th><th data-col="qty">${t('th_qty')}</th><th data-col="expiry_date">${t('th_expiry')}</th><th>${t('th_status')}</th>
                        </tr></thead>
                        <tbody>
                            ${rows || `<tr><td colspan="5" style="text-align:center; padding:30px;">Aucun médicament périmé.</td></tr>`}
                        </tbody>
                    </table>
                </div>
                ${renderPaginationControls('expired')}
            `;
            viewContainer.innerHTML = content;
            window.attachTableSort(document.getElementById('expired-table'), (col, dir) => {
                p.order = { col, ascending: dir === 'asc' };
                p.currentPage = 1;
                window.renderView('expired');
            });

            // Search Listener for Expired
            const expSearchInput = document.getElementById('search-expired');
            if (expSearchInput) {
                expSearchInput.focus();
                const val = expSearchInput.value;
                expSearchInput.value = ''; expSearchInput.value = val;
                expSearchInput.addEventListener('input', (e) => {
                    p.search = e.target.value;
                    p.currentPage = 1;
                    debounceSearch(() => window.renderView('expired'), 500);
                });
            }
        } catch (err) {
            console.error(err);
            viewContainer.innerHTML = `<div class="error-state">${err.message}</div>`;
        }
        return;
    }
    else if (viewName === 'admin_decharges' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = "Décharges (Historique)";

        let distReceipts = (state.receipts || []).filter(r => r.type === 'DISTRIBUTION').slice().reverse();

        content += `
            <div class="table-container shadow-sm p-4">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ID / Barcode</th>
                            <th>Date</th>
                            <th>Pharmacie</th>
                            <th>Articles</th>
                            <th>Justificatif (Photo)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${distReceipts.map(r => `
                            <tr>
                                <td><strong>${r.id}</strong></td>
                                <td style="white-space: nowrap;">${formatDate(r.date)}</td>
                                <td>${r.target_name || r.targetName || 'Inconnu'}</td>
                                <td>${typeof r.items === 'string' ? JSON.parse(r.items).length : (r.items ? r.items.length : 0)} médicament(s)</td>
                                <td>
                                    ${r.signed_photo
                ? `<a href="${r.signed_photo}" download="Justificatif_${r.id}.${r.signed_photo.startsWith('data:application/pdf') ? 'pdf' : 'webp'}" class="status-badge good" style="text-decoration:none; display:inline-flex; align-items:center; gap:5px;"><i class="fa-solid ${r.signed_photo.startsWith('data:application/pdf') ? 'fa-file-pdf' : 'fa-image'}"></i> Justificatif</a>`
                : `<button class="primary-btn btn-sm" style="background:var(--danger-red); color:#fff; padding: 6px 12px; font-size: 0.8rem;" onclick="window.triggerPhotoUpload('${r.id}')"><i class="fa-solid fa-camera"></i> / <i class="fa-solid fa-file-pdf"></i> Ajouter</button>`
            }
                                    <input type="file" id="upload-photo-${r.id}" accept="image/*,application/pdf" style="display:none;" onchange="window.handlePhotoUpload(event, '${r.id}')" />
                                </td>
                            </tr>
                        `).join('')}
                        ${distReceipts.length === 0 ? '<tr><td colspan="5" style="text-align:center;">Aucune décharge enregistrée.</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'users') {
        if (currentUser.role !== 'admin') { window.renderView('dashboard'); return; }
        pageTitle.innerText = "Gestion des Utilisateurs";

        const users = Object.keys(window.userDatabase).map(email => ({ email, ...window.userDatabase[email] }));

        content += `
            <div class="page-header" style="justify-content: flex-end; gap: 10px;">
                <button class="primary-btn" style="background:#f1f5f9; color:var(--text-main);" onclick="window.syncUsers()">
                    <i class="fa-solid fa-sync"></i> Recharger
                </button>
                <button class="primary-btn" style="background:var(--highlight-gold); color:var(--primary-dark);" onclick="window.migrateUsersToCloud()">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Migrer Comptes Locaux
                </button>
                <button class="primary-btn" onclick="window.addUser()">
                    <i class="fa-solid fa-user-plus"></i> Nouvel Utilisateur
                </button>
            </div>
            
            <div class="table-container shadow-sm">
                <table>
                    <thead>
                        <tr>
                            <th>Nom (AR / FR)</th>
                            <th>Email (Login)</th>
                            <th>Rôle</th>
                            <th>Pharmacie</th>
                            <th>Infos Récupération</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(u => {
            const nameAr = (u.name && u.name.ar) ? u.name.ar : (u.name_ar || '---');
            const nameFr = (u.name && u.name.fr) ? u.name.fr : (u.name_fr || '---');
            const pharmName = u.pharmacyId && state.pharmacies[u.pharmacyId]
                ? (state.pharmacies[u.pharmacyId].name?.fr || '-')
                : '-';
            return `
                            <tr>
                                <td>${nameAr} / ${nameFr}</td>
                                <td><strong>${u.email}</strong></td>
                                <td><span class="status-badge ${u.role === 'admin' ? 'info' : 'good'}">${u.role}</span></td>
                                <td>${pharmName}</td>
                                <td>
                                    <span style="font-size:11px; color:var(--text-muted);">
                                        📧 ${u.recovery_email || '---'}<br>
                                        📞 ${u.recovery_phone || '---'}
                                    </span>
                                </td>
                                <td class="action-cell">
                                    <button class="icon-btn edit-btn" onclick="window.editUser('${u.email}')" title="Modifier"><i class="fa-solid fa-user-pen"></i></button>
                                    <button class="icon-btn delete-btn" onclick="window.deleteUser('${u.email}')" title="Supprimer"><i class="fa-solid fa-user-minus"></i></button>
                                </td>
                            </tr>`;
        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'records') {
        pageTitle.innerText = t('page_records');
        const p = pagination.records;

        try {
            const { data: logs, total } = await fetchTableData('dispensations', {
                page: p.currentPage,
                pageSize: p.pageSize,
                search: p.search,
                searchCol: 'medicine_name',
                order: p.order || { col: 'date', ascending: false }
            });
            p.total = total;

            const rRows = logs.map(d => `
                <tr>
                    <td><small><strong>${d.reference || '-'}</strong></small></td>
                    <td>${formatDate(d.date)}</td>
                    <td><span class="status-badge warning">${t('action_dispense')}</span></td>
                    <td><strong>${d.medicine_name}</strong></td>
                    <td><span dir="ltr">-${d.qty}</span></td>
                    <td>${d.patient_name || '-'}</td>
                    <td>${window.parseWorkerName(d.dispensed_by, currentLang)}</td>
                </tr>
            `).join('');

            content += `
                <div class="page-header" style="justify-content: space-between;">
                    <div class="search-box">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-record" placeholder="${t('search_placeholder')}" value="${p.search || ''}">
                    </div>
                    <div style="display:flex; gap: 10px;">
                        <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                        <button class="primary-btn btn-excel" onclick="window.exportToExcel('records-table', 'Records')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                    </div>
                </div>
                <div class="table-container shadow-sm">
                    <table id="records-table">
                        <thead><tr><th data-col="reference">Réf.</th><th data-col="date">${t('th_date')}</th><th>${t('th_action')}</th><th data-col="medicine_name">${t('th_med')}</th><th data-col="qty">${t('th_qty')}</th><th data-col="pharmacy_id">${t('th_pharmacy')}</th><th data-col="dispensed_by">${t('th_worker')}</th></tr></thead>
                        <tbody>${rRows || `<tr><td colspan="7" style="text-align:center;">---</td></tr>`}</tbody>
                    </table>
                </div>
                ${renderPaginationControls('records')}
            `;
            viewContainer.innerHTML = content;
            window.attachTableSort(document.getElementById('records-table'), (col, dir) => {
                p.order = { col, ascending: dir === 'asc' };
                p.currentPage = 1;
                window.renderView('records');
            });

            // Search Listener
            const searchInput = document.getElementById('search-record');
            if (searchInput) {
                searchInput.focus();
                const val = searchInput.value; searchInput.value = ''; searchInput.value = val;
                searchInput.addEventListener('input', (e) => {
                    p.search = e.target.value;
                    p.currentPage = 1;
                    debounceSearch(() => window.renderView('records'), 500);
                });
            }
        } catch (err) {
            console.error(err);
            viewContainer.innerHTML = `<div class="error-state">${err.message}</div>`;
        }
        return;
    }
    else if (viewName === 'reports') {
        pageTitle.innerText = t('page_reports');
        const pRows = Object.keys(state.pharmacies).map(k => {
            const p = state.pharmacies[k];
            const stockDetails = p.stock.map(m => `${m.name} (${m.qty})`).join(' | ');
            return `<tr><td><strong>${p.name.fr}</strong></td><td>${p.patients}</td><td>${stockDetails || '---'}</td></tr>`;
        }).join('');

        content += `
            <div class="page-header" style="justify-content: flex-end;">
                <div style="display:flex; gap: 10px;">
                    <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                    <button class="primary-btn btn-excel" onclick="window.exportToExcel('reports-table', 'Reports')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                </div>
            </div>
            <div class="table-container">
                <div class="table-header">${t('stat_pharmacies')}</div>
                <table id="reports-table">
                    <thead><tr><th>${t('th_pharmacy')}</th><th>${t('stat_patients')}</th><th>${t('stock_available')}</th></tr></thead>
                    <tbody>${pRows}</tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'analytical_reports' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = t('nav_analyses');
        const timeframe = activeReportTab; // 'day', 'week', 'month', 'year'

        // Fetch Data for the selected timeframe
        let startDate = new Date();
        if (timeframe === 'day') startDate.setDate(startDate.getDate() - 30); // Show last 30 days (grouped by day)
        else if (timeframe === 'week') startDate.setDate(startDate.getDate() - 14); // Show last 2 weeks
        else if (timeframe === 'month') startDate.setMonth(startDate.getMonth() - 3); // Show last 3 months
        else if (timeframe === 'year') startDate.setFullYear(startDate.getFullYear() - 1); // Show last year

        const isoStart = startDate.toISOString().split('T')[0];

        // Agrégation 100% SQL — fiable, sans limite de lignes, sans groupement JS
        const [pharmRes, globalRes] = await Promise.all([
            _supabase.rpc('get_analytics_pharm',  { p_start: isoStart, p_timeframe: timeframe }),
            _supabase.rpc('get_analytics_global', { p_start: isoStart, p_timeframe: timeframe })
        ]);
        const flatPharmRows  = pharmRes.data  || [];
        const flatGlobalRows = globalRes.data || [];

        // Update pagination totals
        pagination.analytical_pharm.total = flatPharmRows.length;
        pagination.analytical_global.total = flatGlobalRows.length;

        // Slice rows
        const pharmPage = pagination.analytical_pharm;
        const globalPage = pagination.analytical_global;
        const slicedPharm = flatPharmRows.slice((pharmPage.currentPage - 1) * pharmPage.pageSize, pharmPage.currentPage * pharmPage.pageSize);
        const slicedGlobal = flatGlobalRows.slice((globalPage.currentPage - 1) * globalPage.pageSize, globalPage.currentPage * globalPage.pageSize);

        // Build Pharmacy Details Rows
        let pharmRows = slicedPharm.map(row => {
            return `
                <tr>
                    <td style="white-space:nowrap;"><strong>${window.formatReportPeriod(row.period_key, timeframe)}</strong></td>
                    <td>${state.pharmacies[row.pharmacy_id]?.name?.fr || 'Pharmacie #' + row.pharmacy_id}</td>
                    <td style="text-align:center;"><span class="status-badge info">${row.unique_patients}</span></td>
                </tr>
            `;
        }).join('');

        // Build Global Medicine Report Rows
        let globalRows = slicedGlobal.map(row => {
            return `
                <tr>
                    <td style="white-space:nowrap;"><strong>${window.formatReportPeriod(row.period_key, timeframe)}</strong></td>
                    <td><strong>${row.medicine_name}</strong></td>
                    <td style="text-align:center;"><span class="status-badge info">${row.unique_patients}</span></td>
                    <td style="text-align:center;"><span class="status-badge good">${row.total_qty}</span></td>
                </tr>
            `;
        }).join('');

        content += `
            <div class="page-header" style="flex-direction: column; align-items: flex-start; gap: 15px;">
                <div class="report-tabs">
                    <button class="report-tab ${timeframe === 'day' ? 'active' : ''}" onclick="window.setReportTab('day')">${t('th_day')}</button>
                    <button class="report-tab ${timeframe === 'week' ? 'active' : ''}" onclick="window.setReportTab('week')">${t('th_week')}</button>
                    <button class="report-tab ${timeframe === 'month' ? 'active' : ''}" onclick="window.setReportTab('month')">${t('th_month')}</button>
                    <button class="report-tab ${timeframe === 'year' ? 'active' : ''}" onclick="window.setReportTab('year')">${t('th_year')}</button>
                </div>
            </div>

            <!-- Global Medication Report Section (NEW) -->
            <div class="table-header" style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <span><i class="fa-solid fa-earth-africa"></i> ${t('th_global_report')} - ${t('th_' + timeframe)}</span>
                <button class="primary-btn btn-excel" onclick="window.exportToExcel('global-report-table', 'Rapport_Global_${timeframe}')" style="background:#059669; font-size:12px; padding:4px 10px;">
                    <i class="fa-solid fa-file-excel"></i> Excel
                </button>
            </div>
            <div class="table-container shadow-sm animated fadeIn" style="margin-bottom: 40px; border-left: 5px solid var(--primary-brand);">
                <table id="global-report-table">
                    <thead>
                        <tr>
                            <th style="width:150px;">${t('th_period')}</th>
                            <th>${t('th_med')}</th>
                            <th style="text-align:center;">${t('th_beneficiaries')}</th>
                            <th style="text-align:center;">${t('th_total_consumed')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${globalRows || `<tr><td colspan="4" style="text-align:center; padding:30px; color:var(--text-muted);">${t('status_empty')}</td></tr>`}
                    </tbody>
                </table>
            </div>
            ${renderPaginationControls('analytical_global')}

            <!-- Pharmacy Detail Section -->
            <div class="table-header" style="margin-bottom:10px; margin-top:30px; display:flex; justify-content:space-between; align-items:center;">
                <span><i class="fa-solid fa-hospital"></i> ${t('nav_analyses')} (${t('th_pharmacy')})</span>
                <button class="primary-btn btn-excel" onclick="window.exportToExcel('pharmacy-report-table', 'Report_Pharmacies_${timeframe}')" style="background:#059669; font-size:12px; padding:4px 10px;">
                    <i class="fa-solid fa-file-excel"></i> Excel
                </button>
            </div>
            <div class="table-container shadow-sm animated fadeIn">
                <table id="pharmacy-report-table">
                    <thead>
                        <tr>
                            <th style="width:150px;">${t('th_period')}</th>
                            <th>${t('th_pharmacy')}</th>
                            <th style="text-align:center;">${t('th_beneficiaries')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pharmRows || `<tr><td colspan="3" style="text-align:center; padding:30px; color:var(--text-muted);">${t('status_empty')}</td></tr>`}
                    </tbody>
                </table>
            </div>
            ${renderPaginationControls('analytical_pharm')}
        `;

        // Export active tab setter to window
        window.setReportTab = function (tab) {
            activeReportTab = tab;
            window.renderView('analytical_reports');
        };
    }
    else if (viewName === 'my_register' && currentUser && currentUser.role === 'pharmacy') {
        const pharmId = currentUser.pharmacyId;
        pageTitle.innerText = t('nav_my_register');

        const myLogs = [];
        state.transfers.filter(tItem => tItem.toPharmacy == pharmId).forEach(tItem => {
            myLogs.push({
                ref: `TRN-${tItem.id}`,
                date: tItem.date,
                action: tItem.isReturn ? 'Retour' : 'Réception',
                med: tItem.medName,
                qty: tItem.isReturn ? `-${tItem.qty}` : `+${tItem.qty}`,
                target: 'Stock Central',
                worker: window.parseWorkerName(tItem.dispensedBy, currentLang)
            });
        });
        state.dispensations.filter(d => d.pharmacyId == pharmId).forEach(d => {
            myLogs.push({
                ref: d.reference,
                date: d.date,
                action: 'Délivrance',
                med: d.medName,
                qty: `-${d.qty}`,
                target: d.patientName,
                worker: window.parseWorkerName(d.dispensedBy, currentLang)
            });
        });
        myLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        const rows = myLogs.map(l => `
            <tr>
                <td><small><strong>${l.ref || '-'}</strong></small></td>
                <td>${formatDate(l.date)}</td>
                <td><span class="status-badge ${l.qty.startsWith('+') ? 'good' : 'warning'}">${l.action}</span></td>
                <td><strong>${l.med}</strong></td>
                <td><span dir="ltr">${l.qty}</span></td>
                <td>${l.target}</td>
                <td>${l.worker}</td>
            </tr>
        `).join('');

        content += `
            <div class="page-header" style="justify-content: flex-end;">
               <button class="primary-btn btn-excel" onclick="window.exportToExcel('my-register-table', 'My_Register')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
            </div>
            <div class="table-container shadow-sm">
                <table id="my-register-table">
                    <thead>
                        <tr>
                            <th>Réf.</th>
                            <th>${t('th_date')}</th>
                            <th>${t('th_action')}</th>
                            <th>${t('th_med')}</th>
                            <th>${t('th_qty')}</th>
                            <th>${t('th_pharmacy')} / Patient</th>
                            <th>${t('th_worker')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows || '<tr><td colspan="7" style="text-align:center;">Aucune activité</td></tr>'}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'manage_pharmacies' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = "Gestion des Pharmacies";
        const plist = Object.entries(state.pharmacies); // [key, value] pairs

        content += `
            <div class="page-header" style="justify-content: flex-end; gap: 10px;">
                <button class="primary-btn" style="background:var(--danger-red);" onclick="window.resetCounters()">
                    <i class="fa-solid fa-rotate"></i> Réinitialiser les Compteurs (0)
                </button>
                <button class="primary-btn" onclick="window.addPharmacy()">
                    <i class="fa-solid fa-plus"></i> Nouvelle Pharmacie
                </button>
            </div>
            
            <div class="table-container shadow-sm">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom (AR)</th>
                            <th>Nom (FR)</th>
                            <th>Couleur</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${plist.map(([pharmKey, p]) => `
                            <tr>
                                <td>${pharmKey}</td>
                                <td>${p.name ? p.name.ar : ''}</td>
                                <td><strong>${p.name ? p.name.fr : ''}</strong></td>
                                <td><div style="width:20px; height:20px; border-radius:4px; background:${p.color || '#047857'};"></div></td>
                                <td class="action-cell">
                                    <button class="icon-btn edit-btn" onclick="window.editPharmacy(${pharmKey})" title="Modifier"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="icon-btn delete-btn" onclick="window.deletePharmacy(${pharmKey})" title="Supprimer"><i class="fa-solid fa-trash-can"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    viewContainer.innerHTML = content;
    window.checkAndShowOrphanRepair();

    // Listeners for Patients View (Merged here for reachability)
    if (viewName === 'patients') {
        const importPatientsInput = document.getElementById('import-patients-excel');
        if (importPatientsInput) {
            importPatientsInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                window.handlePatientsImport(file);
            });
        }
    }
}
function generateCentralTableRows(meds) {
    if (meds.length === 0) return `<tr><td colspan="${currentUser && currentUser.role === 'admin' ? 8 : 6}" style="text-align:center;">---</td></tr>`;
    return meds.map(m => {
        let status = `<span class="status-badge good">${t('status_good')}</span>`;
        if (m.qty === 0) status = `<span class="status-badge danger">${t('status_empty')}</span>`;
        else if (m.qty < 50) status = `<span class="status-badge warning">${t('status_low')}</span>`;

        let actions = '';
        let checkbox = '';
        if (currentUser && currentUser.role === 'admin') {
            checkbox = `<td><input type="checkbox" class="med-checkbox" value="${m.id}"></td>`;
            actions = `
                <td>
                    <button class="icon-btn edit-btn" onclick="window.editMedicine(${m.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="icon-btn delete-btn" onclick="window.deleteMedicine(${m.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
        }

        return `
            <tr>
                ${checkbox}
                <td><strong>${m.name}</strong></td>
                <td>${m.batch}</td>
                <td>${m.qty}</td>
                <td>${formatDate(m.entryDate)}</td>
                <td>${formatDate(m.expiry)}</td>
                <td>${m.price ? m.price.toFixed(2) : '0.00'}</td>
                <td>${status}</td>
                ${actions}
            </tr>
        `;
    }).join('');
}

// Central Stock Import Handler (standalone, so it works as an event listener reference)
window.handleCentralImport = async function (e) {
    const file = e.target.files[0];
    if (!file) return;
    window.showToast("Importation en cours...", "info");
    const reader = new FileReader();
    reader.onload = async function (evt) {
        try {
            const data = evt.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.SheetNames[0];
            const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { header: 1 });
            const medsToInsert = [];

            function cleanDate(val) {
                if (!val || String(val).trim() === '' || String(val).trim() === '-') return null;
                if (typeof val === 'number') {
                    const d = new Date((val - (25567 + 2)) * 86400 * 1000);
                    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
                }
                const d = new Date(val);
                return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
            }

            let hasHeaders = false;
            let nameIdx = 0, batchIdx = 1, qtyIdx = 2, entryIdx = 3, expIdx = 4, priceIdx = 5;

            if (rawRows.length > 0) {
                for (let i = 0; i < rawRows[0].length; i++) {
                    let val = String(rawRows[0][i] || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (val.includes('name') || val.includes('dawa') || val.includes('med') || val.includes('nom') || val.includes('design') || val.includes('article') || val.includes('اسم')) { hasHeaders = true; nameIdx = i; }
                    else if (val.includes('batch') || val.includes('lot') || val.includes('tashgil') || val.includes('تشغيل')) { hasHeaders = true; batchIdx = i; }
                    else if (val.includes('qty') || val.includes('quant') || val.includes('qte') || val.includes('stock') || val.includes('كمية')) { hasHeaders = true; qtyIdx = i; }
                    else if ((val.includes('entry') || val.includes('date')) && !val.includes('exp') && !val.includes('perem')) { hasHeaders = true; entryIdx = i; }
                    else if (val.includes('exp') || val.includes('perem') || val.includes('انتهاء')) { hasHeaders = true; expIdx = i; }
                    else if (val.includes('price') || val.includes('prix') || val.includes('achat') || val.includes('سعر')) { hasHeaders = true; priceIdx = i; }
                }
            }

            const startIndex = hasHeaders ? 1 : 0;
            for (let i = startIndex; i < rawRows.length; i++) {
                const r = rawRows[i];
                if (!r || r.length === 0) continue;
                let name = String(r[nameIdx] || '').trim();
                let batch = String(r[batchIdx] || 'N/A').trim();
                if (batch === '' || batch === 'undefined') batch = 'N/A';
                let qty = parseInt(r[qtyIdx]) || 0;
                let entryDate = cleanDate(r[entryIdx]);
                let expiry = cleanDate(r[expIdx]);
                let price = parseFloat(r[priceIdx]) || 0;
                if (name && name !== '' && name !== 'undefined' && name !== 'Unknown') {
                    medsToInsert.push({ name, batch, qty, entry_date: entryDate, expiry_date: expiry, price });
                }
            }

            // Step 2: Smart Upsert Strategy
            // We must preserve existing medicine IDs to keep database links (transfers, pharmacy stock) intact.
            const { data: existingMeds } = await _supabase.from('medicines').select('id, name, batch');
            const medMap = {};
            (existingMeds || []).forEach(m => {
                const key = `${String(m.name).toLowerCase().trim()}|${String(m.batch).toLowerCase().trim()}`;
                medMap[key] = m.id;
            });

            const finalMeds = medsToInsert.map(m => {
                const key = `${String(m.name).toLowerCase().trim()}|${String(m.batch).toLowerCase().trim()}`;
                if (medMap[key]) {
                    return { ...m, id: medMap[key] }; // Update existing record
                }
                return m; // Insert new record
            });

            let successCount = 0;
            for (let i = 0; i < finalMeds.length; i += 500) {
                const chunk = finalMeds.slice(i, i + 500);
                // Use upsert if unique constraint is available, otherwise fall back to explicit insert/update
                const { error: upsertErr } = await _supabase.from('medicines').upsert(chunk, { onConflict: 'name,batch' });

                if (upsertErr) {
                    console.warn("Standard Upsert failed, using manual batch processing:", upsertErr);
                    for (const m of chunk) {
                        if (m.id) {
                            await _supabase.from('medicines').update(m).eq('id', m.id);
                        } else {
                            await _supabase.from('medicines').insert(m);
                        }
                    }
                }
                successCount += chunk.length;
            }

            window.optimisticUpdate('central_stock_change');
            window.showToast("Importation réussie! " + successCount + " articles traités.");
            window.renderView('central');
        } catch (err) {
            console.error("Import error:", err);
            window.showToast("Erreur API lors de l'enregistrement", "error");
        }
    };
    reader.readAsBinaryString(file);
};

window.handlePatientsImport = function (file) {
    window.showToast("Importation en cours...", "info");
    const reader = new FileReader();
    reader.onload = async function (evt) {
        try {
            const data = evt.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.SheetNames[0];
            const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
            const patsToInsert = [];
            rows.forEach(r => {
                let name = 'Unknown', nid = '-', phone = '-', hospital = '-';
                let keys = Object.keys(r);
                for (let ObjectKey of keys) {
                    let k = ObjectKey.trim().toLowerCase();
                    let val = r[ObjectKey];
                    if (k.includes('الاسم') || k.includes('name') || k.includes('مريض')) name = val;
                    else if (k.includes('وطني') || k.includes('national') || k.includes('identit') || (k.includes('رقم') && k.includes('تعريف'))) nid = val;
                    else if (k.includes('هاتف') || k.includes('جوال') || k.includes('phone') || k.includes('tel') || k.includes('téléphone')) phone = val;
                    else if (k.includes('مستشفى') || k.includes('مركز') || k.includes('جهة') || k.includes('hospital') || k.includes('hopital') || k.includes('hôpital') || k.includes('structure') || k.includes('etablissement') || k.includes('يتابع')) hospital = val;
                }
                if (name === 'Unknown' && keys.length > 0) name = r[keys[0]];
                if (name && name !== 'Unknown') {
                    patsToInsert.push({ name, national_id: nid, phone, hospital });
                }
            });

            const { data: maxRowsPats } = await _supabase.from('patients').select('id').order('id', { ascending: false }).limit(1);
            let currentPatId = (maxRowsPats && maxRowsPats.length > 0) ? parseInt(maxRowsPats[0].id) : 0;

            patsToInsert.forEach(p => {
                currentPatId++;
                p.id = currentPatId;
            });

            for (let i = 0; i < patsToInsert.length; i += 1000) {
                const res = await _supabase.from('patients').insert(patsToInsert.slice(i, i + 1000));
                if (res.error) throw res.error;
            }

            window.optimisticUpdate('central_stock_change');
            window.showToast(t('alert_success'));
            window.renderView('patients');
        } catch (err) {
            console.error("Import patients error:", err);
            window.showToast("Erreur d'importation des patients", "error");
        }
    };
    reader.readAsBinaryString(file);
};

// Per-pharmacy stock cache (10s TTL) — avoids re-fetching on rapid tab switches
const _pharmStockCache    = {};   // pharmId → allStockData
const _pharmStockCacheTs  = {};   // pharmId → timestamp

// Central medicines + patients lists cache (60s TTL) — rarely change
let _pharmListsMeds = null, _pharmListsMedTs = 0;
let _pharmListsPats = null, _pharmListsPatTs = 0;

// Call this after any write that changes pharmacy stock
window.invalidatePharmacyStockCache = function (pharmId) {
    delete _pharmStockCacheTs[pharmId];
};

window.renderPharmacy = async function (pharmId, subView = 'all') {
    // Track active pharmacy for pagination awareness
    window.activePharmacyId = pharmId;
    window.activeSubView = subView;
    const p = state.pharmacies[pharmId];
    pageTitle.innerText = p.name.fr;

    const isFullAdmin = currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager');

    let notificationsHtml = '';
    const myReceipts = (state.receipts || []).filter(r => (r.pharmacy_id || r.pharmacyId) == pharmId).slice().reverse();
    if (myReceipts.length > 0) {
        notificationsHtml = `
            <div class="transfer-card" style="border-left: 5px solid var(--highlight-gold);">
                <div class="block-title" style="color: var(--primary-brand);"><i class="fa-solid fa-bell" style="color:var(--highlight-gold);"></i> Boîte de réception (Décharges)</div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Référence</th><th>Date</th><th>Émetteur</th><th>Action</th></tr></thead>
                        <tbody>
                            ${myReceipts.map(r => `
                                <tr>
                                    <td><strong>${r.id}</strong></td>
                                    <td>${formatDate(r.date)}</td>
                                    <td>${r.workerName}</td>
                                    <td>
                                        <button class="primary-btn" style="background:var(--danger-red); font-size:12px; padding:6px 12px;" onclick="window.downloadSavedReceipt('${r.id}')">
                                            <i class="fa-solid fa-file-pdf"></i> Saisir le reçu
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // --- DATA FETCHING (Optimized for 63 articles) ---
    const pStateKey = `pharmacy_${pharmId}`;
    if (!pagination[pStateKey]) {
        pagination[pStateKey] = { currentPage: 1, pageSize: 25, total: 0, search: '' };
    }
    const pStockState = pagination[pStateKey];

    const pHistoryKey = `history_${pharmId}`;
    if (!pagination[pHistoryKey]) {
        pagination[pHistoryKey] = { currentPage: 1, pageSize: 25, total: 0, search: '' };
    }
    const pHistoryState = pagination[pHistoryKey];

    // 1. Fetch ALL stock — served from cache for 10s to make tab switches instant
    let allStockData = [];
    const STOCK_TTL = 10000;
    if (_pharmStockCache[pharmId] && _pharmStockCacheTs[pharmId] && (Date.now() - _pharmStockCacheTs[pharmId]) < STOCK_TTL) {
        allStockData = _pharmStockCache[pharmId];
    } else {
        let stockFrom = 0;
        const stockStep = 1000;
        while (stockFrom < 50000) {
            const { data, error } = await _supabase.from('pharmacy_stock')
                .select('*, medicines(id, name, batch, expiry_date)')
                .eq('pharmacy_id', pharmId)
                .range(stockFrom, stockFrom + stockStep - 1);

            if (error) throw error;
            if (!data || data.length === 0) break;
            allStockData = allStockData.concat(data);
            stockFrom += stockStep;
            if (data.length < stockStep) break;
        }
        _pharmStockCache[pharmId]   = allStockData;
        _pharmStockCacheTs[pharmId] = Date.now();
    }

    // Update local p.stock cache to support other functions (returns, etc)
    p.stock = (allStockData || []).filter(ps => ps.medicines != null).map(ps => ({
        id: ps.medicines.id,
        name: ps.medicines.name,
        batch: ps.medicines.batch,
        qty: ps.qty,
        expiry: ps.medicines.expiry_date,
        ps_id: ps.id
    }));

    // 2. Filter out orphans and apply search locally
    let filteredStock = (allStockData || []).filter(ps => ps.medicines != null);

    const searchLow = (pStockState.search || '').toLowerCase().trim();
    if (searchLow) {
        filteredStock = filteredStock.filter(ps =>
            ps.medicines.name.toLowerCase().includes(searchLow) ||
            (ps.medicines.batch && ps.medicines.batch.toLowerCase().includes(searchLow))
        );
    }

    // 3. Apply sort then local pagination
    if (pStockState.sortCol) {
        const asc = pStockState.sortDir !== 'desc';
        filteredStock.sort((a, b) => {
            let aV, bV;
            const col = pStockState.sortCol;
            if (col === 'name')   { aV = (a.medicines?.name || '').toLowerCase();  bV = (b.medicines?.name || '').toLowerCase(); }
            else if (col === 'batch')  { aV = (a.medicines?.batch || '').toLowerCase(); bV = (b.medicines?.batch || '').toLowerCase(); }
            else if (col === 'expiry') { aV = a.medicines?.expiry_date || '9999'; bV = b.medicines?.expiry_date || '9999'; }
            else if (col === 'qty')    { aV = a.qty || 0; bV = b.qty || 0; }
            else return 0;
            return aV < bV ? (asc ? -1 : 1) : aV > bV ? (asc ? 1 : -1) : 0;
        });
    }
    pStockState.total = filteredStock.length;
    const from = (pStockState.currentPage - 1) * pStockState.pageSize;
    const to = from + pStockState.pageSize;
    const currentStockPage = filteredStock.slice(from, to).map(ps => ({
        id: ps.medicines.id,
        ps_id: ps.id, // Primary key in pharmacy_stock
        name: ps.medicines.name,
        batch: ps.medicines.batch,
        expiry: ps.medicines.expiry_date,
        qty: ps.qty
    }));

    // 4. Fetch Meta in Parallel
    // - expiredTotal: computed locally from allStockData (no extra DB call needed)
    // - history:      fetched only when on history tab
    // - medicines/patients lists: cached 60s (rarely change)
    const numericId = parseInt(pharmId);
    const today = new Date().toISOString().split('T')[0];

    // Compute expired count locally — allStockData already has medicines.expiry_date
    const expiredLocalCount = allStockData.filter(
        ps => ps.medicines && ps.medicines.expiry_date && ps.medicines.expiry_date < today
    ).length;
    const expiredTotal = { count: expiredLocalCount };

    // History: only fetch when the user is on the history tab
    let dispHistory = [], historyTotal = 0;
    if (subView === 'history') {
        const histResult = await fetchTableData('dispensations', {
            page: pHistoryState.currentPage,
            pageSize: pHistoryState.pageSize,
            search: pHistoryState.search,
            filters: { pharmacy_id: numericId },
            order: pHistoryState.order || { col: 'date', ascending: false }
        });
        dispHistory  = histResult.data  || [];
        historyTotal = histResult.total || 0;
    }
    pHistoryState.total = historyTotal;

    // Medicines + patients lists: 60s cache — only re-fetch if stale
    const LISTS_TTL = 60000;
    if (!_pharmListsMeds || (Date.now() - _pharmListsMedTs) > LISTS_TTL) {
        const { data } = await _supabase.rpc('get_all_medicines');
        _pharmListsMeds  = data;
        _pharmListsMedTs = Date.now();
    }
    if (!_pharmListsPats || (Date.now() - _pharmListsPatTs) > LISTS_TTL) {
        const { data } = await _supabase.from('patients').select('name, national_id').order('name', { ascending: true }).limit(100);
        _pharmListsPats  = data;
        _pharmListsPatTs = Date.now();
    }
    const recentMeds = _pharmListsMeds;
    const recentPats = _pharmListsPats;

    // Remaining counts still fetched in parallel (lightweight count-only queries)
    const [dispTotal, lowStockTotal] = await Promise.all([
        _supabase.from('dispensations').select('id', { count: 'exact', head: true }).eq('pharmacy_id', numericId),
        _supabase.from('pharmacy_stock').select('id', { count: 'exact', head: true }).eq('pharmacy_id', numericId).lt('qty', 50)
    ]);

    // Data for Dispense Datalist (Only valid medicines in stock)
    const searchableStock = (allStockData || []).filter(ps => ps.medicines != null && ps.qty > 0).map(ps => ({
        id: ps.medicines.id,
        name: ps.medicines.name,
        batch: ps.medicines.batch,
        qty: ps.qty,
        expiry: ps.medicines.expiry_date
    }));

    // --- HTML BUILDING ---
    const dashboardHeaderHtml = `
        <div class="page-header" style="justify-content: flex-end; gap: 10px;">
            ${isFullAdmin ? `
            <button class="primary-btn" style="background:#059669;" onclick="document.getElementById('import-pharm-stock-${pharmId}').click()">
                <i class="fa-solid fa-file-import"></i> ${currentLang === 'ar' ? 'استيراد مخزون ابتدائي' : 'Import Stock Initial'}
            </button>
            <input type="file" id="import-pharm-stock-${pharmId}" accept=".xlsx, .xls, .csv" style="display:none;" onchange="window.importPharmacyStock(event, ${pharmId})">
            
            <button class="primary-btn" style="background:#ef4444;" onclick="window.deleteSelectedPharmacyStock(${pharmId})">
                <i class="fa-solid fa-trash-can"></i> ${t('btn_delete_selected')}
            </button>

            <button class="primary-btn" style="background:var(--accent-green);" onclick="window.openDistForPharmacy(${pharmId})">
                <i class="fa-solid fa-truck-ramp-box"></i> ${currentLang === 'ar' ? 'إرسال أدوية لهذه الصيدلية' : 'Restocker cette pharmacie'}
            </button>
            ` : ''}
        </div>
        <div class="stat-grid-6" style="margin-bottom: 24px;">
            <div class="stat-card sc-green" onclick="window.renderPharmacy(${pharmId}, 'all')">
                <div class="stat-val">${pStockState.total}</div>
                <div class="stat-label">Stock Actuel</div>
            </div>
            <div class="stat-card sc-purple" onclick="window.renderPharmacy(${pharmId}, 'history')">
                <div class="stat-val">${dispTotal.count || 0}</div>
                <div class="stat-label">Délivrances</div>
            </div>
            <div class="stat-card sc-orange">
                <div class="stat-val">${lowStockTotal.count || 0}</div>
                <div class="stat-label">Stock Faible</div>
            </div>
            <div class="stat-card sc-red">
                <div class="stat-val">${expiredTotal.count || 0}</div>
                <div class="stat-label">Périmés</div>
            </div>
        </div>
    `;

    const tabsHtml = `
        <div class="report-tabs no-print" style="margin-bottom: 25px; background: white; padding: 10px; border: 1px solid var(--border-color); border-radius: 12px; box-shadow: var(--shadow-sm);">
            <button class="report-tab ${subView === 'all' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'all')">
                <i class="fa-solid fa-boxes-stacked"></i> ${currentLang === 'ar' ? 'المخزون' : 'Stock Actuel'}
            </button>
            <button class="report-tab ${subView === 'pharm-dispense' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-dispense')">
                <i class="fa-solid fa-hand-holding-medical"></i> ${currentLang === 'ar' ? 'صرف دواء' : 'Délivrance'}
            </button>
            <button class="report-tab ${subView === 'history' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'history')">
                <i class="fa-solid fa-clock-rotate-left"></i> ${currentLang === 'ar' ? 'السجل' : 'Historique'}
            </button>
            <button class="report-tab ${subView === 'pharm-order' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-order')">
                <i class="fa-solid fa-cart-shopping"></i> ${currentLang === 'ar' ? 'طلب توريد' : 'Commande'}
            </button>
            <button class="report-tab ${subView === 'pharm-inbox' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-inbox')">
                <i class="fa-solid fa-inbox"></i> ${currentLang === 'ar' ? 'الرسائل' : 'Réception'}
            </button>
        </div>
    `;

    // --- MAIN VIEWS ---
    const modernStockHtml = `
        <div class="transfer-card animated fadeIn" style="border-top: 5px solid var(--accent-green);">
            <div class="block-title" style="color:var(--accent-green); display:flex; justify-content:space-between; align-items:center; padding: 20px 25px;">
                <div>
                    <div style="font-size:1.2rem; font-weight:800;">Stock de la Pharmacie</div>
                    <div style="font-size:0.85rem; color:#94a3b8; display:flex; align-items:center; gap:10px;">
                        <span>${pStockState.total} articles affichés</span>
                        <button class="icon-btn" style="color:var(--primary-brand); font-size:14px;" onclick="window.renderPharmacy(${pharmId}, 'all')" title="Actualiser">
                            <i class="fa-solid fa-arrows-rotate"></i>
                        </button>
                        <button class="icon-btn" style="color:#059669; font-size:14px;" onclick="window.exportPharmacyStockToExcel(${pharmId})" title="Exporter Excel">
                            <i class="fa-solid fa-file-excel"></i>
                        </button>
                        ${isFullAdmin ? `
                        <button class="icon-btn" style="color:#7c3aed; font-size:14px;" onclick="window.consolidatePharmacyStock(${pharmId})" title="Consolider ودمج المكررات">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </button>` : ''}
                        ${isFullAdmin && pharmId == 4 ? `
                        <button class="icon-btn" style="color:#2563eb; font-size:14px;" onclick="window.restoreHospitalNationalStock()" title="Restaurer depuis l'image 🖼️">
                            <i class="fa-solid fa-image"></i>
                        </button>` : ''}
                    </div>
                </div>
                <div class="search-box" style="margin:0; width:300px; background:#f8fafc;">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" id="search-pharm-stock-main" placeholder="Rechercher..." value="${pStockState.search || ''}">
                </div>
            </div>
            <div class="table-container shadow-sm">
                <table id="pharm-stock-table-${pharmId}">
                    <thead>
                        <tr style="background:#f8fafc;">
                            ${isFullAdmin ? `<th style="width:50px; text-align:center;"><input type="checkbox" onchange="window.toggleAllPharmacyStock(this, ${pharmId})"></th>` : ''}
                            <th data-col="name">Médicament</th>
                            <th data-col="batch">Lot</th>
                            <th data-col="expiry">Expiration</th>
                            <th data-col="qty">Quantité</th>
                            <th style="text-align:right;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${currentStockPage.map(m => `
                            <tr class="${isExpired(m.expiry) ? 'expired-row' : ''}">
                                ${isFullAdmin ? `<td style="text-align:center;"><input type="checkbox" class="pharm-stock-checkbox-${pharmId}" value="${m.id}"></td>` : ''}
                                <td><strong>${m.name}</strong></td>
                                <td><span class="badge-soft">${m.batch || '-'}</span></td>
                                <td style="${isExpired(m.expiry) ? 'color:red; font-weight:700;' : ''}">${formatDate(m.expiry)}</td>
                                <td><span class="status-badge ${m.qty < 50 ? 'warning' : 'good'}">${m.qty}</span></td>
                                <td style="text-align:right; display:flex; gap:8px; justify-content:flex-end;">
                                    <button class="icon-btn edit-btn" title="Délivrer" onclick="window.renderPharmacy(${pharmId}, 'pharm-dispense')"><i class="fa-solid fa-hand-holding-medical"></i></button>
                                    <button class="icon-btn" title="Retour au Central" onclick="window.returnToCentral(${pharmId}, ${m.id})"><i class="fa-solid fa-rotate-left"></i></button>
                                    ${isFullAdmin ? `<button class="icon-btn delete-btn" onclick="window.deleteFromPharmacyStock(${pharmId}, ${m.id})"><i class="fa-solid fa-trash"></i></button>` : ''}
                                </td>
                            </tr>
                        `).join('') || `<tr><td colspan="6" style="text-align:center; padding:50px;">Aucun médicament trouvé.</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div style="padding:15px 25px; background:#f8fafc; border-top:1px solid #f1f5f9;">
                ${renderPaginationControls(pStateKey)}
            </div>
        </div>
    `;

    const dispenseHtml = `
        <div class="transfer-card">
            <div class="block-title"><i class="fa-solid fa-hand-holding-medical"></i> Délivrance de médicaments</div>
            <form id="bulk-dispense-form-${pharmId}">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label style="font-weight:800;">1. Patient</label>
                    <input type="text" id="disp-patient-${pharmId}" list="patients-list" required placeholder="Nom du patient..." autocomplete="off" style="max-width: 400px; border: 2px solid var(--primary-brand);">
                    <datalist id="patients-list">${(recentPats || []).map(pat => `<option value="${pat.name} (${pat.national_id || '-'})"></option>`).join('')}</datalist>
                </div>
                <div class="table-container" style="border: 1px solid #e5e7eb; margin-bottom:20px;">
                    <table style="width:100%;">
                        <thead><tr><th>Médicament</th><th>Quantité</th><th></th></tr></thead>
                        <tbody id="bulk-disp-tbody-${pharmId}"><!-- Rows injected here --></tbody>
                    </table>
                </div>
                <datalist id="disp-meds-list-${pharmId}">
                    ${searchableStock.filter(m => !isExpired(m.expiry)).map(m => `<option value="${m.name} [${m.batch}] (Stock: ${m.qty})" data-id="${m.id}"></option>`).join('')}
                </datalist>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <button type="button" class="primary-btn" onclick="window.addDispRow(${pharmId})"><i class="fa-solid fa-plus-circle"></i> Ajouter</button>
                    <div style="display:flex; gap:10px;">
                        ${isFullAdmin ? `<button type="button" class="primary-btn" style="background:#6366f1;" onclick="window.triggerExceptionalDispense(${pharmId})"><i class="fa-solid fa-bolt"></i> ${currentLang === 'ar' ? 'صرف استثنائي' : 'Saisie Exceptionnelle'}</button>` : ''}
                        <button type="submit" class="primary-btn" style="background:var(--accent-green); padding:12px 32px;"><i class="fa-solid fa-check-double"></i> Confirmer la Délivrance</button>
                    </div>
                </div>
            </form>
        </div>
    `;

    const orderHtml = `
        <div class="transfer-card" style="border-left: 5px solid var(--info-blue);">
            <div class="block-title" style="color:var(--info-blue);"><i class="fa-solid fa-cart-shopping"></i> Demande d'Approvisionnement</div>
            <form id="order-form-${pharmId}">
                <div class="table-container" style="margin-bottom:20px;">
                    <table style="width:100%;">
                        <thead><tr><th>Médicament</th><th>Quantité</th><th></th></tr></thead>
                        <tbody id="order-tbody-${pharmId}"><!-- Rows --></tbody>
                    </table>
                </div>
                <datalist id="central-meds-list-${pharmId}">${(recentMeds || []).map(m => `<option value="${m.name}"></option>`).join('')}</datalist>
                <div style="display:flex; justify-content:space-between;">
                    <button type="button" class="primary-btn" onclick="window.addOrderRow(${pharmId})"><i class="fa-solid fa-plus-circle"></i> Ajouter</button>
                    <button type="submit" class="primary-btn" style="background:var(--info-blue);"><i class="fa-solid fa-paper-plane"></i> Envoyer</button>
                </div>
            </form>
        </div>
    `;

    // --- FINAL BODY ---
    let finalBody = '';
    if (subView === 'history') {
        finalBody = `
            <div class="transfer-card animated fadeIn">
                <div class="block-title" style="display:flex; justify-content:space-between; align-items:center; padding: 20px 25px;">
                    <div><i class="fa-solid fa-clock-rotate-left"></i> Historique des Délivrances</div>
                    <div class="search-box" style="margin:0; width:300px; background:#f8fafc;">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="search-pharm-history" placeholder="Rechercher (médoc, patient)..." value="${pHistoryState.search || ''}">
                    </div>
                </div>
                <div class="table-container shadow-sm">
                    <table id="pharm-hist-table-${pharmId}">
                        <thead><tr><th data-col="reference">Réf.</th><th data-col="date">Date</th><th data-col="patient_name">Patient</th><th data-col="medicine_name">Médicament</th><th data-col="qty">Qté</th><th data-col="dispensed_by">Staff</th></tr></thead>
                        <tbody>
                            ${dispHistory.map(d => `
                                <tr>
                                    <td><strong>PR-${d.reference || '-'}</strong></td>
                                    <td>${formatDate(d.date)}</td>
                                    <td>${d.patient_name}</td>
                                    <td><strong>${d.medicine_name}</strong></td>
                                    <td><span class="status-badge warning">-${d.qty}</span></td>
                                    <td>${window.parseWorkerName(d.dispensed_by, currentLang)}</td>
                                </tr>
                            `).join('') || `<tr><td colspan="6" style="text-align:center; padding:30px;">Aucun historique trouvé.</td></tr>`}
                        </tbody>
                    </table>
                </div>
                <div style="padding:15px 25px; background:#f8fafc; border-top:1px solid #f1f5f9;">
                    ${renderPaginationControls(pHistoryKey)}
                </div>
            </div>
        `;
    } else if (subView === 'pharm-dispense') {
        finalBody = dispenseHtml;
    } else if (subView === 'pharm-inbox') {
        finalBody = notificationsHtml || `<div style="padding:40px; text-align:center; color:#94a3b8;">Boîte de réception vide.</div>`;
    } else if (subView === 'pharm-order') {
        finalBody = orderHtml;
    } else {
        finalBody = modernStockHtml;
    }

    viewContainer.innerHTML = dashboardHeaderHtml + tabsHtml + finalBody;
    window.attachTableSort(document.getElementById(`pharm-stock-table-${pharmId}`), (col, dir) => {
        pStockState.sortCol = col;
        pStockState.sortDir = dir;
        pStockState.currentPage = 1;
        window.renderPharmacy(pharmId, 'all');
    });
    window.attachTableSort(document.getElementById(`pharm-hist-table-${pharmId}`), (col, dir) => {
        pHistoryState.order = { col, ascending: dir === 'asc' };
        pHistoryState.currentPage = 1;
        window.renderPharmacy(pharmId, 'history');
    });

    // --- LISTENERS ---
    const stockSearch = document.getElementById('search-pharm-stock-main');
    if (stockSearch) {
        stockSearch.focus();
        const val = stockSearch.value; stockSearch.value = ''; stockSearch.value = val;
        stockSearch.addEventListener('input', window.debounce((e) => {
            pStockState.search = e.target.value;
            pStockState.currentPage = 1;
            window.renderPharmacy(pharmId, subView);
        }, 300));
    }

    const historySearch = document.getElementById('search-pharm-history');
    if (historySearch) {
        historySearch.focus();
        const val = historySearch.value; historySearch.value = ''; historySearch.value = val;
        historySearch.addEventListener('input', window.debounce((e) => {
            pHistoryState.search = e.target.value;
            pHistoryState.currentPage = 1;
            window.renderPharmacy(pharmId, subView);
        }, 300));
    }

    // Patient Search Autocomplete
    const patInput = document.getElementById(`disp-patient-${pharmId}`);
    if (patInput) {
        patInput.addEventListener('input', window.debounce(async (e) => {
            const val = e.target.value.trim();
            if (val.length < 2) return;
            const { data } = await _supabase.from('patients').select('name, national_id').or(`name.ilike.%${val}%,national_id.ilike.%${val}%`).limit(10);
            if (data) document.getElementById('patients-list').innerHTML = data.map(p => `<option value="${p.name} (${p.national_id || '-'})"></option>`).join('');
        }, 300));
    }

    // Helper: Add Dispense Row
    window.addDispRow = function (id) {
        const tbody = document.getElementById(`bulk-disp-tbody-${id}`);
        if (!tbody) return;
        const row = document.createElement('tr');
        row.className = 'bulk-disp-row';
        row.innerHTML = `
            <td>
                <input type="text" class="row-med-disp-search" list="disp-meds-list-${pharmId}" required style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;" placeholder="Médicament...">
                <input type="hidden" class="row-med">
            </td>
            <td><input type="number" class="row-qty" min="1" required placeholder="Qté" style="width:100%;"></td>
            <td style="text-align:center;"><button type="button" class="icon-btn delete-btn" onclick="this.closest('tr').remove()"><i class="fa-solid fa-xmark"></i></button></td>
        `;
        tbody.appendChild(row);

        row.querySelector('.row-med-disp-search').addEventListener('input', (e) => {
            const list = document.getElementById(`disp-meds-list-${pharmId}`);
            const option = Array.from(list.options).find(o => o.value === e.target.value);
            row.querySelector('.row-med').value = option ? option.dataset.id : '';
        });
    };

    // Auto-add first row if in dispense view
    if (subView === 'pharm-dispense') window.addDispRow(pharmId);

    const dispForm = document.getElementById(`bulk-dispense-form-${pharmId}`);
    if (dispForm && !dispForm.dataset.listenerAttached) {
        dispForm.dataset.listenerAttached = 'true';
        dispForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (dispForm.dataset.submitting === 'true') return;
            dispForm.dataset.submitting = 'true';
            const patientInput = document.getElementById(`disp-patient-${pharmId}`).value.trim();

            // Scalability: Fetch patient from DB instead of relying on potentially incomplete state.patients
            let matchedPatient = null;
            if (patientInput) {
                const { data: ptData } = await _supabase.from('patients')
                    .select('id, name, national_id, phone, hospital, status')
                    .or(`name.eq."${patientInput}",national_id.eq."${patientInput}"`)
                    .limit(1);
                if (ptData && ptData.length > 0) matchedPatient = ptData[0];
            }

            if (!matchedPatient) {
                // If not found by exact match, try a more flexible check if the input format is "Name (ID)"
                if (patientInput.includes(' (')) {
                    const namePart = patientInput.split(' (')[0];
                    const { data: ptData2 } = await _supabase.from('patients').select('id, name, national_id, phone, hospital, status').eq('name', namePart).limit(1);
                    if (ptData2 && ptData2.length > 0) matchedPatient = ptData2[0];
                }
            }

            if (!matchedPatient) {
                window.showToast(t('error_unregistered_patient') || "Patient introuvable dans le système. Veuillez d'abord l'enregistrer.", 'error');
                dispForm.dataset.submitting = 'false';
                return;
            }

            // Bloquer la délivrance si le patient est inactif
            if (matchedPatient.status === 'inactif') {
                await window.showCustomDialog({
                    title: currentLang === 'ar' ? 'مريض غير نشط' : 'Patient Inactif',
                    msg: currentLang === 'ar'
                        ? 'هذا المريض غير مفعّل. يرجى مراجعة المدير لإعادة تفعيله.'
                        : 'Ce patient est inactif. Contactez l\'administrateur pour le réactiver.',
                    icon: 'fa-ban'
                });
                dispForm.dataset.submitting = 'false';
                return;
            }

            const patientName = matchedPatient ? matchedPatient.name : patientInput;
            const rows = document.querySelectorAll('.bulk-disp-row');
            const items = [];
            let valid = true;

            // FEFO: Maintain local tracking for this dispensing session
            const localPStock = searchableStock.map(m => ({ ...m }));

            for (const row of rows) {
                const searchVal = row.querySelector('.row-med-disp-search').value;
                const qtyRequested = parseInt(row.querySelector('.row-qty').value);
                if (!searchVal || isNaN(qtyRequested)) continue;

                let medName = searchVal;
                // Clean up the name by removing everything after the first bracket or parenthesis
                if (searchVal.includes(' [')) {
                    medName = searchVal.split(' [')[0].trim();
                } else if (searchVal.includes(' (')) {
                    medName = searchVal.split(' (')[0].trim();
                }

                // FEFO for Pharmacy Stock
                const eligibleBatches = localPStock.filter(m =>
                    m.name === medName &&
                    m.qty > 0 &&
                    !isExpired(m.expiry)
                ).sort((a, b) => {
                    const parseDate = (d) => {
                        if (!d || d === '-') return new Date(8640000000000000);
                        const parts = d.split('T')[0].split(/[-/]/);
                        if (parts.length === 3) {
                            if (parts[0].length === 4) return new Date(parts[0], parts[1] - 1, parts[2]);
                            if (parts[2].length === 4) return new Date(parts[2], parts[1] - 1, parts[0]);
                        }
                        return new Date(d);
                    };
                    return parseDate(a.expiry) - parseDate(b.expiry);
                });

                const totalAvailable = eligibleBatches.reduce((acc, curr) => acc + curr.qty, 0);

                if (eligibleBatches.length === 0 || totalAvailable < qtyRequested) {
                    await window.showCustomDialog({ title: "Stock Insuffisant", msg: `Stock insuffisant pour ${medName}. Disponible: ${totalAvailable}`, icon: "fa-triangle-exclamation" });
                    valid = false;
                    break;
                }

                let remaining = qtyRequested;
                // Strict check: if user picked a specific batch in pharmacy, ensure it's the FEFO one
                if (searchVal.includes(' [')) {
                    const selectedLot = searchVal.split(' [')[1].split(']')[0];
                    const bestLot = eligibleBatches[0].batch;
                    if (selectedLot !== bestLot) {
                        const isManager = currentUser && (currentUser.role === 'admin' || currentUser.role === 'manager');
                        let bypass = window._isExceptional;
                        if (isManager) {
                            bypass = await window.showCustomDialog({
                                title: currentLang === 'ar' ? 'تجاوز شرط الصلاحية' : "Contournement FEFO",
                                msg: currentLang === 'ar' ? `تحذير! الدفعة [${bestLot}] تنتهي صلاحيتها في [${eligibleBatches[0].expiry}] (أولوية FEFO). هل تريد حقاً صرف الدفعة [${selectedLot}]؟` : `Attention! Le Lot [${bestLot}] expire le [${eligibleBatches[0].expiry}] (Priorité FEFO). Voulez-vous vraiment délivrer le Lot [${selectedLot}] ?`,
                                type: 'confirm',
                                icon: 'fa-triangle-exclamation'
                            });
                        }

                        if (!bypass) {
                            if (!isManager) {
                                await window.showCustomDialog({
                                    title: "Alerte FEFO",
                                    msg: `Attention! Le Lot [${bestLot}] expire le [${eligibleBatches[0].expiry}] (Priorité FEFO). Veuillez le délivrer en premier avant le Lot [${selectedLot}].`,
                                    icon: "fa-triangle-exclamation"
                                });
                            }
                            valid = false;
                            break;
                        }
                    }

                    // Prioritize the selected lot whether it's best or bypassed
                    const selectedIndex = eligibleBatches.findIndex(b => b.batch === selectedLot);
                    if (selectedIndex > -1) {
                        const selectedBatchObj = eligibleBatches.splice(selectedIndex, 1)[0];
                        eligibleBatches.unshift(selectedBatchObj);
                    }
                }

                for (const b of eligibleBatches) {
                    if (remaining <= 0) break;
                    const take = Math.min(b.qty, remaining);
                    items.push({ medId: b.id, qty: take, medName: b.name, batch: b.batch, expiry: b.expiry });

                    // Deduct from local tracking
                    b.qty -= take;
                    remaining -= take;
                }
            }

            if (!valid || items.length === 0) { dispForm.dataset.submitting = 'false'; return; }

            // --- REGLE DES 28 JOURS ---
            const twentyEightDaysAgo = new Date();
            twentyEightDaysAgo.setDate(twentyEightDaysAgo.getDate() - 28);

            if (!window._isExceptional) {
                const checks = items.map(item =>
                    _supabase.from('dispensations')
                        .select('date', { count: 'exact', head: false })
                        .ilike('patient_name', patientName)
                        .eq('medicine_name', item.medName)
                        .gte('date', twentyEightDaysAgo.toISOString())
                        .order('date', { ascending: false })
                        .limit(1)
                        .then(res => ({ item, data: res.data, error: res.error }))
                );
                const checkResults = await Promise.all(checks);

                for (const result of checkResults) {
                    if (result.error) continue;
                    if (result.data && result.data.length > 0) {
                        const lastDispDate = new Date(result.data[0].date).toLocaleDateString('fr-FR');
                        await window.showCustomDialog({
                            title: currentLang === 'ar' ? 'مرفوض: قاعدة الـ 28 يوماً' : "Délivrance Refusée",
                            msg: currentLang === 'ar'
                                ? `عفواً، المريض "${patientName}" استلم دواء "${result.item.medName}" حديثاً بتاريخ ${lastDispDate}.\nيجب مرور 28 يوماً كاملة قبل الصرف مجدداً لنفس الدواء.`
                                : `Échec: ${patientName} a reçu "${result.item.medName}" le ${lastDispDate}.\n28 jours doivent s'écouler.`,
                            type: 'alert',
                            icon: 'fa-ban'
                        });
                        valid = false;
                        break;
                    }
                }
            } else {
                window.showToast(currentLang === 'ar' ? 'تم تجاوز حاجز الـ 28 يوماً استثنائياً' : 'Délivrance exceptionnelle approuvée', 'info');
            }
            window._isExceptional = false;
            if (!valid) { dispForm.dataset.submitting = 'false'; return; }

            try {
                const barcode = await window.getNextCounterValue('dispense');
                const nowIso = new Date().toISOString();
                const workerName = currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Staff';

                const dispensationRecords = items.map(item => ({
                    date: nowIso, patient_name: patientName, medicine_id: item.medId,
                    medicine_name: item.medName, qty: item.qty, pharmacy_id: pharmId,
                    dispensed_by: workerName, reference: barcode
                }));
                const { error: dispErr } = await _supabase.from('dispensations').insert(dispensationRecords);
                if (dispErr) throw dispErr;

                // 2. NUCLEAR DATA INTEGRITY FIX
                const decrements = {};
                items.forEach(it => { decrements[it.medId] = (decrements[it.medId] || 0) + it.qty; });
                const uniqueMedIds = Object.keys(decrements).map(id => parseInt(id));

                const { data: allFreshRows, error: freshErr } = await _supabase.from('pharmacy_stock')
                    .select('id, medicine_id, qty')
                    .eq('pharmacy_id', pharmId)
                    .in('medicine_id', uniqueMedIds);
                if (freshErr) throw freshErr;

                const totalsMap = {};
                (allFreshRows || []).forEach(s => { totalsMap[s.medicine_id] = (totalsMap[s.medicine_id] || 0) + s.qty; });

                const stockInserts = uniqueMedIds.map(medId => {
                    const currentTotal = totalsMap[medId] || 0;
                    const totalToDispense = decrements[medId];
                    return { pharmacy_id: pharmId, medicine_id: medId, qty: Math.max(0, currentTotal - totalToDispense) };
                });

                const idsToDelete = (allFreshRows || []).map(r => r.id);
                if (idsToDelete.length > 0) await _supabase.from('pharmacy_stock').delete().in('id', idsToDelete);
                await _supabase.from('pharmacy_stock').insert(stockInserts);

                if (p && p.stock) {
                    items.forEach(item => {
                        const med = p.stock.find(m => m.id === item.medId);
                        if (med) med.qty = Math.max(0, med.qty - item.qty);
                    });
                }

                await window.showCustomDialog({ title: "Succès", msg: t('alert_success'), icon: "fa-circle-check" });
                await window.autoDownloadReceipt('DELIVRANCE', patientName, items, barcode);
                window.invalidatePharmacyStockCache(pharmId);
                await window.renderPharmacy(pharmId, 'pharm-dispense');
            } catch (err) {
                console.error(err);
                window.showToast("Erreur lors de la délivrance", "error");
                dispForm.dataset.submitting = 'false';
            }
        });
    }

    // Order Form Submittal (Bon de Commande)
    window.addOrderRow = function (id) {
        const tbody = document.getElementById(`order-tbody-${id}`);
        if (!tbody) return;
        const row = document.createElement('tr');
        row.className = 'order-row';
        row.innerHTML = `
            <td>
                <input type="text" class="row-med" list="central-meds-list-${id}" required style="width:100%; border:1px solid #d1d5db; border-radius:6px; padding:10px;" placeholder="Nom du médicament...">
            </td>
            <td>
                <input type="number" class="row-qty" min="1" required placeholder="Qté" style="width:100%;">
            </td>
            <td style="text-align:center;">
                <button type="button" class="icon-btn delete-btn" onclick="this.closest('tr').remove()"><i class="fa-solid fa-xmark"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    };

    const orderBody = document.getElementById(`order-tbody-${pharmId}`);
    if (orderBody) window.addOrderRow(pharmId); // Initial logic added here

    const orderForm = document.getElementById(`order-form-${pharmId}`);
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const rows = document.querySelectorAll('.order-row');
            const items = [];
            let valid = true;

            rows.forEach(row => {
                const inputMed = row.querySelector('.row-med').value.trim();
                const qty = parseInt(row.querySelector('.row-qty').value);

                if (!inputMed || isNaN(qty) || qty < 1) {
                    valid = false;
                    return;
                }
                items.push({ medName: inputMed, qty });
            });

            if (!valid || items.length === 0) {
                await window.showCustomDialog({ title: "Saisie Invalide", msg: "Voulez-vous remplir correctement au moins un médicament avec une quantité valide ?", icon: "fa-circle-xclamation" });
                return;
            }

            const barcode = await window.getNextCounterValue('order');
            // Build worker name safely with multiple fallbacks
            let workerName = '---';
            if (currentUser) {
                if (typeof currentUser.name === 'object' && currentUser.name) {
                    workerName = currentUser.name.fr || currentUser.name.ar || currentUser.email || 'Pharmacien';
                } else if (typeof currentUser.name === 'string' && currentUser.name) {
                    workerName = currentUser.name;
                } else {
                    workerName = currentUser.email || 'Pharmacien';
                }
            }
            // Ensure pharmId is always valid
            const safePharmId = pharmId || (currentUser && currentUser.pharmacyId);
            if (!safePharmId) {
                await window.showCustomDialog({ title: 'Erreur', msg: "Impossible d'identifier la pharmacie. Veuillez vous reconnecter.", icon: 'fa-circle-xclamation' });
                return;
            }

            try {
                const { error: insertError } = await _supabase.from('orders').insert([{
                    id: barcode,
                    date: new Date().toISOString(),
                    pharmacy_id: safePharmId,
                    worker_name: workerName,
                    status: 'PENDING',
                    items: items
                }]);

                if (insertError) throw insertError;

                window.optimisticUpdate('order_added', { id: barcode, pharmId: safePharmId, workerName: workerName, items: items });
                await window.showCustomDialog({ title: "Succès", msg: "Votre Bon de Commande a été envoyé avec succès au Stock Central.", icon: "fa-circle-check" });
                await window.autoDownloadReceipt('COMMANDE', 'Pharmacie Centrale (Stock)', items, barcode);
                window.renderPharmacy(pharmId, 'pharm-order');
            } catch (err) {
                console.error(err);
                await window.showCustomDialog({ title: "Erreur", msg: "Erreur lors de l'enregistrement de la commande: " + (err.message || err), icon: "fa-circle-xclamation" });
            }
        });
    }
};

// Initialize Order Form Listener
document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    if (userForm) {
        userForm.addEventListener('submit', window.handleUserSubmit);
    }
});

// Helper to bridge to distribution view
window.openDistForPharmacy = function (pharmId) {
    window.preSelectedPharm = pharmId;
    window.renderView('distribution');
};

window.openPatientModal = async function (id = null) {
    const modal = document.getElementById('patient-modal');
    const form = document.getElementById('patient-form');
    const title = document.getElementById('patient-modal-title');

    form.reset();
    document.getElementById('patient-id').value = id || '';

    if (id) {
        title.innerText = currentLang === 'ar' ? 'تعديل مريض' : 'Modifier le Patient';
        window.updateSyncStatus('syncing');
        try {
            const { data: p } = await _supabase.from('patients').select('name, national_id, phone, hospital').eq('id', id).single();
            if (!p) return;
            document.getElementById('patient-name-input').value = p.name || '';
            document.getElementById('patient-nid-input').value = p.national_id || '';
            document.getElementById('patient-phone-input').value = p.phone || '';
            document.getElementById('patient-hospital-input').value = p.hospital || '';
            window.updateSyncStatus('success');
        } catch (e) { window.updateSyncStatus('error'); }
    } else {
        title.innerText = currentLang === 'ar' ? 'إضافة مريض جديد' : 'Ajouter un Patient';
    }

    modal.classList.add('active');
};

window.editPatient = function (id) {
    window.openPatientModal(id);
};

window.togglePatientStatus = async function (id, currentStatus) {
    if (!currentUser || currentUser.role !== 'admin') return;
    const newStatus = currentStatus === 'actif' ? 'inactif' : 'actif';
    const label = newStatus === 'inactif' ? 'désactiver' : 'réactiver';
    const confirmed = await window.showCustomDialog({
        title: 'Confirmation',
        msg: 'Voulez-vous ' + label + ' ce patient ?',
        type: 'confirm',
        icon: newStatus === 'inactif' ? 'fa-ban' : 'fa-circle-check'
    });
    if (!confirmed) return;
    try {
        const { error } = await _supabase.from('patients').update({ status: newStatus }).eq('id', id);
        if (error) throw error;
        window.renderView('patients');
        window.showToast('Patient ' + (newStatus === 'actif' ? 'réactivé' : 'désactivé'));
    } catch (e) {
        console.error(e);
        window.showToast('Erreur : ' + (e.message || e), 'error');
    }
};

window.deletePatient = async function (id) {
    const confirm = await window.showCustomDialog({
        title: "Suppression",
        msg: currentLang === 'ar' ? "هل أنت متأكد من حذف هذا المريض؟" : "Supprimer ce patient ?",
        type: 'confirm',
        icon: 'fa-trash-can'
    });
    if (confirm) {
        try {
            await _supabase.from('patients').delete().eq('id', id);
            window.optimisticUpdate('patient_deleted', { id: id });
            window.renderView('patients');
        } catch (err) { console.error(err); }
    }
};

// Add listener for patient form in the main view logic (where other listeners are)
// Or just handle it here if it's simpler
document.addEventListener('DOMContentLoaded', () => {
    const pForm = document.getElementById('patient-form');
    if (pForm) {
        pForm.onsubmit = async (e) => {
            e.preventDefault();
            const id = document.getElementById('patient-id').value;
            const name = document.getElementById('patient-name-input').value.trim();
            const nid = document.getElementById('patient-nid-input').value.trim();
            const phone = document.getElementById('patient-phone-input').value.trim();
            const hospital = document.getElementById('patient-hospital-input').value.trim();

            if (!name) {
                window.showToast("Le nom est obligatoire", "error");
                return;
            }

            window.showToast("Enregistrement...", "info");

            try {
                // Duplicate check ONLY for NEW patients
                if (!id) {
                    // Check by National ID if provided
                    if (nid) {
                        const { data: existingNID } = await _supabase.from('patients').select('id').eq('national_id', nid).maybeSingle();
                        if (existingNID) {
                            await window.showCustomDialog({
                                title: currentLang === 'ar' ? 'تنبيه: المريض موجود' : "Patient déjà existant",
                                msg: currentLang === 'ar' ? `هذا الرقم الوطني (${nid}) مسجل مسبقاً لمريض آخر.` : `Ce NNIR (${nid}) est déjà enregistré pour un autre patient.`,
                                icon: 'fa-user-tag'
                            });
                            return;
                        }
                    } else {
                        // Check by Name if NID is not provided (to avoid exact name duplicates)
                        const { data: existingName } = await _supabase.from('patients').select('id').eq('name', name).maybeSingle();
                        if (existingName) {
                            const confirmDuplicate = await window.showCustomDialog({
                                title: currentLang === 'ar' ? 'تأكيد الاسم المكرر' : "Nom identique détecté",
                                msg: currentLang === 'ar' ? `يوجد مريض بنفس الاسم بالضبط. هل تريد الاستمرار في إضافة مريض جديد؟` : `Un patient avec exactement le même nom existe déjà. Voulez-vous continuer ?`,
                                type: 'confirm',
                                icon: 'fa-user-group'
                            });
                            if (!confirmDuplicate) return;
                        }
                    }
                }

                const payload = { name, national_id: nid, phone, hospital };

                if (id) {
                    const { error: updErr } = await _supabase.from('patients').update(payload).eq('id', id);
                    if (updErr) throw updErr;
                } else {
                    const { error: insErr } = await _supabase.from('patients').insert([payload]);
                    if (insErr) throw insErr;
                }

                if (!id) window.optimisticUpdate('patient_added');
                document.getElementById('patient-modal').classList.remove('active');
                window.renderView('patients');
                window.showToast(currentLang === 'ar' ? "تم حفظ بيانات المريض بنجاح" : "Patient enregistré !");
            } catch (err) {
                console.error(err);
                window.showToast("Erreur lors de l'enregistrement", "error");
            }
        };
    }
});

window.deleteMedicine = async function (id) {
    const confirm = await window.showCustomDialog({ title: "Suppression", msg: t('confirm_delete'), type: 'confirm', icon: 'fa-trash-can' });
    if (confirm) {
        try {
            await _supabase.from('medicines').delete().eq('id', id);
            window.optimisticUpdate('central_stock_change');
            window.renderView('central');
        } catch (err) { console.error(err); }
    }
};

window.editMedicine = async function (id) {
    const { data: med } = await _supabase.from('medicines').select('name, batch, qty, entry_date, expiry_date, price').eq('id', id).single();
    if (!med) return;

    document.getElementById('med-name').value = med.name;
    document.getElementById('med-batch').value = med.batch;
    document.getElementById('med-qty').value = med.qty;
    document.getElementById('med-entry').value = (med.entry_date || '').split('T')[0];

    document.getElementById('med-expiry').value = (med.expiry_date || '').split('T')[0];

    document.getElementById('med-price').value = med.price || 0;

    document.getElementById('add-medicine-form').dataset.editId = id;
    document.getElementById('add-medicine-modal').classList.add('active');
};

window.returnToCentral = async function (pharmId, medId) {
    const p = state.pharmacies[pharmId];
    const med = p.stock.find(m => m.id === medId);
    if (!med) return;

    const qtyStr = await window.showCustomDialog({
        title: "Retour Stock",
        msg: (currentLang === 'ar' ? 'الكمية المراد إرجاعها من ' : 'Quantité à retourner de ') + med.name,
        type: 'prompt',
        defaultValue: '1',
        icon: 'fa-rotate-left'
    });
    if (qtyStr === null) return;
    const qty = parseInt(qtyStr);
    if (isNaN(qty) || qty <= 0 || qty > med.qty) {
        await window.showCustomDialog({ title: "Erreur", msg: t('alert_error'), icon: 'fa-circle-xclamation' });
        return;
    }

    const workerName = currentUser ? (typeof currentUser.name === 'object' ? (currentUser.name.fr || currentUser.name.ar) : currentUser.name) : 'Système';

    try {
        const { error } = await _supabase.from('return_requests').insert([{
            pharmacy_id: pharmId,
            medicine_id: medId,
            med_name: med.name,
            qty: qty,
            worker_name: workerName,
            status: 'PENDING'
        }]);

        if (error) throw error;

        window.optimisticUpdate('central_stock_change');
        await window.showCustomDialog({ title: "Succès", msg: t('alert_request_sent'), icon: 'fa-circle-check' });

        // Refresh view
        if (currentUser.role === 'pharmacy') {
            window.invalidatePharmacyStockCache(pharmId);
            window.renderPharmacy(pharmId, 'all');
        } else {
            window.renderView(activeView);
        }
    } catch (err) {
        console.error(err);
        window.showToast("Erreur lors de l'envoi de la demande: " + err.message, "error");
    }
};

window.approveReturn = async function (reqId) {
    const req = (state.pendingReturns || []).find(r => r.id === reqId);
    if (!req) return;

    try {
        window.showToast("Traitement en cours...", "info");

        // 1. Check current pharmacy stock
        const { data: ps, error: psError } = await _supabase
            .from('pharmacy_stock')
            .select('qty')
            .eq('pharmacy_id', req.pharmacyId)
            .eq('medicine_id', req.medId)
            .single();

        if (psError || !ps || ps.qty < req.qty) {
            await window.showCustomDialog({ title: "Erreur", msg: "Stock insuffisant en pharmacie pour valider ce retour.", icon: "fa-circle-xclamation" });
            return;
        }

        // 2. Atomic Updates
        // A. Reduce Pharmacy Stock
        await _supabase.from('pharmacy_stock').update({ qty: ps.qty - req.qty }).eq('pharmacy_id', req.pharmacyId).eq('medicine_id', req.medId);

        // B. Increase Central Stock
        const { data: medData } = await _supabase.from('medicines').select('qty').eq('id', req.medId).single();
        if (medData) {
            await _supabase.from('medicines').update({ qty: medData.qty + req.qty }).eq('id', req.medId);
        }

        // C. Record Transfer
        await _supabase.from('transfers').insert([{
            date: new Date().toISOString(),
            medicine_id: req.medId,
            medicine_name: req.medName,
            qty: req.qty,
            to_pharmacy_id: req.pharmacyId,
            is_return: true,
            dispensed_by: req.workerName
        }]);

        // D. Mark Request as APPROVED
        await _supabase.from('return_requests').update({ status: 'APPROVED' }).eq('id', reqId);

        window.optimisticUpdate('return_approved', { id: reqId, qty: parseInt(req.qty) || 0 });
        window.showToast("Retour approuvé avec succès");
        window.renderView(activeView);
    } catch (err) {
        console.error(err);
        window.showToast("Erreur critique: " + err.message, "error");
    }
};

window.rejectReturn = async function (reqId) {
    try {
        await _supabase.from('return_requests').update({ status: 'REJECTED' }).eq('id', reqId);
        window.optimisticUpdate('return_approved', { id: reqId, qty: 0 }); // rejection doesn't add stock
        window.showToast("Demande rejetée");
        window.renderView(activeView);
    } catch (err) {
        console.error(err);
        window.showToast("Erreur", "error");
    }
};

window.markOrderTreated = async function (orderId) {
    const confirm = await window.showCustomDialog({
        title: "Traitement Commande",
        msg: "Confirmez-vous que cette commande a été traitée ?",
        type: 'confirm',
        icon: 'fa-clipboard-check'
    });
    if (confirm) {
        try {
            await _supabase.from('orders').update({ status: 'TREATED' }).eq('id', orderId);
            window.optimisticUpdate('order_processed', { id: orderId });
            window.showToast("Commande marquée comme Traitée.");
            if (activeView === 'admin_orders') {
                window.renderView('admin_orders');
            } else {
                window.renderView('dashboard');
            }
        } catch (err) { console.error(err); }
    }
};

window.toggleAllMeds = function (source) {
    document.querySelectorAll('.med-checkbox').forEach(cb => cb.checked = source.checked);
};

window.deleteSelectedMeds = async function () {
    const selected = Array.from(document.querySelectorAll('.med-checkbox:checked')).map(cb => parseInt(cb.value));
    if (selected.length === 0) return;

    const title = currentLang === 'ar' ? "حذف جماعي" : "Suppression Groupée";
    const msg = currentLang === 'ar' ? `هل أنت متأكد من حذف ${selected.length} دواء محدد؟` : `Supprimer ${selected.length} médicaments sélectionnés ?`;

    const confirm = await window.showCustomDialog({ title, msg, type: 'confirm', icon: 'fa-trash-can' });
    if (confirm) {
        try {
            await _supabase.from('medicines').delete().in('id', selected);
            window.optimisticUpdate('central_stock_change');
            window.renderView('central');
        } catch (err) { console.error(err); }
    }
};

window.toggleAllPatients = function (source) {
    document.querySelectorAll('.patient-checkbox').forEach(cb => cb.checked = source.checked);
};

window.deleteSelectedPatients = async function () {
    const selected = Array.from(document.querySelectorAll('.patient-checkbox:checked')).map(cb => parseInt(cb.value));
    if (selected.length === 0) return;

    const title = currentLang === 'ar' ? "حذف جماعي" : "Suppression Groupée";
    const msg = currentLang === 'ar' ? `هل أنت متأكد من حذف ${selected.length} مريض محدد؟` : `Supprimer ${selected.length} patients sélectionnés ?`;

    const confirm = await window.showCustomDialog({ title, msg, type: 'confirm', icon: 'fa-user-minus' });
    if (confirm) {
        try {
            await _supabase.from('patients').delete().in('id', selected);
            window.optimisticUpdate('central_stock_change');
            window.renderView('patients');
        } catch (err) { console.error(err); }
    }
};

window.toggleAllPharmacyStock = function (source, pharmId) {
    document.querySelectorAll(`.pharm-stock-checkbox-${pharmId}`).forEach(cb => cb.checked = source.checked);
};

window.deleteSelectedPharmacyStock = async function (pharmId) {
    const selected = Array.from(document.querySelectorAll(`.pharm-stock-checkbox-${pharmId}:checked`)).map(cb => cb.value);
    if (selected.length === 0) {
        showToast(currentLang === 'ar' ? 'لم يتم تحديد أي دواء' : "Aucun médicament sélectionné", 'error');
        return;
    }

    const confirmDelete = await window.showCustomDialog({
        title: currentLang === 'ar' ? "حذف جماعي" : "Suppression Groupée",
        msg: currentLang === 'ar' ? `هل أنت متأكد من حذف ${selected.length} دواء من مخزون الصيدلية؟` : `Supprimer ${selected.length} articles de cette pharmacie ?`,
        type: "confirm",
        icon: "fa-trash-can"
    });

    if (!confirmDelete) return;

    try {
        window.updateSyncStatus('syncing');
        const { error } = await _supabase.from('pharmacy_stock').delete().eq('pharmacy_id', pharmId).in('medicine_id', selected);
        if (error) throw error;

        window.invalidatePharmacyStockCache(pharmId);
        await window.renderPharmacy(pharmId);
        window.updateSyncStatus('success');
        showToast(currentLang === 'ar' ? 'تم الحذف بنجاح' : "Articles supprimés avec succès");
    } catch (err) {
        console.error(err);
        window.updateSyncStatus('error');
        showToast("Erreur lors de la suppression", "error");
    }
};

window.deleteFromPharmacyStock = async function (pharmId, medId) {
    const confirm = await window.showCustomDialog({
        title: "Suppression",
        msg: currentLang === 'ar' ? "هل أنت متأكد من حذف هذا الدواء من مخزون هذه الصيدلية؟" : "Supprimer ce médicament du stock de cette pharmacie ?",
        type: 'confirm',
        icon: 'fa-trash-can'
    });
    if (confirm) {
        try {
            await _supabase.from('pharmacy_stock').delete().eq('pharmacy_id', pharmId).eq('medicine_id', medId);
            window.optimisticUpdate('central_stock_change');
            window.renderPharmacy(pharmId);
        } catch (err) { console.error(err); }
    }
};

window.deleteSelectedPharmacyStock = async function (pharmId) {
    const selected = Array.from(document.querySelectorAll(`.pharm-stock-checkbox-${pharmId}:checked`)).map(cb => parseInt(cb.value));
    if (selected.length === 0) return;

    const title = currentLang === 'ar' ? "حذف جماعي" : "Suppression Groupée";
    const msg = currentLang === 'ar' ? `هل أنت متأكد من حذف ${selected.length} أدوية من مخزون الصيدلية؟` : `Supprimer ${selected.length} médicaments du stock de cette pharmacie ?`;

    const confirm = await window.showCustomDialog({ title, msg, type: 'confirm', icon: 'fa-trash-can' });
    if (confirm) {
        try {
            await _supabase.from('pharmacy_stock').delete().eq('pharmacy_id', pharmId).in('medicine_id', selected);
            window.optimisticUpdate('central_stock_change');
            window.renderPharmacy(pharmId);
        } catch (err) { console.error(err); }
    }
};

window.deleteAllMeds = async function () {
    const title = currentLang === 'ar' ? "تصفير المخزون بالكامل" : "Reset Stock Complet";
    const msg = currentLang === 'ar' ? "تحذير: سيتم مسح جميع الأدوية من النظام والمخازن نهائياً! هل أنت متأكد؟" : "ATTENTION: Tous les médicaments seront supprimés du système définitivement ! Continuer ?";

    const confirm = await window.showCustomDialog({ title, msg, type: 'confirm', icon: 'fa-triangle-exclamation' });
    if (confirm) {
        const doubleCheck = await window.showCustomDialog({
            title: currentLang === 'ar' ? "تأكيد أخير" : "Confirmation Finale",
            msg: currentLang === 'ar' ? "اكتب 'مسح' للتأكيد النهائي:" : "Tapez 'DELETE' pour confirmer :",
            type: 'prompt',
            icon: 'fa-lock'
        });

        if (doubleCheck === (currentLang === 'ar' ? 'مسح' : 'DELETE')) {
            window.showToast("Réinitialisation en cours...", "info");
            try {
                // Delete from medicines (cascades to pharmacy_stock)
                await _supabase.from('medicines').delete().neq('id', 0); // Delete all where ID != 0 (effectively all)
                window.optimisticUpdate('central_stock_change');
                window.renderView('central');
                window.showToast("Stock réinitialisé.");
            } catch (err) { console.error(err); }
        }
    }
};

window.deleteAllPatients = async function () {
    const title = currentLang === 'ar' ? "مسح جميع المرضى" : "Supprimer Tous les Patients";
    const msg = currentLang === 'ar' ? "هل أنت متأكد من مسح قائمة المرضى بالكامل؟ لا يمكن التراجع عن هذه الخطوة." : "Voulez-vous vraiment supprimer TOUS les patients ? Cette action est irréversible.";

    const confirm = await window.showCustomDialog({ title, msg, type: 'confirm', icon: 'fa-triangle-exclamation' });
    if (confirm) {
        const doubleCheck = await window.showCustomDialog({
            title: currentLang === 'ar' ? "تأكيد أخير" : "Confirmation Finale",
            msg: currentLang === 'ar' ? "اكتب 'حذف' للتأكيد النهائي:" : "Tapez 'CONFIRMER' pour confirmer :",
            type: 'prompt',
            icon: 'fa-lock'
        });

        if (doubleCheck === (currentLang === 'ar' ? 'حذف' : 'CONFIRMER')) {
            window.showToast("Suppression en cours...", "info");
            try {
                await _supabase.from('patients').delete().neq('id', 0);
                window.optimisticUpdate('central_stock_change');
                window.renderView('patients');
                window.showToast("Liste des patients vidée.");
            } catch (err) { console.error(err); }
        }
    }
};

// Export Utilities
window.downloadSavedReceipt = async function (receiptId) {
    // First try state.receipts
    const rcpt = state.receipts.find(r => r.id === receiptId);
    if (rcpt) {
        await window.autoDownloadReceipt(rcpt.type, rcpt.targetName, rcpt.items, rcpt.id, rcpt.date, rcpt.workerName);
        return;
    }

    // Fallback: try state.orders (for order PDFs from admin panel)
    const order = state.orders.find(o => o.id === receiptId || String(o.id) === String(receiptId));
    if (order) {
        const pharmName = (state.pharmacies[order.pharmacyId]?.name?.fr)
            || (state.pharmacies[order.pharmacyId]?.name?.ar)
            || `Pharmacie #${order.pharmacyId}`;
        await window.autoDownloadReceipt('COMMANDE', pharmName, order.items || [], order.id, order.date, order.workerName || '---');
        return;
    }

    await window.showCustomDialog({ title: "Introuvable", msg: "Le document PDF est introuvable. Il a peut-être été supprimé.", icon: "fa-circle-exclamation" });
};



window.autoDownloadReceipt = async function (type, targetName, items, existingBarcode, overrideDateStr, overrideWorkerName) {
    if (typeof html2pdf === 'undefined') {
        await window.showCustomDialog({ title: "Module Manquant", msg: "La bibliothèque PDF n'est pas encore chargée.", icon: "fa-triangle-exclamation" });
        return;
    }

    const dateStr = window.formatDate(overrideDateStr || new Date().toISOString()) + ' à ' + (overrideDateStr ? '' : new Date().toLocaleTimeString('fr-FR'));
    const isDist = type === 'DISTRIBUTION';
    const isCmd = type === 'COMMANDE';

    let title = "Bon de Délivrance / Décharge";
    if (isDist) title = "Bon de Distribution / Décharge";
    if (isCmd) title = "Bon de Commande";

    let targetLabel = "Patient Bénéficiaire :";
    if (isDist) targetLabel = "Pharmacie Destinataire :";
    if (isCmd) targetLabel = "Destinataire :";

    const workerName = overrideWorkerName || (currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Système');
    const barcode = existingBarcode || ((isCmd ? "CMD-" : "TRN-") + new Date().getTime().toString().slice(-6));

    const container = document.createElement('div');
    container.innerHTML = `
        <div style="padding: 40px; font-family: 'Inter', sans-serif; color: #2c3e50; max-width: 800px; margin: 0 auto; background: #fff;">
            <!-- Header Section -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #722f64; padding-bottom: 20px; margin-bottom: 30px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="background: #ffd100; color: #722f64; width: 60px; height: 60px; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 28px;">
                        <i class="fa-solid fa-notes-medical"></i>
                    </div>
                    <div>
                        <h2 style="margin: 0; color: #722f64; font-size: 22px; font-weight: 800; text-transform: uppercase;">Pharmacies - MASEF</h2>
                        <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Gestion des Stocks & Pharmacies</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0; font-size: 12px; color: #7f8c8d;">Référence</p>
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #d12027;">${barcode}</p>
                </div>
            </div>

            <!-- Title & Meta -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 24px; color: #2c3e50; text-transform: uppercase; letter-spacing: 1px;">${title}</h1>
                <p style="margin: 8px 0 0 0; color: #00a95c; font-weight: bold;">Édité le : ${dateStr}</p>
            </div>

            <div style="display: flex; justify-content: space-between; background: #f7f9fc; padding: 20px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e2e8f0;">
                <div>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #7f8c8d; text-transform: uppercase;">Émetteur ${isCmd ? '(Commandé par)' : '(Remis par)'}</p>
                    <p style="margin: 0; font-size: 16px; font-weight: bold; color: #722f64;">${workerName}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #2c3e50;">${isCmd ? "Pharmacie d'unité" : 'Stock Central - Magasin'}</p>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #7f8c8d; text-transform: uppercase;">${targetLabel}</p>
                    <p style="margin: 0; font-size: 16px; font-weight: bold; color: #722f64;">${targetName}</p>
                </div>
            </div>

            <!-- Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <thead>
                    <tr style="background: #722f64; color: white;">
                        <th style="padding: 12px 15px; text-align: left; font-size: 14px; border-radius: 8px 0 0 8px;">Désignation Médicament</th>
                        ${!isCmd ? `<th style="padding: 12px 15px; text-align: center; font-size: 14px;">Lot (Batch)</th>
                        <th style="padding: 12px 15px; text-align: center; font-size: 14px;">Date d'Exp.</th>` : ''}
                        <th style="padding: 12px 15px; text-align: center; font-size: 14px; border-radius: 0 8px 8px 0;">${isCmd ? 'Quantité Demandée' : 'Quantité'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map((item, index) => `
                        <tr style="border-bottom: 1px solid #e2e8f0; background: ${index % 2 === 0 ? '#ffffff' : '#fcfcfc'};">
                            <td style="padding: 15px; font-size: 14px; font-weight: 600; color: #2c3e50;">${item.medName}</td>
                            ${!isCmd ? `<td style="padding: 15px; font-size: 13px; text-align: center; color: #7f8c8d;">${item.batch || '-'}</td>
                            <td style="padding: 15px; font-size: 13px; text-align: center; color: #d12027;">${window.formatDate(item.expiry)}</td>` : ''}
                            <td style="padding: 15px; font-size: 15px; text-align: center; font-weight: bold; color: #00a95c;">${item.qty}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- Signatures -->
            <div style="display: flex; justify-content: space-between; margin-top: 50px;">
                <div style="width: 45%; text-align: center; background: #fdfdfd; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 40px 0; font-weight: bold; color: #2c3e50;">Signature de l'Émetteur</p>
                </div>
                <div style="width: 45%; text-align: center; background: #fffcf2; border: 1px dashed #ffd100; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 40px 0; font-weight: bold; color: #2c3e50;">Signature / Empreinte du Récepteur</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="margin: 0; font-size: 11px; color: #94a3b8;">Document généré automatiquement par le Système de Gestion - BBTDH &copy; 2026</p>
            </div>
        </div>
    `;

    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${isCmd ? 'Commande' : (isDist ? 'Distribution' : 'Delivrance')}_${barcode}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save();
};

window.exportToExcel = async function (tableId, fileName) {
    if (typeof XLSX === 'undefined') {
        window.showCustomDialog({ title: "Oups", msg: "La bibliothèque d'exportation n'est pas encore chargée.", icon: 'fa-triangle-exclamation' });
        return;
    }

    // INTERCEPT PAGINATED TABLES TO FETCH FULL DATA AS JSON
    if (tableId === 'records-table' || tableId === 'my-register-table') {
        window.showToast("Préparation de l'exportation complète...", "info");
        try {
            const pharmId = (tableId === 'my-register-table')
                ? (window.preSelectedPharm || (currentUser && currentUser.pharmacyId) || null)
                : null;
            const { data, error } = await _supabase.rpc('get_all_dispensations', { p_pharmacy_id: pharmId });
            if (error) throw error;

            const exportData = data.map(d => ({
                "Date": new Date(d.date).toLocaleDateString('fr-FR'),
                "Référence": d.reference || '',
                "Patient": d.patient_name,
                "Médicament": d.medicine_name,
                "Qté": d.qty,
                "Pharmacie": state.pharmacies[d.pharmacy_id] ? (state.pharmacies[d.pharmacy_id].name.fr || state.pharmacies[d.pharmacy_id].name.ar) : 'Inconnu',
                "Distribué par": d.dispensed_by || ''
            }));

            const ws = XLSX.utils.json_to_sheet(exportData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Data");
            XLSX.writeFile(wb, fileName + ".xlsx");
            window.showToast("Export Excel réussi !");
            return;
        } catch (err) {
            console.error(err);
            window.showToast("Erreur lors de l'exportation.", "error");
            return;
        }
    }

    if (tableId === 'expired-table') {
        window.showToast("Préparation de l'exportation des périmés...", "info");
        try {
            const today = new Date().toISOString().split('T')[0];
            const { data, error } = await _supabase.from('medicines').select('name, batch, expiry_date, qty, price').lt('expiry_date', today).limit(50000);
            if (error) throw error;

            const exportData = data.map(d => ({
                "Médicament": d.name,
                "Lot": d.batch,
                "Date d'expiration": new Date(d.expiry_date).toLocaleDateString('fr-FR'),
                "Qté en stock": d.qty,
                "Prix Achat": d.price || 0
            }));

            const ws = XLSX.utils.json_to_sheet(exportData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Data");
            XLSX.writeFile(wb, fileName + ".xlsx");
            window.showToast("Export Excel réussi !");
            return;
        } catch (err) {
            console.error(err);
            window.showToast("Erreur lors de l'exportation.", "error");
            return;
        }
    }

    // FALLBACK: For non-paginated tables (like Reports), DOM export is perfect and preserves complex aggregations
    window.showToast("Génération du fichier Excel...", "info");
    var wb = XLSX.utils.table_to_book(document.getElementById(tableId), { sheet: "Data" });
    XLSX.writeFile(wb, fileName + ".xlsx");
    window.showToast(currentLang === 'ar' ? 'تم تصدير ملف Excel بنجاح!' : "Export Excel réussi !");
};

window.printPage = function () {
    window.print();
};

window.deleteUser = async function (email) {
    const confirm = await window.showCustomDialog({
        title: "Confirmation",
        msg: `Voulez-vous vraiment supprimer l'utilisateur ${email} ?`,
        type: 'confirm',
        icon: 'fa-user-minus'
    });

    if (confirm) {
        try {
            const { data: result, error } = await _supabase.rpc('delete_user_by_email', { p_email: email });
            if (error) throw error;
            if (result && result.success === false) throw new Error(result.error || 'Echec suppression');
            await syncUsers();
            window.renderView('users');
            showToast("Utilisateur supprimé");
        } catch (e) {
            console.error(e);
            window.showToast('Erreur suppression : ' + (e.message || e), 'error');
        }
    }
};

window.openUserModal = function (oldEmail = null) {
    let modal = document.getElementById('user-modal');
    if (!modal) {
        // Inject modal if missing (fixes browser caching old index.html)
        const modalHtml = `
            <div id="user-modal" class="modal-overlay">
                <div class="modal-content" style="max-width: 400px;">
                    <div class="modal-header">
                        <h3 id="user-modal-title">Utilisateur</h3>
                        <button class="close-modal" onclick="document.getElementById('user-modal').classList.remove('active')"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <form id="user-form">
                        <input type="hidden" id="user-old-email">
                        <input type="hidden" id="user-id">
                        
                        <div class="form-group" style="margin-bottom: 12px;">
                            <label>Nom complet (Français)</label>
                            <input type="text" id="user-name-fr-input" required placeholder="Ex: Mohamed Amine">
                        </div>
                        <div class="form-group" style="margin-bottom: 12px;">
                            <label>الاسم الكامل (عربي)</label>
                            <input type="text" id="user-name-ar-input" placeholder="مثال: محمد أمين">
                        </div>
                        <div class="form-group" style="margin-bottom: 12px;">
                            <label>Email (Login)</label>
                            <input type="email" id="user-email-input" required placeholder="nom@masef.com">
                        </div>
                        <div class="form-group" style="margin-bottom: 12px;">
                            <label>Mot de passe</label>
                            <input type="password" id="user-pass-input" placeholder="Laissez vide pour ne pas changer">
                        </div>
                        <div class="form-group" style="margin-bottom: 12px;">
                            <label>Rôle</label>
                            <select id="user-role-input" onchange="document.getElementById('user-pharm-group').style.display = (this.value === 'pharmacy' ? 'block' : 'none')">
                                <option value="pharmacy">Pharmacy (Pharmacien)</option>
                                <option value="manager">Manager (Stock Central)</option>
                                <option value="admin">Admin (Directeur)</option>
                            </select>
                        </div>
                        <div class="form-group" id="user-pharm-group" style="margin-bottom: 24px;">
                            <label>Pharmacie assignée</label>
                            <select id="user-pharm-input"></select>
                        </div>
                        
                        <button type="submit" class="primary-btn full-width" style="justify-content: center; background: var(--primary-brand); padding: 12px;">
                            <i class="fa-solid fa-user-check"></i> Enregistrer l'utilisateur
                        </button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modal = document.getElementById('user-modal');

        // Attach listener since it didn't exist on load
        document.getElementById('user-form').addEventListener('submit', window.handleUserSubmit);
    }

    const form = document.getElementById('user-form');
    const title = document.getElementById('user-modal-title');
    const pharmSelect = document.getElementById('user-pharm-input');

    form.reset();
    document.getElementById('user-old-email').value = oldEmail || '';
    document.getElementById('user-id').value = '';
    document.getElementById('user-pass-input').placeholder = oldEmail ? "Laissez vide pour ne pas changer" : "Définissez un mot de passe";

    // Populate Pharmacies
    pharmSelect.innerHTML = Object.keys(state.pharmacies).map(k =>
        `<option value="${k}">${state.pharmacies[k].name.fr}</option>`
    ).join('');

    if (oldEmail) {
        const u = window.userDatabase[oldEmail];
        if (u) {
            title.innerText = currentLang === 'ar' ? 'تعديل مستخدم' : 'Modifier Utilisateur';
            document.getElementById('user-id').value = u.id || '';
            document.getElementById('user-name-fr-input').value = (u.name && u.name.fr) || u.name_fr || '';
            document.getElementById('user-name-ar-input').value = (u.name && u.name.ar) || u.name_ar || '';
            document.getElementById('user-email-input').value = oldEmail;
            document.getElementById('user-role-input').value = u.role || 'pharmacy';
            document.getElementById('user-pharm-input').value = u.pharmacyId || '';
            document.getElementById('user-pharm-group').style.display = (u.role === 'pharmacy' ? 'block' : 'none');
        }
    } else {
        title.innerText = currentLang === 'ar' ? 'إضافة مستخدم جديد' : 'Nouvel Utilisateur';
        document.getElementById('user-role-input').value = 'pharmacy';
        document.getElementById('user-pharm-group').style.display = 'block';
        document.getElementById('user-pass-input').value = '123456';
    }

    modal.classList.add('active');
};

window.addUser = function () { window.openUserModal(); };
window.editUser = function (email) { window.openUserModal(email); };

window.handleUserSubmit = async function (e) {
    e.preventDefault();
    const oldEmail = document.getElementById('user-old-email').value;
    const id = document.getElementById('user-id').value;
    const nameFr = document.getElementById('user-name-fr-input').value;
    const nameAr = document.getElementById('user-name-ar-input').value;
    const email = document.getElementById('user-email-input').value.toLowerCase().trim();
    const pass = document.getElementById('user-pass-input').value;
    const role = document.getElementById('user-role-input').value;
    const pharmId = role === 'pharmacy' ? document.getElementById('user-pharm-input').value : null;

    window.updateSyncStatus('syncing', currentLang === 'ar' ? 'جاري الحفظ...' : 'Enregistrement...');

    const payload = {
        email,
        name_fr: nameFr,
        name_ar: nameAr,
        role,
        pharmacy_id: pharmId ? parseInt(pharmId) : null
    };
    if (pass) payload.password = pass;

    try {
        if (oldEmail) {
            const { error } = id
                ? await _supabase.from('users').update(payload).eq('id', id)
                : await _supabase.from('users').update(payload).eq('email', oldEmail);
            if (error) throw error;
        } else {
            const { error } = await _supabase.from('users').insert([payload]);
            if (error) throw error;
        }

        await syncUsers();
        document.getElementById('user-modal').classList.remove('active');
        if (activeView === 'users') window.renderView('users');
        window.updateSyncStatus('success');
        showToast(currentLang === 'ar' ? "تم حفظ التعديلات" : "Utilisateur enregistré !");
    } catch (err) {
        console.error("User save error:", err);
        window.updateSyncStatus('error');
        window.showCustomDialog({ title: "Erreur", msg: err.message || "Erreur de sauvegarde", icon: "fa-circle-xclamation" });
    }
};

window.migrateUsersToCloud = async function () {
    const defaultUsersList = [
        { email: 'admin@masef.com', password: '123456', role: 'admin', name_ar: 'المدير المركزي', name_fr: 'Directeur Central' },
        { email: 'ahmed@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 1, name_ar: 'أحمد', name_fr: 'Ahmed' },
        { email: 'samir@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 2, name_ar: 'سمير', name_fr: 'Samir' },
        { email: 'yousef@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 3, name_ar: 'يوسف', name_fr: 'Yousef' },
        { email: 'omar@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 4, name_ar: 'عمر', name_fr: 'Omar' },
    ];

    try {
        await _supabase.from('users').upsert(defaultUsersList, { onConflict: 'email' });
        await syncUsers();
        window.renderView('users');
        showToast("Comptes migrés vers le Cloud !");
    } catch (e) { console.error(e); }
};

// Pharmacy Management Functions
window.addPharmacy = async function () {
    const nameFr = await window.showCustomDialog({ title: "Nouvelle Pharmacie", msg: "Nom en français:", type: 'prompt', icon: 'fa-hospital' });
    if (!nameFr) return;
    const nameAr = await window.showCustomDialog({ title: "صيدلية جديدة", msg: "الاسم بالعربية:", type: 'prompt', defaultValue: nameFr, icon: 'fa-hospital' });
    if (!nameAr) return;
    const color = await window.showCustomDialog({ title: "Couleur", msg: "Code couleur (ex: #047857):", type: 'prompt', defaultValue: "#047857", icon: 'fa-palette' });

    try {
        const { error } = await _supabase.from('pharmacies').insert([{
            // Let Postgres generate ID

            name_fr: nameFr,
            name_ar: nameAr,
            color: color || "#047857"
        }]);
        if (error) throw error;
        window.optimisticUpdate('central_stock_change');
        renderView('manage_pharmacies');
        showToast("Pharmacie ajoutée");
    } catch (e) { console.error(e); window.showCustomDialog({ title: "Erreur", msg: "Impossible d'ajouter la pharmacie.", icon: 'fa-circle-exclamation' }); }
};

window.editPharmacy = async function (id) {
    // Search with both number and string key to handle HTML attribute type mismatch
    const numId = parseInt(id);
    const p = state.pharmacies[numId] || state.pharmacies[String(numId)] || state.pharmacies[id];

    if (!p) {
        console.error("editPharmacy: ID received:", id, "| parseInt:", numId, "| Available keys:", Object.keys(state.pharmacies));
        window.showCustomDialog({ title: "Erreur", msg: "Pharmacie introuvable. Veuillez rafraîchir la page.", icon: 'fa-circle-exclamation' });
        return;
    }

    const nameFr = (p.name && p.name.fr) || "";
    const nameAr = (p.name && p.name.ar) || "";

    const newNameFr = await window.showCustomDialog({
        title: "Modifier Nom (FR)",
        msg: "Nouveau nom français:",
        type: 'prompt',
        defaultValue: nameFr,
        icon: 'fa-pen-to-square'
    });
    if (newNameFr === null) return;

    const newNameAr = await window.showCustomDialog({
        title: "تعديل اسم الصيدلية",
        msg: "الاسم العربي الجديد:",
        type: 'prompt',
        defaultValue: nameAr,
        icon: 'fa-pen-to-square'
    });
    if (newNameAr === null) return;

    const newColor = await window.showCustomDialog({
        title: "Modifier Couleur",
        msg: "Code couleur (ex: #047857):",
        type: 'prompt',
        defaultValue: p.color || "#047857",
        icon: 'fa-palette'
    });

    try {
        const { error } = await _supabase
            .from('pharmacies')
            .update({ name_fr: newNameFr, name_ar: newNameAr, color: newColor || p.color })
            .eq('id', numId);

        if (error) throw error;

        // Update local state immediately
        state.pharmacies[numId] = { ...p, name: { fr: newNameFr, ar: newNameAr }, color: newColor || p.color };

        window.optimisticUpdate('central_stock_change');
        window.renderView('manage_pharmacies');
        showToast("Pharmacie mise à jour avec succès");
    } catch (e) {
        console.error("editPharmacy error:", e);
        window.showCustomDialog({ title: "Erreur", msg: e.message || "Erreur de mise à jour.", icon: 'fa-circle-exclamation' });
    }
};

window.deletePharmacy = async function (id) {
    const confirm = await window.showCustomDialog({ title: "Suppression", msg: "Voulez-vous vraiment supprimer cette pharmacie ?", type: 'confirm', icon: 'fa-trash-can' });
    if (!confirm) return;
    try {
        const { error } = await _supabase.from('pharmacies').delete().eq('id', id);
        if (error) throw error;
        window.optimisticUpdate('central_stock_change');
        renderView('manage_pharmacies');
        showToast("Pharmacie supprimée");
    } catch (e) { console.error(e); window.showCustomDialog({ title: "Erreur", msg: "Impossible de supprimer (liens existants).", icon: 'fa-circle-exclamation' }); }
};

window.triggerExceptionalDispense = function (pharmId) {
    const form = document.getElementById(`bulk-dispense-form-${pharmId}`);
    if (!form) return;

    // Check required fields using standard browser validations
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Bypass 28 day rule flag
    window._isExceptional = true;

    // Trigger the form submit event
    const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
    form.dispatchEvent(submitEvent);
};

window.updateSidebarPharmacies = function () {
    const container = document.getElementById('dynamic-pharmacies-sidebar');
    if (!container) return;

    let html = '';
    Object.entries(state.pharmacies).forEach(([pharmId, p]) => {
        const pId = parseInt(pharmId);
        let displayStyle = 'flex';
        // Only hide if a pharmacy user is logged in and it's not their pharmacy
        if (currentUser && currentUser.role === 'pharmacy' && currentUser.pharmacyId !== pId) {
            displayStyle = 'none';
        }

        let pharmName = p.name ? (currentLang === 'ar' ? (p.name.ar || p.name.fr) : p.name.fr) : 'Pharmacie ' + pId;
        html += `
            <button class="nav-btn dynamic-pharm-btn" style="display: ${displayStyle};" data-view="pharmacy-${pharmId}" data-pharmacy-id="${pharmId}" onclick="window.handleSidebarPharmacyClick(this, ${pharmId})">
                <i class="fa-solid fa-house-medical"></i> <span>${pharmName}</span>
            </button>
        `;
    });
    container.innerHTML = html;
};

window.handleSidebarPharmacyClick = function (btnElement, pharmId) {
    document.querySelectorAll('.nav-btn, .dynamic-pharm-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    window.renderPharmacy(pharmId, 'all');
};

window.triggerPhotoUpload = function (id) {
    document.getElementById(`upload-photo-${id}`).click();
};

window.handlePhotoUpload = async function (event, receiptId) {
    const file = event.target.files[0];
    if (!file) return;

    window.showToast("Traitement en cours... Veuillez patienter.", "info");

    const updateDB = async (dataUrl) => {
        try {
            const { error } = await _supabase.from('receipts').update({ signed_photo: dataUrl }).eq('id', receiptId);
            if (error) throw error;
            window.optimisticUpdate('central_stock_change');
            window.renderView('admin_decharges');
            window.showToast("Justificatif enregistré !", "success");
        } catch (err) {
            console.error(err);
            const rec = state.receipts.find(r => r.id === receiptId);
            if (rec) rec.signed_photo = dataUrl;
            localStorage.setItem('local_receipts', JSON.stringify(state.receipts));
            window.renderView('admin_decharges');
            window.showToast("Sauv. Locale: Table DB peut-être manquante.", "success");
        }
    };

    if (file.type === 'application/pdf') {
        if (file.size > 2 * 1024 * 1024) {
            window.showToast("Erreur: Fichier PDF trop volumineux (Max 2 MB)", "error");
            return;
        }
        const reader = new FileReader();
        reader.onload = async function (e) {
            await updateDB(e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = async function () {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; // compress dimension
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height = Math.round((height * MAX_WIDTH) / width);
                    width = MAX_WIDTH;
                }
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/webp', 0.6);
                await updateDB(dataUrl);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

// =============================================
// STARTUP: Initialize users after all functions are defined
// =============================================
if (_supabase) {
    syncUsers().then(() => {
        console.log("App ready. Users loaded:", Object.keys(window.userDatabase).length);
        if (typeof usersReadyResolve === 'function') usersReadyResolve();
    }).catch(() => {
        // Even on error, resolve so login doesn't block forever
        if (typeof usersReadyResolve === 'function') usersReadyResolve();
    });
} else {
    if (typeof usersReadyResolve === 'function') usersReadyResolve();
}

// =============================================
// REAL-TIME: Listen for new orders from pharmacies
// =============================================
// Tracks whether the WebSocket channel is active so polling can stand down
let _realtimeActive = false;

if (_supabase) {
    _supabase
        .channel('orders-realtime')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, async (payload) => {
            // Only notify admin/manager accounts
            if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'manager')) return;

            const newOrder = payload.new;
            const pharmName = (state.pharmacies[newOrder.pharmacy_id] && state.pharmacies[newOrder.pharmacy_id].name)
                ? state.pharmacies[newOrder.pharmacy_id].name.fr
                : `Pharmacie #${newOrder.pharmacy_id}`;

            // Show toast notification
            window.showToast(`🛒 Nouveau Bon de Commande de ${pharmName} !`, 'warning');

            // Play a subtle notification sound (if browser allows)
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);
                oscillator.frequency.value = 880;
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.5);
            } catch (e) { /* Sound not supported */ }

            // Reload data and refresh dashboard silently
            window.optimisticUpdate('central_stock_change');
        })
        .subscribe((status) => {
            console.log('Realtime subscription status:', status);
            // Mark realtime as active so the polling fallback stands down
            _realtimeActive = (status === 'SUBSCRIBED');
        });
}

// =============================================
// POLLING FALLBACK: Check for new orders every 30s
// Only fires when Realtime WebSocket is NOT connected
// =============================================
let lastKnownOrderCount = 0;

function playNotificationSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.frequency.value = 880;
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.5);
    } catch (e) { }
}

setInterval(async () => {
    // Only poll if admin/manager is logged in
    if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'manager')) return;
    if (!_supabase) return;
    // Stand down if Realtime WebSocket is handling notifications
    if (_realtimeActive) return;

    try {
        const { data } = await _supabase.from('orders').select('id').eq('status', 'PENDING');
        const currentCount = data ? data.length : 0;

        if (currentCount > lastKnownOrderCount && lastKnownOrderCount !== 0) {
            const diff = currentCount - lastKnownOrderCount;
            window.showToast(`🛒 ${diff} nouveau(x) Bon(s) de Commande en attente !`, 'warning');
            playNotificationSound();
            window.optimisticUpdate('central_stock_change');
        }
        lastKnownOrderCount = currentCount;
    } catch (e) { /* Polling failed silently */ }
}, 30000); // Every 30 seconds


window.consolidateStock = async function () {
    const confirm = await window.showCustomDialog({
        title: currentLang === 'ar' ? "دمج الأدوية المكررة" : "Consolider les Doublons",
        msg: currentLang === 'ar' ? "سيتم دمج الأدوية التي لها نفس الاسم والتشغيلة وجمع كمياتها. هل تريد الاستمرار؟" : "Tous los médicaments avec le même Nom et Lot seront fusionnés. Continuer ?",
        type: 'confirm',
        icon: 'fa-wand-magic-sparkles'
    });

    if (confirm) {
        window.showToast("Consolidation en cours...", "info");
        try {
            const { data: result, error } = await _supabase.rpc('consolidate_central_stock');
            if (error) throw error;

            const merged  = result?.groups_merged ?? 0;
            const deleted = result?.rows_deleted   ?? 0;
            window.optimisticUpdate('central_stock_change');
            window.showToast(
                merged === 0
                    ? "Aucun doublon trouvé."
                    : `${merged} groupe(s) fusionné(s), ${deleted} ligne(s) supprimée(s).`
            );
            window.renderView('dashboard');
        } catch (err) {
            console.error(err);
            window.showToast("Erreur lors de la consolidation", "error");
        }
    }
};

window.checkAndShowOrphanRepair = async function () {
    if (!currentUser || currentUser.role !== 'admin') {
        console.log("Repair tool skipped: User is not admin or not logged in.");
        return;
    }

    console.log("Checking for orphans in pharmacy_stock...");

    const container = document.getElementById('orphan-repair-container');
    const list = document.getElementById('orphan-repair-list');
    if (!container || !list) {
        console.log("Repair tool skipped: Container not found in DOM.");
        return;
    }

    try {
        // 1. Fetch all unique medicine_ids from pharmacy_stock
        const { data: stockItems, error: stockErr } = await _supabase.from('pharmacy_stock').select('medicine_id');
        if (stockErr) throw stockErr;

        const stockIds = Array.from(new Set(stockItems.map(s => s.medicine_id).filter(id => id)));

        // 2. Fetch all existing medicine IDs
        const { data: medItems, error: medErr } = await _supabase.from('medicines').select('id');
        if (medErr) throw medErr;

        const medIds = new Set(medItems.map(m => m.id));

        // 3. Identify orphans (IDs in stock but not in medicines)
        const orphans = stockIds.filter(id => !medIds.has(id));

        console.log("Orphans detected:", orphans);

        if (orphans.length === 0) {
            container.style.display = 'none';
            return;
        }

        container.style.display = 'block';

        // 4. Get all valid medicines for the dropdown
        const { data: validMeds } = await _supabase.from('medicines').select('id, name, batch').order('name');
        const optionsHtml = (validMeds || []).map(m => `<option value="${m.id}">${m.name} [${m.batch}]</option>`).join('');

        list.innerHTML = orphans.map(id => `
            <div style="display:flex; align-items:center; gap:10px; padding:12px; background:#fff; border-radius:10px; border:1px solid #fecaca; margin-bottom:8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <span style="font-weight:bold; color:#ef4444; min-width:120px; font-size:16px;">Réf: ${id}</span>
                <i class="fa-solid fa-arrow-right" style="color:#94a3b8;"></i>
                <select id="repair-select-${id}" style="flex:1; padding:10px; border-radius:8px; border:1px solid #d1d5db; font-size:14px; background:#f9fafb;">
                    <option value="">-- اختر الدواء الصحيح من القائمة --</option>
                    ${optionsHtml}
                </select>
                <button class="primary-btn" style="background:#059669; color:white; width:auto; padding:10px 20px; border-radius:8px; font-weight:bold;" onclick="window.repairOrphan(${id})">إصلاح ودمج</button>
            </div>
        `).join('');

    } catch (err) {
        console.error("Orphan check failed:", err);
    }
};

window.repairOrphan = async function (oldId) {
    const targetId = document.getElementById(`repair-select-${oldId}`).value;
    if (!targetId) {
        window.showToast("يرجى اختيار الدواء أولاً", "error");
        return;
    }

    const confirmRepair = await window.showCustomDialog({
        title: "تأكيد الإصلاح",
        msg: `هل أنت متأكد من ربط الرقم ${oldId} بهذا الدواء؟ سيتم دمج كافة الكميات في كل الصيدليات.`,
        type: 'confirm',
        icon: 'fa-triangle-exclamation'
    });

    if (!confirmRepair) return;

    window.showToast("جاري الإصلاح...", "info");

    try {
        // 1. Get all stock records for this orphan across all pharmacies
        const { data: orphans } = await _supabase.from('pharmacy_stock').select('*').eq('medicine_id', oldId);

        if (orphans && orphans.length > 0) {
            for (const orphan of orphans) {
                // 2. Check if target exists in this pharmacy
                const { data: existing } = await _supabase.from('pharmacy_stock')
                    .select('*')
                    .eq('pharmacy_id', orphan.pharmacy_id)
                    .eq('medicine_id', targetId)
                    .maybeSingle();

                if (existing) {
                    // Update: Add qty to existing row
                    await _supabase.from('pharmacy_stock')
                        .update({ qty: existing.qty + orphan.qty })
                        .eq('id', existing.id);
                } else {
                    // Insert: Create new row for target med
                    await _supabase.from('pharmacy_stock')
                        .insert([{ pharmacy_id: orphan.pharmacy_id, medicine_id: targetId, qty: orphan.qty }]);
                }
            }
        }

        // 3. Delete orphans
        await _supabase.from('pharmacy_stock').delete().eq('medicine_id', oldId);

        window.showToast("تم الإصلاح بنجاح!", "success");
        window.optimisticUpdate('central_stock_change');
        window.renderView('dashboard');
    } catch (err) {
        console.error(err);
        window.showToast("حدث خطأ أثناء الإصلاح", "error");
    }
};

window.consolidatePharmacyStock = async function (pharmId) {
    const confirm = await window.showCustomDialog({
        title: currentLang === 'ar' ? "دمج مخزون الصيدلية" : "Consolider Stock Pharmacie",
        msg: currentLang === 'ar' ? "هل تريد دمج الأدوية المكررة في هذه الصيدلية؟ سيتم جمع الكميات." : "Voulez-vous fusionner les doublons dans cette pharmacie ? Les quantités seront cumulées.",
        type: 'confirm',
        icon: 'fa-wand-magic-sparkles'
    });
    if (!confirm) return;

    window.showToast("Consolidation...", "info");
    try {
        const { data: result, error } = await _supabase.rpc('consolidate_pharmacy_stock', {
            p_pharmacy_id: pharmId
        });
        if (error) throw error;

        const merged  = result?.groups_merged ?? 0;
        const deleted = result?.rows_deleted   ?? 0;
        window.showToast(
            merged === 0
                ? "Aucun doublon trouvé."
                : `${merged} groupe(s) fusionné(s), ${deleted} ligne(s) supprimée(s).`
        );
        window.invalidatePharmacyStockCache(pharmId);
        window.renderPharmacy(pharmId);
    } catch (err) {
        console.error(err);
        window.showToast("Erreur", "error");
    }
};


window.restoreHospitalNationalStock = async function () {
    const confirm = await window.showCustomDialog({
        title: "Restaurer le stock",
        msg: "Voulez-vous restaurer les 61 articles de l'image pour l'Hôpital National ?",
        type: 'confirm',
        icon: 'fa-image'
    });
    if (!confirm) return;

    window.showToast("Restauration en cours...", "info");
    const pharmId = 4;
    const rows = [
        { name: "Asfal Cp B25", batch: "Ej24701", expiry: "2029-08-01", qty: 42 },
        { name: "Aerius 5", batch: "C131684", expiry: "2027-05-01", qty: 41 },
        { name: "amcard 10mg", batch: "AM010152", expiry: "2026-06-01", qty: 57 },
        { name: "Amlodipine 5 B/30", batch: "3900901", expiry: "2027-10-01", qty: 75 },
        { name: "Ansemide( furosemide ) 500mg/200UI B/50", batch: "5080", expiry: "2030-05-01", qty: 45 },
        { name: "Anzitar (Atorvastatine) 40mg B/30", batch: "5L04346", expiry: "2027-11-01", qty: 36 },
        { name: "Apravell 300mg cp", batch: "EA6083", expiry: "2026-12-01", qty: 5 },
        { name: "Apravell 300mg cp", batch: "2401230001", expiry: "2027-06-01", qty: 40 },
        { name: "Arpegic 100", batch: "25E003", expiry: "2027-05-01", qty: 61 },
        { name: "Atarax 25mg", batch: "2502526", expiry: "2027-01-01", qty: 78 },
        { name: "Atarvastatine 20", batch: "3205516", expiry: "2027-04-01", qty: 6 },
        { name: "Atarvastatine 20", batch: "4L01187", expiry: "2026-09-01", qty: 54 },
        { name: "Avlocardyl 40mg", batch: "24E006", expiry: "2027-05-01", qty: 19 },
        { name: "Birashof 5mg B/30", batch: "SW50401", expiry: "2027-11-01", qty: 16 },
        { name: "bisacor 5mg B/30", batch: "5K00384", expiry: "2028-08-01", qty: 78 },
        { name: "bisoprolol 10mg B/30", batch: "G02EKX", expiry: "2027-07-01", qty: 40 },
        { name: "bisoprolol 2.5mg B28", batch: "A20J1", expiry: "2028-02-01", qty: 70 },
        { name: "Calcidia 1.54 B20", batch: "CA1123", expiry: "2026-11-01", qty: 40 },
        { name: "Captopril 25mg cp B30", batch: "A23861", expiry: "2029-03-01", qty: 63 },
        { name: "Captopril 50mg cp B30", batch: "250185", expiry: "2028-04-01", qty: 46 },
        { name: "Cardix 6.25 mg", batch: "235", expiry: "2027-03-01", qty: 13 },
        { name: "Coveram 10/10mg", batch: "2570340028", expiry: "2028-08-01", qty: 25 },
        { name: "Coveram 10/10mg", batch: "25253", expiry: "2028-12-01", qty: 10 },
        { name: "Coveram 5/5", batch: "25197", expiry: "2028-10-01", qty: 38 },
        { name: "Exforge 10mg/160mg", batch: "A0219U", expiry: "2028-04-01", qty: 20 },
        { name: "fer inj 100mg/2ml B/100 Amp", batch: "250135", expiry: "2029-02-01", qty: 300 },
        { name: "Furosemide 40mg cp", batch: "MU-105", expiry: "2028-03-01", qty: 40 },
        { name: "Furosemide 40mg cp B/30", batch: "MU-139", expiry: "2028-11-01", qty: 90 },
        { name: "glucophage 850mg cp B30", batch: "E213249", expiry: "2028-06-01", qty: 8 },
        { name: "Levothyrox 100mcg cp B30", batch: "G02FF1", expiry: "2027-07-01", qty: 8 },
        { name: "Levothyrox 25mcg cp B30", batch: "G028JT", expiry: "2026-12-01", qty: 18 },
        { name: "Levothyrox 50mcg cp B30", batch: "G02CM8", expiry: "2027-04-01", qty: 20 },
        { name: "levothyrox 75 mcg", batch: "G028JR", expiry: "2027-02-01", qty: 10 },
        { name: "losartan 100mg", batch: "SW48401", expiry: "2028-02-01", qty: 87 },
        { name: "losartan 50mg", batch: "SW47401", expiry: "2028-11-01", qty: 14 },
        { name: "losartan 50mg", batch: "MU-75", expiry: "2028-03-01", qty: 62 },
        { name: "Loxon LP 50mg B60/PL", batch: "004D", expiry: "2027-08-01", qty: 78 },
        { name: "Omeprazole 20mg pl", batch: "LOMUC_004", expiry: "2027-12-01", qty: 60 },
        { name: "Paracetamol 500mg PL", batch: "510250811", expiry: "2028-08-01", qty: 400 },
        { name: "Pimara 30mg B/28", batch: "A26989", expiry: "2028-08-01", qty: 15 },
        { name: "Pimara 60mg B/28", batch: "A27036B", expiry: "2028-08-01", qty: 27 },
        { name: "plavix 75 mg", batch: "FA3024", expiry: "2027-06-01", qty: 6 },
        { name: "plavix 75 mg", batch: "FLB00264", expiry: "2027-12-01", qty: 24 },
        { name: "princip fort", batch: "142", expiry: "2027-06-01", qty: 20 },
        { name: "QALYVIZ 0.5", batch: "A26500", expiry: "2027-08-01", qty: 67 },
        { name: "Ramipil 5", batch: "RMP2401605", expiry: "2027-06-01", qty: 46 },
        { name: "Ramipil 5", batch: "P2291", expiry: "2027-01-01", qty: 43 },
        { name: "Ramipril NORMON 2.5mg cp B28", batch: "24E001", expiry: "2029-03-01", qty: 40 },
        { name: "sintrom 4 mg", batch: "2310364", expiry: "2028-09-01", qty: 45 },
        { name: "Taraxet 25mg", batch: "222381", expiry: "2027-07-01", qty: 42 },
        { name: "Tardyferon B9", batch: "T01781", expiry: "2028-09-01", qty: 72 },
        { name: "Targa 160mg", batch: "B9205K", expiry: "2027-01-01", qty: 47 },
        { name: "Targa 80mg", batch: "B9197C", expiry: "2026-12-01", qty: 47 },
        { name: "Targa 80mg", batch: "B9029V", expiry: "2026-07-01", qty: 24 },
        { name: "Tenormine 100mg cp", batch: "250415", expiry: "2028-09-01", qty: 31 },
        { name: "Tramapa 37.5mg B/30", batch: "V001", expiry: "2026-09-01", qty: 20 },
        { name: "Uvedose AB", batch: "LL004", expiry: "2028-05-01", qty: 10 },
        { name: "VANCOMYCINE 500mg", batch: "2124410B", expiry: "2027-11-01", qty: 75 },
        { name: "zyloric 100", batch: "G6397", expiry: "2028-03-01", qty: 27 },
        { name: "zyloric 200", batch: "A909199", expiry: "2026-12-01", qty: 28 },
        { name: "Zyrtoc 10mg", batch: "222020", expiry: "2027-06-01", qty: 17 }
    ];

    try {
        const { data: existingMeds } = await _supabase.from('medicines').select('id, name, batch');
        const medMap = {};
        (existingMeds || []).forEach(m => {
            const key = `${m.name.toLowerCase().trim()}|${m.batch.toLowerCase().trim()}`;
            medMap[key] = m.id;
        });

        const newMeds = [];
        rows.forEach(r => {
            const key = `${r.name.toLowerCase().trim()}|${r.batch.toLowerCase().trim()}`;
            if (!medMap[key]) {
                newMeds.push({
                    // Let Postgres generate ID
                    name: r.name,
                    batch: r.batch,
                    expiry_date: r.expiry,
                    qty: 0,
                    entry_date: new Date().toISOString().split('T')[0]
                });
                // medMap will be updated after insert
                medMap[key] = 'pending';
            }
        });

        if (newMeds.length > 0) {
            const { data: insertedMeds, error: insertErr } = await _supabase.from('medicines').insert(newMeds).select();
            if (insertErr) throw insertErr;
            (insertedMeds || []).forEach(m => {
                const key = `${m.name.toLowerCase().trim()}|${m.batch.toLowerCase().trim()}`;
                medMap[key] = m.id;
            });
        }

        const stockUpserts = rows.map(r => ({
            pharmacy_id: 4,
            medicine_id: medMap[`${r.name.toLowerCase().trim()}|${r.batch.toLowerCase().trim()}`],
            qty: r.qty
        }));

        await _supabase.from('pharmacy_stock').upsert(stockUpserts, { onConflict: 'pharmacy_id,medicine_id' });

        window.showToast("Stock restauré avec succès !");
        window.renderPharmacy(4);
    } catch (err) {
        console.error(err);
        window.showToast("Erreur lors de la restauration", "error");
    }
};

// =============================================
// PATIENT HISTORY: Read-only dispensation log
// =============================================
window.showPatientHistory = async function (patientId) {
    const modal = document.getElementById('patient-history-modal');
    const titleSpan = document.getElementById('patient-history-title').querySelector('span');
    const body = document.getElementById('patient-history-body');

    titleSpan.textContent = '...';
    body.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>';
    modal.classList.add('active');

    try {
        // Récupérer le nom depuis la DB (évite les problèmes d'échappement dans les attributs HTML)
        const { data: patData } = await _supabase.from('patients').select('name').eq('id', patientId).single();
        const patientName = patData ? patData.name : String(patientId);
        titleSpan.textContent = patientName;

        const { data, error } = await _supabase
            .from('dispensations')
            .select('date, medicine_name, qty, pharmacy_id, dispensed_by, reference')
            .ilike('patient_name', patientName)
            .order('date', { ascending: false })
            .limit(500);

        if (error) throw error;

        const rows = data || [];

        if (rows.length === 0) {
            const emptyMsg = currentLang === 'ar'
                ? 'لا توجد صرفيات مسجلة لهذا المريض.'
                : 'Aucune delivrance enregistree pour ce patient.';
            body.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);"><i class="fa-solid fa-folder-open fa-2x" style="margin-bottom:12px;display:block;"></i>' + emptyMsg + '</div>';
            return;
        }

        const totals = {};
        rows.forEach(function(r) {
            totals[r.medicine_name] = (totals[r.medicine_name] || 0) + (r.qty || 0);
        });
        const totalQty = rows.reduce(function(s, r) { return s + (r.qty || 0); }, 0);

        const tableRows = rows.map(function(r) {
            var pharmName = (state.pharmacies[r.pharmacy_id] && state.pharmacies[r.pharmacy_id].name)
                ? state.pharmacies[r.pharmacy_id].name.fr
                : '-';
            var worker = window.parseWorkerName(r.dispensed_by, currentLang);
            var ref = r.reference ? ('PR-' + r.reference) : '-';
            return '<tr>'
                + '<td style="white-space:nowrap;">' + window.formatDate(r.date) + '</td>'
                + '<td><strong>' + r.medicine_name + '</strong></td>'
                + '<td style="text-align:center;"><span class="status-badge good">' + r.qty + '</span></td>'
                + '<td>' + pharmName + '</td>'
                + '<td style="font-size:12px;color:var(--text-muted);">' + worker + '</td>'
                + '<td style="font-size:11px;color:var(--text-muted);">' + ref + '</td>'
                + '</tr>';
        }).join('');

        const summaryChips = Object.entries(totals)
            .sort(function(a, b) { return b[1] - a[1]; })
            .map(function(entry) {
                return '<span style="display:inline-flex;align-items:center;gap:6px;background:#f1f5f9;border-radius:20px;padding:4px 12px;font-size:13px;margin:2px;">'
                    + '<strong>' + entry[0] + '</strong>'
                    + '<span class="status-badge good" style="font-size:11px;">' + entry[1] + '</span>'
                    + '</span>';
            }).join('');

        body.innerHTML = ''
            + '<div style="padding:16px 4px 8px;">'
            + '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">' + summaryChips + '</div>'
            + '<div style="font-size:13px;color:var(--text-muted);margin-bottom:16px;">'
            + rows.length + ' delivrance(s) &mdash; Total: <strong>' + totalQty + '</strong> unite(s)'
            + '</div>'
            + '</div>'
            + '<div class="table-container" style="max-height:420px;overflow-y:auto;">'
            + '<table>'
            + '<thead><tr><th>Date</th><th>Medicament</th><th style="text-align:center;">Qte</th><th>Pharmacie</th><th>Staff</th><th>Ref.</th></tr></thead>'
            + '<tbody>' + tableRows + '</tbody>'
            + '</table>'
            + '</div>';

    } catch (err) {
        console.error('Patient history error:', err);
        body.innerHTML = '<div style="text-align:center;padding:40px;color:var(--danger-red);"><i class="fa-solid fa-circle-exclamation fa-2x" style="margin-bottom:12px;display:block;"></i>Erreur lors du chargement.</div>';
    }
};
