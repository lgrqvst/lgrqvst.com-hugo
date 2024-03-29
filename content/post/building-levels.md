---
title: Building Levels, Part 1
subtitle:
date: 2019-01-25T12:11:38+09:00
publishDate: 2019-01-25T12:11:38+09:00
draft: false
categories:
  - Game Development
  - RAVr
tags:
  - RAVr
  - levels
  - procedural generation
comments: true
headerimage_src: /img/post/header-ravr-notes-1.jpg
headerimage_credit:
headerimage_credit_url:
headerimage_description:
---

Here's my current idea for handling levels. Each level will have a config object with some settings for colors, plant growth, what type of artifacts and settlements should be generated, and maybe some info on terrain types. When the player runs the game and a level is loaded, a terrain matrix is generated based on the settings in the config object.<!--more-->

The terrain matrix would look something like so:

```javascript
const level = `
  . . . . . . . . . . . . . . .
  - * \ . . . . . . . . . . . .
  # # \ . . . / o ^ - V - @ - -
  # # # \ w w / # # # # # # # #
  # # # # \ w \ # # # # # # # #
  # # # # # # # # # # # # # # #
`;
```

But probably larger. In this quick example `#` would represent solid rock, `-` normal surface, `w` water, `*` some kind of monument, `o` maybe a farm or homestead or something, and `@` the landing pad. `/`, `\`, `^` and `V` would be slopes and hills and pits. The generated terrain matrix will be saved in the current instance of the game, and when the player returns to a landing pad, also to localStorage for loading later. The level is pushed to the stage array, and then drawn out as part of the draw function, maybe with a check of the current location of the player/camera to determine which bits to draw?

I don't know. I think this is a good start, and generally the way I want to go. I'd have to make sure to define what bits can go next to what other bits, to make sure the level ends up actually playable. I also want to create some fixed combinations of parts that could be dropped in for certain levels. I might want one particular level to always have a statue overlooking a lake for example, or another to always have a settlement inside a cave or something. Maybe I'm getting ahead of myself.

The way I'm imagining the ground surface is, for a `-` section, the start and end points to the left and right would be at a fixed level, say in the exact middle, and the in-between terrain curve would be generated randomly within parameters specified by the level and terrain type. The same would go for hills and pits. Same start and end points as flat terrain, but with more extreme features in the middle. There's going to be some fiddly bits getting everything to play nicely, especially when I start adding slopes and caves and stuff. But all in all, I think this is the way to move forward with this.
