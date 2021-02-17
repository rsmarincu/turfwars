package tlsapi

import (
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

// Generate TLSApi loads TLS certificates and key and creates a grpc server
func GenerateTLSApi(pemPath, keyPath string) (*grpc.Server, error) {
	cred, err := credentials.NewServerTLSFromFile(pemPath, keyPath)
	if err != nil {
		return nil, err
	}

	server := grpc.NewServer(
		grpc.Creds(cred),
	)
	return server, nil
}
