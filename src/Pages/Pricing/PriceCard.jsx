import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <div className="forall">
      {price.map((val, index) => (
        <div className='itemss shadow' key={index}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn1'>GET STARTED</button>
        </div>
      ))}
    </div>
  )
}

export default PriceCard
