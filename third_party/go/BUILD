package(default_visibility = ["PUBLIC"])

go_get(
    name = "grpc",
    get = "google.golang.org/grpc",
    repo = "github.com/grpc/grpc-go",
    deps = [
        ":oauth2",
        ":rpcstatus",
        ":x_net",
    ],
    install = [
        "",
        "attributes",
        "backoff",
        "balancer",
        "balancer/base",
        "balancer/grpclb/...",
        "balancer/roundrobin",
        "binarylog/...",
        "codes",
        "connectivity",
        "credentials/...",
        "encoding",
        "encoding/gzip",
        "encoding/proto",
        "grpclog",
        "health",
        "health/grpc_health_v1",
        "internal/...",
        "keepalive",
        "metadata",
        "naming",
        "peer",
        "resolver",
        "resolver/dns",
        "resolver/passthrough",
        "serviceconfig",
        "stats",
        "status",
        "tap",
        "test/bufconn",
    ],
    revision = "v1.27.0"
)

go_get(
    name = "oauth2",
    get = "golang.org/x/oauth2",
    deps = [
        ":cloud-metadata",
        ":x_net",
    ],
    install = [
        "google",
        "jws",
        "jwt"
    ],
)

go_get(
    name = "rpcstatus",
    get = "google.golang.org/genproto/googleapis/rpc/...",
    deps = [":protobuf"]
)




go_get(
    name = "protobuf",
    get = "github.com/golang/protobuf/...",
    deps = [":protobuf-v2"],
    revision = "v1.4.3",
    strip = [
        "proto/proto3_proto",
        "conformance"
    ]
)

go_get(
    name = "protobuf-v2",
    get = "google.golang.org/protobuf/...",
    deps = [":cmp"],
    install = [
        "encoding/...",
        "internal/...",
        "proto",
        "reflect/...",
        "runtime/...",
        "types/...",
        "testing/...",
        "reflect/protoreflect"
    ],
    revision = "v1.25.0"
)

go_get(
    name = "cmp",
    get = "github.com/google/go-cmp/cmp/..."
)



go_get(
    name = "cloud-metadata",
    get = "cloud.google.com/go/compute/metadata"
)

go_get(
    name = "protoc-gen-go",
    binary = True,
    get = [],
    install = ["github.com/golang/protobuf/protoc-gen-go"],
    deps = [":protobuf"]
)

go_get(
    name = "x_net",
    get = "golang.org/x/net/...",
    deps = [":x_text", ":x_sys"],
    strip = ["http2/h2demo", "http2/h2i"]
)

go_get(
    name = "x_sys",
    get = "golang.org/x/sys/..."
)

go_get(
    name = "x_text",
    get = "golang.org/x/text/...",
    strip = [
        "cmd",
        "message/pipeline"
    ]
)

