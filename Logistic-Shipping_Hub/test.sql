INSERT INTO user (username, password, usertypes) VALUES
  ('admin', 'pass123', 'admin', 'admin123', '7818744563', 'admin@gmail.com', 'peoria,chicago'),
  ('user1', 'pass456', 'customer','shivdeep','7846374657','shivdeep@gmail.com','400 e 33rd,chicago');
  
  
  
  INSERT INTO orders (customer, itemWeight, packageDimensions, carrierName, dateOrdered, destination, logo, price, phone_number, email_address, address, payment_method, card_no, zipcode, fromLocation, status)
VALUES
('John Doe', '2.5 kg', '10x20x5', 'CDL', '2023-01-01', 'New York', 'cdl.svg', '50.00', '1234567890', 'john.doe@email.com', '123 Main St', 'creditcard', '1234 5678 9012 3456', '10001', 'minneapolis', 'ordered'),
('Jane Smith', '1.8 kg', '8x15x4', 'FedEx', '2023-01-02', 'Los Angeles', 'fedex.svg', '30.00', '9876543210', 'jane.smith@email.com', '456 Oak St', 'creditcard', '2345 6789 0123 4567', '90001', 'chicago','ordered'),
('Bob Johnson', '3.2 kg', '12x25x8', 'USPS', '2023-01-03', 'Chicago', 'usps.svg', '70.00', '5556667777', 'bob.johnson@email.com', '789 Pine St', 'creditcard', '3456 7890 1234 5678', '60601', 'chicago','shipped'),
('Alice Brown', '1.5 kg', '7x18x3', 'UPS', '2023-01-04', 'Houston', 'ups.svg', '40.00', '3334445555', 'alice.brown@email.com', '321 Elm St', 'creditcard', '4567 8901 2345 6789', '77002', 'texas','out for delivery'),
('Chris Wilson', '2.0 kg', '9x22x6', 'UPS', '2023-01-05', 'Phoenix', 'ups.svg', '25.00', '9998887777', 'chris.wilson@email.com', '654 Birch St', 'creditcard', '5678 9012 3456 7890', '85001', 'texas','delivered'),
('Eva Davis', '2.8 kg', '11x24x7', 'CDL', '2023-01-06', 'Philadelphia', 'cdl.svg', '60.00', '1112223333', 'eva.davis@email.com', '987 Maple St', 'cash', '6789 0123 4567 8901', '19101', 'houston','ordered'),
('Michael Miller', '1.0 kg', '6x16x2', 'FedEx', '2023-01-07', 'San Antonio', 'fedex.svg', '35.00', '4445556666', 'michael.miller@email.com', '876 Walnut St', 'cash', '7890 1234 5678 9012', '78201', 'chicago','shipped'),
('Olivia Garcia', '2.4 kg', '10x21x5', 'UPS', '2023-01-08', 'San Diego', 'ups.svg', '45.00', '7778889999', 'olivia.garcia@email.com', '543 Cedar St', 'cash', '9012 3456 7890 1234', '92101', 'texas','shipped'),
('David Martinez', '3.5 kg', '13x26x9', 'UPS', '2023-01-09', 'Dallas', 'ups.svg', '75.00', '2223334444', 'david.martinez@email.com', '654 Pine St', 'creditcard', '1234 5678 9012 3456', '75201', 'texas','ordered'),
('Sophia Hernandez', '1.3 kg', '8x19x4', 'CDL', '2023-01-10', 'San Jose', 'cdl.svg', '55.00', '8889990000', 'sophia.hernandez@email.com', '234 Oak St', 'cash', '6789 0123 4567 8901', '95101', 'texas','delivered');
