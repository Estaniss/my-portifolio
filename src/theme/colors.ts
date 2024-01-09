import { Colors } from "../utils/types";

const palette = {
  common: {
    black: "#1A1A1A",
    white: "#FFFFFF",
  },
  primary: {
    light: "#F6F9EE", // Light blue
    main: "#ECF4D6", // Blue
    dark: "#ABBE76", // Dark blue
    contrastText: "#F5F6F8",
  },
  secondary: {
    light: "#FFCC80", // Light orange
    main: "#9AD0C2", // Orange
    dark: "#EF6C00", // Dark orange
    contrastText: "#FFFFFF",
  },
  tertiary: {
    light: "#81C784", // Light green
    main: "#2D9596", // Green
    dark: "#388E3C", // Dark green
    contrastText: "#FFFFFF",
  },
  quaternary: {
    light: "#FFD54F", // Light amber
    main: "#265073", // Amber
    dark: "#FFA000", // Dark amber
    contrastText: "#FFFFFF",
  },
  error: {
    light: "#E57373", // Light red
    main: "#F44336", // Red
    dark: "#D32F2F", // Dark red
    contrastText: "#FFFFFF",
  },
  warning: {
    light: "#FFB74D", // Light orange
    main: "#FF9800", // Orange
    dark: "#EF6C00", // Dark orange
    contrastText: "#FFFFFF",
  },
  info: {
    light: "#64B5F6", // Light blue
    main: "#2196F3", // Blue
    dark: "#1565C0", // Dark blue
    contrastText: "#FFFFFF",
  },
  success: {
    light: "#81C784", // Light green
    main: "#4CAF50", // Green
    dark: "#388E3C", // Dark green
    contrastText: "#FFFFFF",
  },
  disabled: {
    light: "#BDBDBD", // Light gray
    main: "#757575", // Medium gray
    dark: "#424242", // Dark gray
    contrastText: "#FFFFFF",
  },
};

export const darkColors = {
  type: "dark",
  divider: "#00000012",
  shadow: "#12121270",
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFFB3)",
    disabled: "#FFFFFF80)",
    hint: "#FFFFFF80)",
  },
  background: {
    default: "#ADB5BD",
    paper: "#424242",
  },
  ...palette,
} as Colors;

export const lightColors = {
  type: "light",
  divider: "#0000001F",
  shadow: "#29292950",
  text: {
    primary: "#000000DE",
    secondary: "#0000008A",
    disabled: "#00000061",
    hint: "#00000061",
  },
  background: {
    default: "#F5F6F8",
    paper: "#FFFFFF",
  },
  ...palette,
} as Colors;
