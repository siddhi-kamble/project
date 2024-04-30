const express = require("express");
const app = express();
app.use(express.static('MyWebsite'));

const PORT = process.env.PORT || 3000; // Use the port provided by the environment or default to 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


