import React from 'react'
import styled from 'styled-components'

const Wrap = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px;
`

const Logo = styled.h1`
  margin:0;
  color:#4caf50;
  font-size:20px;
`

const Header: React.FC = () => {
  return (
    <Wrap>
      <Logo>WalkCal</Logo>
    </Wrap>
  )
}

export default Header
