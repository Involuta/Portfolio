import React, { useState, useEffect } from 'react';

const BackendTest = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}`)
      .then(response => response.json())
      .then(data => setMessage(data.testResponse))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default BackendTest;