import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {


  return (
    <div>
      
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Forever Fashion Born out of a passion for style, elegance, and individuality, Forever Fashion is more than just a brand—it's a lifestyle. We believe fashion is a powerful form of self-expression, and our mission is to inspire confidence and creativity in every step of your journey.</p>
              <p>Our Story At Forever Fashion, we blend timeless designs with modern trends to create collections that celebrate your unique personality. From statement pieces to everyday essentials, our curated selections are crafted with care, quality, and a commitment to sustainability.
                 Join the Movement Step into the world of Forever Fashion, where we bring your style aspirations to life. Be bold. Be timeless.
                 Be you.</p>
                 <b className='text-gray-800'>Our Mission</b>
                 <p>Our Mission at Forever Fashion, we aim to empower individuals through timeless, stylish, and sustainable clothing. Our commitment is to deliver high-quality designs that inspire confidence, celebrate individuality, and promote ethical practices. We believe in building a community of bold, fashion-forward thinkers who transform the world through their style. </p>
            </div>
        </div>
        
        <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Forever Fashion, quality is at the heart of everything we do. From the selection of premium fabrics to meticulous craftsmanship, we are dedicated to ensuring each piece meets the highest standards of excellence. Our rigorous quality assurance process includes material inspections, precise manufacturing protocols, and thorough final product evaluations to guarantee durability, comfort, and style.
              Our commitment to quality is a promise to you—fashion you can trust, wear after wear.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At Forever Fashion, your convenience is our priority. From an easy-to-navigate website to fast, reliable shipping, we ensure a seamless shopping experience tailored to your needs. With detailed product descriptions, flexible return policies, and responsive customer support, we aim to make every step—from browsing to wearing—effortless and enjoyable.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At Forever Fashion, we believe that great style deserves great service. Our dedicated customer support team is here to assist you every step of the way—whether it’s answering your queries, addressing your concerns, or making your shopping experience seamless. 
               We strive to exceed expectations with prompt responses, personalized solutions, and a commitment to your satisfaction.
               Your happiness is our priority, and we’re always just a click or call away to ensure your Forever Fashion journey is nothing short of exceptional.</p>
          </div>
        </div>

        <NewsletterBox />

    </div>
  )
}

export default About
