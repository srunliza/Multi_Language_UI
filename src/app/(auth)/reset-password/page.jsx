'use client'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import changePasswordImage from '../../../../public/assets/icons/reset-password.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);



    // Initialize the router
    const router = useRouter();

    // Validate form
    const validateForm = () => {
        let errors = {};
        if (!newPassword) {
            errors.newPassword = 'Password is required.';
        } else if (newPassword.length < 6) {
            errors.newPassword = 'Password must be at least 6 characters.';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required.'
        } else if (confirmPassword.length < 6) {
            errors.confirmPassword = 'Confirm password must be at least 6 characters.'
        } else {
            errors.confirmPassword = 'Passwords do not match.'
        }

        // if (newPassword !== confirmPassword) {
        //     errors.confirmPassword = 'Passwords do not match.';
        // }

        setPasswordError(errors.newPassword || '');
        setConfirmPasswordError(errors.confirmPassword || '');
        setIsFormValid(Object.keys(errors).length === 0);
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
        validateForm();
    };

    // Handle confirm password change
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        validateForm();
    };

    // Function to handle button click
    const handleResetPassword = (e) => {
        e.preventDefault();
        validateForm();

        // if (isFormValid) {
        //     router.push('/login'); 
        // }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Function to toggle confirm password visibility
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleResetPasswordClick = () => {
        router.push('/login')
    }

    return (
        // background
        <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
            <div className='flex justify-center items-center'>
                {/* card */}
                <div className="bg-white rounded-2xl mt-12 shadow-lg p-8 md:px-14 pb-10 max-w-md w-full sm:ml-px">
                    {/* title and subtitle */}
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">Change New Password</h2>
                    <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">Enter your new password below</p>

                    {/* image */}
                    <div className='flex justify-center items-center mb-4'>
                        <Image src={changePasswordImage} width={200} height={200} alt='change password image'/>
                    </div>


                    {/* form */}
                    <form onSubmit={handleResetPassword}>

                        {/* input new password */}
                        <div className="mb-3">
                            <label htmlFor="new-password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">New Password</label>
                            <div className="relative text-gray-800">
                                <input 
                                    type={!passwordVisible ? 'text' : 'password'}
                                    id="new-password"
                                    value={newPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-10 py-2 border rounded-lg focus:outline-none bg-gray-50 focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" 
                                    placeholder="Enter Your Password"
                                />
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <HttpsOutlinedIcon fontSize='small'/>
                                </span>
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <VisibilityOffOutlinedIcon fontSize='small'/> : <VisibilityOutlined fontSize='small'/>}
                                </span>
                            </div>
                            {passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p>}
                        </div>


                        {/* input confirm password */}
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Confirm Password</label>
                            <div className="relative text-gray-800">
                                <input 
                                    type={!confirmPasswordVisible ? 'text' : 'password'}
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="w-full px-10 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                                    placeholder="Confirm Your Password"
                                />
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <HttpsOutlinedIcon fontSize='small'/>
                                </span>
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500" onClick={toggleConfirmPasswordVisibility}>
                                    {confirmPasswordVisible ? <VisibilityOffOutlinedIcon fontSize='small'/> : <VisibilityOutlined fontSize='small'/>}
                                </span>
                            </div>
                            {confirmPasswordError && <p className='text-red-500 text-sm mt-1'>{confirmPasswordError}</p>}
                        </div>
                        
                        {/* button submit */}
                        <button onClick={handleResetPasswordClick} type="submit" className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default ResetPasswordPage;
