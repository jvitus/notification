## Prérequis
Avoir nodejs d'installé et npm

  [Résumé](#resum)

## La différence entre la théorie et la pratique, c'est qu'en théorie, il n'y a pas de différence, mais en pratique, il y en a une.

### Création des dossiers et initialisation npm

Mon invite de commande est Cmder et l'os est windows donc adaptez-vous si besoin est :)

 Créez le dossier de votre futur super projet et allez dans ce dossier

    mkdir superprojet
    cd superprojet


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


        npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack-dev-server webpack


* l'option --save-dev permet de spécifier que ces modules ne sont utilisés que pour le développement

Arrivé à ce point on serait presque bon pour se lancer dans une magnifique programmation modulaire efficace intuitive etc.  mais il reste une étape primordiale il nous faut un programme pour assembler tout ces modules et nous fournir un joli fichier tout propre contenant notre code.

### Webpack (un programme pour les gouverner tous)

Créez un fichier **webpack.config.js** dans le dossier superprojet qui doit contenir

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
    filename: "/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015','react']
        }
      }
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
  filename: "/bundle.js"
}
```
* path : indique le chemin ou sera le fichier si vous lancer le mode production
* filename : le nom du fichier

```js
module: {
  loaders: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: "babel-loader",
       query: {
         presets: ['es2015','react']
       }
     }
  ]
}
```

* test : expression réguliere qui va prendre tout les fichiers avec une extension .js ou .jsx
* exclude : les dossiers a ne pas visiter
* loader : le loader à utiliser

A ce stade vous devriez avoir :

```
superprojet
|_node_modules/
|_package.json
|_webpack.config.js
```

Ouf la mise en place de l'écosysteme est terminé nous pouvons passer au code :)


### Il y a 10 types de personnes sur terre ceux qui comprennent le binaire et les autres

#### Passons au code

Nous allons créer notre premier composant react.
Placez vous dans le dossier **superprojet**.
Pour mieux structurer notre projet nous allons créer un dossier **app** qui contiendra l'ensemble des sources
Dans le dossier app nous allons créer un dossier **components**
```
mkdir app\components
```

Lancer votre editeur préféré (sublime text , atom , vim , ~~emacs~~  etc  )<br>
Dans le dossier app nous allons créer deux fichiers (index.html et index.jsx)<br>
Dans le dossier components nous allons créer un fichier (app.jsx)

<a id="codeIndexHtml" ></a>Contenu app/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ma Page index de mon super projet :) </title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

```

<a id="codeIndexJsx" ></a>Contenu app/index.jsx
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

const root = document.getElementById('root')

ReactDOM.render(<App /> , root )
```

<a id="codeAppJsx" ></a>Contenu app/components/app.jsx
```js
import React from 'react'

export default class App extends React.Component{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
      <div>
        Hello World!
      </div>
    )
  }
}
```

Et voila notre premier composant react avec un magnifique Hello World :)

Ce qu'il faut retenir de ce premier pas:
* index.html nous definissons un élément avec une id particulière dans lequel React va injecter son code
* index.jsx [ReactDom.render()](https://facebook.github.io/react/docs/top-level-api.html#reactdom) point d'entrée de l'application; signature : render( ReactElement element, DOMElement container, [function callback] )
  *  élement react pour le rendu
  *  récupére le noeud du DOM où injecter le rendu

* app.jsx un component react

Ne reste plus qu'a transformer, transcompiler et assembler tout ces bouts de codes pour que ça fonctionne; webpack est la pour nous aider<BR>
Nous allons modifier le fichier **package.json** :
* Il devrait ressembler a ça :
```js
{
  "name": "superprojet",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.0.2",
    "react-dom": "^15.0.2"
  },
  "devDependencies": {
    "babel-core": "^6.8.0",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "html-webpack-plugin": "^2.16.1",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1"
  }
}
```

Nous allons modifier le contenu de **scripts**
```js
"scripts": {
  "start": "./node_modules/.bin/webpack-dev-server --content-base src --inline --hot",
  "production": "webpack -p"
}
```

Et maintenant si on se place dans le dossier **superprojet** et qu'on lance la commande
```
npm run start
```

Il ne nous reste plus qu'a nous rendre sur http://localhost:8080/ pour voir notre magnifique hello world :)


### Un début d'interaction

Pour cette partie je ne peux que vous renvoyer vers cette [page](http://andrewhfarmer.com/component-communication/) .<br>
Je ne ferais que paraphraser.
Sachez juste que vous pouvez envoyer des "props" aux composants React lorsque vous les appelez comme des arguments
par exemple :
```
<App unSuperProps={12} toto="une chaine"  />
```
Et dans apps.jsx les props seront accessible par
```
this.props.unSuperProps
this.props.toto
```
On peut tout envoyer des tableaux , des objets , des fonctions etc etc

### Suivez le lapin blanc

#### Les routes








### <a id="resum" ></a>Résumé

``` js
mkdir superprojet
cd superprojet
```
``` js
npm init
```
``` js
npm install --save react react-dom
```
``` js
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack-dev-server webpack
```
Modifier le contenu de **package.json** dans **scripts**
```js
"scripts": {
  "start": "./node_modules/.bin/webpack-dev-server --content-base src --inline --hot",
  "production": "webpack -p"
}
```
Créez un fichier **webpack.config.js**

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
   filename: "/bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: "babel-loader"
       query: {
         presets: ['es2015','react']
       }
     }
   ]
 },
plugins: [HTMLWebpackPluginConfig]
};
```
Créer les dossiers qui contiendra le code du projet
```
mkdir app\components
```
Dans le dossier app<br>
un fichier **index.html** [voir code](#codeIndexHtml)<br>
un fichier **index.jsx** qui sera le point d'entrée de l'app [voir code](#codeIndexJsx)<br>

Dans le dossier app/components<br>
un fichier app.jsx [voir code](#codeAppJsx)

Au final
```
superprojet
|_app/
|    |_components/
|    |           |_app.jsx
|    |_index.html
|    |_index.jsx
|_node_modules/
|_package.json
|_webpack.config.js
```
