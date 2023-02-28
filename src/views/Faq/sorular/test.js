/* eslint-disable react/prop-types */
import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

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

const FaqList = () => {
  return (
    <Col lg={12}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};

export default FaqList;
