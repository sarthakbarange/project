// src/app/auth/signup/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './signup.module.css';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        otp: '',
        agreedToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showOtpField, setShowOtpField] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setError('');
    };

    const handleGetOtp = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            setError('Please enter a valid 10-digit mobile number');
            return;
        }
        // Show OTP field
        setShowOtpField(true);
        // In a real app, you would send OTP to the mobile number here
        console.log('OTP sent to:', formData.mobile);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!formData.otp || formData.otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP.');
            return;
        }
        if (!formData.agreedToTerms) {
            setError('You must agree to the Terms of Service and Privacy Policy.');
            return;
        }

        setIsLoading(true);
        console.log('Attempting to create account:', formData);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Account Created Successfully!');
            // Redirect to login or dashboard
        }, 2000);
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupCard}>
                <h2 className={styles.cardHeader}>Create Account</h2>

                <form onSubmit={showOtpField ? handleSubmit : handleGetOtp} className={styles.signupForm}>
                    {error && <div className={styles.errorMessage}>{error}</div>}

                    {/* Full Name Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className={styles.inputField}
                        />
                    </div>

                    {/* Email Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            required
                            className={styles.inputField}
                        />
                    </div>

                    {/* Mobile Number Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="mobile">Mobile Number (10 digits) *</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="1234567890"
                            pattern="\d{10}"
                            required
                            className={styles.inputField}
                            disabled={showOtpField}
                        />
                    </div>

                    {showOtpField && (
                        <div className={styles.inputGroup}>
                            <label htmlFor="otp">Enter OTP (6 digits) *</label>
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                placeholder="123456"
                                pattern="\d{6}"
                                required
                                className={styles.inputField}
                            />
                        </div>
                    )}

                    {/* Password Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password (min 8 characters) *</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Minimum 8 characters"
                                minLength={8}
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

                    {/* Confirm Password Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm Password *</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter password"
                                required
                                className={styles.inputField}
                            />
                            <span 
                                className={styles.passwordToggle} 
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>
                    </div>

                    {/* Terms and Policy Checkbox */}
                    <div className={styles.termsAgreement}>
                        <input
                            type="checkbox"
                            id="agreedToTerms"
                            name="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="agreedToTerms">
                            I agree to the <a href="/terms" className={styles.link}>Terms of Service</a> and <a href="/privacy" className={styles.link}>Privacy Policy</a> *
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className={styles.signupButton} 
                        disabled={isLoading}
                    >
                        {isLoading 
                            ? 'Processing...' 
                            : showOtpField 
                                ? 'Create Account' 
                                : 'Get OTP'}
                    </button>
                </form>

                {/* Sign In Link */}
                <p className={styles.loginText}>
                    Already have an account?{' '}
                    <Link href="/auth/login" className={styles.loginLink}>
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;