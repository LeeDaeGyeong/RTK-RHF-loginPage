import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const DInput = ({ name, control, label, errors }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        errors[name] ? (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            error
            helperText={errors[name].message}
          />
        ) : (
          <TextField {...field} label={label} variant="outlined" />
        )
      }
    />
  );
};

export default DInput;

{
  /* <TextField {...field} label={label} variant="outlined" /> */
}

// render={({ field }) => {
//   errors[name] ? (
//     <TextField
//       {...field}
//       label={label}
//       variant="outlined"
//       error
//       helperText={errors[name].message}
//     />
//   ) : (
//     <TextField {...field} label={label} variant="outlined" />
//   );
// }}
