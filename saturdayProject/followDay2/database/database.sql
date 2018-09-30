-- CREATE DATABASE postgres;


CREATE TABLE IF NOT EXISTS player_infos (
id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
surname VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
age VARCHAR(200) NOT NULL,
player_position VARCHAR(200) NOT NULL,
jersay_number VARCHAR(200) NOT NULL,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
modified_at timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS schools (
id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
leagues INT REFERENCES leagues(id) NOT NULL,
modified_at timestamp NOT NULL DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS leagues (
id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
modified_at timestamp NOT NULL DEFAULT NOW()
);




