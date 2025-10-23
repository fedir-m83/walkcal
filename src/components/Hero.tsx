import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background:white;
  margin:16px;
  padding:16px;
  border-radius:12px;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
`

const Title = styled.h2`
  margin:0 0 8px 0;
  color:#333;
`

const Sub = styled.p`
  margin:0 0 12px 0;
  color:#666;
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:8px;
`

const Input = styled.input`
  padding:10px;
  border-radius:8px;
  border:1px solid #ddd;
`

const Select = styled.select`
  padding:10px;
  border-radius:8px;
  border:1px solid #ddd;
`

const Button = styled.button`
  margin-top:8px;
  padding:12px;
  border-radius:10px;
  border:none;
  background:#4caf50;
  color:white;
  font-weight:600;
`

const Result = styled.div`
  margin-top:12px;
  background:#e8f5e9;
  padding:10px;
  border-radius:8px;
`

const Hero: React.FC = () => {
  return (
    <Section>
      <Title>Estimate calories burned walking</Title>
      <Sub>Enter your details below and get an instant estimate.</Sub>

      <Form onSubmit={(e)=>e.preventDefault()}>
        <label>
          Weight (kg)
          <Input type="number" placeholder="e.g. 70" />
        </label>

        <label>
          Duration (minutes)
          <Input type="number" placeholder="e.g. 30" />
        </label>

        <label>
          Speed
          <Select defaultValue="3.8">
            <option value="3">Slow (2.5–3 mph)</option>
            <option value="3.8">Moderate (3.5 mph)</option>
            <option value="5">Fast (4–4.5 mph)</option>
            <option value="6.3">Very Fast (5+ mph)</option>
          </Select>
        </label>

        <Button type="submit">Calculate</Button>

        <Result style={{display:'none'}}>Result will appear here</Result>
      </Form>
    </Section>
  )
}

export default Hero
