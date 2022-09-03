import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
    email: string;
    password: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório").email("O formato do e-mail é inválido"),
    password: yup.string().required("A senha é obrigatória"),
})

export default function Home() {
    const { register, handleSubmit, formState, } = useForm({
        resolver: yupResolver(signInFormSchema),
    });
    const { errors } = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert(JSON.stringify({ values }, null, 2));
    }
    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center">
            <Flex
                as="form"
                w="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        label="E-mail"
                        type="email"
                        placeholder='Digite Seu Email'
                        
                        error={errors.email}
                        {...register('email')}
                    />
                    <Input
                        name="password"
                        label="Senha"
                        placeholder='Digite Sua Senha'
                        type="password"
                        error={errors.password}
                        {...register('password')}
                    />

                </Stack>
                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    isLoading={formState.isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}