CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    login VARCHAR(100) UNIQUE,
    password VARCHAR(20),
    avatar VARCHAR(255)
);
