const aws = require("aws-sdk")
const ddb = new aws.DynamoDB()

const tableName = process.env.USER_TABLE

exports.handler = async (event) => {
  // save new user
  if (!event?.request?.userAttributes?.sub) {
    console.log('No sub provider')
    return
  }

  const now = new Date()
  const timestamp = now.getTime()

  const userItem = {
    __typename: { S: 'User' },
    _lastChangedAt: { N: `${timestamp}` },
    _version: { N: '1' },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
  }

  const params = {
    Item: userItem,
    TableName: tableName,
  }

  try {
    await ddb.putItem(params).promise()
    console.log('success')
  } catch (error) {
    console.log('putItem error', error)
  }
};
