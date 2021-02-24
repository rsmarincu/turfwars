package main

import (
	"log"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	userpb "turfwars/backend/api/user"
)


const (
	port = ":50051"
)

func main() {
	var conn *grpc.ClientConn

	creds, err := credentials.NewClientTLSFromFile("backend/certs/server.crt", "")
	if err != nil {
		log.Fatalf("could not load TLS keys: %s", err)
	}

	conn, err = grpc.Dial(port, grpc.WithTransportCredentials(creds))
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	c := userpb.NewUserServiceClient(conn)

	response, err := c.GetUser(
		context.Background(),
		&userpb.GetUserRequest{Name:"Robert"},
	)
	if err != nil {
		log.Fatalf("Error when calling GetUser: %s", err)
	}
	log.Printf("Response: %s", response)

}