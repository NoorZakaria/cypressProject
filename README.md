# cypressProject
Here are two scenarios to purchase orders online 

The first one, The user cant purchase order when entering invalid Pincode
the second one, the user should be able to purchase order when entering a valid Pincode

I user page object model to define actions and assertions for each page,
also, create jsconfig.json file to deal with path alias 

Senario1: 
The user visits the Samsung website
the user hovers over the mobile tab 
the user clicks on the buy now button and add to chart 
and then continue as a guest
and fill the fields with invalid Pincode 
then the user should receive "please enter valid Pincode." and the next button should be disabled 

Scenario2
The update the Pincode and enter valid value
then the error message should disappear and the next should be enabled

The test was run successfully 
