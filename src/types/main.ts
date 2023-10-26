import { ReactNode } from "react";

export interface AppWindow {
  [key: string]: boolean;
}

export interface FriendComment {
  name: string;
  image: string;
  message: string;
  createdAt: string;
}
