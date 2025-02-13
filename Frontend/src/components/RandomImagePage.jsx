import React, { useState, useEffect } from "react";
import { Navbar } from '../components'

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const getUnsplashURL = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`)
      const responseJSON = await response.json()
      return responseJSON.message
    }
    catch(error) {
      console.error("Error fetching data from Backend:", error)
    }
  }

  const fetchImage = async () => {
    try {
      const unsplashURL = await getUnsplashURL() // Wait for URL
      const response = await fetch(unsplashURL)
      const responseJSON = await response.json()
      console.log(responseJSON.urls.regular) // Logs the image URL
      setImageUrl(responseJSON.urls.regular)
      setImageAlt(responseJSON.alt_description)
    }
    catch(error) {
      console.error("Error fetching data from Unsplash:", error)
    }
  };

  useEffect(() => {
    fetchImage()
  }, []);

  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='p-5 m-5 vw-100'>
        <div className="row align-items-center">
          <div className='col-6 d-flex flex-column justify-content-center'>
            <h2 className='display-4'>Here's a Random Image from Unsplash</h2>
            <h5 className=''>If no image appears, you've hit the API rate limit.</h5>
            <button className='mt-5' onClick={fetchImage}>Get New Image</button>
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