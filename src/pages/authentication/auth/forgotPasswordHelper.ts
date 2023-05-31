import * as Yup from "yup";

const validationSchema = Yup.object({
  userEmail: Yup.string()
    .email("Invalid email address")
    .required(" * Email is required"),
  userOtp: Yup.string()
    .required("OTP is required")
    .min(6, "Enter 6 digits otp")
    .max(6, "Enter 6 digits otp"),
  newPassword: Yup.string()
    .min(6, "New Password should be of minimum 6 characters length")
    .max(12, "New Password should not exceed 12 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Character"
    )
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .min(6, "Confirm Password should be of minimum 6 characters length")
    .max(12, "Confirm Password should not exceed 12 characters")
    // .matches(/^\s*\S[\s\S]*$/,"* Please Avoide Extra Spaces!")
    .required("Confirm Password is required")
    .when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Both password need to be the same"
      ),
    }),
});

export default validationSchema;
