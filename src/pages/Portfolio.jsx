import React from 'react'

// Import Images
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
// import Image5 from '../img/portfolio/5.png'
// import Image6 from '../img/portfolio/6.png'

// Import Link
import { Link } from 'react-router-dom'

// Import Motion
import { motion } from 'framer-motion'

// Import Transitions
import { transition1 } from '../transitions'

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-center'
          >
            <h1 className='h1'>
              Portfolio
            </h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa velit rerum cum quo! <b>Sequi, quibusdam dolorum</b> nam provident perferendis blanditiis ea ut dignissimos asperiores illo earum aperiam, qui velit!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque illum sed deserunt. Pariatur, magnam.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire Me
            </Link>
          </motion.div>
          {/* Images Grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt="img"
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt="img"
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt="img"
              />
            </div>
            {/* Image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio