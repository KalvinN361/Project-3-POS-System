
TODO:
- [ ] Update .gitignore, prevent node pulling node packages
- [ ] Hand code data, and test rendering before pushing to remote. Front end will use this to apply style in React. 
- [ ] create menu with minimal for MVP - scale up later.
- [ ] Work out data relationships and structure. (tables, food items, employees - Auth) ... calc to track order costs? "print" ticket? 
- [ ] Consider server.js build out (node packages, file structure, app requirements, etc...)
- [ ] Create Seeds file, connection.js for Mongodb, Models --> What routing framework will we use? graphql and mutations? express? (create one route for testing in express until team decides)
- [ ] build utility function (possibly error classes for validation).
- [X] User auth, validation, and storage (framework -> jwt) session will expire in 30 minutes
- [ ] build utility functions: date/time,  error classes for validation?
- [ ] Finish models, 
- [ ] enter mongoURI for testing/implement dotenv
- [ ] use mongoose ORM to preform actions on models  >   DotENV to hide MongoURI

      Interface:
        - Start screen displays only number pad, employee enters id 
        - authentification 
        - if (user auth status.ok) taken to "menu screen"

