import React, { useRef, useState } from 'react'
import { Dialog } from 'components/Dialog'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import Link from 'next/link'
import {
  CloseButton,
  Desktop,
  IconWrapper,
  Nav,
  NavMenuDialogRoot,
  MenuDialogItem,
  MenuDialogItemPill,
  MenuDialogContentItem,
} from './NavMenuDialog.styles'

import { MENU_LINKS } from './constants'

import { useFetchProjectsList } from 'hooks/fetchProjectsList'

type NavMenuDialogProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const NavMenuDialog = ({ isOpen, onOpenChange }: NavMenuDialogProps) => {
  const [submenu, setSubmenu] = useState([false, false, false])
  const content = useRef(null)

  const toggleSubmenu = (e, i) => {
    e.preventDefault()
    const newState = [...submenu]
    newState[i] = !newState[i]
    setSubmenu(newState)
  }

  const { data: projectsList } = useFetchProjectsList()

  return (
    <Dialog
      fullscreen
      aria-label="Menu"
      open={isOpen}
      onOpenChange={onOpenChange}
      css={{ backgroundColor: '$primary-jasper-500' }}
    >
      <Desktop>
        <NavMenuDialogRoot>
          <CloseButton
            aria-label="Close"
            onClick={() => {
              onOpenChange(false)
              setSubmenu([false, false, false])
            }}
          >
            <Icon name="close" />
          </CloseButton>

          <Nav>
            <MenuDialogItem>
              <MenuDialogItemPill>
                <a href="https://theforestplan.earth" rel="noreferrer" target="_blank">
                  <Text as="a" color="neutral-white" weight="bold">
                    The Forest Plan
                  </Text>
                </a>
              </MenuDialogItemPill>
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 0)}>
                <Text as="a" color="neutral-white" weight="bold">
                  Projects
                </Text>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[0] &&
                projectsList.map((p) => (
                  <MenuDialogContentItem key={p.id} ref={content}>
                    <Link href={`/projects/${p.id}`} passHref>
                      <Text as="a" color="neutral-white" weight="bold">
                        {p.shortTitle}
                      </Text>
                    </Link>
                  </MenuDialogContentItem>
                ))}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 1)}>
                <Text as="a" color="neutral-white" weight="bold">
                  REDD+
                </Text>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[1] &&
                MENU_LINKS.redd.map((l, i) => (
                  <MenuDialogContentItem key={i}>
                    <a href={l.href}>
                      <Text as="a" color="neutral-white" weight="bold">
                        {l.title}
                      </Text>
                    </a>
                  </MenuDialogContentItem>
                ))}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 2)}>
                <Text as="a" color="neutral-white" weight="bold">
                  About us
                </Text>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[2] &&
                MENU_LINKS.about.map((l, i) => (
                  <MenuDialogContentItem key={i}>
                    <a href={l.href}>
                      <Text as="a" color="neutral-white" weight="bold">
                        {l.title}
                      </Text>
                    </a>
                  </MenuDialogContentItem>
                ))}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill>
                <a href="https://everland.earth/news" rel="noreferrer" target="_blank">
                  <Text as="a" color="neutral-white" weight="bold">
                    News
                  </Text>
                </a>
              </MenuDialogItemPill>
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill>
                <a href="https://everland.earth/login" rel="noreferrer" target="_blank">
                  <Text as="a" color="neutral-white" weight="bold">
                    Login
                  </Text>
                </a>
              </MenuDialogItemPill>
            </MenuDialogItem>
          </Nav>
        </NavMenuDialogRoot>
      </Desktop>
    </Dialog>
  )
}
