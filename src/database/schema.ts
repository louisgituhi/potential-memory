import { date, integer, pgTable, serial } from "drizzle-orm/pg-core";

export const expenseTable = pgTable("expensese_table", {
    id: serial("id").notNull().primaryKey(),
    date: date("date_paid").defaultNow().notNull(),
    trxAmount: integer("trx_amount").notNull(),
    trxCost: integer("trx_cost").notNull()
})