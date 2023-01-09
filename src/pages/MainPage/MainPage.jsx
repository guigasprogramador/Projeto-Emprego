import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // fetch the users from the API
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
      .then((response) => {
        setUsers(response.data.results);
        setTotalPages(response.data.info.pages);
      });
  }, [page, query]);

  function handleSearch(event) {
    setQuery(event.target.value);
    setPage(1);
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.login.username}</td>
              <td>{user.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePreviousPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}
