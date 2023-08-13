import { Container, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ContentContainer = (props: Props) => (
  <Container m={'0 auto'} maxW={'1000px'} p={'30px'} textAlign={'center'}>
    <Stack spacing={'2em'}>{props.children}</Stack>
  </Container>
)
