import React from 'react'
import {AdvantagesList, OurAdvantagesSection} from './OurAdvantages.styled.jsx'

function OurAdvantages() {
  return (
    <OurAdvantagesSection>
      <h2>Why choose us?</h2>
      <AdvantagesList>
        <li>
          <h3>Unmatched Fleet</h3>
          <p>Explore our diverse fleet of well-maintained vehicles, from sleek sedans to spacious SUVs, ensuring you
            find the perfect match for your travel needs.</p>
        </li>
        <li>
          <h3>Safety First</h3>
          <p>Your safety is our top priority. Rest easy knowing that our vehicles undergo rigorous maintenance and
            sanitation processes before each rental.</p>
        </li>
        <li>
          <h3>24/7 Support</h3>
          <p>Our dedicated customer support team is available around the clock to assist you with any inquiries or
            concerns. Your satisfaction is our commitment.</p>
        </li>
      </AdvantagesList>
    </OurAdvantagesSection>
  )
}

export default OurAdvantages