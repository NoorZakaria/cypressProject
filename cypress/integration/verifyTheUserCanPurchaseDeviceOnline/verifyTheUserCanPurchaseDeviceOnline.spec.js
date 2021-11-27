import HomePageActions from "@pageObjects/homePage/actions";
import ShippingAddressPageActions from "@pageObjects/shippingAddressPage/actions";
import ShippingAddressPageAssertions from "@pageObjects/shippingAddressPage/assertions";

const homePageActions = new HomePageActions();
const shippingAddressPageActions = new ShippingAddressPageActions();
const shippingAddressPageAssertions = new ShippingAddressPageAssertions();

const userInfo = {
  firstName: "Noor",
  lastName: "Zakaria",
  address1: "5775 State Rt 8",
  email: "test@test.com",
  phone: "1234567890",
};

const invalidCode = "5176";
const validCode = "517643";

describe("Verify The user can purchase a device from an online retailer. ", function () {
  before(() => {
    cy.visit("https://www.samsung.com/in/");
  });

  it("The user cant purchase order when enter invalid pin code", function () {
    homePageActions
      .clickMobileTab()
      .hoverOverMobileItem("Galaxy F22")
      .clickBuyNowButton("Galaxy F22")
      .clickAddToCartButton()
      .clickPayNowButton()
      .clickContinueAsGuestButton();

    shippingAddressPageActions
      .typeInFirstNameInputField(userInfo.firstName)
      .typeInLastNameInputField(userInfo.lastName)
      .typeInAddressLine1InputField(userInfo.address1)
      .typeInEmailInputField(userInfo.email)
      .typeInMobileNumberInputField(userInfo.phone)
      .clickHomeRadioButton()
      .typeInPinCodeInputField(invalidCode);

    shippingAddressPageAssertions
      .checkErrorMessageContainsValue("Please enter a valid Pincode.", true)
      .checkNextButtonIsEnabled(false);
  });

  it("The user should be able to purchase order when enter valid pin code", function () {
    shippingAddressPageActions
      .clearPinCodeInputField()
      .typeInPinCodeInputField(validCode);

    shippingAddressPageAssertions
      .checkErrorMessageContainsValue("Please enter a valid Pincode.", false)
      .checkNextButtonIsEnabled(true);
  });
});
