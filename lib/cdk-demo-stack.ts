import cdk = require('@aws-cdk/core');
import apigw = require('@aws-cdk/aws-apigateway')
import { MessageService } from './message-service'

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const messageService = new MessageService(this, "MessageService")

    new apigw.LambdaRestApi(this, 'MessageApi', {
      handler: messageService.handler
    })
  }
}
