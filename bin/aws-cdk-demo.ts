#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCdkDemoStack } from '../lib/aws-cdk-demo-stack';

const app = new cdk.App();
new AwsCdkDemoStack(app, 'AwsCdkDemoStack');
