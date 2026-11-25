# Ember & Ice — project download

Full source and media assets from the published website.

## Run locally

Install Node.js 22.13 or newer and pnpm, then run inside this folder:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by the development server.

## Reservation database

The project uses Vinext (Next.js-compatible React) with Cloudflare D1, GSAP,
Lenis and Motion. To initialize a fresh local reservation database:

```sh
pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_blushing_hiroim.sql
```

Apply this migration once per fresh local database. Then run pnpm dev.
Reservations save requests; email notifications and restaurant confirmations
are not connected. Production database records are not included.

The existing README contains framework and deployment details. For hosting
elsewhere, configure your own Cloudflare D1 database and deployment settings.
This is a Vinext/Cloudflare project, not a plain static HTML export.

Included: source, uploaded hero video web copy, photos, package lockfile,
styles, animations, and database schema/migration.
Excluded: installed dependencies, build output, Git history, credentials,
local environment files, and database contents.
