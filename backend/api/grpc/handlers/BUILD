package(default_visibility = ["PUBLIC"])

go_library(
    name = "handlers",
    srcs = [
        "user_handler.go",
        "common.go",
        ],
    deps = [
        "//backend/api/proto:user",
        "//third_party/go:x_net"
    ]
)