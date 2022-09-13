import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUser().map((user) => {
      return db.user.create({
        data: {
          address: user.address,
        },
      });
    })
  );
}

seed();

function getUser() {
  return [
    {
      address: "0x0000000000000000000000000000000000000000",
    },
  ];
}
