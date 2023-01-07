INSTALLATION

yarn add prisma -D

npx prisma

npx prisma init -> first time prisma setup, creates prisma folder with schema.prisma inside it.

npx prisma migrate dev --name init -> new migration files create, runs the migration in database. this command also runs prisma generate under the hood. if prisma-client-js generator is defined it will check if you have or not, if not it will install.
