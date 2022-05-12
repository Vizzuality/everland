import Head from 'next/head'
import { ProjectsList } from 'containers/Projects/Screens/ProjectsList'
import React from 'react'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Projects</title>
    </Head>
    <main>
      <ProjectsList />
    </main>
  </div>
)

export default Home
