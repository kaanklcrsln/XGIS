# XGIS — Architecture

## Purpose

Web GIS başlangıç iskeleti. Şu an tek işlevi: tam ekran, etkileşimli bir harita. Her yeni özellik bu temel üzerine, mevcut dosya düzenini bozmadan eklenir.

## Current Shape

```
XGIS/
├── index.html              # tek giriş noktası, #root
├── vite.config.ts          # react + tailwind plugin, @ alias
├── tsconfig.app.json       # strict TS, @/* → src/*
├── src/
│   ├── main.tsx            # React bootstrap
│   ├── App.tsx             # sadece <MapView /> render eder
│   ├── index.css           # tailwind + maplibre css + %100 yükseklik
│   ├── components/
│   │   └── MapView.tsx     # MapLibre yaşam döngüsü (create/destroy)
│   └── lib/
│       └── map.ts          # MAP_STYLE, INITIAL_VIEW sabitleri
```

## Key Decisions

1. **Basemap: OpenFreeMap Liberty** — ücretsiz, API key yok, vektör tile.
   Değiştirmek = `src/lib/map.ts` içindeki tek URL.
2. **Harita instance'ı React state'inde değil** — `useEffect` içinde yaratılır,
   cleanup'ta `map.remove()`. Re-render haritayı etkilemez.
3. **components / lib ayrımı** — JSX üreten her şey `components/`,
   saf TS (sabitler, ileride GeoJSON yardımcıları, projeksiyon vs.) `lib/`.
4. **Tailwind v4, config dosyasız** — tema/genişletme gerekirse
   `index.css` içinde `@theme` bloğu kullanılır.
5. **Bilinçli olarak yok:** state management, router, katman paneli, test altyapısı.
   İhtiyaç doğana kadar eklenmeyecek.

## Growth Path

- Katmanlar → `src/lib/layers.ts` (tanımlar) + `MapView` içinde `map.on("load")` ile ekleme
- Harita instance'ını paylaşmak gerekirse → önce React context, ancak yetmezse store
- Yeni UI parçaları → `src/components/`, harita üstüne absolute konumlanmış overlay olarak
