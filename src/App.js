import React from 'react';
import './App.css';

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      input_ara: "Film, muzik, fotograf...",
      buton_ara: "Ara",
      date: new Date()
    }
  }

  render() {

    const zaman = this.state.date.toLocaleTimeString();
    const tarih = this.state.date.toLocaleDateString();
    const buton_ara = this.state.buton_ara;

    return (
      <div className="App">
        <div style={{margin:'10px'}}>
          <input type="text" placeholder={this.state.input_ara} />
          <button onClick = { () => {this.setState({arama_sonucu: "Icerik bulunamadi"}) } } >{/* this.state.buton_ara  artik bunun yerine buton_ara yazabiliriz, ustte const ile tanimladik*/buton_ara}</button>
        <small>{zaman} {tarih}</small>
        </div>
      </div>
    );

  }
}







