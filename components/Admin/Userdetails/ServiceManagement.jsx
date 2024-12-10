// import React, { useState, useEffect } from 'react';
// import './ServiceManagement.css';

// const ServiceManagement = () => {
//   const [services, setServices] = useState([]);
//   const [service, setService] = useState({ title: '', description: '', idealFor: '', features: '' });
//   const [editingService, setEditingService] = useState(null);

//   useEffect(() => {
//     const storedServices = JSON.parse(localStorage.getItem('services')) || [];
//     setServices(storedServices);
//   }, []);

//   const saveServices = (services) => {
//     localStorage.setItem('services', JSON.stringify(services));
//   };

//   const addService = (service) => {
//     const newServices = [...services, { ...service, id: Date.now() }];
//     setServices(newServices);
//     saveServices(newServices);
//   };

//   const updateService = (updatedService) => {
//     const newServices = services.map(service =>
//       service.id === updatedService.id ? updatedService : service
//     );
//     setServices(newServices);
//     saveServices(newServices);
//   };

//   const deleteService = (serviceId) => {
//     const newServices = services.filter(service => service.id !== serviceId);
//     setServices(newServices);
//     saveServices(newServices);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setService({ ...service, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingService) {
//       updateService({ ...service, id: editingService.id });
//       setEditingService(null);
//     } else {
//       addService({ ...service, id: Date.now() });
//     }
//     setService({ title: '', description: '', idealFor: '', features: '' });
//   };

//   const handleEdit = (service) => {
//     setService(service);
//     setEditingService(service);
//   };

//   return (
//     <div className="service-management">
//       <h2>Service Management</h2>
//       <form onSubmit={handleSubmit} className="service-form">
//         <h3>{editingService ? 'Edit Service' : 'Add Service'}</h3>
//         <input
//           type="text"
//           name="title"
//           value={service.title}
//           onChange={handleChange}
//           placeholder="Title"
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           value={service.description}
//           onChange={handleChange}
//           placeholder="Description"
//           required
//         />
//         <input
//           type="text"
//           name="idealFor"
//           value={service.idealFor}
//           onChange={handleChange}
//           placeholder="Ideal For"
//           required
//         />
//         <input
//           type="text"
//           name="features"
//           value={service.features}
//           onChange={handleChange}
//           placeholder="Features"
//           required
//         />
//         <button type="submit">{editingService ? 'Update Service' : 'Add Service'}</button>
//       </form>

//       <div className="service-list">
//         <h3>Services</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Ideal For</th>
//               <th>Features</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {services.map((service) => (
//               <tr key={service.id}>
//                 <td>{service.title}</td>
//                 <td>{service.description}</td>
//                 <td>{service.idealFor}</td>
//                 <td>{service.features}</td>
//                 <td>
//                   <button onClick={() => handleEdit(service)}>Edit</button>
//                   <button onClick={() => deleteService(service.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ServiceManagement;

import React, { useState, useEffect } from 'react';
import './ServiceManagement.css';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState({ title: '', description: '', idealFor: '', features: '', category: '', amount: '' });
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const addService = async (newService) => {
    try {
      const response = await fetch('http://localhost:8080/api/services/single', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });
      if (response.ok) {
        const savedService = await response.json();
        setServices([...services, savedService]);
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const updateService = async (updatedService) => {
    try {
      const response = await fetch(`http://localhost:8080/api/services/${updatedService.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedService),
      });
      if (response.ok) {
        const updatedServiceData = await response.json();
        setServices(services.map(service => service.id === updatedServiceData.id ? updatedServiceData : service));
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const deleteService = async (serviceId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/services/${serviceId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setServices(services.filter(service => service.id !== serviceId));
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingService) {
      updateService({ ...service, id: editingService.id });
      setEditingService(null);
    } else {
      addService(service);
    }
    setService({ title: '', description: '', idealFor: '', features: '', category: '', amount: '' });
  };

  const handleEdit = (service) => {
    setService(service);
    setEditingService(service);
  };

  return (
    <div className="service-management">
      <h2>Service Management</h2>
      <form onSubmit={handleSubmit} className="service-form">
        <h3>{editingService ? 'Edit Service' : 'Add Service'}</h3>
        <input
          type="text"
          name="title"
          value={service.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={service.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="idealFor"
          value={service.idealFor}
          onChange={handleChange}
          placeholder="Ideal For"
          required
        />
        <input
          type="text"
          name="features"
          value={service.features}
          onChange={handleChange}
          placeholder="Features"
          required
        />
        <input
          type="text"
          name="category"
          value={service.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="amount"
          value={service.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <button type="submit">{editingService ? 'Update Service' : 'Add Service'}</button>
      </form>

      <div className="service-list">
        <h3>Services</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Ideal For</th>
              <th>Features</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.idealFor}</td>
                <td>{service.features}</td>
                <td>{service.category}</td>
                <td>{service.amount}</td>
                <td>
                  <button onClick={() => handleEdit(service)}>Edit</button>
                  <button onClick={() => deleteService(service.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceManagement;
