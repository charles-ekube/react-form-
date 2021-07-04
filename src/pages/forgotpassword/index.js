import React from 'react';
import { Button } from '../../components';
import './style.css';



const ForgotPassword = () => {

    return (
        <>
            <main className='forgot-password-container'>
                <div className='forgot-password-header'>
                    <h2>
                        Forgot Password
                    </h2>
                </div>
                <form className='forgot-password-form'>
                    <div className='forgot-password-form-header'>
                        <p>Reset your Password</p>
                    </div>
                    <div className='form-group'>
                        <label>Email Address</label>
                        <input type='email'/>
                        <small>We will email you instructions resetting your password</small>
                    </div>
                    <div>
                        <Button 
                            title='reset my password'
                            text_color='#000'
                            bg_color='#FBB500'
                        />
                    </div>
                    <div className='forgot-password-quick-links'>
                        <ul>
                            <li>Create a new account</li>
                            <li>Return to Sign in</li>
                        </ul>
                    </div>
                </form>
            </main>
        </>
    )
}

export  {ForgotPassword};