package main

import (
	"log"
	"fmt"
	"net"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	"turfwars/backend/api/grpc/handlers"
	userpb "turfwars/backend/api/user"
)

const (
	port = 8080
)

func main() {


	creds, err := credentials.NewServerTLSFromFile("backend/certs/server.crt", "backend/certs/server.key")
	if err != nil {
		log.Fatalf("could not load TLS keys: %s", err)
	}

	opts := []grpc.ServerOption{grpc.Creds(creds)}

	s := handlers.ServiceHandler{}
	addr := fmt.Sprintf("0.0.0.0:%d", port)

	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalf("Error while listening : %v", err)
		log.Fatalf("%v", opts)
	}

	grpcServer := grpc.NewServer()
	userpb.RegisterUserServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal("ERROR")
	}

}
