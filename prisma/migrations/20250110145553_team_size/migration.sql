/*
  Warnings:

  - You are about to drop the column `userId` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `email` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropIndex
DROP INDEX "Notification_userId_read_idx";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "maxSize" SET DEFAULT 5;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- CreateIndex
CREATE INDEX "Notification_email_read_idx" ON "Notification"("email", "read");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
