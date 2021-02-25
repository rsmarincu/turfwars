package main

import (
	"log"
	"fmt"
	"net"
	"google.golang.org/grpc"
	// "google.golang.org/grpc/credentials"
	// "github.com/improbable-eng/grpc-web/go/grpcweb"

	"turfwars/backend/api/grpc/handlers"
	userpb "turfwars/backend/api/user"
// 	middleware "turfwars/backend/api/grpc/middleware"
// 	"github.com/go-chi/chi"
// 	chiMiddleware "github.com/go-chi/chi/middleware"
)

const (
	port = 8080
)

func main() {


	// creds, err := credentials.NewServerTLSFromFile("backend/certs/server.crt", "backend/certs/server.key")
	// if err != nil {
	// 	log.Fatalf("could not load TLS keys: %s", err)
	// }

	// opts := []grpc.ServerOption{grpc.Creds(creds)}

	s := handlers.ServiceHandler{}
	addr := fmt.Sprintf("0.0.0.0:%d", port)

	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}
	grpcServer := grpc.NewServer()
	userpb.RegisterUserServiceServer(grpcServer, &s)

	// wrappedGrpc := grpcweb.WrapServer(
	// 	grpcServer,
	// 	grpcweb.WithOriginFunc(func(origin string) bool {
	// 		return true
	// 	}),
	// )

	// router := chi.NewRouter()
	// router.Use(
	// 	chiMiddleware.Logger,
	// 	chiMiddleware.Recoverer,
	// 	middleware.NewGrpcWebMiddleware(wrappedGrpc).Handler,
	// )
	

	// if err := http.ListenAndServe(port, router); err != nil {
	// 	log.Fatalf("Failed to serve: %s", err)
	// }
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatal("ERRIR")
	}

}
