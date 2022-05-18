import { Dialog } from 'components/Dialog'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import Link from 'next/link'
import { CloseButton, Desktop, Nav, NavMenuDialogRoot } from './NavMenuDialog.styles'

type NavMenuDialogProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const NavMenuDialog = ({ isOpen, onOpenChange }: NavMenuDialogProps) => {
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
          <CloseButton aria-label="Close" onClick={() => onOpenChange(false)}>
            <Icon name="close" />
          </CloseButton>
          <Nav>
            <Link href="/projects" passHref>
              <Text as="a" size="h1" color="neutral-light-beige">
                PROJECTS
              </Text>
            </Link>
            <Text size="h1" color="neutral-light-beige">
              CONTACT US
            </Text>
            <Text size="h1" color="neutral-light-beige">
              ABOUT US
            </Text>
          </Nav>
        </NavMenuDialogRoot>
      </Desktop>
    </Dialog>
  )
}