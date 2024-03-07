import {ServiceNames, ProjectAbout } from "@/types/work";
import {Team} from "@/types/team";

type StrategyCard = {
    "title" : string,
    "subtitle" : string,
    "description" : string,
}

export type Dictionary = {
    "common": {
        "months": string[];
    },
    "nav": {
        "home": string,
        "services": string,
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
            "brands" : string,
        },
        "strategy" : StrategyCard[],
        "team": {
            "copy": string,
            "categories": (Team.Area | "all" | "todas")[],
        }
    },
    "work": {
        "heading": string,
        "copy": string,
        "projects": {[key : string] : { "title": string, "subtitle"?: string, "categories": ServiceNames[], "about": ProjectAbout }}
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
    "blog": {
        "title": string,
        "copy": string,
        "categories": string[],
        "categoryDescriptions": {[key : string] : string}
        "dropdownDefaultOption": string,
        "featured": string,
        "latest": string,
        "featuredRemark": string,
        "by": string,
        "notFound": string,
        "notFoundCTA": string,
        "stayTuned": string,
        "stayTunedRemark": string,
        "end": string,
        "endRemark": string,
        "newsletter": {
            "title": string,
            "copy": string,
            "email": string,
            "nextBlog": string,
            "subscribe": string,
        },
        "entry" : {
            "publishedOn" : string,
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