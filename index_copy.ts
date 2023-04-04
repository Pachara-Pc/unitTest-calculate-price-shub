const buffer: number = 5;
let readPointer: number = 0;
let writePointer: number = 0;
let arr: number[] = [];
export const put = (number: number) => {
  if (arr[writePointer] !== undefined) {
    if (writePointer === readPointer) {
      readPointer++;
      if (readPointer >= buffer) {
        readPointer = 0;
      }
    }
  }
  arr[writePointer] = number;
  writePointer++;
  if (writePointer >= buffer) {
    writePointer = 0;
  }
};

export const get = (): number => {
  let temp = arr[readPointer];
  readPointer++;
  if (readPointer >= buffer) {
    readPointer = 0;
  }
  return temp;
};
