import React from 'react';
import { Hide } from '../../assets/images';
import { Button } from '../../components';
import './style.css';



const ResetPassword = () => {

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
                        <p>Enter a new password to continue</p>
                    </div>
                    <div className='form-group'>
                        <label>Reset Token</label>
                        <input type='text'/>
                    </div>
                    <div className='form-group'>
                        <label>New Password</label>
                        <input type='password'/>
                        <img src={Hide} alt='hide_password'/>
                    </div>
                    <div className='form-group'>
                        <label>Retype Password</label>
                        <input type='password'/>
                        <img src={Hide} alt='hide_password'/>
                    </div>
                    <div>
                        <Button 
                            title='save'
                            text_color='#000'
                            bg_color='#FBB500'
                            mt='30px'
                            mb='10px'
                        />
                    </div>
                    
                </form>
            </main>
        </>
    )
}

export  {ResetPassword};