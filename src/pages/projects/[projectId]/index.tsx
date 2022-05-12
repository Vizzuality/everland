import Head from 'next/head'
import { Project } from 'containers/Projects/Screens/Project'

const ProjectDetail: React.FC = () => (
  <div>
    <Head>
      <title>Project Detail</title>
    </Head>
    <main>
      <Project />
    </main>
  </div>
)

export default ProjectDetail
