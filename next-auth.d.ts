import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    password: string;
  }
}
