import * as CSS from "csstype";

export type Color = {
  "50": Exclude<CSS.Properties["color"], undefined>;
  "100": Exclude<CSS.Properties["color"], undefined>;
  "200": Exclude<CSS.Properties["color"], undefined>;
  "300": Exclude<CSS.Properties["color"], undefined>;
  "400": Exclude<CSS.Properties["color"], undefined>;
  "500": Exclude<CSS.Properties["color"], undefined>;
  "600": Exclude<CSS.Properties["color"], undefined>;
  "700": Exclude<CSS.Properties["color"], undefined>;
  "800": Exclude<CSS.Properties["color"], undefined>;
  "900": Exclude<CSS.Properties["color"], undefined>;
};

export const teal: Color = {
  "50": "#EFFCF6",
  "100": "#C6F7E2",
  "200": "#8EEDC7",
  "300": "#65D6AD",
  "400": "#3EBD93",
  "500": "#27AB83",
  "600": "#199473",
  "700": "#147D64",
  "800": "#0C6B58",
  "900": "#014D40",
};

export const mintGreen: Color = {
  "50": "#eaffea",
  "100": "#d6ffd6",
  "200": "#ccffcc",
  "300": "#b7ffb7",
  "400": "#adffad",
  "500": "#98ff98",
  "600": "#89e689",
  "700": "#7acc7a",
  "800": "#5b995b",
  "900": "#3d663d",
};

export const bahamaBlue: Color = {
  "50": "#e6f1f4",
  "100": "#b3d4df",
  "200": "#99c5d5",
  "300": "#66a9bf",
  "400": "#008ebd",
  "500": "#006f95",
  "600": "#006282",
  "700": "#005977",
  "800": "#004359",
  "900": "#00384b",
};

export const blueGrey: Color = {
  "50": "#F0F4F8",
  "100": "#D9E2EC",
  "200": "#BCCCDC",
  "300": "#9FB3C8",
  "400": "#829AB1",
  "500": "#627D98",
  "600": "#486581",
  "700": "#334E68",
  "800": "#243B53",
  "900": "#102A43",
};

export const coolGrey: Color = {
  "50": "#F5F7FA",
  "100": "#E4E7EB",
  "200": "#CBD2D9",
  "300": "#9AA5B1",
  "400": "#7B8794",
  "500": "#616E7C",
  "600": "#52606D",
  "700": "#3E4C59",
  "800": "#323F4B",
  "900": "#1F2933",
};

export const blue: Color = {
  "50": "#DCEEFB",
  "100": "#B6E0FE",
  "200": "#84C5F4",
  "300": "#62B0E8",
  "400": "#4098D7",
  "500": "#2680C2",
  "600": "#186FAF",
  "700": "#0F609B",
  "800": "#0A558C",
  "900": "#003E6B",
};

export const blueVivid: Color = {
  "50": "#E6F6FF",
  "100": "#BAE3FF",
  "200": "#7CC4FA",
  "300": "#47A3F3",
  "400": "#2186EB",
  "500": "#0967D2",
  "600": "#0552B5",
  "700": "#03449E",
  "800": "#01337D",
  "900": "#002159",
};

export const cyanVivid: Color = {
  "50": "#E1FCF8",
  "100": "#C1FEF6",
  "200": "#92FDF2",
  "300": "#62F4EB",
  "400": "#3AE7E1",
  "500": "#1CD4D4",
  "600": "#0FB5BA",
  "700": "#099AA4",
  "800": "#07818F",
  "900": "#05606E",
};

export const pinkVivid: Color = {
  "50": "#FFE3EC",
  "100": "#FFB8D2",
  "200": "#FF8CBA",
  "300": "#F364A2",
  "400": "#E8368F",
  "500": "#DA127D",
  "600": "#BC0A6F",
  "700": "#A30664",
  "800": "#870557",
  "900": "#620042",
};

export const purple: Color = {
  "50": "#EAE2F8",
  "100": "#CFBCF2",
  "200": "#A081D9",
  "300": "#8662C7",
  "400": "#724BB7",
  "500": "#653CAD",
  "600": "#51279B",
  "700": "#421987",
  "800": "#34126F",
  "900": "#240754",
};

export const purpleVivid: Color = {
  "50": "#F2EBFE",
  "100": "#DAC4FF",
  "200": "#B990FF",
  "300": "#A368FC",
  "400": "#9446ED",
  "500": "#8719E0",
  "600": "#7A0ECC",
  "700": "#690CB0",
  "800": "#580A94",
  "900": "#44056E",
};

export const orangeVivid: Color = {
  "50": "#FFE8D9",
  "100": "#FFD0B5",
  "200": "#FFB088",
  "300": "#FF9466",
  "400": "#F9703E",
  "500": "#F35627",
  "600": "#DE3A11",
  "700": "#C52707",
  "800": "#AD1D07",
  "900": "#841003",
};

export const red: Color = {
  "50": "#FFEEEE",
  "100": "#FACDCD",
  "200": "#F29B9B",
  "300": "#E66A6A",
  "400": "#D64545",
  "500": "#BA2525",
  "600": "#A61B1B",
  "700": "#911111",
  "800": "#780A0A",
  "900": "#610404",
};

export const redVivid: Color = {
  "50": "#FFE3E3",
  "100": "#FFBDBD",
  "200": "#FF9B9B",
  "300": "#F86A6A",
  "400": "#EF4E4E",
  "500": "#E12D39",
  "600": "#CF1124",
  "700": "#AB091E",
  "800": "#8A041A",
  "900": "#610316",
};

export const yellow: Color = {
  "50": "#FFFAEB",
  "100": "#FCEFC7",
  "200": "#F8E3A3",
  "300": "#F9DA8B",
  "400": "#F7D070",
  "500": "#E9B949",
  "600": "#C99A2E",
  "700": "#A27C1A",
  "800": "#7C5E10",
  "900": "#513C06",
};

export const yellowVivid: Color = {
  "50": "#FFFBEA",
  "100": "#FFF3C4",
  "200": "#FCE588",
  "300": "#FADB5F",
  "400": "#F7C948",
  "500": "#F0B429",
  "600": "#DE911D",
  "700": "#CB6E17",
  "800": "#B44D12",
  "900": "#8D2B0B",
};
