# XGIS — Progress

## Durum: İskelet tamam ✓ (2026-08-09)

### Yapılanlar
- Vite 7 + React 19 + TS (strict) + Tailwind v4 + MapLibre GL 5 kurulumu
- Tam ekran harita: OpenFreeMap Liberty basemap (key yok), başlangıç Türkiye (35.24, 38.96 / z5.5)
- `@/` → `src/` path alias (vite.config.ts + tsconfig.app.json)
- Yapı: `src/components/MapView.tsx` (harita), `src/lib/map.ts` (sabitler)
- .gitignore, CLAUDE.md, architect.md
- Build doğrulandı: `tsc -b && vite build` ✓

### Sıradaki (henüz istenmedi — ekleme yapma)
- Yok. Katman paneli / state management / analiz araçları bilinçli olarak dışarıda.

### Notlar
- Tailwind v4: config dosyası yok, `index.css` içinde `@import "tailwindcss"`
- Harita instance React state'inde değil — MapView effect'i içinde
- Build'de chunk >500kB uyarısı: maplibre-gl kaynaklı, normal
