import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    cpf: "",
  });

  useEffect(() => {
    // fetch the customers from the API
    axios.get("/api/customers").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  function handleAdd() {
    setEditing(true);
    setCurrentCustomer({
      id: null,
      name: "",
      email: "",
      phone: "",
      address: "",
      cpf: "",
    });
  }

  function handleCancel() {
    setEditing(false);
  }

  function handleSave(event) {
    event.preventDefault();

    // create or update the customer
    if (currentCustomer.id) {
      axios
        .put(`/api/customers/${currentCustomer.id}`, currentCustomer)
        .then((response) => {
          const updatedCustomers = customers.map((customer) => {
            if (customer.id === currentCustomer.id) {
              return response.data;
            }
            return customer;
          });
          setCustomers(updatedCustomers);
          setEditing(false);
        });
    } else {
      axios.post("/api/customers", currentCustomer).then((response) => {
        setCustomers([...customers, response.data]);
        setEditing(false);
      });
    }
  }

  function handleEdit(customer) {
    setEditing(true);
    setCurrentCustomer(customer);
  }

  function handleDelete(customer) {
    axios.delete(`/api/customers/${customer.id}`).then(() => {
      const updatedCustomers = customers.filter((c) => c.id !== customer.id);
      setCustomers(updatedCustomers);
    });
  }

  return (
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>CPF</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.cpf}</td>
              <td>
                <button onClick={() => handleEdit(customer)}>Edit</button>
                <button onClick={() => handleDelete(customer)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!editing && <button onClick={handleAdd}>Add customer</button>}
      {editing && (
        <form onSubmit={handleSave}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={currentCustomer.name}
            onChange={(event) =>
              setCurrentCustomer({
                ...currentCustomer,
                name: event.target.value,
              })
            }
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={currentCustomer.email}
            onChange={(event) =>
              setCurrentCustomer({
                ...currentCustomer,
                email: event.target.value,
              })
            }
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={currentCustomer.phone}
            onChange={(event) =>
              setCurrentCustomer({
                ...currentCustomer,
                phone: event.target.value,
              })
            }
          />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={currentCustomer.address}
            onChange={(event) =>
              setCurrentCustomer({
                ...currentCustomer,
                address: event.target.value,
              })
            }
          />
          <br />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={currentCustomer.cpf}
            onChange={(event) =>
              setCurrentCustomer({
                ...currentCustomer,
                cpf: event.target.value,
              })
            }
          />
          <br />
          <button type="submit">Save</button>
          <br />
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
}
export default CustomersPage;
