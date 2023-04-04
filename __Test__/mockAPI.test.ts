import MockAdapter from "axios-mock-adapter";
import axios from "axios";
describe("test mock", () => {
  var mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  it("should get request", async () => {
    mock.onGet("/user").reply(200, {
      userName: "John",
    });

    const result = await axios.get("/user");
    const expectResult = "John";

    // console.log("::result", result);

    expect(result.data.userName).toBe(expectResult);
  });

  it("should post request", async () => {
    mock
      .onPost("/adduser", {
        id: 1,
        name: "max",
      })
      .reply(200, {
        status: 200,
        message: "success",
        data: {},
      });

    const result = await axios.post("/adduser", { id: 1, name: "max" });
    // console.log("::result", result);

    expect(result.data.status).toBe(200);
  });
});
