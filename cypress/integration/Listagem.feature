Feature: Listagem

    Como usuario, desejo acessar a listagem
    Para que eu possa visualizar meus dados de cadastro
 Scenario: Listagem sem registros
    Given que o site não possui registros
    When acessar a listagem
    Then devo visualizar a listagem vazia

    
 Scenario: Listagem com apenas um registros
    Given que o site possui apenas um registros
    When acessar a listagem
    Then devo visualizar apenas um registro