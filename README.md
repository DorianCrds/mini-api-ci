# Mini API avec CI/CD via GitHub Actions 🚀
Ce projet est une mini API Node.js (basée sur Express) utilisée comme démonstration pour la mise en place d’une chaîne CI/CD (Intégration Continue / Déploiement Continu) avec **GitHub Actions**.

## 🌐 Pourquoi la CI/CD ?
L’objectif de la CI/CD est d’automatiser les étapes de test, build, et déploiement d’une application à chaque modification du code. Cela permet de :
- détecter automatiquement les erreurs dès qu’on pousse une modification (`git push`)
- garantir que l’application reste fonctionnelle grâce aux tests automatisés
- déployer automatiquement une image Docker mise à jour sur Docker Hub

---

## 📁 Structure du projet
- `app.js` : définit l'application Express
- `index.js` : lance le serveur sur le port 3000
- `tests/app.test.js` : contient un test unitaire de l'API avec Jest et Supertest
- `Dockerfile` : instructions de build pour l’image Docker
- `.github/workflows/deploy.yml` : pipeline GitHub Actions pour tester, builder et pousser l’image

---

## 🚀 Démarrage rapide
### 1. Cloner le dépôt
```bash
git clone https://github.com/DorianCrds/mini-api-ci.git
cd mini-api-ci
```

### 2. Initialiser le projet localement
```bash
npm install
```

### 3. Lancer l'application localement
```bash
node index.js
```

Accède ensuite à http://localhost:3000 dans ton navigateur.

---

## 🧪 Lancer les tests
```bash
npm test
```

---

## 🐳 Docker : build et run local
### 1. Build de l'image
```bash
docker build -t mini-api-ci .
```

### 2. Lancer le conteneur
```bash
docker run -p 3000:3000 mini-api-ci
```

Puis accéder à : http://localhost:3000

---

## 🔄 Tester une modification + CI/CD
1. Modifie le fichier app.js ou n’importe quel fichier source.

2. Lancer les tests localement pour s'assurer que tout passe :
```bash
npm test
```

3. Ajoute et pousse tes modifications :

```bash
git add .
git commit -m "feat: update welcome message"
git push origin main
```

---

## ⚙️ GitHub Actions CI/CD
Dès que tu pushes sur la branche main, GitHub Actions va automatiquement :

1. Cloner ton code

2. Installer les dépendances

3. Lancer les tests (npm test)

4. Builder une image Docker

5. La pousser sur Docker Hub (via tes secrets)

---

## 🔐 Secrets GitHub (à configurer dans le dépôt)
Aller dans Settings > Secrets and variables > Actions et ajouter :

- DOCKERHUB_USERNAME : identifiant docker hub

- DOCKERHUB_TOKEN : à créer sur docker hub

⚠️ Ne jamais écrire ces secrets directement dans le code source ou le YAML.

---

## 📊 Suivi des workflows GitHub Actions
Pour consulter l’état de la CI/CD :

1. Va sur le dépôt GitHub

2. Clique sur l’onglet Actions

3. Sélectionne le workflow CI/CD - Build and Push

4. Tu pourras voir chaque étape s’exécuter et si le build est réussi ou non

---

## 📦 Docker Hub
Une fois l’image poussée automatiquement, elle sera disponible sur Docker Hub

---

## ✅ Exemple de test réussi
> jest

PASS  tests/app.test.js
✓ should return Hello message (xx ms)

---

## 📝 Licence
Ce projet est en libre accès pour des besoins d’apprentissage ou de démonstration.

---

## 📌 Version

Ce README concerne la version **1.0.0** de l'application (`package.json`).
