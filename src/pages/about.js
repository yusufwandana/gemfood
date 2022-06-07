import React, { Component } from 'react'
import SectionTitle from '../components/SectionTitle'
import CompanyImage from '../images/pexels-fauxels-3182759.jpg'

class About extends Component {
    render(){
        return(
            <div>
                <div className="bg-haro-about h-screen flex justify-center items-center bg-yellow-300">
                    <h1 className="text-5xl uppercase font-black text-black">About Page</h1>
                </div>

                <div className="overflow-hidden mb-10 lg:px-10 px-5">
                    <SectionTitle title="Tentang Kami" />
                    <img src={CompanyImage} alt="" />
                    <p className="lg:text-lg text-md text-justify font-serif lg:my-5 my-6">
                        PT GemFood Sejahtera adalah perusahaan swasta nasional yang bergerak di industri makanan dan minuman yang telah berdiri sejak tahun 2010.
                        Saat ini GemFood berpusat di Jakarta Utara. Karena perkembangan perusahaan yang baik dan signifikan, kini GemFood telah membuka 5 cabang produksi yang tersebar di Pulau Jawa, Sumatera dan Bali.
                        Untuk sistem produksi sudah tidak perlu diragukan lagi, GemFood telah menggunakan sistem produksi modern dan canggih yang tentunya dapat menjamin kualitas produk yang dihasilkan.
                    </p>
                    
                    <SectionTitle title="Visi & Misi" />
                    <p className="text-lg text-justify font-serif lg:my-5 my-6">
                        PT GemFood Sejahtera adalah perusahaan swasta nasional yang bergerak di industri makanan dan minuman yang telah berdiri sejak tahun 2010.
                        Saat ini GemFood berpusat di Jakarta Utara. Karena perkembangan perusahaan yang baik dan signifikan, kini GemFood telah membuka 5 cabang produksi yang tersebar di Pulau Jawa, Sumatera dan Bali.
                        Untuk sistem produksi sudah tidak perlu diragukan lagi, GemFood telah menggunakan sistem produksi modern dan canggih yang tentunya dapat menjamin kualitas produk yang dihasilkan.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;
