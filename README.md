# blog

## First time loading

### Check docker configurations
docker-compose config 

### Create database and constraints
docker exec -i db sh -c 'exec mysql -uroot -p"SuperSecretPassword" --database blog' < db.sql

### Test database connection
docker exec -it server node mysql.js