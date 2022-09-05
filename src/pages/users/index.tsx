import { Box , Button, Flex, Heading,Icon, Table, Text,Thead, Tr , Th , Checkbox, Tbody, Td, useBreakpointValue, Spinner} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import SideBar from '../../components/SideBar'
import {useQuery} from 'react-query'
import { api } from '../../services/api'
import { useUsers } from '../../services/hooks/useUsers'


function UserList() {
    const {data , isLoading , isFetching, error} = useUsers()


    const isWideVersion = useBreakpointValue({
      base: false,
      lg:true
    })



  return (
    <Box>
        <Header/>

        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >

                <SideBar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                            <Heading size='lg' fontWeight='normal'>Usuarios
                            
    {!isLoading && isFetching && <Spinner size='sm' color='gray.400' ml='4'/>}                            
    </Heading>
                              <Link href='users/create' passHref>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiAddLine} fontSize={20} />} > Criar Novo </Button>
                            </Link>
                    </Flex>

                  {isLoading ? (<Flex justify='center'>
                    <Spinner/>
                  </Flex>) : error ?(
                    <Flex justify='center'>
                      <Text>Falha de obter os dados do usuarios</Text>
                    </Flex>
                  ) : (
                    <>
                      <Table colorScheme='whiteAlpha'>
                    <Thead>
                      <Tr>
                        <Th px={['4','4' ,'8']}>
                          <Checkbox colorScheme='pink'/>
                        </Th>
                        { isWideVersion &&
                          <Th>
                            Usuarios
                          </Th>
                          }
                          <Th>
                            Data de cadastro
                          </Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                     {data.map((user , i) => {
                      return (
                        <>
                         <Tr key={i}>
                        <Td px={['4','4' ,'8']}>
                        <Checkbox colorScheme='pink'/>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='small' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                      { isWideVersion && <Td >
                          {user.createdAt}
                        </Td>}
                        <Td>
                        <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiPencilLine} fontSize={16}/>} > {isWideVersion ? 'Editar' : ''} </Button>
                        </Td> 
                      </Tr>
                        </>
                      )
                     }) }
                    </Tbody>

                  </Table>
                  <Pagination/>

                    </>

                  )}
                </Box>
            </Flex>
    </Box>
  )
}

export default UserList