# Capstone Project - Serverless design

This project is a simple photo upload app using AWS Lambda and Serverless framework. Once logged in users can create a post by uploading a photo with a caption. Users also have the option to mark any of their posts as favoruites, they are also able to delete their posts.

User photos are stored in an S3 Bucket on AWS

## Back End

The back end uses AWS Lambda and Serverless framework.

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

## Front End

The front end uses React and Typescript.

To run the front end, first edit the frontend/src/config.ts file to set correct parameters. And then run the following commands:

```
cd frontend
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless Capstone Project application.
