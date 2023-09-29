# Dog-ipedia

Dog-ipedia is a Phase 1 project for [Flatiron School](https://flatironschool.com/). Its purpose is to educate users about various dog breeds and allows them to contribute their knowledge as well. Dog-ipedia is a single page app built with HTML, CSS and Javascript that accesses data from a db.json file using [json-sever](https://www.npmjs.com/package/json-server). 

This project also makes use of event listeners that enable interactivity. Each event listener has its own unique callback function. The final objective was to manipulate our fake REST API data using array iteration methods.

### Getting started

To get this app running on your local machine, first **fork** a copy into your Github account then **clone** from that copy. Once you've opened the code files from your terminal, run the following commands to get json-server working...

Install JSON Server:

`npm install -g json-server`

Start JSON Server:

`json-server --watch db.json`

Now if you go to http://localhost:3000/dogs/, you'll see the data that populates our index.html.

Open the index.html file in your browser to interact with the page and learn more about various dog breeds.

### Shout outs

This project was created by [Andre Marrero](https://github.com/Mr-Wisdom) and myself. We enjoyed learning about how to manipulate the DOM and how to get front end pieces up and running more efficiently with [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).