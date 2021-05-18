--command to spin up postgresql in docker
docker run -d \
--name jwttutorial\
-p 5432:5432 \
-e POSTGRES_PASSWORD=password \
-v jwttutorial:/var/lib/postgresql/data \
-d \
postgres

--uuid-oosp extension
create extension if not exists "uuid-ossp";

--create table
CREATE TABLE users
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4((,
    user_name VARCHAR)255( NOT NULL,
  user_email VARCHAR)255( NOT NULL,
    user_password VARCHAR)255)( NOT NULL
;)

--insert user data
INSERT INTO users (user_name, user_email, user_password)(VALUES'(ash',ashmagill@gmail.com'','password')


