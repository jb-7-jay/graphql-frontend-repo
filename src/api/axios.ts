import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const gqlFetcher = <TData, TVariables>(
  doc: string,
  variables?: TVariables
): any => {
  return axiosInstance
    .post('', {
      query: doc,
      variables,
    })
    .then((response) => {
      const { data } = response
      if (data.errors) {
        const { message } = data.errors[0] || 'Unknown GraphQL error'
        throw new Error(message)
      }
      return data.data
    })
}
