import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class StatSlamStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DynamoDB Table
    const table = new dynamodb.Table(this, 'StatSlamTable', {
      tableName: 'statslam-data',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Lambda Function
    const apiLambda = new lambda.Function(this, 'StatSlamApi', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    table.grantReadWriteData(apiLambda);

    // API Gateway
    const api = new apigateway.RestApi(this, 'StatSlamApiGateway', {
      restApiName: 'StatSlam API',
      description: 'API for StatSlam application',
    });

    const integration = new apigateway.LambdaIntegration(apiLambda);
    api.root.addMethod('ANY', integration);
    api.root.addProxy({
      defaultIntegration: integration,
    });
  }
}