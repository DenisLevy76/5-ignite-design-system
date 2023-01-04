import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  color: '$gray100',
  background: '$ignite500',
  padding: '$2',
})

export const App = () => {
  return <Button>Hello world</Button>
}
