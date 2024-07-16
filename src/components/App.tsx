import Background from "./Background.tsx";
import Header from "./Header.tsx";
import Container from "./Container.tsx";
import Footer from "./Footer.tsx";
import { useState } from "react";
import { useDebounce, useJobItems } from "../utils/hooks";
import { Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");
  const debounceSearchText = useDebounce(searchText, 300);
  const { jobItems, isLoading } = useJobItems(debounceSearchText);
  const [currentPage, setCurrentPage] = useState(1);

  const jobItemsSliced =
    jobItems?.slice(currentPage * 7 - 7, currentPage * 7) || [];
  const numberOfJobItems = jobItems?.length || 0;
  const numberOfPages = Math.ceil(numberOfJobItems / 7);

  const handleChangePage = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous") {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container
        numberOfJobItems={numberOfJobItems}
        jobItems={jobItemsSliced}
        isLoading={isLoading}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onChangePage={handleChangePage}
      />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
