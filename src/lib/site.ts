export const site = {
  name: "JamBox",
  legalName: "JamBox",
  url: "https://jambox.site",
  email: "jaminthebox1226@gmail.com",
  address: {
    line1: "90, Magokjungang 8-ro",
    line2: "Gangseo-gu, Seoul",
    country: "Republic of Korea",
    en: "90, Magokjungang 8-ro, Gangseo-gu, Seoul, Republic of Korea",
    ko: "서울특별시 강서구 마곡중앙8로 90, 대한민국",
  },
  apps: {
    boardhood: {
      name: "Boardhood",
      ios: "https://apps.apple.com/app/id6757397906",
      android:
        "https://play.google.com/store/apps/details?id=com.boardhub.boardhub_20251010",
    },
    sharelog: {
      name: "Sharelog",
      android:
        "https://play.google.com/store/apps/details?id=com.jambox.sharelog",
      ios: "https://apps.apple.com/app/id6815770283",
      support: "info@jambox.site",
      privacy: "/apps/sharelog/privacy",
    },
  },
} as const;
