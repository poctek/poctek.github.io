---
layout: "post"
title: "Tmux: не работает буфер обмена в MacOS Sierra?"
---

Так как начал достаточно активно использовать tmux, настоящей проблемой то, что в нем по-умолчанию нельзя копировать из буфера в Vim в системный. Погуглив минут тридцать, решение я все-таки нашел.

Установить через brew пакет "reattach-to-user-namespace":

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
