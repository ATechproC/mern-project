import React from "react";
import ShapeSection from "../../utils/ShapeSection";
import { assets } from "../../assets/assets_frontend/assets";

const Booking = () => {
    return <ShapeSection
        desc1="Book Appointment"
        desc2="With Trusted Doctors"
        section="booking"
    >
        <div className='gap-2 flex-items w-[90%] mx-auto'>
            <div className='w-[50%]'>
                <img src={assets.group_profiles} draggable={false} />
            </div>
            <p className='text-[#fff]'>
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
            </p>
        </div>
    </ShapeSection>
}

export default Booking