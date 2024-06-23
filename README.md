# Short

> 'short' e uma api de encurtamento de links

veja tanbem: _extencoes_, mais datahes da _api_ e test de rotas _http_:

[_`extensoes`_](/doc/extensoe.md)
[_`api`_](/doc/api.md)
[_`http`_](/doc/http/clients.http)

<br/>

init:

```
cd api/

npm install
 or
yarn install
 or
pnpm install
```

para startar a aplicacao em modo developer, e preciso iniciar o docker e setar o banco.

sempre confira se o arquivo [`docker-compose`]('') esta corretamente configurado e a url do banco estao de acordo.

```
docker compose up -d
```

para facilitar e popular o banco, tem disponivel um pequeno stript `seed.ts`,
o script `setup` ira setar o banco

```bash
## setup
npm run db:setup
 or
yarn db:setup
 or
pnpm db:setup

 and

## seed
npm run db:seed
 or
yarn db:seed
 or
pnpm db:seed
```

em primeira stancia sem configurar mais nada ja sera possivel testar usando a seguinte rota padrao:

GET: `http://localhost:3333/api/links`

pode ser mais facil ainda usando uma extensao do vscode, caso esteja tilizando, a extensao: [`🔗 REST Client`](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
