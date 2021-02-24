#!/bin/bash


protoc \
    --proto_path=proto \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=service=grpc-web:src/proto \
    --js_out=import_style=commonjs,binary:src/proto \
    --go_out=./backend/api/user \
    --go-grpc_out=./backend/api/user \
    user.proto
