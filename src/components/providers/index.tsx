import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Analytics />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
