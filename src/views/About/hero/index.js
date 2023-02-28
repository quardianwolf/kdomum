import React from 'react'

import styles from './styles.module.scss';

const index = () => {
  return (
    <div className={styles.banner}>
                    <div className="img-position-absolute">
                        <img className="img-object-fit img-object-top-center" src='aboutbanner.webp' />
                    </div>
                    <div className={styles.bannerContent}>
                        <h3 className={styles.bannerTitle}>Our Calling</h3>
                        <p className="banner-desc mb-20">
                            We built Jambox with a clear goal and intense
                            <br /> desire; “Our Calling:”
                        </p>
                        <p className="banner-desc">
                            Jambox is an ideal platform to find the perfect music for clients’
                            projects and further the success of the artists we represent. We’re here
                            to create a supportive environment for talented musicians that want to
                            grow as independent artists and offer their music to filmmakers, video
                            producers, editors and brands. We connect great music with those that
                            seek it for film & video and we do it well.
                        </p>
                    </div>
                </div>
  )
}

export default index