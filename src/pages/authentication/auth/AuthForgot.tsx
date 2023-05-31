import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Link from "next/link";

import { Formik } from "formik";
import validationSchema from "./forgotPasswordHelper";
import { useSendOtpMutation } from "@/queries/authQueries";

interface forgotType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

type forgotCredentials = {
  username: string;
  userEmail: string;
  userOtp: string;
  newPassword: string;
  confirmPassword: string;
  steps: number | 0;
};

const steps = ["Enter Email Address", "Confirm OTP", "Reset Password"];
const buttonStepsText = [
  "Send Password Reset Email",
  "Confirm OTP",
  "Change Password",
];

const AuthForgot = ({ title, subtitle, subtext }: forgotType) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [errors, setErrors] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const formRef = useRef();
  const sendOtpMutation = useSendOtpMutation();

  const isStepFailed = (step: number) => {
    // if (isError && stepperType === "email") {
    //   return step === 0;
    // } else if (isError && stepperType === "otp") {
    //   return step === 1;
    // } else if (isError && stepperType === "password") {
    //   return step === 2;
    // }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = async (values: forgotCredentials) => {
    const { userEmail } = values;
    if (activeStep === 0) {
      try {
        await sendOtpMutation.mutateAsync(userEmail);
        // Login successful, perform any necessary actions
      } catch (error) {
        // Handle login error
      }
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isError && isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                {errors?.message}
              </Typography>
            );

            // checking index of steps and setting error to true
            if (isError) {
              labelProps.error = true;
            } else {
              labelProps.error = false;
            }
          }

          return (
            <>
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <Formik
                  initialValues={{
                    userEmail: "",
                    otp: "",
                    newPassword: "",
                    confirmPassword: "",
                    steps: 0,
                  }}
                  validationSchema={validationSchema}
                  validateOnChange
                  innerRef={formRef}
                  onSubmit={handleSubmit}
                ></Formik>
              )}
            </>
          );
        })}
      </Stepper>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/authentication/login"
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthForgot;
