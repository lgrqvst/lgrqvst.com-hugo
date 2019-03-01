---
title: Ship Design
subtitle:
date: 2019-02-22T17:23:04+09:00
publishDate: 2019-02-22T17:23:04+09:00
draft: true
categories:
- Game Development
- RAVr
tags:
- RAVr
- space ships
- vehicle design
comments: true
headerimage_src: /img/
headerimage_credit:
headerimage_credit_url:
headerimage_description:
---

<!--
Summary of the images I want:
- Photograph of the iPad with Procreate open and the Apple Pencil resting on top
- The original design, large version
- The original design, different states collage
- Initial designs collage, 4-6 designs
- Continued designs collage, 4-6 designs
- More designs 3-4
- Final design from Procreate
- Final design from Affinity Designer
- mp4 or gif from After Effects (hosted where? Gfycat? Somewhere else?)
-->

I knew from the start that I didn't want to stray too far from the design I made for the original experiment (v5 in the GitHub repo), but I wanted to elaborate on a few details, and I wanted to add more animatable details, and some visual indicators to the ship itself.

{{< figure src="/img/post/ravr-ship-design/original.jpg" title="The original design" class="align-narrow" >}}

I quite like the original design. I like the cockpit lighting up when you turn on the ship. The gradual build-up of exhaust from the thruster nozzles. The way parts of the wings fold back when boosting, and the shape of the wings in general. Something about this design reminds me a little of Gundam, even though, disclaimer, I've never seen Gundam.

[Mention the shadow here as well]

{{< figure src="/img/post/ravr-ship-design/original-states.png" title="The original design in different states: Landed, flying, boosting" class="align-left" >}}

There are some elements here I definitely want to keep, but I want it all to be an order of magnitude... more. Larger, better. I want even more obvious differences between the states the ship can be in.

{{< figure src="/img/post/ravr-ship-design/group-1.jpg" title="A group of seven design ideas" class="align-wide" >}}

I started working on new designs without much thought of the above. Just getting into the mental space of drawing ships. Some of these early ones are actually really nice in my opinion, but weren't really what I was after for the player's ship. Who knows though? Maybe some of these will eventually end up as some kind of NPC ships?

{{< figure src="/img/post/ravr-ship-design/group-2.jpg" title="A group of seven design ideas" class="align-wide" >}}

This is the point I finally decided to hammer out a list of design specifications I wanted for the final design.

[Insert design specifications]

After a few more iterations, I'm beginning to drift toward a final decision. For the way the wings fold on these designs, rather than looking at planes and fighters like the [F-14](https://en.wikipedia.org/wiki/Grumman_F-14_Tomcat), I was inspired by insects, and the way the extend their wings, especially when they have multiple pairs of wings.

{{< figure src="/img/post/ravr-ship-design/group-3.jpg" title="A group of seven design ideas" class="align-wide" >}}

{{< figure src="/img/post/ravr-ship-design/final.jpg" title="The final design, exported from ProCreate" class="align-narrow" >}}

In the end this is the design I settled on. So I took it into Affinity Designer:

{{< figure src="/img/post/ravr-ship-design/final-vector.jpg" title="The final design, exported from Affinity Designer" class="align-middle" >}}

...and then into After Effects:

[Make an after effects document that shows some of the animations I want to make]

Now to recreate all this in JavaScript...
