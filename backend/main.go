package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"turfwars/backend/common/tlsapi"
	pingpong "turfwars/backend/pingpong/proto/users"
)

func main() {
	apiServer, err := tlsapi.GenerateTLSApi("cert/server.crt", "cert/server.key")
	if err != nil {
		log.Fatal(err)
	}

	lis, err := net.Listen("tcp", "127.0.0.1:9000")
	if err != nil {
		log.Fatal(err)
	}
	s := &Server{}
	pingpong.RegisterPingPongServer(apiServer, s)
	log.Fatal(apiServer.Serve(lis))
}
