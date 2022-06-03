import React, { useState } from 'react'
import Link from 'next/link'

import { useFetchProjectsList } from 'hooks/fetchProjectsList'

import { Text } from 'components/Text'

import { Nav } from './NavMenu.styles'

export const NavMenu = () => {
  const [submenu, setSubmenu] = useState([false, false])

  const { data: projectsList } = useFetchProjectsList()

  return (
    <Nav>
      <div
        onMouseEnter={() => setSubmenu([true, false])}
        onMouseLeave={() => setSubmenu([false, false])}
        style={{ position: 'relative', height: '30px' }}
      >
        <Text as="a" color="neutral-white" weight="bold">
          Projects
        </Text>
        {submenu[0] && (
          <div
            onMouseEnter={() => setSubmenu([true, false])}
            onMouseLeave={() => setSubmenu([false, false])}
            style={{
              background: 'white',
              position: 'absolute',
              padding: '10px',
              width: '150px',
              borderRadius: '4px',
              top: '30px',
              left: '-10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {projectsList.map((p) => (
              <div key={p.id} style={{ marginBottom: '8px' }}>
                <Link href={`/projects/${p.id}`} passHref>
                  <Text as="a" color="primary-jasper-500" weight="bold">
                    {p.title}
                  </Text>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <a href="https://everland.earth/contact/" rel="noreferrer" target="_blank">
        <Text color="neutral-white" weight="bold">
          Contact Us
        </Text>
      </a>

      <div
        onMouseEnter={() => setSubmenu([false, true])}
        onMouseLeave={() => setSubmenu([false, false])}
        style={{ position: 'relative', height: '30px' }}
      >
        <Text color="neutral-white" weight="bold">
          About Us
        </Text>
        {submenu[1] && (
          <div
            onMouseEnter={() => setSubmenu([false, true])}
            onMouseLeave={() => setSubmenu([false, false])}
            style={{
              background: 'white',
              position: 'absolute',
              padding: '10px',
              width: '150px',
              borderRadius: '4px',
              top: '30px',
              left: '-10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <a
              style={{ marginBottom: '8px' }}
              href="https://everland.earth/who-we-are"
              rel="noreferrer"
              target="_blank"
            >
              <Text as="a" color="primary-jasper-500" weight="bold">
                Who We Are
              </Text>
            </a>

            <a
              style={{ marginBottom: '8px' }}
              href="https://everland.earth/what-we-do"
              rel="noreferrer"
              target="_blank"
            >
              <Text as="a" color="primary-jasper-500" weight="bold">
                What We Do
              </Text>
            </a>

            <a
              style={{ marginBottom: '8px' }}
              href="https://everland.earth/our-offer"
              rel="noreferrer"
              target="_blank"
            >
              <Text as="a" color="primary-jasper-500" weight="bold">
                Our Offer
              </Text>
            </a>
          </div>
        )}
      </div>
    </Nav>
  )
}
