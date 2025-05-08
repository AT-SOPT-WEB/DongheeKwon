export const isValidLoginId = (id: string) => /^[a-zA-Z0-9]{8,20}$/.test(id);
export const isValidPassword = (pw: string) => /^[a-zA-Z0-9]{8,20}$/.test(pw);
export const isValidNickname = (nick: string) =>
  /^[가-힣a-zA-Z0-9]{1,20}$/.test(nick);
