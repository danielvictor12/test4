GS.dataCache['174B3B3D17C1444C4A9BCC021E6BECD5202C'] = {
    "uid": "174B3B3D17C1444C4A9BCC021E6BECD5202C",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Baturite",
        "parentId": "14D107A48D72384C4379CCF019651AA18865",
        "localizableStrings": {},
        "chapterUid": "0CB893F2837403459C29772638E5277FD6F5",
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "Competitive_-_Fired_Up.ogg",
                        "volume": "40",
                        "playbackRate": "57"
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 0,
                        "music.playbackRate": 0,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4FEAD2741DC3534BCD8BC827AE9905A48ACF",
                "expanded": false
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "03C8F41D3C55B5448F8A69889FDFB7FAB3B1"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 4,
                        "y": 4,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 1.1111230227102638
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "mapaa.png",
                        "folderPath": "Graphics/Backgrounds/Special",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "uid": "55EFB64D405D58489F5B1E705A5370919976",
                "indent": 0
            },
            {
                "id": "gs.CreateMessageArea",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "box": {
                        "x": 102,
                        "y": 604,
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
                            "width": 1038,
                            "height": 96
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4BFE4BDF636D764BE4885AB239840A974E21",
                "indent": 0
            },
            {
                "id": "gs.SetTargetMessage",
                "params": {
                    "id": "gameMessage_message",
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "type": 1,
                    "clear": 1
                },
                "uid": "ED1E93A808A6814D4C9B2BA967D8A755D56A",
                "indent": 0
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
                        "defaultText": "Você sinalizou a serra de Baturité que fica distante o sucifiente de Fortaleza, mas fica relativamente próximo ao litoral. Estamos ficando sem tempo...."
                    },
                    "position": 0,
                    "characterId": "4A7D5EC17353564C3E39DA52EBDE615E4D0B",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7153FE335891114FCB9A3711DD4CC9D02FA1",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ErasePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "34B05D07378CE34C0C2894356539EF7690B5",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "14D107A48D72384C4379CCF019651AA18865",
                        "name": "MAPA"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1C3422D03CE7094A5C1AF444B8D898E55842",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "order": 2
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "o",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}