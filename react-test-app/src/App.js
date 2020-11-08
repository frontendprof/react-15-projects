
import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import "./index.css";



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}
