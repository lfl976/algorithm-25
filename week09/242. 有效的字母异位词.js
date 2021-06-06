/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    obj[t[j]] = (obj[t[j]] || 0) - 1;
    if (obj[t[j]] < 0) {
      return false;
    }
  }
  return true;
};
