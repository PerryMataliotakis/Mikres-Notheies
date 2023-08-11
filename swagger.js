const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')
const Rooms = require('./models/rooms.model')
const Employee = require('./models/employees.model')
exports.options = {
    definitions: {
      User: m2s(User),
      Rooms: m2s(Rooms),
      Employee: m2s(Employee)
    },
    swagger: '2.0',
    info: {
      version: '1.0.0',
      description: 'Products Project Application API',
      title: 'Products CRUD API'
    },
    host: 'localhost:3000',
    basePath: '/',
    tags: [
      {
        name: 'Users',
        description: 'API for users'
      },
      {
        name: 'Rooms',
        description: 'API for rooms'
      },
      {
        name: 'Employees',
        description: 'API for employees'
      }
    ],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    paths: {
      '/api/user/findAll': {
        get: {
          tags: ['Users'],
          summary: 'Get all users from the system',
          responses: {
            200: {
              description: 'OK',
              schema: {
                $ref: '#/definitions/User'
              }
            }
          }
        }
      },
      '/api/user/findOne/{surname}': {
        get: {
          tags: ['Users'],
          parameters: [
            {
              name: 'surname',
              in: 'path',
              required: true,
              description: 'Surname of user',
              type: 'string'
            }
          ],
          summary: 'Get a user from the system',
          responses: {
            200: {
              description: 'User found',
              schema: {
                $ref: '#/definitions/User'
              }
            }
          }
        }
      },
      '/api/user/create': {
        post: {
          tags: ['Users'],
          description: 'Create new user in app',
          parameters: [
            {
              name: 'Parameters for user',
              in: 'body',
              description: 'User parameters that we will create',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  surname: { type: 'string' },
                  email: { type: 'string' },
                  address: { type: 'string' },
                  phone: { type: 'string' }
                },
                required: ['email']
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'New user is created'
            }
          }
        }
      },
      '/api/user/update/{surname}': {
        patch: {
          tags: ['Users'],
          description: 'Update user in system',
          parameters: [
            {
              name: 'surname',
              in: 'path',
              required: true,
              description: 'Surname of the user to update',
              type: 'string'
            },
            {
              name: 'update user in system',
              in: 'body',
              description: 'User that will be updated',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  surname: { type: 'string' },
                  email: { type: 'string' },
                  address: { type: 'string' },
                  phone: { type: 'string' }
                },
                required: ['email']
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'Updated user'
            }
          }
        }
      },
      '/api/user/delete/{surname}': {
        delete: {
          tags: ['Users'],
          description: 'Delete user from the system',
          parameters: [
            {
              name: 'surname',
              in: 'path',
              description: 'Surname of the user to delete',
              type: 'string'
            }
          ],
          responses: {
            200: {
              description: 'Deleted user'
            }
          }
        }
      },
      '/api/rooms/findAll': {
        get: {
          tags: ['Rooms'],
          summary: 'Get all rooms from the system',
          responses: {
            200: {
              description: 'OK',
              schema: {
                $ref: '#/definitions/Rooms'
              }
            }
          }
        }
      },
      '/api/rooms/findOne/{roomNumber}': {
        get: {
          tags: ['Rooms'],
          parameters: [
            {
              name: 'roomNumber',
              in: 'path',
              required: true,
              description: 'Room number',
              type: 'string'
            }
          ],
          summary: 'Get a room from the system',
          responses: {
            200: {
              description: 'Room found',
              schema: {
                $ref: '#/definitions/Rooms'
              }
            }
          }
        }
      },
      '/api/rooms/create': {
        post: {
          tags: ['Rooms'],
          description: 'Create new room in app',
          parameters: [
            {
              name: 'Parameters for room',
              in: 'body',
              description: 'Room parameters that we will create',
              schema: {
                type: 'object',
                properties: {
                  roomNumber: { type: 'string' },
                  bed: { type: 'string' },
                  price: { type: 'number' }
                },
                required: ['roomNumber', 'bed', 'price']
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'New room is created'
            }
          }
        }
      },
      '/api/rooms/update/{roomNumber}': {
        patch: {
          tags: ['Rooms'],
          description: 'Update room in system',
          parameters: [
            {
              name: 'roomNumber',
              in: 'path',
              required: true,
              description: 'Room number to update',
              type: 'string'
            },
            {
              name: 'update room in system',
              in: 'body',
              description: 'Room that will be updated',
              schema: {
                type: 'object',
                properties: {
                  roomNumber: { type: 'string' },
                  bed: { type: 'string' },
                  price: { type: 'number' }
                }
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'Updated room'
            }
          }
        }
      },
      '/api/rooms/delete/{roomNumber}': {
        delete: {
          tags: ['Rooms'],
          description: 'Delete room from the system',
          parameters: [
            {
              name: 'roomNumber',
              in: 'path',
              description: 'Room number to delete',
              type: 'string'
            }
          ],
          responses: {
            200: {
              description: 'Deleted room'
            }
          }
        }
      },
      '/api/employees/findAll': {
        get: {
          tags: ['Employees'],
          summary: 'Get all employees from the system',
          responses: {
            200: {
              description: 'OK',
              schema: {
                $ref: '#/definitions/Employee'
              }
            }
          }
        }
      },
      '/api/employees/findOne/{surname}': {
        get: {
          tags: ['Employees'],
          parameters: [
            {
              name: 'surname',
              in: 'path',
              required: true,
              description: 'Surname of the employee',
              type: 'string'
            }
          ],
          summary: 'Get an employee from the system',
          responses: {
            200: {
              description: 'Employee found',
              schema: {
                $ref: '#/definitions/Employee'
              }
            }
          }
        }
      },
      '/api/employees/create': {
        post: {
          tags: ['Employees'],
          description: 'Create new employee in app',
          parameters: [
            {
              name: 'Parameters for employee',
              in: 'body',
              description: 'Employee parameters that we will create',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  surname: { type: 'string' },
                  address: { type: 'string' },
                  phone: { type: 'string' },
                  role: { type: 'string' }
                },
                required: ['name', 'surname', 'address', 'phone', 'role']
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'New employee is created'
            }
          }
        }
      },
      '/api/employees/update/{surname}': {
        patch: {
          tags: ['Employees'],
          description: 'Update employee in system',
          parameters: [
            {
              name: 'surname',
              in: 'path',
              required: true,
              description: 'Surname of the employee to update',
              type: 'string'
            },
            {
              name: 'update employee in system',
              in: 'body',
              description: 'Employee that will be updated',
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  surname: { type: 'string' },
                  address: { type: 'string' },
                  phone: { type: 'string' },
                  role: { type: 'string' }
                }
              }
            }
          ],
          produces: ['application/json'],
          responses: {
            200: {
              description: 'Updated employee'
            }
          }
        }
      },
      '/api/employees/delete/{surname}': {
        delete: {
          tags: ['Employees'],
          description: 'Delete employee from the system',
          parameters: [
            {
              name: 'surname',
              in: 'path',
              required: true,
              description: 'Surname of the employee to delete',
              type: 'string'
            }
          ],
          responses: {
            200: {
              description: 'Deleted employee'
            }
          }
        }
      }
    }
  }