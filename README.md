# Portfolio de Mouadh Jemai

Site statique en français, compatible ordinateur, iPhone et Android.

## Contenu

- `index.html` : page principale du site.
- `assets/background-sky.png` : photo du ciel en arrière-plan.
- `assets/styles.css` : couleurs, présentation et mise en page.
- `assets/site.js` : fonctionnement du site.
- `data/portfolio.js` : informations du CV, LinkedIn, coordonnées et fiches de projets.
- `documents/` : CV, rapport du master, projet de fin d’études et présentation du master (PDF/PPTX).

**Aucune page d’administration n’est incluse.** Les visiteurs voient seulement le portfolio.

## Consulter le site avant de le publier

Sur ordinateur : ouvrez `index.html` dans un navigateur. Pour un test plus fiable :

```bash
python -m http.server 8000
```

Puis allez à `http://localhost:8000`.

## Mettre le site en ligne avec GitHub Pages

1. Créez un compte sur [GitHub](https://github.com/), si nécessaire.
2. Créez un dépôt PUBLIC nommé, par exemple, `portfolio-mouadh`.
3. Téléversez **les fichiers et les dossiers contenus dans cette archive**, pas l’archive ZIP elle-même. Conservez les répertoires `assets`, `data`, `documents`.
4. Depuis le dépôt, ouvrez `Settings` > `Pages`, sélectionnez `Deploy from a branch`, puis `main` et `/(root)`, et enregistrez.
5. Après la publication par GitHub Pages, l’adresse sera généralement `https://VOTRE-PSEUDO.github.io/portfolio-mouadh/` (remplacez le pseudo par le vôtre).

## Modifier le site depuis un téléphone (sans page « Gérer mon site »)

Ouvrez **github.com dans Safari ou Chrome**, connectez-vous, puis ouvrez votre dépôt :

- **Présentation, LinkedIn, téléphone et projets** : ouvrez `data/portfolio.js`, utilisez le bouton d’édition (icône crayon), modifiez le texte entre guillemets, puis sélectionnez `Commit changes`.
- **CV** : remplacez `documents/CV_Mouadh_Jemai.pdf` par une nouvelle version de même nom.
- **Rapports** : remplacez `documents/Master_Industrie_4_0.pdf` ou `documents/PFE_Systeme_Verification.pdf` par les nouvelles versions avec le même nom.
- **Présentation du master** : remplacez `documents/Presentation_Master.pdf` ou `documents/Presentation_Master.pptx`.
- **Arrière-plan** : remplacez `assets/background-sky.png` par une nouvelle image PNG de même nom.

Si l’interface GitHub sur téléphone ne montre pas les options d’upload/édition, activez « Version pour ordinateur » dans le navigateur, ou utilisez un ordinateur pour le premier téléversement.

La mise à jour du site après un `Commit` prend généralement un petit délai : consultez `Actions` ou `Settings > Pages` pour voir le statut réel.

## Sécurité et confidentialité

N’ajoutez **aucun mot de passe ni clé d’accès** dans `data/portfolio.js` ou tout autre fichier public : le dépôt est accessible à tous. Les documents publiés sont également téléchargeables par les visiteurs; contrôlez qu’ils ne contiennent pas de données confidentielles avant publication.
