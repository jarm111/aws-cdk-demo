// const { DynamoDB } = require('aws-sdk');

exports.handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  // const documentClient = new DynamoDB.DocumentClient();

  if (event.path === '/' && event.httpMethod === 'GET') return getHome()
  if (event.path === '/api/messages') {
    if (event.httpMethod === 'GET') return getMessages()
    if (event.httpMethod === 'POST') return postMessage()
  }

  return unknownEndpoint()
};


const getMessages = () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: `Get all messages`
  })
})

const postMessage = () => ({
  statusCode: 201,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: `Post message`
  })
})

const getHome = () => ({
  statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `Welcome to messages API, try GET/POST to /api/messages`
    })
})

const unknownEndpoint = () => ({
  statusCode: 404,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      error: `Unknown endpoint: ${event.path}`
    })
})