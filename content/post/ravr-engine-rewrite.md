---
title: RAVr - Engine Rewrite
subtitle:
date: 2017-09-30T11:37:32+09:00
publishDate: 2017-09-30T11:37:32+09:00
draft: false
categories:
- Game Development
- RAVr
tags:
- RAVr
- Engine simulation
comments: true
---

When I say engine, I'm not talking about the game engine. Frankly, I'm not even sure what would constitute the game engine in a game this small - the update and draw functions? No, I'm talking about the internal workings of the imagined engine of the ship.

<!--more-->I think that as it is right now, there's no in-universe logic to how the engine works on a mechanical level. It's all just variables stating that when this button is pressed, the rate of fuel consumption should be this, and when this button is pressed the engine output should change by this much. It's a mess. It's a mess to add new bits to it and it's a mess to make adjustments to the controls, and it's a mess to keep the whole thing in your head.

So I'm rewriting it.

I want something that has more of an in-universe feel to it. Something that feels more akin to how a "real engine"[^1] would operate. I want the following things to be true:

- When the player turns on the ship, I want the engine output to slowly build.
- The player should be able to use the normal thrusters and still have the engine output build.
- If the player uses the boosting thrusters, the engine output should drop slowly.
- The amount of acceleration from normal thrusters and boosting thrusters should grow as engine output grows.
- Boosting thrusters should always use up more fuel than normal thrusters.
- There should be a logical limit in place that limits the use of the boosting thrusters over long periods (not just running out of fuel).
- Hitting F to increase engine output should be dangerous to the ship (deal damage) and should use up more fuel.
- The speed granted and fuel drain by using a certain thruster, should be a direct result of the internal state of the engine, not simply fetched from a number in a variable.

[to be continued]

---

[^1]: Disclaimer: I know nothing about real engines, so whatever solution I come up with in the end will only be similar to a real engine in superficial details (as misunderstood by me)._
