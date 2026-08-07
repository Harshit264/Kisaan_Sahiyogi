const input = document.getElementById("input")
const imgBtn = document.getElementById("imgBtn")
const info = document.getElementById("info")
const startingScreen = document.getElementById("startingScreen")
const startingTextContainer = document.querySelector(".startingTextContainer")
const title = document.querySelector(".title")
const pi1 = document.querySelector(".pi1")
const pi2 = document.querySelector(".pi2")

const pageCover = document.getElementById("pageCover")
const tips = document.getElementById("tips")

const farmerInfo = document.getElementById("farmerInfo")
const FI = document.querySelector(".FI")
const farmerParaBrand= document.getElementById("farmerParaBrand")
const farmerParatype = document.getElementById("farmerParaType")
const farmerParaUseMask = document.getElementById("farmerParaPrecautionsMask")
const farmerParaUseEye = document.getElementById("farmerParaPrecautionsEye")
const farmerParaUsePPE = document.getElementById("farmerParaPrecautionsPPE")
const farmerParaUse = document.getElementById("farmerParaUse")
const farmerParaTechInfo = document.getElementById("farmerParaTechInfo")
const reInitBtn = document.getElementById("reInitBtn")

const setEnglish = document.getElementById("setEnglish")
const setHindi = document.getElementById("setHindi")
const setTamil = document.getElementById("setTamil")
const setTelugu = document.getElementById("setTelugu")
const setBengali = document.getElementById("setBengali")
const setMarathi = document.getElementById("setMarathi")

const summary = document.querySelector(".summary")
const brand = document.getElementById("brand")
const type = document.getElementById("type")
const use = document.getElementById("use")
const prec = document.getElementById("prec")
const mask = document.querySelector(".mask")
const eye = document.querySelector(".eye")
const ppe = document.querySelector(".ppe")
const techInfo = document.getElementById("techInfo")

const playBtn = document.querySelector('#btn-play')
const stopBtn = document.querySelector('#btn-stop')

// Translation setup

let lang
let langName = "english"

const UiText = [
    {
        title: "Kisaan Sahiyogi",
        pi1: "Welcome to Kisaan Sahiyogi. A wesbite specifically made to cater to the needs of the farmers of India. The goal of this website is to prevent misuse or any chemical and industrial products used by farmers in everyday life, which often lead to catastrophic amounts of financial and health loss due to a lack of awareness or simply because there is no information available out in the open in simple terms for farmers to read and understand the practical implications of the products used.",
        pi2: "Just click on the button below and take a photo of the chemical you want information about.",
        imageBtn: "Click me to take photo",
        playBtn: "▶ Play",
        stopBtn: "⏹ Stop",
        summary: "Summary:",
        brand: "Brand:",
        type: "Product Type:",
        use: "Use:",
        prec: "Precautions:",
        mask: "(😷)Mask Needed: ",
        eye: "(🥽)Eye Protection Needed: ",
        ppe: "(🥽🧤🥾)PPE Needed: ",
        techInfo: "Technical Information:",
        reInitBtn: "Go Back"
    },
    {
        title: "किसान सहयोगी",
        pi1: "किसान सहयोगी में आपका स्वागत है। यह एक वेबसाइट है जिसे विशेष रूप से भारत के किसानों की आवश्यकताओं को ध्यान में रखकर बनाया गया है। इस वेबसाइट का उद्देश्य किसानों द्वारा दैनिक जीवन में उपयोग किए जाने वाले रासायनिक और औद्योगिक उत्पादों के गलत उपयोग को रोकना है, जो अक्सर जागरूकता की कमी या सरल भाषा में जानकारी उपलब्ध न होने के कारण आर्थिक और स्वास्थ्य संबंधी गंभीर नुकसान का कारण बनते हैं। यहाँ किसानों को इन उत्पादों के व्यावहारिक प्रभावों के बारे में सरल और स्पष्ट जानकारी मिलेगी।",
        pi2: "नीचे दिए गए बटन पर क्लिक करें और जिस रासायनिक उत्पाद की जानकारी चाहिए उसकी फोटो लें।",
        imageBtn: "फोटो लेने के लिए यहाँ क्लिक करें",
        playBtn: "▶ चलाएँ",
        stopBtn: "⏹ रोकें",
        summary: "सारांश:",
        brand: "ब्रांड:",
        type: "उत्पाद का प्रकार:",
        use: "उपयोग:",
        prec: "सावधानियाँ:",
        mask: "(😷)मास्क आवश्यक: ",
        eye :  "(🥽)आंखों की सुरक्षा आवश्यक: ", 
        ppe:  "(🥽🧤🥾)पीपीई आवश्यक: ",
        techInfo: "तकनीकी जानकारी:",
        reInitBtn: "वापस जाएँ"
    },
    {
        title: "விவசாயி துணைவர்",
        pi1: "விவசாயி துணைவருக்கு வரவேற்கிறோம். இந்திய விவசாயிகளின் தேவைகளை பூர்த்தி செய்ய உருவாக்கப்பட்ட இணையதளம் இது. விவசாயிகள் அன்றாடம் பயன்படுத்தும் இரசாயன மற்றும் தொழில்துறை பொருட்களின் தவறான பயன்பாட்டைத் தடுக்கவே இந்த இணையதளத்தின் நோக்கம். அவற்றைப் பற்றிய விழிப்புணர்வு இல்லாததாலும், எளிய மொழியில் தகவல் கிடைக்காததாலும் ஏற்படும் பொருளாதார மற்றும் உடல்நல இழப்புகளை குறைப்பதே இதன் குறிக்கோள்.",
        pi2: "கீழே உள்ள பொத்தானை அழுத்தி, தகவல் அறிய விரும்பும் இரசாயனப் பொருளின் புகைப்படத்தை எடுக்கவும்.",
        imageBtn: "புகைப்படம் எடுக்க கிளிக் செய்யவும்",
        playBtn: "▶ இயக்கு",
        stopBtn: "⏹ நிறுத்து",
        summary: "சுருக்கம்:",
        brand: "பிராண்ட்:",
        type: "பொருள் வகை:",
        use: "பயன்பாடு:",
        prec: "முன்னெச்சரிக்கைகள்:",
        mask: "(😷)முகக்கவசம் தேவையா: ",
        eye: "(🥽)கண் பாதுகாப்பு தேவையா: ",
        ppe: "(🥽🧤🥾)பாதுகாப்பு உபகரணங்கள் தேவையா: ",
        techInfo: "தொழில்நுட்ப தகவல்:",
        reInitBtn: "மீண்டும் செல்லவும்"
    },
    {
        title: "రైతు సహయోగి",
        pi1: "రైతు సహయోగికి స్వాగతం. భారతదేశ రైతుల అవసరాలను తీర్చడానికి ప్రత్యేకంగా రూపొందించిన వెబ్‌సైట్ ఇది. రైతులు రోజువారీగా ఉపయోగించే రసాయన మరియు పారిశ్రామిక ఉత్పత్తుల దుర్వినియోగాన్ని నివారించడం ఈ వెబ్‌సైట్ ప్రధాన లక్ష్యం. అవగాహన లేకపోవడం లేదా సులభమైన భాషలో సమాచారం అందుబాటులో లేకపోవడం వల్ల రైతులకు కలిగే ఆర్థిక మరియు ఆరోగ్య నష్టాలను తగ్గించడమే దీని ఉద్దేశ్యం.",
        pi2: "క్రింద ఉన్న బటన్‌ను నొక్కి, సమాచారం కావాల్సిన రసాయన ఉత్పత్తి యొక్క ఫోటో తీయండి.",
        imageBtn: "ఫోటో తీయడానికి ఇక్కడ క్లిక్ చేయండి",
        playBtn: "▶ ప్లే చేయండి",
        stopBtn: "⏹ ఆపండి",
        summary: "సారాంశం:",
        brand: "బ్రాండ్:",
        type: "ఉత్పత్తి రకం:",
        use: "వినియోగం:",
        prec: "జాగ్రత్తలు:",
        mask: "(😷)మాస్క్ అవసరమా: ",
        eye: "(🥽)కంటి రక్షణ అవసరమా: ",
        ppe: "(🥽🧤🥾)వ్యక్తిగత రక్షణ పరికరాలు అవసరమా: ",
        techInfo: "సాంకేతిక సమాచారం:",
        reInitBtn: "వెనక్కి వెళ్లండి"
    },
    {
        title: "কৃষক সহায়ক",
        pi1: "কৃষক সহায়কে স্বাগতম। এটি ভারতের কৃষকদের জন্য তৈরি একটি ওয়েবসাইট। কৃষিকাজে ব্যবহৃত রাসায়নিক ও অন্যান্য পণ্যের সঠিক ব্যবহার সম্পর্কে সহজ ভাষায় তথ্য দেওয়াই এই ওয়েবসাইটের উদ্দেশ্য, যাতে ভুল ব্যবহারের কারণে অর্থ ও স্বাস্থ্যের ক্ষতি না হয়।",
        pi2: "নিচের বোতামে চাপ দিয়ে যে রাসায়নিক পণ্যের তথ্য জানতে চান তার একটি ছবি তুলুন।",
        imageBtn: "ছবি তুলতে এখানে চাপুন",
        playBtn: "▶ চালান",
        stopBtn: "⏹ থামান",
        summary: "সারসংক্ষেপ:",
        brand: "ব্র্যান্ড:",
        type: "পণ্যের ধরন:",
        use: "ব্যবহার:",
        prec: "সতর্কতা:",
        mask: "(😷)মাস্ক দরকার: ",
        eye: "(🥽)চোখের সুরক্ষা দরকার: ",
        ppe: "(🥽🧤🥾)নিরাপত্তা সরঞ্জাম দরকার: ",
        techInfo: "বিস্তারিত তথ্য:",
        reInitBtn: "ফিরে যান"
    },
    {
        title: "शेतकरी सहायक",
        pi1: "शेतकरी सहायकमध्ये आपले स्वागत आहे. ही वेबसाइट भारतातील शेतकऱ्यांसाठी तयार करण्यात आली आहे. शेतीमध्ये वापरल्या जाणाऱ्या रसायने आणि इतर उत्पादनांचा योग्य वापर कसा करावा याची सोप्या भाषेत माहिती देणे हा या वेबसाइटचा उद्देश आहे, जेणेकरून चुकीच्या वापरामुळे होणारे आर्थिक आणि आरोग्याचे नुकसान टाळता येईल.",
        pi2: "खालील बटणावर क्लिक करून ज्या रासायनिक उत्पादनाची माहिती हवी आहे त्याचा फोटो काढा.",
        imageBtn: "फोटो काढण्यासाठी येथे क्लिक करा",
        playBtn: "▶ चालू करा",
        stopBtn: "⏹ थांबवा",
        summary: "सारांश:",
        brand: "ब्रँड:",
        type: "उत्पादनाचा प्रकार:",
        use: "वापर:",
        prec: "काळजी:",
        mask: "(😷)मास्क आवश्यक: ",
        eye: "(🥽)डोळ्यांचे संरक्षण आवश्यक: ",
        ppe: "(🥽🧤🥾)सुरक्षा साधने आवश्यक: ",
        techInfo: "अधिक माहिती:",
        reInitBtn: "मागे जा"
    }
] // 0: English, 1: Hindi, 2: Tamil, 3: Telugu, 4: Bengali, 5: Marathi

const languageImplement = (num) => {
    title.textContent = UiText[num].title
    pi1.textContent = UiText[num].pi1
    pi2.textContent = UiText[num].pi2
    imgBtn.textContent = UiText[num].imageBtn
    playBtn.textContent = UiText[num].playBtn
    stopBtn.textContent = UiText[num].stopBtn
    summary.textContent = UiText[num].summary
    brand.textContent = UiText[num].brand
    type.textContent = UiText[num].type
    use.textContent = UiText[num].use
    prec.textContent = UiText[num].prec
    farmerParaUseMask.textContent = UiText[num].mask
    farmerParaUseEye.textContent = UiText[num].eye
    farmerParaUsePPE.textContent = UiText[num].ppe
    techInfo.textContent = UiText[num].techInfo
    reInitBtn.textContent = UiText[num].reInitBtn
}

setEnglish.addEventListener("click", () => {
    lang = 0
    langName = "english"
    languageImplement(lang)
    title.style.display ="block"
})
setHindi.addEventListener("click", () => {
    lang = 1
    langName = "hindi"
    languageImplement(lang)
    title.style.display ="block"
})
setTamil.addEventListener("click", () => {
    lang = 2
    langName = "tamil"
    languageImplement(lang)
    title.style.display ="none"
})
setTelugu.addEventListener("click", () => {
    lang = 3
    langName = "telugu"
    languageImplement(lang)
    title.style.display ="block"
})
setBengali.addEventListener("click", () => {
    lang = 4
    langName = "bengali"
    languageImplement(lang)
    title.style.display ="block"
})
setMarathi.addEventListener("click", () => {
    lang = 5
    langName = "marathi"
    languageImplement(lang)
    title.style.display ="block"
})
//

// Assisting Functions

const loadingScreenInit = () => {
    pageCover.style.display = "flex"
    startingScreen.style.display = "none"
}
const loadingScreenDeinit = () => {
    pageCover.style.display = "none"
    startingScreen.style.display = "none"
    farmerInfo.style.display = "block"
}

const indianFarmingTips = [ 
    [
    "🌱 Test your soil every 2-3 years using the Soil Health Card scheme to know exact NPK fertilizer requirements.",
    "💧 Use drip or sprinkler irrigation to conserve water and increase crop yield by up to 30-50%.",
    "🌾 Rotate cereal crops with legumes (like gram, lentils, or beans) to naturally replenish soil nitrogen.",
    "☀️ Switch to solar-powered water pumps under the PM-KUSUM scheme to cut down electricity and diesel costs.",
    "🪱 Practice vermicomposting using earthworms and farm waste to produce rich, low-cost organic manure.",
    "🪲 Use Neem Kernel Melon Extract (NSKE) or neem oil as a natural, low-cost bio-pesticide for pest management.",
    "📱 Download official apps like Kisan Suvidha and Meghdoot for real-time local weather alerts and market prices.",
    "🐞 Practice Integrated Pest Management (IPM) by installing yellow sticky traps and pheromone traps to monitor bugs early.",
    "🍂 Apply organic mulch (paddy straw, dry leaves) around plants to retain moisture and suppress weed growth.",
    "🌧️ Practice rainwater harvesting and construct farm ponds (Khet Talab) to secure water for dry seasons.",
    "🌿 Treat seeds with Trichoderma or Azotobacter before sowing to protect against soil-borne diseases.",
    "🐄 Integrate livestock, poultry, or goat rearing with crop farming for regular daily income and organic manure.",
    "📊 Join a local Farmers Producer Organization (FPO) to buy seeds/pesticides at bulk rates and get better selling prices.",
    "🌳 Adopt agroforestry by planting high-value trees (Teak, Bamboo, Sandalwood) along farm boundaries for long-term savings.",
    "🚜 Rent expensive farm machinery using custom hiring centers (CHCs) instead of taking high-interest loans to buy them.",
    "🌦️ Buy crop insurance under Pradhan Mantri Fasal Bima Yojana (PMFBY) to shield against unexpected weather losses.",
    "🌼 Plant marigold flowers around main crop fields as a trap crop to divert destructive insects like bollworms.",
    "📈 Track live mandi prices across the country using the e-NAM portal before selling your produce to local middlemen.",
    "🌽 Grow climate-resilient millet varieties (Bajra, Jowar, Ragi) in rainfed areas as they consume less water and give good returns.",
    "☀️ Dry grains and seeds thoroughly on raised platforms before storage to prevent mold and pest damage."
    ],
    [
    "🌱 हर 2-3 साल में मिट्टी की जांच करवाएं और Soil Health Card से पता करें कि खेत में कितनी खाद और NPK की जरूरत है।",
    "💧 ड्रिप या स्प्रिंकलर सिंचाई अपनाएं, इससे पानी की बचत होती है और फसल की पैदावार बढ़ सकती है।",
    "🌾 गेहूं-धान जैसी फसलों के साथ दाल वाली फसलें (चना, मसूर, अरहर आदि) लगाएं, इससे मिट्टी में पोषक तत्व बढ़ते हैं।",
    "☀️ PM-KUSUM योजना के तहत सोलर पंप लगाएं और बिजली व डीजल का खर्च कम करें।",
    "🪱 केंचुआ खाद (वर्मी कम्पोस्ट) बनाएं और खेत के कचरे से अच्छी जैविक खाद तैयार करें।",
    "🪲 कीटों से बचाव के लिए नीम का तेल या नीम से बनी दवा का इस्तेमाल करें।",
    "📱 किसान सुविधा और मेघदूत जैसे ऐप डाउनलोड करें ताकि मौसम और मंडी भाव की जानकारी मिल सके।",
    "🐞 कीटों को समय पर पहचानने के लिए पीले चिपचिपे ट्रैप और फेरोमोन ट्रैप लगाएं।",
    "🍂 पौधों के आसपास सूखी पत्तियां या फसल का अवशेष बिछाएं, इससे नमी बनी रहती है और खरपतवार कम होते हैं।",
    "🌧️ बारिश के पानी को बचाने के लिए खेत तालाब और जल संचयन के तरीके अपनाएं।",
    "🌿 बुवाई से पहले बीजों को ट्राइकोडर्मा या एजोटोबैक्टर से उपचारित करें ताकि रोगों से बचाव हो।",
    "🐄 खेती के साथ पशुपालन, मुर्गी पालन या बकरी पालन करें ताकि अतिरिक्त आमदनी और खाद मिल सके।",
    "📊 किसान उत्पादक संगठन (FPO) से जुड़ें ताकि बीज और दवाएं कम दाम में मिलें और फसल बेचने में फायदा हो।",
    "🌳 खेत की मेड़ पर बांस, सागौन जैसे उपयोगी पेड़ लगाएं और लंबे समय के लिए अतिरिक्त कमाई का साधन बनाएं।",
    "🚜 महंगी मशीनें खरीदने की जगह कस्टम हायरिंग सेंटर से किराए पर मशीन लें और खर्च बचाएं।",
    "🌦️ प्रधानमंत्री फसल बीमा योजना (PMFBY) से फसल का बीमा करवाएं ताकि नुकसान होने पर मदद मिल सके।",
    "🌼 खेत के किनारे गेंदा फूल लगाएं, इससे कुछ कीट मुख्य फसल से दूर रहते हैं।",
    "📈 फसल बेचने से पहले e-NAM या मंडी भाव की जानकारी देखकर सही जगह पर बिक्री करें।",
    "🌽 कम पानी वाली फसलें जैसे बाजरा, ज्वार और रागी उगाएं, खासकर कम बारिश वाले क्षेत्रों में।",
    "☀️ अनाज और बीजों को अच्छी तरह सुखाकर ऊंची जगह पर रखें ताकि उनमें फफूंद और कीड़े न लगें।"
    ],
    [
    "🌱 2–3 ஆண்டுகளுக்கு ஒருமுறை மண்ணை பரிசோதனை செய்து, தேவையான அளவு உரத்தை மட்டும் பயன்படுத்துங்கள்.",
    "💧 சொட்டு நீர்ப்பாசனம் அல்லது தெளிப்பு நீர்ப்பாசனம் பயன்படுத்தி தண்ணீரைச் சேமித்து நல்ல விளைச்சல் பெறுங்கள்.",
    "🌾 ஒவ்வொரு பருவத்திலும் வேறு வகை பயிர்களை மாற்றி மாற்றி பயிரிடுங்கள். இது மண்ணை வளமாக வைத்திருக்கும்.",
    "☀️ சூரிய ஆற்றலில் இயங்கும் மோட்டாரைப் பயன்படுத்தி மின்சாரம் மற்றும் டீசல் செலவை குறையுங்கள்.",
    "🪱 மண்புழு உரம் தயாரித்து பயன்படுத்தினால் குறைந்த செலவில் நல்ல இயற்கை உரம் கிடைக்கும்.",
    "🪲 பூச்சிகளை கட்டுப்படுத்த வேப்பெண்ணெய் அல்லது வேப்பங்கொட்டைச் சாறு பயன்படுத்துங்கள்.",
    "📱 வானிலை தகவலும் சந்தை விலைகளும் தெரிந்துகொள்ள Kisan Suvidha அல்லது Meghdoot செயலிகளைப் பயன்படுத்துங்கள்.",
    "🐞 பூச்சிகள் அதிகரிக்கும் முன்பே அவற்றைக் கண்டறிய மஞ்சள் ஒட்டும் வலைகளைப் பயன்படுத்துங்கள்.",
    "🍂 செடிகளைச் சுற்றி வைக்கோல் அல்லது உலர்ந்த இலைகளைப் போட்டு மண்ணின் ஈரப்பதத்தை பாதுகாத்துக் கொள்ளுங்கள்.",
    "🌧️ மழைநீரை சேமித்து வறட்சி காலத்தில் பயன்படுத்துங்கள்.",
    "🌿 விதைகளை விதைக்கும் முன் பாதுகாப்பு மருந்து தடவி நோய்களைத் தடுக்குங்கள்.",
    "🐄 விவசாயத்துடன் மாடு, ஆடு அல்லது கோழி வளர்த்தால் கூடுதல் வருமானம் கிடைக்கும்.",
    "📊 அருகிலுள்ள விவசாயிகள் குழுவில் சேர்ந்து பொருட்களை குறைந்த விலையில் வாங்கி, நல்ல விலையில் விற்குங்கள்.",
    "🌳 நிலத்தின் ஓரங்களில் பயனுள்ள மரங்களை நட்டு எதிர்கால வருமானத்தை அதிகரியுங்கள்.",
    "🚜 விலை உயர்ந்த இயந்திரங்களை வாங்காமல் தேவையானபோது வாடகைக்கு பயன்படுத்துங்கள்.",
    "🌦️ பயிர் காப்பீடு செய்து இயற்கை பேரிடர் அல்லது மழை இழப்பிலிருந்து பாதுகாப்பு பெறுங்கள்.",
    "🌼 வயலைச் சுற்றி சாமந்திப் பூக்களை நட்டால் சில பூச்சிகளைத் தடுக்க உதவும்.",
    "📈 பயிர்களை விற்கும் முன் சந்தை விலைகளைப் பார்த்து நல்ல விலையில் விற்குங்கள்.",
    "🌽 தண்ணீர் குறைவான இடங்களில் கம்பு, சோளம், கேழ்வரகு போன்ற சிறுதானியங்களைப் பயிரிடுங்கள்.",
    "☀️ தானியங்களையும் விதைகளையும் நன்றாக காயவைத்து சேமித்தால் பூஞ்சையும் பூச்சிகளும் வராது."
    ],
    [
    "🌱 ప్రతి 2–3 సంవత్సరాలకు ఒకసారి నేల పరీక్ష చేయించి, అవసరమైనంత ఎరువును మాత్రమే వాడండి.",
    "💧 డ్రిప్ లేదా స్ప్రింక్లర్ నీటిపారుదల వాడి నీటిని ఆదా చేసి మంచి దిగుబడి పొందండి.",
    "🌾 ప్రతి సీజన్‌లో వేర్వేరు పంటలను మారుస్తూ సాగు చేస్తే నేల సారం మెరుగుపడుతుంది.",
    "☀️ సౌరశక్తితో పనిచేసే నీటి పంపులు వాడి విద్యుత్, డీజిల్ ఖర్చు తగ్గించండి.",
    "🪱 వర్మీ కంపోస్ట్ తయారు చేసి వాడితే తక్కువ ఖర్చుతో మంచి సేంద్రియ ఎరువు లభిస్తుంది.",
    "🪲 పురుగుల నియంత్రణకు వేపనూనె లేదా వేపగింజల సారాన్ని ఉపయోగించండి.",
    "📱 వాతావరణ సమాచారం మరియు మార్కెట్ ధరల కోసం Kisan Suvidha లేదా Meghdoot యాప్‌లను ఉపయోగించండి.",
    "🐞 పంటలో పురుగులను ముందుగానే గుర్తించడానికి పసుపు స్టిక్కీ ట్రాప్‌లను ఏర్పాటు చేయండి.",
    "🍂 మొక్కల చుట్టూ గడ్డి లేదా ఎండిన ఆకులు వేస్తే నేల తేమ ఎక్కువ రోజులు ఉంటుంది.",
    "🌧️ వర్షపు నీటిని నిల్వ చేసి ఎండాకాలంలో ఉపయోగించండి.",
    "🌿 విత్తనాలను విత్తే ముందు రక్షణ మందుతో శుద్ధి చేయండి.",
    "🐄 పంటలతో పాటు పశువులు, మేకలు లేదా కోళ్ల పెంపకం చేస్తే అదనపు ఆదాయం వస్తుంది.",
    "📊 దగ్గరలోని రైతు సంఘంలో చేరి తక్కువ ధరకు వస్తువులు కొనుగోలు చేసి, పంటకు మంచి ధర పొందండి.",
    "🌳 పొలం అంచుల్లో ఉపయోగకరమైన చెట్లు నాటి భవిష్యత్తులో అదనపు ఆదాయం పొందండి.",
    "🚜 ఖరీదైన వ్యవసాయ యంత్రాలు కొనకుండా అవసరమైనప్పుడు అద్దెకు తీసుకోండి.",
    "🌦️ పంట బీమా తీసుకుంటే వర్షం లేదా ఇతర ప్రకృతి నష్టాల నుంచి రక్షణ ఉంటుంది.",
    "🌼 పొలం చుట్టూ బంతి పూలు నాటితే కొన్ని హానికర పురుగులను తగ్గించడంలో సహాయపడుతుంది.",
    "📈 పంట అమ్మే ముందు మార్కెట్ ధరలు చూసి మంచి ధర వచ్చినప్పుడు అమ్మండి.",
    "🌽 నీరు తక్కువగా ఉండే ప్రాంతాల్లో సజ్జలు, జొన్నలు, రాగులు వంటి పంటలు వేయండి.",
    "☀️ ధాన్యాలు, విత్తనాలను బాగా ఎండబెట్టి నిల్వ చేస్తే పూత, పురుగులు రాకుండా ఉంటాయి."
    ],
    [
    "🌱 প্রতি ২–৩ বছরে একবার মাটির পরীক্ষা করিয়ে প্রয়োজনমতো সার ব্যবহার করুন।",
    "💧 ড্রিপ বা স্প্রিঙ্কলার সেচ ব্যবহার করে জল বাঁচান এবং ভালো ফলন পান।",
    "🌾 প্রতি মৌসুমে ভিন্ন ভিন্ন ফসল চাষ করুন, এতে মাটির উর্বরতা বজায় থাকে।",
    "☀️ সৌরচালিত জল পাম্প ব্যবহার করে বিদ্যুৎ ও ডিজেলের খরচ কমান।",
    "🪱 কেঁচো সার (ভার্মিকম্পোস্ট) তৈরি করে ব্যবহার করুন। এতে কম খরচে ভালো জৈব সার পাওয়া যায়।",
    "🪲 পোকামাকড় দমনে নিম তেল বা নিম বীজের নির্যাস ব্যবহার করুন।",
    "📱 আবহাওয়ার খবর ও বাজারদর জানতে Kisan Suvidha বা Meghdoot অ্যাপ ব্যবহার করুন।",
    "🐞 পোকা আগে থেকেই ধরতে হলুদ আঠালো ফাঁদ ব্যবহার করুন।",
    "🍂 গাছের চারপাশে খড় বা শুকনো পাতা বিছিয়ে রাখুন, এতে মাটির আর্দ্রতা বজায় থাকে।",
    "🌧️ বৃষ্টির জল সংরক্ষণ করে শুকনো সময়ে ব্যবহার করুন।",
    "🌿 বীজ বোনার আগে বীজ শোধন করে নিন, এতে রোগের ঝুঁকি কমে।",
    "🐄 চাষের পাশাপাশি গরু, ছাগল বা হাঁস-মুরগি পালন করলে অতিরিক্ত আয় হবে।",
    "📊 কাছের কৃষক সংগঠনে যোগ দিয়ে কম দামে কৃষি সামগ্রী কিনুন এবং ভালো দামে ফসল বিক্রি করুন।",
    "🌳 জমির ধারে উপকারী গাছ লাগিয়ে ভবিষ্যতে অতিরিক্ত আয় করুন।",
    "🚜 দামি কৃষিযন্ত্র কেনার বদলে প্রয়োজন হলে ভাড়ায় ব্যবহার করুন।",
    "🌦️ ফসল বীমা করলে প্রাকৃতিক দুর্যোগে ক্ষতির হাত থেকে সুরক্ষা পাওয়া যায়।",
    "🌼 জমির চারপাশে গাঁদা ফুল লাগালে কিছু ক্ষতিকর পোকা কমে।",
    "📈 ফসল বিক্রির আগে বাজারদর দেখে ভালো দাম পেলে বিক্রি করুন।",
    "🌽 যেখানে জল কম, সেখানে বাজরা, জোয়ার বা রাগির মতো শস্য চাষ করুন।",
    "☀️ শস্য ও বীজ ভালোভাবে শুকিয়ে সংরক্ষণ করুন, এতে ছত্রাক ও পোকা লাগবে না।"
    ],
    [
    "🌱 दर २–३ वर्षांनी मातीची चाचणी करून आवश्यक तेवढेच खत वापरा.",
    "💧 ठिबक किंवा तुषार सिंचन वापरून पाण्याची बचत करा आणि चांगले उत्पादन मिळवा.",
    "🌾 प्रत्येक हंगामात वेगवेगळी पिके घ्या. त्यामुळे जमिनीची सुपीकता टिकून राहते.",
    "☀️ सौरऊर्जेवर चालणारे पाण्याचे पंप वापरून वीज आणि डिझेलचा खर्च कमी करा.",
    "🪱 गांडूळखत तयार करून वापरा. यामुळे कमी खर्चात चांगले सेंद्रिय खत मिळते.",
    "🪲 किडींच्या नियंत्रणासाठी कडुनिंबाचे तेल किंवा कडुनिंबाच्या बियांचा अर्क वापरा.",
    "📱 हवामानाची माहिती आणि बाजारभाव जाणून घेण्यासाठी Kisan Suvidha किंवा Meghdoot ॲप वापरा.",
    "🐞 किडी लवकर ओळखण्यासाठी पिवळे चिकट सापळे लावा.",
    "🍂 झाडांच्या भोवती काडीकचरा किंवा वाळलेली पाने पसरवा. त्यामुळे जमिनीतील ओलावा टिकतो.",
    "🌧️ पावसाचे पाणी साठवून उन्हाळ्यात वापरा.",
    "🌿 पेरणीपूर्वी बियाण्यांवर प्रक्रिया करा, त्यामुळे रोगांचा धोका कमी होतो.",
    "🐄 शेतीसोबत गाय, शेळी किंवा कुक्कुटपालन केल्यास अतिरिक्त उत्पन्न मिळते.",
    "📊 जवळच्या शेतकरी गटात सहभागी व्हा. त्यामुळे कमी किमतीत साहित्य मिळेल आणि पिकाला चांगला भाव मिळेल.",
    "🌳 शेताच्या कडेला उपयुक्त झाडे लावा. यामुळे भविष्यात अतिरिक्त उत्पन्न मिळू शकते.",
    "🚜 महागडी शेतीची यंत्रे खरेदी करण्याऐवजी गरजेनुसार भाड्याने घ्या.",
    "🌦️ पीक विमा काढा. त्यामुळे नैसर्गिक आपत्तीत होणाऱ्या नुकसानीपासून संरक्षण मिळते.",
    "🌼 शेताभोवती झेंडूची फुले लावल्यास काही हानिकारक किडी कमी होण्यास मदत होते.",
    "📈 पीक विकण्यापूर्वी बाजारभाव तपासा आणि चांगला भाव मिळाल्यावर विक्री करा.",
    "🌽 पाणी कमी असलेल्या भागात बाजरी, ज्वारी किंवा नाचणीसारखी पिके घ्या.",
    "☀️ धान्य आणि बियाणे नीट वाळवून साठवा. त्यामुळे बुरशी आणि किडींपासून संरक्षण मिळते."
    ]
]
const getRandomItem = (param) => { //Randomly picks a tip from the above array
    return param[Math.floor(Math.random()*param.length)]
}

const loadingScreenTips = () => {
    tips.textContent = `Tip: ${getRandomItem(indianFarmingTips[lang] || indianFarmingTips[0])}`
} 

const checkTrueFalse = (data) => {
    if (data.precautions[0]) {
        farmerParaUseMask.textContent += `✅`
    }
    else {
        farmerParaUseMask.textContent += `❌`
    }
    if (data.precautions[1]) {
        farmerParaUseEye.textContent += `✅`
    }
    else {
        farmerParaUseEye.textContent += `❌`
    }
    if (data.precautions[2]) {
        farmerParaUsePPE.textContent += `✅`
    }
    else {
        farmerParaUsePPE.textContent += `❌`
    }
}

const assignData = (data) => {
    farmerParaBrand.textContent = `${data.brandName}`
    farmerParatype.textContent = `${data.productType}`
    checkTrueFalse(data)
    farmerParaUse.textContent = `${data.useCase}`
    farmerParaTechInfo.textContent = `${data.techDetails}`
}

const reInit = () => {
    pageCover.display = "none"
    startingScreen.style.display = "flex"
    farmerInfo.style.display = "none"
    setEnglish.disabled = false
    setHindi.disabled = false
    setTamil.disabled = false
    setTelugu.disabled = false
    setBengali.disabled = false
    setMarathi.disabled = false
}

//

//Main functions

async function dataLink(mimeType, base64Data, langName) {
    const response = await fetch("https://kisaan-sahiyogi.onrender.com/api/describe", { // does a post request to the backend which we set in the server.js and waits for a response
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( { mimeType, base64Data, langName } ) //Converts both the data types into a format sendable to the backend usin json stringify
    })
    if (!response.ok) {
        throw new Error("Backend request failed")
    }
    const data = await response.json() // variable containing the response which we got from above request which is then converted to an accesable object using .json()
    return data.description // returns the description key value pair set in the backend server.js
}

imgBtn.addEventListener("click", () => {input.click()})

input.addEventListener("change", e => {
    setEnglish.disabled = true
    setHindi.disabled = true
    setTamil.disabled = true
    setTelugu.disabled = true
    setBengali.disabled = true
    setMarathi.disabled = true
    const file = e.target.files[0]
    if (file) {
        const reader = new FileReader() //Get all the info about the file
        reader.onload = async () => { //Retreives said information
        const base64Data = reader.result.split(",")[1] //Get base64 string for identification
        const mimeType = file.type 
        try {
            loadingScreenInit()
            loadingScreenTips()
            const description = await dataLink(mimeType, base64Data, langName)
            const parsedDescription = await JSON.parse(description)
            // console.log(parsedDescription)
            assignData(parsedDescription)
            input.value = ""
        }
        catch{
            console.log("Couldn't retrieve data")
        }
        finally{
            loadingScreenDeinit()
        }
        }
    reader.readAsDataURL(file)//It is written in the end but technically it run before the initial async file.onload
    }
    else {
        console.log("File not present")
    }
})

//

// TTS Engine

// Web Speech API Controller State
let synth = window.speechSynthesis
let currentUtterance = null
let queue = []
let queueIndex = 0
let keepAliveTimer = null
let voices = []

// Map your regional language names to standard BCP-47 codes
const langMap = {
  'english': 'en-US',
  'hindi': 'hi-IN',
  'tamil': 'ta-IN',
  'telugu': 'te-IN',
  'bengali': 'bn-IN',
  'marathi': 'mr-IN'
}

// Pre-load system voices immediately
const loadVoices = () => {
  voices = synth.getVoices()
}
loadVoices()
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices
}

// Resolves language name to code
const resolveLangCode = (langName) => {
  if (!langName) return 'en-US'
  const cleanName = String(langName).trim().toLowerCase()
  return langMap[cleanName] || 'en-US'
}

// Finds matching regional voice engine (falls back to en-IN or default if voice isn't installed locally)
const getMatchingVoice = (langCode) => {
  if (!voices.length) voices = synth.getVoices()
  if (!voices.length) return null

  const target = langCode.toLowerCase()
  const primary = target.split('-')[0]

  // 1. Try exact match (e.g., 'ta-in')
  let voice = voices.find(v => v.lang.toLowerCase().replace('_', '-') === target)
  
  // 2. Fallback to primary language match (e.g., any 'ta' voice)
  if (!voice) {
    voice = voices.find(v => v.lang.toLowerCase().startsWith(primary))
  }

  // 3. Indian Language Safety Fallback: If OS lacks Tamil/Telugu/etc. local pack, fallback to en-IN voice so audio still speaks
  if (!voice && target.endsWith('-in')) {
    voice = voices.find(v => v.lang.toLowerCase().startsWith('en-in') || v.lang.toLowerCase().startsWith('hi-in'))
  }

  return voice || null
}

// Helper to toggle button disabled states
const updateButtonStates = (isPlaying) => {
  if (playBtn) playBtn.disabled = isPlaying
  if (stopBtn) stopBtn.disabled = !isPlaying
}

// Fixes Chrome 15-second cutoff glitch
const startKeepAlive = () => {
  clearInterval(keepAliveTimer)
  keepAliveTimer = setInterval(() => {
    if (synth.speaking && !synth.paused) {
      synth.pause()
      synth.resume()
    }
  }, 10000)
}

const stopKeepAlive = () => {
  clearInterval(keepAliveTimer)
}

// Checks if element is currently inside browser window
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const isVisibleInDOM = rect.width > 0 && rect.height > 0
  const isInView = rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0

  return isVisibleInDOM && isInView
}

// Reads array of elements with regional language support
const speakTags = (tags, inputLang = 'english') => {
  stopTTS()

  let elements = []
  if (Array.isArray(tags) || tags instanceof NodeList) {
    elements = Array.from(tags).flatMap(item => 
      typeof item === 'string' 
        ? Array.from(document.querySelectorAll(item)) 
        : (item instanceof NodeList ? Array.from(item) : [item])
    )
  } else if (tags instanceof HTMLElement) {
    elements = [tags]
  } else if (typeof tags === 'string') {
    elements = Array.from(document.querySelectorAll(tags))
  }

  const targetLangCode = resolveLangCode(inputLang)

  queue = elements
    .filter(el => el && isElementInViewport(el))
    .map(el => ({
      text: el.innerText.trim(),
      lang: targetLangCode
    }))
    .filter(item => item.text.length > 0)

  if (queue.length === 0) return

  queueIndex = 0
  speakNextChunk()
}

// Direct, fast chunk speaker
const speakNextChunk = () => {
  if (queueIndex >= queue.length) {
    stopKeepAlive()
    updateButtonStates(false)
    return
  }

  const currentItem = queue[queueIndex]
  currentUtterance = new SpeechSynthesisUtterance(currentItem.text)

  currentUtterance.lang = currentItem.lang
  
  const matchingVoice = getMatchingVoice(currentItem.lang)
  if (matchingVoice) {
    currentUtterance.voice = matchingVoice
  }

  currentUtterance.onstart = () => {
    startKeepAlive()
  }

  currentUtterance.onend = () => {
    queueIndex++
    if (queueIndex < queue.length) {
      speakNextChunk()
    } else {
      stopKeepAlive()
      updateButtonStates(false)
    }
  }

  currentUtterance.onerror = () => {
    stopKeepAlive()
    updateButtonStates(false)
  }

  synth.speak(currentUtterance)
}

const stopTTS = () => {
  stopKeepAlive()
  synth.cancel()
  queue = []
  queueIndex = 0
  currentUtterance = null
  updateButtonStates(false)
}

// Button Listeners
playBtn.addEventListener('click', () => {
  // Directly calls speakTags with your array: [startingTextContainer, FI]
  speakTags([startingTextContainer, FI], langName)
  updateButtonStates(true)
})

stopBtn.addEventListener('click', () => {
  stopTTS()
})
//