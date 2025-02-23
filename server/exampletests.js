const examples = [
    {
        "id": "chinese_sweet_savory",
        "text": "Are you craving a dish that balances sweet and savory flavors?",
        "relatedCuisines": [
            "Chinese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "chinese_crispy_chewy",
        "text": "Would you enjoy something with a mix of crispy and chewy textures?",
        "relatedCuisines": [
            "Chinese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "chinese_spicy_numbing",
        "text": "Are you in the mood for something spicy and numbing?",
        "relatedCuisines": [
            "Chinese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "chinese_umami_rich",
        "text": "Do you feel like indulging in something umami-rich?",
        "relatedCuisines": [
            "Chinese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "chinese_hot_sour",
        "text": "Would you enjoy flavors that are both hot and sour?",
        "relatedCuisines": [
            "Chinese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "korean_grilled_tender",
        "text": "Are you craving something grilled and tender right now?",
        "relatedCuisines": [
            "Korean"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "korean_spicy_fragrant",
        "text": "Do you fancy something spicy and fragrant?",
        "relatedCuisines": [
            "Korean"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "korean_kimchi_zingy",
        "text": "Are you in the mood for something with a zingy kimchi flavor?",
        "relatedCuisines": [
            "Korean"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "korean_stirfried_healthy",
        "text": "Would you enjoy a healthy stir-fried dish?",
        "relatedCuisines": [
            "Korean"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "korean_bowl_crispy",
        "text": "Are you looking for a bowl of food that includes something crispy?",
        "relatedCuisines": [
            "Korean"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "japanese_sushi_fresh",
        "text": "Do you feel like indulging in some fresh sushi?",
        "relatedCuisines": [
            "Japanese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "japanese_ramen_comforting",
        "text": "Are you in the mood for a comforting bowl of ramen?",
        "relatedCuisines": [
            "Japanese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "japanese_tempura_light",
        "text": "Would you enjoy something light and crispy like tempura?",
        "relatedCuisines": [
            "Japanese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "japanese_miso_earthy",
        "text": "Do you crave something with an earthy miso flavor?",
        "relatedCuisines": [
            "Japanese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "japanese_teppanyaki_sizzling",
        "text": "Are you looking for something sizzling like teppanyaki?",
        "relatedCuisines": [
            "Japanese"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "indian_curry_spicy",
        "text": "Would you enjoy a spicy curry dish right now?",
        "relatedCuisines": [
            "Indian"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "indian_tandoori_smoky",
        "text": "Do you crave the smoky flavors of tandoori cooking?",
        "relatedCuisines": [
            "Indian"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "indian_samosa_crunchy",
        "text": "Are you in the mood for something crunchy like a samosa?",
        "relatedCuisines": [
            "Indian"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "indian_naan_soft",
        "text": "Would you like something soft and fluffy like naan bread?",
        "relatedCuisines": [
            "Indian"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    },
    {
        "id": "indian_mango_luscious",
        "text": "Are you looking for something lusciously mango-flavored?",
        "relatedCuisines": [
            "Indian"
        ],
        "options": [
            {
                "value": "yes",
                "label": "Yes",
                "weight": 1
            },
            {
                "value": "probably",
                "label": "Probably",
                "weight": 0.7
            },
            {
                "value": "probably_not",
                "label": "Probably Not",
                "weight": 0.3
            },
            {
                "value": "no",
                "label": "No",
                "weight": 0
            }
        ]
    }
]

export default examples;