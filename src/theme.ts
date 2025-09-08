import { createTheme, MantineColorsTuple } from "@mantine/core";

// 定义自定义颜色
const brandColor: MantineColorsTuple = [
  "#f0f9ff",
  "#e0f2fe",
  "#bae6fd",
  "#7dd3fc",
  "#38bdf8",
  "#0ea5e9",
  "#0284c7",
  "#0369a1",
  "#075985",
  "#0c4a6e",
  "#082f49",
];

export const theme = createTheme({
  /** 主色调 */
  primaryColor: "brand",
  colors: {
    brand: brandColor,
  },
  /** 字体 */
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  /** 头部高度 */
  headings: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeight: "600",
  },
  /** 默认间距 */
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  /** 默认半径 */
  radius: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },
  /** 默认阴影 */
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
  },
  /** 断点 */
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  /** 其他配置 */
  other: {
    // 可以在这里添加自定义配置
  },
});
