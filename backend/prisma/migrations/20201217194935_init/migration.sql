-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'Finished',
    "format" TEXT NOT NULL DEFAULT E'TV',
    "duration" INTEGER NOT NULL DEFAULT 24,
    "season" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT E'Manga',
    "gender" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "anime_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "is_online" BOOLEAN NOT NULL DEFAULT true,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anime.profile_unique" ON "Anime"("profile");

-- CreateIndex
CREATE UNIQUE INDEX "Anime.cover_unique" ON "Anime"("cover");

-- CreateIndex
CREATE UNIQUE INDEX "Anime.name_unique" ON "Anime"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Anime" ADD FOREIGN KEY("author_id")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY("anime_id")REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY("user_id")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
