export type ExampleTheme = {
  colors: {
    'gray-50': string;
    'gray-100': string;
    'gray-200': string;
    'gray-300': string;
    'gray-400': string;
    'gray-500': string;
    'gray-600': string;
    'gray-700': string;
    'gray-800': string;
    'gray-900': string;
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
    'gray-100': "#F3F4F6",
    'gray-200': "#E5E7EB",
    'gray-300': "#D1D5DB",
    'gray-400': "#9CA3AF",
    'gray-50': "#F9FAFB",
    'gray-500': "#6B7280",
    'gray-600': "#4B5563",
    'gray-700': "#374151",
    'gray-800': "#1F2937",
    'gray-900': "#111827",
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
