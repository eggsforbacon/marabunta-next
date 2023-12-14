import {ServiceNames} from "@/types/work";

export type Dictionary = {
    "nav": {
        "home": string,
        "work": string,
        "blog": string,
        "contact": string
    },
    "home" : {
        "intro": {
            "sr": string,
            "title": string,
            "copy": string,
            "body": string,
        }
    },
    "work": {
        "heading": string,
        "copy": string,
        "projects": {"title" : string, "categories" : ServiceNames[]}[]
    },
    "contact": {
        "actions": {
            "talk": string,
            "talkDetail": string,
            "visit" : string,
            "visitDetail" : string,
            "call" : string,
            "callDetail" : string,
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