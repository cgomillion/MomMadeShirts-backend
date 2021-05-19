# MomMadeShirts-backend

Refrence Website: https://mommadecustoms.com/

Project 4 -- Capstone -- MomMadeShirts

![wireframe](/images/Custom_Wireframe.png)
![wireframe](/images/Home_Page_wireframe.png)
![wireframe](/images/Item_indexexample_wireframe.png)
![wireframe](/images/Login_wireframe.png)
![wireframe](/images/Shopping_cart_wireframe.png)

Problem/Scenario: My older sister, Lauren, makes custom printed apparel. She has contracted someone to build her a web application. While it is 80-90 % complete, I would like to take the knowledge I have gained and apply myself to make my own version of her online retail web application.

Purpose: To create an interactive and smooth functioning website for my sister's clients/consumer to use and have access to her entire inventory.

Likely Users: Fashionistas, Kids, Parents, Sports Teams, Professional Athletes, Teens, Adults, Elderly

:productType
7 Restful Routes | HTTP | URL | DESC.
---------------- | ---- | ---- | -----
Index | GET | /:productType | List of all tanktops
Create | POST | /:productType | Creates new tanktop on server
Update | PUT/PATCH | /:productType/:id | Updates the data from 'edit' on server
Destroy | DELETE | /:productType/:id | Removes tanktop (id) from the server

Customizer 

Ability to upload picture to apparel and change size and color 
TBD

-----------  USER STORIES  --------------

-> When the user enters the website url, they will be shown the home screen with a carosel of featured items, as well as: A header to display the different tabs/links for the types of apparel provided as well as the ability to log-in and view their cart guest/user, with all the contact info located at the bottom.

-> When the user clicks on any given apparel tab (t-shirt, sweatshirt, etc.), they will be redirected to the selected apparel type's index page; a gallery of all the available designs and styles

-> The User will be able the click any item individually and see its view page; a display that allows the user to select the size, color and, quantity as needed and add to their shopping cart

-> The User will be able to view and edit their shopping cart  before completing the check-out transaction.

-> The User will be able the register and log-in to an account that will save and store their previous cart selections


--------- Models ----------

const productSchema = new Schema({ <br />
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?) // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String, <br />
    price: Number <br />
});

const usersSchema = new Schema({ <br />
    username: { type: String, required: true }, <br />
    password: { type: String, required: true } <br />
});

const cartSchema = new Schema({
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?) // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String, <br />
    price: Number, <br />
    qty: Number
    
})


------- Milestones ----------

1. Create the backend and get the home page to render

2. Get the Full Crud functionality for one apparel item

3. Follow suit with all of the apparel items/models ^^

4. Create React App and Render Hello

5. Set up React App and Connect to the backend

6. Create components and get Backend data to render on front end

7. Test functionality and anticipate bugs

8. Deploy 


Front End : React (Admin will handle adding new products and editing the inventory only)

Backend : Node.js, MongoDB, Mongoose