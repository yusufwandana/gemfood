import React, { Component, Fragment }  from 'react'
import { Slider } from 'infinite-react-carousel'
import ResponsiveSlider from './Product/ResponsiveSlider'

import SectionTitle from '../components/SectionTitle'
import CustomerReview from './Content/CustomerReview'
import CardProduct from './Product/CardProduct'
import ResponsiveSliderSetting from '../components/Product/ResponsiveSlider'

import BdayCake from '../images/products/pexels-kristina-paukshtite-1998632.jpg'
import FrenchFries from "../images/products/pexels-valeria-boltneva-1893555.jpg"
import Cookies from "../images/products/pexels-oleg-magni-890577.jpg"
import CocaCola from "../images/products/pexels-olenka-sergienko-3819969.jpg"
import PdlPop from "../images/products/pexels-ave-calvar-martinez-4705113.jpg"
import Magnum from "../images/products/pexels-polina-tankilevitch-4725702.jpg"
import Drink    from "../images/categories/pexels-olenka-sergienko-3819966.jpg" 


class Content extends Component {
    render(){
        return(
            <Fragment>
                {/* PROMO */}

                <SectionTitle title="Limited Promo" />
                <div className="mb-10">
                    <Slider {...ResponsiveSlider()}>
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                        <CardProduct img={Drink} name="Drink Cola!" category="Drink" isPromo={true} />
                    </Slider>
                </div> 

                {/* END PROMO */}

                <hr className="lg:mx-10 mx-3" />

                {/* Favorite Products */}
                <div className="mb-10">
                    <SectionTitle title="Favorite Products" />
                    <Slider {...ResponsiveSliderSetting()}>
                        <CardProduct name="Rainbow Freeze" category="Ice Cream" img={PdlPop} isPromo={true} />
                        <CardProduct name="Creamy Strawberry" category="Cake" img={BdayCake} />
                        <CardProduct name="French Fries" category="Snack" img={FrenchFries} />
                        <CardProduct name="Paddle Pop Limited" category="Ice Cream" img={PdlPop} />
                        <CardProduct name="Chocolava"  category="Drink" img={CocaCola} />
                        <CardProduct name="Cookies" category="Cake" img={Cookies} isPromo={true} />
                        <CardProduct name="Magnum Classic" category="Ice Cream" img={Magnum} />
                    </Slider>
                </div>

                {/* End Favorite Products */}

                <hr className="lg:mx-10 mx-3" />


                {/* CUSTOMER REVIEW */}

                <CustomerReview />
                
                {/* END CUSTOMER REVIEWS */}

            </Fragment>
        )
    }

    refreshPage = () => {
        this.setState({})
    };

    componentDidMount(){
        window.addEventListener('resize', this.refreshPage)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.refreshPage)
    }
}

export default Content;
