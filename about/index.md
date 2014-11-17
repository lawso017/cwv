---
layout: page
title: About Our Practice
image:
  feature: valentine-staff.jpg
---

Dr. Valentine and his staff offer comprehensive family dentistry with the latest cosmetic innovations to create your perfect smile.

## Meet Our Team

{% for person in site.data.team %} 
  <div class="bio">
    <div class="bio-picture">
      <img src="{{ person.picture }}" alt="image" class="framed bio">
    </div>
    <div class="bio-text">
      <p><strong>{{ person.name }}</strong></p>
      {{ person.bio }}
    </div>
  </div>
{% endfor %}
