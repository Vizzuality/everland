import { Text } from 'components/Text'
import { ProjectDetail } from 'hooks/fetchProjectDetail'
import Link from 'next/link'
import { SECTION_NAME } from '../../constants'
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
  return (
    <NavbarRoot>
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
    </NavbarRoot>
  )
}
