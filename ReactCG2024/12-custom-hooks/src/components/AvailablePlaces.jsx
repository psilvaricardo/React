import { useEffect, useState } from "react";
import Error from "./Error";
import Places from "./Places";
import sortPlacesByDistance from "../loc";
import { fetchAvailablePlaces } from "../http";
import { useFetch } from "../hooks/useFetch";

/*
navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
    );

    setAvailablePlaces(sortedPlaces);
    setIsFetching(false);
});*/

const AvailablePlaces = ({ onSelectPlace }) => {
    // retrieve the places saved by the user only once when the app starts...
    // this custom hook is also returning state-updating Functions...
    const {
        isFetching,
        fetchedData: availablePlaces,
        error,
        setIsFetching,
        setFetchedData: setAvailablePlaces,
        setError,
    } = useFetch(fetchAvailablePlaces, []);

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
