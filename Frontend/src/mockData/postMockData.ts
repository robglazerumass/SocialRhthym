const postMockData = [
    {
        username: "alice123",
        title: "New Album Release",
        description: "Excited for the new album release from my favorite artist!",
        spotify_link: "",
        image_url: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
        likes_list: ["bobsmith", "charlieb", "dianam", "evag"],
        dislikes_list: ["frankl", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "bobsmith",
        title: "Concert Experience",
        description: "Had an amazing time at the concert last night!",
        spotify_link: "",
        image_url: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_A_detailed_logo_for_twitch_illustration_mans_face_with_2_69c97ab5-7d8a-443f-b7dd-07fbd94b9ec1_1-500x750.jpeg",
        likes_list: ["alice123", "charlieb", "dianam", "evag"],
        dislikes_list: ["gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "charlieb",
        title: "Music Festival Highlights",
        description: "Recapping the best moments from the music festival!",
        spotify_link: "",
        image_url: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_hyper_realistic_ultra_detailed_photograph_of_a_woman_s_1_6d8066d4-4036-4de0-a215-98461459e598_1-585x1024.jpeg",
        likes_list: ["dianam", "evag", "frankl"],
        dislikes_list: ["alice123", "bobsmith"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "dianam",
        title: "Music Video Premiere",
        description: "Check out the premiere of the new music video!",
        spotify_link: "",
        image_url: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_v7_ultra_detailed_image_of_lee_pace_as_Thranduil_f_0-500x750.jpeg",
        likes_list: ["alice123", "charlieb", "evag"],
        dislikes_list: ["bobsmith", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "evag",
        title: "Musician Spotlight",
        description: "Highlighting a talented musician and their journey.",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/41ca5438-1d64-408a-baaa-340e67fa81a2/generations/1eb1c699-85a1-4f8e-a58b-5ff9e02efac1/variations/Default_Explore_the_vastness_of_the_universe_through_the_eyes_1_1eb1c699-85a1-4f8e-a58b-5ff9e02efac1_0.jpg?w=512",
        likes_list: ["bobsmith", "dianam", "frankl"],
        dislikes_list: ["alice123", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "frankl",
        title: "Music Production Tips",
        description: "Sharing some tips for music producers!",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/6fd9c0eb-5adc-4090-aa3b-8fe714f5e9ef/generations/24831148-64ed-4f99-95b6-352a12b7c9b4/Default_85mm_DSLR_colour_photography_of_a_very_detailed_headsh_2.jpg?w=512",
        likes_list: ["charlieb", "evag"],
        dislikes_list: ["alice123", "bobsmith", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "gracew",
        title: "Music Playlist",
        description: "Sharing my favorite music playlist!",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/dd8808ce-a170-4da9-a581-5fb8abc1c9e3/generations/4070ce54-15b3-46b5-a3cb-2e538e38fc4c/Default_Female_character_25_year_Japanese_influencer_social_me_1.jpg?w=512",
        likes_list: ["dianam", "evag"],
        dislikes_list: ["alice123", "bobsmith", "frankl"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "henryn",
        title: "Musician Collaboration",
        description: "Collaborating with another musician on a new project!",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/200bae03-0146-413f-961e-f1d7088c30f3/generations/ae7abf58-7a9c-4480-83e6-993d0245832c/Default_Create_a_photorealistic_image_of_Homer_Simpson_0.jpg?w=512",
        likes_list: ["evag"],
        dislikes_list: [],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "isabellal",
        title: "Music Genre Exploration",
        description: "Exploring different music genres and their origins.",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/95f953db-6e06-4c19-8213-d45685fc976f/generations/f71515ff-6f1a-4694-9296-64c81e39d99d/Default_Overdetailedan_ancient_rich_man_of_the_18th_century_in_1.jpg?w=512",
        likes_list: ["alice123", "charlieb"],
        dislikes_list: ["bobsmith", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
    {
        username: "jackr",
        title: "Music Instrument Showcase",
        description: "Showcasing different musical instruments and their sounds.",
        spotify_link: "",
        image_url: "https://cdn.leonardo.ai/users/ba09ca5e-1693-4689-8b59-57b4db56d776/generations/49c966ac-666e-4cc1-8e44-c54f55590d8c/variations/Default_ultrarealistic_long_full_face_and_body_photorealistic_6_49c966ac-666e-4cc1-8e44-c54f55590d8c_0.jpg?w=512",
        likes_list: ["bobsmith", "dianam", "frankl"],
        dislikes_list: ["alice123", "gracew"],
        comments_list: [],
        date_created: new Date("2024-04-17"),
    },
];

export default postMockData