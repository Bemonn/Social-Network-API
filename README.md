# Social-Network-API

  ![GitHub](https://img.shields.io/badge/license-mit-blue)

## Description

  Social network api is a functional api that has a NoSQL structure in order to deal with large amounts of unorganised information in a website or similar scenario.

  It has various features depicted in [Usage](#usage) and also displayed in [Video](#video).


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#Questions)
  
## Installation
- Dependencies: express ^4.18.2, mongoose ^7.5.3

- Installation: `npm install express@4.18.2 mongoose@7.5.3`


## Video


  
## Usage

`npm run start` in intergrated terminal to host local server and then open in insomnia to start running requests

  ### Requests

  #### User Requests
  GET `/api/users` (Get all users)

  POST `/api/users` (Create new user)

  GET `/api/users/:id` (Get user by id)

  PUT `/api/users/:id` (Update a user)

  DEL `/api/users/:id` (Delete a user)


  #### Thought Requests

  GET `/api/thoughts` (Get all thoughts)

  POST `/api/thoughts` (Create a new thought)

  GET `/api/thoughts/:id` (Get a thought by id)

  PUT `/api/thoughts/:id` (Update a thought)

  DEL `/api/thoughts/:id` (Delete a thought)

  #### Friend Requests

  POST `/api/users/:id/friends/:friends id` (Add a friend)

  DEL `/api/thoughts/:id/reactions/:friends id` (Delete a friend)

  Post `/api/thoughts/:id/reactions` (Add a reaction)

  DEL `/api/thoughts/:id/reactions/reactions :id` (Delete a reaction)

  Refer to [Video](#video) for more help


  
## Contributing
  Refer to questions for contact details

  
## License
  MIT

## Questions
For any questions, please feel free to reach out through the following channels:
- Email: tristan2107b@gmail.com
- Github: [bemonn](https://github.com/bemonn)