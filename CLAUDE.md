# CLAUDE.md

## 技術スタック

- フレームワーク：Astro + AstroWind
- スタイリング：Tailwind CSS
- デプロイ：Cloudflare Pages
- 決済：Stripe Payment Links

## 絶対に守ること

1. AstroWindのコンポーネントを活用する（独自実装しない）
2. シンプルに保つ（動くことを優先）
3. `articles/` `legal.html` `privacy.html` は触らない
4. Stripeリンクは `target="_blank" rel="noopener"` で開く
5. コピーは `claude_code_instructions_v5.md` の通りにする（変更しない）
