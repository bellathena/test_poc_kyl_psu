/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusRequest" AS ENUM ('PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RequestType" ADD VALUE 'ILL';
ALTER TYPE "RequestType" ADD VALUE 'ACADEMIC_PUBLICATION_DISSEMINATION';

-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "Requests" (
    "request_id" TEXT NOT NULL,
    "request_number" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "request_type" "RequestType" NOT NULL,
    "requester_name" TEXT NOT NULL,
    "requester_email" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" "StatusRequest" NOT NULL DEFAULT 'PENDING',
    "admin_response" TEXT,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "RequestStatusHistory" (
    "history_id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "old_status" "StatusRequest" NOT NULL,
    "new_status" "StatusRequest" NOT NULL,
    "changed_by" TEXT,
    "remark" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestStatusHistory_pkey" PRIMARY KEY ("history_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Requests_request_number_key" ON "Requests"("request_number");

-- CreateIndex
CREATE INDEX "Requests_request_number_idx" ON "Requests"("request_number");

-- CreateIndex
CREATE INDEX "Requests_request_type_idx" ON "Requests"("request_type");

-- CreateIndex
CREATE INDEX "Requests_status_idx" ON "Requests"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE INDEX "RequestStatusHistory_request_id_idx" ON "RequestStatusHistory"("request_id");

-- CreateIndex
CREATE INDEX "RequestStatusHistory_changed_by_idx" ON "RequestStatusHistory"("changed_by");

-- CreateIndex
CREATE INDEX "RequestStatusHistory_created_at_idx" ON "RequestStatusHistory"("created_at");

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestStatusHistory" ADD CONSTRAINT "RequestStatusHistory_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "Requests"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestStatusHistory" ADD CONSTRAINT "RequestStatusHistory_changed_by_fkey" FOREIGN KEY ("changed_by") REFERENCES "Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
