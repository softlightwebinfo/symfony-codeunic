import GRPCClient from 'node-grpc-client';

const PROTO_PATH = "./serverSrc/proto/category.proto";
export const CategoryService = new GRPCClient(PROTO_PATH, 'proto', 'CategoryService', 'localhost:8080');