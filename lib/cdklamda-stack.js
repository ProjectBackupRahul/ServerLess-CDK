const { Stack, Duration } = require('aws-cdk-lib');
const cdk = require('@aws-cdk/core')
// const sqs = require('aws-cdk-lib/aws-sqs');
const myLambda = require('./my_lambda');

class CdklamdaStack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

  
    // The code that defines your stack goes here
    new myLambda.MyLambda(this, 'MyLambda')
  }
}

module.exports = { CdklamdaStack }
