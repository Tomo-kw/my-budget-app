import { SignItem } from '../../components/item/SignItem'
import { useSignUp } from '../../hooks/useSignUp'
// ______________________________________________________
//

type Props = {
  email: ReturnType<typeof useSignUp>['email']
  handleEmailChange: ReturnType<typeof useSignUp>['handleEmailChange']
  handlePasswordChange: ReturnType<typeof useSignUp>['handlePasswordChange']
  handleSubmit: ReturnType<typeof useSignUp>['handleSubmit']
  password: ReturnType<typeof useSignUp>['password']
}
// ______________________________________________________
//
const Component = (props: Props) => (
  <SignItem
    currentColor="red.500"
    currentLabel="SIGN UP"
    email={props.email}
    handleEmailChange={props.handleEmailChange}
    handlePasswordChange={props.handlePasswordChange}
    handleSubmit={props.handleSubmit}
    password={props.password}
    toggleColor="green.500"
    toggleLabel="SIGN IN"
    url="/signin"
  />
)
// ______________________________________________________
//

const Container: React.FC = () => {
  const { email, handleEmailChange, handlePasswordChange, handleSubmit, password } = useSignUp()

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
export const SignUp = Container
