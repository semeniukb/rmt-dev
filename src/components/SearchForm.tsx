type SearchFormProps = {
  searchText: string;
  onSearchText: (searchText: string) => void;
};

export default function SearchForm({
  searchText,
  onSearchText,
}: SearchFormProps) {
  return (
    <form action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => onSearchText(e.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
