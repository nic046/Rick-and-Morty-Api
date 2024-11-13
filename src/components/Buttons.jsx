import "../styles/Buttons.css";
export default function Buttons({ page, maxPage, setPage }) {
  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onNext = () => {
    if (page <= maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="container">
        <button onClick={onPrev} disabled={page === 1}>
           Before
        </button>
        <button onClick={onNext} disabled={page === maxPage}>
          Next
        </button>
        <p className="page-info">
          Page {page}/{maxPage}
        </p>
      </div>
    </>
  );
}
