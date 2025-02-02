const mockEpisodes = [
    {
        "episode_id": 1,
        "title": "Pilot",
        "season": "1",
        "air_date": "01-20-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Krazy-8",
            "Bogdan Wolynetz"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 2,
        "title": "Cat's in the Bag...",
        "season": "1",
        "air_date": "01-27-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Krazy-8"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 3,
        "title": "...And the Bag's in the River",
        "season": "1",
        "air_date": "02-10-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Krazy-8",
            "Gretchen Schwartz"
        ],
        "episode": "3",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 4,
        "title": "Cancer Man",
        "season": "1",
        "air_date": "02-17-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Ken Wins"
        ],
        "episode": "4",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 5,
        "title": "Gray Matter",
        "season": "1",
        "air_date": "02-24-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Elliott Schwarts",
            "Gretchen Swartz",
            "Badger"
        ],
        "episode": "5",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 6,
        "title": "Crazy Handful of Nothin",
        "season": "1",
        "air_date": "03-02-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Tuco Salamanca"
        ],
        "episode": "6",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 7,
        "title": "A No-Rough-Stuff-Type Deal",
        "season": " 1",
        "air_date": "03-09-2008",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Tuco Salamanca"
        ],
        "episode": "7",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 8,
        "title": "Seven-Thirty-Seven",
        "season": "2",
        "air_date": "03-08-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Tuco Salamanca"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 9,
        "title": "Grilled",
        "season": "2",
        "air_date": "03-15-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Tuco Salamanca",
            "Hector Salamanca"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 10,
        "title": "Bit by a Dead Bee",
        "season": "2",
        "air_date": "03-22-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Hector Salamanca"
        ],
        "episode": "3",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 11,
        "title": "Down",
        "season": "2",
        "air_date": "03-29-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr."
        ],
        "episode": "4",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 12,
        "title": "Breakage",
        "season": "2",
        "air_date": "04-05-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Jane Margolis",
            "Badger"
        ],
        "episode": "5",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 13,
        "title": "Peekaboo",
        "season": "2",
        "air_date": "04-12-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Marie Schrader",
            "Walter White Jr.",
            "Gretchen Schwartz"
        ],
        "episode": "6",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 14,
        "title": "Negro y Azul",
        "season": "2",
        "air_date": "04-19-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Tortuga",
            "Jane Margolis",
            "Ted Beneke"
        ],
        "episode": "7",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 15,
        "title": "Better Call Saul",
        "season": "2",
        "air_date": "04-26-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Saul Goodman",
            "Jane Margolis",
            "Badger"
        ],
        "episode": "8",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 16,
        "title": "4 Days Out",
        "season": "2",
        "air_date": "05-03-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Jane Margolis"
        ],
        "episode": "9",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 17,
        "title": "Over",
        "season": "2",
        "air_date": "05-10-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Jane Margolis",
            "Ted Beneke"
        ],
        "episode": "10",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 18,
        "title": "Mandala",
        "season": "2",
        "air_date": "05-17-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Saul Goodman",
            "Gustavo Fring",
            "Jane Margolis",
            "Ted Beneke",
            "Donald Margolis",
            "Combo"
        ],
        "episode": "11",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 19,
        "title": "Phoenix",
        "season": "2",
        "air_date": "05-24-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Jane Margolis",
            "Ted Beneke",
            "Donald Margolis"
        ],
        "episode": "12",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 20,
        "title": "ABQ",
        "season": "2",
        "air_date": "05-31-2009",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Mike Erhmantraut",
            "Gustavo Fring",
            "Jane Margolis",
            "Donald Margolis"
        ],
        "episode": "13",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 21,
        "title": "No Más",
        "season": "3",
        "air_date": "03-21-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "The cousins"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 22,
        "title": "Caballo sin Nombre",
        "season": "3",
        "air_date": "03-28-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Hector Salamanca"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 23,
        "title": "IFT",
        "season": "3",
        "air_date": "04-04-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Hector Salamanca",
            "Ted Beneke"
        ],
        "episode": "3",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 24,
        "title": "Green Light",
        "season": "3",
        "air_date": "04-11-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Ted Beneke"
        ],
        "episode": "4",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 25,
        "title": "Más",
        "season": "3",
        "air_date": "04-18-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Ted Beneke"
        ],
        "episode": "5",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 26,
        "title": "Sunset",
        "season": "3",
        "air_date": "04-25-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Gale Boetticher",
            "The cousins"
        ],
        "episode": "6",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 27,
        "title": "One Minute",
        "season": "3",
        "air_date": "05-02-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Saul Goodman",
            "Hector Salamanca",
            "The cousins",
            "Gale Boetticher"
        ],
        "episode": "7",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 28,
        "title": "I See You",
        "season": "3",
        "air_date": "05-09-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Mike Ehrmantraut"
        ],
        "episode": "8",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 29,
        "title": "Kafkaesque",
        "season": "3",
        "air_date": "05-16-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Ted Beneke"
        ],
        "episode": "9",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 30,
        "title": "Fly",
        "season": "3",
        "air_date": "05-23-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "a fly"
        ],
        "episode": "10",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 31,
        "title": "Abiquiu",
        "season": "3",
        "air_date": "05-30-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Jane Margolis"
        ],
        "episode": "11",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 32,
        "title": "Half measures",
        "season": "3",
        "air_date": "06-06-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Andrea Cantillo",
            "Victor"
        ],
        "episode": "12",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 33,
        "title": "Full Measure",
        "season": "3",
        "air_date": "06-13-2010",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Gale Boetticher",
            "Victor"
        ],
        "episode": "13",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 34,
        "title": "Box Cutter",
        "season": "4",
        "air_date": "07-17-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Gale Boetticher",
            "Victor"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 35,
        "title": "Thirty-Eight Snub",
        "season": "4",
        "air_date": "07-24-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Andrea Cantillo"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 36,
        "title": "Open House",
        "season": "4",
        "air_date": "07-31-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Saul Goodman",
            "Bogdan Wolynetz"
        ],
        "episode": "3",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 37,
        "title": "Bullet Points",
        "season": "4",
        "air_date": "08-07-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "White White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Gale Boetticher"
        ],
        "episode": "4",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 38,
        "title": "Shotgun",
        "season": "4",
        "air_date": "08-14-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Mike Ehrmantraut",
            ""
        ],
        "episode": "5",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 39,
        "title": "Cornered",
        "season": "4",
        "air_date": "08-21-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Gustavo Fring",
            "Mike Ehrmantraut",
            "Bogdan Wolynetz"
        ],
        "episode": "6",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 40,
        "title": "Problem Dog",
        "season": "4",
        "air_date": "08-28-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Gale Boetticher"
        ],
        "episode": "7",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 41,
        "title": "Hermanos",
        "season": "4",
        "air_date": "09-04-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Hector Salamanca",
            "Andrea Cantillo"
        ],
        "episode": "8",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 42,
        "title": "Bug",
        "season": "4",
        "air_date": "09-11-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Gustavo Fring",
            "Mike Ehrmantraut",
            "Ted Beneke"
        ],
        "episode": "9",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 43,
        "title": "Salud",
        "season": "4",
        "air_date": "09-18-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Ted Beneke",
            "Don Eladio"
        ],
        "episode": "10",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 44,
        "title": "Crawl Space",
        "season": "4",
        "air_date": "09-25-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Hector Salamanca",
            "Ted Beneke",
            "Andrea Cantillo"
        ],
        "episode": "11",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 45,
        "title": "End Times",
        "season": "4",
        "air_date": "10-02-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            "Andrea Cantillo"
        ],
        "episode": "12",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 46,
        "title": "Face Off",
        "season": "4",
        "air_date": "10-09-2011",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Gustavo Fring",
            "Saul Goodman",
            ""
        ],
        "episode": "13",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 47,
        "title": "Live Free of Die",
        "season": "5",
        "air_date": "07-15-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Ted Beneke"
        ],
        "episode": "1",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 48,
        "title": "Madrigal",
        "season": "5",
        "air_date": "07-22-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Lydia Rodarte-Quayle"
        ],
        "episode": "2",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 49,
        "title": "Hazard Pay",
        "season": "5",
        "air_date": "07-29-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Badger",
            "Andrea Cantillo",
            "Todd Alquist"
        ],
        "episode": "3",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 50,
        "title": "Fifty-One",
        "season": "5",
        "air_date": "08-05-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Mike Ehrmantraut",
            "Lydia Rodarte-Quayle"
        ],
        "episode": "4",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 51,
        "title": "Dead Freight",
        "season": "5",
        "air_date": "08-12-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Mike Ehrmantraut",
            "Lydia Rodarte-Quayle",
            "Todd Alquist"
        ],
        "episode": "5",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 52,
        "title": "Buyout",
        "season": "5",
        "air_date": "08-19-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Todd Alquist"
        ],
        "episode": "6",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 53,
        "title": "Say My Name",
        "season": "5",
        "air_date": "08-26-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Todd Alquist"
        ],
        "episode": "7",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 54,
        "title": "Gliding Over All",
        "season": "5",
        "air_date": "09-02-2012",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Mike Ehrmantraut",
            "Lydia Rodarte-Quayle",
            "Todd Alquist"
        ],
        "episode": "8",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 55,
        "title": "Blood Money",
        "season": "5",
        "air_date": "08-11-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Lydia Rodarte-Quayle",
            "Badger",
            "Skinny Pete"
        ],
        "episode": "9",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 56,
        "title": "Buried",
        "season": "5",
        "air_date": "08-18-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Saul Goodman",
            "Lydia Rodarte-Quayle",
            "Todd Alquist",
            "Jack Welker"
        ],
        "episode": "10",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 57,
        "title": "Confessions",
        "season": "5",
        "air_date": "08-25-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Todd Alquist",
            "Jack Welker"
        ],
        "episode": "11",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 58,
        "title": "Rabid Dog",
        "season": "5",
        "air_date": "09-01-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman"
        ],
        "episode": "12",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 59,
        "title": "To'hajilee",
        "season": "5",
        "air_date": "09-08-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Saul Goodman",
            "Lydia Rodarte-Quayle",
            "Todd Alquist",
            "Andrea Cantillo",
            "Jack Welker"
        ],
        "episode": "13",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 60,
        "title": "Ozymandias",
        "season": "5",
        "air_date": "09-15-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Hank Schrader",
            "Marie Schrader",
            "Walter White Jr.",
            "Todd Alquist",
            "Jack Welker",
            "Steve Gomez"
        ],
        "episode": "14",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 61,
        "title": "Granite State",
        "season": "5",
        "air_date": "09-22-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Marie Schrader",
            "Saul Goodman",
            "Lydia Rodarte-Quayle",
            "Todd Alquist",
            "Jack Welker",
            "Andrea Cantillo",
            "Eliott Schwartz",
            "Gretchen Schwartz"
        ],
        "episode": "15",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 62,
        "title": "Felina",
        "season": "5",
        "air_date": "09-29-2013",
        "characters": [
            "Walter White",
            "Jesse Pinkman",
            "Skyler White",
            "Marie Schrader",
            "Walter White Jr.",
            "Lydia Rodarte-Quayle",
            "Todd Alquist",
            "Jack Welker",
            "Badger",
            "Skinny Pete",
            "Eliott Schwartz",
            "Gretchen Schwartz"
        ],
        "episode": "16",
        "series": "Breaking Bad"
    },
    {
        "episode_id": 63,
        "title": "Uno",
        "season": "1",
        "air_date": "02-08-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "1",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 64,
        "title": "Mijo",
        "season": "1",
        "air_date": "02-09-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga",
            "Tuco Salamanca"
        ],
        "episode": "2",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 65,
        "title": "Nacho",
        "season": "1",
        "air_date": "02-16-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "3",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 66,
        "title": "Hero",
        "season": "1",
        "air_date": "02-23-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "4",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 67,
        "title": "Alpine Shepherd Boy",
        "season": "1",
        "air_date": "03-02-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "5",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 68,
        "title": "Five-O",
        "season": "1",
        "air_date": "03-09-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "6",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 69,
        "title": "Bingo",
        "season": "1",
        "air_date": "03-16-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "7",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 70,
        "title": "RICO",
        "season": "1",
        "air_date": "03-23-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "8",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 71,
        "title": "Pimento",
        "season": "1",
        "air_date": "03-30-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "9",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 72,
        "title": "Marco",
        "season": "1",
        "air_date": "04-06-2015",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "10",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 73,
        "title": "Switch",
        "season": "2",
        "air_date": "02-15-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "1",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 74,
        "title": "Cobbler",
        "season": "2",
        "air_date": "02-22-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "2",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 75,
        "title": "Amarillo",
        "season": "2",
        "air_date": "02-29-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "3",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 76,
        "title": "Gloves Off",
        "season": "2",
        "air_date": "03-07-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "4",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 77,
        "title": "Rebecca",
        "season": "2",
        "air_date": "03-14-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "5",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 78,
        "title": "Bali Ha'i",
        "season": "2",
        "air_date": "03-21-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "6",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 79,
        "title": "Inflatable",
        "season": "2",
        "air_date": "03-28-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "7",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 80,
        "title": "Fifi",
        "season": "2",
        "air_date": "04-04-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "8",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 81,
        "title": "Nailed",
        "season": "2",
        "air_date": "04-11-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "9",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 82,
        "title": "Klick",
        "season": "2",
        "air_date": "04-18-2016",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "10",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 83,
        "title": "Mabel",
        "season": "3",
        "air_date": "04-10-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "1",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 84,
        "title": "Witness",
        "season": "3",
        "air_date": "04-17-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "2",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 85,
        "title": "Sunk Costs",
        "season": "3",
        "air_date": "04-24-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "3",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 86,
        "title": "Sabrosito",
        "season": "3",
        "air_date": "05-01-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "4",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 87,
        "title": "Chicanery",
        "season": "3",
        "air_date": "05-08-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "5",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 88,
        "title": "Off Brand",
        "season": "3",
        "air_date": "05-15-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "6",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 89,
        "title": "Expenses",
        "season": "3",
        "air_date": "05-22-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "7",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 90,
        "title": "Slip",
        "season": "3",
        "air_date": "06-05-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "8",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 91,
        "title": "Fall",
        "season": "3",
        "air_date": "06-12-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "9",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 92,
        "title": "Lantern",
        "season": "3",
        "air_date": "06-19-2017",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "10",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 93,
        "title": "Smoke",
        "season": "4",
        "air_date": "08-06-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "1",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 94,
        "title": "Breathe",
        "season": "4",
        "air_date": "08-13-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "2",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 95,
        "title": "Something Beautiful",
        "season": "4",
        "air_date": "08-20-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "3",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 96,
        "title": "Talk",
        "season": "4",
        "air_date": "08-27-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "4",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 97,
        "title": "Quite a Ride",
        "season": "4",
        "air_date": "09-03-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "5",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 98,
        "title": "Pinata",
        "season": "4",
        "air_date": "09-10-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "6",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 99,
        "title": "Something Stupid",
        "season": "4",
        "air_date": "09-17-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "7",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 100,
        "title": "Coushatta",
        "season": "4",
        "air_date": "09-24-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "8",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 101,
        "title": "Wiedersehen",
        "season": "4",
        "air_date": "10-01-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "9",
        "series": "Better Call Saul"
    },
    {
        "episode_id": 102,
        "title": "Winner",
        "season": "4",
        "air_date": "10-08-2018",
        "characters": [
            "Jimmy McGill",
            "Mike Erhmantraut",
            "Kim Wexler",
            "Howard Hamlin",
            "Chuck McGill",
            "Nacho Varga"
        ],
        "episode": "10",
        "series": "Better Call Saul"
    }
]

export default mockEpisodes;