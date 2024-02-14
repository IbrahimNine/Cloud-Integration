import { useState, useEffect } from "react";

function useGeoData(countryCode) {
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchGeoData() {
      setLoading(true);
      setError(null);

      const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/places`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setPlaces(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    if (countryCode) {
      fetchGeoData();
    }
  }, [countryCode]);

  return { places, loading, error };
}

export default useGeoData;
