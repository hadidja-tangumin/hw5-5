import axios from "axios"
import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { countAction } from "../store/counerAction"
import { basketAction } from "../store/basketAction"
import "../pages/Market.css"


const MarketPage = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const response = async () => {
        const request = await axios.get("https://dummyjson.com/products?limit=20")
        setProduct(request.data.products)
        }
        response()
    }, [])

    const dispatch = useDispatch()

    const handleSubmit = (selectProduct) => {
        dispatch(countAction())
        dispatch(basketAction({payload: selectProduct}))
    }

  return (
    <div className="width">
        <h1>Market place:</h1>
        {product.map((item) => (
            <div key={item.id} className="product-block">
                <img src={item.thumbnail} alt="техника" className="product-image" />
                <h2>{item.title}</h2>
                <span>{item.description}</span>
                <p>{item.price}$</p>
                <p>rating: {item.rating}</p>
                <p>brand: {item.brand}</p>
                <p>category: {item.category}</p>
                <button onClick={() => handleSubmit(item)}>BUY</button>
            </div>
        ))}
    </div>
  )
}

export default MarketPage