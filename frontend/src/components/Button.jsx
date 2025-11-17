import React from 'react'

const Button = ({ speciality }) => {
    return <div className='whitespace-nowrap px-3 py-1 mx-auto hover:bg-secondary-color w-[150px] border-[1px] rounded-[3px] border-gray-500 cursor-pointer transition duration-3000'>
        {speciality}
    </div>
}

export default Button