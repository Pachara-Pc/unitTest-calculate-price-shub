import MockAdepter from "axios-mock-adapter";
import axios from "axios";
import { calculateCostShabu, calculateServiceCharge } from "../shabu";
describe("test shabu buffet", () => {
  var mock = new MockAdepter(axios);

  it(" should get cost shabu", async () => {
    mock.onGet("/cost").reply(200, {
      cost: 340,
    });

    const getCostShabu = await axios.get("/cost");

    expect(getCostShabu.data.cost).toBe(340);
  });

  it(" should get servicecharge", async () => {
    mock.onGet("/servicecharge").reply(200, {
      serviceCharge: 10,
    });

    const getCostShabu = await axios.get("/servicecharge");

    expect(getCostShabu.data.serviceCharge).toBe(10);
  });

  it(" should be calculate cost of shabu 1 person ", async () => {
    const getCostShabu = await axios.get("/cost");
    const getServiceCharge = await axios.get("/servicecharge");
    const person = 1;

    const totalprice = calculateCostShabu(person, getCostShabu.data.cost);
    const totalPriceWithServiceCharge = calculateServiceCharge(
      totalprice,
      getServiceCharge.data.serviceCharge
    );
    expect(totalPriceWithServiceCharge).toBe(374);
  });

  it(" should be calculate cost of shabu 8 person ", async () => {
    const getCostShabu = await axios.get("/cost");
    const getServiceCharge = await axios.get("/servicecharge");
    const toBeValue = [374, 748, 1122, 1122, 1870, 2244, 2618, 2244];

    toBeValue.forEach((el, index) => {
      const totalprice = calculateCostShabu(index + 1, getCostShabu.data.cost);
      const totalPriceWithServiceCharge = calculateServiceCharge(
        totalprice,
        getServiceCharge.data.serviceCharge
      );
      expect(totalPriceWithServiceCharge).toBe(el);
    });
  });
});
