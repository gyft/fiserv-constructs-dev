import * as cdk from 'aws-cdk-lib';
import { ConstructHub } from 'construct-hub';
import { Construct } from 'constructs';

export class InnerSourceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ConstructHub(this, 'FiservConstructs');
  }
}
