import React from 'react';

function Food({fav}){
  console.log(fav);
  return (
      <h1>I LIKE {fav}</h1>
    );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="soup"/>
      <Food fav="samgiopsal"/>
    </div>
    
    );
}

export default App;
