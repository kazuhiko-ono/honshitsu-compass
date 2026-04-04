import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'なぜ話すのか',
      href: getPermalink('/#about'),
    },
    {
      text: '実績',
      href: getPermalink('/#proof'),
    },
    {
      text: 'サービス',
      href: getPermalink('/#service'),
    },
    {
      text: 'Re:Start',
      href: getPermalink('/#restart'),
    },
    {
      text: '記事',
      href: getBlogPermalink(),
    },
    {
      text: '話してみる',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: '特定商取引法に基づく表記', href: getPermalink('/terms') },
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    <div class="text-sm text-muted">
      <p class="font-semibold">本質のコンパス / 小野和彦</p>
      <p>株式会社MANAOLAPULE</p>
      <p>〒220-0072 神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402</p>
      <p class="mt-2">© 2026 株式会社MANAOLAPULE. All rights reserved.</p>
    </div>
  `,
};
