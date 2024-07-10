import SearchForm from "./SearchForm.tsx";
import BookmarksButton from "./BookmarksButton.tsx";
import Logo from "./Logo.tsx";

type HeaderProps = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};
export default function Header({ searchText, setSearchText }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>
      <SearchForm searchText={searchText} onSearchText={setSearchText} />
    </header>
  );
}
