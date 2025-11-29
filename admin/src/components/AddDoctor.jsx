import React, { useState } from 'react'
import { assets } from "../assets/assets_admin/assets"
import useAdmin from "../providers/AdminProvider"
import axios from "axios"

const AddDoctor = () => {

    const { backendURL } = useAdmin();

    const [inputValues, setInputValues] = useState({
        name: "",
        password: "",
        passwordConfirm: "",
        email: "",
        fees: "",
        experience: "",
        specialty: "",
        address: "",
        about: "",
        education: ""
    })

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(backendURL + "/admin/add-doctor", inputValues, {
                headers : {

                }
            })
        }catch(err) {
            console.log(err);
        }
    }

    return <form onSubmit={onSubmitHandler} className='w-[85%] absolute right-0 p-4'>
        <p className='text-lg font-bold'>Add Doctor</p>
        <div className='p-5 w-[80%] mx-auto'>
            <div className='gap-3 mb-3 flex-items'>
                <div className='max-w-[100px] max-h-[100px] rounded-full cursor-pointer'>
                    <img src={assets.upload_area} draggable={false} />
                </div>
                <p className='font-medium text-gray-400'>Upload doctor picture</p>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label htmlFor='name' className='block'>Doctor name</label>
                    <input value={inputValues.name} onChange={(e) => setInputValues(prev => ({ ...prev, name: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='name' type='text' placeholder='Name' required={true} />
                </div>
                <div>
                    <label htmlFor='email' className='block'>Doctor Email</label>
                    <input value={inputValues.email} onChange={(e) => setInputValues(prev => ({ ...prev, email: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='email' type='email' placeholder='Doctor Email' required={true} />
                </div>
                <div>
                    <label htmlFor='passwordConfirm' className='block'>Doctor Password Confirmation </label>
                    <input value={inputValues.passwordConfirm} onChange={(e) => setInputValues(prev => ({ ...prev, passwordConfirm: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='passwordConfirm' type='password' placeholder='Password Confirmation' required={true} />
                </div>
                <div>
                    <label htmlFor='password' className='block'>Doctor Password</label>
                    <input value={inputValues.password} onChange={(e) => setInputValues(prev => ({ ...prev, password: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='password' type='password' placeholder='Password' required={true} />
                </div>
                <div>
                    <label htmlFor='experience' className='block'>Experience</label>
                    <select onChange={(e) => setInputValues(prev => ({ ...prev, experience: e.target.value }))} id='experience' className='w-1/2 px-2 py-1 border border-gray-500 rounded-[10px]'>
                        <option value="1 Year" selected>1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                        <option value="4 Year">4 Year</option>
                        <option value="5 Year">5 Year</option>
                        <option value="6 Year">6 Year</option>
                        <option value="7 Year">7 Year</option>
                        <option value="8 Year">8 Year</option>
                        <option value="9 Year">9 Year</option>
                        <option value="more">more</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='fees' className='block'>Fees</label>
                    <input value={inputValues.fees} onChange={(e) => setInputValues(prev => ({ ...prev, fees: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='fees' type='text' placeholder='Fees' required={true} />
                </div>
                <div>
                    <label htmlFor='specialty' className='block'>Specialty</label>
                    <select onChange={(e) => setInputValues(prev => ({ ...prev, specialty: e.target.value }))} id='specialty' className='w-1/2 px-2 py-1 border border-gray-500 rounded-[10px]'>
                        <option value="General physician" selected>General physician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Pediatricians">Pediatricians</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Gastroenterologist">Gastroenterologist</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='education' className='block'>Education</label>
                    <input value={inputValues.education} onChange={(e) => setInputValues(prev => ({ ...prev, education: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='education' type='text' placeholder='Education' required={true} />
                </div>
                <div>
                    <label htmlFor='address' className='block'>Address</label>
                    <input value={inputValues.address} onChange={(e) => setInputValues(prev => ({ ...prev, address: e.target.value }))} className='px-3 py-1 border rounded-[10px] outline-none border-gray-500' id='address' type='text' placeholder='Address' required={true} />
                </div>
            </div>
            <div>
                <label htmlFor='about' className='block'>About</label>
                <textarea value={inputValues.about} onChange={(e) => setInputValues(prev => ({ ...prev, about: e.target.value }))} id='about' placeholder='write about yourself' className='w-2/3 m-auto h-[60px] outline-none border border-gray-500 rounded-[10px] px-3 py-1' />
            </div>
            <button type='submit' className='px-3 py-[2px] text-white rounded-full font-bold cursor-pointer bg-main-color'>Add Doctor</button>
        </div>
    </form>
}

export default AddDoctor