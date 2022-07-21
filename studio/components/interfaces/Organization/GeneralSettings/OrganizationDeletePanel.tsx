import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Alert } from '@supabase/ui'

import Panel from 'components/ui/Panel'
import DeleteOrganizationButton from './DeleteOrganizationButton'

import { PageContext } from 'pages/org/[slug]/settings'

const OrganizationDeletePanel = observer(() => {
  const PageState: any = useContext(PageContext)

  if (!PageState.isOrgOwner) return null
  return (
    <Panel
      title={
        <p key="panel-title" className="uppercase">
          Danger Zone
        </p>
      }
    >
      <Panel.Content>
        <Alert
          variant="danger"
          withIcon
          // @ts-ignore
          title={
            <h5 className="text-red-900">
              Deleting this organization will also remove its projects
            </h5>
          }
        >
          <p className="text-red-900">
            Make sure you have made a backup if you want to keep your data
          </p>
          <DeleteOrganizationButton />
        </Alert>
      </Panel.Content>
    </Panel>
  )
})

export default OrganizationDeletePanel