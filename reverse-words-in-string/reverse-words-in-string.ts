function reverseWords(s: string): string {
  return s.split(' ').reverse().join(' ').trim().replace(/\s+/g, ' ');
};