INSERT INTO user (first_name, last_name, username, password, email, phone_number)
VALUES
('Robert', 'Evanik','robjameva', 'password123', 'rob.evanik@gmail.com', '973-919-5256');


INSERT INTO restaurant (business_name, business_address, business_phone, business_hours_open, business_hours_close, business_website)
VALUES
('Mudo', '56015 Sutteridge Street', '199-860-0127', 12, 11, 'https://msn.com'),
('Mybuzz', '3694 Vidon Center', '320-108-9797', 12, 11, 'http://odnoklassniki.ru'),
('Skippad', '238 Myrtle Place', '502-348-7746', 12, 11, 'https://smh.com.au'),
('Ooba', '29 Bonner Place', '420-933-6845', 12, 11, 'http://rakuten.co.jp'),
('Agimba', '061 Thompson Road', '178-435-6716', 12, 11, 'http://github.io'),
('Kwinu', '54 Monica Way', '287-178-1123', 12, 11, 'https://addthis.com'),
('Gabvine', '343 Hoepker Place', '998-393-6439', 12, 11, 'https://dailymotion.com'),
('Fivebridge', '46618 Pankratz Circle', '466-182-6584', 12, 11, 'http://over-blog.com'),
('Kwideo', '85 Upham Plaza', '481-230-7995', 12, 11, 'http://hubpages.com'),
('Yozio', '7270 South Junction', '127-951-1460', 12, 11, 'https://aol.com'),
('Vinte', '179 Sunnyside Way', '396-941-1909', 12, 11, 'http://slashdot.org'),
('Dazzlesphere', '1 Corry Circle', '150-781-0965', 12, 11, 'https://xing.com'),
('Dabshots', '7586 2nd Terrace', '183-829-3484', 12, 11, 'http://sciencedirect.com'),
('Wikizz', '24 Del Sol Point','749-605-3786', 12, 11, 'http://state.gov'),
('Roomm', '74971 Straubel Crossing', '337-470-8807', 12, 11, 'https://opensource.org');


INSERT INTO restaurant_table (restaurant_id)
VALUES
(1),
(1),
(1),
(1);



INSERT INTO reservation (table_id, user_id, twelve_am, one_am, two_am, three_am, four_am, five_am, six_am, 
seven_am, eight_am, nine_am, ten_am, eleven_am, twelve_pm, one_pm, two_pm, three_pm, 
four_pm, five_pm, six_pm, seven_pm, eight_pm, nine_pm, ten_pm, eleven_pm)
VALUES
(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
(2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
(3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
(4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

