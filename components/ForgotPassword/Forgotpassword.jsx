import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../ForgotPassword/Forgotpassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(newPassword)) {
            errors.password = 'Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character';
            valid = false;
        }

        if (newPassword !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.get('http://localhost:3001/users');
                const users = response.data;

                const user = users.find(user => user.email === email);
                if (user) {
                    user.password = newPassword;

                    await axios.put(`http://localhost:3001/users/${user.id}`, user);
                    setMessage('Password updated successfully.');

                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                } else {
                    setMessage('Email not found.');
                }
            } catch (error) {
                setMessage('Error updating password.');
                console.error('There was an error!', error);
            }
        } else {
            setMessage('');
        }
    };

    return (
        <div className="forgot-password-container">
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <h2>Reset Password</h2>
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    type={showNewPassword ? "text" : "password"}
                    label="New Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    type="text"
                    label="Confirm New Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                />
                <button type="submit" className="reset-button">Reset Password</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;

