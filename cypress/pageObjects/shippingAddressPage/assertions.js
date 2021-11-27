class ShippingAddressPageAssertions {
  checkErrorMessageContainsValue(errorMessage, isExist) {
    isExist
      ? cy.get(".input-error-msg").should("contain", errorMessage)
      : cy.get(".input-error-msg").should("not.visible");
    return this;
  }

  checkNextButtonIsEnabled(isEnabled) {
    cy.contains("button", "Next").should(
      isEnabled ? "not.have.attr" : "have.attr",
      "disabled"
    );
    return this;
  }
}
export default ShippingAddressPageAssertions;
