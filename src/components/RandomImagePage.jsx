
import React, { useState, useEffect } from "react";

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=fU8TlbPbAok05eTaawq4qZgU7NlrCmafc4qaY2TM9ZU")
      .then(response => response.json())  // Convert response to JSON
      .then(response => {
        console.log(response)       // Logs the entire JSON
        console.log(response.urls.regular) // Logs the image URL
        setImageUrl(response.urls.regular)
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchImage(); // Fetch image on component mount
  }, []);

  return (
    <div>
      <h2>Random Image</h2>
      {imageUrl && <img src={imageUrl} alt="Random" width="500" />}
      <br />
      <button onClick={fetchImage}>Get New Image</button>
    </div>
  );
};


const RandomImagePage = () => {
  return (
    <RandomImage/>
  )
}

export default RandomImagePage