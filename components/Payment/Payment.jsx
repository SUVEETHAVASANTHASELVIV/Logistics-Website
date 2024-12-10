// import React, { useState } from 'react';
// import { TextField, Button, Grid, Modal, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Payment.css';

// const Payment = () => {
//   const navigate = useNavigate();

//   const [cardNumber, setCardNumber] = useState('');
//   const [cardName, setCardName] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [openModal, setOpenModal] = useState(false);

//   const handleCardNumberChange = (e) => {
//     const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//     if (value.length <= 16) {
//       const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-'); // Add dashes every 4 digits
//       setCardNumber(formattedValue);
//     }
//   };

//   const handleExpirationDateChange = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     const formattedValue = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
//     setExpirationDate(formattedValue);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateCardDetails()) {
//       const orderDetails = {
//         name: cardName,
//       };

//       axios.post('http://localhost:8080/api/ordermanagement/create', orderDetails)
//         .then(response => {
//           setSuccessMessage('Payment Successful');
//           setOpenModal(true);

//           // Clear the form after submission
//           setCardNumber('');
//           setCardName('');
//           setExpirationDate('');
//           setCvv('');
//         })
//         .catch(error => {
//           console.error('Error storing order:', error);
//         });
//     }
//   };

//   const validateCardDetails = () => {
//     let isValid = true;
//     let errorMessage = '';

//     const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     const rawCardNumber = cardNumber.replace(/-/g, ''); // Remove dashes to check the raw length
//     if (!cardNumberPattern.test(cardNumber) || rawCardNumber.length !== 16) {
//       errorMessage += 'Card number must be a valid 16-digit number.\n';
//       isValid = false;
//     }

//     if (!cardName.trim()) {
//       errorMessage += 'Cardholder name is required.\n';
//       isValid = false;
//     }

//     const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
//     if (!expirationDatePattern.test(expirationDate)) {
//       errorMessage += 'Expiration date must be in the format MM/YY.\n';
//       isValid = false;
//     }

//     const cvvPattern = /^\d{3,4}$/;
//     if (!cvvPattern.test(cvv)) {
//       errorMessage += 'CVV must be a 3 or 4 digit number.\n';
//       isValid = false;
//     }

//     if (!isValid) {
//       alert(errorMessage);
//     }

//     return isValid;
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     navigate('/Homepage');
//   };

//   return (
//     <div className="payment-container">
//       <h2>Enter Your Payment Details</h2>
//       <div className="card-details-box">
//         <form className="payment-form" onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Card Number"
//                 variant="outlined"
//                 value={cardNumber}
//                 onChange={handleCardNumberChange}
//                 required
//                 placeholder="1234-5678-9012-3456"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Cardholder Name"
//                 variant="outlined"
//                 value={cardName}
//                 onChange={(e) => setCardName(e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Expiration Date"
//                 variant="outlined"
//                 value={expirationDate}
//                 onChange={handleExpirationDateChange}
//                 required
//                 placeholder="MM/YY"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="CVV"
//               variant="outlined"
//               type="password"
//               value={cvv}
//               onChange={(e) => {
//                 const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//                 if (value.length <= 3) {
//                   setCvv(value); // Set CVV only if it's 3 digits or less
//                 }
//               }}
//               inputProps={{ maxLength: 3 }}
//               required
//             />
//           </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             className="payment-button"
//           >
//             Pay Now
//           </Button>
//         </form>
//       </div>

//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 300,
//             bgcolor: 'background.paper',
//             border: '2px solid #000',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <h2>{successMessage}</h2>
//           <Button
//             onClick={handleCloseModal}
//             variant="contained"
//             color="primary"
//           >
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from 'react';
import { TextField, Button, Grid, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 16) {
      const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');
      setCardNumber(formattedValue);
    }
  };

  const handleExpirationDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
    setExpirationDate(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateCardDetails()) {
      try {
        // Create order with Razorpay
        const response = await axios.post('http://localhost:8081/api/payment/create-order', {
          amount: 500,
        });
        const { id } = response.data;

        const options = {
          key: 'rzp_test_OSwi8rImPLk2WM', 
          amount: 500 * 100, 
          currency: 'INR',
          name: 'TrackPro',
          description: 'Test Transaction',
          order_id: id,
          handler: function (response) {
            setSuccessMessage('Payment Successful');
            setOpenModal(true);
          },
          prefill: {
            name: cardName,
          },
          theme: {
            color: '#3399cc',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error('Error creating order:', error);
      }
    }
  };

  const validateCardDetails = () => {
    let isValid = true;
    let errorMessage = '';

    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const rawCardNumber = cardNumber.replace(/-/g, '');
    if (!cardNumberPattern.test(cardNumber) || rawCardNumber.length !== 16) {
      errorMessage += 'Card number must be a valid 16-digit number.\n';
      isValid = false;
    }

    if (!cardName.trim()) {
      errorMessage += 'Cardholder name is required.\n';
      isValid = false;
    }

    const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationDatePattern.test(expirationDate)) {
      errorMessage += 'Expiration date must be in the format MM/YY.\n';
      isValid = false;
    }

    const cvvPattern = /^\d{3,4}$/;
    if (!cvvPattern.test(cvv)) {
      errorMessage += 'CVV must be a 3 or 4 digit number.\n';
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
    }

    return isValid;
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate('/Homepage');
  };

  return (
    <div className="payment-container">
      <h2>Enter Your Payment Details</h2>
      <div className="card-details-box">
        <form className="payment-form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
                placeholder="1234-5678-9012-3456"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cardholder Name"
                variant="outlined"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Expiration Date"
                variant="outlined"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                required
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                type="password"
                value={cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 3) {
                    setCvv(value);
                  }
                }}
                inputProps={{ maxLength: 3 }}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="payment-button"
          >
            Pay Now
          </Button>
        </form>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>{successMessage}</h2>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Payment;
