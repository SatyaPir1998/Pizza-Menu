import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "Red", fontSize: "32px", textTransform: "uppercase" };
  //   return <h1 style={style}>First Pizza App</h1>;
  return (
    <header className="header">
      <h1>First Pizza App</h1>
    </header>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null; // if sold out, return null

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const noOfpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menue</h2>

      {noOfpizzas > 0 ? (
        <>
          <p>
            {" "}
            Authentic Italian cuisine , 6 creative dishes chose from . All are
            from the wood fired oven, all organic and home made and all made
            with love.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> // pass pizza object to Pizza component
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // const style = { color: "Green" };
  const openHour = 6;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to wellcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We are currently open!");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>The shop was open until {closeHour}:00 !</p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
