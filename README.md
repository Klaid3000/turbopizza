Области хранения данных:

-   база данныхна json-server
-   BFF
-   Redux-store

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего пользователя), redux-store (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя), redux-store (использование на клиенте роли пользователя)
-   пиццы: БД (список пицц), redux-store (отображение в браузере)
-   напитки: БД (список напитков), redux-store (отображение в браузере)
-   подарочные карты: БД (список карт), redux-store (отображение в браузере)
-   ингредиенты: БД (список ингредиентов), redux-store (отображение в браузере)

Таблицы БД:

-   Пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   пиццы - pizzas: id / title / image_url / content / price
-   напитки - drinks: id / title / image_url / content / price
-   подарочные карты - gifts: id / title / image_url / content / price
-   ингредиенты - ingredience: id / title / image_url

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для Redux-store (на клиенте):

-   user: id / login / roleId / session
-   users: массив user: id / login / registeredAt / role
-   pizza: id / title / imageUrl / content / price
-   pizzas: массив pizza: id / title / imageUrl / content / price
-   drink: id / title / imageUrl / content / price
-   drinks: массив drink: id / title / imageUrl / content / price
-   gift: id / title / imageUrl / content / price
-   gifts: массив gift: id / title / imageUrl / content / price
-   ingredient: id / title / imageUrl
-   ingredients: id / title / imageUrl
