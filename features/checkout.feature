@checkout
Feature: Checkout

  Scenario: Compra exitosa

    Given el usuario inicia sesion

    And agrega un producto al carrito

    When completa el checkout

    Then visualiza mensaje de compra exitosa