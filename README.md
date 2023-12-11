# MyWallet

# Demo

[Deploy](https://my-wallet-2u93.onrender.com/)

# How it works?

This project is a REST API to serve the application of an Expense Manager Software. 

# Technologies used

For this project, were used:

- Node (version 18.17.1);
- Express;
- JavaScript;
- MongoDB;
- Joi.

## How to run for development

1. Clone this repository

2. Install all dependencies

```bash
npm i
```

3. Start a MongoDB server in the terminal (usually this path)

```bash
mongod --dbpath ~/.mongo
```

4. Then in another terminal connect with database

```bash
mongosh
```

3. Create a MongoDB database with whatever name you want

4. Configure the `.env` file using the `.env.example` file (see "Running application locally or inside docker section" for details)

5. Run the back-end in a development environment:

```bash
npm run dev
```