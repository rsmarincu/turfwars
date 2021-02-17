package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"io/ioutil"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	pingpong "turfwars/backend/pingpong/proto/users"
)

func main() {
	ctx := context.Background()
	creds := credentials.NewTLS(loadTLSCfg())

	conn, err := grpc.DialContext(ctx, "localhost:9990", grpc.WithTransportCredentials(creds))

	if err != nil {
		log.Fatal(err)
	}

	defer conn.Close()

	client := pingpong.NewPingPongClient(conn)
	pong, err := client.Ping(ctx, &pingpong.PingRequest{})

	if err != nil {
		log.Fatal(err)
	}
	log.Println(pong)
}

func loadTLSCfg() *tls.Config {
	b, _ := ioutil.ReadFile("../cert/server.crt")
	cp := x509.NewCertPool()
	if !cp.AppendCertsFromPEM(b) {
		log.Fatal("credentials: failed to append certificates")
	}
	config := &tls.Config{
		InsecureSkipVerify: false,
		RootCAs:            cp,
	}
	return config
}
