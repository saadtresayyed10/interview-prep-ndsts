const app = require("../src/server");

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on PORT:${port}`));
