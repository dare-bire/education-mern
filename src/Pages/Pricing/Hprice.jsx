import React from "react"
import Heading from "../heading/Heading"
import PriceCard from "./PriceCard"
import './Hprice.css'
const Hprice = () => {
  return (
    <div className="prices">
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </div>
  )
}

export default Hprice
