# DBJS – Travaux pratiques Vue.js

TP du module **Développement backend avec JS** (Vue.js 3) — ENSA Safi, Génie Informatique, Pr. Ahmed Bentajer.

| Dossier | Sujet | Techno | Lancer |
|---|---|---|---|
| [`TP2-formulaires-events`](TP2-formulaires-events) | Formulaires & événements (`v-model`, `@submit.prevent`, `.stop`, `@keyup.enter`) | Vue 3 via CDN | ouvrir `index.html` |
| [`TP3-composants-cycle-de-vie`](TP3-composants-cycle-de-vie) | Composants, props, `$emit`, slot nommé, `mounted` | Vue 3 + Vite | `npm install && npm run dev` |
| [`TP3-liste-de-taches`](TP3-liste-de-taches) | Gestion de tâches (`v-for`, `v-show`, computed, filtres) | Vue 3 via CDN + JSON | serveur local (voir ci-dessous) |
| [`TP4-router-composition-api`](TP4-router-composition-api) | Vue Router, route dynamique, 404, Composition API | Vue 3 + Vite + Router | `npm install && npm run dev` |
| [`TP-Jobs-app`](TP-Jobs-app) | App de gestion d'emplois (CRUD) | Vue 3 + Router + json-server | `npm install && npm start` |

Chaque dossier contient l'énoncé d'origine (`ENONCE.pdf` / `ENONCE.docx`).

## Lancer les projets

**Projets Vite** (TP3 composants, TP4, Jobs-app) : prérequis Node.js ≥ 18.

```bash
cd TP4-router-composition-api
npm install
npm run dev
```

**TP3 liste de tâches** : la page charge `taskList.json` avec `fetch`, il faut donc un petit serveur
(l'ouverture directe en `file://` est bloquée par le navigateur) :

```bash
cd TP3-liste-de-taches
npx serve .        # ou l'extension « Live Server » de VS Code
```

**Jobs-app** : `npm start` lance en même temps l'API (json-server, port 3000, données dans `db.json`)
et l'interface (Vite). Pour les lancer séparément : `npm run server` et `npm run dev`.

## Notes sur le contenu

- **TP2 et TP3 (livres)** : les dossiers `starter/` mentionnés dans les énoncés n'étaient pas fournis ;
  ils ont été reconstruits à partir des énoncés et des composants du starter du TP4.
- **TP4** : le starter fourni a été complété (routes, `HomeView`, `BookDetailsView` avec `Number(...)`
  sur `$route.params.id`, `$router.back()`, bonus `BookCardSetup.vue` en `<script setup>`).
- **Jobs-app** : le fichier JSON fourni était une copie de la liste de tâches ; un vrai jeu de données
  d'emplois a été créé dans `db.json`.
