---
title: RAVr - Engine Rewrite, Part 5
subtitle:
date: 2017-10-20T11:38:46+09:00
publishDate: 2017-10-20T11:38:46+09:00
draft: false
categories:
- Game Development
- RAVr
tags:
- RAVr
- Engine simulation
- HUD
comments: true
---

(Continuing from 2017-10-12)

I'm finally getting to the point where I'm seeing some results of the changes introduced in the engine rewrite.

<!--more-->In terms of ship functionality I'm basically at the same level or slightly ahead of where I was before I started this thing, so I can finally start thinking about merging these this branch back to master. I think the next thing I need to do is get the HUD to function at the same level it was before. The center display is fine the way it was (albeit with the addition of some engine indicators), but the bars on the side (previously indicating engineOutput) will have to be replaced by... what exactly? More bars I guess. I'm thinking generatorLoad and Output, enginePower, battery, emergencyPower, basically all the Powers, to start with. Gonna have to think about stuff like ship status and shield strength as well as other things which also haven't been implemented yet.

Speaking of the HUD, here's a (maybe) interesting idea: I've been thinking before about how when the ship's hit points go down, random things start to break, like coolant leaks, and generator malfunctions and what-have-you. One such effect should be the HUD going dead.

Anyway, just wanted to get some thoughts out. See you in the next update.
