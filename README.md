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

3) Run Docker environmnet
``` bash
docker-compose up -d
```

4) Create database
``` bash
docker exec -i db sh -c 'exec mysql -uroot -p"SuperSecretPassword"' < db.sql
```



## OTHER
 To create server models
``` bash
npx sequelize-auto -o "./models" -d publishing_engine -h localhost -u root -p 3306 -x SuperSecretPassword -e mysql -l ts
```

Running graphql-codege
``` bash
update server graphql, and then run the below commad
npx graphql-codegen --config codegen.yml
```

Initialize husky
``` bash
cd .. && npx husky install
```

Connect to the database
``` bash
docker exec -it db bash
mysql -u root -p
```

