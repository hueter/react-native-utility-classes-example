export type ExampleTheme = {
  colors: {
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    danger: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
  };
  typography: {
    sizes: {
      xs: number;
      sm: number;
      base: number;
      lg: number;
      xl: number;
      "2xl": number;
      "3xl": number;
      h1: number;
      h2: number;
      h3: number;
    };
  };
};

export const theme: ExampleTheme = {
  colors: {
    danger: "#DC2626",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray50: "#F9FAFB",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",
    primary: "#4F46E5",
    secondary: "#DB2777",
    success: "#059669",
    warning: "#FBBF24",
  },
  typography: {
    sizes: {
      xs: 16,
      sm: 18,
      base: 20,
      lg: 24,
      xl: 28,
      "2xl": 32,
      "3xl": 36,
      h1: 36,
      h2: 32,
      h3: 26,
    },
  },
};
