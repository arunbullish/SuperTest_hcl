// Helper function to filter user details by ID
const getUserDetailsById = (users, id) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  return null;
};
module.exports = {
  getUserDetailsById,
};
