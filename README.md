# Not Maintained
I have not worked with Django in a long time & have no need for this project myself any longer. If you wish to take up the responsibility, please email me at info@btfrost.com.

# django-fontawesome-5

A utility for using icons in models, forms, and templates.
Does support Django 3.0, which *django-fontawesome* will not.

![Clip of dropdown](https://github.com/BenjjinF/django-fontawesome/blob/master/docs/images/django-fontawesome-5.gif)

## Migration guide from django-fontawesome

1. Remove all occurences of     {% fontawesome_stylesheet %}
1. Replace {% load fontawesome %} with {% load fontawesome_5 %}
1. Replace '{% fontawesome_icon' with '{% fa5_icon'
1. Replace iconnames, for example "bell" needs to be replaced with "bell fas" and "linedin-square" with "linkedin fab"

## Installation / Usage

    pipenv install django-fontawesome-5

Add 'fontawesome_5' to your installed `INSTALLED_APPS`:

    INSTALLED_APPS = (
        ...
        'fontawesome_5',
    )


Import and use `IconField`:
    
    from fontawesome_5.fields import IconField

    class Category(models.Model):
        ...
        icon = IconField()


Include Static Files

    {% load fontawesome_5 %}

    <head>
      {% fontawesome_5_static %} 
      ...
    </head>

## Settings

You can configure django-fontawesome to use another release/source/cdn by specifying::

    FONTAWESOME_5_CSS = URL or None
        default: 'fontawesome_5/css/django-fontawesome.css'
    FONTAWESOME_5_CSS_ADMIN = URL or path
        default: None
    FONTAWESOME_5_ICON_CLASS = 'default' or 'semantic_ui' 
        default: 'default'
    FONTAWESOME_5_PREFIX = 'custom_prefix'
        default: 'fa'

## Rendering

You can do a simple render  in your template like this:
    
    {% for category in categories.all %}
        {% if category.icon %}
            {{ category.icon.as_html }}
        {% endif %}
    {% endfor %}

### Default Renderer

Or you can use the `{% fa5_icon %}` template tag.

    {% fa5_icon 'github' 'fab' %}

Positional arguments: `icon` (required), `style_prefix` (default: 'fas')

#### Key word arguments:
  - class `extra custom classes`
  - color `CSS Color Names`
  - border `boolean`
  - fixed_width `boolean`
  - flip
    - `horizontal`
    - `vertical`
  - li `boolean`
  - pull
   - `left`
   - `right`
  - pulse `boolean`
  - rotate `integer`
  - size 
     - `fa-xs`
     - `fa-sm`
     - `fa-lg`
     - `fa-2x`
     - `fa-3x`
     - `fa-5x`
     - `fa-7x`
     - `fa-10x`
  - spin `boolean`
  - title `string`
  
### Semantic UI Renderer

Or you can use the `{% fa5_icon %}` template tag.

    {% fa5_icon 'check' %}

Required positional arguments: `icon`

#### Key word arguments:
  - class `extra custom classes`
  - bordered `boolean`
  - circular `boolean`
  - colored `Semantic UI Colors`
  - disabled `boolean`
  - fitted `boolean`
  - flipped
    - `horizontal`
    - `vertical`
  - inverted `boolean`
  - link `boolean`
  - loading `boolean`
  - rotated 
   - `clockwise`
   - `counterclockwise`
  - pulse `boolean`
  - rotate `integer`
  - size 
     - `fa-xs`
     - `fa-sm`
     - `fa-lg`
     - `fa-2x`
     - `fa-3x`
     - `fa-5x`
     - `fa-7x`
     - `fa-10x`
  - title `string`

## Credit

Credit to https://github.com/redouane for the original ~

## Changes
 - Updated for use with Font Awesome 5
 - Removed PyYAML, Select2, and jQuery as dependencies
 - Static files tag includes static dependencies for use outside admin
 - Moved rendering logic to renderers
