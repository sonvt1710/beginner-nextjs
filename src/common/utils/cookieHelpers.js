/* NOTE */
/*
- This is for beginner only. Cookie should handle in Server instead of client.
- Because of that: When login, call api /current-user or something to validate cookie
- If api return success + user info => set key is_authenticated to cookies or state (we can use state because each time open page or refesh, it should validate again)
*/

/**
 * Remove given values to given key from cache set
 *
 * @param {String} key key in cookie
 * @param {String} format Format of output. Default string. Support: string/json
 * @returns {String | JSON | null} output of function.
 */
export const getCookieByKey = (key, format = "string") => {
  const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
  if (!match) {
    // When don't have key in cookie
    return null;
  }
  const value = match[2];
  switch (format) {
    case "json":
    case "json":  
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error(`Error parse value to JSON. Value ${value}`);
        return null;
      }
  
    default:
      return value;
  }
}
