import './App.css';
import UserList from './components/UsersLists';
import AddUser from './components/AddUsers';
import React, { useState, useEffect } from 'react';
import API from './api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await API.get('/');
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user._id !== id)); // Supprime l'utilisateur de l'état local
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion des Utilisateurs</h1>
      <AddUser onAdd={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
