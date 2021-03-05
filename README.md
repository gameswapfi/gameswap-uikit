#  GameSwap UIkit

[![Version](https://img.shields.io/npm/v/@gameswapfinance/uikit)](https://www.npmjs.com/package/@gameswapfinance/uikit) [![Size](https://img.shields.io/bundlephobia/min/@gameswapfinance/uikit)](https://www.npmjs.com/package/@gameswapfinance/uikit)

GameSwap UIkit is a set of React components and hooks used to build pages on GameSwap's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @gameswapfinance/uikit`

## npm

https://www.npmjs.com/package/@gameswapfinance/uikit

## Setup

### Theme

Before using GameSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@gameswapfinance/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@gameswapfinance/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://gameswapfinance.github.io/gameswap-uikit/)
