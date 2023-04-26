/**
 * Arun Chettur
 * API testcases for GET Call
 */
const supertest = require("supertest");
const chai = require("chai");
const { expect } = chai;
const mocha = require("mocha");
const { describe, it } = mocha;
const { getUserDetailsById } = require("../helper/util.js");

const api = supertest("https://reqres.in/api");

// Test a successful GET request and filter user details
describe("GET /users?page=1", () => {
  it("should return 200 status, first name, email, and user details by ID", async () => {
    const response = await api.get("/users?page=1").expect(200);

    const users = response.body.data;

    // Assertions
    expect(response.status).to.equal(200);
    expect(users).to.be.an("array").that.is.not.empty;

    // 1) Filter out list of First name and email of all the Users obtained in GET call.
    const filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      filteredUsers.push({
        firstName: users[i].first_name,
        email: users[i].email,
      });
    }
    console.log("Filtered Users:", filteredUsers);

    // Assertions
    expect(filteredUsers).to.be.an("array").with.lengthOf(users.length);

    // 2) Filter out user details by giving ID.
    const userId = 2; // Change this to any valid user ID
    const userDetails = getUserDetailsById(users, userId);
    console.log("User Details for ID", userId, userDetails);

    // Assertions
    expect(userDetails).to.be.an("object");
    expect(userDetails).to.have.property("id", userId);
    expect(userDetails).to.have.property("first_name");
    expect(userDetails).to.have.property("last_name");
    expect(userDetails).to.have.property("email");
  });
});
