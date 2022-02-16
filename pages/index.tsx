import React, { useCallback, useMemo, useState } from 'react'
import Router from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'

// Components

import LoginForm from '../shared/components/LoginForm'
import SignupForm from '../shared/components/SignupForm'
import Toggle from '../shared/components/Toggle'

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState('Login')
  const [testText, setTestText] = useState('')
  const isLogin = currentTab === 'Login'

  const onClickTab = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // setCurrentTab(event.target.value)
    },
    [currentTab]
  )

  const onChangeText = useCallback(
    e => {
      console.log('e: ', e)
      setTestText(e.target.value)
    },
    [testText]
  )

  const count = useMemo(() => {
    return testText.length
  }, [testText])

  return (
    <div className={styles.container}>
      <Flex width="full" align="center" justifyContent="center">
        <Box
        // background={'rgba(255,255,255,1)'}
        >
          <Box textAlign="center">
            <Box
              p={2}
              maxWidth="500px"
              borderWidth={1}
              borderRadius={8}
              boxShadow="lg"
            >
              <Tabs>
                <TabList>
                  <Tab value={'Login'} onClick={onClickTab}>
                    Login
                  </Tab>
                  <Tab value={'Singup'} onClick={onClickTab}>
                    Singup
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <LoginForm />
                  </TabPanel>
                  <TabPanel>
                    <SignupForm />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Home
