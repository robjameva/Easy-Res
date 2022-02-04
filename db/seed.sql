INSERT INTO user (first_name, last_name, username, password, email, phone_number)
VALUES
('Robert', 'Evanik','robjameva', 'password123', 'rob.evanik@gmail.com', '973-919-5256');


INSERT INTO restaurant (business_name, occupancy, business_address, business_phone, business_hours_open, business_hours_close, business_website, business_image)
VALUES
('Mudo',15, '56015 Sutteridge Street', '199-860-0127', 12, 11, 'https://msn.com', 'pexels-marcus-herzberg-1058277.jpg'),
('Mybuzz',15, '3694 Vidon Center', '320-108-9797', 12, 11, 'http://odnoklassniki.ru', 'pexels-photo-67468.webp'),
('Skippad',15, '238 Myrtle Place', '502-348-7746', 12, 11, 'https://smh.com.au', 'pexels-photo-239975.jpg'),
('Ooba',15, '29 Bonner Place', '420-933-6845', 12, 11, 'http://rakuten.co.jp', 'pexels-photo-260922.jpg'),
('Agimba',15, '061 Thompson Road', '178-435-6716', 12, 11, 'http://github.io', 'pexels-photo-262978.webp'),
('Kwinu',15, '54 Monica Way', '287-178-1123', 12, 11, 'https://addthis.com', 'pexels-photo-315755.jpg'),
('Gabvine',15, '343 Hoepker Place', '998-393-6439', 12, 11, 'https://dailymotion.com', 'pexels-photo-382297.jpg'),
('Fivebridge',15, '46618 Pankratz Circle', '466-182-6584', 12, 11, 'http://over-blog.com', 'pexels-photo-541216.jpg'),
('Kwideo',15, '85 Upham Plaza', '481-230-7995', 12, 11, 'http://hubpages.com', 'pexels-photo-580613.webp'),
('Yozio',15, '7270 South Junction', '127-951-1460', 12, 11, 'https://aol.com', 'pexels-photo-687824.webp'),
('Vinte',15, '179 Sunnyside Way', '396-941-1909', 12, 11, 'http://slashdot.org', 'pexels-photo-914388.jpg'),
('Dazzlesphere',15, '1 Corry Circle', '150-781-0965', 12, 11, 'https://xing.com', 'pexels-photo-1126728.webp'),
('Dabshots',15, '7586 2nd Terrace', '183-829-3484', 12, 11, 'http://sciencedirect.com', 'pexels-photo-1267320.jpg'),
('Wikizz',15, '24 Del Sol Point','749-605-3786', 12, 11, 'http://state.gov', 'pexels-photo-1581384.jpg'),
('Roomm',15, '74971 Straubel Crossing', '337-470-8807', 12, 11, 'https://opensource.org', 'pexels-photo-1833349.jpg');


INSERT INTO reservation (party_size, time_slot, user_id, restaurant_id)
VALUES
(10, 13, 1, 1),
(4, 14, 1, 1),
(2, 14, 1, 2),
(8, 15, 1, 2),
(6, 15, 1, 2);

