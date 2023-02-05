export interface Session {
  sessionCode: string;
  nickName: string;
  avatar: string;
  createdAt: string;
}

export interface Post {
  title: string;
  body: string;
  createdBy: string;
  createdAt: string;
}

export interface PostDetail extends Post {
  session: Session;
}