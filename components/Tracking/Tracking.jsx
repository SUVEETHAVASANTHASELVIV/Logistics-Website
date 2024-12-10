import React from 'react';

const orderData = {
  orderPlaced: '5 Aug',
  total: '85.99 ₹',
  shipTo: 'Sam',
  orderNumber: '#10080',
  status: 'Shipped',
  estimatedDelivery: '17 Aug',
  trackingSteps: [
    { step: 'Order Placed', date: '5 Aug', status: 'completed' },
    { step: 'Dispatched', date: '6 Aug', status: 'completed' },
    { step: 'Delivered', date: '17 Aug - 18 Aug', status: 'pending' }
  ],
  shippingInfo: {
    name: 'Sam',
    address: '1234 ,Coimbatore',
    courier: 'Indian',
    trackingLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.96305761531658!3d-37.81410797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577caaa44de3ac4!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1634236883424!5m2!1sen!2sau'
  },
  orderDetails: [
    { name: 'Product 1', quantity: 1, price: '25.00 ₹' },
    { name: 'Product 2', quantity: 2, price: '30.00 ₹' },
    { name: 'Product 3', quantity: 1, price: '30.99 ₹' }
  ]
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'black'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  orderSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '20px'
  },
  summaryItem: {
    textAlign: 'center'
  },
  orderStatus: {
    marginBottom: '20px'
  },
  orderStatusHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusSpan: {
    marginLeft: '10px',
    color: 'black'
  },
  trackingSteps: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '20px',
    padding: '0 20px'
  },
  trackingStep: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
    width: '33%'
  },
  stepIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  completedIcon: {
    backgroundColor: '#28a745'
  },
  pendingIcon: {
    backgroundColor: '#dc3545'
  },
  horizontalBar: {
    position: 'absolute',
    top: '15px',
    left: '0',
    height: '4px',
    width: '100%',
    backgroundColor: '#ddd',
    zIndex: '1'
  },
  progressBar: {
    height: '4px',
    backgroundColor: '#28a745',
    width: '66%'
  },
  shippingInfoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '20px'
  },
  shippingInfo: {
    flex: '1'
  },
  orderDetails: {
    flex: '1',
    marginLeft: '20px'
  },
  shippingInfoHeader: {
    marginTop: '0'
  },
  orderDetailsHeader: {
    marginTop: '0'
  }
};

const Tracking = () => {
  const progressPercentage = (orderData.trackingSteps.filter(step => step.status === 'completed').length / orderData.trackingSteps.length) * 100;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Order Tracking Page</h2>
      <div style={styles.orderSummary}>
        <div style={styles.summaryItem}>
          <strong>Order Placed</strong>
          <p>{orderData.orderPlaced}</p>
        </div>
        <div style={styles.summaryItem}>
          <strong>Total</strong>
          <p>{orderData.total}</p>
        </div>
        <div style={styles.summaryItem}>
          <strong>Ship To</strong>
          <p>{orderData.shipTo}</p>
        </div>
        <div style={styles.summaryItem}>
          <strong>Order</strong>
          <p>{orderData.orderNumber}</p>
        </div>
      </div>
      <div style={styles.orderStatus}>
        <h3 style={styles.orderStatusHeader}>
          Order Status:
          <span style={styles.statusSpan} className={orderData.status.toLowerCase()}>{orderData.status}</span>
        </h3>
        <p>Estimated Delivery Date: {orderData.estimatedDelivery}</p>
        <div style={styles.trackingSteps}>
          <div style={styles.horizontalBar}>
            <div style={{...styles.progressBar, width: `${progressPercentage}%`}}></div>
          </div>
          {orderData.trackingSteps.map((item, index) => (
            <div key={index} style={styles.trackingStep}>
              <div style={{...styles.stepIcon, ...(item.status === 'completed' ? styles.completedIcon : styles.pendingIcon)}}>
                ✓
              </div>
              <div style={styles.stepInfo}>
                <h4>{item.step}</h4>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.shippingInfoContainer}>
        <div style={styles.shippingInfo}>
          <h3 style={styles.shippingInfoHeader}>Shipping Information</h3>
          <p><strong>Name:</strong> {orderData.shippingInfo.name}</p>
          <p><strong>Address:</strong> {orderData.shippingInfo.address}</p>
          <p><strong>Courier:</strong> {orderData.shippingInfo.courier}</p>
          <p><strong>Tracking Link:</strong> <a href={orderData.shippingInfo.trackingLink} target="_blank" rel="noopener noreferrer">Track your package</a></p>
        </div>
        <div style={styles.orderDetails}>
          <h3 style={styles.orderDetailsHeader}>Order Details</h3>
          <ul>
            {orderData.orderDetails.map((item, index) => (
              <li key={index}>
                <p><strong>Product:</strong> {item.name}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
