# Simple-Blogging-API-NestJS

System built with Next.js/ShadCN/Tailwind in frontend and Nest.js in backend. The data is saved in a SQLite databse.

## Endpoints
The user can access and create posts, see existent posts and comment posts.

## How to run?
### Start backend
Start first the Nest.js in blogging-api directory. Using 'npm install' and 'npm start'.

### Start frontend
Start the Next.js application in blogging-front directory using 'npm install' and 'npm run dev'.

### Environment variable
Create a .env file in blogging-front 
```.env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/
```