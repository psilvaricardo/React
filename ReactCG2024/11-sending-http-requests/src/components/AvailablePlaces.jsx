import { useEffect, useState } from "react";
import Error from "./Error";
import Places from "./Places";
import sortPlacesByDistance from "../loc";

const AvailablePlaces = ({ onSelectPlace }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchPlaces = async () => {
            setIsFetching(true);

            try {
                const response = await fetch("http://localhost:3000/places");
                const data = await response.json();

                if (!response.ok) {
                    // 400-ish or 500-ish codes
                    throw new Error("Failed to fetch places");
                }

                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        data.places,
                        position.coords.latitude,
                        position.coords.longitude
                    );

                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                });
            } catch (error) {
                setError({
                    message:
                        error.message ||
                        "Could not fetch places, please try again later.",
                });
                setIsFetching(false);
            }
        };
        fetchPlaces();
    }, []);

    if (error) {
        return <Error title="An error occurred!" message={error.message} />;
    }

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
