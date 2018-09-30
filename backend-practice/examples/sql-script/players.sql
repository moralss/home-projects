CREATE TABLE stats (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL ,
    goals varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
)
;



CREATE TABLE IF NOT EXISTS details (
id serial PRIMARY KEY,
age varchar(255) NOT NULL,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
)
;


