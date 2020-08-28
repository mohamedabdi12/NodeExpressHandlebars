# NodeExpressHandlebars
# Eat-Da-Burger

Created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Every burger will be stored in a database, whether devoured or not.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── burger.png
|           └── example.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Example
![img](public/assets/images/Screenshot 2020-08-27 at 5.38.03 PM.png)

* **Heroku Link** - ths links is not working yet 