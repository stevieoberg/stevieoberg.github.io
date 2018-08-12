---
permalink: "/"
custom_css: index
---


![Its a Me, Stevie](/img/selfie.jpg){: #selfie }

Hi! I’m **Stevie Oberg** and I like creating things that are useful and/or beautiful. Usually using code but also through art and writing. I'm currently working as an **IT Developer** but one day I hope to combine my love of tech and books to become a Librarian.

<div id="social">
    <a href="https://github.com/{{ site.username }}">
        <i class="fab fa-github fa-2x"></i>
    </a>
    <a href="https://twitter.com/{{ site.username }}">
        <i class="fab fa-twitter fa-2x"></i>
    </a>
    <a href="https://www.linkedin.com/in/{{ site.username }}">
        <i class="fab fa-linkedin-in fa-2x"></i>
    </a>
    <a href="/feed.xml">
        <i class="fas fa-rss fa-2x"></i>
    </a>
</div>

# Thoughts
{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url }})** <small>{{ post.date | date_to_long_string }}</small>
{% endfor %}

# <span id="terminal" onclick="surprise()"></span>

<script src="https://cdnjs.cloudflare.com/ajax/libs/TypewriterJS/1.0.0/typewriter.js"></script>

<script>
    var terminal = document.getElementById('terminal');
    var typewriter = new Typewriter(terminal, {
        cursor: '_'
    });

    function surprise() {
        typewriter.typeString('Hello! ;)')
            .pauseFor(2500)
            .deleteAll()
            .start();
    }
</script>
