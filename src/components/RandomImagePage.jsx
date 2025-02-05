
import React, { useState, useEffect } from "react";
import { Navbar } from '../components'

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
    <div className='jumbotron jumbotron-fluid'>
      <div className='p-5 m-5 vw-100'>
        <div className="row align-items-center">
          <div className='col-6 d-flex flex-column justify-content-center'>
            <h2 className='display-4 py-5'>Here's a Random Image from Unsplash</h2>
            <button className='' onClick={fetchImage}>Get New Image</button>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            {imageUrl && <img src={imageUrl} alt={imageAlt} className='col-8'/>}
          </div>
        </div>
      </div>
    </div>
  );
};


const RandomImagePage = () => {
  return (
    <>
      <Navbar/>
      <RandomImage/>
    </>
  )
}
// No SectionWrapper here; by removing the padding & margin, the vw-100 tag can be used while still centering the elements
export default RandomImagePage