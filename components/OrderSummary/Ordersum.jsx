import React, { useState, useEffect } from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product from '../Product/Product';
import './Ordersum.css';

const Ordersum = () => {
  
  const [selectedMainService, setSelectedMainService] = useState('');
  const [selectedInnerService, setSelectedInnerService] = useState('');
  const [amount, setAmount] = useState(0);
  const [shipmentProduct, setShipmentProduct] = useState('');
  const [dimension, setDimension] = useState('');
  const [dimensionError, setDimensionError] = useState('');
  const [shipmentAddress, setShipmentAddress] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [services, setServices] = useState({});

  // Fetch services from backend on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/services') // Ensure the URL is correct
      .then(response => {
        const fetchedServices = response.data.reduce((acc, service) => {
          if (!acc[service.category]) {
            acc[service.category] = [];
          }
          acc[service.category].push({ name: service.title, amount: service.amount });
          return acc;
        }, {});
        setServices(fetchedServices);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleMainServiceChange = (event) => {
    const selected = event.target.value;
    setSelectedMainService(selected);
    setSelectedInnerService('');
    setAmount(0); // Reset amount when main service changes
  };

  const handleInnerServiceChange = (event) => {
    const selected = event.target.value;
    const innerService = services[selectedMainService].find(service => service.name === selected);
    setSelectedInnerService(innerService.name);
    setAmount(innerService.amount);
  };

  const handleDimensionChange = (e) => {
    const value = e.target.value;
    setDimension(value);
    if (!validateDimension(value)) {
      setDimensionError('Dimension must be a positive number with optional decimal and unit (kg or lbs).');
    } else {
      setDimensionError('');
    }
  };

  const addProductToOrder = () => {
    const newProduct = {
      productName: shipmentProduct,
      dimension: dimension,
      quantity: productQuantity,
      mainService: selectedMainService,
      innerService: selectedInnerService,
      amount: amount,
    };

    setProducts([...products, newProduct]);

    // Clear the input fields after adding the product
    setShipmentProduct('');
    setDimension('');
    setProductQuantity(1);
    setSelectedMainService('');
    setSelectedInnerService('');
    setAmount(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dimensionError) {
      const orderDetails = {
        shipmentAddress: shipmentAddress,
        products: products, // Include the list of products
      };

      axios.post('http://localhost:8080/api/ordermanagement/create', orderDetails)
        .then(response => {
          setSuccessMessage('Order Submitted Successfully');
          setOpenModal(true);

          // Optionally, clear the form after submission
          setShipmentAddress('');
          setProducts([]); // Clear the products array
        })
        .catch(error => {
          console.error('Error storing order:', error);
        });
    }
  };

  const validateDimension = (value) => {
    // Dimension Validation
    const dimensionPattern = /^\d+(\.\d+)?\s?(kg|lbs|g)?$/i; // Validates numbers with optional decimal and unit (kg/lbs)
    return dimensionPattern.test(value);
  };

 
  // Function to check if all required fields are filled
  const isAddProductDisabled = () => {
    return (
      !shipmentProduct ||
      !dimension ||
      !selectedMainService ||
      !selectedInnerService ||
      productQuantity <= 0
    );
  };

  return (
    <div className="payment-container">
      <div className="hero-section1">
        <h1>Order Summary</h1>
        <p>Please review your order details before submission.</p>
      </div>
      <div className="payment-summary">
        <h2 style={{ color: 'black' }}>Order Summary</h2>
        <div className="summary-item">
          <h3>Main Service:</h3>
          <select value={selectedMainService} onChange={handleMainServiceChange}>
            <option value="">Select a main service</option>
            {Object.keys(services).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        {selectedMainService && (
          <div className="summary-item">
            <h3>Inner Service:</h3>
            <select value={selectedInnerService} onChange={handleInnerServiceChange}>
              <option value="">Select an inner service</option>
              {services[selectedMainService].map(service => (
                <option key={service.name} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
        )}
        <div className="summary-item">
          <h3>Total Amount:</h3>
          <p>₹{amount}</p>
        </div>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Shipment Product"
            variant="outlined"
            value={shipmentProduct}
            onChange={(e) => setShipmentProduct(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Dimension (Weight)"
            variant="outlined"
            value={dimension}
            onChange={handleDimensionChange}
            required
            error={!!dimensionError}
            helperText={dimensionError}
          />
        </div>
        <br></br>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Shipment Address"
            variant="outlined"
            value={shipmentAddress}
            onChange={(e) => setShipmentAddress(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Product Quantity"
            variant="outlined"
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(parseInt(e.target.value, 10))}
            required
          />
        </div>
        <br></br>
        <Button
          onClick={addProductToOrder}
          disabled={isAddProductDisabled()}
          variant="contained"
          color="primary"
        >
          Add Product
        </Button>
        <div className="summary-item">
          <h3>Products in Order:</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.quantity} x {product.productName} ({product.dimension}) - {product.mainService} - {product.innerService} - ₹{product.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit Order
      </Button>

      {/* Success Modal */}
        <Modal open={openModal} >
        <Box className="modal-box">
            <h2>{successMessage}</h2>
            <Product/>
            <br></br>
            <Button variant="contained" color="primary">
              <Link to='/Homepage' style={{ color: 'white', textDecoration: 'none' }}>
                Go to Home
              </Link>
          </Button>

        </Box>
        </Modal>
    </div>
  );
};

export default Ordersum;


