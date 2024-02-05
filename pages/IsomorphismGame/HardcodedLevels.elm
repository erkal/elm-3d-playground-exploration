module IsomorphismGame.HardcodedLevels exposing (..)


hardcodedLevels =
    """
[
  {
    "name": "level 1",
    "page": {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 2.0587908211400956,
              "y": 2.0549463821669756,
              "z": 0
            },
            "outNeighbours": [
              1,
              2
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2,
              "y": -2,
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
              "x": -2,
              "y": -2,
              "z": 0
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
              "x": -2,
              "y": 2,
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
              "x": 2.0000000000000018,
              "y": -1.9999999999999991,
              "z": 0
            },
            "outNeighbours": [
              1,
              2
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
              "x": 2.058790821140094,
              "y": 2.054946382166974,
              "z": 1.6416528387773522e-23
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
              "x": -2.0000000000000018,
              "y": 2.0000000000000018,
              "z": 0
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
              "x": -2,
              "y": -1.9999999999999991,
              "z": 3.0534145784981305e-16
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
    }
  },
  {
    "name": "level 2",
    "page": {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 6.646684549622617,
              "y": 3.493402125471729,
              "z": 0
            },
            "outNeighbours": [
              0,
              1,
              2,
              5
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2.0853643902277543,
              "y": -4.175096932104078,
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
              "x": -5.429088786496953,
              "y": -4.416308645474708,
              "z": 0
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
              "x": -4.034840212029926,
              "y": 2.724399243370961,
              "z": 0
            },
            "outNeighbours": [
              0,
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.735573461500265,
              "y": 5.545810764118776,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 6.778574798066738,
              "y": -1.5584654727224574,
              "z": 0
            },
            "outNeighbours": [
              1
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
              "x": 6.7785747980667335,
              "y": -1.5584654727224585,
              "z": 0
            },
            "outNeighbours": [
              0,
              1,
              2,
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2.0853643902277543,
              "y": -4.175096932104078,
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
              "x": 1.7355734615002474,
              "y": 5.545810764118752,
              "z": 3.472419908530677e-15
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -4.034840212029922,
              "y": 2.7243992433709634,
              "z": 5.9587122186577136e-21
            },
            "outNeighbours": [
              0,
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
              "x": -5.4290887864969495,
              "y": -4.416308645474704,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 6.646684549622622,
              "y": 3.493402125471727,
              "z": 2.346065600119703e-33
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ]
      ]
    }
  }
]
"""
