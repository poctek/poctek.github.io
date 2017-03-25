---
layout: "post"
title: "MySQL: восстановление базы данных из бэкапа"
---

Логинимся в MySQL, выбираем базу. Потом через source указываем файл. Вот так примерно выглядит последовательность команд:

``` bash
mysql -u root
use test_db
source my_dump_file
```