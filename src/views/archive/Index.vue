<template>
    <index-layout>
        <section class="archive">
            <div class="frm-cntnr">
                <div class="page-title animate-up">
                    <h1>Archive</h1>
                </div>
                <div class="page-desc">
                    <h5 class="clr--primary font-2 animate-up">A big list of things I’ve worked on</h5>
                </div>
                <div class="page-table">
                    <table>
                        <thead class="animate-up">
                            <tr>
                                <th>Year</th>
                                <th>Title</th>
                                <th>Made at</th>
                                <th>Built With</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item, index in projects.slice().reverse()" :key="index" class="animate-up">
                                <td>{{ item.year }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.company }}</td>
                                <td>{{ item.tech }}</td>
                                <td><a :href="item.link" title="">
                                        <img src="/src/assets/images/link.svg" alt="link">
                                    </a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </index-layout>
</template>
<script lang="ts" setup>
import IndexLayout from '../../components/Layouts/IndexLayout.vue';
import { ref } from 'vue';
const projects = ref([
    {
        "id": 1,
        "title": "Speed Seven",
        "description": "A website that is created for the  #1 Auto Dealership and Service Center of Imported Luxury Vehicles, Bulletproof Vehicles, & Imported Spare Parts in the Philippines!",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2019,
        "link": "https://speedseven.com.ph"
    },
    {
        "id": 2,
        "title": "Nexus Orion Page and Revisions",
        "description": "Sub page for Nexus website - Innovate and Transform your business. Orion Managed Services will help you enable your business with our Managed IT Services",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2019,
        "link": "https://nexustech.com.ph/services/orion-managed-services/"
    },
    {
        "id": 3,
        "title": "Zkteco New Features and Tech Support",
        "description": "Zkteco New Features and Tech Support",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "http://bio.mysolutions.ph/"
    },
    {
        "id": 4,
        "title": "Bergs",
        "description": "A website for BERGS which stands for the initials of the pioneers who built and own the three (3) operating companies. The companies are composed of all Filipino talents in power generation, the first of its kind in the country today. Together, the 3 companies are envisioned as “ONE STOP SHOP FOR RELIABLE POWER GENERATION”, offering both technical and non-technical expertise to clients in the power generation sector.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "https://bergsph.com/"
    },
    {
        "id": 5,
        "title": "Modernbrandsinc - Policy Privacy",
        "description": "Privacy Policy page for modern brands",
        "company": "Praxxys",
        "tech": "Silverstripe",
        "year": 2019,
        "link": "https://www.modernbrandsinc.com/privacy-policy"
    },
    {
        "id": 6,
        "title": "Corporate Vision - Policy Privacy",
        "description": "Privacy policy page for corporate vision",
        "company": "Praxxys",
        "tech": "Silverstripe",
        "year": 2019,
        "link": "https://corporatevisions.com.ph/privacy-policy"
    },
    {
        "id": 7,
        "title": "Purificacion",
        "description": "A Website for Purificacion Orchids and it was established 1986 by Corazon C. Purificacion with the objective of providing quality orchids to consumers at affordable prices.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "https://purificacionorchidsph.com"
    },
    {
        "id": 8,
        "title": "Nezda",
        "description": "A website for Nezda, one of the top recruitment companies in the Philippines and across Southeast Asia, Nezda has been bridging qualified talents to more than 200 global industry partners since 2014.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "https://nezdaglobal.com/"
    },
    {
        "id": 9,
        "title": "Huddle-room",
        "description": "A website for Huddle-room, a place where creative minds gather together to share ideas, where unique perspectives are brought to life, a place where all sides and channels are synergized to deliver communications that impact.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · Scrolify",
        "year": 2019,
        "link": "https://huddleroom.com.ph/"
    },
    {
        "id": 10,
        "title": "CSM-Publishing",
        "description": "A Website for Church Strengthening Ministry, Inc. (CSM Publishing) and it is a non-stock, non-profit organization that develops, publishes, promotes and distributes excellent yet affordable resources, and organizes training events and seminars for God’s people to reach today’s world.",
        "company": "Praxxys",
        "tech": "Laravel · VueJS",
        "year": 2019,
        "link": "https://csm-publishing.com/"
    },
    {
        "id": 11,
        "title": "BISMAC",
        "description": "A website for Business Machines Corporation or BISMAC and is founded in 1957 is the most established integrated office, retail and bank equipment distributor in the Philippines.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "https://bismac.com.ph/"
    },
    {
        "id": 12,
        "title": "Technolux",
        "description": "A website for TECHNOLUX and is acknowledged as the country’s largest importer and supplier of a complete line of foodservice, small wares and laundry equipment for over 41 years. The Philippines’ major players in the food and hospitality industry are clients of Technolux who continue to patronize  the company’s wide range of quality equipment from all over the world.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript",
        "year": 2019,
        "link": "https://technolux.net/"
    },
    {
        "id": 13,
        "title": "Furniture Manila : Mobile App",
        "description": "A Mobile App for Furtinure Manila",
        "company": "Praxxys",
        "tech": "Cordova · Vuetify",
        "year": 2019,
        "link": "https://play.google.com/store/apps/details?id=com.praxxys.fmnl&hl=en_US&gl=US"
    },
    {
        "id": 14,
        "title": "VivaCite",
        "description": "A website for Vivacite",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2019,
        "link": "https://vivaciteph.com/"
    },
    {
        "id": 15,
        "title": "Airtropolis",
        "description": "A website for Airtropolis Conslidators Phils., Inc. and is a privately-owned business established on May 15, 1997 specializing in shipping and airfreight business industry. We are Operating from a combined office in major trade cities in the Philippines and Abroad.",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2019,
        "link": "https://www.airtropolisphp.com/"
    },
    {
        "id": 16,
        "title": "First Philec",
        "description": "A website for FIRST PHILEC and is the country’s leader in providing electrical distribution equipment and co-created solutions in the Philippines, with over 250,000 installations nationwide.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2019,
        "link": "https://firstphilec.com"
    },
    {
        "id": 17,
        "title": "Kolin",
        "description": "A website for KOLIN and prides itself as one of the country’s prominent air conditioning company— committed to providing high quality home appliances and services at reasonable prices.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2019,
        "link": "https://www.kolinphil.com.ph/about-kolin/"
    },
    {
        "id": 18,
        "title": "Ultimate Freight",
        "description": "A webiste for ULTIMATE FREIGHT LOGISTICS, INC. (UFLI) which delivers all your logistics needs! The company was established in May 08, 2009. UFLI was pioneered to bring competitive advantages and value to its customers, both local and foreign. Our end-to-end logistics solutions with high quality service and cost efficient specialized logistics is our company’s advantage.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2019,
        "link": "https://ultimatefrt.com/about-us/"
    },
    {
        "id": 19,
        "title": "Vista Land",
        "description": "A website for Vista Land & Lifescapes, Inc. and is one of the leading integrated property developers in the Philippines and the largest homebuilder in the country overall.",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2019,
        "link": "https://www.vistaland.com.ph/"
    },
    {
        "id": 20,
        "title": "Unilab Sla",
        "description": "A website for STEM Leadership Alliance-Philippines (SLA-PH) is a broad coalition of industry leaders, educators, government, development partners, non-profit organizations, and corporate foundations committed to help strengthen integrated STEM education in the Philippines.",
        "company": "Praxxys",
        "tech": "Laravel · VueJS · PHP",
        "year": 2020,
        "link": "https://stemleadershipalliance.ph/"
    },
    {
        "id": 21,
        "title": "Admerex Solutions, Inc",
        "description": "A website for Admerex Solutions, Inc and is an outsourcing company located at the heart of Manila and Cebu that provides a vast network of services to various business partners of notable brand and recognition.",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2020,
        "link": "https://admerexsolutions.com/"
    },
    {
        "id": 22,
        "title": "CLLB Law Firm",
        "description": "A website for CLLBLAW which has molded itself into one of the best and highly chosen law firms in the country, catering to a wide range of clientele and handling issues encompassing various fields of law.",
        "company": "Praxxys",
        "tech": "Silverstripe · VueJS · PHP",
        "year": 2020,
        "link": "https://cllblaw.com/"
    },
    {
        "id": 23,
        "title": "Yello PH",
        "description": "A website for Yello which is a smart purchase system that will be your personal purchasing assistant. All products are mainly for construction.",
        "company": "Praxxys",
        "tech": "Laravel · VueJS · PHP",
        "year": 2020,
        "link": "https://www.yelloph.com/"
    },
    {
        "id": 24,
        "title": "NEO Office",
        "description": "A website for NEO and is the owner, developer and manager of the Philippines’ top certified green buildings located in the central business district Bonifacio Global City.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2021,
        "link": "https://www.neooffice.ph/"
    },
    {
        "id": 25,
        "title": "McCare Global",
        "description": "A website for McCare Global Healthcare Services, Inc. A nursing placement agency that sends nurses (RN & LPN) to different healthcare agencies in Canada.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2021,
        "link": "https://www.mccareglobal.com/"
    },
    {
        "id": 26,
        "title": "Global Process Manager Inc.",
        "description": "A webiste for GPM which provides end-to-end business solutions through process improvement and optimization matched with the proper application of technology.",
        "company": "Praxxys",
        "tech": "Silverstripe · Javascript · PHP",
        "year": 2021,
        "link": "https://gpm-drafts.praxxys.ph/"
    },
    {
        "id": 27,
        "title": "Nexus",
        "description": "Nexus is a prominent force in the information technology industry in the Philippines, having carved a niche as the systems integrator and corporate IT reseller of choice of a number of the country's top corporations",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://nexustech.com.ph/"
    },
    {
        "id": 28,
        "title": "The Abbas Orchard",
        "description": "From the very start, the Abba's Orchard School has provided environments that have been prepared to bring out the best in your child.",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://www.theabbasorchard.com/"
    },
    {
        "id": 29,
        "title": "FooDee",
        "description": "FooDee Global Concepts is one of Philippine’s leading and largest multi-brand, lifestyle F&B groups and home of well-loved restaurants.",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://foodeeglobal.ph/"
    },
    {
        "id": 30,
        "title": "My Lovely Writer",
        "description": "Binge-read the most beloved series. Over a million words, seven books, and side stories!",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://mylovelywriter.co/home"
    },
    {
        "id": 31,
        "title": "Salem PH",
        "description": "Salem is the leading mattress manufacturer in the Philippines. Our goal is to have a Salem bed in every Filipino home, and we're proud to say that we're getting there.",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://salem.ph/"
    },
    {
        "id": 32,
        "title": "Mapua",
        "description": "Mapúa is a topnotch, globally recognized University. In 2022, it has realized its vision of becoming one of the best universities in the world, placing 1501+ in the Times Higher Education (THE) World University Rankings 2023.",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://www.mapua.edu.ph/"
    },
    {
        "id": 33,
        "title": "De La Salle Lipa",
        "description": "De La Salle Lipa is a private non-profit higher educational institution established in 1911 by the Brothers of the Christian Schools (FSC).",
        "company": "Praxxys",
        "tech": "Vue 3 · Laravel · TailwindCSS",
        "year": 2023,
        "link": "https://www.dlsl.edu.ph/"
    },
])
</script>