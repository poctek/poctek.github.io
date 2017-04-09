---
layout: "post"
title: "Ruby: serialization"
---
Serialization is a feature that I was living without for two years, the only time I faced it was during Th Odin Project course. And that random knowledge saved me quite a bit of time today.

I was supposed to fix a script that was generating about 100k object from the database dump. As the amount of errors was great, I was supposed to run the script multiple times. And each time I had to wait for 10 minutes just to see a new error.

Fortunately, I managed to realize that serializing at a certain point might save me some minutes.

To serialize an object in Ruby you can use YAML or Marshal classes. There are some other options but they require you to install some gems and I considered it to be an overkill for my needs.

The only difference between YAML and Marshal is format. YAML uses human-readable format and Marshal uses binary format. It's obvious that binary serialization is faster, but unfortunately some objects can't be serialized into binary (for example, Proc instances). Keep that in mind.

YAML and Marshal have the same API. To dump an object, you can use `dump`

```ruby
require 'yaml'

YAML.dump(some_object)
# => "--- hello\n" + "...\n"

Marshal.dump('hello')
# => "\x04\bI\"\n" + "hello\x06:\x06ET"
```

And to load an object you can use `load`

```ruby

require 'yaml'

YAML.load("--- hello\n" + "...\n")
# => "hello"

Marshal.load("\x04\bI\"\n" + "hello\x06:\x06ET")
=> "hello"
```

That's it. Use serialization and be happy!