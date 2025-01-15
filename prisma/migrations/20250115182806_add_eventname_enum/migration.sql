/*
  Warnings:

  - Changed the type of `eventName` on the `Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EventName" AS ENUM ('sparkhack', 'decisia', 'aboltabol', 'circuistics', 'eureka', 'frames', 'inquizzitive', 'algomaniac', 'jutalks');

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "eventName",
ADD COLUMN     "eventName" "EventName" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Team_eventName_leaderId_key" ON "Team"("eventName", "leaderId");
