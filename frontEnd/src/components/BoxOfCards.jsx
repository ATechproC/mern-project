import React from 'react'
import { useNavigate } from 'react-router'

const BoxOfCards = ({ doctors }) => {

    const navigate = useNavigate();

    return <div className='grid-cols-4 md:grid gap-7 flex-column'>
        {
            doctors.map(({ _id, name, speciality, image }) => {
                return <div 
                onClick={() => {
                    navigate(`/appointments/${_id}`);
                    scrollTo(0, 0);
                }}
                key={_id} className='border-gray-300 border-[1px] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition duration-300'>
                    <div className='bg-secondary-color'>
                        <img src={image} draggable={false} />
                    </div>
                    <div className='p-3 text-center bg-white'>
                        <p className='font-semibold text-[15px]'>{name}</p>
                        <p className='text-[13px] text-gray-400'>{speciality}</p>
                    </div>
                </div>
            })
        }
    </div>
}

export default BoxOfCards