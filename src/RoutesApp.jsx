import { Routes, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm/LoginForm";
import MainPage from "./pages/MainPage/MainPage";
import HttpCatPage from "./pages/HttpCatPage/HttpCatPage";
import RandomDogPage from "./pages/RandomDogPage/RandomDogPage";
import ContactsList from "./pages/ContactsList/ContactsList";
import Home from "./pages/Home";

import TodoList from "./pages/TodoList";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/http-cat" element={<HttpCatPage />} />
      <Route path="/random-dog" element={<RandomDogPage />} />
      <Route path="/customers" element={<ContactsList />} />
      <Route path="Todo-list" element={<TodoList />} />
    </Routes>
  );
}
