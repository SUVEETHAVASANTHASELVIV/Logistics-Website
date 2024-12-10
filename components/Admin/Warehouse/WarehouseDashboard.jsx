import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Grid, Paper, MenuItem, Select, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import '../Warehouse/Warehouse.css';
import ANavbar from '../Navbar/ANavbar';
import Sidebar from '../Sidebar/Sidebar';

// Sample data
const initialData = {
  percentageOutOfStock: 13.33,
  returnRate: 2.17,
  backOrderRate: 11.11,
  inventoryCarryingRate: 32.66,
  inventoryTurnoverRate: 0.96,
  inventoryToSalesRatio: 41.50,
  inventoryDaysOfSupply: [
    { name: 'Nov-21', days: 35 },
    { name: 'Dec-21', days: 23.8 },
    { name: 'Jan-22', days: 30 },
    { name: 'Feb-22', days: 25 },
    { name: 'Mar-22', days: 32.5 },
    { name: 'Apr-22', days: 36 },
  ],
  inventoryCarryingCost: [
    { name: 'Warehouse 1', storage: 525, handling: 114, admin: 52, damage: 0, loss: 0 },
    { name: 'Warehouse 2', storage: 65.66, handling: 108, admin: 195.6, damage: 85.5, loss: 0 },
  ],
  productStockDetails: [
    { product: 'Aniseeds syrup', reachDate: '01-08-2024', shipmentDate: '10-8-2024', unitsInHand: 160, unitsOnOrder: 171, warehouse: 'Warehouse 1' },
    { product: 'Cote de blaye', reachDate: '2022-12-05', shipmentDate: '2022-12-06', unitsInHand: 336, unitsOnOrder: 24, warehouse: 'Warehouse 2' },
  ],
  warehouses: [
    { name: 'Warehouse 1', maxItems: 3, items: ['Aniseeds syrup'] },
    { name: 'Warehouse 2', maxItems: 3, items: ['Cote de blaye'] },
    { name: 'Warehouse 3', maxItems: 3, items: [] },
  ],
};

const WarehouseDashboard = () => {
  const [data, setData] = useState(initialData);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editRowData, setEditRowData] = useState(null);
  const [filteredProductStockDetails, setFilteredProductStockDetails] = useState(data.productStockDetails);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = new Date(selectedDate).toISOString().split('T')[0]; // Format date to YYYY-MM-DD
      const filteredData = data.productStockDetails.filter((item) => item.reachDate === formattedDate);
      setFilteredProductStockDetails(filteredData);
    } else {
      setFilteredProductStockDetails(data.productStockDetails);
    }
  }, [selectedDate, data.productStockDetails]);

  const handleWarehouseChange = (event) => {
    setSelectedWarehouse(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCellChange = (event, field) => {
    setEditRowData({ ...editRowData, [field]: event.target.value });
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditRowData(data.productStockDetails[index]);
  };

  const handleSaveClick = () => {
    const updatedData = [...data.productStockDetails];
    updatedData[editIndex] = editRowData;
    setData((prevData) => ({ ...prevData, productStockDetails: updatedData }));
    setEditIndex(null);
    setEditRowData(null);
  };

  const getFreeSpaces = (warehouse) => {
    const warehouseData = data.warehouses.find((wh) => wh.name === warehouse);
    return warehouseData ? warehouseData.maxItems - warehouseData.items.length : 0;
  };

  return (
    <div className="warehouse-body">
      <Sidebar />
      <div className="warehouse-content">
        <ANavbar />
        <Box className="warehouse-dashboard-container">
          <Typography variant="h4" className="warehouse-dashboard-header">
            Warehouse Performance Dashboard for Inventory Management
          </Typography>
          <Grid container spacing={3} className="warehouse-dashboard-filters">
            <Grid item xs={6} md={3}>
              <TextField
                label="Date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Select
                value={selectedWarehouse}
                onChange={handleWarehouseChange}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>Select Warehouse</MenuItem>
                {data.warehouses.map((warehouse, index) => (
                  <MenuItem key={index} value={warehouse.name}>
                    {warehouse.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {selectedWarehouse && (
              <Grid item xs={12}>
                <Typography variant="h6">
                  {selectedWarehouse} - Free Spaces: {getFreeSpaces(selectedWarehouse)}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Percentage Of Out Of Stock</Typography>
                <Typography variant="h4">{data.percentageOutOfStock}%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Return Rate</Typography>
                <Typography variant="h4">{data.returnRate}%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Back Order Rate</Typography>
                <Typography variant="h4">{data.backOrderRate}%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Inventory Carrying Cost</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.inventoryCarryingCost}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="storage" fill="#8884d8" />
                    <Bar dataKey="handling" fill="#82ca9d" />
                    <Bar dataKey="admin" fill="#ffc658" />
                    <Bar dataKey="damage" fill="#d0ed57" />
                    <Bar dataKey="loss" fill="#8dd1e1" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Inventory Days of Supply</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data.inventoryDaysOfSupply}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="days" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="warehouse-dashboard-card">
                <Typography variant="h6">Product Stock Details</Typography>
                <Box className="warehouse-dashboard-table">
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell>Reach Date</TableCell>
                          <TableCell>Shipment Date</TableCell>
                          <TableCell>Units In Hand</TableCell>
                          <TableCell>Units On Order</TableCell>
                          <TableCell>Warehouse Detail</TableCell>
                          <TableCell>Edit</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredProductStockDetails.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.product}
                                  onChange={(e) => handleCellChange(e, 'product')}
                                  fullWidth
                                />
                              ) : (
                                item.product
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.reachDate}
                                  onChange={(e) => handleCellChange(e, 'reachDate')}
                                  fullWidth
                                />
                              ) : (
                                item.reachDate
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.shipmentDate}
                                  onChange={(e) => handleCellChange(e, 'shipmentDate')}
                                  fullWidth
                                />
                              ) : (
                                item.shipmentDate
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.unitsInHand}
                                  onChange={(e) => handleCellChange(e, 'unitsInHand')}
                                  fullWidth
                                />
                              ) : (
                                item.unitsInHand
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.unitsOnOrder}
                                  onChange={(e) => handleCellChange(e, 'unitsOnOrder')}
                                  fullWidth
                                />
                              ) : (
                                item.unitsOnOrder
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <TextField
                                  value={editRowData.warehouse}
                                  onChange={(e) => handleCellChange(e, 'warehouse')}
                                  fullWidth
                                />
                              ) : (
                                item.warehouse
                              )}
                            </TableCell>
                            <TableCell>
                              {editIndex === index ? (
                                <Button onClick={handleSaveClick}>Save</Button>
                              ) : (
                                <IconButton onClick={() => handleEditClick(index)}>
                                  <Edit />
                                </IconButton>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default WarehouseDashboard;