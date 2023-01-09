import React, { useState } from "react";
import axios from "axios";

export default function HttpCatPage() {
  const [statusCode, setStatusCode] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleChange(event) {
    setStatusCode(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // fetch the image from the HTTP Cat API
    axios
      .get(`https://http.cat/${statusCode}`)
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        // if the status code is not found, display a default image
        setImageUrl("https://http.cat/404");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="statusCode">Status code:</label>
        <input
          type="text"
          id="statusCode"
          value={statusCode}
          onChange={handleChange}
        />
        <button type="submit">Show image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt={statusCode} />}
    </div>
  );
}
