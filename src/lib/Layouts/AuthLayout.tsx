import styled from "styled-components";
import { colors } from "../Theme";
import { Button } from "../../components/Buttons";

type AuthLayoutProps = {
  children: React.ReactNode;
  buttonText: string;
  linkText: string;
  link?: string;
};

const AuthContainer = styled.div`
  h1 {
    color: ${colors.primary};
    font-size: 4rem;
  }

  max-width: 650px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  form {
    padding: 10px;
    width: 85%;
  }
`;

export const AuthLayout = ({buttonText, link, linkText, children}:AuthLayoutProps) => {
  return (
    <AuthContainer>
      <h1>BYAL</h1>
      <form action={()=> console.log('working')}>
        {children}
        <br/><br/>
        <Button submit>
          {buttonText}
        </Button>

        <br/><br/>
        <Button 
         variant="link" 
         onClick={()=> console.log('liiiiiink')}
         linewidth='100px'
         >
          <a>{linkText}</a>
        </Button>
      </form>
    </AuthContainer>
  )
};
