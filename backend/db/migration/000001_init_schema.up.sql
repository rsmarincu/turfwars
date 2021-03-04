CREATE TABLE "users" (
    "id" bigserial PRIMARY KEY,
    "first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "username" varchar NOT NULL,
    "city" varchar,
    "country" varchar,
    "profile" varchar,
    "profile_medium" varchar
);

CREATE INDEX ON "users" ("username");