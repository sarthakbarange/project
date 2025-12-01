"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './forgot-password.module.css';

const ForgotPasswordPage: React.FC = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Basic validation
        if (!emailOrPhone.trim()) {
            setError('Please enter your email or phone number');
            setIsLoading(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
            console.log('Password reset link sent to:', emailOrPhone);
        }, 2000);
    };

    if (success) {
        return (
            <div className={styles.forgotPasswordContainer}>
                <div className={styles.forgotPasswordCard}>
                    <div className={styles.successIcon}>✓</div>
                    <h2 className={styles.cardHeader}>Reset Link Sent!</h2>
                    <p className={styles.successMessage}>
                        We've sent a password reset link to your email or phone number. 
                        Please check your inbox and follow the instructions.
                    </p>
                    <div className={styles.backToLogin}>
                        <Link href="/auth/login" className={styles.backLink}>
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.forgotPasswordContainer}>
            <div className={styles.forgotPasswordCard}>
                <h2 className={styles.cardHeader}>Forgot Password?</h2>
                <p className={styles.cardDescription}>
                    Enter your email address or phone number and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
                    {error && <div className={styles.errorMessage}>{error}</div>}

                    {/* Email/Phone Field */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="emailOrPhone">Email / Phone Number</label>
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

                    {/* Send Reset Link Button */}
                    <button 
                        type="submit" 
                        className={styles.sendButton} 
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                {/* Back to Login Link */}
                <div className={styles.backToLogin}>
                    <span className={styles.backText}>Remember your password? </span>
                    <Link href="/auth/login" className={styles.backLink}>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
