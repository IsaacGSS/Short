# Extensoes

> as sequintes extencoes nao sao necessarias para usar ou codar, mas ira facilitar e ajudar a vizualizar e testar a aplicacao.

as seguintes extensoes estao disponiveis no vscode.

[https://marketplace.visualstudio.com/](https://marketplace.visualstudio.com/)

para fazer requisicoes HTTP`s pelo vscode e testar emquanto coda:

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

  uso:

  ```http
  >>> [arquivo].http

  GET http://localhost:3333/api/links
  ```

<br/>

para visualizar com mais clareza e com `syntax highlighting` no uso do `postgres.js`

- [comment-tagged-templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates)

  uso:

  ```ts
  //* use com comentarios entre a funcao e as crases */

  import sql from "db/lib/postgres";

  await sql/*sql*/ `
          SELECT code, original_url
          FROM short_links
          WHERE short_links.code = 'Isaac_S.Silva'
      `;
  ```

  efeito:

  ```sql
  sql/*sql*/`
      SELECT code, original_url
      FROM short_links
      WHERE short_links.code = 'Isaac_S.Silva'
  `
  ```

<br/>

---

> ## Preferencias do Dev
>
> [`Symbols Icon Theme`](https://marketplace.visualstudio.com/items?itemName=wilfriedago.vscode-symbols-icon-theme)
>
> [`fluent-icons`](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons)
>
> [`Github Purple`](https://marketplace.visualstudio.com/items?itemName=4a454646.github-purple)
