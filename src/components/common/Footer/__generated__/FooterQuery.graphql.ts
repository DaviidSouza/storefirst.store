

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQueryQuery = { allStoreCollection: { nodes: Array<{ slug: string, seo: { title: string } }> } };


// Query Related Code

export const FooterQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query FooterQuery {\n  allStoreCollection(filter: {type: {eq: Department}}) {\n    nodes {\n      slug\n      seo {\n        title\n      }\n    }\n  }\n}\n",
  sha256Hash: "1e602049cd4798bb0004d700e52d4be6894aa4f322aa937b2a8887d8b053a437",
  operationName: "FooterQuery",
}

