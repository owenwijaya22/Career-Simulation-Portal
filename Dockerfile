FROM node:18-alpine

ENV NODE_ENV=development
ENV PORT=80
ENV MONGODB_URI=mongodb+srv://simulation:careerhackers@cluster0.lpznqjr.mongodb.net/?retryWrites=true&w=majority

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]

# FROM public.ecr.aws/lambda/nodejs:16

# # Copy function code
# COPY . ${LAMBDA_TASK_ROOT}
  
# # Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
# CMD [ "index.handler" ]