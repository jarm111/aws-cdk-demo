# AWS CDK Introduction

![AWS CDK Logo](https://cdkworkshop.com/images/cdk-logo.png)

AWS Cloud Development Kit (AWS CDK) = *open-source software development framework to define cloud infrastructure in code and provision it through AWS CloudFormation*

- developer preview release August 2018 and generally available July 2019
- language support: TypeScript, JavaScript, Python, (dev preview: C#/.NET, Java)

## Basics

- everything is a construct: 
  - a single service
  - combination of services composed together
  - stack of constructs
  - app made of stack(s)
- construct is a cloud component
- AWS Construct Library: collection of easy to use constructs representing aws services
- AWS CDK Command Line Interface (CLI): tool to interact with CDK apps

![AWS CDK app stack](https://docs.aws.amazon.com/cdk/latest/guide/images/AppStacks.png)


## Pros

- define AWS infrastructure as code and provision through AWS Cloudformation
- offers easy to use abstractions of AWS services with rich API and sane defaults
- compose services together into custom components that can be maintained, reused and published
- advantages of modern IDE and code tools like code completion, inline documentation etc.
- advantages of programming languages like logic and abstractions

## Cons

- delay of new features getting into CDK
- new tech: lack of examples, tutorials and documentation
- not everyone working with infrastructure might be familiar enough with code

## Useful resources

https://aws.amazon.com/cdk/

https://docs.aws.amazon.com/cdk/latest/guide/home.html

https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html

https://cdkworkshop.com/

https://github.com/aws/aws-cdk

https://aws.amazon.com/blogs/aws/aws-cloud-development-kit-cdk-typescript-and-python-are-now-generally-available/