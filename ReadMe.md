# Name

Lemplate - OpenResty/Lua template framework implementing Perl's TT2 templating language

Table of Contents
=================

* [Name](#name)
* [Status](#status)
* [SYNOPSIS](#synopsis)
* [DESCRIPTION](#description)
* [HOWTO](#howto)
* [PUBLIC API](#public-api)
* [CURRENT SUPPORT](#current-support)
* [DEVELOPMENT](#development)
* [CREDIT](#credit)
* [AUTHOR](#author)
* [Copyright](#copyright)
* [See Also](#see-also)

# Status

**WARNING** This is still under early development. Check back often.

# SYNOPSIS

```lua
local templates = require "myapp.templates"
ngx.print(tempaltes.process("homepage.html", { var1 = 32, var2 = "foo" }))
```

From the commandline:

    lemplate --compile path/to/lemplate/directory/ > myapp/templates.lua

# DESCRIPTION

Lemplate is a templating framework for OpenResty/Lua that is built over
Perl's Template Toolkit (TT2).

Lemplate parses TT2 templates using the TT2 Perl framework, but with a
twist. Instead of compiling the templates into Perl code, it compiles
them into Lua that can run on OpenResty.

Lemplate then provides a Lua runtime module for processing
the template code. Presto, we have full featured Lua
templating language!

Combined with OpenResty, Lemplate provides a really simple
and powerful way to do web stuff.

[Back to TOC](#table-of-contents)

# HOWTO

Lemplate comes with a command line tool call `lemplate` that you use to
precompile your templates into a Lua module file. For example if you have
a template directory called `templates` that contains:

```console
$ ls templates/
body.html
footer.html
header.html
```

You might run this command:

```console
$ lemplate --compile template/* > myapp/templates.lua
```

This will compile all the templates into one Lua module file which can be loaded in your
main OpenResty/Lua application as the module `myapp.templates`.

Now all you need to do is load the Lua module file in your OpenResty app:

```lua
local templates = require "myapp.templates"
```

and do the HTML page rendering:

```lua
local results = templates.process("some-page.html",
                                  { var1 = val1, var2 = val2, ...})
```

Now you have Lemplate support for these templates in your OpenResty application.

[Back to TOC](#table-of-contents)

# PUBLIC API

The Lemplate Lua runtime module has the following API method:

- process(template-name, data);

    The `template-name` is a string like `'body.html'` that is the name of
    the top level template that you wish to process.

    The optional `data` specifies the data object to be used by the
    templates. It can be an object, a function or a url. If it is an object,
    it is used directly. If it is a function, the function is called and the
    returned object is used.

[Back to TOC](#table-of-contents)

# CURRENT SUPPORT

The goal of Jemplate is to support all of the Template Toolkit features
that can possibly be supported.

Jemplate now supports almost all the TT directives, including:

    * Plain text
    * [% [GET] variable %]
    * [% CALL variable %]
    * [% [SET] variable = value %]
    * [% DEFAULT variable = value ... %]
    * [% INCLUDE [arguments] %]
    * [% PROCESS [arguments] %]
    * [% BLOCK name %]
    * [% FILTER filter %] text... [% END %]
    * [% WRAPPER template [variable = value ...] %]
    * [% IF condition %]
    * [% ELSIF condition %]
    * [% ELSE %]
    * [% SWITCH variable %]
    * [% CASE [{value|DEFAULT}] %]
    * [% FOR x = y %]
    * [% WHILE expression %]
    * [% RETURN %]
    * [% THROW type message %]
    * [% STOP %]
    * [% NEXT %]
    * [% LAST %]
    * [% CLEAR %]
    * [%# this is a comment %]
    * [% MACRO name(param1, param2) BLOCK %] ... [% END %]  

ALL of the string virtual functions are supported.

ALL of the array virtual functions are supported:

ALL of the hash virtual functions are supported:

MANY of the standard filters are implemented.

The remaining features will be added very soon. See the DESIGN document
in the distro for a list of all features and their progress.

[Back to TOC](#table-of-contents)

# DEVELOPMENT

The bleeding edge code is available via Git at
git://github.com/openresty/lemplate.git

[Back to TOC](#table-of-contents)

# CREDIT

This project is based on Ingy dot Net's excellent [Jemplate](http://www.jemplate.net/) project.

[Back to TOC](#table-of-contents)

# AUTHOR

Yichun Zhang (agentzh)

[Back to TOC](#table-of-contents)

# Copyright

Copyright (C) 2016 Yichun Zhang (agentzh).  All Rights Reserved.

Copyright (C) 1996-2014 Andy Wardley.  All Rights Reserved.

Copyright (c) 2006-2014. Ingy döt Net. All rights reserved.

Copyright (C) 1998-2000 Canon Research Centre Europe Ltd

This module is free software; you can redistribute it and/or modify it under the same terms as Perl itself.

[Back to TOC](#table-of-contents)

# See Also

* Perl TT2 Reference Manual: http://www.template-toolkit.org/docs/manual/index.html
* Jemplate for compiling TT2 templates to client-side JavaScript: http://www.jemplate.net/

[Back to TOC](#table-of-contents)
