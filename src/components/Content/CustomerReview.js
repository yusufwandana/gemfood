import React, { Component} from 'react'
import Slider from 'infinite-react-carousel'
import DetailReview from './DetailReview'

class Review extends Component {

    render(){

        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: true,
            duration: 300
        }

        return (
            <div className="overflow-hidden pb-10 justify-center items-center">
                <div className="flex flex-col justify-center items-center mt-8">
                    <h3 className="text-3xl uppercase font-bold">Customer Reviews</h3>
                    <div className="border-t-4 border-black w-24 mt-2 mb-8"></div>
                </div>
                <Slider { ...settings }>
                    <DetailReview 
                        name="Anselma Hanadya Putri" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, a? Ipsum asperiores adipisci ratione doloribus, amet dolorem nam sequi similique repudiandae? Quis porro ratione dolorum assumenda, fugit id vel obcaecati!"
                        star="5" />
                    <DetailReview 
                        name="Joko Widodo"
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ut earum doloremque dolor, aliquid facilis blanditiis vel animi quas doloribus ex sequi odit similique placeat ipsam nostrum! Voluptatem, dolorem laborum." 
                        star="4" />
                    <DetailReview 
                        name="Sultan Hamengkubuwono IX"
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ut earum doloremque dolor, aliquid facilis blanditiis vel animi quas doloribus ex sequi odit similique placeat ipsam nostrum! Voluptatem, dolorem laborum." 
                        star="4" />
                </Slider>
            </div>
        )
    }

}

export default Review
