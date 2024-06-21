import type {
  Components,
  Palette as MUIPalette,
  PaletteColor as MUIPaletteColor,
  PaletteOptions as MUIPaletteOptions,
  Theme as MUITheme,
  TypeBackground as MUITypeBackground
} from "@mui/material/styles";
import type {
  Typography as MUITypography,
  TypographyOptions as MUITypographyOptions
} from "@mui/material/styles/createTypography";
import type {CSSProperties} from "react";

export interface BgBlurInterface {
  color?: string;
  blur?: number;
  opacity?: number;
  imgUrl?: string;
}

export interface BgGradientInterface {
  direction?: string;
  startColor?: string;
  endColor?: string;
  imgUrl?: string;
  color?: string;
}

export interface BgGradientResponse {
  background?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}


export interface Palette extends MUIPalette {
  background: Background;
  error: PaletteColor;
  info: PaletteColor;
  primary: PaletteColor;
  warning: PaletteColor;
  success: PaletteColor;
}

export interface PaletteOptions extends MUIPaletteOptions {
  background: {
    default: string;
    paper: string;
    neutral: string
  }
}

export interface PaperInterface {
  theme: Theme,
  bgcolor: string,
  dropdown: string
}

export interface CustomShadowsInterface {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  card: string;
  dropdown: string;
  dialog: string;
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
}

export interface PaletteColor extends MUIPaletteColor {
  lighter: string;
  darker: string;
}

interface Background extends MUITypeBackground {
  neutral: string
}

export interface Typography extends MUITypography {
  subtitle2: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  fontSecondaryFamily: CSSProperties["fontFamily"];
  fontWeightMedium: CSSProperties["fontWeight"];
  subtitle1: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  body2: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  fontWeightRegular: CSSProperties["fontWeight"];
  h1: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  caption: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  h2: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h3: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h4: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h5: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  h6: {
    "@media (min-width:900px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:600px)": {
      fontSize: CSSProperties["fontSize"];
    };
    "@media (min-width:1200px)": {
      fontSize: CSSProperties["fontSize"];
    };
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
  };
  button: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
    textTransForm: CSSProperties["textTransform"];
  };
  fontFamily: CSSProperties["fontFamily"];
  fontWeightSemiBold: CSSProperties["fontWeight"];
  body1: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
  };
  overline: {
    lineHeight: CSSProperties["lineHeight"];
    fontSize: CSSProperties["fontSize"];
    fontWeight: CSSProperties["fontWeight"];
    textTransForm: CSSProperties["textTransform"];
  };
  fontWeightBold: CSSProperties["fontWeight"]
}

export interface TypographyOptions extends MUITypographyOptions {
  fontSecondaryFamily: string;
  fontWeightSemiBold: number
}

export interface Theme extends MUITheme {
  typography: Typography
  customShadows: CustomShadowsInterface
  palette: Palette
  components?: Components
}
