# Documentation: Sentence-Mixing Generator

* b = b'

* d = d'

* f = f'

* g = g' + voyelle SAUF i et e

* k = k' et qu'

* l = l'

* m = m'

* n = n'

* p = p'

* r = r'

* s = ss'

* ch = sh' et ch'

* t = t'

* v = v' et (w' + voyelle)

* z = (voyelle + s' + voyelle) et z'

* j = j' et (g' + i ou e)

* ïe = (voyelle + y' + voyelle) ou (voyelle + il) ou ïe'

* ou = ou' ou (o'+y) ou w'

* u = u' et û'

* a = a'

* é = (e' + z) ou é ou (er' + espace )

* è = è' ou ai' ou (est)

* euh = (consonne + e' + consonne)

* ê = (aî) ou ê

* i = y' ou î' ou (consonne + i')

* oe = (oeu') ou (eu')

* eu = (eu') ou (eû')

* o = (eau') ou (au') ou ô' ou o' ou (consonne + consonne + u' + consonne)

* han = (aon') ou (en' + consonne) ou (an' + consonne) ou (em' + p) ou (am' + p)

* hin = (in') ou (ein') ou (im' + b) ou (y' + m ) ou (aim') ou (i+en') ou (eim) ou (un) ou (consonne + um') ou (y+en')

* hon = (hon')  

* Liaison= ((les) ou (des))+espace+voyelle


## Structure
![La structure][structure]

[structure]:assets/documentations/schéma_SMG.png "La structure"

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

Le générateur fonctionne en deux étapes de conversion: **Phonétiquation** (le fait convertir le texte en phonétique) et **construction de l'audio** !

### Phonétication

Le générateur fait une conversion en phonème des différentes combinaisons possibles d'une même prononciation !

Le principe est simple: une boucle jouant sur la position de la lettre et la vérification du phonème à employé dans des "**if**" qui compare avec des "**&&**",des "**||**", 
des "**===**" et des "**!=**" les différentes lettres (exceptions et admissions sont dans la première section de cette documentation !) !

### Conversion en audio

Dans la phonétication, nous aurons fait un tableau avec les phonèmes utilisés dans l'ordre avec le nom de chaque fichier que nous allons utiliser dans le dossier de la voix ! 

Le but étant que chaque son puisse se suivrent comme dans l'ordre du tableau en respectant leurs positions !