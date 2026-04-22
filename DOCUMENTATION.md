# Documentation du Système de Gestion de Pharmacie (BBTDH)

Ce document sert de référence permanente pour toutes les fonctionnalités et l'architecture du système afin d'éviter toute perte de fonctionnalité lors des futures mises à jour.

## 🏗️ Architecture Technique
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6).
- **Icônes**: FontAwesome 6.4.0.
- **Polices**: Google Fonts (Cairo & Inter).
- **Export/Import**: Bibliothèque SheetJS (XLSX).
- **Persistance**: `localStorage` (Clé: `pharmacy_inventory_state`).

## 📋 Fonctionnalités Principales

### 1. Stock Central
- Gestion des médicaments (Ajout, Edition, Suppression).
- Recherche par nom ou code.
- Importation massive depuis Excel.
- Suivi des dates d'expiration et alertes de stock faible.

### 2. Distribution (Transferts)
- Envoi de médicaments du Stock Central vers les 4 pharmacies.
- Distribution par lots (plusieurs médicaments en une fois).
- Historique complet des transferts.
- Gestion des retours (Demande depuis la pharmacie -> Approbation Admin).

### 3. Gestion des Patients
- Registre des patients bénéficiaires.
- Importation de listes de patients depuis Excel.
- Suivi de la consommation individuelle (quel patient a pris quel médicament).

### 4. Pharmacies (Vues Dédiées)
Quatre pharmacies intégrées : **Nasr**, **Amal**, **Chifa**, **Rahma**.
Chaque pharmacie peut :
- Délivrer des médicaments aux patients.
- Consulter son stock propre.
- Demander un retour au stock central.
- Voir son propre registre d'activité.

### 5. Analyses & Rapports (ADMIN)
C'est le module de reporting avancé :
- **Rapport Global des Médicaments** : Somme totale de la consommation par médicament sur une période donnée (Jour, Semaine, Mois, Année).
- **Détails par Pharmacie** : Statistiques de bénéficiaires et consommation par pharmacie.
- **Registres** : Historique global de toutes les opérations du système.

## 💾 Gestion des Données
Toutes les données sont stockées localement dans le navigateur. La fonction `saveState()` dans `app.js` est appelée après chaque modification pour garantir que rien n'est perdu.

### Schéma de l'État (State)
```javascript
{
    medicines: [],      // Stock Central
    pharmacies: {},     // Stocks et infos des 4 pharmacies
    transfers: [],      // Historique des transferts et retours
    dispensations: [],  // Historique des délivrances aux patients
    patients: [],       // Liste des patients
    pendingReturns: []  // Demandes de retour en attente
}
```

## 🌍 Système de Traduction
Le système supporte l'Arabe (`ar`) et le Français (`fr`). Les traductions sont centralisées dans l'objet `i18n` au début de `app.js`.

---
*Dernière mise à jour : 9 Avril 2026 - Restoration du Rapport Global.*
