export interface IMenuItem {
  id: string;
  name: string;
  title: string;
  type: "group" | "collapse" | "item";
  path?: string;
  children?: IMenuItem[];
}
