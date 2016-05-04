# Prérequis
Avoir nodejs d'installé et npm

# La différence entre la théorie et la pratique, c'est qu'en théorie, il n'y a pas de différence, mais en pratique, il y en a une.

Mon invite de commande est Cmder et l'os est windows donc adaptez-vous si besoin est :)

 Créez le dossier de votre futur super projet et allez dans ce dossier

    mkdir superProjet
    cd superProjet


On va maintenant initialiser la gestion des modules pour le projet tapez

    npm init

Si vous n'êtes pas familier avec npm appuyez sur la touche entrée à chaque question
Cette commande crée un fichier <span style="color:red">package.json</span> dans votre dossier qui contiendra entre autre une <span style="color:blue">LISTE</span> des modules que vous aurez sauvegardé au fur et à mesure de vos besoins.

On va donc de ce pas sauvegarder nos premiers modules indispensables pour un projet React


      npm instal --save react react-dom

Cette commande a deux effets:
* install qui va créer un dossier node_modules qui contiendra les sources des modules
* --save qui va sauvegarder dans le fichier packages.json les deux modules et surtout leur versions

Arrivé à ce point on serait presque bon pour se lancer dans une magnifique programmation modulaire efficace intuitive etc.  mais il reste une étape primordiale il nous faut un programme pour "compiler" tout ces modules et nous fournir un joli fichier tout propre contenant notre code.
