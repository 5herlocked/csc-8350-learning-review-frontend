/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresignedUrl = /* GraphQL */ `
  query GetPresignedUrl(
    $bucket_name: String
    $object_key: String
    $file_type: String
  ) {
    getPresignedUrl(
      bucket_name: $bucket_name
      object_key: $object_key
      file_type: $file_type
    )
  }
`;
export const getIdentifiedImage = /* GraphQL */ `
  query GetIdentifiedImage($id: ID!) {
    getIdentifiedImage(id: $id) {
      id
      imageKey
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listIdentifiedImages = /* GraphQL */ `
  query ListIdentifiedImages(
    $filter: ModelIdentifiedImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdentifiedImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imageKey
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
