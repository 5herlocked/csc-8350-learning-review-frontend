/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIdentifiedImage = /* GraphQL */ `
  mutation CreateIdentifiedImage(
    $input: CreateIdentifiedImageInput!
    $condition: ModelIdentifiedImageConditionInput
  ) {
    createIdentifiedImage(input: $input, condition: $condition) {
      id
      imageKey
      tags
      createdAt
      updatedAt
    }
  }
`;
export const updateIdentifiedImage = /* GraphQL */ `
  mutation UpdateIdentifiedImage(
    $input: UpdateIdentifiedImageInput!
    $condition: ModelIdentifiedImageConditionInput
  ) {
    updateIdentifiedImage(input: $input, condition: $condition) {
      id
      imageKey
      tags
      createdAt
      updatedAt
    }
  }
`;
export const deleteIdentifiedImage = /* GraphQL */ `
  mutation DeleteIdentifiedImage(
    $input: DeleteIdentifiedImageInput!
    $condition: ModelIdentifiedImageConditionInput
  ) {
    deleteIdentifiedImage(input: $input, condition: $condition) {
      id
      imageKey
      tags
      createdAt
      updatedAt
    }
  }
`;
