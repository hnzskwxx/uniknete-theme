# Unikněte! – Shopify Theme

Vlastní Shopify theme pro uniknete.com.

## Struktura

```
uniknete-theme/
├── assets/
│   ├── base.css          ← všechny globální styly a design tokeny
│   └── main.js           ← JavaScript (mobile nav, atd.)
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid      ← hlavní layout (obaluje každou stránku)
├── locales/
│   └── cs.json           ← české překlady
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── stats-strip.liquid
│   ├── products-grid.liquid
│   ├── how-it-works.liquid
│   └── reviews.liquid
├── snippets/             ← (prázdné, pro budoucí komponenty)
└── templates/
    ├── index.json        ← homepage
    └── product.liquid    ← stránka produktu
```

## Napojení na GitHub + Shopify

1. **Vytvoř GitHub repozitář**
   - Jdi na github.com → New repository
   - Název: `uniknete-theme`
   - Visibility: Private (doporučeno)

2. **Nahraj soubory**
   ```bash
   git init
   git add .
   git commit -m "Initial theme"
   git remote add origin https://github.com/TVOJE_JMENO/uniknete-theme.git
   git push -u origin main
   ```

3. **Napoj GitHub na Shopify**
   - Shopify Admin → Online Store → Themes
   - Klikni **"Add theme"** → **"Connect from GitHub"**
   - Vyber svůj repozitář a branch `main`
   - Shopify si theme stáhne automaticky

4. **Každá změna = push na GitHub**
   ```bash
   git add .
   git commit -m "Popis změny"
   git push
   ```
   Shopify se automaticky aktualizuje po každém push!

## Nastavení po instalaci

1. Nastav **Menu** v Shopify: Online Store → Navigation → Main menu
2. Nastav **Kolekci her**: Theme customizer → sekce "Produkty – hry" → vyber kolekci
3. Uprav texty přes **Theme customizer** (Customize) – vše je editovatelné bez kódu

## Přidání nové sekce

1. Vytvoř soubor `sections/nova-sekce.liquid`
2. Přidej HTML + `{% schema %}` blok
3. Push na GitHub
4. V Theme customizer → Add section → najdeš ji tam
