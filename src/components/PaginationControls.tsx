import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  numberOfPages: number;
  currentPage: number;
  onChangePage: (direction: "next" | "previous") => void;
};
export default function PaginationControls({
  numberOfPages,
  currentPage,
  onChangePage,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          onClick={() => onChangePage("previous")}
          currentPage={currentPage}
        />
      )}
      {currentPage < numberOfPages && (
        <PaginationButton
          direction="next"
          onClick={() => onChangePage("next")}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
  currentPage: number;
};
const PaginationButton = ({
  direction,
  onClick,
  currentPage,
}: PaginationButtonProps) => {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
};
