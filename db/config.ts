import { defineDb, defineTable, column } from 'astro:db';

const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    slug: column.text({ unique: true }),
    description: column.text(),
    techStack: column.text(), // could also be JSON if you want an array
    url: column.text(),
    repo: column.text(),
    dateCreated: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {Projects}
});
