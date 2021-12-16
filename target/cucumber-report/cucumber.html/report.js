$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaChecks.feature");
formatter.feature({
  "line": 1,
  "name": "Visa checks",
  "description": "",
  "id": "visa-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6912412300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-checks;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select a nationality of \u0027australia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select reason \u0027tourism\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will be informed \u0027You will not need a visa to come to the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 242934100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 427246000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfAustralia()"
});
formatter.result({
  "duration": 190796700,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 271357100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonTourism()"
});
formatter.result({
  "duration": 86696500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 406781100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouWillNotNeedAVisaToComeToTheUK()"
});
formatter.result({
  "duration": 61570800,
  "status": "passed"
});
formatter.after({
  "duration": 1164616200,
  "status": "passed"
});
formatter.before({
  "duration": 3198789700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months.",
  "description": "",
  "id": "visa-checks;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select a nationality of \u0027chile\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select reason \u0027Work, academic visit or business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state I am intending to stay for \u0027more\u0027 than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I state I have planning to work \u0027health\u0027 types of job",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will be informed \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 372919900,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfChile()"
});
formatter.result({
  "duration": 137466400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 392415500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 83762800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 317328900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 47
    }
  ],
  "location": "HomeOfficeSteps.iStateIAmIntendingToStayForMoreThanMonths(int)"
});
formatter.result({
  "duration": 96976400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 292465400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStateIHavePlanningToWorkHealthTypesOfJob()"
});
formatter.result({
  "duration": 93119200,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 338458800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "duration": 59388100,
  "status": "passed"
});
formatter.after({
  "duration": 978712600,
  "status": "passed"
});
formatter.before({
  "duration": 3019358200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-checks;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I select a nationality  of \u0027colombia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select reason \u0027family\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I state My partner or family member have uk immigration status \u0027yes\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will be informed \u0027You’ll need a visa to join your family or partner in the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 32900,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 309720400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfColombia()"
});
formatter.result({
  "duration": 160052000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 304755300,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonFamily()"
});
formatter.result({
  "duration": 78756700,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 288447000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatusYes()"
});
formatter.result({
  "duration": 113289000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 304536100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUK()"
});
formatter.result({
  "duration": 54758600,
  "status": "passed"
});
formatter.after({
  "duration": 981909600,
  "status": "passed"
});
});