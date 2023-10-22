const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const blogs=[]
app.use(bodyParser.json());

app.get('/blog', (req, res) => {
    res.status(200);
    res.json(blogs);
});

app.post('/blog', (req, res) => {
    const blog = req.body;
    blogs.push(blog);
    res.status(201).send(req.body);
});

app.put('/blog/{id}',(req,res)=>{
    const id=req.params.id;
    const updatedBlog=req.body;
    const BlogIndex=blogs.findIndex((blog)=>blog.id==id);

    if(BlogIndex !== -1){
        blogs[BlogIndex]=updatedBlog;
        res.status(200).send({message:"Updated Successfully"})
    }else{
        return res.status(404).send({message:"No Blog found with the given ID"})
    }
});

app.delete('/blog/{id}',(req,res)=>{
    const id=req.params.id;
    const BlogIndex=blogs.findIndex((blog)=>blog.id==id);

    if(BlogIndex !== -1){
        blogs.splice(BlogIndex,1);
        res.status(200).send({message:"Deleted Successfully"});
    } else{
        return res.status(404).send({message: "No Blog Found With The Given Id"});
    }
});
            


app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
});
