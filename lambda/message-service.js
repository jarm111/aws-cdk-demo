// const { DynamoDB } = require('aws-sdk');

exports.handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  // const documentClient = new DynamoDB.DocumentClient();

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: `Hello, you've hit ${event.path}`
    })
  };
};
