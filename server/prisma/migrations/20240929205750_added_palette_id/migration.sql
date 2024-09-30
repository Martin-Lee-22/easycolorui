/*
  Warnings:

  - Added the required column `paletteId` to the `Colors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Colors" DROP CONSTRAINT "Colors_id_fkey";

-- AlterTable
ALTER TABLE "Colors" ADD COLUMN     "paletteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Colors" ADD CONSTRAINT "Colors_paletteId_fkey" FOREIGN KEY ("paletteId") REFERENCES "Palette"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
