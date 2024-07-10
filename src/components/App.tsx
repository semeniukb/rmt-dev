import Background from "./Background.tsx";
import Header from "./Header.tsx";
import Container from "./Container.tsx";
import Footer from "./Footer.tsx";
import { useState } from "react";
import { useJobItems } from "../utils/hooks";

function App() {
  const [searchText, setSearchText] = useState("");
  const { jobItems, isLoading } = useJobItems({ searchText });
  console.log(jobItems, "GET");

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container />
      <Footer />
    </>
  );
}

export default App;
