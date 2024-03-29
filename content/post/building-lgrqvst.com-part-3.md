---
title: Building Lgrqvst.com, Part III
subtitle: Organization & Structure
date: 2018-04-13T16:19:11+09:00
publishDate: 2018-04-13T16:19:11+09:00
draft: false
categories:
- Web Development
tags:
- lgrqvst.com
- indecision
- organization
comments: true
---

Let's think about structure. With the different types of content I envision this site eventually hosting, how to I organize it all?

<!--more-->First, what _are_ the content types?

- Static pages

   For content that rarely or never changes, like an About page or a Contact page.

- `blog/`

   For blog posts, devblogs, essays, and articles of all kind. Written content that isn't fiction. I'm thinking maybe I'll divide these into years? Or just add a date to the beginning of the name?

- `portfolio/`

   For items in the portfolio. This has low priority for now, but I'm gonna try to keep in the back of my mind.

- ~~`stuff/`~~

   ~~I'll probably call it something else (I'll definitely call it something else---maybe 'art' or 'creative'? Or something? 'creations'? 'works'? 'opuses'? Or maybe go for something more... conceptual? Figurative? 'inventory'? 'trove'? 'collection'? 'pile'? 'bank'? 'vault'? 'hoard'?), but basically this is for _things_ I make, whatever shape or form they may take. Maybe set up different sub-sections or categories (or types?) for different kinds of content. Maybe even more than one "root" section??? Jeez, I don't know. Maybe I'm thinking about this too hard.~~

- Larger projects

   For things I make that are larger in scope, I think I'll just create a separate content section.

### Edit 180425

Coming back to this and thinking about the stuff section. Maybe I'll just go ahead and lose that altogether. When thinking about how I want to present content on the site, I don't really want to make a huge difference between blog posts and other things I make, because there will often be things I want to say about that thing. So yeah. Cut the `stuff/` section, and put everything in one place, organized by categories (and other taxonomies like themes and motifs). So now the question becomes, is 'blog' a good name? And no, not really. Honestly, maybe just call it 'stuff' for now? Yeah, let's go with that.

### Edit 180436

I'm back with some doubts again. Truth is, I feel like I just don't know enough about Hugo yet to make informed decisions about structuring my content. So, I've been looking around at how other people organize content in Hugo, and here's what feels good right now:

Put "bloggy" content in `post/`.

Put artistic/creative content in sections specific to its type, like so: `art`, `music`, `rpg`, etc.

Ok, I'm locking this in. I'm decided. This is how I'm doing it. Because even if it'll all be presented as part of the same flow upfront, I still want some organization on my end. So there.

### Edit 180704

Ok, here's where my mind is at right now:

Blog posts go in `post`.

Things that are more creative/artistic in nature (and this is really not a very clear distinction, even to myself, tbh) go in `art`, under a relevant sub-section, like `drawings`, `music`, etc.

I just feel like it'll be easier to present if there are just two main content types.
