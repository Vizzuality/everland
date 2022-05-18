import { Dialog } from 'components/Dialog'
import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { ProjectDetail } from 'types/Project'
import {
  Footer,
  FooterContainer,
  FooterColumn,
  FooterItem,
  FooterIcon,
} from '../Navbar/Navbar.styles'
import { Button, Hr, SummaryDialogRoot } from './SummaryDialog.styles'

type SummaryDialogProps = {
  open: boolean
  onOpenChange: (isOpen: boolean) => void
  project: ProjectDetail
}

export const SummaryDialog = ({ project, ...rest }: SummaryDialogProps) => {
  return (
    <Dialog
      fullscreen
      aria-label="Project summary dialog"
      {...rest}
      css={{ backgroundColor: '$primary-jasper-500' }}
    >
      <SummaryDialogRoot>
        <FooterItem>
          <Text weight="bold" family="secondary" size="caption1" color="neutral-dark-grey">
            Key people:
          </Text>
          <Text family="secondary" color="neutral-white">
            {project.keyPeople}
          </Text>
        </FooterItem>

        <Spacer direction="column" space="2" />

        <FooterItem>
          <Text weight="bold" family="secondary" size="caption1" color="neutral-dark-grey">
            Wildlife:
          </Text>
          <Text family="secondary" color="neutral-white">
            {project.wildLife}
          </Text>
        </FooterItem>

        <Spacer direction="column" space="5" />

        <Hr />

        <Spacer direction="column" space="5" />

        <FooterItem>
          <Icon name="land" color="primary-tuna-default" />

          <Spacer space="6" />

          <Text family="secondary" color="neutral-white">
            {project.protectedArea.value.toLocaleString()} {project.protectedArea.unit} of tropical
            dry broadleaf forest protected
          </Text>
        </FooterItem>

        <Spacer direction="column" space="4" />

        <FooterItem>
          <Icon name="world" color="primary-tuna-default" />

          <Spacer space="6" />

          <Text family="secondary" color="neutral-white">
            {project.co2Avoided.value.toLocaleString()} {project.co2Avoided.unit} emissions avoided
            to date
          </Text>
        </FooterItem>

        <Spacer direction="column" space="5" />

        <Hr />

        <Spacer direction="column" space="5" />

        <FooterItem>
          <Text weight="bold" family="secondary" color="primary-tuna-default">
            Developer:
          </Text>
          <Text family="secondary" color="neutral-white">
            {project.developer}
          </Text>
        </FooterItem>

        <Spacer direction="column" space="2" />

        <FooterItem>
          <Text weight="bold" family="secondary" color="primary-tuna-default">
            Standards:
          </Text>
          <Text family="secondary" color="neutral-white">
            {project.standards}
          </Text>
        </FooterItem>

        <Spacer direction="column" space="7" />

        <Button onClick={() => rest.onOpenChange(false)}>
          <Text size="caption2" color="primary-tuna-default">
            CLOSE
          </Text>
        </Button>
      </SummaryDialogRoot>
    </Dialog>
  )
}
