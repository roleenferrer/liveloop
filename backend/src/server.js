const app = require('./app.js');

app.listen(3010, () => {
  console.log('CSE115A Live loop server running');
  console.log('API Testing UI is at: http://localhost:3010/v0/api-docs/');
});
