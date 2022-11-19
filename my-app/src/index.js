import React from 'react';
import { createRoot } from 'react-dom/client';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg"
      alt="Atomic Habits"
      width="200px"
      height="auto"
    />
  );
};
const Title = () => <h1>Atomic Habits</h1>;
const Author = () => <h4>James Clear</h4>;

// TODO: Move the Greeting component to its own file.
const root = createRoot(document.getElementById('root'));
root.render(<BookList />);
