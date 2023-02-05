import { ReactNode } from "react";

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

export interface LinkOptions {
  /** The URL of the link */
  to: string;
  /** The text to show in the link */
  label: string;
  /** The icon to display next to the link */
  icon?: ReactNode;
  /** Whether the link should be highlighted */
  highlight?: boolean;
}