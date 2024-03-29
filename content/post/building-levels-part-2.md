---
title: Building Levels, Part 2
subtitle: The Level Description Matrix
date: 2019-02-02T17:11:50+09:00
publishDate: 2019-02-02T17:11:50+09:00
draft: false
categories:
  - Game Development
  - RAVr
tags:
  - RAVr
  - level design
  - The Matrix has you
comments: true
headerimage_src: /img/post/header-ravr-notes-1.jpg
headerimage_credit:
headerimage_credit_url:
headerimage_description:
---

Here we go. Let's begin with setting down the most basic elements of a level.<!--more-->

- `#` Ground
- `.` Air

A block with the `#` descriptor should be all ground; a block with `.`, all air.

- `_` Surface
- `-` Slope, gentle
- `/` Slope, steep
- `|` Cliff

## Hang on

Actually, let's rewind. Ok. So, a level is constructed of units. One unit is represented by one descriptor in the level description matrix. One unit should be roughly a third (maybe?) the width of the screen when playing on 1920x1080, so let's say... 500x500 px? I just picked this definition out of thin air, but let's decide on that for now, and if necessary we can change it later. Every unit is in turn divided into a grid, like so:

```
   0  1  2  3  4  5  6  7  8  9  A
0  ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
1  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
2  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
3  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
4  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
5  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
6  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
7  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
8  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
9  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
A  └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
```

Eleven grid lines in each dimension to allow some fine-tuning of terrain generation. Every descriptor should be accompanied by 0 or more signifier numbers, describing the layout of the terrain in that unit. So for the surface descriptor `_7`, for example, that should be interpreted as a unit of terrain that is mostly flat, and which has endpoints at 0,7 and A, 7.

More examples:

- `-38`: Slope, gentle, with endpoints at 0,3 and A, 8
- `/38`: Slope, steep, with endpoints at 3, 0 and 8, A

(Gentle slopes are slopes between left and right, while steep slopes go between top and bottom)

- `|6`: Cliff. Mostly vertical terrain between 6, 0 and 6, A.

Further:

- `@` Landing pad. This should always be mostly flat and should probably accept two numbers: One for the level, like in the surface descriptor, and one for where on the X axis the pad should be located.
- `H` For homestead. Again, mostly flat with two signifiers.
- `*` A monument of some sort. RAVr is set on a world that was once home to a now-dead civilization that humans have just started to learn about. Remnants of this civilization dot the landscape. Should probably be found on mostly flat terrain.
- `$` Treasure or a resource of some kind
- `a` An artifact from the old civilization
- `!` Maybe something dangerous
- `?` A mystery, something unknown, or something occult.

Each of these could have a digit next to them to indicate size and subtype. E.g. the homestead could go from outpost to farm to village. Next to `$` it could indicate value, and so on.

### Here's an idea

Instead of having `@` and so on create their own terrain, how about attaching them as signifiers to the "actual" terrain? So we could have something like, `-35@6` for a gentle slope rising from left to right, with the landing pad on the 6th grid line. With this system we'd be able to fit more than one thing into every unit. Something like `_4@1$5*8` would theoretically be possible, for an area with the landing pad on the left, a bit of treasure (or whatever) in the middle and a monument (or something) on the right.

Yeah.

Yeah, I kind or like that. Let's go with that for now. I might have to rethink the unit size though. 500x500 might be too small. We'll see.

Also, here's a thing: If the player picks up the treasure, or otherwise removes the thing that the signifier indicates should exist in a given unit, then the descriptor for that unit should probably be changed to have that signified either removed or changed (depending on type). Actually, I think treasure at least might just be randomly determined every time the level loads. There are other people out there after all that might pick stuff up and drop other things. And as for artifacts, well, they could be generated every time as well, especially given my ideas about the nature of the planet itself (more on that below).

## More terrain

The above are all well and good to begin with, but I want more. How about:

- `V` Mostly flat but with a pit. One coordinate for the surface grid line, one for the horizontal location of the pit, one for the depth of the pit.
- `^` Mostly flat but with a hill. Same three as above, but height.
- `[` Mostly flat but with a sharp decline on the left side. Would receive one y coordinate for the surface grid line on the right, one x for where the slope begins, and one x for the slope end point.
- `]` Same as above but flipped.
- `W` Water. I don't have this fully thought out yet. There's going to have to be something for the shore bits, and some logic in place to make sure that water fills up the available space up to a defined level.

### Caves

Now this is where things begin to really get complicated. We're going to need ceiling bits in addition to surface bits, and bits with sloping ceiling, and bits with narrow passages. Maybe something to make things hang from the ceiling? I also want there to be a different background for underground areas, so we need some logic to determine the edge between outside and inside. I'm just going to wait with this one and implement it further down the road (if at all—although I do really want this to be a thing).

## A note on randomness

The random aspect of level generation is twofold:

First, when the levels are visited for the first time, a level description matrix is generated randomly and stored in the state. This matrix is based on logic that defines what bits can be adjacent to what other bits, and a level config object that holds details of what type of terrain should be available. E.g. a `_4` unit (i.e. flat terrain on horizontal grid line 4) must have units to the left and right with start/end points at horizontal grid line 4, units on top that are probably just air, and a unit underneath whose top edge is solid earth. The level config object might specify that a level should be skewed to having lots of hills and pits rather than just flat terrain, or that there should be a certain number of bodies of water, and so on. Also, things like number of settlements and monuments, and potential treasures and artifacts.

Secondly (and to be honest I'm actually not a 100% sure on this one yet) I might include some more randomness in the actual rendering of the level description matrix. The matrix will always be the same no matter how many times a player visits an area (using the same save game), but the details might be a little different. A homestead might still be next to a steep slope, but the curves of that slope are going to be slightly different. There might still be a statue next to the lake, but where before it was a statue of a hand reaching up, now it's a stone face with one eye missing. Last time around there were trees rising high in the foreground, but now they're in the background, or they're smaller, or the color is different. If I do go with this (and I'm leaning towards wanting this) then I definitely want an in-game explanation for why it's happening. One that's been kicking around in the back of my head for a while is that the planet is somehow alive and constantly shifting things around, and that this is connected to what happened to the previous civilization, but who knows? I'm still a long way from integrating any kind of story aspects.

## Destructible terrain???

I mean, let's calm down here, first of all.

Is there a reasonable way to do this? Maybe keep track of how much damage a unit has sustained, store that information in the level description matrix, like `_7%75` for a surface unit that's been 75% destroyed, and then have some logic that takes that number and modifies the rendering? I dunno. This is a low priority. In fact, I don't think this is very important at all, considering that I don't want weapons to play a huge role in this game.

## Anywho,

that's where I'm at right now. If you couldn't tell, I'm using these posts as a means of figuring out just what I want to do, and how I want to solve things. Thinking while typing. I think it ensures focusing on the topic at hand and not getting too distracted by other things. Hopefully it's at least somewhat interesting to read.
