import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { CloseFullscreen, Mode } from "@mui/icons-material";
import { Controlled as ControleEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { ThemeContext } from "@emotion/react";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  color: white;
`;
const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;

  font-weigth: 700;
`;
const Cantainer = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Editor = ({ language, color, icon, value, onChange }) => {
  const [open, setopen] = useState(true);

  const handleChange = (editor, code, value) => {
    onChange(value);
  };

  return (
    <Cantainer style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "black",
            }}
          >
            {icon}
          </Box>

          {language}
        </Heading>
        <CloseFullscreen onClick={() => setopen((prevState) => !prevState)} />
      </Header>

      <ControleEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          // mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Cantainer>
  );
};

export default Editor;
