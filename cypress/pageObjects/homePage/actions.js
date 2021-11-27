class HomePageActions {
  clickMobileTab() {
    cy.get("ul[role=tablist]").contains("button", "Mobile").click();
    return this;
  }

  hoverOverMobileItem(mobileName) {
    cy.get("div[role=listitem]")
      .contains("span", mobileName)
      .trigger("mouseover");
    return this;
  }

  clickBuyNowButton(mobileName) {
    cy.get("div[role=listitem]")
      .contains("a", mobileName)
      .contains("span", "Buy now")
      .click();
    return this;
  }

  clickAddToCartButton() {
    cy.get(".pd-buying-price__cta").contains("a", "ADD TO CART").click();
    return this;
  }

  clickPayNowButton() {
    cy.get(".row-full").contains("button", "Pay Now").click();
    return this;
  }

  clickContinueAsGuestButton() {
    cy.get("#guest-cointainer").contains("button", "Continue as guest").click();
    return this;
  }
}
export default HomePageActions;
