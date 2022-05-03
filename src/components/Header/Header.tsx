import * as everlandLogo from '../../../public/images/common/logo.svg'

import { HeaderContent, HeaderRoot } from './Header.styles'

import { Container } from 'containers/components/Container/Container'
import Image from 'next/image'
import { Logo } from 'components/Logo'
import React from 'react'
import { Text } from 'components/Text'

export const Header = () => {
  return (
    <HeaderRoot>
      <Container>
        <HeaderContent>
          <Logo>
            <Image src={everlandLogo} alt="Logo" />
          </Logo>
          <nav>
            <Text color="neutral-white">PROJECT</Text>
            <Text color="neutral-white">CONTACT US</Text>
            <Text color="neutral-white">ABOUT US</Text>
          </nav>
        </HeaderContent>
      </Container>
    </HeaderRoot>
  )
}
