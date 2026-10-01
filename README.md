# PiratesNodes — Full Secure Starter

This archive is an expanded, cleaned starter for the PiratesNodes hosting platform. It includes the Next.js app shell, PostgreSQL/Prisma schema, secure server-side session foundation, role model, customer-scoped server API, staff-protected Pterodactyl server-list API, health endpoint, dashboard pages, and tests.

## Run
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env.local`.
3. Generate a random `SESSION_SECRET` of at least 32 characters.
4. Set `DATABASE_URL`.
5. Optionally configure `PTERODACTYL_URL` and `PTERODACTYL_APPLICATION_KEY`.
6. `npm install`
7. `npx prisma generate`
8. `npx prisma migrate dev --name init`
9. `npm run typecheck`
10. `npm test`
11. `npm run build`
12. `npm run dev`

## Pterodactyl
The application key is server-only. `GET /api/pterodactyl/servers` requires ADMIN, CO_OWNER or OWNER. The endpoint only lists panel servers; provisioning, payment verification, node-capacity validation and lifecycle automation must be integrated and tested against your actual panel before production.

## Accounts
No real passwords are embedded in this archive. Create the requested Owner/Co-Owner/Admin/Manager accounts through a secure bootstrap/administrative flow with bcrypt/Argon2id hashes. Do not commit passwords to GitHub or place them in `.env.example`.

## Important production gaps
This is not a claim of a complete production hosting business. Real payment gateway/webhooks, QR payment reconciliation, Pterodactyl provisioning, node capacity allocation, VPS orchestration, backups, file manager, rate limiting, 2FA, email verification, password reset, full audit UI, monitoring, job queue, CSRF review, attachment scanning, domain/TLS automation and infrastructure deployment still require implementation and end-to-end testing with real services.

Never accept real customer payments or promise automatic server delivery until those integrations are implemented and verified.
