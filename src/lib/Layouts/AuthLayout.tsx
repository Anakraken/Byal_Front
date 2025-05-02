import styled from "styled-components";
import { colors } from "../Theme";
import { Button } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

type AuthLayoutProps = {
  children: React.ReactNode;
  buttonText: string;
  linkText: string;
  link?: string;
  onSubmit?: () => void;
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

  .error {
    color: ${colors.error};
    margin-top: 15px;
  }
`;

export const AuthLayout = ({buttonText, link, onSubmit, linkText, children}:AuthLayoutProps) => {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate(`${link}`);
  }
  
  return (
    <AuthContainer>
      <h1>BYAL</h1>
      <form action={onSubmit}>
        {children}
        <br/><br/>
        <Button submit>
          {buttonText}
        </Button>

        {/* <br/><br/>
        <Button 
         variant="link" 
         onClick={handleLink}
         linewidth='100px'
         >
          <a>{linkText}</a>
        </Button> */}
      </form>
    </AuthContainer>
  )
};
