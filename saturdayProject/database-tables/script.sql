
CREATE TABLE IF NOT EXISTS authors (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    age integer ,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    pages varchar(255) NOT NULL,
    book_genre varchar(25) NOT NULL,
    author_id INT REFERENCES authors(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


ALTER TABLE books ADD COLUMN authors_id  INT REFERENCES authors(id);

select * from authors where  name = 'john doe';

select authors.name , books.name from authors  
inner join books on books.author_id = authors.id WHERE authors.name='john doe' OR authors.name='sam smith'; 

-- records;



INSERT INTO authors(name , age) values('john doe' , 22);
INSERT INTO authors(name , age) values('sam smith' , 66);
INSERT INTO authors(name , age) values('thomas snith' , 26);


INSERT INTO books( name , pages , book_genre , author_id) 
values('javascript for dummies' , '105', 'fiction' , 1);

INSERT INTO books( name , pages , book_genre , author_id) 
values('love in the beach' , '85', 'rommance' , 1);

INSERT INTO books( name , pages , book_genre , author_id) 
values('love ' , '185', 'rommance' , 2);

INSERT INTO books( name , pages , book_genre , author_id) 
values('beach' , '485', 'actions' , 1);

INSERT INTO books( name , pages , book_genre , author_id) 
values('the 100' , '145', 'actions' , 2);

INSERT INTO books( name , pages , book_genre , author_id) 
values('star wars' , '85', 'fiction' , 1);

INSERT INTO books( name , pages , book_genre , author_id) 
values('life of pie' , '185', 'rommance' , 1);

INSERT INTO books( name , pages , book_genre , author_id) 
values('ruby' , '85', 'educational' , 1);


