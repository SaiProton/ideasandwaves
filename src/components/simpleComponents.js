import styled from 'styled-components'

export const BlueButton = styled.button`
  border-radius: 100px;
  padding: 0.4rem 1rem;

  font-weight: bold;
  border: none;
  outline: none;
  color: #ffffff;
    
  background: #35BAED;
    
  transition: 0.1s ease-out;
    
  &:hover {
    color: #ffffff;
    background: #2a8eb6;
    transition: 0.1s ease-out;
    cursor: pointer;
  }
`