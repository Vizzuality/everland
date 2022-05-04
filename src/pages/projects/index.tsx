import Head from 'next/head'
import { ProjectsHome } from 'containers/Projects/Screens/ProjectsHome'
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
