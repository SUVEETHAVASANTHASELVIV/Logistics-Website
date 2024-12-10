import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ANavbar from '../Navbar/ANavbar';
import { FaEnvelope } from 'react-icons/fa'; // Import email icon

const Quote = () => {
    const [quotations, setQuotations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch quotation details from backend
        fetch('http://localhost:8080/quotations')
            .then(response => response.json())
            .then(data => setQuotations(data))
            .catch(error => console.error('Error fetching quotations:', error));
    }, []);

    const handleProcessQuotation = async (quotation) => {
        try {
            const response = await fetch(`http://localhost:8080/quotations/${quotation.id}/process`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ processed: true })
            });

            if (response.ok) {
                // Update local state
                setQuotations(quotations.map(q =>
                    q.id === quotation.id ? { ...q, processed: true } : q
                ));
            } else {
                alert('Failed to process the quotation');
            }
        } catch (error) {
            console.error('Error processing quotation:', error);
        }
    };

    const handleNavigateHome = () => {
        navigate('/Dashboard');
    };

    return (
        <div>
            <ANavbar />
            <div className="quotation-list">
                <button className="close-button" onClick={handleNavigateHome}>X</button>
                <h1>Quotation List</h1>
                <style>{`
                    .quotation-list {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        color: black;
                        position: relative;
                    }

                    .close-button {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background-color: #2d3748;
                        color: white;
                        border: none;
                        padding: 5px 10px;
                        cursor: pointer;
                        font-size: 16px;
                    }

                    .close-button:hover {
                        background-color: darkred;
                    }

                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    table, th, td {
                        border: 1px solid #ddd;
                    }

                    th, td {
                        padding: 8px;
                        text-align: left;
                    }

                    th {
                        background-color: #f2f2f2;
                    }

                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }

                    button {
                        background-color: #4CAF50;
                        border: none;
                        color: white;
                        padding: 10px 20px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #45a049;
                    }

                    .processed {
                        color: green;
                        font-weight: bold;
                    }

                    .email-icon {
                        color: #007BFF;
                        cursor: pointer;
                        font-size: 20px;
                    }

                    .email-icon:hover {
                        color: #0056b3;
                    }
                `}</style>

                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Service Requested</th>
                            <th>Details</th>
                            <th>Processed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotations.map((quotation) => (
                            <tr key={quotation.id}>
                                <td>{quotation.customerName}</td>
                                <td>
                                    <a href={`mailto:${quotation.email}`}>
                                        <FaEnvelope className="email-icon" />
                                    </a>
                                    {quotation.email}
                                </td>
                                <td>{quotation.serviceRequested}</td>
                                <td>{quotation.details}</td>
                                <td className={quotation.processed ? 'processed' : ''}>
                                    {quotation.processed ? 'Processed' : 'Pending'}
                                </td>
                                <td>
                                    {!quotation.processed && (
                                        <button onClick={() => handleProcessQuotation(quotation)}>
                                            Mark as Processed
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Quote;

