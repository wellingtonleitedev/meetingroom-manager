const TOKEN = "@meetingroom-token";
export const isAuthorization = () => JSON.parse(localStorage.getItem(TOKEN));
export const login = async user => {
  await localStorage.setItem(JSON.stringify(TOKEN, user));
};
export const logout = () => localStorage.removeItem(TOKEN);
