-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "concludedAt" TIMESTAMP(3),
ADD COLUMN     "downloadUrl" TEXT,
ADD COLUMN     "downloaded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Untitled';
