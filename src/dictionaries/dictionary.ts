import {ServiceNames} from "@/types/work";

export type Dictionary = {
    "nav": {
        "home": string,
        "work": string,
        "blog": string,
        "contact": string
    },
    "home": {
        "intro": {
            "sr": string,
            "title": string,
            "copy": string,
            "body": string,
        },
        "services": {
            "title": string,
            "remark": string,
            "categories": {
                "titles": string[],
                "descriptions": string[],
            },
            "cta": string,
        },
    },
    "work": {
        "heading": string,
        "copy": string,
        "projects": { "title": string, "categories": ServiceNames[] }[]
    },
    "contact": {
        "actions": {
            "talk": string,
            "talkDetail": string,
            "visit": string,
            "visitDetail": string,
            "call": string,
            "callDetail": string,
        },
        "card": {
            "title": string,
            "remark": string,
            "prompt": string,
            "form": {
                "name": string,
                "mail": string,
                "comment": string,
            },
            "headings": string[],
            "categories": string[][],
            "whatCanWeDo": string,
            "send": string,
        }
    },
    "legal": {
        "title": string,
        "update": string,
        "navigation": {
            "data": string,
            "terms": string,
        },
        "data": {
            "title": string,
            "paragraph1": [string, string, string],
            "purposes": string[],
            "paragraph2": string,
            "paragraph3": string,
            "paragraph4": [string, string, string, string, string]
        },
        "tos": {
            "title": string,
            content : string[]
        }
    },
    "footer": {
        "email": string,
        "talk": string,
        "terms": {
            "read": string,
            "link": string,
        },
        "footNote": string
    }
}