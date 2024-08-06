import { useEffect, useState } from "react";
import Places from "./Places.jsx";

const AvailablePlaces = ({ onSelectPlace }) => {
    const [availablePlaces, setAvailablePlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/places")
            .then((res) => res.json())
            .then((res) => setAvailablePlaces(res.places));
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
