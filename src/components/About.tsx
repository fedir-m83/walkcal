import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  margin:16px;
  padding:16px;
  color:#444;
`

const About: React.FC = () => {
  return (
    <Section>
      <h3>How it works</h3>
      <p>The WalkCal calculator uses MET values to estimate calories burned during walking. This is an estimate and intended for general guidance.</p>
    </Section>
  )
}

export default About
