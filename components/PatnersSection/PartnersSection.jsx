import React from 'react';

const partners = [
  { name: 'PALLACE' },
  { name: 'CHIALIBLE' },
  { name: 'lECOID' },
  { name: 'LANCELITE' },
  { name: 'HIVEBILL' },
];

const PartnersSection = () => {
  const styles = {
    partnersSection: {
      textAlign: 'center',
      padding: '30px 0',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      
     
    },
    partnersTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '10px',
    },
    partnersDescription: {
      margin: '20px 0',
      fontSize: '1.1rem',
      color: '#666',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.5',
    },
    partnersContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: '100%',
    },
    partnersScroller: {
      display: 'flex',
      animation: 'scroll 15s linear infinite',
      color:'#000',
    },
    partnerName: {
      fontSize: '1rem',
      fontWeight: 'bold',
      margin: '0 30px',
      whiteSpace: 'nowrap',
    },
  };

  // Duplicate the partners array to create a seamless scrolling effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <div style={styles.partnersSection}>
      <h2 style={styles.partnersTitle}>Our Partners</h2>
      <p style={styles.partnersDescription}>
        We are proud to be associated with leading names in logistics...
      </p>
      <div style={styles.partnersContainer}>
        <div style={styles.partnersScroller} className="scroller">
          {scrollingPartners.map((partner, index) => (
            <span key={index} style={styles.partnerName}>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scroller {
            display: flex;
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PartnersSection;