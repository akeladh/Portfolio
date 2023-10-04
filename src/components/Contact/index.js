import React from 'react'
import { ContactBody, ContactContainer , Header,ContactMethodBody, InfoCard} from './ContactElements'

import li from '../../imgs/icons/linkedin.svg'
import mail from '../../imgs/icons/Message.svg'

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactBody>
        <Header>Contact Me</Header>
        <ContactMethodBody>
          <InfoCard
            headerText="LinkedIn:"
            iconSrc= {li}
            contentText="https://www.linkedin.com/in/akeladoho"
          />
          <InfoCard
            headerText="Email:"
            iconSrc={mail}
            contentText="akela.doho@gmail.com"
          />
        </ContactMethodBody>
      </ContactBody>
      </ContactContainer>

  )
}

export default Contact