# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Assumptions

1.  Given 3 Tables Facilities, Agents, and Shifts we assume or basically derive we are using SQL Database in here, i would stick with MYSQL standards and syntax with this
2.  Custom IDs can be varchar

# Ticket BreakDown

Ticket 1
Title: Adding "custom_ids" to the Agent Table
User story: As a Facility Owner i need to allocate custom ids to My Agents
Description: Add a column as foreign key to the Agent Table which should be as follows customId should be unique and varchar and length of 255 and Indexed
Action Items: Add the current to the ER Diagram, the custom ids can be updated inserted but cannot be removed and null
Acceptance Criteria: The column cannot be Null and should have unique values
Due Date: +2 days

Ticket 2
Title: Edit generateReport function to
User story: As a Facility Owner i need to generateReports based on the provided custom ids to My Agents
Description: When working in function of generateReports it is currently printing the internal database id of the Agent we need to replace this with the Custom IDs The select query we currently have will work the same no changes to it but for printing reports we will display the value from customId column and no the Primary Id coulmn of the Agent.
Action Items: In case the Custom ID is not null or undefined then use the Primary ID
Acceptance Criteria: The reports should always have the ID of the Agent
Due Date: +3 days
