package main

import (
	"log"
	"net"
	"fmt"

	"google.golang.org/grpc"
	"turfwars/backend/api/grpc/handlers"

	userpb "turfwars/backend/api/proto/user"
)

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":&d", 7777))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := handlers.ServiceHandler{}

	grpcServer := grpc.NewServer()

	userpb.RegisterUserServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %s", err)
	}
}
