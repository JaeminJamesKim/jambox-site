import { NextResponse } from "next/server";

/**
 * iOS Universal Links verification fetches:
 * https://jambox.site/.well-known/apple-app-site-association
 *
 * Team U48F7J9N3L is JamBox (same team as Boardhood).
 * Include both the current repo bundle and the live App Store bundle.
 */
const ASSOCIATION = {
  applinks: {
    apps: [] as string[],
    details: [
      {
        appID: "U48F7J9N3L.com.jambox.sharelog",
        paths: ["/apps/sharelog/s", "/apps/sharelog/s/*"],
      },
      {
        appID: "U48F7J9N3L.com.sharelog.sharelog",
        paths: ["/apps/sharelog/s", "/apps/sharelog/s/*"],
      },
    ],
  },
};

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(ASSOCIATION, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });
}
