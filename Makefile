
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
	go run backend/api/grpc/main.go

removepostgres:
	docker stop postgres12
	docker rm postgres12

protogen:
	protoc \
    --proto_path=proto \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=service=grpc-web:src/proto \
    --js_out=import_style=commonjs,binary:src/proto \
    --go_out=./backend/api/user \
    --go-grpc_out=./backend/api/user \
    user.proto

sqlc:
	sqlc generate

.PHONY: postgres createdb dropdb migrateup migratedown server protogen sqlc