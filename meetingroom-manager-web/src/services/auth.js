const TOKEN = "@meetingroom-token";
export const isAuthenticated = () => JSON.parse(localStorage.getItem(TOKEN));
export const getUser = () => JSON.parse(localStorage.getItem(TOKEN));
export const login = async user => {
  await localStorage.setItem(TOKEN, JSON.stringify(user));
};
export const logout = async () => { await localStorage.removeItem(TOKEN); }
