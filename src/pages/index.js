import Head from "next/head";
import Header from "./header";
import CardContainer from "./cardContainer";
import PenGlobeContainer from "./penGlobeContainer";
import LeftSection from "./leftSection";
import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Den App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "#d9d9d9" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={3} sx={{backgroundColor: "#ececec"}}>
            <LeftSection />
          </Grid>
          <Grid item xs={8}>
            <CardContainer />
          </Grid>
          <Grid item xs={1}>
            <PenGlobeContainer />
          </Grid>
        </Grid>
      </main>
    </>
  );
}
