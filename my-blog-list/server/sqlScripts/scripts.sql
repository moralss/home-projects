-- password authorName blog email 


-- user table
--  email           hashedpasword
-- moral@gmail.com , gfbfdfdffds343

-- mbraf@gmail.com , gbrfdjdffmds343


-- author 
-- moral 
-- Fk user.id

-- blog
-- lorem 
-- FK author.id

-- lorem
-- FK 1
-- 


-- lorem


INSERT INTO authors ( name  , user_id) 

INSERT INTO blogs ( text , author_id)
VALUES ( 'boreme ,,dfdlfkd k bkls fd kfkjbjlj dfdsf' ,  1 ); 

INSERT INTO users ( name , hashed_password ) 

select * from authors inner join blogs on author_id = authors.id;  




CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    hashed_password varchar(255) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                





CREATE TABLE IF NOT EXISTS authors (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);



CREATE TABLE IF NOT EXISTS blogs (
    id serial PRIMARY KEY,
    text varchar(255) NOT NULL,
    author_id INT REFERENCES authors(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

