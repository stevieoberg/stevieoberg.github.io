---
permalink: "/"
custom_css: index
---


![Its a Me, Stevie](assets/img/selfie.jpg){: #selfie }

Hi! I’m **Stevie Oberg** and I like creating things that are useful and/or beautiful. Usually using code but also through art and writing. I'm currently working as an **IT Developer** but one day I hope to combine my love of tech and books to become a Librarian.

<div id="social">
    <a href="https://github.com/{{ site.username }}">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://twitter.com/{{ site.username }}">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/in/{{ site.username }}">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="/feed.xml">
        <i class="fas fa-rss"></i>
    </a>
</div>

{% assign posts = site.posts | size %}
{% if posts > 0 %}
# Thoughts
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) <small>{{ post.date | date: "%B %d, %Y" }}</small>
{% endfor %}{: #posts }
{% endif %}
