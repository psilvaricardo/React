import Error from "./Error";
import Places from "./Places";
import sortPlacesByDistance from "../loc";
import { fetchAvailablePlaces } from "../http";
import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";

const fetchSortedPlaces = async () => {
    const places = await fetchAvailablePlaces();

    // This is an example on how to convert a non-Promise
    // feature into a Promise-base feature
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
                places,
                position.coords.latitude,
                position.coords.longitude
            );

            resolve(sortedPlaces);
        });
    });
};

const AvailablePlaces = ({ onSelectPlace }) => {
    // retrieve the places saved by the user only once when the app starts...
    // this custom hook is also returning state-updating Functions...
    const {
        isFetching,
        fetchedData: availablePlaces,
        error,
    } = useFetch(fetchSortedPlaces, []);

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

// Define prop types for the AvailablePlaces component
AvailablePlaces.propTypes = {
    onSelectPlace: PropTypes.func.isRequired, // ensure that onSelectPlace is a function
};

export default AvailablePlaces;
