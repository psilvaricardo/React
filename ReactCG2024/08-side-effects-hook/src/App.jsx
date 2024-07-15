import { useRef, useState } from "react";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";

const App = () => {
    const modal = useRef();
    const selectedPlace = useRef();
    const [pickedPlaces, setPickedPlaces] = useState([]);

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
    };

    const handleRemovePlace = () => {
        setPickedPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter(
                (place) => place.id !== selectedPlace.current
            )
        );
        modal.current.close();
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
                    places={AVAILABLE_PLACES}
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
};

export default App;
