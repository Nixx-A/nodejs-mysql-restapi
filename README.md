# nodejs-mysql-restapi
simple api rest created with mysql and express

you can use the api freely
deployed in : [https://nodejs-mysql-restapi-production-10ab.up.railway.app/api/employees](https://nodejs-mysql-restapi-production-10ab.up.railway.app/)

ENDPOINTS:
get all employess: /api/employees
get employee by id: /api/employees/:id
post: /api/employee
delete: /api/employee/:id
patch: /api/employee/:id

OUTPUT:
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
