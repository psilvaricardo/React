import { useEffect, useState } from "react";
import Error from "./Error";
import Places from "./Places";
import sortPlacesByDistance from "../loc";
import { fetchAvailablePlaces } from "../http";

const AvailablePlaces = ({ onSelectPlace }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchPlaces = async () => {
            setIsFetching(true);

            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
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
