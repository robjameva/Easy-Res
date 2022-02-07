INSERT INTO user (first_name, last_name, username, password, email, phone_number)
VALUES
('Robert', 'Evanik','robjameva', 'password123', 'rob.evanik@gmail.com', '9739195256'),
('Chris', 'McCormack', 'cdm83092', 'password', 'chrismack135@gmail.com', '6033407223');


INSERT INTO restaurant (business_name, occupancy, business_address, business_phone, business_hours_open, business_hours_close, business_website, business_image, user_id)
VALUES
('Mudo',50, '56015 Sutteridge Street', '199-860-0127', 12,  23, 'https://msn.com', 'pexels-marcus-herzberg-1058277.jpg', 1),
('Mybuzz',50, '3694 Vidon Center', '320-108-9797', 12,  23, 'http://odnoklassniki.ru', 'pexels-photo-67468.webp', 2),
('Roomm',50, '74971 Straubel Crossing', '337-470-8807', 12,  23, 'https://opensource.org', 'pexels-photo-1833349.jpg', null),
('Skippad',50, '238 Myrtle Place', '502-348-7746', 12,  23, 'https://smh.com.au', 'pexels-photo-239975.jpg', null),
('Ooba',50, '29 Bonner Place', '420-933-6845', 12,  23, 'http://rakuten.co.jp', 'pexels-photo-260922.jpg', null),
('Agimba',50, '061 Thompson Road', '178-435-6716', 12,  23, 'http://github.io', 'pexels-photo-262978.webp', null),
('Kwinu',50, '54 Monica Way', '287-178-1123', 12,  23, 'https://addthis.com', 'pexels-photo-315755.jpg', null),
('Gabvine',50, '343 Hoepker Place', '998-393-6439', 12,  23, 'https://dailymotion.com', 'pexels-photo-382297.jpg', null),
('Fivebridge',50, '46618 Pankratz Circle', '466-182-6584', 12,  23, 'http://over-blog.com', 'pexels-photo-541216.jpg', null),
('Kwideo',50, '85 Upham Plaza', '481-230-7995', 12,  23, 'http://hubpages.com', 'pexels-photo-580613.webp', null),
('Yozio',50, '7270 South Junction', '127-951-1460', 12,  23, 'https://aol.com', 'pexels-photo-687824.webp', null),
('Vinte',50, '179 Sunnyside Way', '396-941-1909', 12,  23, 'http://slashdot.org', 'pexels-photo-914388.jpg', null),
('Dazzlesphere',50, '1 Corry Circle', '150-781-0965', 12,  23, 'https://xing.com', 'pexels-photo-1126728.webp', null),
('Dabshots',50, '7586 2nd Terrace', '183-829-3484', 12,  23, 'http://sciencedirect.com', 'pexels-photo-1267320.jpg', null),
('Wikizz',50, '24 Del Sol Point','749-605-3786', 12,  23, 'http://state.gov', 'pexels-photo-1581384.jpg', null);



INSERT INTO reservation (party_size, time_slot, user_id, restaurant_id)
VALUES
(10, 13, 1, 1),
(4, 14, 1, 1),
(2, 14, 1, 2),
(8, 15, 1, 2),
(6, 15, 1, 2);

