import { Alert, Box, Collapse, IconButton } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

const NotificationError: FC = () => {
  const { error } = useTypedSelector((state) => state.user);

  const [open, setOpen] = useState(!!error);

  useEffect(() => {
    setOpen(!!error);
  }, [error]);

  return ReactDOM.createPortal(
    <Container>
      <Box
        sx={{
          margin: "0px 20px",
        }}
      >
        <Collapse in={!!error && open}>
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
            {error !== null && error.map((err) => <h4 key={err}>{err}</h4>)}
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

export default NotificationError;
