declare namespace LinkPost {
  declare type Entry = {
    title: string;
    source: string;
    postTime: string;
    description: string;
    url: string;
    image: {
      title: string;
      description: string;
      url: string;
      meta: {
        width?: number;
        height?: number;
        size: number;
        fileName: string;
        contentType: string;
      };
    };
  };
  declare type ContentfulEntry = {
    title: string;
    description: string;
    source: string;
    postTime: string;
    image: Asset;
    url: string;
  };
}
