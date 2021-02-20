package handlers

import (
	"golang.org/x/net/context"
	userpb "turfwars/backend/api/proto/user"
)



func (s *ServiceHandler) GetUser(ctx context.Context, req *userpb.GetUserRequest)(*userpb.GetUserResponse, error) {

	return &userpb.GetUserResponse{
		Name: "Robert",
	}, nil
}
