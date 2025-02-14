import React, { useState, useEffect } from "react";
import { Navbar } from '../components'
import { heroBG, simple_green_bg, triangle_green_bg } from '../assets'

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const getUnsplashURL = async () => {
    // Fetch Unsplash API URL from Backend; Backend URL comes from .env variable
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
    // Fetch Unsplash API URL from Backend, then use that URL to fetch an image from Unsplash
    try {
      const unsplashURL = await getUnsplashURL()
      const response = await fetch(unsplashURL)
      const responseJSON = await response.json()
      console.log(responseJSON.urls.regular)
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
    <div className='align-items-center'
      style={{
        backgroundImage: `url(${simple_green_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}>
      <div className='p-5 m-lg-5 vw-100'>
        {/*Large Screens; d-none d-lg-flex means this only shows up on large screens*/}
        <div className="d-none d-lg-flex row align-items-center">
          <div className='col-6 d-flex flex-column justify-content-center bg-black border bg-opacity-50 p-5'>
            <h2 className='display-4 text-white'>Here's a Random Image from Unsplash</h2>
            <h5 className='text-white pt-2'>If no image appears, wait around 50 seconds as the Backend spins up. If still nothing shows up, you've hit the API rate limit.</h5>
            <button className='mt-5 bg-light text-dark' onClick={fetchImage}>Get New Image</button>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            {imageUrl && <img src={imageUrl} alt={imageAlt} className='col-8'/>}
          </div>
        </div>
        {/*Small Screens; d-lg-none means this does not show up on large screens and shows up otherwise*/}
        <div className="d-lg-none align-items-center">
          <div className='d-flex flex-column justify-content-center bg-black border bg-opacity-50 p-5 mt-5'>
            <h2 className='display-4 text-white'>Here's a Random Image from Unsplash</h2>
            <h5 className='text-white pt-2'>If no image appears, wait around 50 seconds as the Backend spins up. If still nothing shows up, you've hit the API rate limit.</h5>
            <button className='mt-5 bg-light text-dark' onClick={fetchImage}>Get New Image</button>
          </div>
          <div className='d-flex justify-content-center'>
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