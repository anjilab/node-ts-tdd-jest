import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query', 'info'] });

export default prisma;

// async function main() {

//     const user = await prisma.roof_of_house.create({

//         data: {

//             name: 'Alice',

//             email: 'alice@prisma.io',

//         },

//     })

//     console.log(user)

// }

// main()

//     .then(async () => {

//         await prisma.$disconnect()

//     })

//     .catch(async (e) => {

//         console.error(e)

//         await prisma.$disconnect()

//         process.exit(1)

//     })
