---
ID: 43
title: >
  Using Subversion to share global CSS
  amongst different websites
author: Nick
date: 2009-01-29 22:49:02
layout: post.html
permalink: >
  http://www.rowlando.com/blog/2009/01/29/using-subversion-to-share-global-css-amongst-different-websites/
published: true
---
I'm currently working for one of the UK's big banks. Recently, the bank in question decided to unify its visual identity (VI) for any sites being built now and in the future. This is a wise step but has created difficulties for the 2 websites that are currently in build.

Being a front-end developer, I have spent the past few months building the HTML, CSS and JavaScript. When you're told that all the work you've done is now to change it's slightly frustrating. When I say all my work I mean all the work I have physically outputted, i.e. the code. To produce the code, meetings a plenty were had, IA wireframes and design inconsistencies were picked over, bugs were fixed, lots of coffee was drunk, etc... What I have now is plenty of project knowledge and the benefit of hindsight.

The design of the new VI attempts to stay structurally the same as the old VI. There has been a lot of tightening up, less inconsistencies between different modules, all of which ultimately result in less markup and less styles. So, outwith the old HTML, that has been put into templates already, and in with the new.
<h2>Unified HTML modules and CSS</h2>
There are now 2 front-end developers working on 2 different websites for the same company. They need to share the same VI. At first, because I had already developed the code for one of the websites, we were going to have 2 separate sets of HTML and CSS for the same VI; one for each web site.

This is not a good start as over time the look'n'feel would suffer because maintanance overheads would rocket as more web sites were built. Future developers would get very confused.

Time isn't on our side but nevertheless we opted for the sensible option in the end. We have built up a shared set of HTML modules and CSS and have put this into Subversion. We continually build upon this shared set of code. Now we also have our own projects to worry about. This is where <a href="http://svnbook.red-bean.com/en/1.5/svn-book.html#svn.advanced.externals">Subversion's external property</a> comes in handy.

The external property allows one to allocate a directory name that will suck in another Subversion project, a particular revision of this project if so required. Whenever an SVN update occurs Subversion will do its regular update but will also check the projects set in the external property for any changes.

I set up the 2 web projects to follow the same structure, with an external property set on each. The external property points to the shared HTML modules and the global assets folder. I haven't set any revision on the external property because I want all updates to automatically come through when doing an SVN update. There will most likely be some point in the future where I want to switch to a particular revision in order to stabilise development.

It's very easy to set up properties using TortoiseSVN. Jesper has a very easy to follow example of <a href="http://justaddwater.dk/2007/10/23/setting-up-subversion-externals-with-tortoisesvn/">setting up external property via TortoiseSVN</a>.

I like learning new things. I new this concept must have been a common requirement and my searching was worth it at the cost of frustrating my fellow developer!