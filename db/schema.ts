import { relations } from 'drizzle-orm';
import { mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('clients', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
});

export const vents = mysqlTable('clients', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
});

// relations
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(vents),
}));

export const postsRelations = relations(vents, ({ one }) => ({
  user: one(users, {
    fields: [vents.id],
    references: [users.id],
  }),
}));
