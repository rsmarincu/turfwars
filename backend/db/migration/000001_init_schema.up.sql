CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "users" (
    "first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "username" varchar NOT NULL,
    "city" varchar,
    "country" varchar,
    "profile" varchar,
    "profile_medium" varchar,
    "creation_timestamp" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "areas" (
    "area_id" uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    "owner" uuid,
    "polyline" varchar NOT NULL,
    "creation_timestamp" timestamptz NOT NULL
    "start_lat" float NOT NULL,
    "start_lng" float NOT NULL,
    "end_lat" float NOT NULL,
    "end_lng" float NOT NULL
);

ALTER TABLE "areas" ADD FOREIGN KEY ("owner") REFERENCES "users" ("username")

CREATE INDEX ON "users" ("username");
CREATE INDEX ON "areas" ("area_id")
CREATE INDEX ON "areas" ("owner")