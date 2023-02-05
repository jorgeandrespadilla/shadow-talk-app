import api from "../shared/api"
import { CreateSessionResponse, GetSessionRequest } from "./types";

export const getSession = async (request: GetSessionRequest) => {
  const response = await api.get<CreateSessionResponse>('/get-session', request);
  return response;
}

export const createSession = async () => {
  const response = await api.post<CreateSessionResponse>('/create-anonymous-session');
  return response;
}