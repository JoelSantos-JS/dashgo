import React from 'react'
import {Flex , Text ,Input , Icon , HStack, Box, Avatar, IconButton, useBreakpointValue} from '@chakra-ui/react'

import Profile from './Header/Profile'
import Notifications from './Header/Notifications'
import { RiMenuLine, RiSearch2Line } from 'react-icons/ri'
import Logo from './Header/Logo'
import Search from './Header/Search'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'

function Header() {
  const {onOpen} = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base:false , 
    lg: true
  })


  return (
   <Flex w='100%' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'>
      {!isWideVersion && (

        <IconButton aria-label='Open' icon={<Icon as={RiMenuLine} />}  mr='2' fontSize='24' variant='unstyled' onClick={onOpen}>

        </IconButton>
      )}



     <Logo/>
     <Search/>

   
  
     <Flex align='center' ml='auto'>
        <Notifications/>
        <Profile/>

        </Flex>
   </Flex>
  )
}

export default Header