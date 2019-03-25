# processwire_modules
A repository of my own, personal ProcessWire Modules

# DkConfig & DkCore
DkCore installes all other modules
DkConfig is just for storign and checking the config of all other modules (stored in config of DkCore)

# DkForms
If a template is set to an action (save, create, delete) it will do so with a basic form like this:
``` html
<form action="" method="post">
  <input type="hidden" name="action" value="save-page"/>
  <input type="text" name="title" value="New Title"/>
  <input type="text" name="fieldname" value="New Value"/>
  <input type="submit" value="save"/>
</form>
```
It automatically adds a csrf token.

# DkMultidomain
Redirects a domain to a specific page

# DkNavbar
Automatically creates `include/navbar.php` (default) based on the pages and settings.
Automatically adds a field 'inMenu' to all templates, which defines which pages are in the navbar.

# DkTemplate
Automatically creates a head and foot file as well as loads them on a `Page::render`.

# DkTemplateEditor
A simple file-editor based on 'InputfieldDKEditor'.

# InputfieldDKEditor
A simple inputfield based on ace-editor.
