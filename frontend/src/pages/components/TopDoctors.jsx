import React from 'react'
import SectionHeader from '../../utils/SectionHeader'
import { doctors } from '../../assets/assets_frontend/assets'

const TopDoctors = () => {
    return <div className='my-20 text-center'>
        <SectionHeader
            title="Top Doctors to Book"
            description="Simply browse through our extensive list of trusted doctors."
        />
        <div className='grid grid-cols-4 gap-7'>
            {
                doctors.map(({ _id, name, speciality, image }) => {
                    return <div key={_id} className='border-gray-300 border-[1px] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition duration-300'>
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
        <button className='px-10 py-2 mt-10 bg-secondary-color w-fit rounded-[10px] text-gray-500 mx-auto hover:-translate-y-1 transition duration-300'>more</button>
    </div>
}

export default TopDoctors