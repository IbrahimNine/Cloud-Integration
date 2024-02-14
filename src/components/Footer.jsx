import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 Footer">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} My Destination. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer