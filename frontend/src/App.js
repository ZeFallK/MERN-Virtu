import './App.css';
import UserList from './components/UsersLists';
import AddUser from './components/AddUsers';
import EditUser from './components/EditUsers';
import React, { useState, useEffect } from 'react';
import API from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

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

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion des Utilisateurs</h1>
      {editingUser ? (
        <EditUser
          user={editingUser}
          onUpdate={handleUpdateUser}
          onCancel={() => setEditingUser(null)} // Fermer le formulaire d'édition
        />
      ) : (
        <AddUser onAdd={handleAddUser} />
      )}
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onEdit={(user) => setEditingUser(user)} // Ouvre le formulaire d'édition
      />
    </div>
  );
}

export default App;
