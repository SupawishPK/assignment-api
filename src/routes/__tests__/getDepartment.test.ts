import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../..";
import nock from "nock";

const usersMock = {
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      maidenName: "Smitham",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      username: "atuny0",
      password: "9uQFF1Lh",
      birthDate: "2000-12-25",
      image: "https://robohash.org/Terry.png?set=set4",
      bloodGroup: "A-",
      height: 189,
      weight: 75.4,
      eyeColor: "Green",
      hair: {
        color: "Black",
        type: "Strands",
      },
      domain: "slashdot.org",
      ip: "117.29.86.254",
      address: {
        address: "1745 T Street Southeast",
        city: "Washington",
        coordinates: {
          lat: 38.867033,
          lng: -76.979235,
        },
        postalCode: "20020",
        state: "DC",
      },
      macAddress: "13:69:BA:56:A3:74",
      university: "Capitol University",
      bank: {
        cardExpire: "06/22",
        cardNumber: "50380955204220685",
        cardType: "maestro",
        currency: "Peso",
        iban: "NO17 0695 2754 967",
      },
      company: {
        address: {
          address: "629 Debbie Drive",
          city: "Nashville",
          coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
          },
          postalCode: "37076",
          state: "TN",
        },
        department: "Marketing",
        name: "Blanda-O'Keefe",
        title: "Help Desk Operator",
      },
      ein: "20-9487066",
      ssn: "661-64-2976",
      userAgent:
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
      crypto: {
        coin: "Bitcoin",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        network: "Ethereum (ERC20)",
      },
    },
    {
      id: 2,
      firstName: "Sheldon",
      lastName: "Quigley",
      maidenName: "Cole",
      age: 28,
      gender: "male",
      email: "hbingley1@plala.or.jp",
      phone: "+7 813 117 7139",
      username: "hbingley1",
      password: "CQutx25i8r",
      birthDate: "2003-08-02",
      image: "https://robohash.org/Sheldon.png?set=set4",
      bloodGroup: "O+",
      height: 187,
      weight: 74,
      eyeColor: "Brown",
      hair: {
        color: "Blond",
        type: "Curly",
      },
      domain: "51.la",
      ip: "253.240.20.181",
      address: {
        address: "6007 Applegate Lane",
        city: "Louisville",
        coordinates: {
          lat: 38.1343013,
          lng: -85.6498512,
        },
        postalCode: "40219",
        state: "KY",
      },
      macAddress: "13:F1:00:DA:A4:12",
      university: "Stavropol State Technical University",
      bank: {
        cardExpire: "10/23",
        cardNumber: "5355920631952404",
        cardType: "mastercard",
        currency: "Ruble",
        iban: "MD63 L6YC 8YH4 QVQB XHIK MTML",
      },
      company: {
        address: {
          address: "8821 West Myrtle Avenue",
          city: "Glendale",
          coordinates: {
            lat: 33.5404296,
            lng: -112.2488391,
          },
          postalCode: "85305",
          state: "AZ",
        },
        department: "Marketing",
        name: "Aufderhar-Cronin",
        title: "Senior Cost Accountant",
      },
      ein: "52-5262907",
      ssn: "447-08-9217",
      userAgent:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30",
      crypto: {
        coin: "Bitcoin",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        network: "Ethereum (ERC20)",
      },
    },
  ],
  total: 2,
  skip: 0,
  limit: 30,
};

describe("GET /api/v1/departments", function () {
  it("should return status 200 and the department data when the request is successful", async function () {
    nock("https://dummyjson.com").get("/users").reply(200, usersMock);

    const response = await request(app).get("/api/v1/departments");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      Marketing: {
        male: 2,
        female: 0,
        ageRange: "28-50",
        hair: { Black: 1, Blond: 1 },
        addressUser: { JohnDoe: "20020", SheldonQuigley: "40219" },
      },
    });
  });

  it("should return status 500 when the request fails", async function () {
    nock("https://dummyjson.com").get("/users").reply(500);

    const response = await request(app).get("/api/v1/departments");

    expect(response.status).toEqual(500);
  });
});
