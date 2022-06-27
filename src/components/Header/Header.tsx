import React, { ComponentProps, useState, useEffect } from 'react'

import { HeaderContent, HeaderRoot, IconMenu, LogoImage, Menu } from './Header.styles'

import { Container } from 'containers/components/Container/Container'

import { Logo } from 'components/Logo'
import { NavMenu } from 'components/NavMenu'
import { NavMenuDialog } from 'components/NavMenuDialog/NavMenuDialog'

type HeaderOwnProps = ComponentProps<typeof HeaderRoot>

type HeaderProps = HeaderOwnProps

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState(null)
  const scrolledHeader = clientWindowHeight > 30

  const LOGO_IMAGE = scrolledHeader
    ? '/images/common/logo-everland-jasper.png'
    : '/images/common/logo.svg'

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
    <HeaderRoot scrolled={scrolledHeader} fixed={!isMenuOpen} {...props}>
      <Container>
        <HeaderContent>
          <a href="https://everland.earth" rel="noreferrer" target="_blank">
            <Logo>
              <LogoImage src={LOGO_IMAGE} alt="Logo" />
            </Logo>
          </a>

          <NavMenu scrolledHeader={scrolledHeader} />

          <Menu onClick={toggleMenu}>
            <IconMenu scrolled={scrolledHeader} />
          </Menu>
        </HeaderContent>
      </Container>

      <NavMenuDialog isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </HeaderRoot>
  )
}
