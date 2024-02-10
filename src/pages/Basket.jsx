import React from "react"
import { useSelector } from "react-redux"


const Basket = () => {
  const addestProductToBasket = useSelector(state => state.stateProduct.basket)

  return (
    <div>
      <h1>Your basket</h1>
          {addestProductToBasket.map((product) => (
            <div key={product.payload.id} className="product-block">
              {/* в dispatch'е копмпонента MarketPAge, в basketAction я использу. payload
              его же я и присваиваю к addestProductToBasket т.к. payload сохраняет
              в себе значения и выводит их в других местах  */}
                <img src={product.payload.thumbnail} alt="техника" className="product-image" />
                <h2>{product.payload.title}</h2>
                <span>{product.payload.description}</span>
                <p>{product.payload.price}$</p>
                <p>rating: {product.payload.rating}</p>
                <p>brand: {product.payload.brand}</p>
                <p>category: {product.payload.category}</p>
            </div>
          ))}
    </div>
  )
}

export default Basket