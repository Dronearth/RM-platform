import React from "react"
import './App.css'
import FruitList from "./components/Fruits"
import RainfallView from "./components/Rainfall"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Obtener datos de pluviosidad</h1>
            </header>
            <main>
                <RainfallView />
            </main>
        </div>
    );
};

export default App;