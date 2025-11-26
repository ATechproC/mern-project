import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserDate] = useState({
    name: "CHORAICHI ANASS",
    email: "choraichianass@gmail.com",
    phone: "+1  123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "2004-05-18"
  })

  return <div className='w-[400px] p-3 flex-column gap-7'>
    <div className='flex-column gap-4 border-b-2 border-gray-300 pb-3'>
      <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
        <img
          className='w-[100%] h-[1OO%] object-contain'
          src={assets.profile_pic} draggable={false} />
      </div>
      {
        isEdit
          ? <input
            className='px-3 py-1 border border-black rounded-[10px]'
            type="text" value={userData.name} onChange={(e) => setUserDate(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-semibold'> {userData.name} </p>
      }
    </div>
    <div className=' flex-column gap-2 border-b-2 border-gray-300 pb-3'>
      <p className='text-gray-400 text-[15px]'>CONTACT INFORMATION</p>
      <div className='flex-items gap-10'>
        <p> Email : </p>
        {
          isEdit
            ? <input
              className='px-3 py-1 border border-black rounded-[10px]'
              type="email" value={userData.email} onChange={(e) => setUserDate(prev => ({ ...prev, email: e.target.value }))} />
            : <p> {userData.email} </p>
        }
      </div>
      <div className='flex-items gap-10'>
        <p> Phone : </p>
        {
          isEdit
            ? <input
              className='px-3 py-1 border border-black rounded-[10px]'
              type="text" value={userData.phone} onChange={(e) => setUserDate(prev => ({ ...prev, phone: e.target.value }))} />
            : <p> {userData.phone} </p>
        }
      </div>

      <div className='flex-items gap-10'>
        <p> Address : </p>
        {
          isEdit
            ? <input
              className='px-3 py-1 border border-black rounded-[10px]'
              type="text" value={userData.address} onChange={(e) => setUserDate(prev => ({ ...prev, address: e.target.value }))} />
            : <p> {userData.address} </p>
        }
      </div>
    </div>
    <div className='flex-column gap-2 '>
      <a href="#" className='text-gray-400 text-[15px]'>BASIC INFORMATION</a>
      <div className='flex-items gap-10'>
        <p> Gender : </p>
        {
          isEdit
            ? <input
              className='px-3 py-1 border border-black rounded-[10px]'
              type="text" value={userData.gender} onChange={(e) => setUserDate(prev => ({ ...prev, gender: e.target.value }))} />
            : <p> {userData.gender} </p>
        }
      </div>
      <div className='flex-items gap-10'>
        <p> Birthday : </p>
        {
          isEdit
            ? <input
              className='px-3 py-1 border border-black rounded-[10px]'
              type="date" value={userData.birthday} onChange={(e) => setUserDate(prev => ({ ...prev, birthday: e.target.value }))} />
            : <p> {userData.birthday} </p>
        }
      </div>
    </div>
    <div className='flex-items gap-5'>
      {
        isEdit
          ? <button
            onClick={() => setIsEdit(false)}
            className='whitespace-nowrap capitalize px-3 py-1 mx-auto hover:bg-green-500 min-w-[170px] border-[1px] rounded-[3px] border-gray-500 cursor-pointer transition-all duration-300 bg-secondary-color text-main-color font-semibold hover:text-white'>Save information</button>
          : <button
            onClick={() => setIsEdit(true)}
            className="whitespace-nowrap capitalize px-3 py-1 mx-auto hover:bg-green-500 min-w-[170px] border-[1px] rounded-[3px] border-gray-500 cursor-pointer transition-all duration-300 bg-secondary-color text-main-color font-semibold hover:text-white"
            >Edit</button>
      }
    </div>
  </div >
}

export default MyProfile