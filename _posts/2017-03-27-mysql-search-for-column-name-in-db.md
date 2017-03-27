---
layout: "post"
title: "MySQL: находим в базе данных таблицы, в которых есть данный столбец"
---
Сегодня нашел интересный запрос к базе данных, который позволяет найти таблицы, в которых есть колонка с заданным именем. Было очень полезно, так как сейчас мигрирую данные из легаси-базы, к которой нет ни кода, ни документации. А так можно хоть foreign keys примерно находить.

А вот и запрос:

```sql
SELECT DISTINCT table_name
FROM `INFORMATION_SCHEMA`.`COLUMNS` 
WHERE `COLUMN_NAME` = 'name_of_column';
```
И если вам не нужно точное совпадение, а хотите просто по слову, можно использовать `LIKE`:

```sql
SELECT DISTINCT table_name
FROM `INFORMATION_SCHEMA`.`COLUMNS` 
WHERE `COLUMN_NAME` LIKE 'name_of_column';
```