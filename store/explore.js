export const actions = {
	getMinerals({ state, commit }, params) {
		if (params.hasOwnProperty('q') && (params.q === null || params.q.length < 3)) {
			delete params.q;
		}

		params.limit = params.limit ? params.limit : state.limit;
		params.offset = params.offset ? params.offset : state.offset;

		const queryString = new URLSearchParams(params).toString();
		return this.$api.get('/mineral/?' + queryString).then((response) => {
			commit('mineralsRetrieved', response.data);
		});
	},
};


export const mutations = {
    mineralsRetrieved(state, response) {
		state.minerals = response.results;
        state.count = response.count;
	},

    setOffset(state, offset) {
        state.offset = offset;
    },

    setLimit(state, limit) {
        state.limit = limit;
    }
};


export const state = () => ({
	limit: 10,
	offset: 0,
    count: 0,
	minerals: [
        {
            "id": "1792d6a0-1983-4870-bb2c-fed59700388b",
            "name": "Alkali-beryl",
            "url": "/mineral/1792d6a0-1983-4870-bb2c-fed59700388b/",
            "ns_index": "9.CJ.05 var",
            "formula": "(Be,Li,Na,Cs,K)<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "9ef25436-f120-4131-a1df-b2b0b5f80a90",
                    "url": "/mineral/9ef25436-f120-4131-a1df-b2b0b5f80a90",
                    "name": "Beryl Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 340,
                            "name": "Iron (2+)",
                            "formula": "Fe^2+^"
                        },
                        {
                            "id": 325,
                            "name": "Selenium (4+)",
                            "formula": "Se^4+^"
                        },
                        {
                            "id": 293,
                            "name": "Cadmium (2+)",
                            "formula": "Cd"
                        },
                        {
                            "id": 259,
                            "name": "Rubidium (1+)",
                            "formula": "Rb"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 4.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                },
                {
                    "id": 12.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 29,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 236,
                    "name": "United States of America",
                    "iso_code": "US"
                }
            ],
            "history": null
        },
        {
            "id": "f277707c-7e30-4564-8540-940f82eadbf3",
            "name": "Beryl",
            "url": "/mineral/f277707c-7e30-4564-8540-940f82eadbf3/",
            "description": "May be confused with apatite. \
                            The largest beryl crystal reported was 18 m long and 3.5 m wide from Malakialina, Madagascar, but in the absence of anything more than a personal communication, the report is doubtful. \
                            Microporous beryl (and cordierite) may contain some molecular N2 (Bebout et al., 2006). \
                            Cordierite and (especially) its HT-polymorph indialite are somewhat structurally similar to beryl.",
            "ns_index": "9.CJ.05",
            "formula": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "9ef25436-f120-4131-a1df-b2b0b5f80a90",
                    "url": "/mineral/9ef25436-f120-4131-a1df-b2b0b5f80a90",
                    "name": "Beryl Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [
                {
                    "id": 1,
                    "name": "hexagonal",
                    "counts": 1
                }
            ],
            "statuses": [
                {
                    "id": 0.0,
                    "description_long": "all IMA-approved minerals",
                    "description_short": "IMA Approved Mineral"
                },
                {
                    "id": 12.7,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 28,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 250,
                    "name": "unknown",
                    "iso_code": null
                }
            ],
            "history": null
        },
        {
            "id": "9ef25436-f120-4131-a1df-b2b0b5f80a90",
            "name": "Beryl Group",
            "url": "/mineral/9ef25436-f120-4131-a1df-b2b0b5f80a90/",
            "description": null,
            "ns_index": null,
            "formula": "A<sub>2-3</sub>B<sub>2-3</sub>(X<sub>6</sub>O<sub>18</sub>)",
            "is_grouping": true,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "a4b94c3a-4f14-4bf1-a244-eba9bb84dec8",
                    "url": "/mineral/a4b94c3a-4f14-4bf1-a244-eba9bb84dec8",
                    "name": "Ferroindialite"
                },
                {
                    "id": "e5f79516-b041-46f4-96da-beb4bdb579d2",
                    "url": "/mineral/e5f79516-b041-46f4-96da-beb4bdb579d2",
                    "name": "Bazzite"
                },
                {
                    "id": "f277707c-7e30-4564-8540-940f82eadbf3",
                    "url": "/mineral/f277707c-7e30-4564-8540-940f82eadbf3",
                    "name": "Beryl"
                },
                {
                    "id": "cb3f6257-8a88-4524-a7ba-3e534e87e4ef",
                    "url": "/mineral/cb3f6257-8a88-4524-a7ba-3e534e87e4ef",
                    "name": "Avdeevite"
                },
                {
                    "id": "c084baa6-b6d7-4537-8827-87af31183ce5",
                    "url": "/mineral/c084baa6-b6d7-4537-8827-87af31183ce5",
                    "name": "Johnkoivulaite"
                },
                {
                    "id": "05c653ba-0b52-422f-9237-5dcbd4ea48af",
                    "url": "/mineral/05c653ba-0b52-422f-9237-5dcbd4ea48af",
                    "name": "Stoppaniite"
                },
                {
                    "id": "3eb38a0b-d761-4c95-8668-974902ab0a96",
                    "url": "/mineral/3eb38a0b-d761-4c95-8668-974902ab0a96",
                    "name": "Pezzottaite"
                },
                {
                    "id": "f8786f6d-17a5-4add-ab96-a697b38ba77d",
                    "url": "/mineral/f8786f6d-17a5-4add-ab96-a697b38ba77d",
                    "name": "Indialite"
                },
                {
                    "id": "4cb1f5a6-cd6e-4514-8a82-daba0b8b3cec",
                    "url": "/mineral/4cb1f5a6-cd6e-4514-8a82-daba0b8b3cec",
                    "name": "Cordierite-Sekaninaite Series"
                },
                {
                    "id": "d237f0d1-3bc7-485d-aca7-a8849a9aa2f5",
                    "url": "/mineral/d237f0d1-3bc7-485d-aca7-a8849a9aa2f5",
                    "name": "Vorobyevite"
                },
                {
                    "id": "56c697b0-2e3c-4140-9ae9-c918c4b38f20",
                    "url": "/mineral/56c697b0-2e3c-4140-9ae9-c918c4b38f20",
                    "name": "Pachea"
                },
                {
                    "id": "1792d6a0-1983-4870-bb2c-fed59700388b",
                    "url": "/mineral/1792d6a0-1983-4870-bb2c-fed59700388b",
                    "name": "Alkali-beryl"
                },
                {
                    "id": "d237f0d1-3bc7-485d-aca7-a8849a9aa2f5",
                    "url": "/mineral/d237f0d1-3bc7-485d-aca7-a8849a9aa2f5",
                    "name": "Vorobyevite"
                },
                {
                    "id": "56c697b0-2e3c-4140-9ae9-c918c4b38f20",
                    "url": "/mineral/56c697b0-2e3c-4140-9ae9-c918c4b38f20",
                    "name": "Pachea"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 340,
                            "name": "Iron (2+)",
                            "formula": "Fe^2+^"
                        },
                        {
                            "id": 334,
                            "name": "Chromium (6+)",
                            "formula": "Cr^6+^"
                        },
                        {
                            "id": 294,
                            "name": "Gallium (3+)",
                            "formula": "Ga"
                        },
                        {
                            "id": 293,
                            "name": "Cadmium (2+)",
                            "formula": "Cd"
                        },
                        {
                            "id": 287,
                            "name": "Tellurium (?+)",
                            "formula": "Te^?+^"
                        },
                        {
                            "id": 286,
                            "name": "Silicon (4+)",
                            "formula": "Si"
                        },
                        {
                            "id": 259,
                            "name": "Rubidium (1+)",
                            "formula": "Rb"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 261,
                            "name": "Beryllium (2+)",
                            "formula": "Be"
                        },
                        {
                            "id": 250,
                            "name": "Thorium (4+)",
                            "formula": "Th^4+^"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [
                {
                    "id": 1,
                    "name": "hexagonal",
                    "counts": 7
                },
                {
                    "id": 7,
                    "name": "trigonal",
                    "counts": 1
                }
            ],
            "statuses": [
                {
                    "id": 1.1,
                    "description_long": "group names",
                    "description_short": "Group"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 5,
                    "status_group": {
                        "id": 3,
                        "name": "Varieties"
                    }
                },
                {
                    "id": 2,
                    "counts": 10,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 111,
                    "name": "Italy",
                    "iso_code": "IT",
                    "counts": 2
                },
                {
                    "id": 153,
                    "name": "Myanmar",
                    "iso_code": "MM",
                    "counts": 2
                },
                {
                    "id": 104,
                    "name": "India",
                    "iso_code": "IN",
                    "counts": 1
                },
                {
                    "id": 14,
                    "name": "Australia",
                    "iso_code": "AU",
                    "counts": 1
                },
                {
                    "id": 133,
                    "name": "Madagascar",
                    "iso_code": "MG",
                    "counts": 1
                },
                {
                    "id": 236,
                    "name": "United States of America",
                    "iso_code": "US",
                    "counts": 1
                },
                {
                    "id": 84,
                    "name": "Germany",
                    "iso_code": "DE",
                    "counts": 1
                }
            ],
            "history": null
        },
        {
            "id": "688fbe06-72bd-4a87-851d-d4c2ec5e8080",
            "name": "Beryllian Epidote",
            "url": "/mineral/688fbe06-72bd-4a87-851d-d4c2ec5e8080/",
            "description": null,
            "ns_index": "9.BG.05a var",
            "formula": "{Ca<sub>2</sub>}{Al<sub>2</sub>Fe<sup>3+</sup>}((Si,Be)<sub>2</sub>O<sub>7</sub>)(SiO<sub>4</sub>)(O,OH)",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "a5f7efbb-6fff-481d-87d8-113dff6af429",
                    "url": "/mineral/a5f7efbb-6fff-481d-87d8-113dff6af429",
                    "name": "Epidote Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 252,
                            "name": "Uranium (4+)",
                            "formula": "U^4+^"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 252,
                            "name": "Uranium (4+)",
                            "formula": "U^4+^"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "C",
                    "ions": [
                        {
                            "id": 287,
                            "name": "Tellurium (?+)",
                            "formula": "Te^?+^"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "X2",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "Y2",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "Z",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        },
                        {
                            "id": 119,
                            "name": "Chromate",
                            "formula": "CrO_4_"
                        }
                    ]
                }
            ],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 4.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 69,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 236,
                    "name": "United States of America",
                    "iso_code": "US"
                }
            ],
            "history": null
        },
        {
            "id": "8dbda1a6-6bd8-41e0-8b34-a704e9a0a2a0",
            "name": "Beryllian Margarite",
            "url": "/mineral/8dbda1a6-6bd8-41e0-8b34-a704e9a0a2a0/",
            "description": null,
            "ns_index": "9.EC.17 var",
            "formula": "CaAl<sub>2</sub>(Si,Be)<sub>2</sub>(Al,Be)<sub>2</sub>O<sub>10</sub>(OH)<sub>2</sub>",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "fcabcbb2-288d-44d2-a30c-bb9f12ec1c2b",
                    "url": "/mineral/fcabcbb2-288d-44d2-a30c-bb9f12ec1c2b",
                    "name": "Brittle Mica Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 252,
                            "name": "Uranium (4+)",
                            "formula": "U^4+^"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "Z",
                    "ions": [
                        {
                            "id": 119,
                            "name": "Chromate",
                            "formula": "CrO_4_"
                        }
                    ]
                }
            ],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 4.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 107,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 250,
                    "name": "unknown",
                    "iso_code": null
                }
            ],
            "history": null
        },
        {
            "id": "a9f2dc20-f490-41c7-a891-b780028ed973",
            "name": "Beryllian Sapphirine",
            "url": "/mineral/a9f2dc20-f490-41c7-a891-b780028ed973/",
            "description": null,
            "ns_index": "9.DH.45 var",
            "formula": "Mg<sub>4</sub>(Mg<sub>3</sub>Al<sub>9</sub>)O<sub>4</sub>[(Si,Be)<sub>3</sub>(Al,Be)<sub>9</sub>O<sub>36</sub>]",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "57c0b72f-b303-4a4b-afd2-4ba17fdb3d5a",
                    "url": "/mineral/57c0b72f-b303-4a4b-afd2-4ba17fdb3d5a",
                    "name": "Sapphirine Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 294,
                            "name": "Gallium (3+)",
                            "formula": "Ga"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 294,
                            "name": "Gallium (3+)",
                            "formula": "Ga"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        },
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "Z",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 4.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 31,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 14,
                    "name": "Australia",
                    "iso_code": "AU"
                }
            ],
            "history": null
        },
        {
            "id": "2e8b01a8-02b4-4e4e-a66d-8a22ccb512ce",
            "name": "Beryllian Vesuvianite",
            "url": "/mineral/2e8b01a8-02b4-4e4e-a66d-8a22ccb512ce/",
            "description": null,
            "ns_index": null,
            "formula": null,
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [],
            "ions": [],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 2.9,
                    "description_long": "Spelling synonyms, including erroneous, alternative, and other spellings variations, e.g. Carbonate-hydroxylapatite = Carbonate-rich Hydroxylapatite",
                    "description_short": "Spelling Synonym"
                }
            ],
            "relations": [],
            "discovery_countries": [],
            "history": null
        },
        {
            "id": "cbdb867a-fb6d-4545-a959-b3678bc86021",
            "name": "Beryllite",
            "url": "/mineral/cbdb867a-fb6d-4545-a959-b3678bc86021/",
            "description": null,
            "ns_index": "9.AE.05",
            "formula": "Be<sub>3</sub>SiO<sub>4</sub>(OH)<sub>2</sub>·H<sub>2</sub>O",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [],
            "ions": [],
            "crystal_systems": [
                {
                    "id": 4,
                    "name": "orthorhombic",
                    "counts": 1
                }
            ],
            "statuses": [
                {
                    "id": 0.0,
                    "description_long": "all IMA-approved minerals",
                    "description_short": "IMA Approved Mineral"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 9,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 184,
                    "name": "Russian Federation",
                    "iso_code": "RU"
                }
            ],
            "history": null
        },
        {
            "id": "514a8c55-4308-4b61-b6f0-55b2494056d5",
            "name": "Beryllium vesuvianite",
            "url": "/mineral/514a8c55-4308-4b61-b6f0-55b2494056d5/",
            "description": null,
            "ns_index": "9.BG.35 var",
            "formula": "Ca<sub>19</sub>Fe<sup>3+</sup>Al<sub>4</sub>(Al<sub>6</sub>Mg<sub>2</sub>)([box]<sub>4</sub>)[box][(Si,Be)<sub>2</sub>O<sub>7</sub>]<sub>4</sub>[(SiO<sub>4</sub>)<sub>10</sub>]O(OH)<sub>9</sub>",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "c4e3bb5a-5396-4221-a7f5-9e25d60d8460",
                    "url": "/mineral/c4e3bb5a-5396-4221-a7f5-9e25d60d8460",
                    "name": "Vesuvianite Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 252,
                            "name": "Uranium (4+)",
                            "formula": "U^4+^"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "ions": [
                        {
                            "id": 287,
                            "name": "Tellurium (?+)",
                            "formula": "Te^?+^"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "C",
                    "ions": [
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "D",
                    "ions": [
                        {
                            "id": 294,
                            "name": "Gallium (3+)",
                            "formula": "Ga"
                        },
                        {
                            "id": 239,
                            "name": "[Hg_2_N]1+ group",
                            "formula": "Hg_2_N"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "E",
                    "ions": [
                        {
                            "id": 418,
                            "name": "x-methyl-x-propen-2-ylphenanthrene",
                            "formula": "C_18_H_16_"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "F",
                    "ions": [
                        {
                            "id": 418,
                            "name": "x-methyl-x-propen-2-ylphenanthrene",
                            "formula": "C_18_H_16_"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "X2",
                    "ions": [
                        {
                            "id": 338,
                            "name": "Iron (?+)",
                            "formula": "Fe^?+^"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "Y2",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                },
                {
                    "id": 14,
                    "name": "W",
                    "ions": [
                        {
                            "id": 119,
                            "name": "Chromate",
                            "formula": "CrO_4_"
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "Z",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [],
            "statuses": [
                {
                    "id": 4.0,
                    "description_long": "Chemical varieties",
                    "description_short": "Chemical Variety"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 69,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 236,
                    "name": "United States of America",
                    "iso_code": "US"
                }
            ],
            "history": null
        },
        {
            "id": "b20b209b-5cda-47e4-a209-dc38338b79bd",
            "name": "Beryllonite",
            "url": "/mineral/b20b209b-5cda-47e4-a209-dc38338b79bd/",
            "description": null,
            "ns_index": "8.AA.10",
            "formula": "NaBePO<sub>4</sub>",
            "is_grouping": false,
            "seen": 0,
            "hierarchy": [
                {
                    "id": "94b8f517-014d-418e-a1a2-b2755b40f438",
                    "url": "/mineral/94b8f517-014d-418e-a1a2-b2755b40f438",
                    "name": "Beryllonite Group"
                }
            ],
            "ions": [
                {
                    "id": 1,
                    "name": "A",
                    "ions": [
                        {
                            "id": 340,
                            "name": "Iron (2+)",
                            "formula": "Fe^2+^"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "C",
                    "ions": [
                        {
                            "id": 248,
                            "name": "Rare earth elements",
                            "formula": "REE"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "X1",
                    "ions": [
                        {
                            "id": 323,
                            "name": "Sulphur",
                            "formula": "S"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Y1",
                    "ions": [
                        {
                            "id": 148,
                            "name": "Orthotellurate",
                            "formula": "TeO_6_"
                        }
                    ]
                }
            ],
            "crystal_systems": [
                {
                    "id": 3,
                    "name": "monoclinic",
                    "counts": 1
                }
            ],
            "statuses": [
                {
                    "id": 0.0,
                    "description_long": "all IMA-approved minerals",
                    "description_short": "IMA Approved Mineral"
                }
            ],
            "relations": [
                {
                    "id": 1,
                    "counts": 8,
                    "status_group": {
                        "id": 11,
                        "name": "IMA minerals"
                    }
                }
            ],
            "discovery_countries": [
                {
                    "id": 236,
                    "name": "United States of America",
                    "iso_code": "US"
                }
            ],
            "history": null
        }
    ],
});
