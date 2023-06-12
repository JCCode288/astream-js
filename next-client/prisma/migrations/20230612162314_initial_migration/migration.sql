/*
  Warnings:

  - You are about to drop the column `watchingId` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_watchingId_fkey";

-- DropIndex
DROP INDEX "Watching_user_id_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "watchingId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD COLUMN     "watching_id" INTEGER;

-- AlterTable
ALTER TABLE "Watching" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_watching_id_fkey" FOREIGN KEY ("watching_id") REFERENCES "Watching"("id") ON DELETE SET NULL ON UPDATE CASCADE;
