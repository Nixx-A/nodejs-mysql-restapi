# Node.js MySQL REST API

A simple REST API created with Node.js, MySQL, and Express.

You are welcome to use this API freely. It is deployed at: [https://nodejs-mysql-restapi-production-10ab.up.railway.app/api/employees](https://nodejs-mysql-restapi-production-10ab.up.railway.app/api/employees)

## Endpoints

- **GET** all employees: `/api/employees`
- **GET** employee by ID: `/api/employees/:id`
- **POST**: `/api/employee`
- **DELETE**: `/api/employee/:id`
- **PATCH**: `/api/employee/:id`

## Sample Output

```json
[
  {
    "id": 1,
    "name": "John",
    "salary": 1000
  },
  {
    "id": 2,
    "name": "Mike",
    "salary": 1500
  },
  {
    "id": 3,
    "name": "Sara",
    "salary": 2000
  },
  {
    "id": 4,
    "name": "Alex",
    "salary": 3000
  },
  {
    "id": 5,
    "name": "Tom",
    "salary": 4000
  },
  {
    "id": 6,
    "name": "Jack",
    "salary": 5000
  },
  {
    "id": 7,
    "name": "Jill",
    "salary": 6000
  },
  {
    "id": 8,
    "name": "Nicolas",
    "salary": 7000
  },
  {
    "id": 9,
    "name": "Carlos",
    "salary": 9000
  }
]
