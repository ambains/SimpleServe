# SimpleServe
The project aims to build a basic HTTP server that can handle client requests, perform operations on data stored in a SQL database, and respond to those requests with relevant data. 


To build a basic HTTP server, I choose Node.js, which is an open source Javascript server environment. This just means that you can use Node.js, a platform to create server side applications. My end goal is to create a data collection form in the form of a web application. 

I started by generating a package.json file on my local machine. Then,opened the terminal and used npm (Node Package Manager), a command-line tool, this is used to install, update, and remove packages and their dependencies. Another use case is to manage different versions and you can share your code with others using npm.I provided the details of my project in the prompts by the terminal and created a file named "package" for my new project, using the "npm init" command-line. The purpose of this is any installed packages from Node.js will be added to this package file and can be pulled in to use in your projects by using the "require" command.

Now to install the required dependencies for my project, I used "npm install express", a popular framework in Node.js to build web applications and APIs, along with "body-parser" and "mysql". Please refer to file labeled package.json.

The script for the server - please refer to file- index.json. The server connection to MYSQL database was sucessfully and is listening to requests on port 3000. 

The API was tested using Postman, please refer to screenshots 1, 2, 3 for the test of the following queries:


The test of get, post and fetch a single book were successful. 

Goal of the project- Built a basic HTTP server using Node.js that connects sucessfully to a MYSQL database in MYSQL workbench and listens/responds to the outlined queries in the API. 


