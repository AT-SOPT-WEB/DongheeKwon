import React from "react";
import {
  GithubWrapper,
  Keyword,
  KeyWords,
  RecentSearches,
  Title,
  XImg,
  Text,
} from "./GithubSearch.styles";
import Input from "../Input/Input";
import x from "../../assets/icons/x.svg";
import useGithubSearch from "../../hook/useGithubSearch";
import { GithubProfileCard } from "./GithubProfileCard";
export default function GithubSearch() {
  const {
    input,
    recentKeywords,
    deleteCard,
    deleteRecentKeyword,
    handleChange,
    handleKeyDown,
    userInfo,
    gotoGihub,
  } = useGithubSearch();
  return (
    <GithubWrapper>
      <Input
        placeholder={"Github 프로필을 검색해보세요."}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {recentKeywords.length > 0 && (
        <RecentSearches>
          <Title>최근 검색어</Title>
          <KeyWords>
            {recentKeywords.map((keyword) => (
              <Keyword key={keyword}>
                <Text>{keyword}</Text>
                <XImg
                  src={x}
                  alt="XImg"
                  onClick={() => deleteRecentKeyword(keyword)}
                />
              </Keyword>
            ))}
          </KeyWords>
        </RecentSearches>
      )}
      {userInfo.status === "resolved" && (
        <GithubProfileCard
          user={userInfo.data}
          onClose={deleteCard}
          onOpenProfile={gotoGihub}
        />
      )}
    </GithubWrapper>
  );
}
