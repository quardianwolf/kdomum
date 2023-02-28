import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import styles from './styles.module.scss';

const index = () => {
  return (
    <div className="infographic-details position-relative">
                    <div className="img-position-absolute">
                        <img
                            className="img-object-fit img-object-center-center"
                            src='aboutbanner2.webp'
                        />
                    </div>
                    <Container>
                        <Row>
                            <div className="col-md-6">
                                <div className={styles.aboutMission}>
                                    <h3 className={styles.title}>Our Mission</h3>
                                    <p className={styles.desc}>
                                        We believe in supporting our artists and
                                        <br /> providing excellent customer service to
                                        <br /> our clients. Through the creation of
                                        <br /> advanced technical tools, we’re
                                        <br /> improving our transparency, account
                                        <br /> more accurately and provide an
                                        <br /> intuitive and powerful search engine
                                        <br /> that saves our users’ time and keeps
                                        <br /> them in their creative zone.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.aboutMission}>
                                    <h3 className={styles.title}>Thank You!</h3>
                                    <p className={styles.desc}>
                                        We’re only as good as our artists &<br /> composers and can
                                        only thrive with the
                                        <br /> support of our users. We never lose
                                        <br /> sight of this and will always work our
                                        <br /> hardest to provide the best possible
                                        <br /> experience for both. Thank you for
                                        <br /> being part of our journey!
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-12">
                                <p className={styles.aboutSupport}>
                                    We’re thirsty for your feedback and are fully committed to
                                    making Jambox an all around fun ride.
                                    <br /> Please write us with your ideas:{' '}
                                    <a href="mailto:support@jambox.io">support@jambox.io</a>
                                </p>
                            </div>
                        </Row>
                    </Container>
                </div>
  )
}

export default index