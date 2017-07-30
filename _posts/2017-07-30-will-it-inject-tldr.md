---
layout: "post"
title: "[TL:DR] RailsConf 2016 - Will It Inject?"
---

Собственно, видос:

<object style="width:100%;height:100%;width: 820px; height: 461.25px; float: none; clear: both; margin: 2px auto;" data="https://www.youtube.com/embed/2GHWAYys1is">
</object>

В любых методах для построения запросов используйте что-нибудь вроде такого:

```ruby
Model.where('attribute > ?', value)
```

Но не такого:

```ruby
Model.where("attribute > #{value}")
```