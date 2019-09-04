import cdk = require('@aws-cdk/core')
import lambda = require('@aws-cdk/aws-lambda')
import dynamodb = require('@aws-cdk/aws-dynamodb')

export class MessageService extends cdk.Construct {
  public readonly handler: lambda.Function

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id)

    const table = new dynamodb.Table(this, 'Messages', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
    })

    this.handler = new lambda.Function(this, 'MessageService', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'message-service.handler',
      code: lambda.Code.fromAsset('lambda'),
    })

    table.grantReadWriteData(this.handler)
  }
}
