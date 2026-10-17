import { NextResponse } from "next/server";

/**
 * Google Play App Links verification fetches this exact URL:
 * https://jambox.site/.well-known/assetlinks.json
 * It must be HTTP 200 with Content-Type application/json (not the Next.js 404 HTML).
 *
 * Include both fingerprints when Play App Signing is on:
 * 1) Upload key (local keystore used to upload the AAB)
 * 2) App signing key from Play Console → App integrity
 */
const SHARELOG_ASSET_LINKS = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.jambox.sharelog",
      sha256_cert_fingerprints: [
        "EC:61:EA:68:17:45:8E:A6:E8:76:E0:FF:39:C5:DC:5A:2A:B6:79:2C:91:0F:D6:C6:4C:EB:BC:D2:18:F5:0B:F8",
      ],
    },
  },
];

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(SHARELOG_ASSET_LINKS, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });
}
