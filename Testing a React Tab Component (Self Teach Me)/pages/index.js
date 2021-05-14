import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Tabs } from "../components/Tabs";

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs initialTab={query}>
          <div label="Tab 1">Testing</div>
          <div label="Tab 2">React</div>
          <div label="Tab 3">Components</div>
        </Tabs>
      </main>
    </div>
  );
}

Home.getInitialProps = ({ query }) => {
  return { query };
};
