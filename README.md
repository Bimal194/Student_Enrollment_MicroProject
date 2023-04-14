# Student_Enrollment_MicroProject


Student Enrollment Form that will store data in STUDENT-TABLE relation of SCHOOL-DB database.

Input Fields: {Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}

Primary key: Roll No.

# Database: JsonPowerDB
Benefits of using JsonPowerDB : Simplest way to retrieve data in a JSON format. Schema-free, Simple to use, Nimble and In-Memory database. It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX. It is low level (raw) form of data and is also human readable. It helps developers in faster coding, in-turn reduces development cost. Release History (release of your JsonPowerDB related code on Github)

Additional you can have: JsonPowerDB is a Real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. JPDB supports and advocates for true serverless and pluggable API development.



# Main Feature
```
1). There will be three control buttons [Save], [Update] and [Reset] at the bottom of the form. 
On page load or any control button click, an empty form will be displayed and the cursor will 
remain at the first input field in the form which will have the primary key in the relation. 
All other fields and buttons should be disabled at this time.

2). User will enter data in the field having primary key and
If the primary key value does NOT exist in the database, enable [Save] and [Reset] 
buttons and move the cursor to the next field and allow the user to enter data in the form.

3). Check that the data should be valid i.e. no empty fields.
Complete the data entry form and click the [Save] button to store the data in the database and go to step-2.

4). If the primary key value is present in the database, display that data in the form. 
Enable [Update] and [Reset] buttons and move the cursor to the next' field in the form. 
Keep the primary key field disabled and allow users to change other form fields.

5). Check that the data should be valid i.e. no empty fields.
Click on [Update] button to update the data in the database and go to step-2.
Click [Reset] to reset the form as per the step-2.
```


![output](https://user-images.githubusercontent.com/69100830/232072962-6638f32d-b7b2-4fda-80ce-e80256bbfab6.jpg)



