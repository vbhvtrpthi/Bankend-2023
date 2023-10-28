-- A particular order has what all products associated with it.

/* Running SQL Queries*/

show databases;
use classicmodels;
show tables;
select * from customers;
desc customers;
desc employees;
desc orders;
desc orderdetails;
/*
Multiple tables are related to each other and we have to club/join
the data of all those tables together in order to create 1 particular 
solution.
*/
select * from orderDetails;
/* 
Joins is a very powerful concept using which u can club or combine
the details of multiple tables together based on their relational 
behaviours. 
*/
/* JOIN Queries */

select * from orderDetails od JOIN products p ON od.productCode = p.productCode; 
select p.productCode, p.productName from orderDetails od JOIN products p ON od.productCode = p.productCode; 
select p.productCode, p.productName from orderDetails od JOIN products p ON od.productCode = p.productCode where od.orderNumber ='10101'; 

/*Multiple JOINS: Whatever is the result of the first join will be clubbed together with the second join data*/

select * from orderDetails od JOIN products p ON od.productCode = p.productCode JOIN orders o ON o.orderNumber = od.orderNumber; 

select * from orderDetails od JOIN products p ON od.productCode = p.productCode JOIN orders o ON o.orderNumber = od.orderNumber where od.orderNumber ='10101'; 

select o.orderNumber, o.orderDate, p.productCode, p.productName, od.quantityOrdered from orderDetails od 
JOIN products p ON od.productCode = p.productCode 
JOIN orders o ON o.orderNumber = od.orderNumber
WHERE o.orderNumber = '10101';

/*
Note:
Whenever we have to put a very complex join, How do I think as an 
Engineer:
Try to figure out what columns/ details I need in the Final/Resultant 
table, and how to filter it accordingly.
*/

/* ------------------------------------------------------------------------------------------------------------------------- */

UNION
/* 
It is showing u all of the orderNumbers and orderDates 
After sometimes u immediately start getting productCode.

UNION: It will get the result of all the first set of select queries
and then once that particular set of select queries is done, then it will start 
executing the other select query and just append the result of the 
second select query below it. It doesnot even distinguish the column names
and the column names of the first query is only shown.
*/

select orderNumber, orderDate from orders
UNION
select orderNumber, productCode from orderDetails;

/* ------------------------------------------------------------------------------------------------------------------------- */

/*
Can create views from the single table or joins of multiple table it is just a view whcih can be used to query and is used for security reasons.
*/

CREATE OR REPLACE VIEW OrderProductView AS 
select od.orderNumber, p.productName,p.productLine,od.quantityOrdered, o.orderDate,o.status
from orderDetails od 
JOIN products p ON od.productCode = p.productCode
JOIN orders o ON o.orderNumber = od.orderNumber 
where od.orderNumber = '10101'; 

select * from OrderProductView;

/*
Qs. If I update the view, will the data in the original table get updated?
YES, The data "in" a view has no existence independent from the tables that make up the view. The view is, in essence, a stored SELECT statement that masquerades as a table. The data is stored in the original tables and only "assembled" into the view when you want to look at it. If the view is updateable (not all views are) the updates are applied to the table data.

Qs. Are views automatically updated when base tables are updated?
YES, SQL views can update automatically when the underlying tables or data sources are updated.
*/

Update OrderProductView 
SET quantityOrdered=100 where orderNumber='10102' and productName='1936 Mercedes-Benz 500K Special Roadster';

/* ------------------------------------------------------------------------------------------------------------------------- */

CREATE OR REPLACE VIEW TenOrderDetailsView AS
select * from orderDetails limit 10;

select * from TenOrderDetailsView ;

/*
It will return the first 10 records from the table
*/
SELECT * FROM orderDetails LIMIT 10;

/*
The SQL query below says return only 10 records, start on
record 16 (OFFSET 15):
*/

SELECT * FROM OrderDetails LIMIT 10 OFFSET 15;

/*
The SQL query below says return only 10 records, start on
record 13 (OFFSET 12):
*/

SELECT * FROM OrderDetails LIMIT 10 OFFSET 12;

/* 
OFFSET and LIMIT clauses are together used for pagination.
*/

/* ------------------------------------------------------------------------------------------------------------------------- */

/*
A stored procedure is a prepared SQL code/function that you can save, so 
the code can be reused over and over again.So if you have an SQL
query that you write over and over again, save it as a stored 
procedure, and then just call it to execute it.
*/

use classicmodels;
DELIMITER #
CREATE PROCEDURE showLimitedOrders()
BEGIN
     SELECT * FROM ORDERS LIMIT 10;
END #
DELIMITER ;

/*Calling the stored procedure*/

CALL showLimitedOrders();

/*
By default, mysql itself recognizes the semicolon as a statement
delimiter, so you must redefine the delimiter temporarily to cause
mysql to pass the entire stored program definition to the server.
To redefine the mysql delimiter, use the delimiter command.

When u write `DELIMITER #`, for the lines that are written below
`DELIMITER #`. The DELIMITER for the SQL statement becomes hash(#), that 
means the moment u put a hash(#) it will consider that character hash(#)
as a DELIMITER for the valid SQL statement. By default the DELIMITER
is semicolon(;). But now the DELIMITER is changed to a hash(#). 

The below query is a one valid SQL statement:
`CREATE PROCEDURE showLimitedOrders()
BEGIN
     SELECT * FROM ORDERS LIMIT 10; /* If u will not update the DELIMITER to #(hash), the moment u hit the semicolon(;) on this line, it will assume that this was a valid end of SQL statement which is actually not and it will start throwing an error. */
END #`

DELIMITER ; Atlast updating the DELIMITER back to semicolon(;)
Common delimiters are commas (,), semicolon (;), quotes ( ", ' ), braces ({}), pipes (|), or slashes ( / \ ).
*/

DELIMITER $
CREATE PROCEDURE showLimitedOrdersandOrderDetails()
BEGIN
  SELECT * FROM orders LIMIT 10;
  SELECT * FROM orderDetails LIMIT 5;
END $
DELIMITER ;


/* passing values in the stored procedure (similar to functions) IN defines the input parameters which are coming*/

DELIMITER $
CREATE PROCEDURE passingValuesToOrder(
IN lt int
)
BEGIN
	select * from orders limit lt;
END $
DELIMITER ;

CALL passingValuestoOrder(41);



DELIMITER $
CREATE PROCEDURE passingLimitAndOrderNumberToOrder(
IN lt int,IN orderNo varchar(255)
)
BEGIN
	select * from orders where orderNumber = orderNo limit lt;
END $
DELIMITER ;

CALL passingLimitAndOrderNumberToOrder(2,'10101');


/* 
OUT is the output/return value which you want to give (similar to return statement in the function)

@cnt is a session variable. A session variable is a user-defined
variable (not a server option) that starts with @, does not 
require declaration, can be used in any SQL query or statement,
not visible to other sessions, and exists until the end of the 
current session.
*/

DELIMITER $
CREATE PROCEDURE passingOrderNumberToOrderAndCounting(
IN orderNo varchar(255), OUT cnt int
)
BEGIN
	select count(*) into cnt from orders where orderNumber = orderNo;
END $
DELIMITER ;

CALL passingOrderNumberToOrderAndCounting('10101',@cnt);
select @cnt;

/* Print the first 5 natural numbers using a loop in PLSQL */

DELIMITER $
CREATE PROCEDURE proc()
BEGIN
	declare x INT;
    set x=1;
    while x<=5 do
		Select x;
		set x=x+1;
	end while;    
END $
DELIMITER ;

show procedure status where db = 'classicModels'; /* To see all the stored procedures on the particular DB */
/* ------------------------------------------------------------------------------------------------------------------------- */

/* 
Trigger is a kind of event listner. A trigger is a named 
database object that is associated with a table, and that
activates when a particular event occurs for the table. Some
uses for triggers are to perform checks of values to be inserted 
into a table or to perform calculations on values involved in an 
update.

Use Case of Trigger:
 Ex - user will give us plain email and pwd but before inserting it into DB, we will encrypt the same.

A trigger is defined to activate when a statement inserts, updates,
or deletes rows in the associated table. These row operations are
trigger events. For example, rows can be inserted by INSERT or 
LOAD DATA statements, and an insert trigger activates for each 
inserted row. A trigger can be set to activate either before or 
after the trigger event. For example, you can have a trigger 
activate before each row that is inserted into a table or after 
each row that is updated.
*/

DELIMITER $

CREATE Trigger Logger
Before Insert On Products
for each row
	set @log = "adding new product";
$

DELIMITER ;

set @log = "";
insert  into products (productCode,productName,productLine,productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP) values ('S10_19497','1952 Alpine Renault 2900','Classic Cars','1:10','Arijit Sarkar Creations','Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.',7306,'98.58','214.30');
select @log;


/* Implement that before inserting a new product MSRP should be set to 1.0 */
DELIMITER $
CREATE Trigger setPrice
Before Insert On Products
for each row
	set New.MSRP = 1; /* The NEW variable actually refers to the new MYSQL row that will be inserted inside the table and in that row whatever is the MSRP property that will be set to 1*/
$

DELIMITER ;


insert  into products values ('12345','1952 Alpine Renault 2100','Classic Cars','1:10','Arijit Sarkar Creations','Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.',7305,'98.58','214.30');
SELECT * from products where productcode = '12345'; /* MSRP would have set to 1.0*/

show triggers; /* To see all triggers */