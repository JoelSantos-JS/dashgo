import { Box , Icon, Link, Stack, Text} from '@chakra-ui/react'
import React from 'react'



interface Props {
    title: string
    children?: React.ReactNode
}

function NavSection({title ,  children}: Props) {
  return (
    <Box>
                <Text  fontWeight='bold' color='gray.400' fontStyle='small'>
                    {title}
                </Text>

                <Stack spacing='4' mt='8' align='stretch'>
                        {children}
                </Stack>
            </Box>
  )
}

export default NavSection