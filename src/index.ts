import { UserTable } from "./db/schema";
import { db } from "./db/db";
import { desc, sql, eq, name } from "drizzle-orm";

async function main() {
  await db.delete(UserTable);

  // ---------------------------
  // Example using insert method
  // ---------------------------

  const user = await db
    .insert(UserTable)
    .values([
      { name: "Waqar Hassan", email: "waqarhassan@gmail.com", age: 25 },
      {
        name: "Alice",
        email: "alice@example.com",
        age: 32,
      },
      {
        name: "Charlie",
        email: "charlie@example.com",
        age: 27,
      },
    ])
    .returning({
      id: UserTable.id,
      name: UserTable.name,
    })
    .onConflictDoUpdate({
      target: UserTable.email,
      set: { name: "Updated Name" },
    });
  console.log("Created user:", user);

  // If make the given attribute true, will return only that attribute
  // If make that attribute false, will return all attributes except that attribute
  const users = await db.query.UserTable.findMany({
    columns: { id: false },
    extras: {
      lowercase: sql<string>`lower(${UserTable.name})`.as("lowercase_name"),
    },
    orderBy: desc(UserTable.age),
    where: (table, funcs) => funcs.between(table.age, 25, 30),
    // If there is no built in function, then write custom query
    // where: (table, funcs) => funcs.sql`${table.name} != 'Alice'`,
  });
  console.log(users);

  // ---------------------------
  // Example using query builder
  // ---------------------------

  const users2 = await db
    .select({ id: UserTable.id, name: UserTable.name })
    .from(UserTable)
    .where(eq(UserTable.age, 25));
  console.log(users2);

  // ----------------------------------
  // Example using update query builder
  // ----------------------------------

  const users3 = await db
    .update(UserTable)
    .set({ age: 26 })
    .where(eq(UserTable.name, "Waqar Hassan"))
    .returning({
      name: UserTable.name,
      age: UserTable.age,
    });

  console.log(users3);
}
await main();
