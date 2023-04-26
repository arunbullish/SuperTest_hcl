/**
 * Arun Chettur
 * Create user test cases
 */
const supertest = require("supertest");
const chai = require("chai");
const { expect } = chai;
const mocha = require("mocha");
const { describe, it, forEach } = mocha;
const users = require("../testdata/users.json");

const api = supertest("https://reqres.in/api");

let userDetails = users;
let createdUserIds = [];

// Test a successful POST request and validate the response for each test user
describe("POST /users", () => {
  {
    timeout: 5000;
  }

  // Iterate the full testdata is JSON file.
  userDetails.forEach((ud) => {
    it("should create a new user and return 201 status with user details", async () => {
      const response = await api.post("/users").send(ud).expect(201);

      // Assertions
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("name", ud.name);
      expect(response.body).to.have.property("job", ud.job);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");

      // 1) Create new user and retrieve newly created ID.
      const createdUserId = response.body.id;
      console.log("Created User ID:", createdUserId);

      // 2) Validate response code and user details.
      expect(response.body.name).to.equal(ud.name);
      expect(response.body.job).to.equal(ud.job);
    });
  });
});

describe("PUT /users/:id", () => {
  userDetails.forEach((ud, index) => {
    it("should update user information and return 200 status with updated user details", async () => {
      const createdUserId = createdUserIds[index];

      const updatedUser = {
        name: ud.name + "_updated",
        job: ud.job + "_updated",
      };

      const response = await api
        .put(`/users/${createdUserId}`)
        .send(updatedUser)
        .expect(200);

      // Assertions
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("name", updatedUser.name);
      expect(response.body).to.have.property("job", updatedUser.job);
      expect(response.body).to.have.property("updatedAt");
      console.log(`Updated user ${createdUserIds[index]}:`, response.body);
    });
  });
});
