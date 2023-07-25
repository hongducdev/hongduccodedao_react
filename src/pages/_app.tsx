import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto_Mono } from "next/font/google";

const queryClient = new QueryClient();
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={robotoMono.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
