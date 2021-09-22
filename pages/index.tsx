import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import NewsItem from "../components/NewsItem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR(`/api/posts`, fetcher);
  return (
    <>
      <Head>
        <title>Meeple.news</title>
      </Head>
      <Box m={4}>
        <Grid container spacing={2} alignItems="stretch">
          {data?.data.map((entry: LinkPost.Entry, idx: number) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={idx}
              sx={{ display: { md: "flex" } }}
            >
              <NewsItem {...entry} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
