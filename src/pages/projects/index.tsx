import React from 'react'
import Head from 'next/head'
import { ProjectsList } from 'containers/Projects/Screens/ProjectsList'

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
