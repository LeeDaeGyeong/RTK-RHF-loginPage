import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .email("이메일 양식이 올바르지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "8글자 이상 입력해주세요")
    .required("비밀번호를 입력해주세요"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 양식이 올바르지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "8글자 이상 입력해주세요")
    .required("비밀번호를 입력해주세요"),
});
