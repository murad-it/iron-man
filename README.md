# Iron Man: Cinematic Scroll Experience

Иммерсивный лендинг в стиле Stark Industries с покадровой анимацией, HUD-интерфейсами и кинематографическими сценами, завязанными на скролл.

## Что внутри

- Кинематографический `hero` с покадровым воспроизведением на `canvas`
- Синхронизация контента, диалоговых карточек и индикаторов по прогрессу прокрутки
- Атмосферный UI в стиле HUD: бейджи, рамки, телеметрия, акцентные статусы
- Адаптивная вёрстка для desktop и mobile

## Технологии

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Качество кода

```bash
npm run lint
npx tsc --noEmit
```

## Структура

- `src/app` — маршруты и layout
- `src/components/sections` — секции лендинга (`Hero`, `CinematicReveal`, `SystemsNominal`, ...)
- `src/components/ui` — переиспользуемые UI-элементы
- `src/lib` — конфигурации и данные сцен/кадров

## Статус

Проект в активной разработке: визуал и тайминг сцен регулярно донастраиваются.
