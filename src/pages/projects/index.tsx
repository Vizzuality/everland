import Head from 'next/head'
import { ProjectsHome } from 'containers/Projects/screens/ProjectsList'
import React from 'react'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Projects</title>
    </Head>
    <main>
      <ProjectsHome />
    </main>
  </div>
)

export default Home
