# Documentation: Sentence-Mixing Generator



## Structure
![La structure][structure]

[logo]: assets\documentations\schéma_SMG.png "La structure"

## Traitement des phonèmes par conditions

| **Consonnes**     |     **Voyelles**    |   **Phonétiques** |
| :------------ | :-------------: | -------------: |
| B      |     A     |        b |
| C    |   E    |      d |
| D       |     I      |         f |
| F      |     O      |         g |
| G       |     U      |         k |
| H       |     -      |         l |
| J       |     -      |         m |
| K       |     -      |         n |
| L       |     -      |         p |
| M       |     -      |         r |
| N       |     -      |         s |
| P       |     -      |         ch |
| Q       |     -      |         t |
| R       |     -      |         v |
| S       |     -      |         z |
| T       |     -      |         j |
| V       |     -      |         ïe |
| W       |     -      |         ou |
| X       |     -      |         u |
| Z       |     -      |         a |
| -       |     -      |         é |
| -       |     -      |         è |
| -       |     -      |         euh |
| -       |     -      |         ê |
| -       |     -      |         i |
| -       |     -      |         oe |
| -       |     -      |         eu |
| -       |     -      |         o |
| -       |     -      |         han |
| -       |     -      |         hin |
| -       |     -      |         hon |
| -       |     -      |         liaison |


## Méthodologie

Le générateur fonctionne en deux étapes de conversion: Phonétiquation (le fait convertir le texte en phonétique) et construction de l'audio !

### Phonétication

Le générateur fait une conversion en phonème des différentes combinaisons possibles d'une même prononciation !
Le principe est simple: une boucle jouant sur la position de la lettre et la vérification du phonème à employé dans des "if" qui compare avec des "&&",des "||", des "===" et des "!=" les différentes lettres (exceptions et admissions sont dans la première section de cette documentation !)

### Conversion en audio

Dans la phonétication, nous aurons fait un tableau avec les phonèmes utilisés dans l'ordre avec le nom de chaque fichier que nous allons utiliser dans le dossier de la voix ! Le but étant que chaque son puisse se suivent comme dans l'ordre du tableau en respecant leurs positions