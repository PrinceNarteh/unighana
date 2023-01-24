export interface INote {
  _id: string;
  title: string;
  content: string;
  favourite?: boolean;
  createdAt: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type Inputs = {
  _id: string;
  title: string;
  content: string;
};
