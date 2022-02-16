import React from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/react'

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Button size="lg" onClick={() => toggleColorMode()}>
        Toggle Mode
      </Button>
    </div>
  )
}
