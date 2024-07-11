import Background from "./Background.tsx";
import Header from "./Header.tsx";
import Container from "./Container.tsx";
import Footer from "./Footer.tsx";
import { useState } from "react";
import { useActiveId, useJobItem, useJobItems } from "../utils/hooks";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoading] = useJobItems(searchText);
  const activeId = useActiveId();
  const [jobItem] = useJobItem(activeId);
  console.log(jobItem, "ITEM");
  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
