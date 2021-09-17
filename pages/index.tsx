import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";

function NewsItem(props: LinkPost.Entry): React.ReactElement {
  return (
    <Card
      variant="outlined"
      sx={{
        display: { md: "grid" },
        flex: { md: 1 },
        gridTemplateRows: { md: "min-content auto min-content" },
      }}
    >
      <CardMedia>
        <a
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            display: "block",
          }}
          href={props.url}
        >
          <Image
            alt={props.image.title}
            src={props.image.url}
            layout="fill"
            objectFit="cover"
          />
        </a>
      </CardMedia>
      <CardContent style={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" fontWeight="bold">
          {props.title}
        </Typography>
        {props.description && (
          <Typography variant="body1">{props.description}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" href={props.url}>
          {props.source}
        </Button>
      </CardActions>
    </Card>
  );
}
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
