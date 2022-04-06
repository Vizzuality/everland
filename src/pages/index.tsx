import { Projects } from 'containers/Projects/Screens/Projects'
import Head from 'next/head'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Welcome</title>
    </Head>
    <main>
      <Projects />
    </main>
  </div>
)

export default Home
