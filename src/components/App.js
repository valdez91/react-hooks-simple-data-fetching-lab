
import React, { useState, useEffect } from "react";


const BaseUrl='https://dog.ceo/api/breeds/image/random';
const App=()=> {
  const [Pic, setPic] = useState(null);

  useEffect(() => {
    fetch(BaseUrl)
      .then((response) => response.json())
      .then((data) => {
        setPic(data.message);
      });
  }, []);

  if (!Pic) return <p>Loading...</p>;

  return <img src={Pic} alt="A Random Dog" />;
}

export default App;

