
postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

createdb:
	docker exec -it postgres12 createdb --username=root --owner=root turfwars

dropdb:
	docker exec -it postgres12 dropdb turfwars

migrateup:
	migrate -path backend/db/migration -database "postgresql://root:secret@localhost:5432/turfwars?sslmode=disable" -verbose up

migratedown:
	migrate -path backend/db/migration -database "postgresql://root:secret@localhost:5432/turfwars?sslmode=disable" -verbose down

server:
	go run backend/api/grpcmain.go


.PHONY: postgres createdb dropdb migrateup migratedown server 