# AU-Bank-Assesment
This is the assessment of AU Bank


Endpoints for the APIS

Get : http://localhost:8000/api/v1/orders
Post : http://localhost:8000/api/v1/orders?state=California



Response Object

Get All states
{
    "headers": {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, DELETE"
    },
    "body": {
        "states": [
            "Kentucky",
            "California",
            "Florida",
            "North Carolina",
            "Washington",
            "Texas",
            "Wisconsin",
            "Utah",
            "Nebraska",
            "Pennsylvania",
            "Illinois",
            "Minnesota",
            "Michigan",
            "Delaware",
            "Indiana",
            "New York",
            "Arizona",
            "Virginia",
            "Tennessee",
            "Alabama",
            "South Carolina",
            "Oregon",
            "Colorado",
            "Iowa",
            "Ohio",
            "Missouri",
            "Oklahoma",
            "New Mexico",
            "Louisiana",
            "Connecticut",
            "New Jersey",
            "Massachusetts",
            "Georgia",
            "Nevada",
            "Rhode Island",
            "Mississippi",
            "Arkansas",
            "Montana",
            "New Hampshire",
            "Maryland",
            "District of Columbia",
            "Kansas",
            "Vermont",
            "Maine",
            "South Dakota",
            "Idaho",
            "North Dakota",
            "Wyoming",
            "West Virginia"
        ]
    }
}



Post : 
{
    "headers": {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, DELETE"
    },
    "body": {
        "dates": {
            "minDate": "2014-01-06",
            "maxDate": "2017-12-30"
        }
    }
}
