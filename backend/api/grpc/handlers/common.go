package handlers

import (
	userpb "turfwars/backend/api/user"
)

type ServiceHandler struct {
	userpb.UnimplementedUserServiceServer
}