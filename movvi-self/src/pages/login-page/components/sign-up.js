import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, FormControl, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../consts/schema";
import DInput from "../../../components/DInput";
import { postUserSignUp } from "../../../api";
import { signUpInputProp } from "./consts/input-map";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSignUp = (inputValue) => {
    const newUserData = {
      name: inputValue.name,
      email: inputValue.email,
      password: inputValue.password,
    };
    dispatch(postUserSignUp(newUserData));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit(onSignUp)}>
          <Typography variant="h4" align="center" gutterBottom>
            회원가입
          </Typography>
          {signUpInputProp.map((el) => (
            <FormControl fullWidth margin="normal">
              <DInput
                name={el.name}
                control={control}
                label={el.label}
                errors={errors}
              />
            </FormControl>
          ))}
          <FormControl fullWidth margin="normal">
            <Button variant="contained" color="primary" type="submit">
              회원가입
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
