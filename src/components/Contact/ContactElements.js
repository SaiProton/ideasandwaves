import styled from 'styled-components'

export const OverlayContainer = styled.div`
  display: flex;
  visibility: ${props => props.activated ? 'visible' : 'hidden'};
  opacity: ${props => props.activated ? '1' : '0'};
  transition: 0.2s ease-in-out;
  position: fixed;
  z-index: 10;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  min-height: 700px;
  margin-top: -80px;
  background: #00000099;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  padding: 2rem;
  border-radius: 10px;
  background: #2193b0;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffffff, #87cefa);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ffffff, #87cefa); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media screen and (max-width: 900px) {
    width: 100%;
    border-radius: 0;
  }
`

export const ContactHeader = styled.div`
  height: 10%;
  display: flex;
`

export const HeaderText = styled.div`
  width: 50%;
  font-size: clamp(0.7rem, 2vw, 1rem);
`

export const CloseContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;

  svg {
    cursor: pointer;
    color: black;
    transition: color 0.1s ease-in-out;
  }

  svg:hover {
    color: #192841;
    transition: color 0.1s ease-in-out;
  }
`

export const ContactMain = styled.div`
  height: 80%;
  margin: clamp(0.5rem, 2vw, 2rem);
  display: flex;
`

export const ContactForm = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    width: 75%;
  }

  textarea {
    padding: 0.5rem;
    resize: none;
  }

  @media screen and (max-width: 900px) {
    input {
      width: 100%;
    }
  }  
`

export const FormSubmit = styled.input`
  width: 30%;
  min-width: 120px;
  padding: 0.5rem;

  border-radius: 100px;

    font-weight: bold;
    color: #35BAED;
    border: solid 3px #35BAED;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    
    transition: 0.2s ease-out;
    
    &:hover {
      color: #ffffff;
      background: #35BAED;
      transition: 0.2s ease-out;
      cursor: pointer;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
    }
`

export const ContactMisc = styled.div`
  width: 50%;
  margin-left: 5rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const ContactPicture = styled.img`
  width: 100%;
  height: 100%;
  background: #00000011;
`