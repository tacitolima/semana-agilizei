# semana-agilizei

## Índice

-   [Stack](#stack)
-   [Node Version](#node-version)
-   [How to use](#how-to-use)

## <br /><a name="stack"></a>Stack

-   [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
-   [Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
-   [Node](https://nodejs.org/en/)

## <br /><a name="node-version"></a>Node Version

-   Esse projeto usa o `Node` **v10.15.0**
    -   **Dica**: Você pode usar o [nvm](https://github.com/nvm-sh/nvm) para mudar/instalar a versão certa
    ```sh
    nvm use
    ```

## <br /><a name="how-to-use"></a>How to use

Para executar os testes com o chrome

```shell
npm run cy:run:cucumber
```

Para executar os testes com o `Browser` aberto

```shell
npm run cy:open:cucumber
```

Para executar tags das suas `Features`
**Infos**: Para mais informações de como passar suas tags na **ENV** `TAG` veja [aqui](https://www.npmjs.com/package/cypress-cucumber-preprocessor#running-tagged-tests)

```shell
npm run cypress:tags -- TAGS=[SUA(S) TAG(S)]
```

Para gerar a documentação de report
**Info**: Usamos o [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) para geração do `Report`

```shell
npm run report:cucumber
```
