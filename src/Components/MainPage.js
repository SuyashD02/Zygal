import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false); // New state for enabling/disabling submit button
    const navigate = useNavigate();

    useEffect(() => {
        // Check if both email and password are valid
        setCanSubmit(!emailError && !passwordError && email !== '' && password !== '');
    }, [email, emailError, password, passwordError]);

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(!emailPattern.test(email));
    };

    const validatePassword = () => {
        setPasswordError(password.length < 6); // Adjusted to be 6 characters
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (canSubmit) {
            localStorage.setItem('email', email); 
            navigate('/info');
            alert('Logged in successfully!');
        }
    };

    return (
        <div className="input-section mb-8 mt-[20px]">
            <form onSubmit={submitForm} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); validateEmail(); }}
                        className={`p-3 border rounded w-full focus:outline-none focus:ring-2 ${emailError ? 'border-red-500' : (email ? 'border-green-500' : '')}`}
                        placeholder="Email"
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">Invalid email address</p>}
                </div>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); validatePassword(); }}
                        className={`p-3 border rounded w-full focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500' : (password ? 'border-green-500' : '')}`}
                        placeholder="Password"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-4 text-gray-600 focus:outline-none">
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {passwordError && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}
                </div>
                <button
                    type="submit"
                    className={`mt-4 p-3 ${canSubmit ? 'bg-blue-500' : 'bg-blue-300 cursor-not-allowed'} text-white w-full rounded-md`}
                    disabled={!canSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default MainPage;
