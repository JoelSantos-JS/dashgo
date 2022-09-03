import { Flex , Icon, Input} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

function Search() {
  // const [search , setSearch] = useState('')

  const searchInputRef= useRef<HTMLInputElement>(null)


  console.log()


  // const handleSearch = (e) => {
  //   setSearch(e.target.value)
 
  // } 

  


  return (
    <Flex as='label' flex='1' py='4' px='8' ml='6' maxWidth={400} borderRadius='full' alignSelf='center' color='gray.200' bg='gray.800'>
    <Input color='gray.50' ref={searchInputRef}  variant='unstyled' px='4' mr='4' placeholder='Buscar na Plataforma' _placeholder={{color: 'gray.400'}}/>
    <Icon as={RiSearch2Line} fontSize= {20} />
</Flex>

  )
}

export default Search