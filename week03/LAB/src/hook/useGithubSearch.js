import { useState } from "react";

const useGithubSearch = () => {
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });
  const [input, setInput] = useState("");
  const [recentKeywords, setRecentKeywords] = useState(() => {
    const stored = localStorage.getItem("recentKeywords");
    return stored ? JSON.parse(stored) : [];
  });
  const saveKeyword = (keyword) => {
    setRecentKeywords((prev) => {
      const updated = [keyword, ...prev.filter((k) => k !== keyword)];
      localStorage.setItem("recentKeywords", JSON.stringify(updated));
      return updated;
    });
  };
  const handleKeyDown = (e) => {
    if (e.code !== "Enter") return;
    getUserInfo(input);
    saveKeyword(input);
  };
  const getUserInfo = async (user) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const deleteRecentKeyword = (keyword) => {
    const updated = recentKeywords.filter((k) => k !== keyword);
    localStorage.setItem("recentKeywords", JSON.stringify(updated));
    setRecentKeywords(updated);
  };
  const deleteCard = () => {
    setUserInfo({ status: "idle", data: null });
  };
  const gotoGihub = () => {
    if (!userInfo.data.html_url) return;
    window.open(userInfo.data.html_url, "_blank");
  };
  return {
    input,
    recentKeywords,
    deleteCard,
    deleteRecentKeyword,
    handleChange,
    handleKeyDown,
    userInfo,
    gotoGihub,
  };
};
export default useGithubSearch;
