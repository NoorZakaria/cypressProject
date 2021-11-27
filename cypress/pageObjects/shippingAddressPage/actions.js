class ShippingAddressPageActions {
  typeInFirstNameInputField(firstName) {
    cy.get("input[name=firstName]").click().type(firstName);
    return this;
  }

  typeInLastNameInputField(lastName) {
    cy.get("input[name=lastName]").click().type(lastName);
    return this;
  }

  clearPinCodeInputField() {
    cy.get("input[name=postalCode]").clear();
    return this;
  }

  typeInPinCodeInputField(postalCode) {
    cy.get("input[name=postalCode]").click().type(postalCode);
    return this;
  }

  typeInAddressLine1InputField(address1) {
    cy.get("input[name=line1]").click().type(address1);
    return this;
  }

  typeInEmailInputField(email) {
    cy.get("input[name=email]").click().type(email);
    return this;
  }

  typeInMobileNumberInputField(phone) {
    cy.get("input[name=phone]").click().type(phone);
    return this;
  }

  clickHomeRadioButton() {
    cy.contains("label", "Home").click();
    return this;
  }

  clickDontAllowButton() {
    cy.contains("button", "Don't Allow");
    return this;
  }
}
export default ShippingAddressPageActions;
