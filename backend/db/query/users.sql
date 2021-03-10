-- name: CreateUser :one
INSERT INTO users (
    first_name,
    last_name,
    username,
    city,
    country,
    profile,
    profile_medium
) VALUES (
    $1, $2, $3, $4, $5, $6, $7
) RETURNING *;

-- name: GetUser :one
SELECT * FROM users
WHERE username = $1 LIMIT 1;

-- name: ListUsers :many
SELECT * FROM users
WHERE city = $1 OR country = $2
ORDER BY id
LIMIT $3
OFFSET $4;

-- name: DeleteUser :exec
DELETE FROM users
WHERE username = $1;