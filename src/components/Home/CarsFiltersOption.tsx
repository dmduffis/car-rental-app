import React from 'react'

function CarsFiltersOption() {
  return (
    <div>
        <div className='flex mt-10 items-center justify-between'>
            <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore cars you might like</h2>
            </div>
        <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs mt-2">
            <option disabled selected>Price</option>
            <option>Min to Max</option>
            <option>Max to Min</option>
        </select>
        <select className="select select-bordered md:block w-full max-w-xs mt-2 hidden">
            <option disabled selected>Model</option>
            <option>Compact</option>
            <option>SUV</option>
            <option>Luxury</option>
            <option>Pickup Truck</option>
        </select>
        </div>
        </div>
    </div>
  )
}

export default CarsFiltersOption