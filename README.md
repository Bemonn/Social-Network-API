# Social-Network-API

  ![GitHub](https://img.shields.io/badge/license-mit-blue)

## Description

  Social network api is a functional api that has a NoSQL structure in order to deal with large amounts of unorganised information in a website or similar scenario. This api allows for users to be made containing info like a name and email, thoughts are then able to be made that are attached to users and given info, reactions can then be made to thoughts by users that also contain info, users can also have friends added and removed. All of the previously mentioned items are given id's that can be used for various requests as listed in [Usage](#usage).

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

https://drive.google.com/file/d/16_xfx0SXSgTQwPWmclmHlcP5bX8nck6m/view 
  
## Usage

`npm run start` in intergrated terminal to host local server and then open in insomnia to start running requests

  ### Requests

  #### User Requests
  GET `/api/users` (Get all users)

  POST `/api/users` (Create new user)

  GET `/api/users/:id` (Get user by id)

  PUT `/api/users/:id` (Update a user)

  DEL `/api/users/:id` (Delete a user)

  - Example:

  ![image](https://github.com/Bemonn/Social-Network-API/assets/132788160/8c679931-0c42-4ef5-a11d-c4ee3c3d61a4)


  #### Thought Requests

  GET `/api/thoughts` (Get all thoughts)

  POST `/api/thoughts` (Create a new thought)

  GET `/api/thoughts/:id` (Get a thought by id)

  PUT `/api/thoughts/:id` (Update a thought)

  DEL `/api/thoughts/:id` (Delete a thought)

  - Example:
    
  ![image](https://github.com/Bemonn/Social-Network-API/assets/132788160/1034fc27-9ed8-4862-8664-2966a18e9583)

  #### Friend Requests

  POST `/api/users/:id/friends/:friends id` (Add a friend)

  DEL `/api/thoughts/:id/reactions/:friends id` (Delete a friend)

  - Example:
    
  ![image](https://github.com/Bemonn/Social-Network-API/assets/132788160/dc29ad75-90ab-4107-973a-c977f183d136)

  #### Reaction Requests

  Post `/api/thoughts/:id/reactions` (Add a reaction)

  DEL `/api/thoughts/:id/reactions/reactions :id` (Delete a reaction)

  - Example:
    
  ![image](https://github.com/Bemonn/Social-Network-API/assets/132788160/d584eac4-555e-498a-9e5c-1a453b05ff10)

  Refer to [Video](#video) for more help

  
## Contributing
  Refer to questions for contact details

  
## License
  MIT

## Questions
For any questions, please feel free to reach out through the following channels:
- Email: tristan2107b@gmail.com
- Github: [bemonn](https://github.com/bemonn)
