import React, { useState } from 'react'
import Link from 'next/link'

import { useFetchProjectsList } from 'hooks/fetchProjectsList'

import { Text } from 'components/Text'
import { Icon } from 'components/Icon'

import { Nav, NavItem, NavDropdown, NavDropdownItem } from './NavMenu.styles'
import { MENU_LINKS } from './constants'

export const NavMenu = ({ scrolledHeader }) => {
  const [submenu, setSubmenu] = useState([false, false, false])

  const { data: projectsList } = useFetchProjectsList()

  return (
    <Nav>
      <NavItem>
        <NavDropdownItem href="https://theforestplan.earth" rel="noreferrer" target="_blank">
          <Text
            as="a"
            color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
            weight="bold"
          >
            The Forest Plan
          </Text>
        </NavDropdownItem>
      </NavItem>

      <NavItem
        onMouseEnter={() => setSubmenu([true, false, false])}
        onMouseLeave={() => setSubmenu([false, false, false])}
      >
        <Text as="a" color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'} weight="bold">
          Projects
        </Text>
        <Icon
          name="arrow-down-line"
          color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
        />
        {submenu[0] && (
          <NavDropdown
            onMouseEnter={() => setSubmenu([true, false, false])}
            onMouseLeave={() => setSubmenu([false, false, false])}
          >
            {projectsList.map((p) => (
              <NavDropdownItem key={p.id}>
                <Link href={`/projects/${p.id}`} passHref>
                  <Text as="a" color="primary-jasper-500" weight="bold">
                    {p.shortTitle}
                  </Text>
                </Link>
              </NavDropdownItem>
            ))}
          </NavDropdown>
        )}
      </NavItem>

      <NavItem
        onMouseEnter={() => setSubmenu([false, true, false])}
        onMouseLeave={() => setSubmenu([false, false, false])}
      >
        <Text color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'} weight="bold">
          REDD+
        </Text>
        <Icon
          name="arrow-down-line"
          color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
        />
        {submenu[1] && (
          <NavDropdown
            onMouseEnter={() => setSubmenu([false, true, false])}
            onMouseLeave={() => setSubmenu([false, false, false])}
          >
            {MENU_LINKS.redd.map((l, i) => (
              <NavDropdownItem key={i} href={l.href} rel="noreferrer" target="_blank">
                <Text as="a" color="primary-jasper-500" weight="bold">
                  {l.title}
                </Text>
              </NavDropdownItem>
            ))}
          </NavDropdown>
        )}
      </NavItem>

      <NavItem
        onMouseEnter={() => setSubmenu([false, false, true])}
        onMouseLeave={() => setSubmenu([false, false, false])}
      >
        <Text color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'} weight="bold">
          About Us
        </Text>
        <Icon
          name="arrow-down-line"
          color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
        />
        {submenu[2] && (
          <NavDropdown
            onMouseEnter={() => setSubmenu([false, false, true])}
            onMouseLeave={() => setSubmenu([false, false, false])}
          >
            {MENU_LINKS.about.map((l, i) => (
              <NavDropdownItem key={i} href={l.href} rel="noreferrer" target="_blank">
                <Text as="a" color="primary-jasper-500" weight="bold">
                  {l.title}
                </Text>
              </NavDropdownItem>
            ))}
          </NavDropdown>
        )}
      </NavItem>

      <NavItem>
        <NavDropdownItem href="https://everland.earth/news" rel="noreferrer" target="_blank">
          <Text
            as="a"
            color={scrolledHeader ? 'primary-jasper-500' : 'neutral-white'}
            weight="bold"
          >
            News
          </Text>
        </NavDropdownItem>
      </NavItem>
    </Nav>
  )
}
