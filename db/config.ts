import { defineDb, defineTable, column } from 'astro:db';

const Projects = defineTable({
  columns: {
    featured: column.boolean({
      default: false
    }),
    id: column.number({ primaryKey: true }),
    title: column.text(),
    slug: column.text({ unique: true }),
    description: column.text(),
    // Store tags as an array (Astro DB supports JSON)
    techStack: column.json(),
    image: column.text({
      default:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
    }),
    url: column.text(),
    repo: column.text(),
    dateCreated: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {Projects}
});
