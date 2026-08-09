// Op shop data: one object per shop, each with location, hours and categories.
const shops = [{"id":"city-mission-barbadoes","name":"Christchurch City Mission Op Shop","address":"250 Barbadoes Street, Central City, Christchurch","hours":"Mon–Sat 10am–4pm","categories":["Charity","Clothing","Homewares","Furniture","Books"],"lat":-43.5248,"lng":172.6382,"source":"https://www.citymission.org.nz/op-shops"},{"id":"city-mission-sydenham","name":"Christchurch City Mission Op Shop – Sydenham","address":"63 Buchan Street, Sydenham, Christchurch","hours":"Mon–Sat 10am–4pm","categories":["Charity","Clothing","Vintage","Books","Homewares"],"lat":-43.5472,"lng":172.638,"source":"https://www.citymission.org.nz/op-shops"},{"id":"salvos-papanui","name":"Salvation Army Family Store – Papanui","address":"4 Restell Street, Papanui, Christchurch","hours":"Mon–Sat 9am–4:30pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5022,"lng":172.6034,"source":"https://www.salvationarmy.org.nz/location/papanui-family-store/"},{"id":"salvos-addington","name":"Salvation Army Family Store – Addington","address":"359 Lincoln Road, Addington, Christchurch","hours":"Mon–Sat 9am–5pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5486,"lng":172.596,"source":"https://www.salvationarmy.org.nz/location/addington-family-store/"},{"id":"salvos-linwood","name":"Salvation Army Family Store – Linwood","address":"173 Linwood Avenue, Linwood, Christchurch","hours":"Mon–Sat 9am–4:30pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5327,"lng":172.659,"source":"https://www.salvationarmy.org.nz/location/linwood-family-store/"},{"id":"salvos-riccarton","name":"Salvation Army Family Store – Riccarton","address":"359 Riccarton Road, Upper Riccarton, Christchurch","hours":"Mon–Fri 9:30am–5pm; Sat 9:30am–4:30pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5278,"lng":172.5675,"source":"https://www.salvationarmy.org.nz/location/riccarton-family-store/"},{"id":"salvos-hornby","name":"Salvation Army Family Store – Hornby","address":"1 Amyes Road, Hornby, Christchurch","hours":"Mon–Sat 9am–5pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.55,"lng":172.5295,"source":"https://www.salvationarmy.org.nz/location/hornby-family-store/"},{"id":"salvos-hornby-south","name":"Salvation Army Family Store – Hornby South","address":"1 Columbia Avenue, Hornby South, Christchurch","hours":"Mon–Fri 9am–4:30pm; Sat 9:30am–1:30pm","categories":["Charity","Clothing"],"lat":-43.5585,"lng":172.526,"source":"https://www.salvationarmy.org.nz/corps/hornby-community-ministries/"},{"id":"salvos-woolston","name":"Salvation Army Family Store – Woolston","address":"636 Ferry Road, Woolston, Christchurch","hours":"Mon–Sat 9am–5pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.55,"lng":172.6838,"source":"https://www.salvationarmy.org.nz/location/woolston-family-store/"},{"id":"salvos-aranui","name":"Salvation Army Family Store – Aranui","address":"34 Portsmouth Street, Aranui, Christchurch","hours":"Mon–Fri 10am–2pm; Sat closed","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.514,"lng":172.6815,"source":"https://www.salvationarmy.org.nz/location/aranui-family-store/"},{"id":"salvos-shirley","name":"Salvation Army Family Store – Shirley","address":"204 Hills Road, Shirley, Christchurch","hours":"Mon–Sat 9am–5pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5047,"lng":172.6507,"source":"https://www.salvationarmy.org.nz/location/shirley-family-store/"},{"id":"salvos-sydenham","name":"Salvation Army Family Store – Sydenham","address":"156 Carlyle Street, Sydenham, Christchurch","hours":"Mon–Sat 9am–4:30pm","categories":["Charity","Clothing","Furniture","Homewares","Books","Toys"],"lat":-43.5465,"lng":172.626,"source":"https://www.salvationarmy.org.nz/location/sydenham-family-store/"},{"id":"vinnies-stanmore","name":"Vinnies – Richmond","address":"265 Stanmore Road, Richmond, Christchurch","hours":"Mon–Fri 9am–4pm; Sat 10am–3pm","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5205,"lng":172.647,"source":"https://www.svdpcanterbury.nz/contact/"},{"id":"vinnies-papanui","name":"Vinnies – Papanui","address":"19 Langdons Road, Papanui, Christchurch","hours":"Mon–Fri 9am–4pm; Sat 10am–3pm","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5,"lng":172.599,"source":"https://www.svdpcanterbury.nz/contact/"},{"id":"vinnies-hornby","name":"Vinnies – Hornby","address":"31 Shands Road, Hornby, Christchurch","hours":"Mon–Fri 9am–4pm; Sat 10am–3pm","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5482,"lng":172.529,"source":"https://www.svdpcanterbury.nz/contact/"},{"id":"vinnies-manchester","name":"Vinnies Concept Store – Central City","address":"35 Manchester Street, Christchurch","hours":"Mon–Fri 10am–6pm; Sat 10am–3pm; Sun 11am–3pm","categories":["Charity","Clothing","Vintage","Homewares"],"lat":-43.527,"lng":172.6388,"source":"https://www.svdpcanterbury.nz/donate-goods/"},{"id":"spca-sydenham","name":"SPCA Op Shop – Furniture & Homeware","address":"428 Colombo Street, Sydenham, Christchurch","hours":"Daily 9am–5pm","categories":["Charity","Furniture","Homewares"],"lat":-43.5485,"lng":172.625,"source":"https://www.spca.nz/opshops/sydenham-op-shop-furniture-homeware"},{"id":"dogwatch","name":"Dogwatch Variety Shop","address":"90 Beresford Street, New Brighton, Christchurch","hours":"Mon–Sat 10am–3pm","categories":["Charity","Clothing","Books","Homewares","Miscellaneous"],"lat":-43.507,"lng":172.725,"source":"https://dogwatch.co.nz/support-us/dogwatch-variety-shop/"},{"id":"habitat-restore","name":"Habitat for Humanity ReStore – Sydenham","address":"189 Waltham Road, Sydenham, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Furniture","Homewares","Building"],"lat":-43.546,"lng":172.6285,"source":"https://www.habitat.org.nz/restore"},{"id":"paperbag-princess-st-asaph","name":"Paperbag Princess","address":"255 St Asaph Street, Christchurch Central, Christchurch","hours":"Mon–Tue 10am–5pm, Wed–Sat 10am–5:30pm, Sun 11am–4pm","categories":["Clothing","Vintage"],"lat":-43.5361,"lng":172.6407,"source":"https://www.paperbagprincess.co.nz/stores"},{"id":"booteek-st-asaph","name":"Booteek","address":"266 St Asaph Street, Christchurch Central, Christchurch","hours":"Mon–Sat 10am–4pm, Sun 11am–3pm","categories":["Clothing","Vintage"],"lat":-43.5364,"lng":172.6415,"source":"https://evendo.com/locations/new-zealand/christchurch/shop/booteek"},{"id":"recycle-boutique-high-st","name":"Recycle Boutique","address":"248 High Street, Christchurch Central, Christchurch","hours":"Mon–Wed 10am–5:30pm, Thu–Fri 10am–6pm, Sat–Sun 10am–5pm","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.5326,"lng":172.6378,"source":"https://www.recycleboutique.co.nz/stores/christchurch-city"},{"id":"nifty-cashel-st","name":"Nifty","address":"306 Cashel Street, Christchurch Central, Christchurch","hours":"Tue–Fri 10am–5:30pm, Sat 10am–5pm, Sun 11am–4pm, closed Mon","categories":["Clothing","Vintage"],"lat":-43.5332,"lng":172.6477,"source":"https://niftymarkets.co.nz/"},{"id":"curb-cashel-st","name":"Curb","address":"118 Cashel Street, Christchurch Central, Christchurch","hours":"Check current hours before visiting","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.5334,"lng":172.6353,"source":"https://www.curb.co.nz/pages/contact-us"},{"id":"flourish-colombo-st","name":"Flourish","address":"445 Colombo Street, Sydenham, Christchurch","hours":"Mon–Fri 9:30am–4pm, Sat 10am–2pm, closed Sun","categories":["Charity","Clothing","Toys"],"lat":-43.5435,"lng":172.6365,"source":"https://opshops.co/op-shops/flourish-op-shop/"},{"id":"savemart-battersea-st","name":"SaveMart","address":"39 Battersea Street, Sydenham, Christchurch","hours":"Tue–Sun 10am–4pm, closed Mon","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.5434,"lng":172.6353,"source":"https://www.savemart.co.nz/locations"},{"id":"style-me-selwyn-st","name":"Style Me","address":"304 Selwyn Street, Spreydon, Christchurch","hours":"Mon–Fri 10am–5pm, Sat 10am–4pm, closed Sun","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.5487,"lng":172.622,"source":"https://treasurehunting.co.nz/listing/style-me/"},{"id":"red-cross-manchester-st","name":"Red Cross Shop","address":"334 Manchester Street, Christchurch Central, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Clothing","Homewares","Furniture"],"lat":-43.5224,"lng":172.6399,"source":"https://charityshopsnz.one/canterbury/charity-shops-christchurch/red-cross-shop-christchurch-manchester-street/"},{"id":"st-john-durham-st","name":"St John Opportunity Shop","address":"180 Durham Street South, Christchurch Central, Christchurch","hours":"Mon–Fri 9:30am–4:30pm, closed Sat–Sun","categories":["Charity","Clothing","Books","Miscellaneous"],"lat":-43.5372,"lng":172.6339,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-durham-street/"},{"id":"st-john-colombo-st","name":"St John Opportunity Shop","address":"300 Colombo Street, Sydenham, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5494,"lng":172.6373,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-sydenham/"},{"id":"nurse-maude-colombo-st","name":"Nurse Maude Hospice Shop","address":"147 Colombo Street, Beckenham, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.557,"lng":172.6367,"source":"https://www.nursemaude.org.nz/contact-us"},{"id":"red-cross-hornby","name":"Red Cross Shop – Hornby","address":"Shop 3, 1 Amyes Road, Hornby, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5449,"lng":172.5257,"source":"https://charityshopsnz.one/canterbury/charity-shops-selwyn-district/red-cross-shop-hornby/"},{"id":"spca-hornby","name":"SPCA Op Shop – Hornby","address":"Shop 4, 1 Amyes Road, Hornby, Christchurch","hours":"Mon–Sun 9am–5pm","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5449,"lng":172.5257,"source":"https://www.spca.nz/opshops/hornby-op-shop"},{"id":"savemart-hornby","name":"SaveMart – Hornby","address":"94 Shands Road, Hornby South, Christchurch","hours":"Check current hours before visiting","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.5498,"lng":172.5177,"source":"https://opshopdirectory.co.nz/savemart-hornby/","notes":"Coordinates approximate — house number differs slightly between map data and business listings."},{"id":"spca-riccarton","name":"SPCA Op Shop – Riccarton","address":"52 Acheron Drive, Riccarton, Christchurch","hours":"Mon–Sun 9am–5pm","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5393,"lng":172.5856,"source":"https://www.spca.nz/opshops/riccarton-op-shop"},{"id":"st-john-lincoln-rd","name":"St John Opportunity Shop – Lincoln Road","address":"272 Lincoln Road, Addington, Christchurch","hours":"Mon–Fri 9am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares","Books"],"lat":-43.5445,"lng":172.6104,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-addington/","notes":"Officially St John's Addington store, on Lincoln Road."},{"id":"window-of-opportunity-dallington","name":"Window of Opportunity","address":"148 Gayhurst Road, Dallington, Christchurch","hours":"Wed–Fri 10am–2pm, Sat 10am–1pm, closed Sun–Tue","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5139,"lng":172.6742,"source":"https://www.instagram.com/window_of_opportunity_opshop/"},{"id":"red-cross-woolston","name":"Red Cross Shop – Woolston","address":"6/8 Portman Street, Woolston, Christchurch","hours":"Mon–Fri 9am–5pm, Sat 10am–4pm, Sun 10am–3pm","categories":["Charity","Clothing","Homewares","Furniture"],"lat":-43.5484,"lng":172.6822,"source":"https://opshopdirectory.co.nz/red-cross-shop-christchurch-woolston/"},{"id":"spca-linwood","name":"SPCA Op Shop – Linwood","address":"244 Linwood Avenue, Linwood, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Clothing","Homewares","Toys"],"lat":-43.5339,"lng":172.6732,"source":"https://www.spca.nz/opshops/linwood-op-shop"},{"id":"st-john-edgeware","name":"St John Opportunity Shop – Edgeware","address":"74 Edgeware Road, St Albans, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares"],"lat":-43.5136,"lng":172.6379,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-edgeware/"},{"id":"st-john-ferry-road","name":"St John Opportunity Shop – Ferry Road","address":"375 Ferry Road, Waltham, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares"],"lat":-43.5424,"lng":172.6651,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-ferry-road/"},{"id":"to-be-continued-ferrymead","name":"To Be Continued Preloved Clothing","address":"1027 Ferry Road, Ferrymead, Christchurch","hours":"Wed–Fri 10am–4pm, Sat–Sun 10am–5pm, closed Mon–Tue in winter","categories":["Clothing","Vintage"],"lat":-43.5576,"lng":172.7039,"source":"https://tobecontinuedpreloved.com/"},{"id":"woolston-emporium","name":"The Woolston Emporium","address":"200 Ensors Road, Woolston, Christchurch","hours":"Thu–Sun 10am–4pm, closed Mon–Wed","categories":["Vintage","Furniture","Homewares","Miscellaneous"],"lat":-43.5434,"lng":172.6655,"source":"https://www.thewoolstonemporium.co.nz/"},{"id":"junk-and-disorderly-woolston","name":"Junk & Disorderly","address":"200 Ensors Road, Woolston, Christchurch","hours":"Wed–Sun 10am–4pm, closed Mon–Tue","categories":["Furniture","Homewares","Vintage"],"lat":-43.5434,"lng":172.6655,"source":"https://www.wisemove.co.nz/post/the-best-furniture-and-home-decor-stores-in-christchurch","notes":"Shares the same building as The Woolston Emporium."},{"id":"recycle-boutique-tannery","name":"Recycle Boutique – The Tannery","address":"3 Garlands Road, Woolston, Christchurch","hours":"Mon–Fri 9:30am–5:30pm, Sat–Sun 10am–5pm","categories":["Clothing","Vintage"],"lat":-43.5576,"lng":172.6803,"source":"https://thetannery.co.nz/stores/fashion/recycle-boutique/"},{"id":"time-and-time-again-sumner","name":"Time and Time Again","address":"Shop 2/43 Nayland Street, Sumner, Christchurch","hours":"Open 7 days, 10am–5pm","categories":["Clothing","Vintage"],"lat":-43.5698,"lng":172.7598,"source":"https://timeandtimeagain.nz/"},{"id":"nurse-maude-sumner","name":"Nurse Maude Hospice Shop – Sumner","address":"25C Marriner Street, Sumner, Christchurch","hours":"Daily 9:30am–5pm","categories":["Charity","Clothing","Homewares"],"lat":-43.5678,"lng":172.7582,"source":"https://www.facebook.com/NurseMaudeHospiceShop/","notes":"Coordinates approximate — geocoder resolved the street, not the exact address."},{"id":"toffs-ferrymead","name":"Toffs","address":"7 Settlers Crescent, Ferrymead, Christchurch","hours":"Mon–Sat 9am–6pm, closed Sun","categories":["Clothing"],"lat":-43.559,"lng":172.7051,"source":"https://yellow.co.nz/y/toffs-ferrymead"},{"id":"lyttelton-garage-sale","name":"The Garage Sale (Lyttelton)","address":"54A Oxford Street, Lyttelton, Christchurch","hours":"Wed–Fri 10am–4pm, Sat 10:30am–1pm, closed Sun–Tue","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.6016,"lng":172.7236,"source":"https://www.lyttelton.net.nz/garage-sales"},{"id":"london-street-vintage-lyttelton","name":"London Street Vintage","address":"31 London Street, Lyttelton, Christchurch","hours":"Daily 10am–4pm","categories":["Vintage","Clothing","Miscellaneous"],"lat":-43.6027,"lng":172.7212,"source":"https://www.lytteltoninfocentre.nz/london-street-vintage-clothing-more"},{"id":"thrive-ilam","name":"Thrive Op Shop (Christchurch City Mission)","address":"405 Ilam Road, Bryndwr, Christchurch","hours":"Mon–Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5089,"lng":172.5894,"source":"https://opshopdirectory.co.nz/thrive-op-shop-christchurch-city-mission-bryndwr/"},{"id":"st-john-ilam","name":"St John Opportunity Shop – Ilam Road","address":"407 Ilam Road, Bryndwr, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5089,"lng":172.5894,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-fendalton/"},{"id":"savemart-cranford","name":"SaveMart – Cranford Street","address":"472 Cranford Street, Redwood, Christchurch","hours":"Tue–Sun 10am–4pm, closed Mon","categories":["Clothing","Vintage","Miscellaneous"],"lat":-43.4896,"lng":172.6236,"source":"https://opshopdirectory.co.nz/savemart-papanui/"},{"id":"paperbag-princess-waimairi","name":"Paperbag Princess","address":"203A Waimairi Road, Ilam, Christchurch","hours":"Mon–Fri 10am–5pm, Sat 9:30am–3pm, closed Sun","categories":["Clothing","Vintage"],"lat":-43.5166,"lng":172.5717,"source":"https://www.paperbagprincess.co.nz/stores"},{"id":"nurse-maude-papanui-rd","name":"Nurse Maude Hospice Shop – Papanui Road","address":"186 Papanui Road, Merivale, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat–Sun 10am–4pm","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.5124,"lng":172.6223,"source":"https://treasurehunting.co.nz/listing/nurse-maude-hospice-shop-merivale/"},{"id":"spca-main-north-rd","name":"SPCA Op Shop – Main North Road","address":"30 Main North Road, Papanui, Christchurch","hours":"Check current hours before visiting","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.4955,"lng":172.6089,"source":"https://www.spca.nz/opshops/papanui-op-shop"},{"id":"st-john-main-north-rd","name":"St John Opportunity Shop – Main North Road","address":"43 Main North Road, Papanui, Christchurch","hours":"Mon–Fri 9:30am–5pm, Sat 10am–4pm, closed Sun","categories":["Charity","Clothing","Homewares","Miscellaneous"],"lat":-43.4949,"lng":172.6089,"source":"https://www.stjohn.org.nz/shop/retail-stores/christchurch-papanui/"},{"id":"to-be-continued-merivale","name":"To Be Continued Preloved","address":"182 Papanui Road, Merivale, Christchurch","hours":"Mon–Fri 9:30am–5:30pm, Sat 9:30am–5pm, Sun 10am–3pm","categories":["Clothing","Vintage"],"lat":-43.5127,"lng":172.6224,"source":"https://tobecontinuedpreloved.com/","notes":"Relocated here from a former Bryndwr Road address."},{"id":"silver-boutique-bishopdale","name":"Silver Boutique","address":"Shop 11C, Bishopdale Court, Bishopdale Mall, Bishopdale, Christchurch","hours":"Mon–Fri 10am–4:30pm, Sat 10am–4pm, closed Sun","categories":["Clothing","Toys","Homewares","Books"],"lat":-43.4898,"lng":172.5868,"source":"https://www.neighbourly.co.nz/business/silver-boutique"},{"id":"my-favourite-things-bishopdale","name":"My Favourite Things","address":"Shop 17D, Bishopdale Court, Bishopdale Mall, Bishopdale, Christchurch","hours":"Check current hours before visiting","categories":["Clothing","Homewares","Miscellaneous"],"lat":-43.4894,"lng":172.5868,"source":"https://myfavthings.co.nz/"}];

// Day abbreviations in week order. This order matches Date.getDay(),
// where Sunday = 0, so it can also be used to look up "today".
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_TOKEN = /(Sun|Mon|Tue|Wed|Thu|Fri|Sat)/;

// Turn a free-text hours string (e.g. "Mon–Fri 9am–4:30pm; Sat 10am–3pm")
// into an array of the day abbreviations a shop is open on.
function parseOpenDays(hoursText) {
    if (/daily/i.test(hoursText)) {
        return [...WEEKDAYS];
    }

    const openDays = [];

    // Shops can list several clauses separated by semicolons,
    // e.g. "Mon–Fri 9am–4:30pm; Sat 10am–3pm; Sun 11am–3pm".
    const clauses = hoursText.split(';');

    clauses.forEach(clause => {
        // Skip clauses that explicitly say a day is closed.
        if (/closed/i.test(clause)) return;

        const rangePattern = new RegExp(DAY_TOKEN.source + '\\s*[–-]\\s*' + DAY_TOKEN.source);
        const rangeMatch = clause.match(rangePattern);

        if (rangeMatch) {
            const start = WEEKDAYS.indexOf(rangeMatch[1]);
            const end = WEEKDAYS.indexOf(rangeMatch[2]);

            // Step through the range day by day. The % 7 wraps the index
            // back to Sunday in case a range ever crosses the end of the week.
            for (let i = start; i !== end; i = (i + 1) % 7) {
                openDays.push(WEEKDAYS[i]);
            }
            openDays.push(WEEKDAYS[end]);
        } else {
            const singleMatch = clause.match(DAY_TOKEN);
            if (singleMatch) openDays.push(singleMatch[1]);
        }
    });

    // Remove any duplicate days picked up across clauses.
    return [...new Set(openDays)];
}

// Work out each shop's open days once up front, rather than
// re-parsing the hours text every time the filters are applied.
shops.forEach(shop => {
    shop.openDays = parseOpenDays(shop.hours);
});

const todayAbbrev = WEEKDAYS[new Date().getDay()];

const map = L.map('map').setView([-43.532, 172.636], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const dayFilter = document.getElementById('dayFilter');
const todayButton = document.getElementById('todayButton');
const resetButton = document.getElementById('resetButton');
const shopList = document.getElementById('shopList');
const count = document.getElementById('count');

// Build the HTML shown inside a marker's popup when it's clicked on the map.
function createPopup(shop) {
    const tags = shop.categories
        .map(category => `<span class="badge">${category}</span>`)
        .join('');

    const directions =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`;

    return `<div>
        <h3>${shop.name}</h3>
        <p><strong>Address:</strong> ${shop.address}</p>
        <p><strong>Hours:</strong> ${shop.hours}</p>
        <div>${tags}</div>
        <p>
            <a href="${directions}" target="_blank" rel="noopener">Get directions</a>
            &nbsp;|&nbsp;
            <a href="${shop.source}" target="_blank" rel="noopener">Visit website</a>
        </p>
    </div>`;
}

// Re-reads the search box, category filter and day filter, then rebuilds
// the map markers and shop list to match. Called on load and on every
// filter change, so it's the single source of truth for what's visible.
function renderShops() {
    markerLayer.clearLayers();
    shopList.innerHTML = '';

    const search = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const day = dayFilter.value;
    let visible = 0;

    shops.forEach(shop => {
        const searchable =
            (shop.name + ' ' + shop.address + ' ' + shop.categories.join(' ')).toLowerCase();

        const matchesSearch = searchable.includes(search);
        const matchesCategory =
            category === 'all' || shop.categories.includes(category);
        const matchesDay =
            day === 'all' || shop.openDays.includes(day);

        if (matchesSearch && matchesCategory && matchesDay) {
            visible++;

            const marker = L.marker([shop.lat, shop.lng]).addTo(markerLayer);
            marker.bindPopup(createPopup(shop));

            const card = document.createElement('article');
            card.className = 'shop-card';

            const openTodayBadge = shop.openDays.includes(todayAbbrev)
                ? '<span class="badge badge-today">Open today</span>'
                : '';

            card.innerHTML = `
                <h3>${shop.name}</h3>
                <p>${shop.address}</p>
                <p><strong>${shop.hours}</strong></p>
                <div>${openTodayBadge}${
                    shop.categories
                        .map(c => `<span class="badge">${c}</span>`)
                        .join('')
                }</div>
            `;

            card.addEventListener('click', () => {
                map.flyTo([shop.lat, shop.lng], 15);
                marker.openPopup();
            });

            shopList.appendChild(card);
        }
    });

    count.textContent = `${visible} of ${shops.length} shops`;
}

searchInput.addEventListener('input', renderShops);
categoryFilter.addEventListener('change', renderShops);
dayFilter.addEventListener('change', renderShops);

todayButton.addEventListener('click', () => {
    dayFilter.value = todayAbbrev;
    renderShops();
});

resetButton.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    dayFilter.value = 'all';
    renderShops();
    map.setView([-43.532, 172.636], 12);
});

renderShops();

// Suggest-a-shop form: validates the required fields, then hands the
// details off as a pre-filled email rather than a real database, since
// this is a static site with no backend to store submissions in.
const SUBMISSION_EMAIL = 'fakeemail123'; // TODO: replace with the address you want suggestions sent to

const suggestForm = document.getElementById('suggestForm');
const suggestStatus = document.getElementById('suggestStatus');
const emailPattern = /^\S+@\S+\.\S+$/;

function showFieldError(fieldId, message) {
    const errorEl = document.querySelector(`[data-error-for="${fieldId}"]`);
    if (errorEl) errorEl.textContent = message;
}

function clearFieldErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
}

suggestForm.addEventListener('submit', event => {
    event.preventDefault();
    clearFieldErrors();
    suggestStatus.textContent = '';

    const name = document.getElementById('suggestName').value.trim();
    const address = document.getElementById('suggestAddress').value.trim();
    const category = document.getElementById('suggestCategory').value;
    const email = document.getElementById('suggestEmail').value.trim();
    const notes = document.getElementById('suggestNotes').value.trim();

    let hasError = false;

    if (name === '') {
        showFieldError('suggestName', 'Please enter the shop name.');
        hasError = true;
    }
    if (address === '') {
        showFieldError('suggestAddress', 'Please enter an address or suburb.');
        hasError = true;
    }
    // A simple check for "something@something.something" rather than a full
    // email spec — good enough to catch obvious typos without being fussy.
    if (email !== '' && !emailPattern.test(email)) {
        showFieldError('suggestEmail', "That doesn't look like a valid email.");
        hasError = true;
    }

    if (hasError) return;

    const subject = `Op shop suggestion: ${name}`;
    const body = [
        `Shop name: ${name}`,
        `Address/suburb: ${address}`,
        `Category: ${category || 'Not sure'}`,
        `Notes: ${notes || 'None'}`,
        `Submitted by: ${email || 'Not provided'}`
    ].join('\n');

    window.location.href =
        `mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    suggestForm.reset();
    suggestStatus.textContent = "Thanks! Your suggestion has been opened in your email app — send it through and we'll take a look.";
});
