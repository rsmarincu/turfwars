go_binary(
    name = "main",
    srcs = [
        "main.go",
        "service.go",
        ],
    deps = [
        "//third_party/go:grpc",
        "//backend/common/tlsapi",
        "//backend/pingpong/proto:users"
    ]
)