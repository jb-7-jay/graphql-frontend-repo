import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import { gqlFetcher } from '../../api/axios'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

/** Add new user */
export type Mutation = {
  __typename?: 'Mutation'
  addProject?: Maybe<Project>
  addUser?: Maybe<User>
  deleteProject?: Maybe<Project>
  deleteUser?: Maybe<User>
  updateProject?: Maybe<Project>
}

/** Add new user */
export type MutationAddProjectArgs = {
  description: Scalars['String']['input']
  status?: InputMaybe<ProjectStatus>
  title: Scalars['String']['input']
  user: Scalars['ID']['input']
}

/** Add new user */
export type MutationAddUserArgs = {
  email: Scalars['String']['input']
  gender: Scalars['String']['input']
  name: Scalars['String']['input']
}

/** Add new user */
export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input']
}

/** Add new user */
export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input']
}

/** Add new user */
export type MutationUpdateProjectArgs = {
  description: Scalars['String']['input']
  id: Scalars['ID']['input']
  status?: InputMaybe<ProjectStatusUpdate>
  title: Scalars['String']['input']
}

export enum ProjectStatus {
  Completed = 'completed',
  InProgress = 'inProgress',
  New = 'new',
}

export enum ProjectStatusUpdate {
  Completed = 'completed',
  InProgress = 'inProgress',
  New = 'new',
}

/** root query */
export type RootQueryType = {
  __typename?: 'RootQueryType'
  /** Get project details by Id */
  project?: Maybe<Project>
  /** List of all projects */
  projects?: Maybe<Array<Maybe<Project>>>
  /** Get user details */
  user?: Maybe<User>
  /** List of all Users */
  users?: Maybe<Array<Maybe<User>>>
}

/** root query */
export type RootQueryTypeProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** root query */
export type RootQueryTypeUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** This is project type data */
export type Project = {
  __typename?: 'project'
  _id?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
}

/** This is user type data */
export type User = {
  __typename?: 'user'
  _id?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  gender?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type AddProjectMutationVariables = Exact<{
  title: Scalars['String']['input']
  description: Scalars['String']['input']
  status?: InputMaybe<ProjectStatus>
  user: Scalars['ID']['input']
}>

export type AddProjectMutation = {
  __typename?: 'Mutation'
  addProject?: {
    __typename?: 'project'
    _id?: string | null
    title?: string | null
    description?: string | null
    status?: string | null
    user?: {
      __typename?: 'user'
      _id?: string | null
      name?: string | null
      email?: string | null
    } | null
  } | null
}

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['ID']['input']
  title: Scalars['String']['input']
  description: Scalars['String']['input']
  status?: InputMaybe<ProjectStatusUpdate>
}>

export type UpdateProjectMutation = {
  __typename?: 'Mutation'
  updateProject?: {
    __typename?: 'project'
    _id?: string | null
    title?: string | null
    description?: string | null
    status?: string | null
    user?: {
      __typename?: 'user'
      _id?: string | null
      name?: string | null
      email?: string | null
    } | null
  } | null
}

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteProjectMutation = {
  __typename?: 'Mutation'
  deleteProject?: {
    __typename?: 'project'
    _id?: string | null
    title?: string | null
    description?: string | null
    status?: string | null
    user?: {
      __typename?: 'user'
      _id?: string | null
      name?: string | null
      email?: string | null
    } | null
  } | null
}

export type AddUserMutationVariables = Exact<{
  name: Scalars['String']['input']
  email: Scalars['String']['input']
  gender: Scalars['String']['input']
}>

export type AddUserMutation = {
  __typename?: 'Mutation'
  addUser?: {
    __typename?: 'user'
    _id?: string | null
    name?: string | null
    email?: string | null
    gender?: string | null
  } | null
}

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteUserMutation = {
  __typename?: 'Mutation'
  deleteUser?: {
    __typename?: 'user'
    _id?: string | null
    name?: string | null
    email?: string | null
    gender?: string | null
  } | null
}

export type GetProjectsQueryVariables = Exact<{ [key: string]: never }>

export type GetProjectsQuery = {
  __typename?: 'RootQueryType'
  projects?: Array<{
    __typename?: 'project'
    _id?: string | null
    title?: string | null
    description?: string | null
    status?: string | null
    user?: {
      __typename?: 'user'
      _id?: string | null
      name?: string | null
      email?: string | null
    } | null
  } | null> | null
}

export type GetProjectQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetProjectQuery = {
  __typename?: 'RootQueryType'
  project?: {
    __typename?: 'project'
    _id?: string | null
    title?: string | null
    description?: string | null
    status?: string | null
    user?: {
      __typename?: 'user'
      _id?: string | null
      name?: string | null
      email?: string | null
    } | null
  } | null
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'RootQueryType'
  users?: Array<{
    __typename?: 'user'
    _id?: string | null
    name?: string | null
    email?: string | null
    gender?: string | null
  } | null> | null
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetUserQuery = {
  __typename?: 'RootQueryType'
  user?: {
    __typename?: 'user'
    _id?: string | null
    name?: string | null
    email?: string | null
    gender?: string | null
  } | null
}

export const AddProjectDocument = `
    mutation AddProject($title: String!, $description: String!, $status: ProjectStatus = new, $user: ID!) {
  addProject(
    title: $title
    description: $description
    status: $status
    user: $user
  ) {
    _id
    title
    description
    status
    user {
      _id
      name
      email
    }
  }
}
    `

export const useAddProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddProjectMutation,
    TError,
    AddProjectMutationVariables,
    TContext
  >
) => {
  return useMutation<
    AddProjectMutation,
    TError,
    AddProjectMutationVariables,
    TContext
  >(
    ['AddProject'],
    (variables?: AddProjectMutationVariables) =>
      gqlFetcher<AddProjectMutation, AddProjectMutationVariables>(
        AddProjectDocument,
        variables
      )(),
    options
  )
}

export const UpdateProjectDocument = `
    mutation UpdateProject($id: ID!, $title: String!, $description: String!, $status: ProjectStatusUpdate = new) {
  updateProject(
    id: $id
    title: $title
    description: $description
    status: $status
  ) {
    _id
    title
    description
    status
    user {
      _id
      name
      email
    }
  }
}
    `

export const useUpdateProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjectMutation,
    TError,
    UpdateProjectMutationVariables,
    TContext
  >
) => {
  return useMutation<
    UpdateProjectMutation,
    TError,
    UpdateProjectMutationVariables,
    TContext
  >(
    ['UpdateProject'],
    (variables?: UpdateProjectMutationVariables) =>
      gqlFetcher<UpdateProjectMutation, UpdateProjectMutationVariables>(
        UpdateProjectDocument,
        variables
      )(),
    options
  )
}

export const DeleteProjectDocument = `
    mutation DeleteProject($id: ID!) {
  deleteProject(id: $id) {
    _id
    title
    description
    status
    user {
      _id
      name
      email
    }
  }
}
    `

export const useDeleteProjectMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteProjectMutation,
    TError,
    DeleteProjectMutationVariables,
    TContext
  >
) => {
  return useMutation<
    DeleteProjectMutation,
    TError,
    DeleteProjectMutationVariables,
    TContext
  >(
    ['DeleteProject'],
    (variables?: DeleteProjectMutationVariables) =>
      gqlFetcher<DeleteProjectMutation, DeleteProjectMutationVariables>(
        DeleteProjectDocument,
        variables
      )(),
    options
  )
}

export const AddUserDocument = `
    mutation AddUser($name: String!, $email: String!, $gender: String!) {
  addUser(name: $name, email: $email, gender: $gender) {
    _id
    name
    email
    gender
  }
}
    `

export const useAddUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddUserMutation,
    TError,
    AddUserMutationVariables,
    TContext
  >
) => {
  return useMutation<
    AddUserMutation,
    TError,
    AddUserMutationVariables,
    TContext
  >(
    ['AddUser'],
    (variables?: AddUserMutationVariables) =>
      gqlFetcher<AddUserMutation, AddUserMutationVariables>(
        AddUserDocument,
        variables
      )(),
    options
  )
}

export const DeleteUserDocument = `
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    _id
    name
    email
    gender
  }
}
    `

export const useDeleteUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >
) => {
  return useMutation<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >(
    ['DeleteUser'],
    (variables?: DeleteUserMutationVariables) =>
      gqlFetcher<DeleteUserMutation, DeleteUserMutationVariables>(
        DeleteUserDocument,
        variables
      )(),
    options
  )
}

export const GetProjectsDocument = `
    query GetProjects {
  projects {
    _id
    title
    description
    status
    user {
      _id
      name
      email
    }
  }
}
    `

export const useGetProjectsQuery = <TData = GetProjectsQuery, TError = unknown>(
  variables?: GetProjectsQueryVariables,
  options?: UseQueryOptions<GetProjectsQuery, TError, TData>
) => {
  return useQuery<GetProjectsQuery, TError, TData>(
    variables === undefined ? ['GetProjects'] : ['GetProjects', variables],
    gqlFetcher<GetProjectsQuery, GetProjectsQueryVariables>(
      GetProjectsDocument,
      variables
    ),
    options
  )
}

useGetProjectsQuery.getKey = (variables?: GetProjectsQueryVariables) =>
  variables === undefined ? ['GetProjects'] : ['GetProjects', variables]

export const GetProjectDocument = `
    query GetProject($id: ID!) {
  project(id: $id) {
    _id
    title
    description
    status
    user {
      _id
      name
      email
    }
  }
}
    `

export const useGetProjectQuery = <TData = GetProjectQuery, TError = unknown>(
  variables: GetProjectQueryVariables,
  options?: UseQueryOptions<GetProjectQuery, TError, TData>
) => {
  return useQuery<GetProjectQuery, TError, TData>(
    ['GetProject', variables],
    gqlFetcher<GetProjectQuery, GetProjectQueryVariables>(
      GetProjectDocument,
      variables
    ),
    options
  )
}

useGetProjectQuery.getKey = (variables: GetProjectQueryVariables) => [
  'GetProject',
  variables,
]

export const GetUsersDocument = `
    query GetUsers {
  users {
    _id
    name
    email
    gender
  }
}
    `

export const useGetUsersQuery = <TData = GetUsersQuery, TError = unknown>(
  variables?: GetUsersQueryVariables,
  options?: UseQueryOptions<GetUsersQuery, TError, TData>
) => {
  return useQuery<GetUsersQuery, TError, TData>(
    ['GetUsers'],
    gqlFetcher<GetUsersQuery, GetUsersQueryVariables>(
      GetUsersDocument,
      variables
    ),
    options
  )
}

useGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) =>
  variables === undefined ? ['GetUsers'] : ['GetUsers', variables]

export const GetUserDocument = `
    query GetUser($id: ID!) {
  user(id: $id) {
    _id
    name
    email
    gender
  }
}
    `

export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>
) => {
  return useQuery<GetUserQuery, TError, TData>(
    ['GetUser', variables],
    gqlFetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables),
    options
  )
}

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => [
  'GetUser',
  variables,
]
