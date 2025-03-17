Load Test using JMeter

Overview

This project contains a load test designed using Apache JMeter to evaluate the performance of the demo site: BlazeDemo. The test simulates multiple users interacting with the website to assess response times, throughput, and error rates.

Prerequisites

Ensure you have the following installed before running the test:

Apache JMeter

Java (JDK 8 or later)

Web browser for Developer Tools (Chrome or Firefox recommended)

JMeter Test Plan

The JMeter test plan (jmeter.jmx) includes the following scenarios:

Homepage Load Test: Measures response times for the homepage.

Search for Flights: Simulates users searching for flights between different cities.

Select Flight: Simulates users selecting a flight.

Purchase Flight: Simulates completing the flight purchase process.

Test Configuration

Number of Users (Threads): Configurable via JMeter.

Ramp-Up Time: Defined in JMeter settings.

Loop Count: Configurable in JMeter.

Assertions: Response time and response codes.

Listeners: View Results Tree, Aggregate Report, and Summary Report.

Setting Up the Test

Open JMeter and load the jmeter.jmx file.

Modify thread settings as needed.

Run the test and monitor results using listeners.

Manual Test Cases

Test Case ID

Test Scenario

Steps

Expected Result

TC001

Homepage Load

Open BlazeDemo

Page loads successfully

TC002

Search Flights

Enter departure and destination, click Find Flights

Flights are displayed

TC003

Select Flight

Choose a flight from the list

Flight details are displayed

TC004

Purchase Flight

Fill out purchase details and submit

Confirmation message displayed

Results & Analysis

Use JMeter reports to analyze response times and system behavior under load.

Identify any performance bottlenecks based on error rates and slow responses.

Conclusion

This test plan helps evaluate BlazeDemo's performance by simulating real-world user interactions. Further refinements can be made to expand test scenarios and increase load levels.
