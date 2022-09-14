-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "chainId" TEXT NOT NULL DEFAULT '0x89',
    "ensName" TEXT NOT NULL DEFAULT '',
    "balance" TEXT NOT NULL DEFAULT '0'
);
INSERT INTO "new_User" ("address") SELECT "address" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
