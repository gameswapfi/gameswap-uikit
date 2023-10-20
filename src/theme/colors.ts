import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0a0a09",
  primaryBright: "#030303",
  primaryDark: "#030303",
  secondary: "#7e0101",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#800000",            // GameStop red
  backgroundDisabled: "#E9EAEB",    // Light background disabled
  contrast: "#191326",              // Text contrast
  invertedContrast: "#FFFFFF",      // Inverted text contrast
  input: "#eeeaf4",                 // Input background
  tertiary: "#EFF4F5",              // Tertiary background
  text: "#800000",                  // GameStop red
  textDisabled: "#BDC2C4",         // Disabled text
  textSubtle: "#970202",            // Darker red text
  borderColor: "#E9EAEB",           // Border color
  card: "#FFFFFF",                  // Card background
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};


export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",             // Secondary color
  background: "#343135",            // Dark background
  backgroundDisabled: "#3c3742",    // Dark background disabled
  contrast: "#FFFFFF",              // Text contrast
  invertedContrast: "#191326",      // Inverted text contrast
  input: "#483f5a",                 // Input background
  primaryDark: "#0098A1",           // Dark primary color
  tertiary: "#353547",              // Tertiary background
  text: "#EAE2FC",                  // Text color
  textDisabled: "#666171",          // Disabled text color
  textSubtle: "#c9c4d4",            // Subtle text color
  borderColor: "#524B63",           // Border color
  card: "#27262c",                  // Card background
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
