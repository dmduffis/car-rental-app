"use client"
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {

  const[carsList, setCarsList] = useState<any>([]);
  const[carsOriginalList, setCarsOriginalList] = useState<any>([]);

  useEffect(() => {
  getCarList();
  }, [])

  const getCarList = async () => {
    const result:any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOriginalList(result?.carLists);
  }

  const filterCarList = (carType: string) => {
    if (carType == 'all') {
      setCarsList(carsOriginalList)
    } else {
      const filteredList = carsOriginalList.filter((item:any) => 
        item.carType == carType)
      setCarsList(filteredList)
    }
  }

  const orderCarsbyPrice=(order:any) => {
    const sortedData = [...carsOriginalList].sort((a, b) => 
      order == -1? a.price - b.price:b.price - a.price)
      setCarsList(sortedData)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption setCarPriceOrder={(value:string) => orderCarsbyPrice(value)} carsList={carsOriginalList} setCarType={(value:string) => filterCarList(value)}/>
      <CarsList carsList={carsList} />
    </div>
  );
}
