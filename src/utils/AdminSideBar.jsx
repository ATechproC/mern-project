import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router'

const AdminSideBar = () => {

        const links = [
            {
                "id": 1,
                "name": "Dashboard",
                "link": "/dashboard"
            },
            {
                "id": 2,
                "name": "Appointments",
                "link": "/appointments"
            },
            {
                "id": 3,
                "name": "Add Doctor",
                "link": "/add-doctor"
            },
            {
                "id": 4,
                "name": "Doctors List",
                "link": "/doctors-list"
            },
        ]

    return <nav className='flex-column gap-3 bg-secondary-color fixed w-[15%] h-full left-0 bottm-0 right-0 p-3 border-[1px] border-gray-400'>
        {
            links.map(({ id, name, link }) => {
                return <div key={id}
                    className='flex-items gap-3 px-5'
                >
                    <FaHome id={id} />
                    {/* <GetIcon id={id} /> */}
                    <Link to={link} > {name} </Link>
                </div>
            })
        }
    </nav>
}

export default AdminSideBar