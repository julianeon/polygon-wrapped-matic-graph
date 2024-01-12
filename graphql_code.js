const graphqlQuery = {
  query: `
    {
      approvals(first: 5) {
        id
        src
        guy
        wad
      }
      transfers(first: 5) {
        id
        src 
        dst
        wad
      }
    }
    `
};

module.exports = graphqlQuery;
