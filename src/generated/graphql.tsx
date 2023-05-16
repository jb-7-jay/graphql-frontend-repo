import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Add new user */
export type Mutation = {
  __typename?: 'Mutation';
  addProject?: Maybe<Project>;
  addUser?: Maybe<User>;
  deleteProject?: Maybe<Project>;
  deleteUser?: Maybe<User>;
  updateProject?: Maybe<Project>;
};


/** Add new user */
export type MutationAddProjectArgs = {
  description: Scalars['String'];
  status?: InputMaybe<ProjectStatus>;
  title: Scalars['String'];
  user: Scalars['ID'];
};


/** Add new user */
export type MutationAddUserArgs = {
  email: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
};


/** Add new user */
export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


/** Add new user */
export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


/** Add new user */
export type MutationUpdateProjectArgs = {
  description: Scalars['String'];
  id: Scalars['ID'];
  status?: InputMaybe<ProjectStatusUpdate>;
  title: Scalars['String'];
};

export enum ProjectStatus {
  Completed = 'completed',
  InProgress = 'inProgress',
  New = 'new'
}

export enum ProjectStatusUpdate {
  Completed = 'completed',
  InProgress = 'inProgress',
  New = 'new'
}

/** root query */
export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get project details by Id */
  project?: Maybe<Project>;
  /** List of all projects */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** Get user details */
  user?: Maybe<User>;
  /** List of all Users */
  users?: Maybe<Array<Maybe<User>>>;
};


/** root query */
export type RootQueryTypeProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** root query */
export type RootQueryTypeUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

/** This is project type data */
export type Project = {
  __typename?: 'project';
  _id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** This is user type data */
export type User = {
  __typename?: 'user';
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'RootQueryType', users?: Array<{ __typename?: 'user', name?: string | null, email?: string | null, gender?: string | null } | null> | null };


export const UserDocument = gql`
    query user {
  users {
    name
    email
    gender
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;