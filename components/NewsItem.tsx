import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";

import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  background-color: #fafafa;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: white;
  }
`;

export default function NewsItem(props: LinkPost.Entry): React.ReactElement {
  return (
    <StyledCard
      variant="outlined"
      sx={{
        display: { md: "grid" },
        flex: { md: 1 },
      }}
    >
      <CardActionArea
        href={props.url}
        sx={{
          display: { md: "grid" },
          gridTemplateRows: { md: "300px 1fr auto" },
        }}
      >
        <CardMedia>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
              display: "block",
            }}
          >
            <Image
              alt={props.image.title}
              src={props.image.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </CardMedia>
        <CardContent sx={{ alignSelf: { md: "start" } }}>
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
      </CardActionArea>
    </StyledCard>
  );
}
