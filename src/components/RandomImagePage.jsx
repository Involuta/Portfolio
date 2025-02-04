
import React, { useState, useEffect } from "react";
import { SectionWrapper } from '../hoc'

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const fetchImage = async () => {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=fU8TlbPbAok05eTaawq4qZgU7NlrCmafc4qaY2TM9ZU")
      .then(response => response.json())  // Convert response to JSON
      .then(response => {
        console.log(response)       // Logs the entire JSON
        console.log(response.urls.regular) // Logs the image URL
        setImageUrl(response.urls.regular)
        setImageAlt(response.alt_description)
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchImage(); // Fetch image on component mount
  }, []);

  return (
    <div className='container-fluid'>
      <div className="row align-items-center">
        <div className='col'>
          <h2 className=''>Random Image</h2>
          <button className='' onClick={fetchImage}>Get New Image</button>
        </div>
        <div className='col'>
          {imageUrl && <img src={imageUrl} alt={imageAlt} width="300" />}
        </div>
      </div>
    </div>
  );
};


const RandomImagePage = () => {
  return (
    <RandomImage/>
  )
}

export default SectionWrapper(RandomImagePage, '')