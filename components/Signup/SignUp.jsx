// import React, { useState } from 'react';
// import './SignUp.css';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignUp = () => {
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",  
//         role: "",
//         adminId: "" 
//     });
//     const [message, setMessage] = useState("");
//     const [errors, setErrors] = useState({});
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const validateForm = () => {
//         let formIsValid = true;
//         let errors = {};

//         if (!data.name || data.name.length < 3) {
//             formIsValid = false;
//             errors["name"] = "Username must be at least 3 characters long.";
//         }

//         if (!data.email) {
//             formIsValid = false;
//             errors["email"] = "Email is required.";
//         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//             formIsValid = false;
//             errors["email"] = "Email is not valid.";
//         }

//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//         if (!data.password || !passwordRegex.test(data.password)) {
//             formIsValid = false;
//             errors["password"] = "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
//         }

//         if (data.password !== data.confirmPassword) {
//             formIsValid = false;
//             errors["confirmPassword"] = "Passwords do not match.";
//         }
        
//         if (!data.role) {
//             formIsValid = false;
//             errors["role"] = "Role is required.";
//         }

//         if (data.role === "admin") {
//             const adminIdRegex = /^\d{5}#$/;
//             if (!data.adminId || !adminIdRegex.test(data.adminId)) {
//                 formIsValid = false;
//                 errors["adminId"] = "Admin ID is invalid!";
//             }
//         }

//         setErrors(errors);
//         return formIsValid;
//     };

//     const handleSubmitChangeSignUp = async (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             try {
//                 const response = await axios.get('http://localhost:3001/users');
//                 const users = response.data;

//                 // Check if all data matches with an existing user
//                 const exactMatchUser = users.find(user => 
//                     user.name === data.name && 
//                     user.email === data.email && 
//                     user.password === data.password && 
//                     user.role === data.role
//                 );

//                 if (exactMatchUser) {
//                     setMessage("User already signed up");
//                     return;
//                 }

//                 // Check if the username, email, or password already exists or if username and password with different role exists
//                 const existingUser = users.find(user => 
//                     user.name === data.name || user.email === data.email || user.password === data.password || 
//                     (user.name === data.name && user.password === data.password && user.role !== data.role)
//                 );

//                 if (existingUser) {
//                     setMessage("User already exists.");
//                     return;
//                 }

//                 const highestId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
//                 const newUserId = highestId + 1;

//                 const newUser = {
//                     id: newUserId,
//                     name: data.name,
//                     email: data.email,
//                     password: data.password,
//                     role: data.role,
//                     adminId: data.role === "admin" ? data.adminId : undefined // Include adminId if role is admin
//                 };

//                 await axios.post('http://localhost:3001/users', newUser);
//                 setMessage("Successfully Signed Up");
//                 navigate("/");
//             } catch (error) {
//                 setMessage("Error Signing Up");
//                 console.error("There was an error!", error);
//             }
//         } else {
//             setMessage("");
//         }
//     };

//     return (
//         <div className="body">
//             <form className="signup-form" onSubmit={handleSubmitChangeSignUp}>
//                 <h1>Sign Up</h1>
//                 <div className="input_fields">
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         onChange={(e) => setData({ ...data, name: e.target.value })}
//                     />
//                     {errors.name && <p className="error">{errors.name}</p>}
//                 </div>
//                 <div className="input_fields">
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         onChange={(e) => setData({ ...data, email: e.target.value })}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>
//                 <div className="input_fields">
//                     <div className="password-field">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             onChange={(e) => setData({ ...data, password: e.target.value })}
//                         />
//                         <button
//                             type="button"
//                             className="toggle-password"
//                             onClick={() => setShowPassword(!showPassword)}
//                         >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </button>
//                     </div>
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>
//                 <div className="input_fields">
//                     <input
//                         type="text"
//                         placeholder="Confirm Password"
//                         onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
//                     />
//                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//                 </div>
//                 <div className="input_fields">
//                     <select 
//                         id="role" 
//                         value={data.role} 
//                         onChange={(e) => setData({ ...data, role: e.target.value })}
//                         className={data.role === "" ? "placeholder" : ""}
//                     >
//                         <option value="" disabled hidden>Role</option>
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                     {errors.role && <p className="error">{errors.role}</p>}
//                 </div>
//                 {data.role === "admin" && (
//                     <div className="input_fields">
//                         <input
//                             type="text"
//                             placeholder="Admin ID"
//                             onChange={(e) => setData({ ...data, adminId: e.target.value })}
//                         />
//                         {errors.adminId && <p className="error">{errors.adminId}</p>}
//                     </div>
//                 )}
//                 <button type="submit" className="but">Submit</button>
//                 {message && <p className="message">{message}</p>}
//                 <p style={{color:'black'}} className='login_link'>Existing User?<Link to="/">LogIn</Link></p>
//             </form>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from 'react';
import './SignUp.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",  
        role: "",
        adminId: "" 
    });
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!data.name || data.name.length < 3) {
            formIsValid = false;
            errors["name"] = "Username must be at least 3 characters long.";
        }

        if (!data.email) {
            formIsValid = false;
            errors["email"] = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            formIsValid = false;
            errors["email"] = "Email is not valid.";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!data.password || !passwordRegex.test(data.password)) {
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
        }

        if (data.password !== data.confirmPassword) {
            formIsValid = false;
            errors["confirmPassword"] = "Passwords do not match.";
        }
        
        if (!data.role) {
            formIsValid = false;
            errors["role"] = "Role is required.";
        }

        if (data.role === "admin") {
            const adminIdRegex = /^\d{5}#$/; // Admin ID format: 5 digits followed by #
            if (!data.adminId || !adminIdRegex.test(data.adminId)) {
                formIsValid = false;
                errors["adminId"] = "Admin ID is invalid! Please provide a 5-digit ID followed by '#'.";
            }
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmitChangeSignUp = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.get('http://localhost:3001/users');
                const users = response.data;

                // Check if all data matches with an existing user
                const exactMatchUser = users.find(user => 
                    user.name === data.name && 
                    user.email === data.email && 
                    user.password === data.password && 
                    user.role === data.role
                );

                if (exactMatchUser) {
                    setMessage("User already signed up");
                    return;
                }

                // Check if the username, email, or password already exists or if username and password with different role exists
                const existingUser = users.find(user => 
                    user.name === data.name || user.email === data.email || user.password === data.password || 
                    (user.name === data.name && user.password === data.password && user.role !== data.role)
                );

                if (existingUser) {
                    setMessage("User already exists.");
                    return;
                }

                const highestId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
                const newUserId = highestId + 1;

                const newUser = {
                    id: newUserId,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    role: data.role,
                    adminId: data.role === "admin" ? data.adminId : undefined // Include adminId if role is admin
                };

                await axios.post('http://localhost:3001/users', newUser);
                setMessage("Successfully Signed Up");
                navigate("/");
            } catch (error) {
                setMessage("Error Signing Up");
                console.error("There was an error!", error);
            }
        } else {
            setMessage("");
        }
    };

    return (
        <div className="body">
            <form className="signup-form" onSubmit={handleSubmitChangeSignUp}>
                <h1>Sign Up</h1>
                <div className="input_fields">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="input_fields">
                    <input
                        type="email"
                        placeholder="Email Address"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input_fields">
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </button>
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="input_fields">
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <div className="input_fields">
                    <select 
                        id="role" 
                        value={data.role} 
                        onChange={(e) => setData({ ...data, role: e.target.value })}
                        className={data.role === "" ? "placeholder" : ""}
                    >
                        <option value="" disabled hidden>Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role && <p className="error">{errors.role}</p>}
                </div>
                {data.role === "admin" && (
                    <div className="input_fields">
                        <input
                            type="text"
                            placeholder="Admin ID"
                            onChange={(e) => setData({ ...data, adminId: e.target.value })}
                        />
                        {errors.adminId && <p className="error">{errors.adminId}</p>}
                    </div>
                )}
                <button type="submit" className="but">Submit</button>
                {message && <p className="message">{message}</p>}
                <p style={{color:'black'}} className='login_link'>Existing User?<Link to="/">LogIn</Link></p>
            </form>
        </div>
    );
};

export default SignUp;

