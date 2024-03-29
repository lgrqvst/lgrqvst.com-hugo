---
title: RAVr - Engine Rewrite, Part 2
subtitle:
date: 2017-10-06T11:37:53+09:00
publishDate: 2017-10-06T11:37:53+09:00
draft: false
categories:
- Game Development
- RAVr
tags:
- RAVr
- Engine simulation
- Flowchart
comments: true
---

(Continuing from 2017-09-30)

For the past few days, my head has been filled with ideas of fuel injection and combustion chambers and what-have-you, but it occurred to me that since I don't know anything about real engines, it might be better to simply not bother with any real-world practical considerations, and simply go for a more, let's say, _creative_ approach to the problem.

<!--more-->Here's my first idea.

```
      Fuel ---> Engine <--- Oxidizer
                 /  \
                /    \
           Energy     Waste
           /    \      (smoke-like exhaust)
 "Output" /      \
         /        \
      Power the    \
      ship         Excess energy
                   generates thrust
                   (bright, line-like exhaust)
```

_Fig. 1. Fuel and oxidizer are pumped into the engine, where they are converted to energy and waste. Waste is expelled as smoke. A static amount of energy is used to power the ship. Excess energy converts to thrust. Simply having the engine running generates just enough to power the ship. Hitting W or S means increasing the amount of fuel and oxidizer fed into the engine, thereby increasing thrust._

This isn't bad, necessarily, but I feel like it lacks something. I'm usually very much on board the whole less is more train, but I want this to be a bit more complex. And I want to put some sort of customization aspects into it as well. Give the player some interesting choices.

## Ideas to add complexity

- The bit in the above flowchart that says "Engine" can surely be expanded to be more interesting. Make it a multi-step process.
- Let there be a difference between turning the ship on, and turning the engine on.
- More than one type of fuel. Could have different efficacy and maybe produce different colored exhaust.
- Make the production of waste more interesting, perhaps involving the engine more
- Engine cooling. Using the engine requires coolant. Boosting too hard too long should cause it to overheat.
- Engine cooling could also produce its own waste. Maybe condensed water dripping from the ship.
- Batteries. Some part of the engine output goes to charging batteries. Could be used when powering up the ship, and/or as emergency power?
- Emergency power
- A different engine used for emergencies. If we have emergency power, and the ship goes to emergency power when it runs out of fuel, and the engine requires fuel to run, then there'd have to be a different engine for emergency landings that doesn't use the regular fuel. Maybe something like the the function that slowly lower the ship to the ground in the old version?
- Energy management. Allow the player to divide ship power between different areas: Thrusters, shields, weapons, etc.
- Some sort of engine buffer that stores the energy produces before it's redirected

[to be continued]
