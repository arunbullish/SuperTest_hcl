# API TestCases Project

This project is a sample automation using supertest, mocha and chai to perform API testing for GET / POST and PUT Calls

# TestCases Covered

Refer the file TestCases for testcase details and output.

## Installation

To install the dependencies for this project, run: npm install

## Running Tests

npm test

## Reporting

1. mochaawesome HTML report will be generated automatically after the sucesfull execution of the testcases.
2. Valtions are covered under moca describe and it block and hence these are shown in the mocaawesome.
3. no separate assertions are added to HTML report. all are added within the code.any failure in the validations make the 'it' block fail and hence reflect in report

## TestData

test Data is present inside testdata folder/ users.json

## Helper

Common methods are created under helper folder / util.json

## Assumption

1. Put call testcases are clubbed with postcall assuming whatever is posted needs to be updated
2. Mochaawesome report is the HTML report used since no reports where mentioned explicity
3. Separate helper class is created to Filter out user details by giving ID
4. User ID is hardcoded for the below scenario assuming user details has to be fetched by entering the ID manually. Hence no iteration done to retrive all user id results
   // Filter out user details by giving ID.
