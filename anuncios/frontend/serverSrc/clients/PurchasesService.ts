import GRPCClient from 'node-grpc-client';

const PROTO_PATH = "./serverSrc/proto/purchases.proto";
export const PurchasesService = new GRPCClient(PROTO_PATH, 'proto', 'PurchasesService', 'localhost:8080');