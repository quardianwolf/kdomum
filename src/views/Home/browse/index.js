/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import queryString from 'query-string';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Music from './Music';
import Sfx from './Sfx';

const Browse = ({ history }) => {
    const [activeTab, setActiveTab] = useState('1');

    useEffect(() => {
        const parsed = queryString.parse(history.location.search);
        if ('type' in parsed && parsed.type === 'sfx') {
            setActiveTab('2');
        }
    }, []);

    const changeTab = (t) => {
        setActiveTab(t);
        history.push({
            pathname: '/',
            search: t === '2' ? '?type=sfx' : '',
        });
    };

    return (
        <div>
            <Container fluid={true} style={{ background: '#0a0915' }}>
                <Row className="align-items-center">
                    <Col md={12} lg={12} className="text-center">
                        <div className="switch-field home-switch-field">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === '1',
                                        })}
                                        onClick={() => {
                                            changeTab('1');
                                        }}
                                    >
                                        Music
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === '2',
                                        })}
                                        onClick={() => {
                                            changeTab('2');
                                        }}
                                    >
                                        SFX
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
            <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab}>
                    {activeTab === '1' ? <Music history={history} /> : <Sfx history={history} />}
                </TabPane>
            </TabContent>
        </div>
    );
};

export default Browse;
