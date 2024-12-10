import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../Navbar/ANavbar'; // Adjust the path as needed
import Sidebar from '../Sidebar/Sidebar'; // Adjust the path as needed
import './UserDetails.css';
import ServiceManagement from './ServiceManagement';

const UserDetails = () => {
  const [users, setUsers] = useState([
    { id: 7437, name: 'ATrader', password: '**', status: 'Enabled' },
    { id: 6432, name: 'Broker A', password: '**', status: 'Enabled' },
    { id: 593, name: 'Broker B', password: '**', status: 'Enabled' },
    { id: 1618, name: 'BRValentine', password: '**', status: 'Enabled' },
    { id: 6565, name: 'CFisk', password: '**', status: 'Enabled' },
    { id: 4231, name: 'DSmith', password: '**', status: 'Enabled' },
    { id: 6566, name: 'FThomas', password: '**', status: 'Enabled' },
    { id: 762, name: 'JDavid', password: '**', status: 'Enabled' },
    { id: 915, name: 'JDough', password: '**', status: 'Enabled' },
    { id: 755, name: 'JJones', password: '**', status: 'Enabled' },
    { id: 1358, name: 'JoeDoe', password: '**', status: 'Enabled' },
    { id: 8604, name: 'JoeTrader', password: '**', status: 'Enabled' },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ id: '', name: '', password: '', status: 'Enabled' });

  const handleEdit = (index) => {
    setEditingUser(index);
  };

  const handleSave = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = editingUser;
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    const updatedUsers = [...users, { ...newUser, id: Date.now() }];
    setUsers(updatedUsers);
    setNewUser({ id: '', name: '', password: '', status: 'Enabled' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingUser !== null) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const data = {
    labels: [
      'All User',
      'Enabled',
      'Not Logged In',
      'Logged In',
      'Disabled',
      'Retired',
    ],
    datasets: [
      {
        data: [28, 16, 15, 1,  2, 2],
        backgroundColor: [
          '#FF6384',
          '#FFCE56',
          '#4BC0C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    cutout: '50%', // Adjust the size of the center cutout
   
  };

  return (
    <div className='details-container'>
      <Sidebar />
      <div className='details-content'>
        <Navbar />
        <div className="user-dashboard">
          <div className="user-status">
            <h2>User Status</h2>
            <div className="chart-container">
              <Doughnut data={data} options={options} />
            </div>
            <ul>
                <li>All Users: 34</li>
              <li>Enabled: 28</li>
              <li>Login: 24</li>
              <li>Not Logged In: 15</li>
              <li>Disabled: 2</li>
              <li>Retired: 1</li>
            </ul>
          </div>
          <div className="user-table">
            <h2>All Users</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{editingUser === index ? <input type="text" name="id" value={editingUser.id} onChange={handleChange} /> : user.id}</td>
                    <td>{editingUser === index ? <input type="text" name="name" value={editingUser.name} onChange={handleChange} /> : user.name}</td>
                    <td>{editingUser === index ? <input type="password" name="password" value={editingUser.password} onChange={handleChange} /> : user.password}</td>
                    <td>{editingUser === index ? <input type="text" name="status" value={editingUser.status} onChange={handleChange} /> : user.status}</td>
                    <td>
                      {editingUser === index ? (
                        <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                      ) : (
                        <>
                          <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td><input type="text" name="id" value={newUser.id} onChange={handleChange} placeholder="ID" /></td>
                  <td><input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Name" /></td>
                  <td><input type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" /></td>
                  <td><input type="text" name="status" value={newUser.status} onChange={handleChange} placeholder="Status" /></td>
                  <td>
                    <button className="add-user-btn" onClick={handleAddUser}>Add User</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='servicemanagement'>
          <ServiceManagement/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;