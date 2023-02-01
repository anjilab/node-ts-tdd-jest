INSTALLATION

yarn add prisma -D

npx prisma

npx prisma init -> first time prisma setup, creates prisma folder with schema.prisma inside it.

npx prisma migrate dev --name init -> new migration files create, runs the migration in database. this command also runs prisma generate under the hood. if prisma-client-js generator is defined it will check if you have or not, if not it will install.

# More about tests

In agile i.e iterative (sprint wise) development, TDD(Test Driven Development) plays important role.

<ul><h3> Pros of TDD </h3>
<li> Easy detection bugs </li>
<li> Code Quality increased. </li>
</ul>

<!-- REST APIS, various standalone services tested via TDD whereas UX ,UI via selenium or puppeteer -->

<h3>BDD(Behavior Driven Development)</h3>
BDD based upon TDD, It is more natural than TDD in terms of language and interfaces. For example :- expect(response.status).toBe(200) => BDD. whereas TDD follows assert.equal(response.status, 200)

<p>
<ul>3 steps of writing test code
<li> Implement a test. </li>
<li> Write a code to pass that test. </li>
<li> Verify the test passes and repeat the cycle. </li>
Various types of testing frameworks, for node usually mocha, for browser and react testing, jest
</ul>
</p>
