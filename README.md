# Github Backchannel

### Xendit Github Backchannel

---

## Setup guide

1. Create your own postgres instance, and add the database url in your env var under the key `DATABASE_URL`

2. Codebase assumes that your PG Instance has a table named `comments`. Below are the statements I used to prep my db.

```
CREATE TABLE comments(
   id serial PRIMARY KEY,
   org_name VARCHAR (50) NOT NULL,
   comment VARCHAR (250) NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
   deleted_at TIMESTAMP NULL
);

CREATE INDEX org_name_deleted_id ON comments USING btree (org_name, deleted_at);
```

3. Run application using `yarn dev`. If you haven't modified `PORT`, then this should now be accessible via `localhost:5000`.

---

## Usage Guide

Currently supports the following operations:

| Method | Endpoint       | Parameters                   | Response                                                    | Description                                                                                                                              |
| ------ | -------------- | ---------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /:org/members  | NULL                         | { members: [ { login, avatar_url, follower, following } ] } | Returns a list of users that are part of the :org, ordered by follower count.                                                            |
| GET    | /:org/comments | NULL                         | { comments: [ { comment, created_at } ] }                   | Returns a list of comments for the :org, ordered from latest to oldest. If there are no comments to be returned, returns an empty array. |
| DELETE | /:org/comments | NULL                         | { message }                                                 | Soft deletes all currents connected to said :org that haven't been previously deleted yet.                                               |
| POST   | /:org/comments | { comment: <250 max chars> } | { message }                                                 | Inserts a new comment, and puts it under the :org. Currently limited to 250 characters.                                                  |
