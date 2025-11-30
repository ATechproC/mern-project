import React, { useState } from 'react'
import axios from "axios"
import { useApp } from '../providers/AppProvider';

const Signup = () => {

    const [state, setState] = useState("signup");

    const { backendURL, token, setToken } = useApp();

    const userData = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    }

    // if(state === "signup") userData.name = "";
    // else delete userData.name;

    const [inputValues, setInputValues] = useState(userData);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            if (state === "signup") {
                const data = await axios.post(backendURL + "/api/v1/auth/signup", inputValues);
                console.log(data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <form
        onSubmit={handleSubmitForm}
        className=' w-[30%] center-element-absolute rounded-[10px] p-10 shadow-[0_0_5px_5px_rgba(0,0,0,0.1)]'>
        <p className='font-bold text-[25px] mx-auto mb-5 text-center'>{state === "signup" ? "Create Account" : "Login"}</p>
        <div className='gap-3 flex-column'>
            {
                state === "signup" &&
                <div className='gap-1 flex-column'>
                    <label htmlFor='fullName'>Full Name : </label>
                    <input
                        onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                        placeholder='Full Name' value={inputValues.fullName}
                        className='input-style' id='fullName' type='text' name='fullName' required={true} />
                </div>
            }
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
            <div className='gap-1 flex-column'>
                <label htmlFor='passwordConfirm'>Password Confirmation : </label>
                <input
                    onChange={(e) => setInputValues({ ...inputValues, passwordConfirm: e.target.value })}
                    placeholder='password Confirmation' value={inputValues.passwordConfirm}
                    className='input-style' id='passwordConfirm' type='password' name='password' required={true} />
            </div>
            <button
                className='px-2 py-1 font-semibold text-white bg-blue-500 rounded-[8px]'
                type='submit'>{state === "signup" ? "Create Account" : "Login"}</button>
        </div>
        <div className='gap-1 mt-3 flex-items'>
            <p className='text-[15px] text-gray-500'> {state === "signup" ? "Already have an account" : "Do not you have an account "} </p>
            <p
                onClick={() => setState(prev => prev === "signup" ? "login" : "signup")}
                className='text-[15px] text-blue-500 underline cursor-pointer'> {state === "signup" ? " Login here" : "Signup here"}</p>
        </div>
    </form>
}

export default Signup