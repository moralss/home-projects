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

DELETE FROM users where id = 2;
DELETE FROM author where user_id = 2;

DELETE FROM users as JOIN authors on user_id = users.id;
select *  from authors inner join users on user_id = users.id;  



INSERT INTO authors ( "name"  , user_id) 
INSERT INTO blogs ( text , author_id)
VALUES ( 'boreme ,,dfdlfkd k bkls fd kfkjbjlj dfdsf' ,  1 ); 

INSERT INTO users ( name , hashed_password) 
select authors.name , blogs.text , blogs.updated_at  from
 authors inner join blogs on author_id = authors.id;  

CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    hashed_password varchar(255) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                                                                                                                                


CREATE TABLE IF NOT EXISTS authors (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE,
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


CREATE TABLE IF NOT EXISTS profiles (
    id serial PRIMARY KEY,
    likes int,
    author_id INT REFERENCES authors(id) NOT NULL,
    blog_id INT REFERENCES blogs(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);



CREATE TABLE IF NOT EXISTS comments(
    id serial PRIMARY KEY,
    author_id INT REFERENCES authors(id) NOT NULL,
    blog_id INT REFERENCES blogs(id) NOT NULL,
    comment varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);





