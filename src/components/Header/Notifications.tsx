import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { RiNotification2Fill, RiUser2Fill } from 'react-icons/ri'

function Notifications() {
  return (
    <HStack spacing='4' mx='8' pr='8' py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>

    <Icon as={RiNotification2Fill} fontSize={20} />
    <Icon as={RiUser2Fill} fontSize={20} />
    </HStack>
  )
}

export default Notifications