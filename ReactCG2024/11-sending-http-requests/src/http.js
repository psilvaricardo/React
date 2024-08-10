export const fetchAvailablePlaces = async () => {
    // GET is the default HTTP method here...
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();

    if (!response.ok) {
        // 400-ish or 500-ish codes
        throw new Error("Failed to fetch places");
    }

    return data.places;
};

export const updateUserPlaces = async (arrOfPlaces) => {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places: arrOfPlaces }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    if (!response.ok) {
        // 400-ish or 500-ish codes
        throw new Error("Failed to update user data");
    }

    return data.message;
};
