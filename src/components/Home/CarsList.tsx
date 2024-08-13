import React, { useState } from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {
  return (

    <div>
    {props.carLists.map((car:any, index:number) => (
    <div><CarCard car={car}/></div>
    ))}
    </div>
  )
}

export default CarsList