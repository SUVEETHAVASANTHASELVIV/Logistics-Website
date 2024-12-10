// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import Navbar from '../Navbar/ANavbar';
// import Sidebar from '../Sidebar/Sidebar';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [sales, setSales] = useState(0);
//   const [purchases, setPurchases] = useState(0);
//   const [salesReturn, setSalesReturn] = useState(0);
//   const [purchasesReturn, setPurchasesReturn] = useState(0);

//   useEffect(() => {
//     const animateCount = (setter, target, duration) => {
//       let start = 0;
//       const increment = target / (duration / 10);
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//           clearInterval(timer);
//           setter(target);
//         } else {
//           setter(Math.ceil(start));
//         }
//       }, 10);
//     };

//     animateCount(setSales, 5312, 2000);
//     animateCount(setPurchases, 1304, 2000);
//     animateCount(setSalesReturn, 314, 2000);
//     animateCount(setPurchasesReturn, 50, 2000);
//   }, []);

//   const doughnutData = {
//     labels: ['Weekly', 'Monthly', 'Yearly'],
//     datasets: [
//       {
//         data: [30, 50, 20],
//         backgroundColor: ['#3f51b5', '#2196f3', '#f44336'],
//         hoverBackgroundColor: ['#3f51b5', '#2196f3', '#f44336'],
//       },
//     ],
//   };

//   const lineData = {
//     labels: ['1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k'],
//     datasets: [
//       {
//         label: 'Payment Sent & Received (Last 5 Days)',
//         data: [60, 50, 40, 60, 70, 50, 30, 40, 60, 50, 30, 40],
//         fill: false,
//         borderColor: '#3f51b5',
//         tension: 0.1,
//       },
//     ],
//   };

//   const barData = {
//     labels: ['Amazon', 'Flipkart', 'Alibaba', 'G2pay', 'GoBuy'],
//     datasets: [
//       {
//         label: 'In',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//       {
//         label: 'Low',
//         data: [2, 3, 20, 5, 1],
//         backgroundColor: 'rgba(153, 102, 255, 0.6)',
//       },
//       {
//         label: 'Out',
//         data: [3, 10, 13, 15, 22],
//         backgroundColor: 'rgba(255, 159, 64, 0.6)',
//       },
//     ],
//   };

//   const topCitiesData = [
//     { city: 'Miami', count: 500 },
//     { city: 'New York', count: 400 },
//     { city: 'Washington', count: 300 },
//     { city: 'California', count: 200 },
//     { city: 'Chicago', count: 100 },
//   ];

//   const topCitiesChartData = {
//     labels: topCitiesData.map(city => city.city),
//     datasets: [
//       {
//         label: 'Orders',
//         data: topCitiesData.map(city => city.count),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const topCitiesChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             return `${context.label}: ${context.raw} orders`;
//           },
//         },
//       },
//     },
//     animation: {
//       duration: 1000,
//       easing: 'easeInOutBounce',
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         ticks: {
//           color: '#fff',
//         },
//         grid: {
//           color: '#444',
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: '#fff',
//         },
//         grid: {
//           color: '#444',
//         },
//       },
//     },
//     elements: {
//       bar: {
//         borderWidth: 2,
//         borderRadius: 5,
//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//         hoverBorderColor: 'rgba(75, 192, 192, 1)',
//       },
//     },
//     hover: {
//       mode: 'index',
//       intersect: false,
//     },
//   };

//   const orders = [
//     { id: 1234, date: '05-12-2021', name: 'Donec', status: 'Shipping', price: '₹954' },
//     { id: 3215, date: '05-13-2021', name: 'Consectetur', status: 'Shipping', price: '₹512' },
//     { id: 4521, date: '05-14-2021', name: 'Vestibulum', status: 'Shipping', price: '₹745' },
//     { id: 1452, date: '05-15-2021', name: 'Donec', status: 'Shipping', price: '₹875' },
//     { id: 7458, date: '05-15-2021', name: 'Nam ut', status: 'Shipping', price: '₹658' },
//     { id: 7451, date: '05-17-2021', name: 'Praesent', status: 'Shipping', price: '₹418' },
//     { id: 4125, date: '05-18-2021', name: 'Sed tempor', status: 'Shipping', price: '₹421' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Navbar />
//         <div className="dashboard">
//           <div className="card">
//             <div className="card-icon">💼</div>
//             <div className="card-info">
//               <div className="card-title">Sales</div>
//               <div className="card-value">${sales.toLocaleString()}.00</div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-icon">🛒</div>
//             <div className="card-info">
//               <div className="card-title">Purchases</div>
//               <div className="card-value">${purchases.toLocaleString()}.00</div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-icon">🔙</div>
//             <div className="card-info">
//               <div className="card-title">Sales Return</div>
//               <div className="card-value">${salesReturn.toLocaleString()}.00</div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-icon">🔄</div>
//             <div className="card-info">
//               <div className="card-title">Purchases Return</div>
//               <div className="card-value">${purchasesReturn.toLocaleString()}.00</div>
//             </div>
//           </div>
//           <div className="charts">
//             <div className="chart-container">
//               <h2>Sales Target</h2>
//               <Doughnut data={doughnutData} />
//             </div>
//             <div className="chart-container">
//               <h2>Payment Sent & Received (Last 5 Days)</h2>
//               <Line data={lineData} />
//             </div>
//             <div className="chart-container">
//               <h2>Top Cities</h2>
//               <Bar data={topCitiesChartData} options={topCitiesChartOptions} />
//             </div>
//           </div>
//           <div className="extra-content">
//             <div className="inventory-stock">
//               <h2>Inventory Stock</h2>
//               <Bar data={barData} />
//             </div>
//             <div className="orders-shipping-today">
//               <h2>Orders Shipping Today</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Date</th>
//                     <th>Name</th>
//                     <th>Status</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((order, index) => (
//                     <tr key={index}>
//                       <td>{order.id}</td>
//                       <td>{order.date}</td>
//                       <td>{order.name}</td>
//                       <td className="status">{order.status}</td>
//                       <td>{order.price}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="statistics">
//               <h2>Statistics</h2>
//               <div className="stats-cards">
//                 <div className="stats-card">
//                   <div className="stats-number">531</div>
//                   <div className="stats-label">Users Today</div>
//                 </div>
//                 <div className="stats-card">
//                   <div className="stats-number">1350</div>
//                   <div className="stats-label">Users This Month</div>
//                 </div>
//                 <div className="stats-card">
//                   <div className="stats-number">314</div>
//                   <div className="stats-label">Sales</div>
//                 </div>
//                 <div className="stats-card">
//                   <div className="stats-number">50</div>
//                   <div className="stats-label">Returns</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/ANavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [sales, setSales] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [salesReturn, setSalesReturn] = useState(0);
  const [purchasesReturn, setPurchasesReturn] = useState(0);

  useEffect(() => {
    const animateCount = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setter(target);
        } else {
          setter(Math.ceil(start));
        }
      }, 10);
    };

    animateCount(setSales, 5312, 2000);
    animateCount(setPurchases, 1304, 2000);
    animateCount(setSalesReturn, 314, 2000);
    animateCount(setPurchasesReturn, 50, 2000);
  }, []);

  const doughnutData = {
    labels: ['Weekly', 'Monthly', 'Yearly'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#3f51b5', '#2196f3', '#f44336'],
        hoverBackgroundColor: ['#3f51b5', '#2196f3', '#f44336'],
      },
    ],
  };

  const lineData = {
    labels: ['1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k'],
    datasets: [
      {
        label: 'Payment Sent & Received (Last 5 Days)',
        data: [60, 50, 40, 60, 70, 50, 30, 40, 60, 50, 30, 40],
        fill: false,
        borderColor: '#3f51b5',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Amazon', 'Flipkart', 'Alibaba', 'G2pay', 'GoBuy'],
    datasets: [
      {
        label: 'In',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Low',
        data: [2, 3, 20, 5, 1],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Out',
        data: [3, 10, 13, 15, 22],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const topCitiesData = [
    { city: 'Mumbai', count: 500 },
    { city: 'Delhi', count: 400 },
    { city: 'Bengaluru', count: 300 },
    { city: 'Chennai', count: 200 },
    { city: 'Kolkata', count: 100 },
  ];

  const topCitiesChartData = {
    labels: topCitiesData.map(city => city.city),
    datasets: [
      {
        label: 'Orders',
        data: topCitiesData.map(city => city.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const topCitiesChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw} orders`;
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutBounce',
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#444',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#444',
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
  };

  const orders = [
    { id: 1234, date: '08-12-2024', name: 'Yal', status: 'Shipping', price: '₹954' },
    { id: 3215, date: '08-13-2024', name: 'Suvee', status: 'Shipping', price: '₹512' },
    { id: 4521, date: '08-11-2024', name: 'Sam', status: 'Shipping', price: '₹745' },
    { id: 1452, date: '08-10-2024', name: 'Priya', status: 'Shipping', price: '₹875' },
    { id: 7458, date: '08-09-2024', name: 'Oveya', status: 'Shipping', price: '₹658' },
    { id: 7451, date: '08-08-2024', name: 'Sri', status: 'Shipping', price: '₹418' },
    { id: 4125, date: '08-03-2024', name: 'Vika', status: 'Shipping', price: '₹421' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard">
          <div className="card">
            <div className="card-icon">💼</div>
            <div className="card-info">
              <div className="card-title">Sales</div>
              <div className="card-value">₹{sales.toLocaleString()}.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🛒</div>
            <div className="card-info">
              <div className="card-title">Purchases</div>
              <div className="card-value">₹{purchases.toLocaleString()}.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🔙</div>
            <div className="card-info">
              <div className="card-title">Sales Return</div>
              <div className="card-value">₹{salesReturn.toLocaleString()}.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🔄</div>
            <div className="card-info">
              <div className="card-title">Purchases Return</div>
              <div className="card-value">₹{purchasesReturn.toLocaleString()}.00</div>
            </div>
          </div>
          <div className="charts">
            <div className="chart-container">
              <h2>Sales Target</h2>
              <Doughnut data={doughnutData} />
            </div>
            <div className="chart-container">
              <h2>Payment Sent & Received (Last 5 Days)</h2>
              <Line data={lineData} />
            </div>
            <div className="chart-container">
              <h2>Top Cities</h2>
              <Bar data={topCitiesChartData} options={topCitiesChartOptions} />
            </div>
          </div>
          <div className="extra-content">
            <div className="inventory-stock">
              <h2>Inventory Stock</h2>
              <Bar data={barData} />
            </div>
            <div className="orders-shipping-today">
              <h2>Orders Shipping Today</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.name}</td>
                      <td className="status">{order.status}</td>
                      <td>{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="statistics">
              <h2>Statistics</h2>
              <div className="stats-cards">
                <div className="stats-card">
                  <div className="stats-number">531</div>
                  <div className="stats-label">Users Today</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">1350</div>
                  <div className="stats-label">Users This Month</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">314</div>
                  <div className="stats-label">Sales</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">50</div>
                  <div className="stats-label">Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
