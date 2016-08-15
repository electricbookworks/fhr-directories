---
title: Contents
style: contents-page
---

{% comment %}Get a list of all provinces actually included{% endcomment %}
{% capture province-list %}
{% for provinces in site.data.advice-offices %}
{{provinces['province']}}
{% endfor %}
{% endcapture %}

# Contents

{% if site.output == "web" %}1. [About this directory](0-4-about.html#about-this-directory){% else %}1. [Introduction](0-4-about.html#introduction){% endif %}

{% if province-list contains "EC" %}1. [Eastern Cape](ec.html#eastern-cape){% endif %}

{% if province-list contains "FS" %}1. [Free State](fs.html){% endif %}

{% if province-list contains "GP" %}1. [Gauteng](gp.html#gauteng){% endif %}

{% if province-list contains "KZN" %}1. [KwaZulu-Natal](kzn.html#kwazulu-natal){% endif %}

{% if province-list contains "LP" %}1. [Limpopo](lp.html#limpopo){% endif %}

{% if province-list contains "NC" %}1. [Northern Cape](nc.html#northern-cape){% endif %}

{% if province-list contains "NP" %}1. [Northern Province](np.html#northern-province){% endif %}

{% if province-list contains "NW" %}1. [North West](nw.html#north-west){% endif %}

{% if province-list contains "WC" %}1. [Western Cape](wc.html#western-cape){% endif %}
