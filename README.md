# Users Events API

This project is built using Node.js/TypeScript with Express, and data is stored in Postgres database that you can run either localy or inside a its own container.

## API Documentation

# GET /users

- Lists all users
- Response:

```js
{
        {
    "success": true,
    "response": [
            {
            "id": 1,
            "email": "test@test.com",
            "password": "2sdsd",
            "phone_number": "23324234234",
            "created_at": "2020-01-31T22:11:45.983Z"
            }
        ]
    }
}
```

# GET /users/[id]

- Retrieves the user with the given identifier.

# GET /events/[id]

- Retrieves the event with the given identifier

## Installation

Navigate to the project directory and :

```bash
$ docker-compose build && docker compose up
```

Then on any http client you can

```bash
$ 127.0.0.1:5000/setup
```

This will create the users and events tables on the database.

## ASSUMPTIONS / IMPROVEMENTS AND/OR OPEN QUESTIONS

- Authorization / ACL or a role based authorization is definitely necessary if the api is being accessed publicly
  - With a UserId within the Requests we can decide if we want to athorize access to a specific ressource from a specific user
- Asssuming a user creation is an Event (or multiple events) of type, let's say : "CREATING_USER" | "USER_CREATED" and all changes happening to a user are defined events that we keep track of:

  - The way we'd want to store the events will have to change, in a way that would help recreate the current state of a user from an initial state that we applied a serie of events to.
  - Maybe indexing the column user_id on the events table would help

- The code is missing unit tests at the moment of writing this. Will try to add some.
  - The modules are mainly where tests are needed.

* Better error management can be suggested as improvement
* Response generation can also be standardized
