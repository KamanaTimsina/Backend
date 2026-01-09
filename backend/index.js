import express from 'express';
import "dotenv/config";
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/api/jokes',(req,res)=>{ 
const jokes  = [
    {
    id:1,
    title: "a first joke",
    content: 'this is one of the joke'
    },
    {
    id:2,
    title: "a second joke",
    content: 'this is one of the joke'
    },
    {
    id:3,
    title: "a third joke",
    content: 'this is one of the joke'
    },
    {
    id:4,
    title: "a fourth joke",
    content: 'this is one of the joke'
    },
    {
    id:5,
    title: "a fifth joke",
    content: 'this is one of the joke'
    }
];
res.json(jokes);
});

// app.get('/login', (req, res) => {
//   res.send('Hello login page!')
// })

// app.get('/signup', (req, res) => {
//   res.send('Hello signup page!')
// })

app.listen(PORT, () => {
  console.log(`serving at http://localhost:${PORT}`)
})


