# railsindex README

RailsIndex is a VS Code extension for Ruby and Ruby on Rails files with the extensions ".rb" and ".erb".  It will add a context menu to those types of files which can be selected in order to bring up a terminal which runs 'ri' on the text under the cursor.  That's _all_ it does.

## Features

RailsIndex will add a context menu to those types of files which can be selected in order to bring up a terminal which runs 'ri' on the text under the cursor.  That's _all_ it does.

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

![Short Animation](images/shinobu.gif)

## Requirements

ri is required

## Extension Settings

This extension contributes the following settings:

* `ri.path`: The path to the 'ri' binary.  If it's already on your path, don't worry about it.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

### 0.2.0

* Handle the cases where we're looking for ? or ! at the end of the command.
* Don't automatically close the window on error, we want to see what ri suggests.
* Spiffy new icon.

### 0.1.0

* Initial release of 0

**Share and Enjoy!**
