const { Client } = require("@elastic/elasticsearch");

/*
This sample docker-compose.yml file uses the ES_JAVA_OPTS environment variable to manually set the heap size to 512MB. We do not recommend using ES_JAVA_OPTS in production.
 See Manually set the heap size.
*/
module.exports = new Client({
  node: "http://localhost:9200",
  auth: {
    username: "elastic",
    password: "Password@123",
  },
});
