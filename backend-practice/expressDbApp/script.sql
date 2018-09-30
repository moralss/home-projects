CREATE TABLE IF NOT EXISTS players(
id serial PRIMARY KEY,
name varchar(255) NOT NULL,
surname varchar(255) NOT NULL,
school_id INT REFERENCES schools(id) NOT NULL,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
) ;

CREATE TABLE IF NOT EXISTS schools (
id serial PRIMARY KEY,
school_name varchar(255) NOT NULL,
token VARCHAR(64) NOT NULL UNIQUE,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE state_owners(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE state_owner_schools(
    id serial PRIMARY KEY,
    school_id INT REFERENCES schools(id) NOT NULL,
    state_owner_id INT REFERENCES state_owners(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


INSERT INTO state_owner (name) VALUES('kagiso');
INSERT INTO state_owner_schools(school_id , state_id) VALUES(1 , 1);
INSERT INTO players (name , surname , school_id) VALUES('Steve' , 'mark' , 1);

