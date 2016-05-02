#Introduction pour le projet

Placez vous dans un répertoire et tapez les commandes suivantes:
  - git clone https://github.com/NaturalSolutions/notification.git
  - cd notification

Vous êtes maintenant dans le dossier du projet il faut installer le Back et les modules pour le Front

| Back | Front|
|------|------|
|depuis le dossier notification |
| 1) cd Back | 1) npm run install |
|2) python setup.py develop | 2) npm run start    |
|3) modifier le fichier development.ini ligne 30 avec les bons paramètres pour la variable sqlalchemy.url |3) webpack-de-server se lance sur http://127.0.0.1:8080/ |
|4) lancer le serveur avec la commande : pserve development.ini --reload | |
|5) le back doit se lancer et il est accessible par defaut http://127.0.0.1:6544 (voir le fichier Back/alerting_app/Views/__init__.py pour voir les routes accessible et Back/alerting_app/Views/<fichier.py> pour voir la logique et les requetes) | |


#Pour un cas plus général et en vracs :


http://courses.reactjsprogram.com/courses/reactjsfundamentals
Est un tuto gratuit en anglais (mais il faut s'inscrire sur le site ) assez bien expliqué pour sur l'ecosystem et les  paramétrage du debut (pour npm et surtout WEBPACK) afin d'avoir une base pour commencer un projet react

http://andrewhfarmer.com/component-communication/
LE résumé qui m'a permis de mieux cerner et comprendre comment les composants pouvait communiquer entre eux

Pour les routes c'est encore un peu obscur la doc officielle est suffisament détaillé mais part un peu dans tout les sens  il faut tout lire pour avoir une bonne vue d'ensemble

Sur ECMAScript 6
  http://es6-features.org/
