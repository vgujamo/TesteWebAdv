#language: pt
Funcionalidade: Login no SauceDemo
    Realizar o Login no site www.SauceDemo.com
    Esquema do Cenario: Login com Sucesso 
        Dado que estou na pagina de login do SauceDemo
        Quando preencho o "<usuario>" e a "<senha>"
        E clico no botao de login
        Entao vou para a pagina "<url>" e vejo o "<titulo_sessao>"
        Exemplos:
            |usuario         |senha        |url           |titulo_sessao       |
            |standard_user   |secret_sauce |inventory     |Products            |
            |visual_user     |secret_sauce |inventory     |Products            |