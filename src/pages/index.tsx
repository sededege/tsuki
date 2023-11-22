import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      {/* <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <HomeView /> */}
      <BasicsView/>
    </div>
  );
};

export default Home;
