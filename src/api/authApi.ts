import axios, { AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type User = {
  id: number;
  name: string;
  email: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

type AuthResponse = {
  data: {
    authToken: string;
  };
};

export async function login(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  const { email, password } = credentials;
  let form = new FormData();
  form.append("email", email);
  form.append("password", password);
  const response: AxiosResponse<AuthResponse> = await apiClient.post(
    "user/login",
    form,
  );
  return response.data;
}

export async function sendOtp(email: string): Promise<any> {
  const response: AxiosResponse<AuthResponse> = await apiClient.post(
    "/api/sendOtp",
    email,
  );
  return response.data;
}

export async function logout(): Promise<void> {
  await apiClient.post("/api/logout");
}

export async function getUser(): Promise<User> {
  const response: AxiosResponse<User> = await apiClient.get("/api/user");
  return response.data;
}
