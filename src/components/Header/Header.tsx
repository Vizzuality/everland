import React, { ComponentProps, useState, useEffect } from 'react'

import * as everlandLogo from '../../../public/images/common/logo.svg'
import everlandLogoJasper from '../../../public/images/common/logo-everland-jasper.png'

import { HeaderContent, HeaderRoot, IconMenu, Menu, LoginButton } from './Header.styles'

import { Container } from 'containers/components/Container/Container'
import Image from 'next/image'

import { Text } from 'components/Text'
import { Logo } from 'components/Logo'
import { NavMenu } from 'components/NavMenu'
import { NavMenuDialog } from 'components/NavMenuDialog/NavMenuDialog'

type HeaderOwnProps = ComponentProps<typeof HeaderRoot>

type HeaderProps = HeaderOwnProps

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState(null)
  const scrolledHeader = clientWindowHeight > 30

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderRoot scrolled={scrolledHeader} {...props}>
      <Container>
        <HeaderContent>
          <a href="https://everland.earth" rel="noreferrer" target="_blank">
            <Logo>
              <Image src={scrolledHeader ? everlandLogoJasper : everlandLogo} alt="Logo" />
            </Logo>
          </a>

          <NavMenu scrolledHeader={scrolledHeader} />

          <LoginButton scrolled={scrolledHeader}>
            <a href="https://everland.earth/login">
              <Text
                as="a"
                color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
                weight="bold"
              >
                Login
              </Text>
            </a>
          </LoginButton>

          <Menu onClick={toggleMenu}>
            <IconMenu />
          </Menu>
        </HeaderContent>
      </Container>

      <NavMenuDialog isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </HeaderRoot>
  )
}
