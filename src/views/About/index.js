import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils';
import React from 'react'

import Hero from './hero';
import Mid from './mid';
import Last from './last';

const AboutPage = () => {
  return (
    <div className='about-container'>
      <Hero />
      <Mid />
      <Last />
    </div>
  )
}

export default AboutPage