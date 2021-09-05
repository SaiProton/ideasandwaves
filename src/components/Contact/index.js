import {
  OverlayContainer,
  ContactContainer,
  ContactMain,
  ContactForm,
  ContactMisc,
  ContactPicture,
  ContactHeader,
  HeaderText,
  CloseContainer,
  FormSubmit
} from './ContactElements'

import { EntryBox } from './ContactConstructions'
import { FaTimes } from 'react-icons/fa'

const Contact = ({ activated, toggle }) => {
  return (
    <OverlayContainer activated={activated}>
      <ContactContainer>
        <ContactHeader>
          <HeaderText>
            <h1>Contact Us</h1>
          </HeaderText>
          <CloseContainer>
            <FaTimes onClick={toggle}/>
          </CloseContainer>
        </ContactHeader>
        <ContactMain>
          {/* TODO: Change form submission to server-side emailing rather than mailto */}
          <ContactForm action='mailto:contact@ideasandwaves.com' method='post' encType='text/plain'>
            <EntryBox name='subject' label='Subject' rows='1'/>
            <EntryBox name='body' label='Message' rows='10'/>
            <FormSubmit type='submit' value='Send Message'/>
          </ContactForm>
          {/* TODO: Put phone number, email in contactmisc */}
          <ContactMisc>
            <ContactPicture />
          </ContactMisc>
        </ContactMain>
      </ContactContainer>
    </OverlayContainer>
  )
}

export default Contact