import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaApple, FaCoffee, FaDesktop, FaHeadphones, FaFilter, FaChair, FaCamera, FaBicycle, FaWallet } from 'react-icons/fa';
import { styled } from '@mui/system';
import Navbar from '../Navbar/ANavbar';
import Sidebar from '../Sidebar/Sidebar';
import './OrderManagement.css';

const TableContainerStyled = styled(TableContainer)({
  margin: 20,
  border: '1px solid #ddd',
  borderRadius: 4,
});

const TableHeadCellStyled = styled(TableCell)({
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
});

const TableBodyCellStyled = styled(TableCell)({
  verticalAlign: 'middle',
});

const ChipStyled = styled(Chip)({
  fontWeight: 'bold',
});

const IconButtonStyled = styled(IconButton)({
  padding: 5,
});

function createData(customer, orderId, photo, product, quantity, date, status) {
  return { customer, orderId, photo, product, quantity, date, status };
}

const initialOrders = [
  createData('Maical Roy', '#12485791', <FaApple />, 'UltraSmart Watch', 17, '24-01-2018', 'Paid'),
  createData('Sarah Johnson', '#12485792', <FaCoffee />, 'Eco-Friendly Water Bottle', 12, '25-01-2018', 'Pending'),
  createData('John Doe', '#12485793', <FaDesktop />, '4K Ultra HD Monitor', 15, '26-01-2018', 'Paid'),
  createData('Jane Smith', '#12485794', <FaHeadphones />, 'Wireless Bluetooth Headphones', 19, '27-01-2018', 'Failed'),
  createData('Chris Lee', '#12485795', <FaFilter />, 'Portable Air Purifier', 24, '28-01-2018', 'Pending'),
  createData('Anna Brown', '#12485796', <FaChair />, 'Ergonomic Office Chair', 10, '29-01-2018', 'Paid'),
  createData('Mike Davis', '#12485797', <FaCamera />, 'Smart Home Security Camera', 22, '30-01-2018', 'Pending'),
  createData('Emily Clark', '#12485798', <FaCamera />, 'Compact Digital Camera', 18, '31-01-2018', 'Paid'),
  createData('James Wilson', '#12485799', <FaBicycle />, 'Electric Bike', 14, '01-02-2018', 'Failed'),
  createData('Linda Martinez', '#12485800', <FaWallet />, 'Premium Leather Wallet', 20, '02-02-2018', 'Pending'),
];

const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
  };

  const handleEditClick = (order) => {
    setCurrentOrder(order);
    setEditDialogOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentOrder({ ...currentOrder, [name]: value });
  };

  const handleEditSave = () => {
    setOrders(orders.map(order => order.orderId === currentOrder.orderId ? currentOrder : order));
    setEditDialogOpen(false);
  };

  return (
    <div className='order-container'>
        <Sidebar/>
        <div className="order-content">
         <Navbar/>
          <div className="order-management">
            <h2>Logistics Company Order Management Sheet</h2>
            <p>This slide shows logistics sheet for managing client orders. It provides information about shipment name, order date, status, received goods, port departure, port arrival, etc.</p>
            <TableContainerStyled component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableHeadCellStyled>Customer</TableHeadCellStyled>
                    <TableHeadCellStyled>Order ID</TableHeadCellStyled>
                    <TableHeadCellStyled>Photo</TableHeadCellStyled>
                    <TableHeadCellStyled>Product</TableHeadCellStyled>
                    <TableHeadCellStyled>Quantity</TableHeadCellStyled>
                    <TableHeadCellStyled>Date</TableHeadCellStyled>
                    <TableHeadCellStyled>Status</TableHeadCellStyled>
                    <TableHeadCellStyled>Actions</TableHeadCellStyled>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.orderId}>
                      <TableBodyCellStyled>{order.customer}</TableBodyCellStyled>
                      <TableBodyCellStyled>{order.orderId}</TableBodyCellStyled>
                      <TableBodyCellStyled>{order.photo}</TableBodyCellStyled>
                      <TableBodyCellStyled>{order.product}</TableBodyCellStyled>
                      <TableBodyCellStyled>{order.quantity}</TableBodyCellStyled>
                      <TableBodyCellStyled>{order.date}</TableBodyCellStyled>
                      <TableBodyCellStyled>
                        <ChipStyled label={order.status} color={order.status === 'Paid' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'} />
                      </TableBodyCellStyled>
                      <TableBodyCellStyled>
                        <IconButtonStyled aria-label="edit" onClick={() => handleEditClick(order)}>
                          <EditIcon />
                        </IconButtonStyled>
                        <IconButtonStyled aria-label="delete" onClick={() => handleDelete(order.orderId)}>
                          <DeleteIcon />
                        </IconButtonStyled>
                      </TableBodyCellStyled>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainerStyled>
            <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
          </div>
        </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make changes to the order details below:
          </DialogContentText>
          <TextField
            margin="dense"
            name="customer"
            label="Customer"
            type="text"
            fullWidth
            value={currentOrder?.customer || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="orderId"
            label="Order ID"
            type="text"
            fullWidth
            value={currentOrder?.orderId || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="product"
            label="Product"
            type="text"
            fullWidth
            value={currentOrder?.product || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Quantity"
            type="number"
            fullWidth
            value={currentOrder?.quantity || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="date"
            label="Date"
            type="text"
            fullWidth
            value={currentOrder?.date || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            value={currentOrder?.status || ''}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderManagement;