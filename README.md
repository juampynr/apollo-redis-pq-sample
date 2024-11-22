# Apollo GraphQL Persisted Query Example using Redis

This project is a React application that uses Apollo Client to interact with a GraphQL server. It includes persisted queries for improved performance.

## Technologies Used

- JavaScript
- Docker
- React
- Apollo Client
- GraphQL
- nvm
- TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Docker
- Node.js 18.0 or later

### Installation

Start a Redis container using Docker:

```bash
docker run --name redis-test -d -p 6379:6379 redis
```

Note, for future runs, simply start the container:

```bash
docker start redis-test
```

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client
    nvm use
    npm install
    cd ../server
    nvm use
    npm install
    ```

### Running the Application

Start the GraphQL server:
    ```bash
    cd server
    npm start
    ```

Start the React application:
    ```bash
    cd client
    npm start
    ```

The React application should now be running on `http://localhost:3000` and the GraphQL server on `http://localhost:4000`.

After running the client application and seeing the list of books on the page, you can view the persisted queries in Redis:

```bash
redis-cli                                                                                 │
127.0.0.1:6379> keys *                                                                                                                 │
1) "keyv:apq:5dd47f95624dcbb37018f8a4bbfc3ecb575e4c9bfe949c653ae0e677bcf7e8ac"                                                         │
2) "namespace:keyv"                                                                                                                    │
127.0.0.1:6379> ttl "keyv:apq:5dd47f95624dcbb37018f8a4bbfc3ecb575e4c9bfe949c653ae0e677bcf7e8ac"                                        │
(integer) -1                                                                                                                           │
127.0.0.1:6379> get "keyv:apq:5dd47f95624dcbb37018f8a4bbfc3ecb575e4c9bfe949c653ae0e677bcf7e8ac"                                        │
"{\"value\":\"query GetBooks {\\n  books {\\n    title\\n    author\\n    __typename\\n  }\\n}\",\"expires\":null}"     
````