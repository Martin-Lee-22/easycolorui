-- DropIndex
DROP INDEX "Colors_id_key";

-- AlterTable
CREATE SEQUENCE colors_id_seq;
ALTER TABLE "Colors" ALTER COLUMN "id" SET DEFAULT nextval('colors_id_seq'),
ADD CONSTRAINT "Colors_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE colors_id_seq OWNED BY "Colors"."id";
