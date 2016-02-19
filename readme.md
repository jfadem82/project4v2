# README

## Project 4 - ReVisit
Revisit is a digital diary to explore times and places in your life. Each entry is able to contain a picture, with a description of the picture, the date of occurrence, and also displays the user who made that entry. Users can also make chapters, which contain a collection of posts. Users can upload music to their chapters; the idea is they choose a song that reminds them of those memories. Between the pictures, music, date, and description, people can re-experience some of the feelings associated with that time in their life.

## Still in Development
* video upload
* geolocation
* modal animations for show posts
* User profile photos
* Be able to see other users albums

## Technologies Used
* MEANstack
* NODEMON
* Amazon s3
* Javascript
* bootstrap
* AJAX
* angular-jwt

##  Node Modules
	 Bcrypt
	 Body-Parser
	 Morgan
	 Mongoose
	 CORS
	 ui-router
	 
## Getting Started
After forking/cloning, dont forget to run `npm install`. S3 will not work locally unless you use your own keys and create a config file in the root containing 'auth.js' (which contains your keys). Also you must require 'auth.js' in the server.js . Also must replace all heroku urls with the localhost url where you will be running locally.

##User Stories
(/assets/p4_User_Stories.png)


##Wire Frames

### Home
![Landing Page](/assets/home.JPG)

### Login
![Landing Page](/assets/login.JPG)

### Entries
![Landing Page](/assets/entriesform.JPG)

### Chapters
![Landing Page](/assets/chapterform.JPG)

### Entries Show Page
![Landing Page](/assets/postsshow.JPG)



