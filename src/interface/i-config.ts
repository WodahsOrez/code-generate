export interface IConfig{
  templateRoot:string;
  targetRoot:string;
  fileList:{
    origin:string;
    target:string;
  }[];
  addition:{
    content:string;
    insertTag: string;
    target:string;
  }[];
}