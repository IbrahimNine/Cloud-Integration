import { useState, useEffect } from "react";

function useCountryCode(latitude, longitude) {
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    async function fetchCountryCode() {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        setCountryCode(data.address.country_code.toUpperCase());
      } catch (error) {
        console.error("Error fetching country code: ", error);
        setCountryCode(null);
      }
    }

    if (latitude && longitude) {
      fetchCountryCode();
    }
  }, [latitude, longitude]);

  return countryCode;
}

export default useCountryCode;
