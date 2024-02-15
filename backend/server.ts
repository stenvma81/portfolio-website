import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Define a route handler for the root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Define a port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});