import { useEffect, useState } from "react";
import Places from "./Places.jsx";

const AvailablePlaces = ({ onSelectPlace }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            setIsFetching(true);
            const response = await fetch("http://localhost:3000/places");
            const data = await response.json();
            setAvailablePlaces(data.places);
            setIsFetching(false);
        };
        fetchPlaces();
    }, []);

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            loadingText="Fetching place data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
};

export default AvailablePlaces;
