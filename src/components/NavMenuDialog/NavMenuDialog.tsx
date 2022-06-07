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
  MenuContent,
  MenuDialogItem,
  MenuDialogItemPill,
  MenuDialogContentItem,
  MenuClick,
  MenuCollapsableClick,
} from './NavMenuDialog.styles'
import { sortBy } from 'lodash'

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
    const newState = [false, false, false]
    newState[i] = !newState[i]
    setSubmenu(newState)
  }

  const { data: projectsList } = useFetchProjectsList({
    select: (projectList) => sortBy(projectList, 'order'),
  })

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
                <MenuClick href="https://theforestplan.earth" rel="noreferrer" target="_blank">
                  <Text as="a" color="neutral-white" weight="bold">
                    The Forest Plan
                  </Text>
                </MenuClick>
              </MenuDialogItemPill>
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 0)}>
                <MenuCollapsableClick>
                  <Text as="a" color="neutral-white" weight="bold">
                    Projects
                  </Text>
                </MenuCollapsableClick>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[0] && (
                <MenuContent>
                  {projectsList.map((p) => (
                    <MenuDialogContentItem key={p.id} ref={content}>
                      <Link href={`/projects/${p.id}`} passHref>
                        <Text as="a" color="neutral-white" weight="bold">
                          {p.shortTitle}
                        </Text>
                      </Link>
                    </MenuDialogContentItem>
                  ))}
                </MenuContent>
              )}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 1)}>
                <MenuCollapsableClick>
                  <Text as="a" color="neutral-white" weight="bold">
                    REDD+
                  </Text>
                </MenuCollapsableClick>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[1] && (
                <MenuContent>
                  {MENU_LINKS.redd.map((l, i) => (
                    <MenuDialogContentItem key={i}>
                      <a href={l.href}>
                        <Text as="a" color="neutral-white" weight="bold">
                          {l.title}
                        </Text>
                      </a>
                    </MenuDialogContentItem>
                  ))}
                </MenuContent>
              )}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill onClick={(e) => toggleSubmenu(e, 2)}>
                <MenuCollapsableClick>
                  <Text as="a" color="neutral-white" weight="bold">
                    About us
                  </Text>
                </MenuCollapsableClick>
                <IconWrapper>
                  <Icon name="arrow-down-line" color="neutral-white" />
                </IconWrapper>
              </MenuDialogItemPill>
              {submenu[2] && (
                <MenuContent>
                  {MENU_LINKS.about.map((l, i) => (
                    <MenuDialogContentItem key={i}>
                      <a href={l.href}>
                        <Text as="a" color="neutral-white" weight="bold">
                          {l.title}
                        </Text>
                      </a>
                    </MenuDialogContentItem>
                  ))}
                </MenuContent>
              )}
            </MenuDialogItem>

            <MenuDialogItem>
              <MenuDialogItemPill>
                <MenuClick href="https://everland.earth/news" rel="noreferrer" target="_blank">
                  <Text as="a" color="neutral-white" weight="bold">
                    News
                  </Text>
                </MenuClick>
              </MenuDialogItemPill>
            </MenuDialogItem>
          </Nav>
        </NavMenuDialogRoot>
      </Desktop>
    </Dialog>
  )
}
