const core = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const s3 = require("@aws-cdk/aws-s3");

class MyLambda extends core.Construct {

    constructor(scope, id){
        super(scope,id);

        const bucket = new s3.Bucket(this, "Store") // Note that it appends everything

        const handler = new lambda.Function(this, "Handler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code:lambda.Code.fromAsset("resources"),
            handler: "lambda.main",
            environment: {
                BUCKET: bucket.bucketName
            }
        });
          bucket.grantReadWrite(handler);
    }
}

module.exports = {MyLambda};