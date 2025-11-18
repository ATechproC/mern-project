import React from 'react'
import { assets, doctors } from '../assets/assets_frontend/assets'
import BoxOfCards from '../components/BoxOfCards'
import SectionHeader from '../utils/SectionHeader';

const Appointment = () => {

    let relatedDoctors;

    relatedDoctors = [];
    for (let i = 0; i < 2; i++) {
        relatedDoctors[i] = doctors[i];
    }

    return <div className='mt-7'>
        <div className='flex gap-3'>
            <div className='w-[70%] bg-main-color rounded-[8px] overflow-hidden'>
                <img className='w-[90%] h-full object-contain' src={assets.doc1} draggable={false} />
            </div>
            <div className='border-gray-600 border-[2px] p-5 flex-column gap-2 rounded-[8px]'>
                <p className='text-[30px] front-bold'>Dr. Richard James</p>
                <p className='font-semibold text-gray-600'>MBBS - General physician</p>
                <p>About</p>
                <p className='text-[15px] text-gray-400'> Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.</p>
                <p>Appointment fee: $50</p>
            </div>
        </div>
        <div className='py-10'>
            <SectionHeader
                title="Related Doctors"
                description="Simply browse through our extensive list of trusted doctors."
            />
            <BoxOfCards doctors={relatedDoctors} />
        </div>
    </div>
}

export default Appointment