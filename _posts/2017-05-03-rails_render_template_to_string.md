---
layout: "post"
title: "Rails: render template to string"
---
When you want to render a template to string in controller you have two options: using `ERB` methods explicitly or (considering you're in Rails) `render_to_string`. 

If're to use `ERB`, you should first get string representation of your template, then pass it to the `ERB` and get result for current binding. The code:

```ruby
raw_template = File.read('path/to/your/template.html.erb')
erb_template = ERB.new(raw_template)
erb_template.result(binding)
```

This method is universal and may be used anywhere in Ruby.

However, since you're in Rails this approach may look too complicated as `ActionController` provides a handy helper: `render_to_string`. Just give it the view name and you're done. Consider `layout: false` option in case you  don't want your default layout to be rendered with the template:

```ruby
render_to_string('your/template')
render_to_string('your/template', layout: false)
```