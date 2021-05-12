# Blog/Portfolio App

## Table of Contents
* [Usage](#usage)
* [Storybook](#storybook)

## Usage

### Running with Docker
```bash
# building the image
docker build -t client .

# starting up a container
docker run -p 3000:3000 -v "$(pwd)":/usr/src/app -it client
```


### Running Locally

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.


