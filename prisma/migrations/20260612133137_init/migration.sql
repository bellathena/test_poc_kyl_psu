-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('FIND_FULLTEXT_4U', 'ITHENTICATE', 'BOOK_DELIVERY');

-- CreateTable
CREATE TABLE "Request" (
    "request_id" TEXT NOT NULL,
    "request_number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "request_type" "RequestType" NOT NULL,
    "requester_name" TEXT NOT NULL,
    "requester_email" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("request_id")
);
