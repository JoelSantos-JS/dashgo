import { Box , Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack ,  } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Input } from '../../components/Form/Input'
import Header from '../../components/Header'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import SideBar from '../../components/SideBar'


type CreateUserFormData = {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }
    
    const signInFormSchema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().required("E-mail é obrigatório").email("O formato do e-mail é inválido"),
        password: yup.string().required("A senha é obrigatória"),
        password_confirmation: yup.string().oneOf([null , yup.ref('password')])
    })



function Usercreate() {

        const {register , handleSubmit , formState , } = useForm({
                resolver: yupResolver(signInFormSchema)
        })

        const {errors} = formState;


        const CreateSubmit:SubmitHandler<CreateUserFormData> = (values)  =>{
                console.log(values)

        }


  return (
    <Box>
        <Header/>

        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >

                <SideBar/>

                <Box as='form' flex='1' onSubmit={handleSubmit(CreateSubmit)} borderRadius={8} bg='gray.800' p={['6' , '8']}>
                   <Heading size='lg' fontWeight='normal'>Criar Usuario</Heading>

                   <Divider my='6' borderColor='gray.700' />

                   <VStack spacing='8'>
                    <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >
                            <Input name='name' placeholder='Nome Completo' error={errors.name} {...register('name')}/>
                            <Input name='email' type='email' placeholder='Email Completo' error={errors.email} {...register('email')}/>

                    </SimpleGrid>
                    <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >
                            <Input name='password' type='password' placeholder='Digite  A Senha' error={errors.password} {...register('password')}/>
                            <Input name='password_Confirmation' type='password' placeholder='Confirme a Senha' error={errors.password_Confirmation} {...register('password_Confirmation')}/>

                    </SimpleGrid>
                   </VStack>
                   <Flex mt='8' justify='flex-end'>
                    <HStack spacing='4'>
                        <Link href='/users'>
                            <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>

                            </Link>
                            <Button bg='pink.500' type='submit' colorScheme='pink'>Criar</Button>
                    </HStack>

                   </Flex>
                </Box>
            </Flex>
    </Box>
  )
}

export default Usercreate