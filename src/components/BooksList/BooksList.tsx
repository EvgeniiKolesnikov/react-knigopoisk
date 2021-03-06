import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  BookCard,
  BooksListInfo,
  Error,
  Preloader,
  PreloaderMini,
  ZeroBook,
} from '..';

import './BooksList.scss';
import { useEffect } from 'react';

export const BooksList: React.FC = () => {
  const { data, loading, error, page } = useTypedSelector(
    (state) => state.data
  );

  // set data.totalPages field
  useEffect(() => {
    if (!loading && data) {
      data.totalPages = data.num_found
        ? Math.floor(data.num_found / 100) + 1
        : 0;
      console.log(data);
    }
  }, [data, loading]);

  return (
    <div className='books-list  unselectable' unselectable='on'>
      {loading && page === 1 && <Preloader />}
      {loading && page > 1 && <PreloaderMini />}
      {error && <Error />}
      {data?.docs.length === 0 && data.q && !loading && <ZeroBook />}
      {(!loading || page > 1) && (
        <>
          <div className='books-list__container'>
            {data?.docs.map((book) => (
              <BookCard key={book.key} book={book} />
            ))}
          </div>
          {data && <BooksListInfo />}
        </>
      )}
    </div>
  );
};
