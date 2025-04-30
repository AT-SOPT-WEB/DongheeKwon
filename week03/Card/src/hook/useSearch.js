import { useState } from "react";

const useSearch = (members) => {
  const [search, setSearch] = useState();
  const [filteredMembers, setfilteredMembers] = useState(members);

  const handleSearch = () => {
    setfilteredMembers(
      members.filter((member) => member.name.includes(search))
    );
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return { search, filteredMembers, handleSearchChange, handleSearch };
};
export default useSearch;
