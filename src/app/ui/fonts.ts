import { Inter, Gilda_Display, Montserrat } from "next/font/google";

export const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const monstserrat = Montserrat({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
