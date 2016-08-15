---
title: Copyright
style: copyright-page

# The Liquid tags here fetch metadata 
# from this book's YML file in _data
---

# Copyright
{:.non-printing}

{% include get-slug.html %}

*{{ site.data.meta.titles.[slug].title }}*\\
Text © {{ site.data.meta.titles.[slug].creator }}

{% for id in site.data.meta.titles.[slug].products.print.identifier %}
ISBN: {{ id }}
{% endfor %}

{{ site.data.meta.titles.[slug].rights }}
