// see https://github.com/emotion-js/emotion/issues/2582
import emotionStyled from "@emotion/styled";
const anyEmotionStyled: any = emotionStyled;
export const styled: typeof emotionStyled =
  "default" in emotionStyled ? anyEmotionStyled.default : emotionStyled;
