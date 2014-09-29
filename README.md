Silverstripe Gallery
====================

A new page type (_GalleryPage_) that provides everything needed to
manage a photo gallery.

You can do bulk uploads and reorder the images by dragging and dropping
their thumbnails in a dedicated tab (_Gallery_) inside the CMS. The same
image can be shared among multiple galleries. This module adds also some
field to the _Settings_ tab. This will allow to customize some aspect of
the gallery on a per page basis, e.g. the height of the thumbnail strip,
the height of the image slide and a flag to show or hide the captions.

On the developer side of things, you can write your own templates and
support the JavaScript library of your choice. Out of the box this
module uses [Fotorama](http://fotorama.io/). You can embed the gallery
block in your pages by including `ContentGallery.ss`, e.g.:

    <%-- This is a typical Page.ss --%>
    <h1>$Title</h1>
    <div class="gallery">
        <% include ContentGallery.ss %>
    </div>
    <div class="content">
        $Content
    </div>

Alternatively, the `GalleryPage.ss` layout template is provided. It
renders a full (standard) page, though it works out of the box only with
the [silverstrap](http://dev.entidi.com/p/silverstrap/) theme because it
relies on some convention adopted by that theme.

Author
------

Although the project originally started as a fork of
[silverstripe-gallery](https://github.com/i-lateral/silverstripe-gallery)
by [i-lateral](http://www.i-lateral.com/), the actual code has been
rewrote almost from scratch by [ntd](mailto:ntd@entidi.it) and, apart
the name, practically everything else has changed.

The project [home page](http://silverstripe.entidi.com/) is shared by
other [SilverStripe](http://www.silverstripe.org/) modules and themes.

To check out the code, report issues or propose enhancements, go to the
[dedicated tracker](http://dev.entidi.com/p/silverstripe-gallery).
Alternatively, you can do the same things by leveraging the official
[github repository](https://github.com/ntd/silverstripe-gallery).

Installation
------------

The gallery module is implemented as an extension of
[silverstripe-carousel](https://github.com/ntd/silverstripe-carousel),
so you *must* install it first. This in turn will install the
[sortablefile](https://github.com/bummzack/sortablefile) module that
provides the drag and drop reordering feature.

To install silverstripe-gallery itself you should proceed as usual:
drop the directory tree in your SilverStripe root and do a
`/dev/build/`. You will gain the new `GalleryPage` type in the CMS.

If you use [composer](https://getcomposer.org/), the dependencies will
be pulled-in automatically, so you could just run the following command:

    composer require entidi/silverstripe-gallery dev-master
