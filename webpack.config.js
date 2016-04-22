/************************************************************/
/* 															*/
/*	 fichier de config de webpack							*/
/*															*/
/************************************************************/

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


var BUILD_DIR = path.resolve(__dirname, 'Front/client/public'); // dossier source assemble
var APP_DIR = path.resolve(__dirname, 'Front/client/app');      // dossier source du projet react

/*permet de dupliquer la page index.html de src dans build et lui rajoute le fichier bundle a la fin*/
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});


var config = {
  /*entry est un array de string qui prend le chemin des fichiers d'entrée de l'application*/
  entry: [
  APP_DIR + '/index.jsx'
  ],
  module : {
    /* loaders va transformer les fichiers en Javascript ''regular'' */
    /* il prend 3 arguments :
                            -test : l'extention des fichiers a transformer
                            -include or exclude : les dossiers ou il faut ou pas appliquer le loaders
                            -loader : le loader en question a appliquer 
                */
    loaders : [
      {
        test : /\.jsx?/, //expression réguliere qui va prendre tout les fichiers avec une extension .js ou .jsx
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  /*

  */
  output: {
    path: BUILD_DIR,      // chemin de sortie
    filename: 'bundle.js'   // nom du fichier qui contiendra les sources
  },
  plugins : [HTMLWebpackPluginConfig]
};

module.exports = config;