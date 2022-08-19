import { useState } from "react";
import "./App.css";
import StripeContainer from "./components/StripeContainer";
import spatula from "./image/spatula.png";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <div>
          <h3>$10.00</h3>
          <img src={spatula} alt="The spatula" width="200px" />
          <br />
          <button onClick={() => setShowItem(true)}>Purchase</button>
        </div>
      )}
    </div>
  );
}

export default App;
