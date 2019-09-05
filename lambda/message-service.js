const { DynamoDB } = require('aws-sdk');

exports.handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  if (event.path === '/' && event.httpMethod === 'GET') return getHome()
  if (event.path === '/api/messages') {
    if (event.httpMethod === 'GET') return getMessages()
    if (event.httpMethod === 'POST') return postMessage(event.body)
  }

  return unknownEndpoint(event)
};

const getMessages = async () => {
  const documentClient = new DynamoDB.DocumentClient()
  const params = {
    TableName: process.env.MESSAGES_TABLE_NAME
  }

  try {
    const result = await documentClient.scan(params).promise()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.Items)
    }
  } catch(err) {
    handleError(err)
  }
}

const postMessage = async (body) => {
  const documentClient = new DynamoDB.DocumentClient()
  const { content } = JSON.parse(body)
  
  if (!content) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: `Content field missing in body`
      })
    }
  }

  const params = {
    TableName: process.env.MESSAGES_TABLE_NAME,
    Item: {
      id: (Math.random() * 10000).toString(),
      content
    }
  }

  try {
    await documentClient.put(params).promise()
    return {
      statusCode: 201,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.Item)
    }
  } catch(err) {
    handleError(err)
  }
}

const getHome = () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: `Welcome to messages API, try GET/POST to /api/messages`
  })
})

const unknownEndpoint = (event) => ({
  statusCode: 404,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    error: `Unknown endpoint: ${event.path}`
  })
})

const handleError = (err) => {
  console.log(err)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Error: err
      })
    }
}
