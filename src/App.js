import React from 'react';
import './App.css';
import restaurant from './restaurant.jpg'

// Create a component by creating a function, this function returns JSX
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kithen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <header>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height={300} alt="a restaurant product"/>
      {/* <img src="https://github.com/luml.png" height={200} /> */}
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </header>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];
// Make unique key for rendering list
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))

function App() {
  return (
    <>
      <Header name="Elio"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </>
  );
}

export default App;
