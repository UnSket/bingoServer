  CREATE TABLE USERS (
  id NUMBER NOT NULL,
  login VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255),
  hash VARCHAR(255)
);

ALTER TABLE USERS
  ADD CONSTRAINT USERS_ID_PK PRIMARY KEY (id);
INSERT into users (id, login, name, email, hash) VALUES (1, 'admin', 'adminName', 'adminMail', '$2a$10$.2BXQVx3htAO.prOHDLK6er7Rrtg1xk5lgr.fZ31cp1ncjVQyIvYi');

CREATE TABLE AUTHORITY (
  id   NUMBER               NOT NULL,
  name VARCHAR2(60) UNIQUE  NOT NULL
);

ALTER TABLE AUTHORITY
  ADD CONSTRAINT AUTHORITY_ID_PK PRIMARY KEY (id);

INSERT INTO authority (id, name) VALUES (0, 'ROLE_ADMIN');
INSERT INTO authority (id, name) VALUES (1, 'ROLE_SHOP_DIRECTOR');
INSERT INTO authority (id, name) VALUES (2, 'ROLE_CONTRACTOR');
INSERT INTO authority (id, name) VALUES (3, 'ROLE_ENGINEER');
INSERT INTO authority (id, name) VALUES (4, 'ROLE_SENIOR_ENGINEER');
INSERT INTO authority (id, name) VALUES (5, 'ROLE_LEADER_ENGINEER');
INSERT INTO authority (id, name) VALUES (6, 'ROLE_MASTER');

CREATE TABLE USER_AUTHORITY (
  user_id      NUMBER NOT NULL,
  authority_id NUMBER NOT NULL
);
INSERT INTO user_authority (user_id, authority_id) VALUES (1, 0);