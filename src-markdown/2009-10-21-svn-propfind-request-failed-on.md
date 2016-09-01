---
ID: 105
title: 'svn: PROPFIND request failed on&#8230;'
author: Nick
date: 2009-10-21 22:48:24
layout: post.html
permalink: >
  http://www.rowlando.com/blog/2009/10/21/svn-propfind-request-failed-on/
published: true
---
I had some problems checking out from Subversion. I got the error message:

<code>svn: PROPFIND request failed on '/xxx
svn: PROPFIND of '/xxx: could not connect to server (http://xxx.xxxxx.com)</code>

After a bit of searching, <a href="http://vsingleton.blogspot.com/2008/04/svn-propfind-request-failed-on.html">Vernon</a> suggested it could be proxy server settings. I checked them by opening up a terminal and typing:

<code>vim ~/.subversion/servers</code>

Scrolling down to the line starting with <code>http-proxy-host</code> it was obvious I had set a proxy previously as it was pointing to a previous clients internal proxy server. I haven't command-line subversion client on my Mac for a while because I've being using the svn client installed in Aptana. Commenting out the offending lines fixed my problems.