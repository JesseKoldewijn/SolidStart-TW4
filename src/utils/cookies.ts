export const cookieMapper = (cookieString: string) => {
  const cookieMap = new Map<string, string>();
  if (cookieString) {
    cookieString.split(";").forEach((cookie) => {
      const [key, value] = cookie.split("=");
      cookieMap.set(key.trim(), value);
    });
  }
  return cookieMap;
};
