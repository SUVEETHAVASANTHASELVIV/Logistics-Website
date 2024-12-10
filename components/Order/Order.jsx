import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Button,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Order.css'

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const statusStyles = {
  borderRadius: '8px',
  padding: '4px 12px',
  color: '#fff',
  display: 'inline-block',
};

const statusVariants = {
  Shipped: {
    ...statusStyles,
    backgroundColor: '#4caf50',
  },
  Confirmed: {
    ...statusStyles,
    backgroundColor: '#ff9800',
  },
  Waiting: {
    ...statusStyles,
    backgroundColor: '#ffeb3b',
    color: '#000',
  },
  Completed: {
    ...statusStyles,
    backgroundColor: '#2196f3',
  },
  Canceled: {
    ...statusStyles,
    backgroundColor: '#f44336',
  },
};

const initialOrders = [
  {
    id: '#001799',
    date: '04/08/2024',
    items: 3,
    total: '₹7,022.50',
    status: 'Shipped',
    shippingAddress: 'Majapahit St. 77E, New York, NY 10150, USA (212) 445-7622',
    billingAddress: 'xyz',
    shippingMethod: 'Express delivery (DHL Express)',
    paymentMethod: 'VISA xxxx 5642',
    trackingNumber: 'ID25725728RS',
    products: [
      { name: 'Blazer', qty: 1, price: '$2,500.00', total: '$2,500.00' },
      { name: 'Leather Coat', qty: 1, price: '$2,500.00', total: '$2,500.00' },
      { name: 'Hijab', qty: 1, price: '$2,500.00', total: '$2,500.00' },
    ],
  },
  {
    id: '#001798',
    date: '05/08/2024',
    items: 1,
    total: '₹1,200.00',
    status: 'Confirmed',
    shippingAddress: 'Majapahit St. 77E, New York, NY 10150, USA (212) 445-7622',
    billingAddress: 'xyz',
    shippingMethod: 'Express delivery (DHL Express)',
    paymentMethod: 'VISA xxxx 5642',
    trackingNumber: 'ID25725728RS',
    products: [
      { name: 'Blazer', qty: 1, price: '$1,200.00', total: '$1,200.00' },
    ],
  },
  {
    id: '#001797',
    date: '02/08/2024',
    items: 1,
    total: '₹554.00',
    status: 'Waiting',
    shippingAddress: 'Majapahit St. 77E, New York, NY 10150, USA (212) 445-7622',
    billingAddress: 'xyz',
    shippingMethod: 'Express delivery (DHL Express)',
    paymentMethod: 'VISA xxxx 5642',
    trackingNumber: 'ID25725728RS',
    products: [
      { name: 'Leather Coat', qty: 1, price: '$554.00', total: '$554.00' },
    ],
  },
  {
    id: '#001796',
    date: '06/08/2024',
    items: 4,
    total: '₹845.00',
    status: 'Canceled',
    shippingAddress: 'Majapahit St. 77E, New York, NY 10150, USA (212) 445-7622',
    billingAddress: 'xyz',
    shippingMethod: 'Express delivery (DHL Express)',
    paymentMethod: 'VISA xxxx 5642',
    trackingNumber: 'ID25725728RS',
    products: [
      { name: 'Hijab', qty: 4, price: '$211.25', total: '$845.00' },
    ],
  },
];

const Order = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleCancel = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id && order.status !== 'Shipped'
          ? { ...order, status: 'Canceled' }
          : order
      )
    );
  };

  const Row = ({ row }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TableRow>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>{row.items}</TableCell>
          <TableCell>{row.total}</TableCell>
          <TableCell>
            <span style={statusVariants[row.status]}>{row.status}</span>
          </TableCell>
          <TableCell>
            {row.status !== 'Canceled' && row.status !== 'Shipped' && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleCancel(row.id)}
              >
                Cancel
              </Button>
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Order Details
                </Typography>
                <Table size="small" aria-label="details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Shipping Address</TableCell>
                      <TableCell>Billing Address</TableCell>
                      <TableCell>Shipping Method</TableCell>
                      <TableCell>Payment Method</TableCell>
                      <TableCell>Tracking Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{row.shippingAddress}</TableCell>
                      <TableCell>{row.billingAddress}</TableCell>
                      <TableCell>{row.shippingMethod}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell>{row.trackingNumber}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Typography variant="h6" gutterBottom component="div">
                  Products
                </Typography>
                <Table size="small" aria-label="products">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.products.map((product) => (
                      <TableRow key={product.name}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.qty}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <div className='order11'>
        <Navbar/>
        <br />
        <div>
            <StyledContainer sx={{backgroundColor: 'white'}}>
                <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
                    Order History
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ color: 'black' }}>
                    Here you can manage your order
                </Typography>
                <StyledTextField
                    variant="outlined"
                    placeholder="Search for Order ID or Product"
                    fullWidth
                />
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell>Order ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell>Total amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                        <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </StyledContainer>
        </div>
        <br />
        <Footer/>
    </div>
  );
};

export default Order;