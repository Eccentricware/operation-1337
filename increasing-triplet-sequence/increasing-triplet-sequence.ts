function increasingTriplet(nums: number[]): boolean {
  let triplets: number[][] = [];
  let tripletFound = false;

  let leftIndex = 0;
  let midIndex = 1;
  let rightIndex = nums.length - 1;

  while (leftIndex < nums.length - 2 && !tripletFound) {
    let rightIndex = nums.length - 1;

    while (rightIndex > leftIndex + 1 && !tripletFound) {
      if (nums[rightIndex] > nums[leftIndex] + 1) {
        let midIndex = leftIndex + 1;

        while (midIndex < rightIndex && !tripletFound) {
          if (nums[midIndex] > nums[leftIndex] && nums[midIndex] < nums[rightIndex]) {
            tripletFound = true;
          }
          midIndex++;
        }
      }

      rightIndex--;
    }

    leftIndex++;
  }

  return tripletFound;
};

// function increasingTriplet(nums: number[]): boolean {
//   let triplets: number[][] = [];
//   let tripletFound = false;

//   let signatures: string[] = [];
//   const getSignature = (moreNums: number[]):string => {
//     return moreNums.join('|');
//   }

//   let numIndex = 0;
//   while (numIndex < nums.length && !tripletFound) {
//     let number = nums[numIndex];
//     triplets.forEach((triplet: number[]) => {
//       if (number > triplet[triplet.length - 1]) {
//         let newTriplet = triplet.slice();
//         newTriplet.push(number);
//         if (newTriplet.length === 3) {
//           tripletFound = true;
//         } else {
//           const signature = getSignature(newTriplet);
//           if (!signatures.includes(signature)) {
//             triplets.push(newTriplet);
//             signatures.push(signature);
//           }
//         }
//       }
//     });
//     triplets.push([number]);
//     numIndex++;
//   }

//   return tripletFound;
// };

console.log(increasingTriplet([1,5,0,4,1,3]));
console.log(increasingTriplet([1,5,0,4,1,3]));