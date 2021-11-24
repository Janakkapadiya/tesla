import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
                tital="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                tital="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                tital="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                tital="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                tital="Lower Cost Solar Panels"
                description="Money-back Gurantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="order now"
                rightBtnText="Learn More"
            />

            <Section
                tital="Lower Cost Solar Panels"
                description="Money-back Gurantee"
                backgroundImage="solar-roof.jpg"
                leftBtnText="order now"
                rightBtnText="Learn More"
            />

<Section
                tital="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftBtnText="order now"
                
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`
