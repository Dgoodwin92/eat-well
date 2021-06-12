# **eat-well**
## **Project Overview**
Eat Well is a recipe sharing site, where users can create, share and edit recipes. 

This site has been developed to appeal to people of all walks of life, the site has a simple design which will mean that it will appeal to a wider audience and keeps the focus on the details of the recipes. 

For this project I have used HTML, CSS, JavaScript and Python to build the site making sure that it is fully responsive to the interaction of the user on what ever device. 

## **Table of Contents**
* [1.**UX**](#1-ux)
    * [**User Stories**](#user-stories)
    * [**Wireframes**](#wireframes)

## 1. **UX**
Overview of the UX design including the wireframes which have been created as a foundation for the site.

### **User Stories**
* As a user I would like to be looking at a clean and responsive webpage.
* As a user I would like to be able to clearly see the information of the recipes, so that I can find the relevant information. 
* As a user I want to have detailed information for the recipe I have chosen.
* As a user I want to be able to search for specific recipes and/or foods which I may want to make.
* As a user I would like to upload my own recipes for others to use.
* As a user I want to be able to edit and remove previous recipes I have uploaded.
* As a user I want to be able to register and login so that I can add recipes. 
* As a user I want to login so that I can edit or delete my previous recipes. 
* As a user I want clear feedback to know when I have completed an upload that it has been succesful. 
##### Admin
* As Admin I want to be able to edit and delete content to keep the site regulated.
* I want to be able to add new recipes and content to improve user experience.

## **Wireframes**
This website will be clean and easy to use, with a simple design and basic colour scheme.
![Wireframe Image](static/images/wireframes/Home.png)
![Wireframe Image Two](static/images/wireframes/Recipes.png)
#### Site Map
![Site Map](static/images/wireframes/eat-well-sitemap.png)

## **Structure**
From the above process (Wireframes and Sitemap) I was able to figure out the structure of this site. 
##### Recipes Page/Landing Page:
* Hero Image: Relevant to the recipe page, with the title Recipes.
* Recipe Cards: Visual images with recipe title, brief description, serving size and total time to cook will be displayed.
* Search Bar: Text input search bar, for the user to search within the site for desired recipe or specific food.
* Search & Cancel Buttons: Buttons to enter the search or clear the search results to take user back to all the recipes.
##### Individual Recipe Page:
* Recipe Title: To provide user the name of the chosen recipe. 
* Method: To provide the user with information on how to prepare the food. 
* Ingredient List: To provide the user with the items needed to complete this recipe.
* Tips and Tricks: To provide the user with any additional information if needed.
##### Login & Register Page:
* Username Input: Text input box to allow user to type in their username.
* Password Input: Text input box to allow user to type in their password.
##### Profile Page:
* Welcome User Banner: Title which will welcome the user to their profile.
* User Recipe Cards: The recipes this user uploaded are shown within this page.
* Add New Recipe Button: Button to allow user to upload a new recipe.
* Edit/Delete Buttons: Buttons with each recipe card to allow user to edit or delete their recipes.
##### Add New Recipe Page:
* Recipe Name: Text input box for user to enter recipe name
* Description: Text input box for user to enter a small description of the recipe within 25-100 characters.
* Ingredients: Text input box for user to enter ingredient list as a list.
* Method: Text input box for user to enter the method of the recipe as a list.
* Serves: Text input box for user to enter the amount of people it serves numerically. 
* Total Time: Text input box for user to enter total time it takes to prepare the meal in hh:mm. 
##### Edit Recipe Page:
* Recipe Name: Text input box for user to edit recipe name
* Description: Text input box for user to edit a small description of the recipe within 25-100 characters.
* Ingredients: Text input box for user to edit ingredient list as a list.
* Method: Text input box for user to edit the method of the recipe as a list.
* Serves: Text input box for user to edit the amount of people it serves numerically. 
* Total Time: Text input box for user to edit total time it takes to prepare the meal in hh:mm.
* Update Button: Update button for user to finalise the edit.
* Reset Button: For user to reset back to previous information.
* Delete Button: For user to delete this recipe.
##### Footer:
* Footer: This is a small area on the page to contain the copyright and social media links. 

### Design
I have made an effort to keep this site clean and tidy with pops of colour. 

#### Styling
##### Colours
With a simple title of Eat Well, I wanted to keep in tune with a simple design for this page. On the NavBar I am using the colour "Blue-Grey" and "White" font, this is to give a clean and modern colour scheme.

Within the site I have chosen to use accents colours to give the site a little more life. The search buttons are "Green" to search and "Red" to cancel, this follows into each card panel recipe to have a "Green" edit button and "Red" delete button. 

#### Font and Wording
This website has been written in a way to be informative but also casual, there has been an effort to keep technical langauge to a minimal amount.

I have use Two [Google Fonts](https://fonts.google.com/) which are "Lato" for the main headings and main text and "Handlee" for supportive headings just to break up the sharpness of "Lato". "Sans Serif" has been used as a safe back-up if the other fonts were to fail.

#### Styling Extras
I chose to use [Font Awesome](https://fontawesome.com/) for icons within this site, to highlight key areas within the recipes and on the forms. 

Within the Navigation, once the application is used on a small screen the navbar will collapse into a chicken drum stick as a dropdown navigation. This is intended to be light hearted and also to continue on with the food theme.

Cards have been used to keep the site tidy and clean, they will have images on each card. Currently they have an image I have created myself due to the fact that I could not figure out how to display individual images into a database, as I have not learnt this yet. 

## Features
This site allows users to view, create, search, edit and delete existing recipes. Users can search this site for recipes using any words that they would like. Once a user creates a recipe this can be shown on their personal user page.
#### Exisiting Features
##### The header
* Contains the name of the website, to help build familiarity amongst users
* NavBar allows the user to navigate around the site easily, within this they can also register and login.
##### Home Page
* Title of the site is shown on this page, with Hero Image.
* Recipes created by all users are displayed here.
* Search Bar for users to search the site for any recipe they would like.
* Search Results replace previous recipes with the matches for the search, these are shown on cards.
##### Login/Registration
* Username input area for user to create desired username or to enter their profile.
* Password input area for user to create or enter their profile.
* Login/Registration button to submit the form, to either register and new user or to log in existing user.
## Acknowledgements
* Wireframes created on [Mockflow](https://mockflow.com/)
* Sitemap created on [Creately](https://creately.com/)

