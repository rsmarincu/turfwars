package main

import (
	"context"

	pingpong "turfwars/backend/pingpong/proto/users"
)

type Server struct {
	pingpong.UnimplementedPingPongServer
}

func (s *Server) Ping(ctx context.Context, pin *pingpong.PingRequest) (*pingpong.PongResponse, error) {
	return &pingpong.PongResponse{
		Ok: true,
	}, nil
}
