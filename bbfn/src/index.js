import  express  from 'express';
//import mongoose from 'mongoose';
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/

const server = express();

server.use(express.json());
const port = 3030;

server.get('/', (req, res) => {
  res.json({message:"Hello, world!"});
})

//mongoose.connect("mongodb + srv://Serena88_:12345678@@atlascluster.wmcuwgi.mongodb.net/EPICODE")
  //.then(() => {
    server.listen(port, () => {
      console.log('🚀server listening on port' + port);
    })
//})//


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
//
/*const server = express();
const port = 3030;

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

mongoose.connect("mongodb+srv://Serena88_:12345678@atlascluster.wmcuwgi.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(port, () => {
      console.log('🚀 Server listening on port ' + port);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });*/
