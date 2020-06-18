const server = require("./server");
const supertest = require("supertest");
const db = require("../data/connection");

describe("server.js", () => {
  beforeAll(async () => {
    await db("user").truncate();
  });

  it("should return 200 OK", async () => {
    return supertest(server)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it("POST request", async () => {
    const body = {
      username: "admin",
      password: "admin",
    };
    return supertest(server)
      .post("/")
      .send(body)
      .then((res) => {
        expect(res.body.username).toBe("admin");
      });
  });

  it("DELETE User", async () => {
    const id = 1;

    return supertest(server)
      .delete(`/${id}`)
      .then((res) => {
        expect(res.body).toBe(1);
      });
  });
});
