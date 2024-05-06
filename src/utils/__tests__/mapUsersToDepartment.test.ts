import { describe, expect, it } from "vitest";
import mapUsersToDepartment from "../mapUsersToDepartment";
import usersMock from "./mocks/users.json";
import type { IUsersResult } from "../../services/getUsersApi";

const mock = usersMock as unknown as IUsersResult;

describe("mapUsersToDepartment", () => {
  it("should return department correctly correctly when user data is provided", () => {
    const result = mapUsersToDepartment(mock);
    expect(result).toStrictEqual({
      Marketing: {
        male: 2,
        female: 3,
        ageRange: "21-50",
        hair: { Black: 1, Blond: 2, Chestnut: 1, Brown: 1 },
        addressUser: {
          TerryMedhurst: "20020",
          TerrillHills: "95945",
          EleanoraPrice: "85305",
          JeanneHalvorson: "02664",
          EdwinaErnser: "31415",
        },
      },
      Services: {
        male: 2,
        female: 0,
        ageRange: "28-29",
        hair: { Blond: 1, Chestnut: 1 },
        addressUser: { SheldonQuigley: "40219", EwellMueller: "85306" },
      },
      "Business Development": {
        male: 2,
        female: 0,
        ageRange: "39-49",
        hair: { Blond: 1, Black: 1 },
        addressUser: { MilesCummerata: "06040", MarcelJones: "40208" },
      },
      Support: {
        male: 3,
        female: 2,
        ageRange: "28-42",
        hair: { Brown: 3, Black: 1, Blond: 1 },
        addressUser: {
          MavisSchultz: "40206",
          ArelySkiles: "36108",
          LennaRenner: "93908",
          KodyTerry: "06042",
          MaurineStracke: "20001",
        },
      },
      Accounting: {
        male: 0,
        female: 1,
        ageRange: "21-21",
        hair: { Blond: 1 },
        addressUser: { AlisonReichert: "05452" },
      },
      "Product Management": {
        male: 2,
        female: 3,
        ageRange: "19-45",
        hair: { Chestnut: 1, Black: 3, Brown: 1 },
        addressUser: {
          OletaAbbott: "94591",
          AssuntaRath: "80003",
          DoyleErnser: "72704",
          JocelynSchuster: "36111",
          MacyGreenfelder: "93645",
        },
      },
      "Human Resources": {
        male: 1,
        female: 1,
        ageRange: "22-47",
        hair: { Brown: 1, Black: 1 },
        addressUser: { DemetriusCorkery: "37209", PiperSchowalter: "37013" },
      },
      "Research and Development": {
        male: 1,
        female: 2,
        ageRange: "26-41",
        hair: { Auburn: 1, Black: 2 },
        addressUser: {
          TraceDouglas: "05037",
          TryciaFadel: "37206",
          TressaWeber: "72703",
        },
      },
      Sales: {
        male: 3,
        female: 0,
        ageRange: "21-46",
        hair: { Auburn: 1, Black: 2 },
        addressUser: {
          EnochLynch: "06040",
          BradfordProhaska: "72704",
          GustPurdy: "37076",
        },
      },
      Legal: {
        male: 0,
        female: 1,
        ageRange: "46-46",
        hair: { Brown: 1 },
        addressUser: { "FelicityO'Reilly": "37211" },
      },
      Engineering: {
        male: 1,
        female: 0,
        ageRange: "35-35",
        hair: { Blond: 1 },
        addressUser: { GriffinBraun: "99503" },
      },
    });
  });

  it("should return empty department when user data is empty", () => {
    const result = mapUsersToDepartment({
      users: [],
      total: 0,
      skip: 0,
      limit: 0,
    });
    expect(result).toStrictEqual({});
  });
});
