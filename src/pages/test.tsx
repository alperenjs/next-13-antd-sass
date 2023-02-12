import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

const Test = ({ token }: any) => {
  return <div>Test {token}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const parsedCookies = ctx.req.headers.cookie;

  console.log(parsedCookies)

  return {
    props: {
      parsedCookies,
    },
  };
};

export default Test;
