import styled from "styled-components";
import { device } from "../../Theme";
import { SideBar } from "./components/SideBar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "nav main";  
  grid-template-columns: 20% 80%;

  .main {
    grid-area: main;
  }
  .nav {
    grid-area: nav;
  }

  /////Querys
  @media ${device.mobile} {
    grid-template-areas: 
    "main" 
    "nav";
    grid-template-rows: 1fr 60px;
    grid-template-columns: 100%;
  } 
`;

export const DashboardLayout = ({children}:AuthLayoutProps) => {
  
  return (
    <DashboardContainer>
      <SideBar />
      <main className="main">
        {children}
      </main>
    </DashboardContainer>
  )
};
