# Publishing Engine
A publishing engine similar to [Medium](https://medium.com/) and [DEV](https://dev.to/) built using
Typescript, React.js, and Graphql.

## Branches 
- main -> pr this branch for everything
- prod -> don't touch, this is what's running in prod


Quick Start
1) Clone repository
``` bash 
git clone https://github.com/munikeraragon/publishing-engine.git
```

2) CD into repository
``` bash
cd publishing-engine
```

3) Create a .env file inside server folder that contains the following fields.
```
MODE=development
MYSQL_ROOT_USER=SuperAdmin
MYSQL_ROOT_PASSWORD=SuperSecretPassword
MYSQL_DATABASE=blog

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID= 
GITHUB_CLIENT_SECRET=

FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

JWT_SERVER_SECRET=TypeGraphQL
``

3) Run Docker environmnet
``` bash
# dev
docker-compose up

# prod
docker-compose -f production.yml up -d
```

4) Run database migrations (You may need to create database if not exist)
``` bash
# if in development
docker exec server npx knex migrate:latest

# if in production
docker exec server npx knex migrate:latest --env production
```


## OTHER

Running graphql-codege
``` bash
# update server graphql, and then run the below commad
npx graphql-codegen --config codegen.yml
```

Connect to the database
``` bash
docker exec -it db bash

mysql -uroot -pSuperSecretPassword

CREATE DATABASE publishing_engine_dev;

CREATE DATABASE publishing_engine_stage;

CREATE DATABASE publishing_engine_prod;

USE publishing_engine_prod;
UPDATE User
SET role = 'ADMIN'
WHERE userName = 'munikeraragon';
```

Rollback migration
``` bash
docker exec server npx knex migrate:rollback
```

Todo:
- Add admin page to track number of users, posted articles, total article views
- implement refresh token correctly
- Add home button in navbar
- Create Loading Button when saving draft article
- Ability to delete article
- Create Follows table
- Allow uses to follow other users
- Refactor S3 services
- Create Home notification page


Notes:
Basic goals:
- I want to use this site to post articles and post projects.
- I want to be able to subscribe to other people.
- I want to be able to have a profile/portfolio page that people can see.

Strech goals:
- Platform to learn about coding as well as participate in open source projetcs.
 People - will be able to learn about the project and post things related to the project.