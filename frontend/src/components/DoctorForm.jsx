import React from 'react'
import Form from './Form'
import { useNavigate } from 'react-router'

const AdminForm = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin")
    }

    return <Form title="Doctor" handleClick={handleClick} />
}

export default AdminForm