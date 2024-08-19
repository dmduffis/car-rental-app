import React, { useEffect, useState } from 'react'

function CarsFiltersOption({carsList, setCarType, setCarPriceOrder}:any) {

  const[carTypeList, setCarTypeList] = useState<any>([]);

  const CarTypeSet = new Set()

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList])

  const filterCarList = () => {
    carsList.forEach((element:any) => {
      CarTypeSet.add(element.carType)
    })
    setCarTypeList(Array.from(CarTypeSet))
  }

  return carsList && (
    <div>
        <div className='flex mt-10 items-center justify-between'>
            <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore cars you might like</h2>
            </div>
        <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs mt-2"
        onChange={(e) => setCarPriceOrder(e.target.value)}>
            <option disabled selected>Price</option>
            <option value={-1}>Min to Max</option>
            <option value={1}>Max to Min</option>
        </select>
        <select className="select select-bordered md:block w-full max-w-xs mt-2 hidden capitalize"
        onChange={(e) => setCarType(e.target.value)}>
            <option disabled selected>Model</option>
            <option>all</option>
            {carTypeList && carTypeList.map((type:string, index:number) => {
              return <option key={index}>{type}</option>
              })}
        </select>
        </div>
        </div>
    </div>
  )
}

export default CarsFiltersOption