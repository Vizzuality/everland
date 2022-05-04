import * as everlandLogo from '../../../public/images/common/logo.svg'

import { HeaderContent, HeaderRoot } from './Header.styles'
import React, { ComponentProps } from 'react'

import { Container } from 'containers/components/Container/Container'
import Image from 'next/image'
import { Logo } from 'components/Logo'
import { Text } from 'components/Text'

type HeaderOwnProps = ComponentProps<typeof HeaderRoot>

type HeaderProps = HeaderOwnProps

export const Header = (props: HeaderProps) => {
  return (
    <HeaderRoot {...props}>
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
