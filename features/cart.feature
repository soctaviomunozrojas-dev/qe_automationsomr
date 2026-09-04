@cart
Feature: Carrito de compras

  Scenario: Agregar producto al carrito

    Given el usuario inicia sesion

    And agrega un producto al carrito

    Then visualiza el producto en el carrito