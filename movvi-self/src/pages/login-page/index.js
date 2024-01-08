import { useSelector } from "react-redux";
import SignInForm from "./components/sign-in";
import SignUpForm from "./components/sign-up";

const LoginPage = () => {
  const { isSignUpStatus } = useSelector((state) => state.user);

  return <>{isSignUpStatus ? <SignInForm /> : <SignUpForm />}</>;
};

export default LoginPage;
