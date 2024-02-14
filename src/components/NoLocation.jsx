import React from "react";

// Component for displaying when the user refuse to let the app access his/her location
function NoLocation() {
  return (
    <div className="NoLocation">
      <div>
        <h6>No location was provided </h6>
        <p>(Reload the page and accept location access in your browser)</p>
      </div>
    </div>
  );
}

export default NoLocation;
