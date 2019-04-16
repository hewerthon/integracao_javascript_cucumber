Feature: Fazer requisições HTTP

    Scenario: As requisições HTTP do tipo GET
        Given Eu fiz uma requisição do tipo GET
        When Eu passo os parametro corretos
        Then Eu deve receber o json e fazer as verificações
    