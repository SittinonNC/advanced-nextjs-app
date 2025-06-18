import { K2D, Roboto, Sarabun, Kanit } from "next/font/google";

const k2d = K2D({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-k2d",
});

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-sarabun",
});

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-kanit",
});
export { k2d, roboto, sarabun, kanit };
