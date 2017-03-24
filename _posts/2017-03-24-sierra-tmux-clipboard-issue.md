---
layout: "post"
title: "Tmux: не работает буфер обмена в MacOS Sierra?"
---

В терминале выполнить

```
brew install reattach-to-user-namespace  --wrap-pbcopy-and-pbpaste
```

В *~/.tmux.conf* добавить

```
set -g default-shell $SHELL 
set -g default-command "reattach-to-user-namespace -l ${SHELL}"
```

Выполнить

```
tmux kill-server
```

#### Полезные ссылки:

- [Issue на Github](https://github.com/tmux/tmux/issues/543)
- [Блогпост на Thoughbot](https://robots.thoughtbot.com/tmux-copy-paste-on-os-x-a-better-future)