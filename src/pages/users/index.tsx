import { Box , Button, Flex, Heading,Icon, Table, Text,Thead, Tr , Th , Checkbox, Tbody, Td, useBreakpointValue} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import SideBar from '../../components/SideBar'

function UserList() {
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
                            <Heading size='lg' fontWeight='normal'>Usuarios</Heading>
                              <Link href='users/create' passHref>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiAddLine} fontSize={20} />} > Criar Novo </Button>
                            </Link>
                    </Flex>

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
                      <Tr>
                        <Td px={['4','4' ,'8']}>
                        <Checkbox colorScheme='pink'/>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>Joel Santos</Text>
                            <Text fontSize='small' color='gray.300'>joel10@gmail.com</Text>
                          </Box>
                        </Td>
                      { isWideVersion && <Td>
                          04 De Abril 2022
                        </Td>}
                        <Td>
                        <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiPencilLine} fontSize={16}/>} > {isWideVersion ? 'Editar' : ''} </Button>
                        </Td> 
                      </Tr>
                    </Tbody>

                  </Table>
                  <Pagination/>
                </Box>
            </Flex>
    </Box>
  )
}

export default UserList