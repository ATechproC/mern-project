import React from 'react'
import { specialityData } from '../../assets/assets_frontend/assets'
import SectionHeader from '../../utils/SectionHeader'


const Speciality = () => {
    return <div className='my-20'>
        <SectionHeader
        title="Find by Speciality"
        description="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        />
        <div className='gap-10 mx-auto flex-items w-fit'>
            {
                specialityData.map(({ speciality, image }, index) => {
                    return <div key={index} className='gap-3 flex-column'>
                        <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                            <img
                                className='w-full h-full'
                                src={image} draggable={false} />
                        </div>
                        <p> {speciality} </p>
                    </div>
                })
            }
        </div>
    </div>
}

export default Speciality