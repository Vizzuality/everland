import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import Link from 'next/link'
import { useState } from 'react'
import { ProjectDetail } from 'types/Project'
import { SECTION_NAME } from '../../constants'
import { SummaryDialog } from '../SummaryDialog'
import {
  NavbarRoot,
  Nav,
  NavContainer,
  Footer,
  FooterContainer,
  FooterColumn,
  FooterIcon,
  FooterItem,
  SectionLink,
  Desktop,
  Mobile,
  MobileNav,
  NavItem,
} from './Navbar.styles'

export type NavbarSection = {
  name: SECTION_NAME
  label: string
}

export type NavbarProps = {
  sections: NavbarSection[]
  activeSection: SECTION_NAME
  project: ProjectDetail
}

export const Navbar = ({ sections, project, activeSection }: NavbarProps) => {
  const [isSummaryDialogOpen, setIsSummaryDialogOpen] = useState(false)
  return (
    <NavbarRoot>
      <Mobile>
        <MobileNav>
          <NavItem as="button" onClick={() => setIsSummaryDialogOpen(true)}>
            <Icon name="home" />
            <Text align="center" size="subtitle4">
              Summary
            </Text>
          </NavItem>

          <Link href={'#media'} passHref>
            <NavItem isActive={activeSection === 'media'}>
              <Icon name="home" />
              <Text align="center" size="subtitle4">
                Media
              </Text>
            </NavItem>
          </Link>

          <Link href={'#intervention-model'} passHref>
            <NavItem isActive={activeSection === 'intervention-model'}>
              <Icon name="home" />
              <Text align="center" size="subtitle4">
                Intervention model
              </Text>
            </NavItem>
          </Link>

          <Link href={'#impact'} passHref>
            <NavItem isActive={activeSection === 'impact'}>
              <Icon name="home" />
              <Text align="center" size="subtitle4">
                Impact
              </Text>
            </NavItem>
          </Link>
        </MobileNav>
      </Mobile>

      <Desktop>
        <NavContainer>
          <Nav>
            {sections.map(({ name, label }) => (
              <Link key={name} href={`#${name}`} passHref>
                <SectionLink active={name === activeSection}>
                  <Text size="caption1">{label}</Text>
                </SectionLink>
              </Link>
            ))}
          </Nav>
        </NavContainer>
        <Footer>
          <FooterContainer>
            <FooterColumn>
              <FooterItem>
                <Text family="secondary" color="primary-jasper-default">
                  Key people:
                </Text>
                <Text family="secondary" color="primary-tuna-default">
                  {project.keyPeople}
                </Text>
              </FooterItem>
              <FooterItem>
                <Text family="secondary" color="primary-jasper-default">
                  Wildlife:
                </Text>
                <Text family="secondary" color="primary-tuna-default">
                  {project.wildLife}
                </Text>
              </FooterItem>
            </FooterColumn>
            <FooterColumn>
              <FooterItem>
                <FooterIcon name="land" />
                <Text family="secondary" color="primary-tuna-default">
                  {project.protectedArea.value.toLocaleString()} {project.protectedArea.unit} of
                  tropical dry broadleaf forest protected
                </Text>
              </FooterItem>
              <FooterItem>
                <FooterIcon name="world" />
                <Text family="secondary" color="primary-tuna-default">
                  {project.co2Avoided.value.toLocaleString()} {project.co2Avoided.unit} emissions
                  avoided to date
                </Text>
              </FooterItem>
            </FooterColumn>
            <FooterColumn>
              <FooterItem>
                <Text family="secondary" color="primary-jasper-default">
                  Developer:
                </Text>
                <Text family="secondary" color="primary-tuna-default">
                  {project.developer}
                </Text>
              </FooterItem>
              <FooterItem>
                <Text family="secondary" color="primary-jasper-default">
                  Standards:
                </Text>
                <Text family="secondary" color="primary-tuna-default">
                  {project.standards}
                </Text>
              </FooterItem>
            </FooterColumn>
          </FooterContainer>
        </Footer>
      </Desktop>

      <SummaryDialog
        open={isSummaryDialogOpen}
        onOpenChange={setIsSummaryDialogOpen}
        project={project}
      />
    </NavbarRoot>
  )
}
