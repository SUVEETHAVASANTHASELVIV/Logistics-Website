// import React, { useState } from 'react';
// import axios from 'axios';

// const GetQ = () => {
//   const [formData, setFormData] = useState({
//     customerName: '',
//     email: '',
//     serviceRequested: '',
//     details: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/quotations', formData);
//       alert('Quotation request sent and stored in the database!');
//       setFormData({
//         customerName: '',
//         email: '',
//         serviceRequested: '',
//         details: '',
//       });
//     } catch (error) {
//       console.error('There was an error!', error);
//       alert('Failed to send quotation request.');
//     }
//   };

//   return (
//     <div className="quotation-form">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Customer Name</label>
//           <input
//             type="text"
//             name="customerName"
//             value={formData.customerName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Service Requested</label>
//           <input
//             type="text"
//             name="serviceRequested"
//             value={formData.serviceRequested}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Details</label>
//           <textarea
//             name="details"
//             value={formData.details}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button type="submit">Submit Quotation Request</button>
//       </form>
//     </div>
//   );
// };

// export default GetQ;
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors'; // Import for orange color

const GetQ = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    serviceRequested: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/quotations', formData);
      alert('Quotation request sent and stored in the database!');
      setFormData({
        customerName: '',
        email: '',
        serviceRequested: '',
        details: '',
      });
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to send quotation request.');
    }
  };

  return (
    <div className="quotation-form">
      <h2>Request a Quotation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            label="Customer Name"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              style: { fontSize: '1rem' }, // Adjust the font size of the label
            }}
            InputProps={{
              style: { fontSize: '1rem' }, // Adjust the font size of the input text
            }}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            type="email"
            required
            variant="outlined"
            InputLabelProps={{
              style: { fontSize: '1rem' },
            }}
            InputProps={{
              style: { fontSize: '1rem' },
            }}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Service Requested"
            name="serviceRequested"
            value={formData.serviceRequested}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              style: { fontSize: '1rem' },
            }}
            InputProps={{
              style: { fontSize: '1rem' },
            }}
          />
        </div>
        <div className="form-group">
          <TextField
            label="Details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            variant="outlined"
            InputLabelProps={{
              style: { fontSize: '1rem' },
            }}
            InputProps={{
              style: { fontSize: '1rem' },
            }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className="submit-button"
        >
          Submit Quotation Request
        </Button>
      </form>
      <style>{`
        .quotation-form {
          padding: 30px;
          max-width: 600px;
          margin: auto;
          background-color: #f8f9fa;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
        }

        .quotation-form h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #495057;
          font-weight: 500;
          font-size: 1.5rem;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group .MuiTextField-root {
          margin-bottom: 16px;
        }

        .submit-button {
          background-color: ${deepOrange[500]};
          color: white;
          width: 100%;
          padding: 14px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          text-transform: none;
        }

        .submit-button:hover {
          background-color: ${deepOrange[700]};
        }

        @media (max-width: 768px) {
          .quotation-form {
            padding: 20px;
            max-width: 100%;
          }

          .quotation-form h2 {
            font-size: 1.25rem;
          }
          
          .submit-button {
            padding: 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GetQ;

