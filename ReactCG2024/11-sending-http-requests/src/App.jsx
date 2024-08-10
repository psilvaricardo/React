import { useRef, useState, useCallback } from "react";
import Places from "./components/Places";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces";
import { updateUserPlaces } from "./http";

const App = () => {
    const selectedPlace = useRef();
    const [userPlaces, setUserPlaces] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleStartRemovePlace = (place) => {
        setModalIsOpen(true);
        selectedPlace.current = place;
    };

    const handleStopRemovePlace = () => {
        setModalIsOpen(false);
    };

    const handleSelectPlace = async (selectedPlace) => {
        setUserPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = [];
            }
            if (
                prevPickedPlaces.some((place) => place.id === selectedPlace.id)
            ) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });

        try {
            await updateUserPlaces([selectedPlace, ...userPlaces]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemovePlace = useCallback(async function handleRemovePlace() {
        setUserPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter(
                (place) => place.id !== selectedPlace.current.id
            )
        );

        setModalIsOpen(false);
    }, []);

    return (
        <>
            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
                    fallbackText="Select the places you would like to visit below."
                    places={userPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />

                <AvailablePlaces onSelectPlace={handleSelectPlace} />
            </main>
        </>
    );
};

export default App;
