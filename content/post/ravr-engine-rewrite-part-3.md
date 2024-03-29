---
title: RAVr - Engine Rewrite, Part 3
subtitle:
date: 2017-10-09T11:38:04+09:00
publishDate: 2017-10-09T11:38:04+09:00
draft: false
categories:
- Game Development
- RAVr
tags:
- RAVr
- Engine simulation
- Ship systems
- Flowchart
comments: true
---

(Continuing from 2017-10-06)

Here's a new flowchart.
<!--more-->

```
                      /-----> Exhaust I (smoke)
  Fuel I ---> Generator
                /     \
               /       \--> Heat ---> Exhaust III (condensate)
              /                     /
             /   Coolant-----------/
            /
           Power --\-----------------\
            \       \                 \
             \       --> Batteries ------->  Ship Systems
              \             |                ------------
               \            |                1. General
                \           /                2. Shields
                 \         /                 3. Weapons
                  \       /                  4. Harvesting coils
                   \     /                   5. Emergency thrusters
     Oxidizer --\   \   /
                 \   \ /
     Fuel II -----> Engine ---> Propellant --> Thrust --> Exhaust II (lines)
                     /
                   /
                 Heat
                   \
                    \
         Coolant ----> Exhaust III (condensate)
```

_Fig. 1. Fuel I goes into the generator, producing Power, Heat and Exhaust I. Coolant applied to reduce heat, producing Exhaust III. Power is divided between General Ship Functions, Shields, Weapons, Engine and charging Batteries. Batteries can also power the ship functions. Power (either from the generator or from the batteries), Fuel II and Oxidizer go into the engine, producing propellant and heat. Propellant is expelled to generate thrust (taking the shape of Exhaust II). Coolant is applied to reduce heat, producing Exhaust III._

This is more like it. Now I feel like where getting somewhere. Interesting amount of complexity without being _too_ complex. Unless I have some sort of epiphany before the next time I sit down to code, I think this is what I'll be going with. Now all I have to do is implement it.

## Some additional thoughts

- Engine temperature plus slight random fluctuation determines color of Exhaust II.
- Extending the harvesting coils will make the ship slightly less responsive, but will allow for the regeneration of fuel, oxidizer and coolant.
- Landing on the landing pad will quickly replenish stocks and repair the ship. (Have some tubes and hoses extend from the platform to connect with the ship. Maybe this shouldn't be automatic - the player must engage docking clamps.)
- In between the lines of Exhaust II, throw in some particles representing bits of propellant that hasn't properly sublimated.
- Taking damage can mean that e.g. the coolant tank starts leaking, with predictable effects.
- The amount of power going into the engine determines how much fuel and oxidizer is injected and how much propellant, thrust and heat is produced.
- The game starts with batteries at 0.
- The generator takes a few seconds before it generates power at 100%.
- It should be possible to push the generator beyond what's good for it.
- Generator power should go first to batteries, then ship functions then engine.
- Running the engine draws power first from the batteries. Normal thrust with the generator at 100 should never drain the batteries. Boosting uses more power. After batteries are drained, it should take power from the generator, at the (possible) expense of ship functions.
- If the generator produces more power than is used by the ship, what happens? There's something to think about. Does the fuel cut off? Does Exhaust I increase? Should there be some other function to get rid of excess energy? Excess energy produces Exhaust IV? Channeled into engine for thrust whether you want it or not? Think about this one a bit.
- Turning on the ship means turning on ship functions, and does not automatically turn on the generator.
- Turning on the generator requires the ship to be on

[to be continued]
