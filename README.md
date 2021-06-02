# Publishing Engine

## First time loading

### Check docker configurations
docker-compose config 

### Create database and constraints
docker exec -i db sh -c 'exec mysql -uroot -p"SuperSecretPassword"' < db.sql

### Test database connection
docker exec -it server node mysql.js

npx sequelize init:models
npx sequelize-auto -o "./models" -d publishing_engine -h localhost -u root -p 3306 -x SuperSecretPassword -e mysql


## Todo
# Create storybooks for login page
# Integrate front-end authentication
# Creatr front-end tests
# create back-end tests
# Integrate AWS S3 bucker to store files and images
# create additional mysql tables to hold meta data about articles



## Local Setup

# Connecting to the database
docker exec -it db bash

mysql -u root -p

## Production Setup
docker-compose -f production.yml up -d