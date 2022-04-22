import './App.css';
import image from "./Assets/IMG_2175.JPG"

function App() {
  return (
    <div className="App">
      <h1>Hi, I am Kai and these are some of my projects...</h1>
      <h2>About Me =></h2>
      <p>I am a software developer by trade and a father, lover, partner, friend, adventurer, etc... by choice</p>
      <img src={image} />
    </div>
  );
}

export default App;
