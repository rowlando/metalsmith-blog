---
ID: 96
title: >
  Continuously test your front-end code
  automatically
author: Nick
date: 2009-05-29 15:15:09
layout: post.html
permalink: >
  http://www.rowlando.com/blog/2009/05/29/continuously-test-your-front-end-code-automatically/
published: true
---
When I worked at The Guardian, before committing code to Subversion, unit tests were run against the Java codebase. This is pretty standard. Sometimes, things slipped through and were caught at the <a href="http://martinfowler.com/articles/continuousIntegration.html">Continuous Integration</a> stage where an automated build would perform deeper tests and verify the code integrations of each developer hadn't broken anything. This approach works extremely well.

When it came to the front-end, the only tests that were run was pushing JavaScript code through JSLint. This wasn't set up as a pre-commit hook. Rather, it was up to the developer to execute a command-line script that performed these tests. I am in no way complaining about this. It was the first and only place I have worked that actually bothered to set up any formal testing of front-end code.

A few months ago I went to a presentation given by <a href="http://thecodetrain.co.uk/2009/04/automated-frontend-testing-the-talk/">Neil Crosby</a> at <a href="http://skillsmatter.com/event/ajax-ria/front-end-automated-testing">Skills Matter</a>. Neil spoke about a project he has been working on that addresses the lack of automated frontend testing.

Most web developers will occassionally <a href="http://validator.w3.org/">validate HTML</a> and <a href="http://jigsaw.w3.org/css-validator/">CSS</a>, and put their JavaScript through <a href="http://www.jslint.com/lint.html">JSLint</a>. If this were automated, a lot of time would be saved. Some bugs can take hours to fix and in the end, for example, all that was missing was a closing span tag in the HTML.

Neil's come up with a framework, called Frontend Test Suite, that automatically runs frontend code through the above tools. The suite is built in PHP and it is recommended that you install local copies of the HTML Validator, CSS Validator and JSLint so your IP doesn't get banned.

I followed Neil's <a href="http://github.com/NeilCrosby/frontend-test-suite/tree/master">installation steps</a> in the file SETUP, which are briefly listed here:
<ol>
	<li>Installed PHP (didn't really because it's already installed with Mac OS X 10.5.7</li>
	<li>Installed <abbr title="PHP Extension and Application Repository">PEAR</abbr></li>
	<li>Installed PHPUnit</li>
	<li>Downloaded Frontend Test Suite</li>
	<li>Installed HTML Validator locally</li>
	<li>Installed CSS Validator locally (thanks Jen)</li>
	<li>Installed Rhino</li>
	<li>Downloaded JSLint.js</li>
</ol>
I use <a href="http://www.aptana.com/">Aptana</a> regularly so, alongside the project I'm currently working on, I created a new project, dumped the Frontend Test Suite files into it and made the necessary edits to the example file. I execute the tests via the command line but at some point I will set up Aptana so I can execute it from there.

Next I need to workout how to get subversion to run these tests pre-commit.