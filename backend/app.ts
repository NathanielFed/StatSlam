#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StatSlamStack } from './infrastructure/statslam-stack';

const app = new cdk.App();
new StatSlamStack(app, 'StatSlamStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});