---
layout: post
title: Syntax highlighter
meta: Syntax highlighting test
category: life
---
```html
    <a href="#">Hello, world!</a>
```

```ruby
require_relative 'events_sorter'

class Event < ActiveRecord::Base
    belongs_to :user

    validates_presence_of :title, :start_date, :time, :occurrence

    def save
	self.finish_date = self.start_date if self.occurrence == "once"
	super
    end

    def self.get_events(events, date)
	EventsSorter.new(events, date)
    end
end
```

