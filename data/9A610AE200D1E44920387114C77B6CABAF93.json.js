GS.dataCache['9A610AE200D1E44920387114C77B6CABAF93'] = {
    "uid": "9A610AE200D1E44920387114C77B6CABAF93",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "O que você sabe sobre o aquecimento global?",
        "type": "vn.scene",
        "parentId": "90FBF9E0739B814CF42A435709268E48A97C",
        "chapterUid": "B875F37329D0094B441B91863272C2FDD2FC",
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
                "expanded": true
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
                "expanded": true,
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
                            "uid": "816381D11062A647321A32131732DC4A316E",
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
                            "uid": "D7519E1A0746E8479A093173CBA650E1B8B8",
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