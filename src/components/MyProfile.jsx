import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import Button from "./Button"

const Champ = ({ title, value }) => {
  return <div className='flex-items gap-10'>
    <p> {title}: </p>
    <p> {value} </p>
  </div>
}

const MyProfile = () => {
  return <div className='w-[400px] p-3 flex-column gap-7'>
    <div className='flex-column gap-4 border-b-2 border-gray-300 pb-3'>
      <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
        <img
          className='w-[100%] h-[1OO%] object-contain'
          src={assets.profile_pic} draggable={false} />
      </div>
      <p className='font-semibold'>CHORAICHI ANASS</p>
    </div>
    <div className=' flex-column gap-2 border-b-2 border-gray-300 pb-3'>
      <a href="#" className='text-gray-400 text-[15px]'>CONTACT INFORMATION</a>
      <Champ title="Emailid" value="choraichianass@gmail.com" />
      <Champ title="Phone" value="+1  123 456 7890" />
      <Champ title="Adress" value="57th Cross, Richmond Circle, Church Road, London" />
    </div>
    <div className='flex-column gap-2 '>
      <a href="#" className='text-gray-400 text-[15px]'>BASIC INFORMATION</a>
      <Champ title="Gender" value="Male" />
      <Champ title="Birthday" value="20 July" />
    </div>
    <div className='flex-items gap-5'>
      <Button speciality="Edit" />
      <Button speciality="Save information" />
    </div>
  </div>
}

export default MyProfile