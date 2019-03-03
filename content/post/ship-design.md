---
title: Ship Design
subtitle:
date: 2019-03-03T12:30:00+09:00
publishDate: 2019-03-03T12:30:00+09:00
draft: false
categories:
  - Game Development
  - RAVr
tags:
  - RAVr
  - space ships
  - vehicle design
  - procreate
  - affinity designer
comments: true
headerimage_src: /img/post/ravr-ship-design/header.jpg
headerimage_credit:
headerimage_credit_url:
headerimage_description: A sideways, closeup shot of an iPad displaying thumbnails of various designs. Apple Pencil resting on top.
---

I knew from the start that I didn't want to stray too far from the design I made for the original experiment (v5 in the GitHub repo), but I wanted to elaborate on a few details, and I wanted to add more animatable details, and some visual indicators to the ship itself.<!--more-->

{{< figure src="/img/post/ravr-ship-design/original.jpg" title="The original design" class="align-narrow" >}}

I quite like the original design. I like the cockpit lighting up when you turn on the ship. The gradual build-up of exhaust from the thruster nozzles. The way parts of the wings fold back when boosting, and the shape of the wings in general. Something about this design reminds me a little of Gundam, even though, disclaimer, I've never seen Gundam. I'm also rather fond of the extremely simple shading (the side facing away from the moon appearing slightly darker).

{{< figure src="/img/post/ravr-ship-design/original-states.png" title="The original design in different states: Landed, flying, boosting" class="align-left" >}}

There are some elements here I definitely want to keep, but I want it all to be an order of magnitude... more. Larger, better. I want even more obvious differences between the states the ship can be in.

{{< figure src="/img/post/ravr-ship-design/group-1.jpg" title="A group of seven design ideas" class="align-wide" >}}

I started working on new designs without much thought of the above. Just getting into the mental space of drawing ships. Some of these early ones are actually quite nice in my opinion, but weren't really what I was after for the player's ship. Who knows though? Maybe some of these will eventually end up as some kind of NPC ships?

{{< figure src="/img/post/ravr-ship-design/group-2.jpg" title="A group of seven design ideas" class="align-wide" >}}

This is the point I finally decided to hammer out a list of design specifications I wanted for the final design.

- Main thruster, 1 or 2
- Boosting thruster, 1 or 2
- Rotational thrusters, 1 or 2 on each side
- Stabilizing thrusters, ~4 in total
- Reactor vents, 1 or 2
- Folding wings
- Possibly a second wing set
- Instruments
- Cockpit
- Animatable details
- Degradable details

After a few more iterations, I'm beginning to drift toward a final decision. For the way the wings fold on these designs, rather than looking at planes or fighters like the [F-14](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat), I was inspired by insects, and the way the extend their wings, especially when they have multiple pairs of wings.

{{< figure src="/img/post/ravr-ship-design/group-3.jpg" title="A group of seven design ideas" class="align-wide" >}}

{{< figure src="/img/post/ravr-ship-design/final.jpg" title="The final design, exported from ProCreate" class="align-narrow" >}}

In the end this is the design I settled on. So I took it into Affinity Designer:

{{< figure src="/img/post/ravr-ship-design/final-vector.jpg" title="The final design, exported from Affinity Designer" class="align-middle" >}}

I had a thought that I could try and take this design into After Effects, and animate the details I want to animate later in the game, but for now, I'll satisfy myself with what I have here. Making something in After Effects would no doubt be fun and possibly worthwhile in terms of getting better at that application, but I don't think it would help me much in the making of this game.

So there you have it! I suspect once I start building this programmatically the design might change a bit a bit here and there, but I was looking for an excuse to make something with Affinity Designer (It's very nice, btw), so now the vector based version of the design exists as well.

Next, on to JavaScript!
