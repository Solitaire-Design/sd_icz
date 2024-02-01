import type { Bud } from '@roots/bud'

/**
 * Bud config
 */
export default async (bud: Bud) => {
  bud
    .proxy(`http://icz.lndo.site`)
    .serve(`http://localhost:4000`)
    .watch([bud.path(`resources/views`), bud.path(`app`)])

    .entry(`app`, [`@scripts/app`, `@styles/app`])
    .entry(`editor`, [`@scripts/editor`, `@styles/editor`])
    .entry(`admin`, [`@scripts/admin`, `@styles/admin`])
    .copyDir(`images`)

    .setPublicPath(`/dist/`)
    .experiments(`topLevelAwait`, true)

    .wpjson.setSettings({
      color: {
        custom: false,
        customDuotone: false,
        customGradient: false,
        defaultDuotone: false,
        defaultGradients: false,
        defaultPalette: false,
        duotone: [],
      },
      custom: {
        spacing: {},
        typography: {
          'font-size': {},
          'line-height': {},
        },
      },
      layout: {
        contentSize: `64rem`,
      },
      spacing: {
        padding: true,
        units: [`px`, `%`, `em`, `rem`, `vw`, `vh`],
      },
      typography: {
        customFontSize: false,
        dropCap: undefined,
      },
    })
    .setStyles({
      spacing: {
        blockGap: `1.5rem`,
        padding: {
          left: `1.5rem`,
          right: `1.5rem`,
        },
      },
      typography: {
        fontFamily: `var(--wp--preset--font-family--sans)`,
        fontSize: `var(--wp--preset--font-size--normal)`,
      },
    })
    .setPath(bud.path(`public/dist/theme.json`))

  bud.when(`tailwind` in bud, ({ wpjson }) =>
    wpjson.useTailwindColors().useTailwindFontFamily().useTailwindFontSize())

  await bud.tapAsync(sourceThemeValues)

  bud
    .when(`eslint` in bud, ({ eslint }) =>
      eslint
        .extends([
          `@roots/eslint-config/sage`,
          `@roots/eslint-config/typescript`,
          `plugin:react/jsx-runtime`,
        ])
        .setFix(true)
        .setFailOnWarning(bud.isProduction))

    /**
     * Stylelint config
     */
    .when(`stylelint` in bud, ({ stylelint }) =>
      stylelint
        .extends([
          `@roots/sage/stylelint-config`,
          `@roots/bud-tailwindcss/stylelint-config`,
        ])
        .setFix(true)
        .setFailOnWarning(bud.isProduction))
}

/**
 * Find all `*.theme.js` files and apply them to the `theme.json` output
 */
async function sourceThemeValues({ error, glob, wpjson }: Bud) {
  const importMatching = async (paths: Array<string>) =>
    await Promise.all(paths.map(async path => (await import(path)).default))

  const setThemeValues = (records: Record<string, unknown>) =>
    Object.entries(records).map(params => wpjson.set(...params))

  await glob(`resources/**/*.theme.js`)
    .then(importMatching)
    .then(modules => modules.map(setThemeValues))
    .catch(error)
}
