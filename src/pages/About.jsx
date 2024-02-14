import React from 'react'

function About() {
  return (
    <div className="About">
      <div className="About-us">
        <h1>About Us</h1>
        <p>
          Welcome to My Destination - your ultimate travel companion. We are
          passionate about exploration and adventure. Our mission is to provide
          you with the resources and inspiration to embark on unforgettable
          journeys.
        </p>
        <p>
          At My Destination, we believe that every destination has a story to
          tell. Whether it's a bustling city, a tranquil beach, or a remote
          village, there's magic to be found everywhere. Join us as we uncover
          the beauty of the world, one destination at a time.
        </p>
        <p>
          From travel tips and guides to inspiring stories and breathtaking
          photography, we're here to fuel your wanderlust and ignite your sense
          of discovery. Join our community and let's explore the world together!
        </p>
      </div>
      
      <div>
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, suggestions, or just want to say hello,
          feel free to contact us through any of the following channels:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@mydestination.com">
              contact@mydestination.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, City, Country, 12345
          </li>
        </ul>
<hr />
        <h2>Connect With Us</h2>
        <p>
          Follow us on social media for the latest updates, travel inspiration,
          and more:
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About