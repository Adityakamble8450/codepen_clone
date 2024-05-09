import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 13vh;
  color: white;
`;

const Header = () => {
  const logo =
    "https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png";
  const githubUrl = "https://github.com/Adityakamble8450/codepen_clone.git";
  const languageUrl = "https://aditya-portfolio-chi.vercel.app/";

  return (
    <div>
      <Container>
        <Toolbar>
          <img className="h-[70px]" src={logo} alt="" />

          <div style={{ flexGrow: 1 }}></div>

          <div>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ color: "white", marginRight: "10px" }} />
            </a>
            <a href={languageUrl} target="_blank" rel="noopener noreferrer">
              <LanguageIcon style={{ color: "white" }} />
            </a>
          </div>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Header;
