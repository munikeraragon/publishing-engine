# Publishing Engine
A publishing engine similar to [Medium](https://medium.com/) and [DEV](https://dev.to/).

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
docker-compose up -d
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
```

