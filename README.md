# Documentation: Sentence-Mixing Generator



## Traitement des phonèmes par conditions



## Structure



## Méthodologie

Le générateur fonctionne en deux étapes de conversion: Phonétiquation (le fait convertir le texte en phonétique) et construction de l'audio !

### Phonétication

Le générateur fait une conversion en phonème des différentes combinaisons possibles d'une même prononciation !
Le principe est simple: une boucle jouant sur la position de la lettre et la vérification du phonème à employé dans des "if" qui compare avec des "&&",des "||", des "===" et des "!=" les différentes lettres (exceptions et admissions sont dans
la première section de cette documentation !)

### Conversion en audio