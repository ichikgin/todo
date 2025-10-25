export interface Theme {
  name: string,
  color: {
    backgroundPrimary: string,
    backgroundSecondary: string,
    backgroundItems: string, 

  }
}
export interface Themes{
  [key:string]: Theme
}