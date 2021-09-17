import { NextApiRequest, NextApiResponse } from "next";

import contentful, {
  ContentfulClientApi,
  createClient,
  Entry,
} from "contentful";

let client: ContentfulClientApi;

function getContentfulClient(): contentful.ContentfulClientApi {
  if (client) {
    return client;
  }
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_API_TOKEN) {
    throw "Environment variables are not configured";
  }
  client = createClient({
    environment: "master",
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });
  return client;
}

export default async function Posts(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const client = getContentfulClient();

  const { items, total, skip, limit } =
    await client.getEntries<LinkPost.ContentfulEntry>({
      order: "-fields.pinned,-fields.postTime",
      content_type: "linkPost",
    });
  res.json({
    data: items.map(parseItem),
    meta: {
      total,
      skip,
      limit,
    },
  });
}

function parseItem(item: Entry<LinkPost.ContentfulEntry>): LinkPost.Entry {
  return {
    title: item.fields.title,
    description: item.fields.description,
    source: item.fields.source,
    postTime: item.fields.postTime,
    url: item.fields.url,
    image: {
      title: item.fields.image.fields.title,
      description: item.fields.image.fields.description,
      url: `https:${item.fields.image.fields.file.url}`,
      meta: {
        ...item.fields.image.fields.file.details.image,
        size: item.fields.image.fields.file.details.size,
        fileName: item.fields.image.fields.file.fileName,
        contentType: item.fields.image.fields.file.contentType,
      },
    },
  };
}
