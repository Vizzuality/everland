import * as everlandLogo from '../../../public/images/common/logo.svg'

import { HeaderContent, HeaderRoot, Menu, Nav } from './Header.styles'
import React, { ComponentProps, useState } from 'react'

import { Container } from 'containers/components/Container/Container'
import Image from 'next/image'
import { Logo } from 'components/Logo'
import { Text } from 'components/Text'
import Link from 'next/link'
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
          <a href="https://www.everlandmarketing.com/" rel="noreferrer" target="_blank">
            <Logo>
              <Image src={everlandLogo} alt="Logo" />
            </Logo>
          </a>

          <Nav>
            <Link href="/projects" passHref>
              <Text as="a" color="neutral-white">
                PROJECTS
              </Text>
            </Link>
            <a href="https://everland.earth/contact/" rel="noreferrer" target="_blank">
              <Text color="neutral-white">CONTACT US</Text>
            </a>
            <a href="https://everland.earth/who-we-are" rel="noreferrer" target="_blank">
              <Text color="neutral-white">ABOUT US</Text>
            </a>
          </Nav>

          <Menu onClick={toggleMenu}>
            <Icon name="menu" size="8" />
          </Menu>
        </HeaderContent>
      </Container>

      <NavMenuDialog isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </HeaderRoot>
  )
}
