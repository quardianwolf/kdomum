import React, { useState, useEffect } from "react";
import { Col, Button, Container, Row, Tabs, Tab } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import path from 'path'


import Test from './test';

const faqCategory = [
  {
    id: 1,
    label: "General Info"
  },
  {
    id: 2,
    label: "Subscription & Licensing"
  },
  {
    id: 3,
    label: "Youtube Claims & Content ID"
  },
  {
    id: 4,
    label: "Become An Artist"
  }
];

const faqListData = [
  {
    id: 1,
    question: "What is Jambox?",
    answer:
      "Jambox is a music streaming service that allows you to listen to millions of songs and podcasts for free. You can also create your own playlist, listen to radio, and watch music videos on the app."
  },
  {
    id: 2,
    question: "How do I sign up for Jambox?",
    answer:
      "You can sign up for Jambox by downloading the app from the App Store or Google Play. You can also sign up on the web at jambox.com."
  },
  {
    id: 3,
    question: "How do I download the Jambox app?",
    answer: "You can download the Jambox app from the App Store or Google Play."
  },
  {
    id: 4,
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time. To cancel, go to your Account page and click Cancel Subscription. You will continue to have access to Jambox until the end of your current billing period. Your subscription will not be renewed after your current billing period ends."
  },
  {
    id: 5,
    question: "How do I change my payment method?",
    answer:
      "You can change your payment method at any time. To change your payment method, go to your Account page and click Payment Method. You will be able to update your payment method from there."
  }
];

const index = ({ getFaqList}) => {
  let tabs = 1;

  const [activeTab, setActiveTab] = useState(tabs);
  const [state, setState] = useState({
    search: "",
    faqCategory: faqCategory
  });



  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const onTabClick = (tab) => {
    setActiveTab(tab);
    setState({ ...state, search: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      search: state.search
    };

  };

  return (
    <div className="faq-tabs position-relative">
      <Container>
        <Tabs defaultActiveKey={activeTab} onSelect={(k) => onTabClick(k)}>
          {faqCategory.map((cat, index) => {
            return (
              <Tab eventKey={cat.id} title={cat.label} key={index}>
                <Row>
                  <Col lg={12}>
                    <h3 className="tab-title">{cat.label} Questions</h3>
                  </Col>

                  <Test/>
                </Row>
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </div>
  );
};


export default index;
