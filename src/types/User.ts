export enum UserRole {
  USER = "USER",
  SALES = "SALES",
  EVENTS = "EVENTS",
}

export interface User {
  password: string;
  email: string;
  name: string;
  role: UserRole;
}
