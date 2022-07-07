import { Alert, Box, Collapse, IconButton } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { IoIosClose } from "react-icons/io";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Notification: FC = () => {
  const { message } = useTypedSelector((state) => state.user);

  const [open, setOpen] = useState(!!message);

  useEffect(() => {
    setOpen(!!message);
  }, [message]);

  return ReactDOM.createPortal(
    <Container>
      <Box
        sx={{
          margin: "0px 20px",
        }}
      >
        <Collapse in={!!message && open}>
          <Alert
            severity="error"
            style={{ alignItems: "center" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IoIosClose fontSize="1.8rem" />
              </IconButton>
            }
          >
            {message !== null &&
              message.map((mess) => <h4 key={mess}>{mess}</h4>)}
          </Alert>
        </Collapse>
      </Box>
    </Container>,
    document.body
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 20px;
`;

export default Notification;
