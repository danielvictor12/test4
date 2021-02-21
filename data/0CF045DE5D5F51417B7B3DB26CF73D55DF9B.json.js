GS.dataCache['0CF045DE5D5F51417B7B3DB26CF73D55DF9B'] = {
    "uid": "0CF045DE5D5F51417B7B3DB26CF73D55DF9B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "O que você sabe sobre o aquecimento global?",
        "type": "vn.scene",
        "parentId": "C50EEDED27DFB643471B810408395513985A",
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ClearMessage",
                "params": {
                    "fieldFlags": {
                        "duration": 1
                    },
                    "duration": 30,
                    "waitForCompletion": 1
                },
                "indent": 0,
                "uid": "4EB557675BF015485B59F8037B37D4C9E606"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Vamos só fazer uns testes antes, okay?"
                    },
                    "position": 0,
                    "characterId": "154E7EBC9DACD640AD4816514200D508D566",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "35FED664282DD44C0F6888372EA5BF541FF5",
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "O que você sabe sobre o aquecimento global?"
                    },
                    "position": 0,
                    "characterId": "154E7EBC9DACD640AD4816514200D508D566",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "expanded": false,
                "uid": "B74AD3AC5679C9405C79A4F19CDDC4DA96E4"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 3,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": {
                            "uid": "D771E4E1089D97493B5AC2A168902D174500",
                            "name": "Relembrou tudo né? Agora que você está totalmente preparado, podemos entrar na nave."
                        }
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "É um processo de aumento da temperatura do planeta e aumenta o nivel dos oceanos"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 14,
                        "y": 100,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 1236,
                            "height": 110
                        }
                    },
                    "defaultChoice": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6A8340894BCD72409F29CF43E24684704364",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 3,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": {
                            "uid": "844D60A893CDC144662B9DD6FFD0858E16A7",
                            "name": "Presta atenção"
                        }
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "É um processo que causa o refrigeramento do planeta e uma das causas são as queimadas."
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 1,
                    "box": {
                        "x": 20,
                        "y": 298,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 1236,
                            "height": 106
                        }
                    },
                    "defaultChoice": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1C0E50A3818F0645A36B0E409627815F0346",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "66C4E0A9897F144EF038BF26B363F44A76F4",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}