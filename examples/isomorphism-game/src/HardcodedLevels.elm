module HardcodedLevels exposing (..)

import Json.Decode
import Level
import Level.Decode
import LevelSelector as LS


hardcodedLevels =
    hardcodedLevelsAsJson
        |> Json.Decode.decodeString (LS.decoder Level.Decode.decoder)
        |> Result.withDefault (LS.singleton Level.empty)


hardcodedLevelsAsJson =
    """
{
  "before": [],
  "current": {
    "baseGraph": [
      [
        "0",
        {
          "position": {
            "x": 0.3339502915997687,
            "y": 3.8014342874268596,
            "z": 3.552713678800501e-15
          },
          "outNeighbours": [
            1
          ],
          "data": null
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -2.207478180651013,
            "y": -0.5917499867061586,
            "z": -3.552713678800501e-15
          },
          "outNeighbours": [
            2
          ],
          "data": null
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.878392016808472,
            "y": -0.575054292389634,
            "z": 0
          },
          "outNeighbours": [],
          "data": null
        }
      ]
    ],
    "playerGraph": [
      [
        "0",
        {
          "position": {
            "x": -2.2074781803707735,
            "y": -0.5917499862217284,
            "z": 2.8725016344888826e-10
          },
          "outNeighbours": [
            1
          ],
          "data": {
            "mappedToBaseVertex": 1
          }
        }
      ],
      [
        "1",
        {
          "position": {
            "x": 0.3339502915328613,
            "y": 3.8014342872685187,
            "z": 3.552713677388219e-15
          },
          "outNeighbours": [
            2
          ],
          "data": {
            "mappedToBaseVertex": 0
          }
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.878392016808472,
            "y": -0.575054292389634,
            "z": 0
          },
          "outNeighbours": [],
          "data": {
            "mappedToBaseVertex": 2
          }
        }
      ]
    ]
  },
  "after": [
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -1.8283539262523356,
              "y": 3.12806086941573,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -1.6563649992006328,
              "y": -1.491479782089968,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.6291512031988313,
              "y": -1.4433243653010344,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.7143099451149912,
              "y": 3.3636319943117847,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -1.8283539262523334,
              "y": 3.1280608694157346,
              "z": 3.552713678800497e-15
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -1.656364999200635,
              "y": -1.4914797820899701,
              "z": -2.2793368019406715e-49
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.7143082472234186,
              "y": 3.3635361534091417,
              "z": 0.00004168767410297846
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.6291463564176683,
              "y": -1.4433758649876216,
              "z": 3.5524947405679804e-15
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 0.15933824500098495,
              "y": 6.802920784364311,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.9350856799137257,
              "y": 4.023261683508835,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.181509287519979,
              "y": 3.942368812302494,
              "z": -3.552713678800501e-15
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.94903027918362,
              "y": -0.18763440884361948,
              "z": 0
            },
            "outNeighbours": [
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -0.14498933970270297,
              "y": -2.7534296045134576,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -2.7790444634080447,
              "y": -0.20461617488857975,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": 3.1815092874005138,
              "y": 3.9423688124155714,
              "z": 1.6453162877078988e-10
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.9350847080166687,
              "y": 4.023260936294758,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 0.15933824500490937,
              "y": 6.802920784457221,
              "z": 0
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.949015956323332,
              "y": -0.18762415886268133,
              "z": 0.000006802925220713686
            },
            "outNeighbours": [
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -2.77904446340801,
              "y": -0.20461617488861347,
              "z": 6.224803560201027e-14
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -0.14498933970269362,
              "y": -2.7534296045134727,
              "z": 0
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -0.22291106040621225,
              "y": 5.141547174169547,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 4.519019923206813,
              "y": 5.2476274663696945,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.9168855060147814,
              "y": -0.5416260289175128,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -0.3215957548942725,
              "y": -0.3231367917129706,
              "z": 0
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -3.0527975893522203,
              "y": 2.95285332812675,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -2.690415556227983,
              "y": -2.3870453629440416,
              "z": 0
            },
            "outNeighbours": [
              6
            ],
            "data": null
          }
        ],
        [
          "6",
          {
            "position": {
              "x": 1.9753414086214052,
              "y": -2.3562327969091763,
              "z": -3.552713678800501e-15
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": null
          }
        ],
        [
          "7",
          {
            "position": {
              "x": 2.1000174724091387,
              "y": 2.933462965357018,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -0.3215957548935722,
              "y": -0.32313679171358967,
              "z": 3.051520971605442e-13
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.9168855060147765,
              "y": -0.5416260289175036,
              "z": 3.5527136787999353e-15
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 4.519019923206805,
              "y": 5.247627466369631,
              "z": 6.892193241532886e-14
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -0.222911060406212,
              "y": 5.141547174169556,
              "z": 0
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.9753414086095715,
              "y": -2.3562327968966814,
              "z": 7.04413394912627e-12
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 6
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 2.1000174724091343,
              "y": 2.9334629653570135,
              "z": 7.819614375382638e-18
            },
            "outNeighbours": [
              6
            ],
            "data": {
              "mappedToBaseVertex": 7
            }
          }
        ],
        [
          "6",
          {
            "position": {
              "x": -3.0527975893479193,
              "y": 2.952853328127115,
              "z": 0
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "7",
          {
            "position": {
              "x": -2.690415556227987,
              "y": -2.387045362944046,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ]
      ]
    }
  ]
}
"""
