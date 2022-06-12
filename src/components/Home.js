import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        // @ts-ignore
        title='Model 3'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        backgroundImg='model-3.jpg'
      />
      <Section
        // @ts-ignore
        title='Model Y'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        backgroundImg='model-y.jpg'
      />
      <Section
        // @ts-ignore
        title='Model S'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        backgroundImg='model-s.jpg'
      />
      <Section
        // @ts-ignore
        title='Model X'
        description='Order Online for Touchless Delivery'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
        backgroundImg='model-x.jpg'
      />
      <Section
        // @ts-ignore
        title='Lowest Cost Solar Panels in America'
        description='Money Back Guarantee'
        leftBtnText='Order now'
        rightBtnText='Learn more'
        backgroundImg='solar-panel.jpg'
      />
      <Section
        // @ts-ignore
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof '
        leftBtnText='Order now'
        rightBtnText='Learn more'
        backgroundImg='solar-roof.jpg'
      />
      <Section
        // @ts-ignore
        title='Accessories'
        description=''
        leftBtnText='Shop now'
        backgroundImg='accessories.jpg'
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;
