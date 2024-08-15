// Information Reference
// https://react.dev/reference/rules/rules-of-hooks
// https://www.npmjs.com/package/eslint-plugin-react-hooks

import { useEffect, useState } from "react";

export const useFetch = (fetchFn, initialValue) => {
    // reuse the useEffect calls we have to fetch places in App and AvailablePlaces components respectively
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({
                    message: error.message || "Failed to fetch data.",
                });
            }

            setIsFetching(false);
        };

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        error,
        setIsFetching,
        setFetchedData,
        setError
    };
};
