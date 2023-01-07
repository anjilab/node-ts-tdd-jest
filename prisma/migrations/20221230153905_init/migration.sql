-- CreateTable
CREATE TABLE "roof_of_house" (
    "id" SERIAL NOT NULL,
    "area" INTEGER NOT NULL,
    "province" INTEGER NOT NULL,
    "district" INTEGER NOT NULL,
    "area_name" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "galvanized_sheet" INTEGER NOT NULL,
    "cemented" INTEGER NOT NULL,
    "thatch" INTEGER NOT NULL,
    "tile" INTEGER NOT NULL,
    "stone" INTEGER NOT NULL,
    "wood" INTEGER NOT NULL,
    "mud" INTEGER NOT NULL,
    "others" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roof_of_house_pkey" PRIMARY KEY ("id")
);
