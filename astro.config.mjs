import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://docs.getontime.no",
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator(),
      ],
      title: "Ontime ドキュメント",
      favicon: "./favicon.ico",
      logo: {
        src: "./src/assets/images/logo.png",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sorami-wanwan/ontime-JP",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/eje3CSUEXm",
        },
        {
          icon: "youtube",
          label: "Youtube",
          href: "https://www.youtube.com/@ontimeapp",
        },
        {
          icon: "reddit",
          label: "Reddit",
          href: "https://www.reddit.com/r/ontimeapp",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/sorami-wanwan/ontime-docs-JP/edit/main",
      },
      sidebar: [
        {
          label: "Ontime",
          autogenerate: { directory: "ontime" },
        },
        {
          label: "Ontime Cloud",
          items: [
            {
              label: "✨Ontime Cloud✨",
              link: "/ontime-cloud/",
            },
            {
              label: "ステージの管理",
              link: "/ontime-cloud/manage-stages/",
            },
            {
              label: "チームの管理",
              link: "/ontime-cloud/manage-teams/",
            },
            {
              label: "アカウントの管理",
              link: "/ontime-cloud/manage-account/",
            },
            {
              label: "Ontime Cloud FAQ",
              link: "/ontime-cloud/cloud-faq/",
            },
            {
              label: "Tips",
              autogenerate: { directory: "ontime-cloud/tips" },
            },
          ],
        },
        {
          label: "基本概念",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "ユーザーインターフェース",
          items: [
            {
              label: "インターフェース概要",
              link: "/interface/",
            },
            {
              label: "制作ビュー",
              autogenerate: { directory: "interface/production" },
            },
            {
              label: "自動配信ビュー",
              autogenerate: { directory: "interface/automated" },
            },
          ],
        },
        {
          label: "機能",
          autogenerate: { directory: "features" },
        },
        {
          label: "連携と制御 (API)",
          items: [
            {
              label: "API概要",
              link: "/api/",
            },
            {
              label: "データ",
              autogenerate: { directory: "api/data" },
            },
            {
              label: "オートメーション",
              autogenerate: { directory: "api/automation" },
            },
            {
              label: "プロトコル別 API",
              autogenerate: { directory: "api/protocols" },
            },
          ],
        },
        {
          label: "クイックTips",
          autogenerate: { directory: "quick-tips" },
        },
        {
          label: "補足事項",
          autogenerate: { directory: "additional-notes" },
        },
        {
          label: "外部リンク",
          items: [
            {
              label: "Ontime 公式サイト",
              link: "https://www.getontime.no",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "GitHub (ontime-JP)",
              link: "https://github.com/sorami-wanwan/ontime-JP",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "GitHub (公式英語版)",
              link: "https://github.com/cpvalente/ontime",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "YouTube チャンネル",
              link: "https://www.youtube.com/@ontimeapp",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "Discord サーバー",
              link: "https://discord.com/invite/eje3CSUEXm",
              badge: "Link",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
  ],
});
