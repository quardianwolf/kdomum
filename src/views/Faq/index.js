import React from 'react'

import Banner from './banner'
import Sorular from './sorular'
import Mail from './mail'

const FaqPage = () => {
  return (
    <div className='faq-container'>
      <Banner />
      <Sorular />
      <Mail />
    </div>
  )
}

export default FaqPage