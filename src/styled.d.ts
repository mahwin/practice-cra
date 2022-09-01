import "styled-components";

//styled-component의 DefaultTheme정의를 확장 for ts
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
