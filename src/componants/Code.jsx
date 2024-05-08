import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../Context/Dataprovider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`;

const Code = () => {
  const { html, setHtml, CSS, setCSS, javascript, setJavascript } =
    useContext(DataContext);

  return (
    <Container>
      <Editor language="HTML" icon="/" color="#FF3C41" value = {html}  onChange = {setHtml}/>
      <Editor  language="CSS" icon="*" color="#0EBEFF"  value = {CSS}  onChange = {setCSS} />
      <Editor language="javaScript" icon="{}" color="#FCD009"  value = {javascript}  onChange = {setJavascript} />
    </Container>
  );
};

export default Code;
