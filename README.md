# JamBox

Public organization site for **JamBox**, an independent app studio in Seoul. Built for `jambox.site` (Vercel) so App Store and Play listings can point at a real company home: apps, address, support, privacy, and terms.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English is the default. Use **한국어** in the header for Korean.

## Deploy on Vercel

1. Import this folder as a Next.js project (or push it to GitHub and import the repo).
2. Production URL should be public. In the project: **Settings → Deployment Protection** — turn **Vercel Authentication** off. Apple will not accept a login wall.
3. **Settings → Domains** — add `jambox.site` and `www.jambox.site`.

## Point Gabia DNS at Vercel

The domain is registered at [Gabia](https://www.gabia.com) (nameservers `ns.gabia.co.kr`). After Vercel lists the domain, in Gabia DNS add:

| Type  | Host | Value                 |
| ----- | ---- | --------------------- |
| A     | `@`  | `76.76.21.21`         |
| CNAME | `www` | `cname.vercel-dns.com` |

Use the exact values Vercel shows if they differ. Propagation can take a few minutes to a few hours. Then `https://jambox.site` should serve this site with HTTPS.

## App Store notes

This site is meant to satisfy Apple’s organization website check: public, functional, named **JamBox**, with headquarters address, contact, support, and privacy. Apple also prefers a work email on the same domain (for example `hello@jambox.site`) in addition to the mailbox already listed on the site.

## Sharelog: Play Data safety handoff

Source audit: **November 24, 2026**, Sharelog app commit `575dcf9` in `D:\D\projects\sharelog_cursor`. Verify the actual release artifact against this checklist. Publishing this website does not update or submit Play Console disclosures.

- Privacy policy URL: <https://jambox.site/apps/sharelog/privacy>
- Account deletion URL: <https://jambox.site/apps/sharelog/delete-account>
- In-app deletion: **Settings → Account → Delete account**.
- Public requests go to **info@jambox.site**. JamBox must monitor this inbox, verify ownership, resolve owned folders, execute the account cleanup, and confirm completion. The published commitment is **within 30 days after verification and folder resolution**; provider cleanup periods are disclosed separately. The website opens an email draft and does not perform backend deletion itself.

The account-enabled app collects data off the device. The following are proposed categories based on source behavior, with release-specific items explicitly marked for review. Consult [Google’s Data safety definitions](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en) when entering the form.

| Category | Observed data and purpose | Choice |
| --- | --- | --- |
| Personal info: Name | Provider/custom display name; account management and shared-folder attribution. | Optional account features. |
| Personal info: Email address | Google/Apple may supply email to Firebase Authentication; account management. Kakao requests nickname only. | Optional sign-in; provider-dependent. |
| Personal info: User IDs | Firebase UID, linked provider identifiers, folder membership/contributor IDs; account management, functionality, access control. | Optional account features. |
| App activity: Other user-generated content | Synced text, memos, private notes, titles, categories, folder names and shared content; app functionality. | Private sync is off by default; sync, guest import and folder contributions are explicit choices. Import can enable sync. |
| App activity: App interactions / Other actions — review mapping | Synced read state, save timestamps and folder operations; app functionality and synchronization. | Optional sync/folder features. |
| Web browsing — review mapping | Selected URLs/source URLs sent to cloud storage and automatic preview services; link saving and previews. No general browser-history access was found. | Cloud sync is optional. Preview requests have no separate off switch. |
| Device or other IDs / App info and performance — verify SDK categories | Authentication and infrastructure metadata, identifiers and logs; account management, security and service operation. | Check the release SDK graph and initialization; do not mark all technical collection optional by assumption. |

Firebase processing is collection even where a service-provider exception means it is not reported as sharing. Expected, user-initiated folder contributions, share links and exports may qualify for a separate sharing exception. Evaluate automatic previews and each recipient separately; absence of advertising does not establish “no sharing.” Use the form’s purposes and optionality definitions rather than copying every suggested purpose to every data type.

One-time share links contain a URL or memo body, optional title/category and receipt ID in a Base64URL query. They exclude the separate private note field. The link host receives the query, and Android install fallback can pass it to Google Play as a referrer. User-initiated JSON exports can include local image bytes. Private cloud sync strips local media/cache paths and does not upload photo files; a provider profile-image URL alone does not establish photo-byte collection.

Deletion removes authentication identity, private cloud records, memberships and the user’s shared contributions. Owned folders must first be transferred or deleted. Minimal account/item deletion markers remain indefinitely to prevent restoration; exported/recipient copies and guest records are separate. Firebase Authentication has its own [published retention periods](https://firebase.google.com/support/privacy), described on both public pages. Signing out, disabling sync and uninstalling do not request account deletion.

Before submitting the release:

- **Encryption in transit:** Firebase connections use HTTPS, but preview/image code accepts arbitrary HTTP URLs. Do not affirm that all collected data is encrypted until the release behavior supports that answer.
- **SDK disclosures:** Compare the release dependencies and flags with [Firebase’s Android disclosure guidance](https://firebase.google.com/docs/android/play-data-disclosure). No custom Analytics, Crashlytics or Sentry integration was found, which does not exclude infrastructure logging or SDK identifiers. App Check exists in source but is documented as off in the audited configuration.
- **Deletion QA:** Exercise the in-app path and the support handling process with a test account. Confirm provider reauthentication, owned-folder handling and backend cleanup in the release environment. A working public URL alone does not verify those operations. See [Google’s account-deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en).

Source references in the app checkout: `firestore.rules`, `lib/features/account_vault/firestore_vault_transport.dart`, `lib/features/account_vault/account_vault_session.dart`, `lib/features/account_vault/account_vault_cleanup.dart`, `lib/features/account/firebase_auth_repository.dart`, `lib/features/folders/folder_controller.dart`, `functions/src/folders.ts`, and `functions/src/auth.ts`.
