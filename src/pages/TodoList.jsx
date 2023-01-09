import React, { useState, useEffect } from "react";
import api from "../api";

export default function TodoList() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    loadClients();
  }, []);

  // Função para carregar a lista de clientes
  async function loadClients() {
    const response = await api.get("clients");
    setClients(response.data);
  }

  // Função para cadastrar um novo cliente
  async function handleAddClient(e) {
    e.preventDefault();
    await api.post("clients", { name, cpf, phone, email, address });
    setName("");
    setCpf("");
    setPhone("");
    setEmail("");
    setAddress("");
    loadClients();
  }

  // Função para consultar um cliente pelo CPF
  async function handleSearchClient(e) {
    e.preventDefault();
    const response = await api.get(`clients/${cpf}`);
    setName(response.data.name);
    setPhone(response.data.phone);
    setEmail(response.data.email);
    setAddress(response.data.address);
  }

  // Função para editar um cliente
  async function handleEditClient(e) {
    e.preventDefault();
    await api.put(`clients/${cpf}`, { name, phone, email, address });
    setName("");
    setCpf("");
    setPhone("");
    setEmail("");
    setAddress("");

    // Função para excluir um cliente
    async function handleDeleteClient(client) {
      await api.delete(`clients/${client.cpf}`);
      loadClients();
    }

    return (
      <div>
        <h1>Todo List</h1>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <div />
          <tbody>
            {clients.map((client) => (
              <tr key={client.cpf}>
                <td>{client.name}</td>
                <td>{client.cpf}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>
                  <button onClick={() => handleDeleteClient(client)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Cadastrar novo cliente</h2>
        <form onSubmit={handleAddClient}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </form>

        <h2>Consultar clientes</h2>
        <form onSubmit={handleSearchClient}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button type="submit">Consultar</button>
        </form>

        <h2>Editar cliente</h2>
        <form onSubmit={handleEditClient}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}
