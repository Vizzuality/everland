import { Text } from 'components/Text'
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
}

export const Navbar = ({ sections, activeSection }: NavbarProps) => {
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
                [...]
              </Text>
            </FooterItem>
            <FooterItem>
              <Text family="secondary" color="primary-jasper-default">
                Wildlife:
              </Text>
              <Text family="secondary" color="primary-tuna-default">
                [...]
              </Text>
            </FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterItem>
              <FooterIcon name="land" />
              <Text family="secondary" color="primary-tuna-default">
                820,000 ha of tropical dry broadleaf forest protected
              </Text>
            </FooterItem>
            <FooterItem>
              <FooterIcon name="world" />
              <Text family="secondary" color="primary-tuna-default">
                13,736,390 tCO2e emissions avoided to date
              </Text>
            </FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterItem>
              <Text family="secondary" color="primary-jasper-default">
                Developer:
              </Text>
              <Text family="secondary" color="primary-tuna-default">
                Wildlife Conservation Society
              </Text>
            </FooterItem>
            <FooterItem>
              <Text family="secondary" color="primary-jasper-default">
                Standards:
              </Text>
              <Text family="secondary" color="primary-tuna-default">
                VCS, CCB
              </Text>
            </FooterItem>
          </FooterColumn>
        </FooterContainer>
      </Footer>
    </NavbarRoot>
  )
}
