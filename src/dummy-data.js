export default {
  drivers: [
    {
      'userID': 42,
      'username': 'dummyuser',
      'emailAddress': 'dummyemail@email.com',
      'fullName': 'Dummy Name',
      'password':'dummypass',
      'tripnumber': 1,
      'role': 'Driver',
      'status': true,
    },
    {
      'userID': 23,
      'username': 'Weeb',
      'emailAddress': 'yongjungsong@mail.mcgill.ca',
      'fullName': 'Yong Jung Song',
      'password': 'dissapointment',
      'tripnumber': 4,
      'role': 'Driver',
      'status': true,
    },
    {
      'userID': 47,
      'username': 'Hyacinth',
      'emailAddress': 'ali4glory@yahoo.com',
      'fullName': 'Hyacinth Ali',
      'password': 'strongman',
      'tripnumber': 2,
      'role': 'Driver',
      'status': true,
    },
    {
      'userID': 41,
      'username': 'NeilArmstrongRotativeAcceleration',
      'emailAddress': 'yunhao@pornhub.gov',
      'fullName': 'Yunhao',
      'password':'goshujinsama',
      'tripnumber': 6,
      'role': 'Driver',
      'status': true,
    },
    {
      'userID': 6,
      'username': 'Prof Brenda',
      'emailAddress': 'ali4glory@yahoo.com',
      'fullName': 'Thomas Yin',
      'password': 'lordoftheroses',
      'tripnumber': 10,
      'role': 'Driver',
      'status': true,
    },
  ],
  passengers: [
    {
      'userID': 46,
      'username': 'dummypassenger',
      'emailAddress': 'dummypass@dummy.com',
      'fullName': 'Dummy Passenger',
      'password': 'password',
      'tripnumber': 0,
      'role': 'Passenger',
      'status': true
    },
    {
      'userID': 146,
      'username': 'dummypassenger2',
      'emailAddress': 'dummypass@dummy.com',
      'fullName': 'Dummy Passenger',
      'password': 'password',
      'tripnumber': 0,
      'role': 'Passenger',
      'status': true
    },
    {
      'userID': 246,
      'username': 'smashmouth',
      'emailAddress': 'heynow@urarockstar.com',
      'fullName': 'Somebody Once Told Me',
      'password': 'theworldwasgonnarollme',
      'tripnumber': 1,
      'role': 'Passenger',
      'status': true
    },
    {
      'userID': 346,
      'username': 'Shane Pizza',
      'emailAddress': 'shane.mcintosh@mail.mcgill.ca',
      'fullName': 'Shane McInTosh',
      'password': 'designpatterns',
      'tripnumber': 2,
      'role': 'Passenger',
      'status': true
    },
    {
      'userID': 99,
      'username': 'Liang Zai',
      'emailAddress': 'zhao.lyon@mail.mcgill.ca',
      'fullName': 'Zhao Lyon',
      'password': 'mvp12345',
      'tripnumber': 14,
      'role': 'Passenger',
      'status': true
    },
  ],
  trips: [
    {
      'tripid': 45,
      'costPerStop': '14.52;22.55;32.86',
      'startdate': 1541158920,
      'enddate': 1541245320,
      'startLocation': 'Montreal',
      'stops': 'Ottawa;Toronto;Detroit',
      'vehicleid': 43,
      'passengerid': '',
      'driverid': 42,
      'status': 1,
    },
    {
      'tripid': 50,
      'costPerStop': '60.0',
      'startdate': 1514800800,
      'enddate': 1541844000,
      'startLocation': 'Montreal',
      'stops': 'Toronto',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 51,
      'costPerStop': '20.0;40.0',
      'startdate': 1514800800,
      'enddate': 1541844000,
      'startLocation': 'Montreal',
      'stops': 'Laval;Ottawa',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 1,
      'costPerStop': '1.0',
      'startdate': 1614800800,
      'enddate': 1641844000,
      'startLocation': 'Gotham',
      'stops': 'Metropolis',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 2,
      'costPerStop': '10.0;0.0;0.0',
      'startdate': 1514900800,
      'enddate': 1515000800,
      'startLocation': 'Lumbridge',
      'stops': 'Al-Kharid;Varrock;Falador',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 3,
      'costPerStop': '0.0',
      'startdate': 1514800800,
      'enddate': 1541844000,
      'startLocation': 'Glasgow',
      'stops': 'Edinburgh',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 4,
      'costPerStop': '10.0;10.0;10.5',
      'startdate': 2514800800,
      'enddate': 2541844000,
      'startLocation': 'London',
      'stops': 'Manchester;Birmingham;Liverpool',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 5,
      'costPerStop': '70.0;20.0',
      'startdate': 1614800800,
      'enddate': 1641844000,
      'startLocation': 'Montreal',
      'stops': 'Toronto;Niagara',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 6,
      'costPerStop': '5.0',
      'startdate': 1514800800,
      'enddate': 1591844000,
      'startLocation': 'Montreal',
      'stops': 'Sherbrooke',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 7,
      'costPerStop': '2.0;5.0;1.0;20.0',
      'startdate': 1514801800,
      'enddate': 1541844000,
      'startLocation': 'Vermilion City',
      'stops': 'Cerulean City;Celadon City;Pewter City;Cinnabar Island',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 8,
      'costPerStop': '1000.0;100.0',
      'startdate': 1524800800,
      'enddate': 1561844000,
      'startLocation': 'Seoul',
      'stops': 'Busan;Pyongyang',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 9,
      'costPerStop': '10.0',
      'startdate': 1515800800,
      'enddate': 1515800900,
      'startLocation': 'Hong Kong',
      'stops': 'Shenzhen',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
    {
      'tripid': 10,
      'costPerStop': '25.0;10.0',
      'startdate': 1515800800,
      'enddate': 1541944000,
      'startLocation': 'Orlando',
      'stops': 'Houston;Miami',
      'vehicleid': 48,
      'passengerid': '52',
      'driverid': 47,
      'status': 1,
    },
  ],
  active: [
    '42;45',
    '52;50',
    '47;50',
    '6;10',
    '23;8',
    '99;50',
    '41;7',
    '246;2',
    '346;7',
    ';',
  ]
}