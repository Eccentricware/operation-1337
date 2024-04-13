function maxVowels(s: string, k: number): number {
  let maxVowels = 0;
  let windowVowels = 0;
  let outIndex = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let inIndex = 0; inIndex < s.length; inIndex++) {
    if (inIndex < k) {
      if (vowels.includes(s[inIndex])) {
        maxVowels++;
        windowVowels++;
      }

    } else {
      if (vowels.includes(s[inIndex])) {
        windowVowels++;
      }

      if (vowels.includes(s[outIndex])) {
        windowVowels--;
      }

      if (windowVowels > maxVowels) {
        maxVowels++;
      }

      outIndex++;
    }
  }

  return maxVowels;
};

console.log('abciiidef: Expected: 3 | Actual ', maxVowels('abciiidef', 3));
console.log('aeiou: Expected: 2 | Actual ', maxVowels('aeiou', 2));
console.log('leetcode: Expected: 2 | Actual ', maxVowels('leetcode', 2));

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.