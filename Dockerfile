FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
# # CMD [ "npm", "start" ]
# FROM public.ecr.aws/lambda/nodejs:16

# # Copy function code
# COPY . ${LAMBDA_TASK_ROOT}
  
# # Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
# CMD [ "index.handler" ]