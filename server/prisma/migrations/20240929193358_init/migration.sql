-- CreateTable
CREATE TABLE "Palette" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Palette_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colors" (
    "id" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "classes" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Colors_id_key" ON "Colors"("id");

-- AddForeignKey
ALTER TABLE "Colors" ADD CONSTRAINT "Colors_id_fkey" FOREIGN KEY ("id") REFERENCES "Palette"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
