import React from 'react'
import {
    useRouteError,
    NavLink,
    useNavigate,

} from 'react-router-dom'

const ErrorComp = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const backFun = () => {
        navigate(-1);
    } 
    if (error.status === 404) {
        return (
            <div className='bg-gray-300 min-h-screen flex items-center'>
                <div className="container min-h-96 bg-white flex justify-center item-center">
                    <div className='p-4 '>
                        <h1 className='text-9xl text-center text-red-600' >404!</h1>
                        <h2 className='text-center'>PAGE NOT FOUND</h2>
                        <div className='flex justify-between items-center mt-3'>
                            <button > <NavLink to="/"><span className='text-rose-700 underline underline-offset-8'>Back to Home</span></NavLink></button> 
                            <button className=' text-teal-500 underline underline-offset-8' onClick={backFun}>Back to previous</button>
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }
    if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
    }
    if (error.status === 503) {
        return <div>Looks like our API is down</div>;
    }
}

export default ErrorComp