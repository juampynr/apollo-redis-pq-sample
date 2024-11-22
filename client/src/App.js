import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map(({ title, author }) => (
    <li>
      {title} by {author}
    </li>
  ));
}

function App() {
  return (
    <div>
      <h2>Books</h2>
      <br/>
      <ul><Books /></ul>
    </div>
  );
}

export default App;
