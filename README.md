# about the Readable ap
Readable is a content and comments web app, like reddit.  Users can post content to categories, comment on posts, and vote on posts and comments.  The app uses react and redux.

To run this project
`$ nvm use 8.4`
`$ npm install`
`$ npm run start`


# Readable API Server
The app uses a simple local node.js server.  Documentation for that follow below.

## Installation

Install packages: `npm install`
Launch server: `node server`
Unless modified in `config.js` server will use port 3001


## API
Use an AuthorizationReactND header to work with your own data:

`fetch(url, { headers: { 'AuthorizationReactND': 'whatever-you-want' }})`

The following endpoints are available:  

`GET /categories`  
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.    

`GET /:category/posts`  
    Get all of the posts for a particular category   

`GET /posts`  
    Get all of the posts. Useful for the main page when no category is selected.  

`POST /posts`  
    Add a new post  
  
  **PARAMS:**   
    id - UUID should be fine, but any unique id will work  
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like  
    title - String  
    body - String  
    owner - String  
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.  

`GET /posts/:id`  
    Get the details of a single post  

`POST /posts/:id`  
    Used for voting on a post  

  **PARAMS:**  
    option - String: Either "upVote" or "downVote"  
    
`PUT /posts/:id`  
    Edit the details of an existing post  

  **PARAMS:**  
    title - String  
    body - String  

`DELETE /posts/:id`  
    Sets the deleted flag for a post to 'true'.   
    Sets the parentDeleted flag for all child comments to 'true'.  
  
`GET /posts/:id/comments`  
    Get all the comments for a single post  

`POST /comments`  
    Add a comment to a post  

  **PARAMS:**  
    id: Any unique ID. As with posts, UUID is probably the best here.  
    timestamp: timestamp. Get this however you want.  
    body: String  
    owner: String  
    parentId: Should match a post id in the database.  

`GET /comments/:id`  
    Get the details for a single comment  

`POST /comments/:id`  
    Used for voting on a comment.  

`PUT /comments/:id`  
    Edit the details of an existing comment  
  
  **PARAMS:**  
    timestamp: timestamp. Get this however you want.  
    body: String  

`DELETE /comments/:id`  
    Sets a comment's deleted flag to 'true'  
