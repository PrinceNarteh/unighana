export interface INote {
  _id: string;
  title: string;
  content: string;
  favourite: boolean;
}

export type Inputs = {
  title: string;
  content: string;
};
