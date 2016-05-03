# Synthese

React a l'air d'être une librairie trés puissante et qui devient assez intuitive aprés un temps d'adaptation

Il est recommandé, mais non obligatoire, d'utiliser une syntaxe jsx avec REACT. Cette syntaxe sera interprêtée par babel que vouus aurez installé avec Npm. Babel permet aux différentes version de javascript de communiquer entre elles en interprétant le code des versions non-compatibles pour le rendre compatible.

La notion de composant React.

Le principe de React est qu’absolument TOUT est un composant, doté d’une fonction render, qui renvoie un élément du DOM.
Voici la façon dont un élément se présente dans le code : 

    class App extends React.Component{
    render() {
    return(
    <div>Ce texte apparaîtra sur la page</div>
    );
    }
    }

Ici nous avons un exemple de syntaxe Jsx : Les éléments html à l’intérieur de la fonction render sont interprétés grâce à Babel.
Ainsi, cette ligne de codes

    <div>Ce texte apparaîtra sur la page</div>

Sera comprise comme

    var div = document.CreateElement('div');
    div InnerHTML = "Ce texte apparaîtra sur la page"

On voit ainsi l’intérêt d’employer la syntaxe Jsx. Même si du Javascript normal fonctionne parfaitement bien, Jsx permet de réduire grandement la taille du code, et est en réalité assez  intuitif passé la première impression.
La syntaxe Jsx permet l’utilisation de code javascript à l’intérieur de symboles { } , de cette façon-là : 

    class App extends React.Component{
    render() {
    return(
    var loc1=2;
    var loc2=2;
    var locRes=4;
    <div>{loc1} + {loc2} = {locRes}</div>
    );
    }
    }

Ici notre exemple affichera "2 + 2 =4"

On peut ainsi y mettre une variable, une expression,  une fonction…
