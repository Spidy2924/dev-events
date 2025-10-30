// constants.ts


export interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: Props[] = [
    {
        title: "Google Cloud Next 2025",
        image: "/images/event1.png",
        slug: "google-cloud-next-2025",
        location: "San Francisco, USA",
        date: "April 8–10, 2025",
        time: "9:00 AM – 6:00 PM PDT",
    },
    {
        title: "Microsoft Build 2025",
        image: "/images/event2.png",
        slug: "microsoft-build-2025",
        location: "Seattle, USA (Hybrid)",
        date: "May 20–22, 2025",
        time: "9:30 AM – 5:30 PM PST",
    },
    {
        title: "AWS re:Invent 2025",
        image: "/images/event3.png",
        slug: "aws-reinvent-2025",
        location: "Las Vegas, USA",
        date: "December 1–5, 2025",
        time: "8:00 AM – 7:00 PM PST",
    },
    {
        title: "HackMIT 2025",
        image: "/images/event4.png",
        slug: "hackmit-2025",
        location: "Massachusetts Institute of Technology, Cambridge, USA",
        date: "September 20–21, 2025",
        time: "8:00 AM – 11:00 PM EST",
    },
    {
        title: "JSConf EU 2025",
        image: "/images/event5.png",
        slug: "jsconf-eu-2025",
        location: "Berlin, Germany",
        date: "June 6–7, 2025",
        time: "9:00 AM – 5:00 PM CET",
    },
    {
        title: "DevFest India 2025",
        image: "/images/event6.png",
        slug: "devfest-india-2025",
        location: "Bangalore, India",
        date: "November 8–9, 2025",
        time: "10:00 AM – 6:00 PM IST",
    }
];
