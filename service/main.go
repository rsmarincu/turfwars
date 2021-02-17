package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	listener, err := net.Listen("tcp", ":9000")

	if err != nil {
		log.Fatalf("Failed to listn on port 9000: %v", err)
	}

	gprcServer := grpc.NewServer()

}
