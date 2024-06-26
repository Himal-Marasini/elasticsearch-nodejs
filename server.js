const express = require("express");

const client = require("./elasticsearch.connection");

const app = express();

app.listen(3030, async () => {
  try {
    const response = await client.ping();
    console.log("Elasticsearch cluster is up:", response);
    console.log("Express App is connected !!");
  } catch (error) {
    console.error("Elasticsearch cluster is down!", error);
  }
});
