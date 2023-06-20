import React, { useEffect, useState } from 'react';

function Server() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/');
        const data = await response.json();
        setHello(data.Hello);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {hello}
    </>
  );
}

export default Server;

