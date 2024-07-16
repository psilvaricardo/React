import { useRef, useState, useEffect } from "react";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc";

// retrieve the Ids stored in the web browser...
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) => {
    AVAILABLE_PLACES.find((place) => place.id === id);
});

const App = () => {
    const modal = useRef();
    const selectedPlace = useRef();
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [pickedPlaces, setPickedPlaces] = useState([]);

    /* The first arg is a function that should wrap your side-effect code.
       The second arg is an array of dependencies of that effect function.
       The function that you pass as the first arg will be executed by React
       AFTER the JSX code has been return for the current component. AFTER
       the component's function is done executing. */
    /* If you define the dependencies array, aka the second arg and don't omit it
       then, React will take a look at the dependencies specifed there, and will 
       only execute this effect function again if the dependencies value changed.
       If we have no dependencies, they will never change, therefore React will
       never re-executes this effect function. */
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
                AVAILABLE_PLACES,
                position.coords.latitude,
                position.coords.longitude
            );

            setAvailablePlaces(sortedPlaces);
        });
    }, []);

    const handleStartRemovePlace = (id) => {
        modal.current.open();
        selectedPlace.current = id;
    };

    const handleStopRemovePlace = () => {
        modal.current.close();
    };

    const handleSelectPlace = (id) => {
        setPickedPlaces((prevPickedPlaces) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            return [place, ...prevPickedPlaces];
        });

        const storedIds =
            JSON.parse(localStorage.getItem("selectedPlaces")) || [];
        if (storedIds.indexOf(id) === -1) {
            localStorage.setItem(
                "selectedPlaces",
                JSON.stringify([id, ...storedIds])
            );
        }
    };

    const handleRemovePlace = () => {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter(
                (place) => place.id !== selectedPlace.current
            )
        );
        modal.current.close();

        const storedIds =
            JSON.parse(localStorage.getItem("selectedPlaces")) || [];

        localStorage.setItem(
            "selectedPlaces",
            JSON.stringify(
                storedIds.filter((id) => {
                    id !== selectedPlace.current;
                })
            )
        );
    };

    return (
        <>
            <Modal ref={modal}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to
                    visit or you have visited.
                </p>
            </header>
            <main>
                <Places
                    title="I'd like to visit ..."
                    fallbackText={
                        "Select the places you would like to visit below."
                    }
                    places={pickedPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />
                <Places
                    title="Available Places"
                    places={availablePlaces}
                    fallbackText="Sorting places by distance..."
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
};

export default App;
