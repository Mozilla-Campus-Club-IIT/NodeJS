![header](https://github.com/Mozilla-Campus-Club-IIT/NodeJS/blob/master/file/hacktoberfesth1.jpg)
![title](https://github.com/Mozilla-Campus-Club-IIT/NodeJS/blob/master/file/Collection8.jpg)

## NodeJS Project for Hacktoberfest 2017
Create a NodeJS server using ExpressJS and other NPM modules, capable of hosting the official Mozilla Campus Club website with API endpoints for core functions. Data storage & retrieval should be conducted via the JSON files stored in the _/config_ directory. You are free to create as many JSON files with structures as needed, however limit each endpoint type (ex: _/api/v1/members/..._) to a single JSON file (ex: _/config/members.json_).

### Installing Node and NPM
Refer the tutorial [here](https://nodejs.org/en/download/package-manager/) to install Node and NPM on your desired operating system.

### Recommended IDE
The latest version of [IntelliJ WebStorm](https://www.jetbrains.com/webstorm/) is recommended for this project. Proceed to download (free for students) on [JetBrains Products for Learning](https://www.jetbrains.com/student/), or obtain a [student license](https://www.jetbrains.com/shop/eform/students). Install your desired IDE only after installing Node and NPM to avoid configuration issues.

### Getting Started
1. Configure your local machine's SSH keys in your GitHub profile. Follow this [tutorial](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) for more information. 
1. Navigate to a directory on your local machine and execute `git clone git@github.com:Mozilla-Campus-Club-IIT/NodeJS.git`
2. Enter the the `/NodeJS` directory and execute `npm i` to initialize NPM and install the relevant modules 

### Endpoints
1. POST - `/api/v1/members/register`
2. GET - `/api/v1/members/:id`
3. GET - `/api/v1/members/auth` (i.e. member login, available only for admin members)
3. GET - `/api/v1/members/list`
4. DELETE - `/api/v1/members/:id`
5. POST - `/api/v1/events/register`
6. GET - `/api/v1/events/:id`
7. GET - `/api/v1/events/list`
8. DELETE - `/api/v1/events/:id`

Find instructions for developing the relevant endpoints in the Issues section of this repo.

### Debugging and Testing
Use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) to test the API endpoints.

### Notes
Refer the Projects section to view the development stages of this application.
