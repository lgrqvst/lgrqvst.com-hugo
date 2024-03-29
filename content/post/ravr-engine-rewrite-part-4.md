---
title: RAVr - Engine Rewrite, Part 4
subtitle: Power Management
date: 2017-10-12T11:38:30+09:00
publishDate: 2017-10-12T11:38:30+09:00
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

(Continuing from 2017-10-09)

I need to have a think about power management. Specifically, I need to think a bit more about this part of the previous flowchart:
<!--more-->

```
Generator
   /
  /
Power --\-----------------\
    \    \                 \
     \    \--> Batteries ------->  Ship Systems
      \        /                   ------------
       \      /                    1. General (controls, landing gear, cockpit lights, activation of ship systems)
        \    /                     2. Shields
        Engine                     3. Weapons
                                   4. Harvesting coils
                                   5. Emergency thrusters
```

After the generator starts up and begins generating power, what happens? How is the generated power split between functions?

Take 1. If the batteries aren't charged, a portion of the generated power will go to charging them. The rest is divided evenly among other systems? I don't know. This leaves too many question marks. I think I need to rethink ship systems a little bit.

Take 2. If the generator is off and batteries are charged, batteries will power the ship. If the generator is on and batteries are charged, the generator will power the ship. If the generator is on and batteries are not charged, the generator will charge the batteries and power the ship. Ship systems will be powered according to system priority, like so:

```
Generator
   /
  /
Power --\-----------------\
                           \
               Batteries ------->  Ship Systems
                    ^              ------------
                    |              1. General (controls, landing gear, cockpit lights, activation of ship systems)
                    |              2. Shields
                    |              3. Weapons
                    |              4. Harvesting coils
                    |              5. Engine
                    |------------- 6. Battery charging (only on generator Powering)
                                   7. Emergency power
```

So. Generator generates. Power management checks the priority list. First General systems takes whatever it needs. Next, engine (if running) takes what it needs. Next shields (again, if running), then weapons, then harvesting coils. If batteries are not fully charged, they will drink up whatever is left at that point. Finally, the emergency power supply for the emergency thrusters will be charged only after batteries are fully charged.

Actually, I'm thinking maybe I'll push the engine further down in the list, after harvesting coils. Presumably, if the player activates any of the systems before the engine in the list, they expect those systems to take priority. If the engine needs more power, they'll have to deactivate the systems above it in the list. Yes, this makes sense to me. I'm changing it. For now. It would be cool, in some distant, future version of this game, to have the player be able to change the priority list according to their play style. Not a priority for me right now though.

Using the normal thrust control (W) should channel all available power (at priority 5) into the engines. Thus, if the generator runs at higher load, more power would be channeled into the engine (generating more propellant/thrust). I'm currently thinking that the boost control (S) should switch the engine to a different fuel creating more... potent (?) propellant.

When the generator is running at 100% output at standard load (100), there should be enough power to power the ship, run the engines normally, and power shields, weapons, and harvesting coils. Or should there? Should the player have to turn off certain systems occasionally?
