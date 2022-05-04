import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const REDIRECT_URL = '/projects'

const Home: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(REDIRECT_URL)
  }, [router])

  return <></>
}

export default Home
