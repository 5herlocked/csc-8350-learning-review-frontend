/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIdentifiedImageInput = {
  id?: string | null,
  imageKey: string,
  tags?: Array< string | null > | null,
};

export type ModelIdentifiedImageConditionInput = {
  imageKey?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelIdentifiedImageConditionInput | null > | null,
  or?: Array< ModelIdentifiedImageConditionInput | null > | null,
  not?: ModelIdentifiedImageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type IdentifiedImage = {
  __typename: "IdentifiedImage",
  id: string,
  imageKey: string,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIdentifiedImageInput = {
  id: string,
  imageKey?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteIdentifiedImageInput = {
  id: string,
};

export type ModelIdentifiedImageFilterInput = {
  id?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelIdentifiedImageFilterInput | null > | null,
  or?: Array< ModelIdentifiedImageFilterInput | null > | null,
  not?: ModelIdentifiedImageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIdentifiedImageConnection = {
  __typename: "ModelIdentifiedImageConnection",
  items:  Array<IdentifiedImage | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionIdentifiedImageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIdentifiedImageFilterInput | null > | null,
  or?: Array< ModelSubscriptionIdentifiedImageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateIdentifiedImageMutationVariables = {
  input: CreateIdentifiedImageInput,
  condition?: ModelIdentifiedImageConditionInput | null,
};

export type CreateIdentifiedImageMutation = {
  createIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIdentifiedImageMutationVariables = {
  input: UpdateIdentifiedImageInput,
  condition?: ModelIdentifiedImageConditionInput | null,
};

export type UpdateIdentifiedImageMutation = {
  updateIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIdentifiedImageMutationVariables = {
  input: DeleteIdentifiedImageInput,
  condition?: ModelIdentifiedImageConditionInput | null,
};

export type DeleteIdentifiedImageMutation = {
  deleteIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPresignedUrlQueryVariables = {
  bucket_name?: string | null,
  object_key?: string | null,
};

export type GetPresignedUrlQuery = {
  getPresignedUrl?: string | null,
};

export type GetIdentifiedImageQueryVariables = {
  id: string,
};

export type GetIdentifiedImageQuery = {
  getIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIdentifiedImagesQueryVariables = {
  filter?: ModelIdentifiedImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdentifiedImagesQuery = {
  listIdentifiedImages?:  {
    __typename: "ModelIdentifiedImageConnection",
    items:  Array< {
      __typename: "IdentifiedImage",
      id: string,
      imageKey: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIdentifiedImageSubscriptionVariables = {
  filter?: ModelSubscriptionIdentifiedImageFilterInput | null,
};

export type OnCreateIdentifiedImageSubscription = {
  onCreateIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIdentifiedImageSubscriptionVariables = {
  filter?: ModelSubscriptionIdentifiedImageFilterInput | null,
};

export type OnUpdateIdentifiedImageSubscription = {
  onUpdateIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIdentifiedImageSubscriptionVariables = {
  filter?: ModelSubscriptionIdentifiedImageFilterInput | null,
};

export type OnDeleteIdentifiedImageSubscription = {
  onDeleteIdentifiedImage?:  {
    __typename: "IdentifiedImage",
    id: string,
    imageKey: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
