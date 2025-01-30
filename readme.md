# Event API

## Overview

The **Event API** allows users to manage events, including creating, retrieving, updating, and deleting events. This API follows RESTful principles and is documented using Swagger.

## Features

- Retrieve all events
- Retrieve a single event by ID
- Create a new event
- Update an existing event
- Delete an event

## API Documentation

This API uses **Swagger** for documentation. You can access the interactive API documentation at:

- **Production**: [https://event-api.onrender.com/docs](https://event-api.onrender.com/docs)
- **Development**: [http://localhost:3000/api-docs](http://localhost:3000/api/docs)

## Endpoints

### Events

#### Get all events

```
GET /events
```

Response:

```json
[
  {
    "id": "1",
    "name": "Music Festival",
    "date": "2025-06-15",
    "location": "New York",
    "description": "A live music event",
    "isFree": true
  }
]
```

#### Get an event by ID

```
GET /events/{id}
```

#### Create a new event

```
POST /events
```

Request Body:

```json
{
  "name": "Tech Conference",
  "date": "2025-09-20",
  "location": "San Francisco",
  "description": "An event for tech enthusiasts",
  "isFree": false
}
```

#### Update an event

```
PUT /events/{id}
```

#### Delete an event

```
DELETE /events/{id}
```

## Error Handling

All errors return a JSON response with a message field:

```json
{
  "message": "Error description here"
}
```

Common HTTP status codes used:

- `200 OK` – Request was successful
- `201 Created` – New resource successfully created
- `400 Bad Request` – Invalid input
- `404 Not Found` – Resource does not exist
- `500 Internal Server Error` – Unexpected server issue

## Technologies Used

- **Node.js** with **Express.js**
- **Swagger** for API documentation
- **TypeScript**

## License

This project is licensed under the MIT License.
