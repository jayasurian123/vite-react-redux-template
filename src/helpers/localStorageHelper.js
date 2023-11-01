const SESSION_ID = 'SESSION_ID'; // update the session token here

const getLocal = (key) => {
  return localStorage.getItem(key);
};

const deleteLocal = (key) => {
  localStorage.removeItem(key);
};

export const getSession = () => getLocal(SESSION_ID);
export const destroySession = () => deleteLocal(SESSION_ID);
