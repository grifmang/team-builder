import React, {useState} from 'react';
import logo from './logo.svg';
import Form from "./components/Form";
import FormCard from "./components/FormCard";
import './App.css';

function App() {
  const [form, setForm] = useState([{id: 1, name:'Tim Griffith', email:'tim@tim.com', role:'Owner'}])

  const addNewCard = card => {
    const newCard = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role
    };
    setForm([...form, newCard]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewCard={addNewCard} />
      <FormCard form={form} />
    </div>
  );
}

export default App;
