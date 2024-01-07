import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  Typography,
} from "@mui/material";

const SignInForm = () => {
  const onSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={onSignIn}>
          <Typography variant="h4" align="center" gutterBottom>
            로그인
          </Typography>

          <FormControl fullWidth margin="normal">
            <TextField
              label="이메일"
              type="email"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="비밀번호"
              type="password"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button variant="contained" color="primary" type="submit">
              로그인
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
