package handlers

import (
	"golang.org/x/net/context"
	userpb "turfwars/backend/api/user"
)


func (s *ServiceHandler) CreateUser(ctx context.Context, req *userpb.CreateUserRequest)(*userpb.User, error) {
	return req.User, nil
}
