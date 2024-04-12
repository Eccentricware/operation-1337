function compress(chars: string[]): number {
  console.log('Start Chars', chars);
  let currentChar = '';
  let count = 0;
  let replacementArray: string[] = [currentChar];

  const createReplacementArray = (): string[] => {
    let groupCount = count;
    let repArray: string[] = [currentChar];

    while (groupCount > 0) {
      if (count === 1) {
        groupCount = 0;

      } else if (groupCount >= 10) {
        repArray.splice(1, 0, String(groupCount % 10));
        groupCount = (groupCount - (groupCount % 10)) / 10;

      } else {
        repArray.splice(1, 0, String(groupCount));
        groupCount = 0;
      }
    }

    return repArray;
  }

  for (let charIndex = chars.length - 1; charIndex >= 0; charIndex--) {
    if (chars[charIndex] !== currentChar) {
      if (currentChar !== '') {
        replacementArray = createReplacementArray();
        chars.splice(charIndex + 1, count, ...replacementArray);

      }

      count = 1;

    } else {
      count++;
    }

    currentChar = chars[charIndex];

    if (charIndex === 0) {
      replacementArray = createReplacementArray();
      chars.splice(0, count, ...replacementArray);
    }
  }

  console.log('Final Chars', chars);

  return chars.length;
};

console.log(compress(["a","a","b","b","c","c","c"]), 'should be 6');
console.log(compress(["a"]), 'should be 1');
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), 'should be 4');