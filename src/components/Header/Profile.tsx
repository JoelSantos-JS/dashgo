import { Avatar, Box, Flex, HStack, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { RiNotification2Fill, RiUser2Fill } from 'react-icons/ri'

function Profile() {
  const isWideVersion = useBreakpointValue({
    base:false , 
    lg: true
  })


  return (
    


    <Flex align='center'>
  
        <Box mr='4' textAlign='right'>

 

<Text>Joel Santos</Text>

<Text color='gray.300' fontSize='small'>joel@gmail.com</Text>
          
    
        </Box>
        <Avatar size='md' name='Joel Santos' src='https://github.com/joelsantos-js.png'/>
    </Flex>

    
   
  )
}

export default Profile