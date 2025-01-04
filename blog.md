---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

{% for post in site.posts %}
  <div class="blog-post-container">
    <article class="blog-post">
      <h3 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-date">Posted on: {{ post.date | date: "%B %d, %Y" }}</p>
      <div class="post-body">
        <p>{{ post.excerpt }}</p> <!-- Display the post's excerpt -->
        <a href="{{ post.url }}">Read more...</a>
      </div>
    </article>
  </div>
{% endfor %}
