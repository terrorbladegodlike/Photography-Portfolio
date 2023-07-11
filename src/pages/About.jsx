import React from 'react'

// Import Images
import WomanImg from '../img/about/woman.png'

// Import Link
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full relative">
        {/* Text & Img Wrapper */}
        <div className='flex flex-col lg:flex-row items-center h-full justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt="woman" />
          </div>
          {/* Text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa velit rerum cum quo! <b>Sequi, quibusdam dolorum</b> nam provident perferendis blanditiis ea ut dignissimos asperiores illo earum aperiam, qui velit!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque illum sed deserunt. Pariatur, magnam.
            </p>
            <Link to={'/portfolio'} className='btn'>View my works</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About