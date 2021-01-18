create materialized view mt_categories_tree AS
(
WITH RECURSIVE tree (categoryid, categoryparentid, categoryname, category_tree, depth)
                   AS (
        SELECT id
             , parent
             , category
             , category AS category_tree
             , 0        AS depth
        FROM categories
        WHERE parent IS NULL
        UNION ALL
        SELECT c.id
             , c.parent
             , c.category
             , tree.category_tree || '/' || c.category AS category_tree
             , depth + 1                               AS depth
        FROM tree
                 JOIN categories c ON tree.categoryid = c.parent
    )
SELECT *
FROM tree
ORDER BY category_tree
    )