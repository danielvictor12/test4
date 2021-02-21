GS.dataCache['96EB6CA99CCFF94DE04917C216F085E8E747'] = {
    "uid": "96EB6CA99CCFF94DE04917C216F085E8E747",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Title Screen",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 0,
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In this scene we make the title screen. We use an image-map to keep it simple as possible. Feel free to use single-images, videos, hotspots, etc. to make it more dynamic.\n\nFor each menu-entry we create a hotspot on the image-map and jump to the appropriate label if the hotspot gets clicked."
                },
                "uid": "A2460E090335B947411B02A444E2658A7A40",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 2,
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": 4
                },
                "uid": "75C6621C51FDD041893BE197C4CD816D9082",
                "indent": 0
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 1
                },
                "uid": "D3C4E58F77DBE1449499CC956591BB632AE5",
                "indent": 0
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 17,
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 1
                },
                "uid": "2EA5D85887EC514F6A7A19E1D1C50DD86544",
                "indent": 0
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 0,
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 0
                },
                "uid": "0E0141A23A23844F842B7B57FCE78E5EEEAC",
                "indent": 0
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Music/TCC",
                        "name": "introjogo.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 1,
                    "loop": 1,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "sound.volume": 0,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "387209A908BCD94E164B1ED36002BA45434A",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
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
                    "duration": 60,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 2
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
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 0,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "uni.png",
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
                "uid": "18C47A7E420AA04CC91B5B355637DD7E72FB",
                "indent": 0,
                "expanded": false
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
                    "duration": 60,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 2
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
                        "origin": 1,
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "geouni.png",
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
                "uid": "FF7545261D9D034A556BED968D0DE7590FA3",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.UIAccess",
                "params": {
                    "saveMenu": 0,
                    "loadMenu": 0,
                    "generalMenu": 0,
                    "backlog": 0,
                    "fieldFlags": {
                        "saveMenu": 0,
                        "loadMenu": 0,
                        "generalMenu": 0,
                        "backlog": 0
                    }
                },
                "indent": 0,
                "uid": "08CAD2067291764778691245746ECFA10589"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 20,
                    "numberValue": 0,
                    "textValue": "en_US",
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "4A3C154A3DF2F4434B68D1C9EDE87C9FDB52"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Game",
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "5A74E2DB7473934D73787A970D0F43860234"
            },
            {
                "id": "gs.ShowVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 8,
                    "positionType": 1,
                    "number": 0,
                    "blendMode": 1,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "video": {
                        "name": "video.webm",
                        "folderPath": "Movies",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "position": {
                        "x": -39,
                        "y": 290
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
                    "loop": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 0,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "A3E2A5E654DBB241798BF3E4ED723ACB5085",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ZoomVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 30,
                        "y": 30
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "1F45960D454538412638FA76649E4A936C0B",
                "indent": 0
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 0,
                    "hotspots": [
                        {
                            "x": 790,
                            "y": 266,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 395,
                                "y": 133,
                                "width": 315,
                                "height": 58,
                                "action": 1,
                                "label": "start",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "choice_confirm_03.ogg",
                                    "volume": 100,
                                    "playbackRate": 100
                                },
                                "onHoverSound": {
                                    "name": "",
                                    "folderPath": "Audio/Sounds",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 315,
                                "height": 58
                            }
                        },
                        {
                            "x": 788,
                            "y": 334,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 394,
                                "y": 167,
                                "width": 338,
                                "height": 62,
                                "action": 1,
                                "label": "cred",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "folderPath": "Audio/Sounds/System",
                                    "name": "choice_confirm_03.ogg",
                                    "volume": 100,
                                    "playbackRate": 100
                                },
                                "onHoverSound": {
                                    "name": "",
                                    "folderPath": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 338,
                                "height": 62
                            }
                        }
                    ],
                    "ground": {
                        "name": "fundo.png",
                        "folderPath": "Graphics/Pictures/In-Game UI",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "hover": {
                        "name": "fundo2.png",
                        "folderPath": "Graphics/Pictures/In-Game UI",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "unselected": null,
                    "selected": null,
                    "selectedHover": null,
                    "duration": 30,
                    "origin": 0,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
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
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 0,
                        "origin": 1
                    },
                    "zOrder": 0,
                    "blendMode": 0,
                    "predefinedPositionId": 0,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "expanded": false,
                "uid": "64C4FBD88DE0B049104B9F12352D74226EE8"
            },
            {
                "id": "gs.StopSound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Music/TCC",
                        "name": "introjogo.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "08A786C27453044BAB4A6DB1F1BE7D224853",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "start"
                },
                "indent": 0,
                "uid": "1C7AB8380D48F74EE13BB5C752D92F3472E1"
            },
            {
                "id": "gs.EraseVideo",
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
                "uid": "15AF5C75569C524FFF89BE742ADCDE221F68",
                "indent": 0
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Game",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "7EB8E04865A0A3446E1A88B35A68D1A02A4B"
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/System",
                        "name": "choice_confirm_03.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "F539A1753188F341B62A44A166CDA4B880A8",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "279653EA7884D644FF5867410CDA78EA66B0",
                        "name": "Dr Shuri apresentando a ideia para investidores"
                    },
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 0
                },
                "indent": 0,
                "uid": "2FB8DFBC269AD445DF487D74FE478C720A1E",
                "expanded": false
            },
            {
                "id": "gs.EraseVideo",
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
                "uid": "BF1950047365254FF879B171F8A4434AF3C7",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "762E97CE6FC4C3439D88C4D1BC61A00E7392"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "cred"
                },
                "indent": 0,
                "uid": "1766ADC661A02142D26B3B290A88F8706636"
            },
            {
                "id": "gs.EraseVideo",
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
                "uid": "6D06388A1D2C934A9D3A46F147228967EDC3",
                "indent": 0
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/System",
                        "name": "choice_confirm_03.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 0,
                    "loop": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "A9B719E84E2E68450378A4822CC417FA82B2",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "D0BAB9A62FBFE649205BB9A0FDF8DB945767",
                        "name": "Cred"
                    },
                    "duration": 20,
                    "erasePictures": 1,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 0
                },
                "indent": 0,
                "uid": "8838CB7F8826464700594D25481853A13F3E",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "22E4D68255E7B147695A024454F3729C2241"
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
        "numberVariables": [
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
        ],
        "localizableStrings": {},
        "listVariables": [
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