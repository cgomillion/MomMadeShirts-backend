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

T-Shirts
7 Restful Routes | HTTP | URL | DESC.
---------------- | ---- | ---- | -----
Index | GET | /tshirts | List of all t-shirts
Show | GET | /tshirts/:id | The t-shirt the user clicked on
New | GET | /tshirts/new | Shows form to enter new t-shirt info
Create | POST | /tshirts | Creates new t-shirt on server
Edit | GET | /tshirts/:id/edit | Get prefilled form for user/admin to change/edit
Update | PUT/PATCH | /tshirts/:id | Updates the data from 'edit' on server
Destroy | DELETE | /tshirts/:id | Removes T-Shirt (id) from the server

Sweatshirts
7 Restful Routes | HTTP | URL | DESC.
---------------- | ---- | ---- | -----
Index | GET | /sweatshirts | List of all sweatshirts
Show | GET | /sweatshirts/:id | The sweatshirt the user clicked on
New | GET | /sweatshirts/new | Shows form to enter new sweatshirt info
Create | POST | /sweatshirts | Creates new sweatshirt on server
Edit | GET | /sweatshirts/:id/edit | Get prefilled form for user/admin to change/edit
Update | PUT/PATCH | /sweatshirts/:id | Updates the data from 'edit' on server
Destroy | DELETE | /sweatshirts/:id | Removes sweatshirt (id) from the server

Hoodies
7 Restful Routes | HTTP | URL | DESC.
---------------- | ---- | ---- | -----
Index | GET | /hoodies | List of all hoodies
Show | GET | /hoodies/:id | The hoodie the user clicked on
New | GET | /hoodies/new | Shows form to enter new hoodie info
Create | POST | /hoodies | Creates new hoodie on server
Edit | GET | /hoodies/:id/edit | Get prefilled form for user/admin to change/edit
Update | PUT/PATCH | /hoodies/:id | Updates the data from 'edit' on server
Destroy | DELETE | /hoodies/:id | Removes hoodie (id) from the server

Tank Tops
7 Restful Routes | HTTP | URL | DESC.
---------------- | ---- | ---- | -----
Index | GET | /tanktops | List of all tanktops
Show | GET | /tanktops/:id | The tanktop the user clicked on
New | GET | /tanktops/new | Shows form to enter new tanktop info
Create | POST | /tanktops | Creates new tanktop on server
Edit | GET | /tanktops/:id/edit | Get prefilled form for user/admin to change/edit
Update | PUT/PATCH | /tanktops/:id | Updates the data from 'edit' on server
Destroy | DELETE | /tanktops/:id | Removes tanktop (id) from the server

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

const tShirt = new Schema({ <br />
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?) // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String <br />
});

const sweatshirt = new Schema({ <br />
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?), // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String <br />
});

const hoodie = new Schema({ <br />
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?), // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String <br />
});

const tanktop = new Schema({ <br />
    name: {type: String, required: true}, <br />
    brand: {type: String, required: true}, <br />
    color: (type: ?), // Array of colors  <br />
    size: {type: String, required: true}, <br />
    img: String, <br />
    description: String <br />
});


------- Milestones ----------

1. Create the backend and get the home page to render

2. Get the Full Crud functionality for one apparel item

3. Follow suit with all of the apparel items/models ^^

4. Create React App and Render Hello

5. Set up React App and Connect to the backend

6. Create components and get Backend data to render on front end

7. Test functionality and anticipate bugs

8. Deploy 


Front End : React

Backend : Node.js, MongoDB, Mongoose