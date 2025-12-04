"use client";
import React, { useState } from 'react';
import styles from './login.module.css';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { emailOrPhone, password, rememberMe });
        
        // Dummy login - redirect to user/mytiffin page
        window.location.href = '/user/mytiffin';
    };

    return (
        <div className={styles.loginContainer}>
            {/* The background uses the colorful gradient from the image */}
            <div className={styles.loginCard}>
                
                <h2 className={styles.cardHeader}>Welcome Back!</h2>
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    {/* Email/Phone Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="emailOrPhone">Email / Phone</label>
                        <input
                            type="text"
                            id="emailOrPhone"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Enter your email or phone number"
                            required
                            className={styles.inputField}
                        />
                    </div>

                    {/* Password Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className={styles.inputField}
                            />
                            <span 
                                className={styles.passwordToggle} 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className={styles.formActions}>
                        <div className={styles.rememberMe}>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="/auth/forgot-password" className={styles.forgotPassword}>
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button - uses the button style from the image */}
                    <button type="submit" className={styles.loginButton}>
                        Login
                    </button>
                </form>

                {/* Don't have an account link */}
                <p className={styles.signupText}>
                    Don't have an account?{' '}
                    <a href="/auth/signup" className={styles.signupLink}>
                        Sign Up
                    </a>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;