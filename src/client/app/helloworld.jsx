import React from 'react';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  setTime () {
    var currentdate = new Date();

    // recup les heures
    var hours = currentdate.getUTCHours() +2; 
    // recup les minutes
    var minutes = currentdate.getUTCMinutes();
    // recup les secondes
    var seconds = currentdate.getUTCSeconds();

      // convert les heures en string et ajout du 0 avant si < 10
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // convert les minutes ens tring et ajour du 0 avant si < 10
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

  seconds = seconds + "";
      if( seconds.length == 1 ){ seconds = "0" + seconds; }

      //on change l'état
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  }
  // invoke une fois coté client et serveur AVANT le render
  componentWillMount (){
    this.setTime();
  }
  //invoke une fois coté client APRES le premier render
  componentDidMount (){
     window.setInterval(function () {
      this.setTime(); 
    }.bind(this), 1000); //relance la fonction setime toute les secondes qui va changer les etat et donc relancer le render
  }

  render() {
    return (
      <p>
        bonjour , <input type="text" placeholder="Your name here" />!
        il est {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </p>
    );
  }

}

export default HelloWorld;