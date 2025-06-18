# Full Stack GraphQL Application

This repository contains a full-stack application built with GraphQL, Node.js, React, and Vite. It is divided into two main parts:

1. **graphql-backend-repo**: The backend server for handling GraphQL queries and mutations.
2. **graphql-frontend-repo**: The frontend application built with React and Vite.

## Backend

### Features
- GraphQL API built with Yoga GraphQL.
- MongoDB database integration using Mongoose.
- User and Project management with CRUD operations.
- Mock data seeding for development.

### Setup
1. Install dependencies:
   ```bash
   yarn install
   ```
2. Start the development server:
   ```bash
   yarn dev
   ```
3. Access the GraphQL server at:
   ```
   http://localhost:4000/graphql
   ```

### Key Files
- `src/api/Project/project.dao.js`: Data access object for Project operations.
- `src/api/User/user.model.js`: Mongoose schema for User.
- `src/graphql/schema/index.js`: Root GraphQL schema.
- `src/mockData.js`: Script for seeding mock data.

## Frontend

### Features
- React application with TypeScript.
- GraphQL queries and mutations generated using codegen.
- Ant Design components for UI.
- React Query for state management.

### Setup
1. Install dependencies:
   ```bash
   yarn install
   ```
2. Generate GraphQL types and queries:
   ```bash
   yarn run codegen
   ```
3. Start the development server:
   ```bash
   yarn start
   ```

### Key Files
- `src/App.tsx`: Main application entry point.
- `src/features/users/UserList.tsx`: Component for displaying user list.
- `src/features/projects/ProjectList.tsx`: Component for displaying project list.
- `src/graphql/generated/graphql.ts`: Generated GraphQL types.

## Docker

### Build and Run
1. Build the Docker image:
   ```bash
   docker compose up --build
   ```
2. Access the application at:
   ```
   http://localhost:8080
   ```

### Deployment
1. Build the image for cloud deployment:
   ```bash
   docker build --platform=linux/amd64 -t myapp .
   ```
2. Push the image to a registry:
   ```bash
   docker push myregistry.com/myapp
   ```

## Testing

### Backend
- Unit tests for GraphQL resolvers and data access objects.

### Frontend
- React Testing Library and Vitest for component testing.
- Example test file: `src/__tests__/Example.test.ts`.

## References
- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
