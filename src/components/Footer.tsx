import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  margin:24px 16px;
  color:#777;
  font-size:14px;
`

const Footer: React.FC = () => {
  return (
    <Foot>
      © 2025 WalkCal.com — <a href="#">Privacy Policy</a>
    </Foot>
  )
}

export default Footer
