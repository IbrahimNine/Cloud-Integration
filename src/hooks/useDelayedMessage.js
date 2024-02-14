import { useState, useEffect } from "react";

function useDelayedMessage(condition, delay) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (condition) {
        setShowMessage(true);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [condition, delay]);

  return showMessage;
}

export default useDelayedMessage;
