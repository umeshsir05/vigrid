// Bilingual dictionary: English (default) and Hindi
const translations = {
    en: {
        // navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_products: "Products",
        nav_contact: "Contact",
        // hero
        hero_highlight: "Light Today",
        hero_future: ", Bright Future.",
        hero_desc: "We provide innovative and sustainable solar solutions that empower rural families and build a brighter tomorrow.",
        explore_btn: "EXPLORE MORE",
        kit_badge: "7-in-1 Solar Home Kit for Rural India",
        hero_energy: "⚡ Clean Energy for Every Home",
        // pillars
        pillar1_title: "INNOVATION",
        pillar1_desc: "Creative solutions for a better tomorrow.",
        pillar2_title: "RELIABILITY",
        pillar2_desc: "Trusted by clients, delivering excellence.",
        pillar3_title: "TEAMWORK",
        pillar3_desc: "Together, we build stronger futures.",
        pillar4_title: "SUSTAINABILITY",
        pillar4_desc: "Committed to a cleaner, brighter future.",
        // one kit
        onekit_title: "ONE KIT, COMPLETE SOLUTION",
        onekit_sub: "Lighting, charging, fan, entertainment and safety – everything in one solar kit.",
        kit_led: "LED Lights",
        kit_charge: "Phone Charging",
        kit_fan: "Energy Fan",
        kit_digital: "Digital Access",
        kit_safety: "Safety Alarm",
        discover_btn: "DISCOVER OUR KIT",
        plug_play: "Plug & Play Solar Home System",
        // impact
        impact_title: "OUR IMPACT",
        stat1: "Villages Electrified",
        stat2: "Families Empowered",
        stat3: "Tons of CO₂ Saved",
        stat4: "Children’s Education Supported",
        // founder
        founder_quote: "“Seeing the power problems in villages, I dreamed of a solution that brings light, safety and happiness to every home. That’s how VIGRID was born.”",
        founder_name: "— VIVEK KUMAR, Founder, VIGRID",
        // footer
        footer_quick: "QUICK LINKS",
        footer_home: "Home",
        footer_about: "About Us",
        footer_products: "Products",
        footer_contact: "Contact",
        footer_reg: "REGISTRATION",
        footer_reg_label: "LOVYAM REGISTRATION NUMBER",
        footer_tagline: "Light Today, Bright Future.",
        footer_newsletter: "NEWSLETTER",
        newsletter_desc: "Subscribe to get the latest updates and news from VIGRID.",
        subscribe_btn: "SUBSCRIBE",
        copyright_text: "© 2024 VIGRID. All rights reserved. | Empowering rural India with clean energy"
    },
    hi: {
        // navigation
        nav_home: "होम",
        nav_about: "हमारे बारे में",
        nav_products: "उत्पाद",
        nav_contact: "संपर्क करें",
        // hero
        hero_highlight: "आज रोशनी",
        hero_future: ", उज्ज्वल भविष्य।",
        hero_desc: "हम नवीन और टिकाऊ सौर समाधान प्रदान करते हैं जो ग्रामीण परिवारों को सशक्त बनाते हैं और एक उज्जवल कल का निर्माण करते हैं।",
        explore_btn: "और जानें",
        kit_badge: "ग्रामीण भारत के लिए 7-इन-1 सोलर होम किट",
        hero_energy: "⚡ हर घर के लिए स्वच्छ ऊर्जा",
        // pillars
        pillar1_title: "नवाचार",
        pillar1_desc: "बेहतर कल के लिए रचनात्मक समाधान।",
        pillar2_title: "विश्वसनीयता",
        pillar2_desc: "ग्राहकों द्वारा विश्वसनीय, उत्कृष्टता प्रदान करना।",
        pillar3_title: "टीम भावना",
        pillar3_desc: "मिलकर, हम मजबूत भविष्य का निर्माण करते हैं।",
        pillar4_title: "स्थिरता",
        pillar4_desc: "स्वच्छ, उज्जवल भविष्य के लिए प्रतिबद्ध।",
        // one kit
        onekit_title: "एक किट, संपूर्ण समाधान",
        onekit_sub: "लाइटिंग, चार्जिंग, पंखा, मनोरंजन और सुरक्षा – सब कुछ एक सोलर किट में।",
        kit_led: "एलईडी लाइटें",
        kit_charge: "फोन चार्जिंग",
        kit_fan: "एनर्जी फैन",
        kit_digital: "डिजिटल एक्सेस",
        kit_safety: "सेफ्टी अलार्म",
        discover_btn: "हमारी किट देखें",
        plug_play: "प्लग एंड प्ले सोलर होम सिस्टम",
        // impact
        impact_title: "हमारा प्रभाव",
        stat1: "गाँव विद्युतीकृत",
        stat2: "परिवार सशक्त",
        stat3: "टन CO₂ बचत",
        stat4: "बच्चों की शिक्षा समर्थित",
        // founder
        founder_quote: "“गाँवों में बिजली की समस्याओं को देखकर, मैंने एक ऐसे समाधान का सपना देखा जो हर घर में रोशनी, सुरक्षा और खुशियाँ लाए। इसी तरह VIGRID का जन्म हुआ।”",
        founder_name: "— विवेक कुमार, संस्थापक, विग्रिड",
        // footer
        footer_quick: "त्वरित लिंक",
        footer_home: "होम",
        footer_about: "हमारे बारे में",
        footer_products: "उत्पाद",
        footer_contact: "संपर्क करें",
        footer_reg: "पंजीकरण",
        footer_reg_label: "लोव्याम पंजीकरण संख्या",
        footer_tagline: "आज रोशनी, उज्ज्वल भविष्य।",
        footer_newsletter: "न्यूज़लेटर",
        newsletter_desc: "विग्रिड से नवीनतम अपडेट और समाचार पाने के लिए सदस्यता लें।",
        subscribe_btn: "सदस्यता लें",
        copyright_text: "© 2024 विग्रिड. सर्वाधिकार सुरक्षित। | स्वच्छ ऊर्जा से ग्रामीण भारत को सशक्त बनाना"
    }
};

let currentLang = 'en';  // default English

function updateLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // preserve inner HTML structure if any (like spans) – but here we only replace textContent for safety
            // but some elements may contain icons or nested elements; we need to replace only the text part?
            // Actually the translation values might include HTML? But our translation strings are plain text.
            // For elements like h1 with two spans, data-i18n is on each span individually, so it's safe.
            if (el.children.length === 0) {
                el.textContent = translations[lang][key];
            } else {
                // For elements that contain other elements (like buttons with icons), we need to preserve icon inside.
                // We'll clone the structure? Simpler: replace the text nodes carefully.
                // Buttons have icon inside: we can set innerHTML but might remove icon. So we handle button separately by
                // updating only the text node. But for simplicity, many buttons have span around text.
                const spanInside = el.querySelector('span:not([data-i18n])');
                if (spanInside && el.querySelector('i')) {
                    spanInside.textContent = translations[lang][key];
                } else {
                    // Otherwise fallback to textContent but keep icon if present
                    const icon = el.querySelector('i');
                    if (icon) {
                        // Keep icon, replace the rest text
                        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                        if (textNode) textNode.textContent = translations[lang][key];
                        else {
                            // create a text node if missing
                            el.appendChild(document.createTextNode(translations[lang][key]));
                        }
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        }
    });
    
    // Special handling for the founder quote which is inside a span but also has a separate .founder-name
    // The .founder-quote span with data-i18n="founder_quote" and .founder-name with data-i18n="founder_name" are already covered.
    // Update the language toggle button text
    const langToggleSpan = document.getElementById('langToggleText');
    if (langToggleSpan) {
        langToggleSpan.textContent = lang === 'en' ? 'हिंदी' : 'English';
    }
    
    // Also update placeholder for newsletter email input (optional, not required but good)
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput) {
        emailInput.placeholder = lang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage(currentLang);
    // Save preference to localStorage
    localStorage.setItem('vigrid_lang', currentLang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('vigrid_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
        currentLang = savedLang;
    }
    updateLanguage(currentLang);
    
    // Language toggle button listener
    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleLanguage);
    }
    
    // ----- Original interactive JS (preserved exactly) -----
    // Explore More Button (Hero)
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const msg = currentLang === 'en' ? "✨ Thank you for exploring VIGRID! Together we bring light to every village." : "✨ विग्रिड की खोज के लिए धन्यवाद! हम मिलकर हर गाँव में रोशनी लाते हैं।";
            alert(msg);
        });
    }

    // Discover Our Kit Button
    const discoverBtn = document.getElementById('discoverKitBtn');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const msg = currentLang === 'en' ? "🔆 The 7-in-1 Solar Home Kit includes: Lighting, Phone charging, DC Fan, Radio/Entertainment, Torch, Power Bank & Safety Light. Contact us for bulk orders!" : "🔆 7-इन-1 सोलर होम किट में शामिल: लाइटिंग, फोन चार्जिंग, डीसी फैन, रेडियो/मनोरंजन, टॉर्च, पावर बैंक और सेफ्टी लाइट। थोक ऑर्डर के लिए हमसे संपर्क करें!";
            alert(msg);
        });
    }

    // Newsletter subscription logic with simple validation
    const subscribeButton = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('newsletterEmail');
    const feedbackSpan = document.getElementById('subscribeFeedback');

    function validateEmail(email) {
        return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email);
    }

    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (!email) {
                const errMsg = currentLang === 'en' ? '❄️ Please enter your email address.' : '❄️ कृपया अपना ईमेल पता दर्ज करें।';
                feedbackSpan.innerHTML = `<span style="color:#ffcc80;">${errMsg}</span>`;
                return;
            }
            if (!validateEmail(email)) {
                const errMsg = currentLang === 'en' ? '⚠️ Please enter a valid email (e.g., name@example.com).' : '⚠️ कृपया एक वैध ईमेल दर्ज करें (जैसे name@example.com)।';
                feedbackSpan.innerHTML = `<span style="color:#ffcc80;">${errMsg}</span>`;
                return;
            }
            // Simulate subscription success
            const successMsg = currentLang === 'en' ? '✅ Thank you! You\'re now subscribed to VIGRID updates.' : '✅ धन्यवाद! आप अब विग्रिड अपडेट्स की सदस्यता ले चुके हैं।';
            feedbackSpan.innerHTML = `<span style="color:#c8e6b5;">${successMsg}</span>`;
            emailInput.value = '';
            setTimeout(() => {
                feedbackSpan.innerHTML = '';
            }, 4000);
        });
    }

    // Social icons click alert
    const socialIcons = document.querySelectorAll('.copyright i');
    socialIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => {
            const msg = currentLang === 'en' ? '🌍 Connect with VIGRID on social media for latest solar innovations!' : '🌍 नवीनतम सौर नवाचारों के लिए सोशल मीडिया पर विग्रिड से जुड़ें!';
            alert(msg);
        });
    });

    // Quick link footer items smooth mention
    const quickLinks = document.querySelectorAll('.footer-col a');
    quickLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                const linkText = link.innerText.trim();
                const msg = currentLang === 'en' ? `📌 ${linkText} - VIGRID is dedicated to bringing solar solutions. Reach out to us for more info.` : `📌 ${linkText} - विग्रिड सौर समाधान लाने के लिए समर्पित है। अधिक जानकारी के लिए हमसे संपर्क करें।`;
                alert(msg);
            }
        });
    });
    
    // Also update placeholder after language changes (already in updateLanguage, but ensure it works on init)
    const placeholderUpdate = () => {
        if (emailInput) emailInput.placeholder = currentLang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें';
    };
    placeholderUpdate();
    // Override updateLanguage to also call placeholder update each time
    const originalUpdate = updateLanguage;
    window.updateLanguage = function(lang) {
        originalUpdate(lang);
        if (emailInput) emailInput.placeholder = lang === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें';
    };
    updateLanguage(currentLang);
});
