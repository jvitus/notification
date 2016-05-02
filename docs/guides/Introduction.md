#Introduction

Placez vous dans un répertoire et tapez les commandes suivantes:
  - git clone https://github.com/NaturalSolutions/notification.git
  - cd notification

Vous êtes maintenant dans le dossier du projet il faut installer le Back et les modules pour le Front

| Back | Front|
|------|------|
|depuis le dossier notification |
| 1) cd Back | 1) npm run install |
|2) python setup.py develop | 2) npm run start    |
|3) modifier le fichier development.ini ligne 30 avec les bons paramètres pour la variable sqlalchemy.url |3) webpack-de-server se lance sur http://localhost:8080 |
|4) lancer le serveur avec la commande : pserve development.ini --reload | |
|5) le back doit se lancer et il est accessible par defaut http://127.0.0.1:6544 (voir le fichier Back/alerting_app/Views/_init_.py pour voir les routes accessible et Back/alerting_app/Views/<fichier.py> pour voir la logique et les requetes) | |
  - npm install
  - npm run start

Le webpack-dev-serv se lance nomalement par défaut sur :
  - http:localhost:8080/
