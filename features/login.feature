@login
Feature: Login SauceDemo

  Scenario: Login exitoso con usuario valido

    Given el usuario navega a SauceDemo

    When inicia sesion con credenciales validas

    Then visualiza la pagina de productos


  Scenario: Login con usuario bloqueado

    Given el usuario navega a SauceDemo

    When inicia sesion con usuario bloqueado

    Then visualiza mensaje de usuario bloqueado