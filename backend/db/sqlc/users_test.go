package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCreateUsers(t *testing.T) {
	arg := CreateUserParams{
		Username:  "rmarincu",
		FirstName: "Robert",
		LastName:  "Marincu",
	}

	user, err := testQueries.CreateUser(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, arg.Username, user.Username)
	require.Equal(t, arg.FirstName, user.FirstName)
	require.Equal(t, arg.LastName, user.LastName)

	require.NotZero(t, user.ID)
}
