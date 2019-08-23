const Express = require('express');
var app=new Express();
app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/signup',(req,res)=>{
    res.render('signup');
});
app.get('/authors',(req,res)=>{
    res.render('author',author);
});
app.get('/authorsingle/:id',(req,res)=>{
    const y= req.params.id;
    res.render('authorsingle',{author:author[y]});
});
app.get('/add',(req,res)=>{
    res.render('addbooks');
});

author=[{
    'name':'Jitender kumar',
    'picture':'/images/Jitender Kumar.jpg',
    'DoB':'1 September 1990 ',
    'Place':'Khairthal, Alwar, India',
    'Books': 'Love-Tennis'
},{
    'name':'Sonal Vashisht',
    'picture':'/images/K_Sonal_Choudhary.jpg',
    'DoB':'31 July 1965',
    'Place':'Gurugram, Haryana',
    'Books': 'Life in Pieces'
},{
    'name':'Sanya Khurana',
    'picture':'/images/sanya-malhotr-aa_d.jpg',
    'DoB':'18 November 1987',
    'Place':'Chandigarh, India',
    'Books': 'One Action'
},{
    'name':'Priti sandeep gaglani',
    'picture':'/images/pritiimage.jpg',
    'DoB':'8 April 1989',
    'Place':'United States',
    'Books': 'Mindful Eating'
},{
    'name':'ANUP KUMAR MANDAL',
    'picture':'/images/anup.jpeg',
    'DoB':'9 March 1984',
    'place':'India',
    'books': 'Firewall'
}];

app.listen(process.env.PORT || 3005,()=>{
    console.log("server running on port: http://localhost:3005");
});