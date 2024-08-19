import React, { useState } from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {
  return (

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 mt-8'>
    {props.carsList.map((car:any, index:number) => (
    <div><CarCard key={index} car={car}/></div>
    ))}
    </div>
  )
}

export default CarsList