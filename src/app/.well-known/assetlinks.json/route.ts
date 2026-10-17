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
        "1A:5A:93:DF:90:72:F8:30:49:7E:42:41:7A:5D:7A:AA:00:FA:D7:68:3E:17:D8:A6:FC:43:D4:8E:00:FD:57:5C",
        "4B:CA:09:F6:D4:FC:1C:E6:4E:55:D2:CD:9C:ED:D5:13:70:9C:74:DA:E2:4F:F0:8D:4D:90:F2:9A:96:A6:06:1D",
        "B3:72:34:5E:03:AB:5A:AD:35:7B:54:82:3E:00:E5:32:88:89:71:13:21:80:C9:EE:37:A8:EB:39:9D:34:F9:0C",
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
