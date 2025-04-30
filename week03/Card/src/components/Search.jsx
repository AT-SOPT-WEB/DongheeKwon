import { css } from "@emotion/react";
const searchContainer = css`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const buttonStyle = css`
  border-radius: 0.375rem;
  background-color: #3b82f6;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2563eb;
  }
`;
const inputStyle = css`
  width: 40rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  padding: 0%.5rem 1rem;
  font-size: 1rem;
`;
const Search = ({ search, handleSearchChange, handleSearch }) => {
  return (
    <div css={searchContainer}>
      <input
        css={inputStyle}
        type="text"
        placeholder="이름 입력"
        value={search}
        onChange={handleSearchChange}
      />
      <button css={buttonStyle} onClick={handleSearch}>
        완료
      </button>
    </div>
  );
};

export default Search;
