import React from 'react'
import { Link } from 'react-router-dom'
import './CardProduct.css'


const CardProduct = (props) => {

    function PromoPrice(){
        if (props.isPromo) {
            return <span><strike className="text-red-500 mr-1">$2.50</strike> $1.99</span>
        }else{
            return <span>$2.50</span>
        }
    }

    function LabelPromo(){
        if (props.isPromo) {
            return <small className="bg-yellow-300 uppercase rounded-sm text-xs mr-1 px-1">Promo</small> 
        }

        return null
    }

    return(
        <div className="card-product">
            <div className="box-content">
                <img src={props.img} className="object-cover rounded-lg h-72 w-full" alt="" />
            </div>
            <div className="text-left">
                <h3 className="title-product">
                    <LabelPromo />
                    <span>{props.name}</span>
                </h3>
                <small className="font-semibold text-gray-500 text-left px-4">
                    <span>{props.category}</span>
                </small>
                <small className="rating-product">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    4.8 (1.752)
                </small>

                <small className="flex font-semibold text-sm text-left px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
                    <PromoPrice />
                </small>
            </div>

            {/* <p className="text-justify px-4 p-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat eligendi quas animi saepe facere!
            </p> */}
            <Link to="#" className="btn-order">
                Detail Product
            </Link>
        </div>
    )
}

export default CardProduct
