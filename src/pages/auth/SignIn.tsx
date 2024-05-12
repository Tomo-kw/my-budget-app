import { SignItem } from '../../components/item/SignItem'
import { useSignIn } from '../../hooks/useSignIn'
// ______________________________________________________
//

type Props = {
  email: ReturnType<typeof useSignIn>['email']
  handleEmailChange: ReturnType<typeof useSignIn>['handleEmailChange']
  handlePasswordChange: ReturnType<typeof useSignIn>['handlePasswordChange']
  handleSubmit: ReturnType<typeof useSignIn>['handleSubmit']
  password: ReturnType<typeof useSignIn>['password']
}
// ______________________________________________________
//
const Component = (props: Props) => (
  <SignItem
    currentColor="green.500"
    currentLabel="SIGN IN"
    email={props.email}
    handleEmailChange={props.handleEmailChange}
    handlePasswordChange={props.handlePasswordChange}
    handleSubmit={props.handleSubmit}
    password={props.password}
    toggleColor="red.500"
    toggleLabel="SIGN UP"
    url="/signup"
  />
)
// ______________________________________________________
//

const Container: React.FC = () => {
  const { email, handleEmailChange, handlePasswordChange, handleSubmit, password } = useSignIn()

  return (
    <Component
      email={email}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      password={password}
    />
  )
}
// ______________________________________________________
//
export const SignIn = Container
