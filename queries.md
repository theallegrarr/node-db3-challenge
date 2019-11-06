# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT Products.ProductName, cn.CategoryName from Products
	join Categories as cn on Products.CategoryID = cn.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select Shippers.ShipperName, o.orderid, o.orderdate from Shippers
	join orders as o on Shippers.ShipperID = o.ShipperID
    	where o.orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select Products.ProductName, o.Quantity from Products
	join orderdetails as o on o.ProductID = Products.ProductID
    	where o.orderid = '10251'

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select orders.orderid, customers.customername as CustomerName, employees.lastname as EmployeeLastName
	from orders
	join customers on customers.customerid=orders.customerid
    join employees on employees.employeeid=orders.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
select categories.categoryname, count(distinct products.productid) as Count
	from categories
	join products on products.categoryid=categories.categoryid
    group by categories.categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
select orders.orderid, count(distinct orderdetails.quantity) as ItemCount
	from orders
	join orderdetails on orderdetails.orderid=orders.orderid
    group by orders.orderid