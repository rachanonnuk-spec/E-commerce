import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justity-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates perspiciatis, ratione cumque distinctio autem soluta velit quas ipsa magnam doloremque quis saepe, vitae nam unde, repudiandae dicta at numquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum esse optio placeat eum itaque numquam modi tenetur, qui deleniti minima nisi veniam iste et amet illum nostrum? Voluptas, accusamus!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit consequuntur illum doloremque quam minus aspernatur commodi nostrum? Corrupti vitae iusto, accusantium hic nostrum nesciunt, nam asperiores, facere odio unde rem.</p>
          </div>
        </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores, quis unde suscipit molestiae eaque veritatis voluptas amet dicta totam laudantium vel sint incidunt iusto animi ipsum a, blanditiis ipsa.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores, quis unde suscipit molestiae eaque veritatis voluptas amet dicta totam laudantium vel sint incidunt iusto animi ipsum a, blanditiis ipsa.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores, quis unde suscipit molestiae eaque veritatis voluptas amet dicta totam laudantium vel sint incidunt iusto animi ipsum a, blanditiis ipsa.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About