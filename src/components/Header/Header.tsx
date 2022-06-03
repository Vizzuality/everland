import React, { ComponentProps, useState } from 'react'

import * as everlandLogo from '../../../public/images/common/logo.svg'

import { HeaderContent, HeaderRoot, Menu } from './Header.styles'

import { Container } from 'containers/components/Container/Container'
import Image from 'next/image'

import { Logo } from 'components/Logo'
import { NavMenu } from 'components/NavMenu'
import { Icon } from 'components/Icon'
import { NavMenuDialog } from 'components/NavMenuDialog/NavMenuDialog'

type HeaderOwnProps = ComponentProps<typeof HeaderRoot>

type HeaderProps = HeaderOwnProps

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderRoot {...props}>
      <Container>
        <HeaderContent>
          <a href="https://everland.earth" rel="noreferrer" target="_blank">
            <Logo>
              <Image src={everlandLogo} alt="Logo" />
            </Logo>
          </a>

          <NavMenu />

          <Menu onClick={toggleMenu}>
            <Icon name="menu" size="8" />
          </Menu>
        </HeaderContent>
      </Container>

      <NavMenuDialog isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </HeaderRoot>
  )
}
