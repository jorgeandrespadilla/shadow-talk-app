import { Post, PostDetail, Session } from "@/shared/types";

export interface GetSessionRequest {
  sessionCode: string;
}

export interface CreateSessionResponse extends Session {}

export interface CreatePostRequest {
  title: string;
  body: string;
  createdBy: string;
}

export interface CreatePostResponse extends Post {}

export type GetPostsResponse = PostDetail[];
