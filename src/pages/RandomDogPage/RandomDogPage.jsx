import React, { useState } from "react";
import axios from "axios";
import "./Random.css";

export default function RandomDogPage() {
  const [imageUrl, setImageUrl] = useState("");

  function handleRefresh() {
    // fetch a random image from the Random Dog API
    axios.get("https://random.dog/woof.json").then((response) => {
      setImageUrl(response.data.url);
    });
  }

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {imageUrl && <img src={imageUrl} alt="Random dog" />}
    </div>
  );
}
