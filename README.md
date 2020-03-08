# Github Backchannel

### Xendit Github Backchannel

## Usage guide

1. Create your own postgres instance, and add the database url in your env var under the key `DATABASE_URL`

2. Codebase assumes that your PG Instance has a table named `comments`. Below is a sample of the expected table and indices of your database.

```
CREATE TABLE comments(
   id serial PRIMARY KEY,
   org_name VARCHAR (50) NOT NULL,
   comment VARCHAR (280) NOT NULL,
   created_on TIMESTAMP NOT NULL DEFAULT NOW(),
   deleted_at TIMESTAMP
);


CREATE INDEX org_name_deleted_id ON public.comments USING btree (org_name, deleted_at);
```

3. Run application using `yarn dev`. If you haven't modified `PORT`, then this should now be accessible via `localhost:5000`.
