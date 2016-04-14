/************************************************************/
/* 															*/
/*	 fichier de config de webpack							*/
/*															*/
/************************************************************/

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public'); // dossier source assemble
var APP_DIR = path.resolve(__dirname, 'src/client/app');      // dossier source du projet react


var config = {
  entry: APP_DIR + '/index.jsx', //fichier de départ application
  output: {
    path: BUILD_DIR,			// chemin de sortie
    filename: 'bundle.js'		// nom du fichier qui contiendra les sources
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/, //defini les extensions que prend le loader ici js et jsx
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;