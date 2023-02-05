import api from "../shared/api"
import { CreatePostRequest, CreatePostResponse, GetPostsResponse } from "./types";

export const getPosts = async () => {
  const response = await api.get<GetPostsResponse>('/get-posts');
  return response;
}

export const createPost = async (request: CreatePostRequest) => {
  const response = await api.post<CreatePostResponse>('/create-post', request);
  return response;
}