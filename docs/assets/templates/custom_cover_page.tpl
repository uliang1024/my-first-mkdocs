<h1>'{{ config.site_name }}'</h1>

<p>Angular / CSS / MkDocs</p>

{{ config.extra.added_key }}

<p>
<img src="../assets/Angular.png" style="width: 500px;height: 500px;" />
</p>

{% if config.site_description %}
    <h2>{{ config.site_description }}</h2>
{% endif %}