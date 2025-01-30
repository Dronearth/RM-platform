import React, { useEffect, useState } from "react";
import api from "../api.js";

const RainfallView = () => {
    const [coords, setCoords] = useState("");
    const [rainfall, setRainfall] = useState(null);

    const fetchRainfall = async () => {
        try {
            const response = await api.get(`/rainfall`, {
                params: { coords }, // Enviar las coordenadas como parámetro
            });
            setRainfall(response.data);
        } catch (error) {
            console.error("Error fetching rainfall data", error);
        }
    }; 

    useEffect(() => {
        if (coords) {
            fetchRainfall();
        }
    }, [coords]);

    return (
        <div className="rainfall-app">
            <input
                type="text"
                value={coords}
                onChange={(e) => setCoords(e.target.value)}
                placeholder="Enter coordinates (x,y)"
            />
            <button onClick={fetchRainfall}>Get Rainfall Data</button>

            {rainfall  && (
                <div>
                    <h3>Rainfall Data:</h3>
                    <pre>{JSON.stringify(rainfall, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default RainfallView;
