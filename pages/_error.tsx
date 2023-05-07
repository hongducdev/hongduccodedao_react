import { NextPageContext } from "next";
import Error from "next/error";
import { useRouter } from "next/router";

interface Props {
  statusCode: number;
}

const CustomErrorPage = ({ statusCode }: Props) => {
  const router = useRouter();

  // If there was an error fetching data on a client side navigation, go back to the previous page.
  if (router.asPath.startsWith("/_next/data")) {
    router.back();
    return null;
  }

  return <Error statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;
  return { statusCode };
};

export default CustomErrorPage;
