import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";

import useSearch from "./hook/useSearch.js";
import { members } from "./members.js";
function App() {
  const { search, filteredMembers, handleSearchChange, handleSearch } =
    useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            github={member.github}
            englishName={member.englishName}
          />
        ))}
      </section>
    </>
  );
}

export default App;
