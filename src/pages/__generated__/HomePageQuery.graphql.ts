

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type HomePageQueryQueryVariables = Exact<{
  from: Scalars['Int'];
  to: Scalars['Int'];
  collection: Scalars['String'];
  orderBy: Scalars['String'];
  hideUnavailableItems: Scalars['Boolean'];
}>;


export type HomePageQueryQuery = { cmsSeo: Maybe<{ seo: Maybe<{ facebook: Maybe<{ title: Maybe<string>, description: Maybe<string>, thumbnail: Maybe<string> }>, siteMetadata: Maybe<{ title: Maybe<string>, description: Maybe<string>, titleTemplate: Maybe<string> }> }> }>, cmsHome: Maybe<{ sections: Array<{ name: string, props: any }> }>, vtex: { products: Maybe<Array<Maybe<{ productName: Maybe<string>, linkText: Maybe<string>, brand: Maybe<string>, productReference: Maybe<string>, id: Maybe<string>, categoryTree: Maybe<Array<Maybe<{ name: Maybe<string> }>>>, productClusters: Maybe<Array<Maybe<{ id: Maybe<string>, name: Maybe<string> }>>>, properties: Maybe<Array<Maybe<{ name: Maybe<string>, originalName: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, name: Maybe<string>, referenceId: Maybe<Array<Maybe<{ value: Maybe<string> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, availableQuantity: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, maxInstallments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number> }>>>, installments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number>, interestRate: Maybe<number> }>>>, teasers: Maybe<Array<{ name: Maybe<string> }>> }> }>>> }>>> }>>> } };


// Query Related Code

export const HomePageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query HomePageQuery($from: Int!, $to: Int!, $collection: String!, $orderBy: String!, $hideUnavailableItems: Boolean!) {\n  cmsSeo {\n    seo {\n      facebook {\n        title\n        description\n        thumbnail\n      }\n      siteMetadata {\n        title\n        description\n        titleTemplate\n      }\n    }\n  }\n  cmsHome {\n    sections {\n      name\n      props\n    }\n  }\n  vtex {\n    products(\n      from: $from\n      to: $to\n      collection: $collection\n      orderBy: $orderBy\n      hideUnavailableItems: $hideUnavailableItems\n    ) {\n      id: productId\n      productName\n      linkText\n      brand\n      productReference\n      categoryTree {\n        name\n      }\n      productClusters {\n        id\n        name\n      }\n      properties {\n        name\n        originalName\n        values\n      }\n      items {\n        itemId\n        name\n        referenceId {\n          value: Value\n        }\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commercialOffer: commertialOffer {\n            maxInstallments: Installments(criteria: MAX_WITHOUT_INTEREST) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n            }\n            installments: Installments(criteria: ALL) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n              interestRate: InterestRate\n            }\n            availableQuantity: AvailableQuantity\n            price: Price\n            listPrice: ListPrice\n            spotPrice\n            teasers {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "d25f8c3b7c1c17100dca17d54dcbd531c308a1033f2ecf83a3943867a1c5a17d",
  operationName: "HomePageQuery",
}

