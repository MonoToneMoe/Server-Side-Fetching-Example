import { fetchStockData } from '@/app/lib/api'
import { IStock } from '@/Interfaces/interfaces'
import React from 'react'
import Marquee from 'react-fast-marquee';

const StocksComponent = async () => {
  const stocks: IStock[] = await fetchStockData();
  return (
    <Marquee>
      {stocks.map((stock, index) => (
        <div className='flex bg-black text-white max-w-fit' key={index}>
          {stock.c} {stock.pc}
        </div>
      ))}
    </Marquee>
  )
}

export default StocksComponent