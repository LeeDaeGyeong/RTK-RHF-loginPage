import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, FormControl, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../../consts/schema";
import DInput from "../../../components/DInput";
import { signInInputProp } from "./consts/input-map";
import { postUserSignIn } from "../../../api";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSignIn = async (inputValue) => {
    const userInfo = {
      email: inputValue.email,
      password: inputValue.password,
    };
    const res = await dispatch(postUserSignIn(userInfo));
    alert(`${res}님 안녕하세용`);
    navigate("/home");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit(onSignIn)}>
          <Typography variant="h4" align="center" gutterBottom>
            로그인
          </Typography>
          {signInInputProp.map((el) => (
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
              로그인
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
