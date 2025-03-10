import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
