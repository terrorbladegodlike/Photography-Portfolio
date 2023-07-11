import React from 'react'

// Import Icons
import { ImInstagram, ImFacebook, ImPinterest, ImTwitter, ImYoutube } from 'react-icons/im'

const Socials = () => {
  return (
    <div className='hidden lg:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href="https://www.facebook.com/" rel='noopener'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" rel='noopener'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" rel='noopener'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F" rel='noopener'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" rel='noopener'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
