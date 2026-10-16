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
const setGujurati = document.getElementById("setGujurati")
const setKannada = document.getElementById("setKannada")
const setPunjabi = document.getElementById("setPunjabi")

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
      pi1: "Welcome to Kisaan Sahiyogi. A website specifically made to cater to the needs of the farmers of India. The goal of this website is to prevent misuse or any chemical and industrial products used by farmers in everyday life, which often lead to catastrophic amounts of financial and health loss due to a lack of awareness or simply because there is no information available out in the open in simple terms for farmers to read and understand the practical implications of the products used.",
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
    },
    {
      title: "કિસાન સહયોગી",
      pi1: "કિસાન સહયોગીમાં સ્વાગત છે. ખાસ કરીને ભારતના ખેડૂતોની જરૂરિયાતોને પહોંચી વળવા માટે બનાવવામાં આવેલી વેબસાઇટ. આ વેબસાઇટનો ઉદ્દેશ્ય ખેડૂતો દ્વારા રોજિંદા જીવનમાં ઉપયોગમાં લેવાતા કોઈપણ રાસાયણિક અને industrialદ્યોગિક ઉત્પાદનોના દુરુપયોગને અટકાવવાનો છે, જે ઘણીવાર જાગરૂકતાના અભાવને કારણે અથવા ફક્ત એટલા માટે કે ખેડૂતો વાંચી અને સમજી શકે તેવા સરળ શબ્દોમાં કોઈ માહિતી ખુલ્લામાં ઉપલબ્ધ નથી, જેના કારણે આપત્તિજનક નાણાકીય અને સ્વાસ્થ્યનું નુકસાન થાય છે.",
      pi2: "બસ નીચે આપેલા બટન પર ક્લિક કરો અને તમને જે રસાયણ વિશે માહિતી જોઈતી હોય તેનો ફોટો લો.",
      imageBtn: "ફોટો લેવા માટે અહીં ક્લિક કરો",
      playBtn: "▶ વગાડો",
      stopBtn: "⏹ બંધ કરો",
      summary: "સારાંશ:",
      brand: "બ્રાન્ડ:",
      type: "પ્રોડક્ટનો પ્રકાર:",
      use: "ઉપયોગ:",
      prec: "સાવચેતીઓ:",
      mask: "(😷)માસ્ક જરૂરી છે: ",
      eye: "(🥽)આંખની સુરક્ષા જરૂરી છે: ",
      ppe: "(🥽🧤🥾)પીપીઈ (PPE) જરૂરી છે: ",
      techInfo: "ટેકનિકલ માહિતી:",
      reInitBtn: "પાછા જાઓ"
    },
    {
    title: "ಕಿಸಾನ್ ಸಹಯೋಗಿ",
    pi1: "ಕಿಸಾನ್ ಸಹಯೋಗಿಗೆ ಸ್ವಾಗತ. ಭಾರತದ ರೈತರ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ನಿರ್ದಿಷ್ಟವಾಗಿ ತಯಾರಿಸಿದ ವೆಬ್‌ಸೈಟ್. ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಗುರಿಯು ರೈತರು ತಮ್ಮ ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಬಳಸುವ ಯಾವುದೇ ರಾಸಾಯನಿಕ ಮತ್ತು ಕೈಗಾರಿಕಾ ಉತ್ಪನ್ನಗಳ ದುರುಪಯೋಗವನ್ನು ತಡೆಯುವುದಾಗಿದೆ, ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಜಾಗೃತಿಯ ಕೊರತೆಯಿಂದ ಅಥವಾ ರೈತರು ಓದಲು ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಪರಿಣಾಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸರಳ ಪದಗಳಲ್ಲಿ ಯಾವುದೇ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲದಿರುವುದರಿಂದ ವಿಪತ್ತಿನ ಹಣಕಾಸು ಮತ್ತು ಆರೋಗ್ಯ ನಷ್ಟಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ.",
    pi2: "ಕೆಳಗಿನ ಗುಂಡಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ನೀವು ಮಾಹಿತಿ ಬಯಸುವ ರಾಸಾಯನಿಕದ ಫೋಟೋವನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
    imageBtn: "ಫೋಟೋ ತೆಗೆಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
    playBtn: "▶ ಪ್ಲೇ ಮಾಡಿ",
    stopBtn: "⏹ ನಿಲ್ಲಿಸಿ",
    summary: "ಸಾರಾಂಶ:",
    brand: "ಬ್ರ್ಯಾಂಡ್:",
    type: "ಉತ್ಪನ್ನದ ಪ್ರಕಾರ:",
    use: "ಬಳಕೆ:",
    prec: "ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು:",
    mask: "(😷)ಮುಖವಾಡ (ಮಾಸ್ಕ್) ಅಗತ್ಯವಿದೆ: ",
    eye: "(🥽)ಕಣ್ಣಿನ ರಕ್ಷಣೆ ಅಗತ್ಯವಿದೆ: ",
    ppe: "(🥽🧤🥾)ಪಿಪಿಇ (PPE) ಅಗತ್ಯವಿದೆ: ",
    techInfo: "ತಾಂತ್ರಿಕ ಮಾಹಿತಿ:",
    reInitBtn: "ಹಿಂದಕ್ಕೆ ಹೋಗಿ"
  },
  {
    title: "ਕਿਸਾਨ ਸਹਿਯੋਗੀ",
    pi1: "ਕਿਸਾਨ ਸਹਿਯੋਗੀ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ। ਖਾਸ ਤੌਰ 'ਤੇ ਭਾਰਤ ਦੇ ਕਿਸਾਨਾਂ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਬਣਾਈ ਗਈ ਇੱਕ ਵੈੱਬਸਾਈਟ। ਇਸ ਵੈੱਬਸਾਈਟ ਦਾ ਉਦੇਸ਼ ਕਿਸਾਨਾਂ ਦੁਆਰਾ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਕਿਸੇ ਵੀ ਰਸਾਇਣਕ ਅਤੇ ਉਦਯੋਗਿਕ ਉਤਪਾਦਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਨੂੰ ਰੋਕਣਾ ਹੈ, ਜੋ ਅਕਸਰ ਜਾਗਰੂਕਤਾ ਦੀ ਘਾਟ ਕਾਰਨ ਜਾਂ ਸਿਰਫ਼ ਇਸ ਕਰਕੇ ਕਿ ਕਿਸਾਨਾਂ ਲਈ ਪੜ੍ਹਨ ਅਤੇ ਵਿਹਾਰਕ ਪ੍ਰਭਾਵਾਂ ਨੂੰ ਸਮਝਣ ਲਈ ਖੁੱਲ੍ਹੇ ਵਿੱਚ ਕੋਈ ਸਧਾਰਨ ਜਾਣਕਾਰੀ ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦੀ, ਜਿਸ ਨਾਲ ਆਫ਼ਤ ਭਰਿਆ ਵਿੱਤੀ ਅਤੇ ਸਿਹਤ ਦਾ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ।",
    pi2: "ਬੱਸ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਉਸ ਰਸਾਇਣ ਦੀ ਫੋਟੋ ਖਿੱਚੋ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਜਾਣਕਾਰੀ ਚਾਹੁੰਦੇ ਹੋ.",
    imageBtn: "ਫੋਟੋ ਖਿੱਚਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ",
    playBtn: "▶ ਚਲਾਓ",
    stopBtn: "⏹ ਬੰਦ ਕਰੋ",
    summary: "ਸਾਰ:",
    brand: "ਬ੍ਰਾਂਡ:",
    type: "ਉਤਪਾਦ ਦੀ ਕਿਸਮ:",
    use: "ਵਰਤੋਂ:",
    prec: "ਸਾਵਧਾਨੀਆਂ:",
    mask: "(😷)ਮਾਸਕ ਦੀ ਲੋੜ ਹੈ: ",
    eye: "(🥽)ਅੱਖਾਂ ਦੀ ਸੁਰੱਖਿਆ ਦੀ ਲੋੜ ਹੈ: ",
    ppe: "(🥽🧤🥾)ਪੀ.ਪੀ.ਈ. (PPE) ਦੀ ਲੋੜ ਹੈ: ",
    techInfo: "ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ:",
    reInitBtn: "ਵਾਪਸ ਜਾਓ"
  }
] // 0: English, 1: Hindi, 2: Tamil, 3: Telugu, 4: Bengali, 5: Marathi, 6: Gujurati, 7: Kannada, 8: Punjabi

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
setGujurati.addEventListener("click", () => {
    lang = 6
    langName = "gujurati"
    languageImplement(lang)
    title.style.display ="block"
})
setKannada.addEventListener("click", () => {
    lang = 7
    langName = "kannada"
    languageImplement(lang)
    title.style.display ="block"
})
setPunjabi.addEventListener("click", () => {
    lang = 8
    langName = "punjabi"
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
    ],
    [
    "🌱 જમીનની ચોક્કસ NPK ખાતરની જરૂરિયાતો જાણવા માટે સોઇલ હેલ્થ કાર્ડ યોજનાનો ઉપયોગ કરીને દર 2-3 વર્ષે તમારી જમીનની તપાસ કરો.",
    "💧 પાણીની બચત કરવા અને પાકની ઉપજ 30-50% સુધી વધારવા માટે ટાપક (ડ્રિપ) અથવા ફુવારા (સ્પ્રિંકલર) સિંચાઈનો ઉપયોગ કરો.",
    "🌾 જમીનમાં કુદરતી રીતે નાઇટ્રોજનની પૂર્તિ કરવા માટે અનાજના પાકની સાથે કઠોળના પાક (જેવા કે ચણા, મસૂર અથવા કઠોળ)ની ફેરબદલી કરો.",
    "☀️ વીજળી અને ડીઝલનો ખર્ચ ઘટાડવા માટે PM-KUSUM યોજના હેઠળ સોલાર સંચાલિત પાણીના પંપ પર જાઓ.",
    "🪱 સમૃદ્ધ, ઓછા ખર્ચે ઓર્ગેનિક ખાતર બનાવવા માટે અળસિયા અને ખેતરના કચરાનો ઉપયોગ કરીને વર્મીકોમ્પોસ્ટિંગ (અળસિયાનું ખાતર) કરો.",
    "🪲 જીવાત વ્યવસ્થાપન માટે કુદરતી, ઓછા ખર્ચે બાયો-પેસ્ટિસાઈડ તરીકે લીંબોળીના તેલના અર્ક (NSKE) અથવા લીંબોળીના તેલનો ઉપયોગ કરો.",
    "📱 રીઅલ-ટાઇમ સ્થાનિક હવામાન ચેતવણીઓ અને બજાર ભાવ માટે કિસાન સુવિધા અને મેઘદૂત જેવી સત્તાવાર એપ્લિકેશનો ડાઉનલોડ કરો.",
    "🐞 જંતુઓનું વહેલું નિરીક્ષણ કરવા માટે પીળા ચીકણા ટ્રેપ અને ફેરોમોન ટ્રેપ લગાવીને સંકલિત જીવાત વ્યવસ્થાપન (IPM) ની પ્રેક્ટિસ કરો.",
    "🍂 ભેજ જાળવી રાખવા અને નીંદણની વૃદ્ધિને અટકાવવા માટે છોડની આસપાસ ઓર્ગેનિક મલ્ચ (ડાંગરનું પરાળ, સૂકા પાંદડા) લગાવો.",
    "🌧️ વરસાદની ઋતુ સિવાયના સમય માટે પાણી સુરક્ષિત કરવા વરસાદી પાણીના સંગ્રહની પ્રેક્ટિસ કરો અને ખેત તલાવડી બનાવો.",
    "🌿 વાવણી પહેલાં માટીજન્ય રોગો સામે રક્ષણ આપવા માટે ટ્રાઇકોડર્મા અથવા એઝોટોબેક્ટર સાથે બીજની માવજત કરો.",
    "🐄 નિયમિત દૈનિક આવક અને ઓર્ગેનિક ખાતર માટે પાક ખેતી સાથે પશુપાલન, મરઘા પાલન અથવા બકરી ઉછેરને જોડો.",
    "📊 જથ્થાબંધ દરેક બીજ/જંતુનાશકો ખરીદવા અને વેચાણના વધુ સારા ભાવ મેળવવા માટે સ્થાનિક ફાર્મર્સ પ્રોડ્યુસર ઓર્ગેનાઇઝેશન (FPO) માં જોડાઓ.",
    "🌳 લાંબા ગાળાની બચત માટે ખેતરની સરહદો પર ઉચ્ચ મૂલ્યવાળા વૃક્ષો (સાગ, વાંસ, ચંદન) વાવીને એગ્રોફોરેસ્ટ્રી અપનાવો.",
    "🚜 મોંઘા કૃષિ ધિરાણ લેવાને બદલે કસ્ટમ હાયરિંગ સેન્ટર્સ (CHCs) નો ઉપયોગ કરીને મોંઘી ખેતીની મશીનરી ભાડે લો.",
    "🌦️ અણધારી આબોહવાની નુકસાની સામે રક્ષણ મેળવવા માટે પ્રધાન મંત્રી ફસલ બીમા યોજના (PMFBY) હેઠળ પાક વીમો ખરીદો.",
    "🌼 બોલવર્મ જેવા વિનાશક જંતુઓને ભટકાવવા માટે મુખ્ય પાકના ખેતરોની આસપાસ ગલગોટાના ફૂલો વાવો.",
    "📈 સ્થાનિક મધ્યસ્થીઓને તમારો પાક વેચતા પહેલા e-NAM પોર્ટલનો ઉપયોગ કરીને સમગ્ર દેશમાં લાઈવ મંડીના ભાવ ટ્રૅક કરો.",
    "🌽 વરસાદ આધારિત વિસ્તારોમાં આબોહવા-સ્થિતિસ્થાપક બાજરીની જાતો (બાજરી, જુવાર, રાગી) ઉગાડો કારણ કે તે ઓછું પાણી વાપરે છે અને સારું વળતર આપે છે.",
    "🌽 ફૂગ અને જીવાતના નુકસાનને રોકવા માટે સંગ્રહ કરતા પહેલા અનાજ અને બીજને ઊંચા પ્લેટફોર્મ પર સારી રીતે સૂકવો."
    ],
    [
    "🌱 ನಿಖರವಾದ NPK ಗೊಬ್ಬರದ ಅವಶ್ಯಕತೆಗಳನ್ನು ತಿಳಿಯಲು ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ (Soil Health Card) ಯೋಜನೆ ಬಳಸಿ ಪ್ರತಿ 2-3 ವರ್ಷಗಳಿಗೊಮ್ಮೆ ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ.",
    "💧 ನೀರನ್ನು ಉಳಿಸಲು ಮತ್ತು ಬೆಳೆಯ ಇಳುವರಿಯನ್ನು ಶೇಕಡಾ 30-50 ರಷ್ಟು ಹೆಚ್ಚಿಸಲು ಹನಿ ಅಥವಾ ತುಂತುರು ನೀರಾವರಿ ಬಳಸಿ.",
    "🌾 ಮಣ್ಣಿನಲ್ಲಿ ನೈಟ್ರೋಜನ್ ಅನ್ನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಮರುಪೂರಣಗೊಳಿಸಲು ಧಾನ್ಯದ ಬೆಳೆಗಳನ್ನು ದ್ವಿದಳ ಧಾನ್ಯಗಳೊಂದಿಗೆ (ಕಡಲೆ, ಹೆಸರುಕಾಳು ಅಥವಾ ಹುರುಳಿ ಮುಂತಾದವು) ಸರದಿಯಲ್ಲಿ ಬೆಳೆಯಿರಿ.",
    "☀️ ವಿದ್ಯುತ್ ಮತ್ತು ಡೀಸೆಲ್ ವೆಚ್ಚವನ್ನು ಕಡಿತಗೊಳಿಸಲು ಪಿಎಂ-ಕುಸುಮ್ (PM-KUSUM) ಯೋಜನೆಯಡಿ ಸೌರಶಕ್ತಿ চালಿತ ನೀರು ಪಂಪ್‌ಗಳಿಗೆ ಬದಲಾಯಿಸಿ.",
    "🪱 ಸಮೃದ್ಧವಾದ, ಕಡಿಮೆ ವೆಚ್ಚದ ಸಾವಯವ ಗೊಬ್ಬರವನ್ನು ಉತ್ಪಾದಿಸಲು ಎರೆಹುಳುಗಳು ಮತ್ತು ಕೃಷಿ ತ್ಯಾಜ್ಯವನ್ನು ಬಳಸಿ ಎರೆಹುಳು ಗೊಬ್ಬರ ತಯಾರಿಸಿ.",
    "🪲 ಕೀಟ ನಿರ್ವಹಣೆಗಾಗಿ ಬೇವಿನ ಬೀಜದ ತಿರುಳಿನ ಸಾರ (NSKE) ಅಥವಾೇವಿನ ಎಣ್ಣೆಯನ್ನು ನೈಸರ್ಗಿಕ, ಕಡಿಮೆ ವೆಚ್ಚದ ಜೈವಿಕ ಕೀಟನಾಶಕವಾಗಿ ಬಳಸಿ.",
    "📱 ನೈಜ-ಸಮಯದ ಸ್ಥಳೀಯ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳಿಗಾಗಿ ಕಿಸಾನ್ ಸುವಿಧಾ ಮತ್ತು ಮೇಘದೂತ್‌ನಂತಹ ಅಧಿಕೃತ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
    "🐞 ಕೀಟಗಳನ್ನು ಮುಂಚಿತವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಹಳದಿ ಅಂಟಿಕೊಳ್ಳುವ ಬೋನ್ಗಳು ಮತ್ತು ಫೆರೋಮೋನ್ ಬೋನ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆ (IPM) ಅಭ್ಯಾಸ ಮಾಡಿ.",
    "🍂 ತೇವಾಂಶವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ಕಳೆಗಳ ಬೆಳವಣಿಗೆಯನ್ನು দমন ಮಾಡಲು ಸಸ್ಯಗಳ ಸುತ್ತಲೂ ಸಾವಯವ ಹೊದಿಕೆಯನ್ನು (ಭತ್ತದ ಹುಲ್ಲು, ಒಣ ಎಲೆಗಳು) ಅನ್ವಯಿಸಿ.",
    "🌧️ ಒಣ ಹವಾಮಾನಕ್ಕಾಗಿ ನೀರನ್ನು ಭದ್ರಪಡಿಸಲು ಮಳೆನೀರು ಕೊಯ್ಲು ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಜಮೀನು ಕೊಳಗಳನ್ನು (ಖೇತ್ ತಲಾಬ್) ನಿರ್ಮಿಸಿ.",
    "🌿 ಮಣ್ಣಿನಿಂದ ಹರಡುವ ರೋಗಗಳ ವಿರುದ್ಧ ರಕ್ಷಿಸಲು ಬಿತ್ತನೆ ಮಾಡುವ ಮೊದಲು ಟ್ರೈಕೋಡರ್ಮಾ ಅಥವಾ ಅಜೊಟೊಬ್ಯಾಕ್ಟರ್ ಜೊತೆ ಬೀಜೋಪಚಾರ ಮಾಡಿ.",
    "🐄 ನಿಯಮಿತ ದೈನಂದಿನ ಆದಾಯ ಮತ್ತು ಸಾವಯವ ಗೊಬ್ಬರಕ್ಕಾಗಿ ಬೆಳೆ ಕೃಷಿಯೊಂದಿಗೆ ಜಾನುವಾರು, ಕೋಳಿ ಅಥವಾ ಮೇಕೆ ಸಾಕಣೆಯನ್ನು ಜೋಡಿಸಿ.",
    "📊 ಬೀಜಗಳು/ಕೀಟನಾಶಕಗಳನ್ನು ಸಗಟು ದರದಲ್ಲಿ ಖರೀದಿಸಲು ಮತ್ತು ಉತ್ತಮ ಮಾರಾಟ ಬೆಲೆ ಪಡೆಯಲು ಸ್ಥಳೀಯ ರೈತ ಉತ್ಪಾದಕರ ಸಂಸ್ಥೆಯಲ್ಲಿ (FPO) ಸೇರಿಕೊಳ್ಳಿ.",
    "🌳 ದೀರ್ಘಕಾಲೀನ ಉಳಿತಾಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಜಮೀನಿನ ಗಡಿಗಳಲ್ಲಿ ಉನ್ನತ ಮೌಲ್ಯದ ಮರಗಳನ್ನು (ತೇಗ, ಬಿದಿರು, ಗಂಧದ ಮರ) ನೆಡುವ ಮೂಲಕ ಕೃಷಿ ಅರಣ್ಯವನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಿ.",
    "🚜 ದುಬಾರಿ ಸಾಲಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಅವುಗಳನ್ನು ಖರೀದಿಸುವ ಬದಲು ಕಸ್ಟಮ್ ಹೈರಿಂಗ್ ಕೇಂದ್ರಗಳನ್ನು (CHCs) ಬಳಸಿ ದುಬಾರಿ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯಿರಿ.",
    "🌦️ ಅನಿರೀಕ್ಷಿತ ಹವಾಮಾನ ನಷ್ಟದಿಂದ ರಕ್ಷಿಸಿಕೊಳ್ಳಲು ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (PMFBY) ಅಡಿಯಲ್ಲಿ ಬೆಳೆ ವಿಮೆ ಖರೀದಿಸಿ.",
    "🌼 ಬಾಯ್‌ವರ್ಮ್‌ಗಳಂತಹ ವಿನಾಶಕ ಕೀಟಗಳನ್ನು ಬೇರೆಡೆಗೆ ತಿರುಗಿಸಲು ಮುಖ್ಯ ಬೆಳೆ ಕ್ಷೇತ್ರಗಳ ಸುತ್ತಲೂ ಚೆಂಡು ಹೂವಿನ ಗಿಡಗಳನ್ನು ನೆಡಿ.",
    "📈 ಸ್ಥಳೀಯ ಮಧ್ಯವರ್ತಿಗಳಿಗೆ ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟ ಮಾಡುವ ಮೊದಲು ಇ-ನಾಮ್ (e-NAM) ಪೋರ್ಟಲ್ ಬಳಸಿ ದೇಶಾದ್ಯಂತದ ಲೈವ್ ಮಂಡಿ ಬೆಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    "🌽 ಮಳೆಯಾಶ್ರಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕಡಿಮೆ ನೀರನ್ನು ಬಳಸಿ ಉತ್ತಮ ಲಾಳ ತರುವ ಹವಾಮಾನ-ಸ್ಥಿತಿಸ್ಥಾಪಕ ಜೋಳದ ತಳಿಗಳನ್ನು (ಸಜ್ಜೆ, ಜೋಳ, ರಾಗಿ) ಬೆಳೆಯಿರಿ.",
    "🌽 ಅಚ್ಚು ಮತ್ತು ಕೀಟಗಳ ಹಾನಿಯನ್ನು ತಡೆಯಲು ಶೇಖರಣೆ ಮಾಡುವ ಮೊದಲು ಧಾನ್ಯಗಳು ಮತ್ತು ಬೀಜಗಳನ್ನು ಎತ್ತರದ ವೇದಿಕೆಗಳ ಮೇಲೆ ಚೆನ್ನಾಗಿ ಒಣಗಿಸಿ."
  ],
  [
    "🌱 ਮਿੱਟੀ ਦੀਆਂ ਸਹੀ NPK ਖਾਦਾਂ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਜਾਣਨ ਲਈ ਸੋਇਲ ਹੈਲਥ ਕਾਰਡ ਸਕੀਮ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਹਰ 2-3 ਸਾਲ ਬਾਅਦ ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਰੋ.",
    "💧 ਪਾਣੀ ਦੀ ਬਚਤ ਕਰਨ ਅਤੇ ਫਸਲ ਦਾ ਝਾੜ 30-50% ਤੱਕ ਵਧਾਉਣ ਲਈ ਤੁਪਕਾ (ਡ੍ਰਿਪ) ਜਾਂ ਫੁਹਾਰਾ ਸਿੰਜાઈ ਦੀ ਵਰਤੋਂ ਕਰੋ.",
    "🌾 ਮਿੱਟੀ ਵਿੱਚ ਕੁਦਰਤੀ ਤੌਰ 'ਤੇ ਨਾਈਟ੍ਰੋਜਨ ਦੀ ਪੂਰਤੀ ਲਈ ਅਨਾਜ ਦੀਆਂ ਫਸਲਾਂ ਨੂੰ ਦਾਲਾਂ (ਜਿਵੇਂ ਕਿ ਛੋਲੇ, ਮਸੂਰ ਜਾਂ ਫਲ੍ਹਿਆਂ) ਨਾਲ ਬਦਲ ਕੇ ਬੀਜੋ.",
    "☀️ ਬਿਜਲੀ ਅਤੇ ਡੀਜ਼ਲ ਦੇ ਖਰਚੇ ਨੂੰ ਘਟਾਉਣ ਲਈ ਪੀਐਮ-ਕੁਸੁਮ (PM-KUSUM) ਸਕੀਮ ਤਹਿਤ ਸੋਲਰ ਨਾਲ ਚੱਲਣ ਵਾਲੇ ਪਾਣੀ ਦੇ ਪੰਪਾਂ ਵੱਲ ਜਾਓ.",
    "🪱 ਅਮੀਰ, ਘੱਟ ਖਰਚੇ ਵਾਲੀ ਜੈਵਿਕ ਖਾਦ ਤਿਆਰ ਕਰਨ ਲਈ ਕੰਚੂਏ (ਅਰਥਵਰਮ) ਅਤੇ ਖੇਤ ਦੇ ਕੂੜੇ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਵਰਮੀਕੰਪੋਸਟਿੰਗ ਕਰੋ.",
    "🪲 ਕੀੜੇਮਾਰ ਪ੍ਰਬੰਧਨ ਲਈ ਕੁਦਰਤੀ, ਘੱਟ ਖਰਚੇ ਵਾਲੀ ਬਾਇਓ-ਕੀੜੇਮਾਰ ਵਜੋਂ ਨيم ਦੇ ਤੇਲ ਦਾ ਐਬਸਟਰੈਕਟ (NSKE) ਜਾਂ ਨਿੰਮ ਦਾ ਤੇਲ ਵਰਤੋ.",
    "📱 ਅਸਲ-ਸਮੇਂ ਦੀਆਂ ਸਥਾਨਕ ਮੌਸਮੀ ਚੇਤਾਵਨੀਆਂ ਅਤੇ ਮੰਡੀ ਦੇ ਭਾਵਾਂ ਲਈ ਕਿਸਾਨ ਸੁਵਿਧਾ ਅਤੇ ਮੇਘਦੂਤ ਵਰਗੀਆਂ ਅਧਿਕਾਰਤ ਐਪਸ ਡਾਊਨਲੋਡ ਕਰੋ.",
    "🐞 ਕੀੜਿਆਂ ਦੀ ਸ਼ੁਰੂਆਤੀ ਨਿਗਰਾਨੀ ਲਈ ਪੀਲੇ ਚਿਪਕਣ ਵਾਲੇ ਟਰੈਪ ਅਤੇ ਫੇਰੋਮੋਨ ਟਰੈਪ ਲਗਾ ਕੇ ਏਕੀਕ੍ਰਿਤ ਕੀੜੇ ਪ੍ਰਬੰਧਨ (IPM) ਅਪਣਾਓ.",
    "🍂 ਨਮੀ ਬਣਾਈ ਰੱਖਣ ਅਤੇ ਨਦੀਨਾਂ ਦੇ ਵਾਧੇ ਨੂੰ ਦਬਾਉਣ ਲਈ ਪੌਦਿਆਂ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਜੈਵਿਕ ਮਲਚ (ਝੋਨੇ ਦੀ ਪਰਾਲੀ, ਸੁੱਕੇ ਪੱਤੇ) ਦੀ ਵਰਤੋਂ ਕਰੋ.",
    "🌧️ ਖੁਸ਼ਕ ਮੌਸਮ ਲਈ ਪਾਣੀ ਸੁਰੱਖਿਅਤ ਕਰਨ ਲਈ ਮੀਂਹ ਦੇ ਪਾਣੀ ਦੀ ਸੰਭਾਲ ਕਰੋ ਅਤੇ ਖੇਤ ਤਾਲਾਬ ਬਣਾਓ.",
    "🌿 ਮਿੱਟੀ ਤੋਂ ਹੋਣ ਵਾਲੀਆਂ ਬਿਮਾਰੀਆਂ ਤੋਂ ਬਚਾਉਣ ਲਈ ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ ਬੀਜਾਂ ਨੂੰ ਟ੍ਰਾਈਕੋਡਰਮਾ ਜਾਂ ਐਜ਼ੋਟੋਬੈਕਟਰ ਨਾਲ ਸੋਧੋ.",
    "🐄 ਨਿਯਮਤ ਰੋਜ਼ਾਨਾ ਆਮਦਨ ਅਤੇ ਜੈਵਿਕ ਖਾਦ ਲਈ ਫਸਲਾਂ ਦੀ ખેતી ਦੇ ਨਾਲ ਪਸ਼ੂ ਪਾਲਣ, ਮੁਰਗੀ ਪਾਲਣ ਜਾਂ ਬੱਕਰੀ ਪਾਲਣ ਨੂੰ ਜੋੜੋ.",
    "📊 ਬੀਜ/ਕੀੜੇਮਾਰ ਦਵਾਈਆਂ ਥੋਕ ਭਾਅ 'ਤੇ ਖਰੀਦਣ ਅਤੇ ਵੇਚਣ ਦੇ ਵਧੀਆ ਭਾਵ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਥਾਨਕ ਫਾਰਮਰਜ਼ ਪ੍ਰੋਡਿਊਸਰ ਆਰਗੇਨਾਈਜ਼ੇਸ਼ਨ (FPO) ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਓ.",
    "🌳 ਲੰਬੇ ਸਮੇਂ ਦੀ ਬਚਤ ਲਈ ਆਪਣੇ ਖੇਤ ਦੀਆਂ ਹੱਦਾਂ 'ਤੇ ਉੱਚ ਮੁੱਲ ਵਾਲੇ ਦਰੱਖਤ (ਸਾਗਵਾਨ, ਬਾਂਸ, ਚੰਦਨ) ਲਗਾ ਕੇ ਐਗਰੋਫੋਰੈਸਟਰੀ ਅਪਣਾਓ.",
    "🚜 ਮਹਿੰਗੇ ਕਰਜ਼ੇ ਲੈ ਕੇ ਖਰੀਦਣ ਦੀ ਬਜਾਏ ਕਸਟਮ ਹਾਇਰਿੰਗ ਸੈਂਟਰਾਂ (CHCs) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮਹਿੰਗੀ ਖੇਤੀ ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ ਲਓ.",
    "🌦️ ਅਚਾਨਕ ਮੌਸਮੀ ਨੁਕਸਾਨ ਤੋਂ ਬਚਣ ਲਈ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ (PMFBY) ਤਹਿਤ ਫਸਲ ਦਾ ਬੀਮਾ ਖਰੀਦੋ.",
    "🌼 ਬੋਲਵਰਮ ਵਰਗੇ ਵਿਨਾਸ਼ਕਾਰੀ ਕੀੜਿਆਂ ਨੂੰ ਦੂਰ ਰੱਖਣ ਲਈ ਮੁੱਖ ਫਸਲ ਦੇ ਖੇਤਾਂ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਗੇਂਦੇ ਦੇ ਫੁੱਲ ਲਗਾਓ.",
    "📈 ਸਥਾਨਕ ਵਿਚੋਲਿਆਂ ਨੂੰ ਆਪਣੀ ਉਪਜ ਵੇਚਣ ਤੋਂ ਪਹਿਲਾਂ ਈ-ਨਾਮ (e-NAM) ਪੋਰਟਲ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਦੇਸ਼ ਭਰ ਵਿੱਚ ਲਾਈਵ ਮੰਡੀ ਦੇ ਭਾਵਾਂ ਨੂੰ ਟਰੈਕ ਕਰੋ.",
    "🌽 ਬਾਰਸ਼ 'ਤੇ ਨਿਰਭਰ ਖੇਤਰਾਂ ਵਿੱਚ ਘੱਟ ਪਾਣੀ ਦੀ ਖਪਤ ਕਰਨ ਵਾਲੀਆਂ ਅਤੇ ਵਧੀਆ ਝਾੜ ਦੇਣ ਵਾਲੀਆਂ ਜਲਵਾਯੂ-ਸਥਿਰ ਬਾਜਰੇ ਦੀਆਂ ਕਿਸਮਾਂ (ਬਾਜਰਾ, ਜਵਾਰ, ਰਾਗੀ) ਉਗਾਓ.",
    "🌽 ਉੱਲੀ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਨੁਕਸਾਨ ਨੂੰ ਰੋਕਣ ਲਈ ਸਟੋਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਅਨਾਜ ਅਤੇ ਬੀਜਾਂ ਨੂੰ ਉੱਚੇ ਪਲੇਟਫਾਰਮਾਂ 'ਤੇ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸੁਕਾਓ."
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
    setGujurati.disabled = false
    setKannada.disabled = false
    setPunjabi.disabled = false
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
    setGujurati.disabled = true
    setKannada.disabled = true
    setPunjabi.disabled = true

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
let activeUtterances = []

// Map regional language names to standard BCP-47 codes
const langMap = {
  'english': 'en-US',
  'hindi': 'hi-IN',
  'tamil': 'ta-IN',
  'telugu': 'te-IN',
  'bengali': 'bn-IN',
  'marathi': 'mr-IN',
  'gujurati': 'gu-IN',
  'kannada': 'kn-IN',
  'punjabi': 'pa-IN'
}

// Pre-load system voices safely
const loadVoices = () => {
  try {
    voices = synth.getVoices()
  } catch (e) {
    console.error('Error loading voices:', e)
  }
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

// Robust Indic Voice Finder with Soft Fallbacks
const getMatchingVoice = (langCode) => {
  if (!voices || !voices.length) voices = synth.getVoices()
  if (!voices || !voices.length) return null

  const target = langCode.toLowerCase()
  const primary = target.split('-')[0] // 'hi', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'pa'

  // 1. Exact match (e.g., 'hi-in')
  let voice = voices.find(v => v.lang && v.lang.toLowerCase().replace('_', '-') === target)

  // 2. Primary language match (e.g., any 'hi' voice)
  if (!voice) {
    voice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(primary))
  }

  // 3. Indian Regional Fallback: try Hindi or English-India if regional voice missing on device
  if (!voice && target.endsWith('-in')) {
    voice = voices.find(v => v.lang && (v.lang.toLowerCase().startsWith('hi-in') || v.lang.toLowerCase().startsWith('en-in')))
  }

  return voice || null
}

const updateButtonStates = (isPlaying) => {
  if (typeof playBtn !== 'undefined' && playBtn) playBtn.disabled = isPlaying
  if (typeof stopBtn !== 'undefined' && stopBtn) stopBtn.disabled = !isPlaying
}

// Keep-alive timer for Chrome 15s bug
const startKeepAlive = () => {
  stopKeepAlive()
  keepAliveTimer = setInterval(() => {
    if (synth.speaking && !synth.paused) {
      synth.pause()
      synth.resume()
    }
  }, 8000)
}

const stopKeepAlive = () => {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer)
    keepAliveTimer = null
  }
}

// Safe Universal Text Chunker supporting Indic script punctuation
const chunkText = (text) => {
  if (!text || typeof text !== 'string') return []
  
  // Split on Western (. ! ?) and Indic punctuation (Purna Virama/Danda । and Double Danda ॥) or newlines
  const rawSentences = text.split(/[\.!\?\n\u0964\u0965]+/)
  const chunks = []

  for (let i = 0; i < rawSentences.length; i++) {
    let cleanStr = rawSentences[i].trim()
    if (!cleanStr) continue

    // Keep chunks under ~100 characters (Indic complex scripts perform best with smaller text units)
    while (cleanStr.length > 100) {
      let splitIndex = cleanStr.lastIndexOf(' ', 100)
      if (splitIndex === -1 || splitIndex < 20) splitIndex = 100

      chunks.push(cleanStr.substring(0, splitIndex).trim())
      cleanStr = cleanStr.substring(splitIndex).trim()
    }

    if (cleanStr.length > 0) {
      chunks.push(cleanStr)
    }
  }

  return chunks
}

const isElementInViewport = (el) => {
  if (!el || !(el instanceof HTMLElement)) return false
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const isVisibleInDOM = rect.width > 0 && rect.height > 0
  const isInView = rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0

  return isVisibleInDOM && isInView
}

// Main speak controller
const speakTags = (tags, inputLang = 'english') => {
  try {
    synth.cancel()
  } catch(e){}
  
  stopKeepAlive()
  queue = []
  queueIndex = 0
  currentUtterance = null
  activeUtterances = []

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

  elements
    .filter(el => el && isElementInViewport(el))
    .forEach(el => {
      const text = el.innerText || el.textContent || ''
      const textChunks = chunkText(text)
      textChunks.forEach(chunk => {
        queue.push({
          text: chunk,
          lang: targetLangCode
        })
      })
    })

  if (queue.length === 0) {
    updateButtonStates(false)
    return
  }

  queueIndex = 0
  updateButtonStates(true)
  speakNextChunk()
}

// Speak queue processor
const speakNextChunk = () => {
  if (queueIndex >= queue.length) {
    cleanUpState()
    return
  }

  const currentItem = queue[queueIndex]
  currentUtterance = new SpeechSynthesisUtterance(currentItem.text)
  currentUtterance.lang = currentItem.lang

  // Match voice or default to OS language engine
  const matchingVoice = getMatchingVoice(currentItem.lang)
  if (matchingVoice) {
    currentUtterance.voice = matchingVoice
  }

  activeUtterances.push(currentUtterance)

  currentUtterance.onstart = () => {
    startKeepAlive()
  }

  currentUtterance.onend = () => {
    activeUtterances = activeUtterances.filter(u => u !== currentUtterance)
    queueIndex++
    speakNextChunk()
  }

  // Gracefully jump to next chunk if single chunk fails
  currentUtterance.onerror = (e) => {
    console.warn('Speech chunk error for language:', currentItem.lang, e)
    activeUtterances = activeUtterances.filter(u => u !== currentUtterance)
    queueIndex++
    speakNextChunk()
  }

  try {
    synth.speak(currentUtterance)
  } catch (e) {
    console.error('synth.speak failure:', e)
    cleanUpState()
  }
}

const cleanUpState = () => {
  stopKeepAlive()
  queue = []
  queueIndex = 0
  currentUtterance = null
  activeUtterances = []
  updateButtonStates(false)
}

const stopTTS = () => {
  stopKeepAlive()
  try {
    synth.cancel()
  } catch (e) {
    console.error('Error cancelling speech:', e)
  }
  cleanUpState()
}

// Event Listeners
if (typeof playBtn !== 'undefined' && playBtn) {
  playBtn.addEventListener('click', () => {
    if (synth.paused) {
      synth.resume()
    }
    if (!voices.length) {
      loadVoices()
    }

    speakTags([startingTextContainer, FI], typeof langName !== 'undefined' ? langName : 'english')
  })
}

if (typeof stopBtn !== 'undefined' && stopBtn) {
  stopBtn.addEventListener('click', () => {
    stopTTS()
  })
}

//