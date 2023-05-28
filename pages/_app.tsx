import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSite from "@/components/common/LoadingSite";
import { MDXProvider } from "@mdx-js/react";

const inconsolata = Inconsolata({
  subsets: ["latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? (
        <LoadingSite />
      ) : (
        <Layout>
          <main className={inconsolata.className}>
            <MDXProvider components={{}}>
              <Component {...pageProps} />
            </MDXProvider>
            <ToastContainer />
          </main>
        </Layout>
      )}
    </>
  );
}
