import React, { Component, Fragment } from 'react'

import SectionTitle from '../components/SectionTitle'
import CardProduct from '../components/Product/CardProduct'

import BdayCake from '../images/products/pexels-kristina-paukshtite-1998632.jpg'
import FrenchFries from "../images/products/pexels-valeria-boltneva-1893555.jpg"
import Cookies from "../images/products/pexels-oleg-magni-890577.jpg"
import CocaCola from "../images/products/pexels-olenka-sergienko-3819969.jpg"
import PdlPop from "../images/products/pexels-ave-calvar-martinez-4705113.jpg"
import Magnum from "../images/products/pexels-polina-tankilevitch-4725702.jpg"

class Product extends Component {

    render(){
        return(
            <Fragment>
                <div className="flex h-screen justify-center items-center bg-yellow-300">
                    <h1 className="text-5xl uppercase font-black px-1">Product Page</h1>
                </div>

                {/* CATEGORY */}
                {/* <div className="overflow-hidden lg:px-5">
                    <SectionTitle title="Product Category" />
                    <div className="overflow-hidden lg:grid grid-cols-2 text-center items-center">
                        <CardCategory name="Snack"     image={Snack} />
                        <CardCategory name="Cake"      image={Cake} />
                        <CardCategory name="Ice Cream" image={IceCream} />
                        <CardCategory name="Drink"     image={Drink} />
                    </div>
                </div> */}
                {/* END CATEGORY */}

                {/* <hr className="m-10" /> */}

                {/* Favorite Products */}
                {/* <SectionTitle title="Favorite Products" />
                <Slider {...ResponsiveSliderSetting()}>
                    <CardProduct name="Rainbow Freeze" category="Ice Cream" img={PdlPop} isPromo={true} />
                    <CardProduct name="Creamy Strawberry" category="Cake" img={BdayCake} />
                    <CardProduct name="French Fries" category="Snack" img={FrenchFries} />
                    <CardProduct name="Paddle Pop Limited" category="Ice Cream" img={PdlPop} isPromo={true} />
                    <CardProduct name="Chocolava"  category="Drink" img={CocaCola} />
                    <CardProduct name="Cookies" category="Cake" img={Cookies} />
                    <CardProduct name="Magnum Classic" category="Ice Cream" img={Magnum} />
                </Slider> */}

                {/* <hr className="m-10" /> */}

                {/* Our Products */}
                <SectionTitle title="Our Products" />
                <div className="lg:grid grid-cols-5 lg:mx-2 mx-4 mb-10">
                    <CardProduct name="Strawberry Funny" category="Cake" img={BdayCake} />
                    <CardProduct name="Pootatto Crunchy" category="Snack" img={FrenchFries} />
                    <CardProduct name="CocaCola 120ml"  category="Drink" img={CocaCola} />
                    <CardProduct name="Chocookies" category="Cake" img={Cookies} />
                    <CardProduct name="Rainbow Freeze" category="Ice Cream" img={PdlPop} />
                    <CardProduct name="Magnum Classic" category="Ice Cream" img={Magnum} />
                    <CardProduct name="Creamy Red Velvet" category="Cake" img={BdayCake} />
                    <CardProduct name="French Fries" category="Snack" img={FrenchFries} />
                    <CardProduct name="Cocacola 120ml"  category="Drink" img={CocaCola} />
                    <CardProduct name="Cookies" category="Cake" img={Cookies} />
                    <CardProduct name="Pootatto Crunchy" category="Snack" img={FrenchFries} />
                    <CardProduct name="CocaCola 120ml"  category="Drink" img={CocaCola} />
                    <CardProduct name="Creamy Red Velvet" category="Cake" img={BdayCake} />
                    <CardProduct name="French Fries" category="Snack" img={FrenchFries} />
                    <CardProduct name="Magnum Classic" category="Ice Cream" img={Magnum} />
                </div>

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

export default Product;
