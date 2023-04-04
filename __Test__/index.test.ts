// import { get, put } from "../index_copy";
import { say } from "../index";

describe("test FizzBuzz", () => {
  [3, 6, 9, 12, 18].map((el) => {
    it("should be say Fizz", () => {
      let expectResult = "Fizz";
      const result = say(el);

      expect(expectResult).toBe(result);
    });
  });

  [5, 10, 20, 25].map((el) => {
    it("Buzz", () => {
      let expectResult = "Buzz";
      const result = say(el);

      expect(expectResult).toBe(result);
    });
  });

  [15, 30, 45, 60].map((el) => {
    it("FizzBuzz", () => {
      let expectResult = "FizzBuzz";
      const result = say(el);
      expect(expectResult).toBe(result);
    });
  });

  [1, 2, 4, 7, 8, 11, 13, 14, 16].map((el) => {
    it("number", () => {
      let expectResult = el;
      const result = say(el);

      expect(expectResult).toBe(result);
    });
  });
});
