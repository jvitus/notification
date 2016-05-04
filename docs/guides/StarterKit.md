# Prérequis
Avoir nodejs d'installé et npm

# La différence entre la théorie et la pratique, c'est qu'en théorie, il n'y a pas de différence, mais en pratique, il y en a une.

## Création des dossiers et initialisation npm

Mon invite de commande est Cmder et l'os est windows donc adaptez-vous si besoin est :)

 Créez le dossier de votre futur super projet et allez dans ce dossier

    mkdir superProjet
    cd superProjet


On va maintenant initialiser la gestion des modules pour le projet tapez

    npm init

Si vous n'êtes pas familier avec npm appuyez sur la touche entrée à chaque question
Cette commande crée un fichier <span style="color:red">package.json</span> dans votre dossier qui contiendra entre autre une <span style="color:blue">LISTE</span> des modules que vous aurez sauvegardé au fur et à mesure de vos besoins.

On va donc de ce pas sauvegarder nos premiers modules indispensables pour un projet React


      npm install --save react react-dom

Cette commande a deux effets:
* install qui va créer un dossier node_modules qui contiendra les sources des modules
* --save qui va sauvegarder dans le fichier packages.json les deux modules et surtout leur versions

Pour la suite :


        npm install --save-dev babel-core babel-loader babel-preset-react html-webpack-plugin webpack-dev-server webpack


* l'option --save-dev permet de spécifier que ces modules ne sont utilisés que pour le développement

Arrivé à ce point on serait presque bon pour se lancer dans une magnifique programmation modulaire efficace intuitive etc.  mais il reste une étape primordiale il nous faut un programme pour "compiler" tout ces modules et nous fournir un joli fichier tout propre contenant notre code.

## Webpack (un programme pour les gouverner tous)

Créez un fichier **webpack.config.js** dans le dossier superProjet qui doit contenir

``` js
// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
  });
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
plugins: [HTMLWebpackPluginConfig]
};
```
Alors :
 ``` js
var HtmlWebpackPlugin = require('html-webpack-plugin')
```
Permet d'ajouter le module pour générer l'html de l'app

```js
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
```
Permet de configurer la génération de l'html
 * template : le fichier qui va servir de modele
 * filename : le nom du fichier généré
 * inject : l'endroit ou le fichier contenant tout les modules "compilé" sera injecté

```js
plugins: [HTMLWebpackPluginConfig]
```

A la fin du fichier spécifie le(s) plugin(s) à utiliser dans un tableau

``` js
entry: [
  './app/index.js'
]
```

entry est un array de string qui prend le chemin des fichiers d'entrée de l'application

```js
output: {
  path: __dirname + '/dist',
  filename: "index_bundle.js"
}
```
* path : indique le chemin ou sera le fichier
* filename : le nom du fichier

```js
module: {
  loaders: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: "babel-loader"
     }
  ]
}
```

* test : expression réguliere qui va prendre tout les fichiers avec une extension .js ou .jsx
* exclude : les dossiers a ne pas visiter
* loader : le loader à utiliser

Et enfin pour le loader a utiliser nous allons créer un fichier **.babelrc**
dans le dossier superProjet qui contiendra :


      {
        "presets" : ["react"]
      }

A ce stade vous devriez avoir :

```
superProjet
|_node_modules/
|_.babelrc
|_package.json
|_webpack.config.js
```

Ouf la mise en place de l'écosysteme est terminé nous pouvons passer au code :)
