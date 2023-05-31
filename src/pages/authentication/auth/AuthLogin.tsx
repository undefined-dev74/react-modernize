import { Formik } from "formik";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as Yup from "yup";
import { useLogin } from "@/queries/authQueries";
import { LoginCredentials } from "@/api/authApi";
import { useDispatch } from "react-redux";
import { enableLoading } from "@/redux/slices/loadSlice";
import { useNavigate } from "react-router-dom";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const loginMutation = useLogin();
  const router = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const status = await loginMutation.mutateAsync(credentials);
      // Login successful, perform any necessary actions
      localStorage.setItem("token", status.data.authToken);
      console.log(status);
      router("/dashboard");
    } catch (error) {
      // Handle login error
    }
  };
  dispatch(enableLoading(loginMutation.isLoading));
  console.log("Login Muatation", loginMutation);
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <Formik
        initialValues={{
          email: "customercare@teamcomputers.com",
          password: "User@123",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(15).required("Password is required"),
        })}
        onSubmit={handleLogin}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{
                marginTop: 2,
                marginBottom: 2,
                // customInput,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address / Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{
                marginTop: 2,
                marginBottom: 2,
                // ...theme.typography.customInput,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                // type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
            >
              {/* 
              
              // Commenting remeber me code since we are not storing any passoword yet
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="Remember me"
              />
              */}
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ textDecoration: "none", cursor: "pointer" }}
                // onClick={() => setOpenModal(true)}
              >
                Forgot Password?
              </Typography>
            </Stack>

            <Box sx={{ mt: 2 }}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Sign in
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {subtitle}
    </>
  );
};

export default AuthLogin;
