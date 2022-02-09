const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//model
const detailsModel = require('./models/detail');
const sliderModel = require('./models/slider');
const serviceModel = require('./models/service');


const mainRoutes = require('./routes/main');
const authorRoutes = require('./routes/author');
const tcsRoutes = require('./routes/tcs');


const PORT = process.env.PORT || 3000;
const app = express();



//to handle form data
app.use(bodyParser.urlencoded({
    extended: true
}))

//Routing
app.use("", mainRoutes);
app.use("/author", authorRoutes);
app.use("/tcs", tcsRoutes);

//Template Engine
app.set('view engine', 'hbs');
app.set("views", "views");

//serving static resources
app.use('/static_resources', express.static("public"));
//http://localhost:3000/static_resources/images/wp1.jpg

//Partials configuration
hbs.registerPartials("views/partials");



//db connections
mongoose.connect("mongodb://localhost/durgesh_freelance", () => {
    console.log("DB Connected");

    /*   serviceModel.create([
           {
               "icon": "fab fa-angellist",
               "title": "Provide Best Courses",
               "description": "Courses that will really help you, to learn the best way possible",
               linkName: "Learn Now",
               linkUrl: "https://ignite246.github.com"
           },
   
           {
               "icon": "fab fa-accusoft",
               "title": "Cloud Services",
               "description": "Cloud ServicesCloud Services Cloud Services Cloud Services Cloud Services Cloud Services",
               linkName: "Try Now",
               linkUrl: "https://ignite246.github.com"
           },
   
           {
               "icon": "fas fa-atlas",
               "title": "Website Hosting",
               "description": "Website Hosting Website Hosting Website Hosting Website Hosting Website Hosting",
               linkName: "Deploy Now",
               linkUrl: "https://ignite246.github.com"
           },
           {
               "icon": "fab fa-accusoft",
               "title": "Make Website",
               "description": "Very beautiful dyanmic website at genuine price",
               linkName: "Check Out",
               linkUrl: "https://ignite246.github.com"
           },
       ]);
   
       */


    /*   sliderModel.create([
           {
               "title": "Spring Framework",
               "subtitle": "Spring is a popular framework for developing Java EE Application",
               "imageUrl": "/static_resources/images/slider1.jpg",
               "class": "active"
   
           },
   
           {
               "title": "React Framework",
               "subtitle": "React is a popular framework for developing UI for SPA",
               "imageUrl": "/static_resources/images/slider2.jpg",
               "class": ""
           },
   
           {
               "title": "Hibernate",
               "subtitle": "Hibernate is an ORM tool that helps in dealing with MySQL database in Object Oriented Fashion",
               "imageUrl": "/static_resources/images/slider3.jpg",
               "class": ""
           },
   
           {
               "title": "Spring Boot",
               "subtitle": "Springboot is a popular framework to create REST APIs in Java World",
               "imageUrl": "/static_resources/images/slider1.jpg",
               "class": ""
           }
       ]);
   
   */

    /*   detailsModel.create({
         brandName: "RS Solutions",
         brandIconUrl: "https://thumbs.dreamstime.com/z/initial-rs-icon-design-template-elements-business-company-logo-outstanding-professional-elegant-trendy-awesome-artistic-black-185758664.jpg",
         links: [
             {
                 label: "Home",
                 url: "/",
             },
             {
                 label: "Services",
                 url: "/services",
             },
             {
                 label: "Gallery",
                 url: "/gallery",
             },
             {
                 label: "About US",
                 url: "/about",
             },
             {
                 label: "Contact US",
                 url: "/contact",
             }
 
         ]
     });
 
     */
});












app.listen(PORT, () => {
    console.log(`Server is listeneing at  ${PORT}`);
})