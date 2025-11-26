import React, { useState } from 'react'
// import Form from './Form'
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login")
    }

    const [inputValues, setInputValues] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    // const handleSubmitForm = (e) => {
    //     e.preventDefautl();
    // }

    return <form className=' w-[30%] center-element-absolute rounded-[10px] p-10 shadow-[0_0_5px_5px_rgba(0,0,0,0.1)]'>
        <p className='font-bold text-[25px] mx-auto mb-5 text-center'>Create Account</p>
        <div className='gap-3 flex-column'>
            <div className='gap-1 flex-column'>
                <label htmlFor='fullName'>Full Name : </label>
                <input
                    onChange={(e) => setInputValues({ ...inputValues, fullName: e.target.value })}
                    placeholder='Full Name' value={inputValues.fullName}
                    className='input-style' id='fullName' type='text' name='fullName' required={true} />
            </div>
            <div className='gap-1 flex-column'>
                <label htmlFor='email'>Email : </label>
                <input
                    onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
                    placeholder='Email' value={inputValues.email}
                    className='input-style' id='email' type='email' name='email' required={true} />
            </div>
            <div className='gap-1 flex-column'>
                <label htmlFor='password'>Password : </label>
                <input
                    onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
                    placeholder='password' value={inputValues.password}
                    className='input-style' id='password' type='password' name='password' required={true} />
            </div>
            <button
                // onSubmit={(e) => handleSubmitForm(e)}
                className='px-2 py-1 font-semibold text-white bg-blue-500 rounded-[8px]'
                type='submit'>Create Account</button>
        </div>
        <div className='gap-1 mt-3 flex-items'>
            <p className='text-[15px] text-gray-500'> Already have an account </p>
            <p
                onClick={() => {
                    handleClick()
                }}
                className='text-[15px] text-blue-500 underline cursor-pointer'>Login here</p>
        </div>
    </form>
}

export default Signup