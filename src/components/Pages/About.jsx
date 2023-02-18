import React from 'react'
import { Container } from 'react-bootstrap'
import './About.css'

function About() {
  return (
    <div>
      <Container>
        <div className='about'>
          <div className="about-header"></div>

          <div className="about-content">
            <h1>About Us</h1>
            <div>
              <p>
              We are a team of passionate individuals who are dedicated to providing our customers with high-quality products and excellent customer service. Our mission is to make it easy for you to find and purchase the products you need, all in one convenient location.
              We have been in business for many years and have built a reputation for providing a wide selection of products at competitive prices. We are committed to continuously expanding our product offerings and staying up-to-date with the latest trends.
              </p>
              
              <p>
                Our team is made up of experts in their respective fields, who are committed to providing you with the best shopping experience possible. We pride ourselves on our friendly and knowledgeable customer service and are always happy to answer any questions you may have.
              We are also committed to giving back to our community. We are actively involved in charitable giving and sustainability initiatives, and are always looking for ways to reduce our impact on the environment.
              We value our customers and appreciate their feedback. We encourage you to check out our customer testimonials to see what others have to say about our products and service.</p>
              
              <p>
              Please feel free to contact us with any questions or feedback you may have. You can reach us at:
              </p>

              <div>
                <p>Email: BuyandSellurproduct@info.com<br/>
                Phone: +1-999-999-9999<br/>
                Address: 12/20 Tate Street, Higher Road street, Vijayawada, Andhra pradesh, 517420</p>
                <p>Thank you for choosing Buy and Sell!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About