import { useEffect, useState } from "react";
import Places from "./Places.jsx";

const AvailablePlaces = ({ onSelectPlace }) => {
    const [availablePlaces, setAvailablePlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch("http://localhost:3000/places");
            const data = await response.json();
            setAvailablePlaces(data.places);
        };
        fetchPlaces();
    }, []);

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
};

export default AvailablePlaces;
