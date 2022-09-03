import { Box , Text , Stack , Link as ChakraLink , Icon} from '@chakra-ui/react'
import React, { ElementType } from 'react'
import { RiContactsLine, RiDashboard2Line } from 'react-icons/ri'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'

interface Props {
    title: string
    icons: ElementType
    href: string;
}


function NavLink({title,href,icons, ...rest}: Props) {
  return (
    <>
    <ActiveLink href={href}>
    <ChakraLink display='flex' alignItems='center' {...rest} >
    <Icon as={icons} fontSize={20}/>
    <Text ml='4' fontWeight='medium' >{title}</Text>
    </ChakraLink>
    </ActiveLink>

  

    </>
  )
}

export default NavLink