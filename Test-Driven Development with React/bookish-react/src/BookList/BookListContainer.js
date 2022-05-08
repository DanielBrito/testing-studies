import React, { useEffect, useState } from "react";

import SearchBox from "../SearchBox/SearchBox";
import BookList from "./BookList";
import { useRemoteService } from "../hooks/useRemoteService";

const BookListContainer = () => {
  const [term, setTerm] = useState("");
  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books",
    []
  );

  const sortedBooks = data.sort((a, b) => a.id - b.id);

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
    console.log("test");
  }, [term, setUrl]);

  const onSearch = (event) => setTerm(event.target.value);

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={sortedBooks} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
