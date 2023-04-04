import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Shabu API", () => {
  const mock = new MockAdapter(axios);

  it("test API", async () => {
    mock.onGet("/getcostshabu").reply(200, {
      cost: 340

    });

    const result = await axios.get("/getcostshabu");
    // const expectResult = "A";
    // console.log("::result", result);
    // expect(result.data.productName).toBe(expectResult);
  });
});

//API spec
