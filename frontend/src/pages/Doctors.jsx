import React from 'react'
import BoxOfCard from '../components/BoxOfCards'
import { doctors } from '../assets/assets_frontend/assets'
import Button from '../components/Button'

const Doctors = () => {
  return <div className='flex gap-5 py-5 pb-10 flex-column md:flex-row'>
    <div className='gap-3 flex-column'>
      <Button speciality="General physician" />
      <Button speciality="Gynecologist" />
      <Button speciality="Dermatologist" />
      <Button speciality="Pediatricians" />
      <Button speciality="Neurologist" />
      <Button speciality="Gastroenterologist" />
    </div>
    <BoxOfCard
      doctors={doctors}
    />
  </div>
}

export default Doctors