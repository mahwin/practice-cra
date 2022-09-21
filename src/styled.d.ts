import "styled-components";

//styled-component의 DefaultTheme정의를 확장 for ts
declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      lighter: string;
      darker: string;
    };
    blue: string;
  }
}
