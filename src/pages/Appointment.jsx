import React, { useEffect, useState } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import BoxOfCards from '../components/BoxOfCards'
import SectionHeader from '../utils/SectionHeader';
import { useParams } from 'react-router';
import BookingSlots from '../components/BookingSlots';

const Appointment = () => {

    const { doctorId } = useParams();

    const [doctorInfo, setDoctorInfo] = useState([]);

    const fetchDoctoInfo = (doctorId) => {
        doctors.forEach((doctorInfo) => {
            if (doctorInfo._id === doctorId) setDoctorInfo(doctorInfo);
        })
    }

    useEffect(() => {
        fetchDoctoInfo(doctorId);
    }, [doctorId])

    const [relatedDoctors, setRelatedDoctors] = useState([]);

    const getRelatedDoctors = () => {
        const relatedOnes = [];

        doctors.forEach(doctor => {
            if (doctor.speciality === doctorInfo.speciality && doctor._id !== doctorInfo._id) {
                relatedOnes.push(doctor);
            }
        })

        setRelatedDoctors(relatedOnes);
    }

    useEffect(() => {
        getRelatedDoctors();
    }, [doctorInfo])


    return doctorInfo &&
        <div className='mt-7'>
            <div className='flex gap-3'>
                <div className='w-[70%] bg-main-color rounded-[8px] overflow-hidden'>
                    <img className='w-[90%] h-full object-contain' src={doctorInfo.image} draggable={false} />
                </div>
                <div className='border-gray-600 border-[2px] p-5 flex-column gap-2 rounded-[8px]'>
                    <p className='text-[30px] front-bold'>{doctorInfo.speciality}</p>
                    <p className='font-semibold text-gray-600'>{doctorInfo.degree}</p>
                    <p>About</p>
                    <p className='text-[15px] text-gray-400'> {doctorInfo.about}</p>
                    <p>{doctorInfo.fees}</p>
                </div>
            </div>
            <BookingSlots />
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