import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import changePasswordImage from '../../public/images/reset-password.png'
import Image from 'next/image';


const ResetPasswordComponent = () => {
    return ( 
        <main className="bg-[url('/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
            <div className='flex justify-center items-center'>
                <div className="bg-white rounded-2xl mt-16 shadow-lg p-8 md:px-14 pb-10 max-w-md w-full sm:ml-px">

                    {/* title */}
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">Change New Password</h2>
                    <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">Enter your registered email below</p>

                    {/* image */}
                    <div className='flex justify-center items-center mb-4'>
                        <Image src={changePasswordImage} width={200} height={200} alt='change password image'/>
                    </div>

                    {/* form */}
                    <form>
                        {/* input new password */}
                        <div className="mb-3">
                            <label htmlFor="new-password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">New Password</label>
                            <div className="relative">
                                <input type="password" id="new-password" className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your Password"/>
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <HttpsOutlinedIcon fontSize='small'/>
                                </span>
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                    <VisibilityOffOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                        </div>

                        {/* input confirm password */}
                        <div className="mb-4">
                            <label htmlFor="new-password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Confirm Password</label>
                            <div className="relative">
                                <input type="password" id="new-password" className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your Password"/>
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <HttpsOutlinedIcon fontSize='small'/>
                                </span>
                                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                    <VisibilityOffOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                        </div>
                        
                        {/* button submit */}
                        <button type="submit" className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default ResetPasswordComponent;