// script.js
// ========================
// ОБЪЕКТ ПЕРЕВОДОВ (ОБНОВЛЕННЫЙ)
// ========================
const translations = {
    en: {
        market_overview: "Market Overview",
        portfolio_title: "Portfolio",
        tools_title: "Tools",
        news: "News",
        liquidations_title: "Liquidations",
        funding_rate_title: "Funding",
        order_depth_title: "Order Depth",
        domination_title: "DOMINATION",
        dex_explorer_title: "DEX",
cex_exchanges_title: "CEX Exchanges",
        token_list: "Token List",
        open_interest: "Open Interest",
        "24h_volume": "24h Volume",
        alpha_tracker_pro: "Alpha Tracker PRO",
        nft_explorer_title: "NFT Explorer",
        airdrop_radar_title: "Airdrop Radar",
        defi_title: "DeFi",
        compare_title: "Compare",
        support_project: "Support",
        view_cards: "Card View",
        view_table: "Table View",
        all: "All",
        winners: "Top Gainers",
        losers: "Top Losers",
        favoritesFilter: "Favorites",
        volume: "Volume",
        priceChange: "Price Change",
        loading: "Loading...",
        token: "Token",
        price: "Price",
        change: "Change",
        support: "Support",
        resistance: "Resistance",
        favorites: "Favorites",
        click_for_details: "Click for details",
        network_error: "Network error, please try again later",
        news_error: "Failed to load news",
        save_data: "Save Data",
        load_data: "Load Data",
        portfolio_value: "Portfolio Value",
        portfolio_distribution: "Distribution",
        portfolio_history: "Performance History",
        my_assets: "My Assets",
        add_asset: "Add Asset",
        active_alerts: "Active Alerts",
        add_alert: "Add Alert",
        search_token: "Search token...",
        target_price: "Target Price",
        condition: "Condition",
        above: "Above",
        below: "Below",
        add_alert_btn: "Add Alert",
        position_calculator: "Position Calculator",
        entry_price: "Entry Price ($)",
        exit_price: "Exit Price ($)",
        position_size: "Position Size",
        leverage: "Leverage",
        calculate: "Calculate",
        pnl: "PNL:",
        roi: "ROI:",
        fees: "Fees:",
        risk_calculator: "Risk Calculator",
        capital_size: "Capital Size ($)",
        risk_per_trade: "Risk Per Trade (%)",
        stop_loss: "Stop Loss ($)",
        position_size_result: "Position Size:",
        risk_amount_result: "Risk Amount:",
        stop_distance_result: "Stop Distance:",
        volume_analysis: "Volume Analysis",
        open_tradingview: "Open in TradingView",
        tf_1m: "1m",
        tf_5m: "5m",
        tf_15m: "15m",
        tf_1h: "1h",
        tf_4h: "4h",
        tf_1d: "1d",
        no_assets: "No assets added",
        add_first_asset: "Add First Asset",
        remove: "Remove",
        alert_triggered: "Triggered",
        alert_active: "Active",
        data_saved: "Data saved successfully",
        data_loaded: "Data loaded successfully",
        invalid_file: "Invalid data file",
        extreme_fear: "Extreme Fear",
        fear: "Fear",
        neutral: "Neutral",
        greed: "Greed",
        extreme_greed: "Extreme Greed",
        dual_charts: "Binance DualCharts"
    },
    ua: {
        market_overview: "Огляд ринку",
        portfolio_title: "Портфель",
        tools_title: "Інструменти",
        news: "Новини",
        liquidations_title: "Ліквідації",
        funding_rate_title: "Фінансування",
        order_depth_title: "Глибина ринку",
        domination_title: "Домінування",
        dex_explorer_title: "DEX",
cex_exchanges_title: "Централізовані біржі",
        token_list: "Список токенів",
        open_interest: "Відкритий інтерес",
        "24h_volume": "Обсяг за 24 год",
        alpha_tracker_pro: "Alpha Tracker PRO",
        nft_explorer_title: "NFT Explorer",
        airdrop_radar_title: "Airdrop Radar",
        defi_title: "DeFi",
        compare_title: "Порівняння",
        support_project: "Підтримка",
        view_cards: "Картки",
        view_table: "Таблиця",
        all: "Всі",
        winners: "Топ ростів",
        losers: "Топ падінь",
        favoritesFilter: "Обране",
        volume: "Обсяг",
        priceChange: "Зміна ціни",
        loading: "Завантаження...",
        token: "Токен",
        price: "Ціна",
        change: "Зміна",
        support: "Підтримка",
        resistance: "Опір",
        favorites: "Обране",
        click_for_details: "Натисніть для деталей",
        network_error: "Помилка мережі, спробуйте пізніше",
        news_error: "Не вдалося завантажити новини",
        save_data: "Зберегти дані",
        load_data: "Завантажити дані",
        portfolio_value: "Вартість портфеля",
        portfolio_distribution: "Розподіл",
        portfolio_history: "Історія продуктивності",
        my_assets: "Мої активи",
        add_asset: "Додати актив",
        active_alerts: "Активні сповіщення",
        add_alert: "Додати сповіщення",
        search_token: "Пошук токена...",
        target_price: "Цільова ціна",
        condition: "Умова",
        above: "Вище",
        below: "Нижче",
        add_alert_btn: "Додати сповіщення",
        position_calculator: "Калькулятор позиції",
        entry_price: "Ціна входу ($)",
        exit_price: "Ціна виходу ($)",
        position_size: "Розмір позиції",
        leverage: "Кредитне плече",
        calculate: "Розрахувати",
        pnl: "Прибуток/збиток:",
        roi: "ROI:",
        fees: "Комісії:",
        risk_calculator: "Калькулятор ризику",
        capital_size: "Розмір капіталу ($)",
        risk_per_trade: "Ризик на угоду (%)",
        stop_loss: "Стоп-лос ($)",
        position_size_result: "Розмір позиції:",
        risk_amount_result: "Сума ризику:",
        stop_distance_result: "Відстань стопу:",
        volume_analysis: "Аналіз обсягів",
        open_tradingview: "Відкрити в TradingView",
        tf_1m: "1хв",
        tf_5m: "5хв",
        tf_15m: "15хв",
        tf_1h: "1год",
        tf_4h: "4год",
        tf_1d: "1д",
        no_assets: "Активи відсутні",
        add_first_asset: "Додати перший актив",
        remove: "Видалити",
        alert_triggered: "Спрацювало",
        alert_active: "Активне",
        data_saved: "Дані успішно збережено",
        data_loaded: "Дані успішно завантажено",
        invalid_file: "Невірний файл даних",
        extreme_fear: "Екстремальний страх",
        fear: "Страх",
        neutral: "Нейтрально",
        greed: "Жадібність",
        extreme_greed: "Екстремальна жадібність",
        dual_charts: "Binance DualCharts"
    },
    ru: {
        market_overview: "Обзор рынка",
        portfolio_title: "Портфель",
        tools_title: "Инструменты",
        news: "Новости",
        liquidations_title: "Ликвидации",
        funding_rate_title: "Фандинг",
        order_depth_title: "Глубина рынка",
        domination_title: "Доминирование",
        dex_explorer_title: "DEX",
cex_exchanges_title: "Централизованные биржи",
        token_list: "Список токенов",
        open_interest: "Открытый интерес",
        "24h_volume": "Объем за 24ч",
        alpha_tracker_pro: "Alpha Tracker PRO",
        nft_explorer_title: "NFT Explorer",
        airdrop_radar_title: "Airdrop Radar",
        defi_title: "DeFi",
        compare_title: "Сравнение",
        support_project: "Поддержка",
        view_cards: "Карточки",
        view_table: "Таблица",
        all: "Все",
        winners: "Топ роста",
        losers: "Топ падения",
        favoritesFilter: "Избранное",
        volume: "Объем",
        priceChange: "Изменение цены",
        loading: "Загрузка...",
        token: "Токен",
        price: "Цена",
        change: "Изменение",
        support: "Поддержка",
        resistance: "Сопротивление",
        favorites: "Избранное",
        click_for_details: "Нажмите для деталей",
        network_error: "Ошибка сети, попробуйте позже",
        news_error: "Не удалось загрузить новости",
        save_data: "Сохранить данные",
        load_data: "Загрузить данные",
        portfolio_value: "Стоимость портфеля",
        portfolio_distribution: "Распределение",
        portfolio_history: "История эффективности",
        my_assets: "Мои активы",
        add_asset: "Добавить актив",
        active_alerts: "Активные оповещения",
        add_alert: "Добавить оповещение",
        search_token: "Поиск токена...",
        target_price: "Целевая цена",
        condition: "Условие",
        above: "Выше",
        below: "Ниже",
        add_alert_btn: "Добавить оповещение",
        position_calculator: "Калькулятор позиции",
        entry_price: "Цена входа ($)",
        exit_price: "Цена выхода ($)",
        position_size: "Размер позиции",
        leverage: "Кредитное плечо",
        calculate: "Рассчитать",
        pnl: "Прибыль/убыток:",
        roi: "ROI:",
        fees: "Комиссии:",
        risk_calculator: "Калькулятор риска",
        capital_size: "Размер капитала ($)",
        risk_per_trade: "Риск на сделку (%)",
        stop_loss: "Стоп-лосс ($)",
        position_size_result: "Размер позиции:",
        risk_amount_result: "Сумма риска:",
        stop_distance_result: "Дистанция стопа:",
        volume_analysis: "Анализ объемов",
        open_tradingview: "Открыть в TradingView",
        tf_1m: "1м",
        tf_5m: "5м",
        tf_15m: "15м",
        tf_1h: "1ч",
        tf_4h: "4ч",
        tf_1d: "1д",
        no_assets: "Активы отсутствуют",
        add_first_asset: "Добавить первый актив",
        remove: "Удалить",
        alert_triggered: "Сработало",
        alert_active: "Активно",
        data_saved: "Данные успешно сохранены",
        data_loaded: "Данные успешно загружены",
        invalid_file: "Некорректный файл данных",
        extreme_fear: "Экстремальный страх",
        fear: "Страх",
        neutral: "Нейтрально",
        greed: "Жадность",
        extreme_greed: "Экстремальная жадность",
        dual_charts: "Binance DualCharts"
    }
};

// Глобальные функции для работы с модальным окном
window.openAddAssetModal = openAddAssetModal;
window.closeAddAssetModal = closeAddAssetModal;

// Инициализация переменных
var currentLanguage = 'en';
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
if (!Array.isArray(favorites)) favorites = [];
var cardView = false;
var heatmapType = 'volume';
var allTokensData = [];
var currentPage = 'market';

// Массив бирж с реферальными ссылками
const exchanges = [
    {
        name: {
            en: "Bybit",
            ua: "Байбіт",
            ru: "Байбит"
        },
        url: "https://bybit.com/ru-RU/invite?ref=3EVP8EE&utm_source=CryptoRadar",
        bonus: {
            en: "Get up to $500 bonus when registering!",
            ua: "Отримай до $500 бонусу при реєстрації!",
            ru: "Получи до $500 бонуса при регистрации!"
        }
    },
    {
        name: {
            en: "OKX",
            ua: "ОКХ",
            ru: "ОКХ"
        },
        url: "https://okx.com/join/45675556?utm_source=CryptoRadar",
        bonus: {
            en: "20% discount on commissions + giveaways",
            ua: "Знижка на комісію 20% + розіграші",
            ru: "Скидка на комиссию 20% + розыгрыши"
        }
    },
    {
        name: {
            en: "Binance",
            ua: "Бінанс",
            ru: "Бинанс"
        },
        url: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_0036WCZERW",
        bonus: {
            en: "10% cashback from every commission",
            ua: "10% кешбек з кожної комісії",
            ru: "10% кешбек с каждой комиссии"
        }
    },
    {
        name: {
            en: "Bitget",
            ua: "Бітґет",
            ru: "Битгет"
        },
        url: "https://www.bitgetapp.com/ru/referral/register?clacCode=ZXCX2PKZ&utm_source=CryptoRadar",
        bonus: {
            en: "Bonuses up to $4000 on first deposit",
            ua: "Бонуси до $4000 на перший депозит",
            ru: "Бонусы до $4000 на первый депозит"
        }
    },
    {
        name: {
            en: "KuCoin",
            ua: "Кукоїн",
            ru: "Кукоин"
        },
        url: "https://www.kucoin.com/ucenter/signup?rcode=Z6CDCWDA&utm_source=c_k_share&utm_campaign=CryptoRadar",
        bonus: {
            en: "20% discount on trading commissions",
            ua: "20% знижка на трейдинг комісії",
            ru: "20% скидка на трейдинг комиссии"
        }
    },
    {
        name: {
            en: "MEXC",
            ua: "МЕХС",
            ru: "МЕХС"
        },
        url: "https://promote.mexc.com/r/t6boLrCn",
        bonus: {
            en: "$50 bonus + 0% spot commission!",
            ua: "50$ бонус + 0% комісія на спот!",
            ru: "50$ бонус + 0% комиссия на спот!"
        }
    },
    {
        name: {
            en: "BingX",
            ua: "БінгХ",
            ru: "БингХ"
        },
        url: "https://bingx.com/invite/RUJECH/",
        bonus: {
            en: "$5 bonus for newcomers",
            ua: "5 USDT бонус новачку",
            ru: "5 USDT бонус новичку"
        }
    },
    {
        name: {
            en: "WEEX",
            ua: "ВІІХ",
            ru: "ВИИХ"
        },
        url: "https://weex.com/register?vipCode=6u4an",
        bonus: {
            en: "Welcome bonus up to 100 USDT",
            ua: "Вітальний бонус до 100 USDT",
            ru: "Приветственный бонус до 100 USDT"
        }
    },
    {
        name: {
            en: "BitMart",
            ua: "БітМарт",
            ru: "БитМарт"
        },
        url: "https://www.bitmart.com/invite/cpRBXD/ru",
        bonus: {
            en: "Access to early tokens + bonus",
            ua: "Доступ до ранніх токенів + бонус",
            ru: "Доступ к ранним токенам + бонус"
        }
    },
    {
        name: {
            en: "CoinEx",
            ua: "КойнЕкс",
            ru: "КойнЭкс"
        },
        url: "https://www.coinex.com/register?refer_code=t74ax&channel=Referral",
        bonus: {
            en: "Get bonuses for trading and partnership",
            ua: "Отримай бонуси за трейдинг та партнерку",
            ru: "Получи бонусы за трейдинг и партнерство"
        }
    }
];

// Портфель и алерты
var portfolio = [];
try {
    var storedPortfolio = localStorage.getItem("portfolio");
    portfolio = storedPortfolio ? JSON.parse(storedPortfolio) : [];
} catch (e) {
    console.error('Error loading portfolio:', e);
    portfolio = [];
}

var priceAlerts = JSON.parse(localStorage.getItem("priceAlerts")) || [];

var storedTheme = localStorage.getItem('darkMode');
var isDarkMode = storedTheme === null ? true : storedTheme === 'true';

var currentSymbol = '';
var currentTimeframe = '15m';
var chartWebSocket = null;
var chartData = [];
var resizeHandler = null;

// Индикаторы
const indicators = {
    activeIndicators: new Set(['sma50', 'sma200']),
    toggle(indicator) {
        if (this.activeIndicators.has(indicator)) {
            this.activeIndicators.delete(indicator);
        } else {
            this.activeIndicators.add(indicator);
        }
        if (currentSymbol) {
            initTradingViewChart("modalChartTV", currentSymbol, currentTimeframe);
        }
    }
};

// Функция перевода страницы
function translatePage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    var elements = document.querySelectorAll('[data-translate]');
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.placeholder) {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    }
    updateViewToggleButton();
}

// Обновление текста кнопки вида
function updateViewToggleButton() {
    var btnText = document.getElementById("viewToggleText");
    if (btnText) {
        if (cardView) {
            btnText.textContent = translations[currentLanguage].view_table;
        } else {
            btnText.textContent = translations[currentLanguage].view_cards;
        }
    }
}

// ========================
// ФУНКЦИИ СОХРАНЕНИЯ И ЗАГРУЗКИ ДАННЫХ
// ========================

// Функция сохранения данных
function saveData() {
    const data = {
        portfolio: portfolio,
        alerts: priceAlerts
    };
    
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'crypto-insights-data.json';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNotification(translations[currentLanguage].data_saved, 'success');
    }, 100);
}

// Функция загрузки данных из файла
function loadDataFromFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            
            // Проверка структуры файла
            if (!data.portfolio || !data.alerts) {
                throw new Error(translations[currentLanguage].invalid_file);
            }
            
            portfolio = data.portfolio;
            priceAlerts = data.alerts;
            
            localStorage.setItem('portfolio', JSON.stringify(portfolio));
            localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
            
            renderPortfolio();
            renderAlerts();
            showNotification(translations[currentLanguage].data_loaded, 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        }
        
        // Сброс значения input для возможности загрузки того же файла снова
        e.target.value = '';
    };
    reader.readAsText(file);
}

// ========================
// ОСНОВНЫЕ ФУНКЦИИ РЫНКА
// ========================

// Форматирование цены с учетом точности
function formatPrice(price) {
    if (isNaN(price)) return '0.00';
    if (price < 0.0001) return price.toFixed(8);
    if (price < 1) return price.toFixed(6);
    if (price < 1000) return price.toFixed(4);
    return price.toFixed(2);
}

// Форматирование больших чисел
function formatLargeNumber(num) {
    if (isNaN(num)) return '0.00';
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
    return num.toFixed(2);
}

// Маппинг символов для иконок
var specialTokenMapping = {
    'SHIBUSDT': 'SHIB',
    'BTTUSDT': 'BTT',
    'HOTUSDT': 'HOT',
    'PERLUSDT': 'PERL',
    'MBLUSDT': 'MBL',
    'STMXUSDT': 'STMX',
    'KEYUSDT': 'KEY',
    'TROYUSDT': 'TROY',
    'IQUSDT': 'IQ',
    'SLPUSDT': 'SLP',
    'SANDUSDT': 'SAND',
    'GALAUSDT': 'GALA',
    'GALUSDT': 'GAL',
    'PEOPLEUSDT': 'PEOPLE'
};

// Получение URL иконки токена
function getTokenIconURL(symbol) {
    var baseSymbol = specialTokenMapping[symbol] || symbol.replace(/USDT$/, '');
    return 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.0/svg/color/' + baseSymbol.toLowerCase() + '.svg';
}

// Обработка ошибок загрузки иконок
window.handleIconError = function(img, symbol) {
    if (!img) return;
    
    const tokenSymbol = symbol || (img.alt ? img.alt.replace(' icon', '') : '') || '';
    const text = tokenSymbol.substring(0, 4);
    const size = img.classList.contains('token-icon') ? '32' : '24';
    
    // Создаем SVG с контрастным фоном
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">
        <rect width="32" height="32" rx="16" fill="#2d3748"/>
        <text x="16" y="18" font-family="Arial" font-size="12" 
              fill="white" text-anchor="middle">${text}</text>
    </svg>`;
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svg);
    img.onerror = null;
};

// Генерация истории цен для мини-графика с учетом поддержки и сопротивления
function generatePriceHistory(currentPrice, openPrice, highPrice, lowPrice) {
    var prices = [currentPrice];
    var volatility = (highPrice - lowPrice) * 0.1;
    
    for (var i = 1; i < 24; i++) {
        var prevPrice = prices[i-1];
        // Генерируем цену, которая остается в пределах диапазона high-low
        var newPrice = prevPrice * (1 + (Math.random() - 0.5) * 0.05);
        prices.push(Math.max(lowPrice, Math.min(highPrice, newPrice)));
    }
    
    return prices;
};

// Создание мини-графика с поддержкой и сопротивлением
function createMiniChart(canvas, token) {
    if (!canvas) return;
    
    var price = parseFloat(token.lastPrice) || 0;
    var open = parseFloat(token.openPrice) || 0;
    var high = parseFloat(token.highPrice) || 0;
    var low = parseFloat(token.lowPrice) || 0;
    
    var isUp = price >= open;
    var range = high - low;
    
    // Генерируем историю цен
    var prices = generatePriceHistory(price, open, high, low);
    
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    
    // Рассчитываем позиции для линий поддержки/сопротивления
    var minPrice = Math.min.apply(null, prices);
    var maxPrice = Math.max.apply(null, prices);
    var priceRange = maxPrice - minPrice || 1;
    
    // Рисуем область диапазона
    var rangeTop = ((high - minPrice) / priceRange) * height;
    var rangeBottom = ((low - minPrice) / priceRange) * height;
    
    // Очищаем canvas
    ctx.clearRect(0, 0, width, height);
    
    // Рисуем область диапазона
    ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.fillRect(0, rangeBottom, width, rangeTop - rangeBottom);
    
    // Рисуем линию поддержки
    ctx.beginPath();
    ctx.strokeStyle = '#22c55e';
    ctx.setLineDash([2, 2]);
    ctx.moveTo(0, rangeBottom);
    ctx.lineTo(width, rangeBottom);
    ctx.stroke();
    
    // Рисуем линию сопротивления
    ctx.beginPath();
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([2, 2]);
    ctx.moveTo(0, rangeTop);
    ctx.lineTo(width, rangeTop);
    ctx.stroke();
    
    // Рисуем график цены
    ctx.beginPath();
    ctx.strokeStyle = isUp ? '#22c55e' : '#ef4444';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    
    for (var i = 0; i < prices.length; i++) {
        var x = (i / (prices.length - 1)) * width;
        var y = height - ((prices[i] - minPrice) / priceRange) * height;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.stroke();
};

// Получение данных о криптовалютах (фьючерсы)
function fetchCryptoData(retries) {
    if (retries === undefined) retries = 3;
    return fetch("https://fapi.binance.com/fapi/v1/ticker/24hr")
        .then(function(res) {
            if (!res.ok) throw new Error('API Error');
            return res.json();
        })
        .then(function(data) {
            return data.filter(function(token) { 
                return token.symbol.endsWith("USDT"); 
            });
        })
        .catch(function(error) {
            if (retries > 0) return fetchCryptoData(retries - 1);
            var loadingEl = document.getElementById("loading");
            if (loadingEl) {
                loadingEl.innerHTML = "⚠️ " + translations[currentLanguage].network_error;
            }
            throw error;
        });
};

// Получение спотовых данных
async function fetchSpotData() {
    try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
        const data = await response.json();
        return data.filter(token => token.symbol.endsWith("USDT"));
    } catch (error) {
        console.error('Spot data error:', error);
        return [];
    }
}

// Получение данных о финансировании
async function fetchFundingRates() {
    try {
        const response = await fetch('https://fapi.binance.com/fapi/v1/premiumIndex');
        const data = await response.json();
        const fundingMap = {};
        data.forEach(item => {
            fundingMap[item.symbol] = parseFloat(item.lastFundingRate) * 100;
        });
        return fundingMap;
    } catch (error) {
        console.error('Funding rates error:', error);
        return {};
    }
}

// Применение фильтров
function applyFilters(data) {
    var filter = document.getElementById("filter-select").value;
    var rawSearch = document.getElementById("searchInput").value;
    
    var search = rawSearch
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '')
        .replace(/([A-Z])([0-9])/g, '$1 $2')
        .split(/\s+/);

    return data.filter(function(token) {
        var symbolParts = token.symbol
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, '')
            .split(/(?=[A-Z])/);

        var match = search.every(function(term) {
            return symbolParts.some(function(part) {
                return part.indexOf(term) === 0;
            }) || symbolParts.join('').indexOf(term) !== -1;
        });

        if (!match) return false;
        if (filter === "winners") return parseFloat(token.priceChangePercent) > 0;
        if (filter === "losers") return parseFloat(token.priceChangePercent) < 0;
        if (filter === "favorites") return favorites.indexOf(token.symbol) !== -1;
        return true;
    });
};

// Сортировка данных
function sortData(data) {
    return data.sort(function(a, b) {
        return parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume);
    }).slice(0, 100);
}

// Отрисовка карточек
function renderCards(tokens) {
    var container = document.getElementById("cards-container");
    if (!container) return;
    
    container.innerHTML = "";
    var tableContainer = document.getElementById("table-container");
    if (tableContainer) tableContainer.classList.add("hidden");
    container.classList.remove("hidden");

    tokens.forEach(function(token) {
        var price = parseFloat(token.lastPrice) || 0;
        var changePercent = parseFloat(token.priceChangePercent) || 0;
        var volume = parseFloat(token.quoteVolume) || 0;
        var div = document.createElement("div");
        div.className = "card p-4 cursor-pointer tooltip";
        div.dataset.symbol = token.symbol;
        div.dataset.tooltip = translations[currentLanguage].click_for_details;
        div.onclick = function() { openModal(token); };

        // Генерация объема для тепловой карты (симуляция)
        var volumeBarWidth = Math.min(100, Math.log(volume + 1) / Math.log(10000000) * 100);
        
        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <div class="text-lg font-bold flex items-center">
                    <img src="${getTokenIconURL(token.symbol)}" 
                        alt="${token.symbol} icon" 
                        class="token-icon" 
                        onerror="handleIconError(this)"/>
                    ${token.symbol.replace('USDT', '')}
                    <span class="ml-2 text-xs px-1 py-0.5 rounded ${
                        token.type === 'futures' ? 
                        'bg-blue-600 text-white' : 
                        'bg-green-600 text-white'
                    }">
                        ${token.type === 'futures' ? 'F' : 'S'}
                    </span>
                </div>
                <div>
                    <button onclick="event.stopPropagation(); toggleFavorite('${token.symbol}')" class="${
                        favorites.indexOf(token.symbol) !== -1 ? "text-yellow-400" : "text-gray-400"
                    } hover:text-yellow-300 text-xl">★</button>
                </div>
            </div>
            <div class="flex justify-between items-center mb-1">
                <div class="text-xl font-semibold">$${formatPrice(price)}</div>
                <span class="px-2 py-1 rounded text-white text-sm font-semibold ${
                    changePercent >= 0 ? "bg-green-500" : "bg-red-500"
                }">
                    ${changePercent.toFixed(2)}%
                </span>
            </div>
            
            <!-- Контейнер для мини-графика -->
            <div class="mini-chart-container">
                <canvas class="mini-chart w-full h-full"></canvas>
            </div>
            
            <!-- Информация о верхней/нижней цене -->
            <div class="mini-chart-price-info">
                <span class="mini-chart-high">H: $${formatPrice(parseFloat(token.highPrice))}</span>
                <span class="mini-chart-low">L: $${formatPrice(parseFloat(token.lowPrice))}</span>
            </div>
            
            <!-- Блок Funding Rate -->
            <div class="mt-1">
                <div class="text-gray-400 text-xs">Funding:</div>
                <div class="${token.fundingRate !== null ? (token.fundingRate >= 0 ? 'funding-positive' : 'funding-negative') : 'text-gray-400'} text-sm font-semibold">
                    ${token.fundingRate !== null ? (token.fundingRate >= 0 ? '+' : '') + token.fundingRate.toFixed(4) + '%' : 'N/A'}
                </div>
            </div>
            
            <div class="relative h-1 mt-2 bg-gray-700 rounded-full">
                <div class="volume-bar" style="width: ${volumeBarWidth}%"></div>
            </div>
        `;
        container.appendChild(div);
        
        // Создаем мини-график
        var canvas = div.querySelector('.mini-chart');
        if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            createMiniChart(canvas, token);
        }
    });
};

// Отрисовка таблицы
function renderTable(tokens) {
    var cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) cardsContainer.classList.add("hidden");
    
    var tableContainer = document.getElementById("table-container");
    if (tableContainer) tableContainer.classList.remove("hidden");
    
    var tbody = document.getElementById("table-body");
    if (!tbody) return;
    
    tbody.innerHTML = "";

    tokens.forEach(function(token) {
        var price = parseFloat(token.lastPrice) || 0;
        var changePercent = parseFloat(token.priceChangePercent) || 0;
        var volume = parseFloat(token.quoteVolume) || 0;
        var tr = document.createElement("tr");
        tr.className = "border-t border-gray-700 cursor-pointer hover:bg-gray-700 tooltip";
        tr.dataset.symbol = token.symbol;
        tr.dataset.tooltip = translations[currentLanguage].click_for_details;
        tr.onclick = function() { openModal(token); };

        tr.innerHTML = `
            <td class="px-4 py-2 flex items-center gap-2">
                <img src="${getTokenIconURL(token.symbol)}" 
                    alt="${token.symbol}" 
                    class="token-icon mr-3" 
                    onerror="handleIconError(this)"/>
                ${token.symbol.replace('USDT', '')}
                <span class="text-xs px-1 py-0.5 rounded ${
                    token.type === 'futures' ? 
                    'bg-blue-600 text-white' : 
                    'bg-green-600 text-white'
                }">
                    ${token.type === 'futures' ? 'F' : 'S'}
                </span>
            </td>
            <td class="px-4 py-2 text-right">$${formatPrice(price)}</td>
            <td class="px-4 py-2 text-right">
                <span class="px-2 py-1 rounded text-white text-sm font-semibold ${
                    changePercent >= 0 ? "bg-green-500" : "bg-red-500"
                }">
                    ${changePercent.toFixed(2)}%
                </span>
            </td>
            <td class="px-4 py-2 text-right">${formatLargeNumber(volume)}</td>
            <td class="px-4 py-2 text-right support-cell">$${formatPrice(parseFloat(token.lowPrice))}</td>
            <td class="px-4 py-2 text-right resistance-cell">$${formatPrice(parseFloat(token.highPrice))}</td>
            <td class="px-4 py-2 text-center">
                <button onclick="event.stopPropagation(); toggleFavorite('${token.symbol}')" class="${
                    favorites.indexOf(token.symbol) !== -1 ? "text-yellow-400" : "text-gray-400"
                } hover:text-yellow-300 text-xl">★</button>
            </td>
            <td class="px-4 py-2 text-right ${token.fundingRate !== null ? (token.fundingRate >= 0 ? 'funding-positive' : 'funding-negative') : 'text-gray-400'}">
                ${token.fundingRate !== null ? (token.fundingRate >= 0 ? '+' : '') + token.fundingRate.toFixed(4) + '%' : 'N/A'}
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Переключение избранного
function toggleFavorite(symbol) {
    if (favorites.indexOf(symbol) !== -1) {
        favorites = favorites.filter(function(s) { return s !== symbol; });
    } else {
        favorites.push(symbol);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateUI();
};

// Открытие модального окна
function openModal(token) {
    if (!token) return;
    
    var modal = document.getElementById("modal");
    if (modal) modal.classList.remove("hidden");
    
    currentSymbol = token.symbol;
    var iconURL = getTokenIconURL(token.symbol);
    
    var modalTitle = document.getElementById("modalTitle");
    if (modalTitle) {
        modalTitle.innerHTML = `
            <img src="${iconURL}" 
                alt="${token.symbol} icon" 
                class="token-icon" 
                onerror="handleIconError(this)"/>
            ${token.symbol.replace('USDT', '')}/USDT
            <span class="text-xs ml-2 px-2 py-1 rounded ${
                token.type === 'futures' ? 
                'bg-blue-600' : 'bg-green-600'
            } text-white">
                ${token.type === 'futures' ? 'Futures' : 'Spot'}
            </span>
        `;
    }

    // Заполняем поддержку и сопротивление
    document.getElementById("modalSupportLabel").textContent = 
        translations[currentLanguage].support + ": $" + formatPrice(parseFloat(token.lowPrice));
    document.getElementById("modalResistanceLabel").textContent = 
        translations[currentLanguage].resistance + ": $" + formatPrice(parseFloat(token.highPrice));
    
    // Добавлено в таблицу деталей
    var detailsBody = document.getElementById("modalDetailsBody");
    if (detailsBody) {
        detailsBody.innerHTML = `
            <tr>
                <td class="px-4 py-1">${translations[currentLanguage].price}</td>
                <td class="px-4 py-1 text-right">$${formatPrice(parseFloat(token.lastPrice))}</td>
            </tr>
            <tr>
                <td class="px-4 py-1">${translations[currentLanguage].change}</td>
                <td class="px-4 py-1 text-right ${parseFloat(token.priceChangePercent) >= 0 ? 'text-green-500' : 'text-red-500'}">
                    ${parseFloat(token.priceChangePercent).toFixed(2)}%
                </td>
            </tr>
            <tr>
                <td class="px-4 py-1">${translations[currentLanguage].volume}</td>
                <td class="px-4 py-1 text-right">${formatLargeNumber(parseFloat(token.quoteVolume))}</td>
            </tr>
            <tr>
                <td class="px-4 py-1">Funding Rate</td>
                <td class="px-4 py-1 text-right ${token.fundingRate !== null ? (token.fundingRate >= 0 ? 'funding-positive' : 'funding-negative') : 'text-gray-400'}">
                    ${token.fundingRate !== null ? (token.fundingRate >= 0 ? '+' : '') + token.fundingRate.toFixed(4) + '%' : 'N/A'}
                </td>
            </tr>
            <tr>
                <td class="px-4 py-1">${translations[currentLanguage].support}</td>
                <td class="px-4 py-1 text-right support-cell">$${formatPrice(parseFloat(token.lowPrice))}</td>
            </tr>
            <tr>
                <td class="px-4 py-1">${translations[currentLanguage].resistance}</td>
                <td class="px-4 py-1 text-right resistance-cell">$${formatPrice(parseFloat(token.highPrice))}</td>
            </tr>
        `;
    }
    
    // Показываем модальное окно
    modal.classList.remove("hidden");
    
    // Инициализируем график после полного отображения контейнера
    setTimeout(() => {
        initTradingViewChart("modalChartTV", token.symbol, currentTimeframe);
    }, 50);
}

// Исправленная функция расчета RSI
function calculateRSI(data, period = 14) {
    if (data.length <= period) return [];
    
    const rsiValues = [];
    let avgGain = 0;
    let avgLoss = 0;

    // Рассчитываем начальные средние
    for (let i = 1; i <= period; i++) {
        const change = data[i].close - data[i-1].close;
        if (change > 0) avgGain += change;
        else avgLoss -= change;
    }
    
    avgGain /= period;
    avgLoss /= period;
    
    // Первое значение RSI
    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    rsiValues.push(100 - (100 / (1 + rs)));
    
    // Рассчитываем последующие значения с экспоненциальным сглаживанием
    for (let i = period + 1; i < data.length; i++) {
        const change = data[i].close - data[i-1].close;
        let gain = 0;
        let loss = 0;
        
        if (change > 0) gain = change;
        else loss = -change;
        
        // Экспоненциальное сглаживание
        avgGain = (avgGain * (period - 1) + gain) / period;
        avgLoss = (avgLoss * (period - 1) + loss) / period;
        
        const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
        rsiValues.push(100 - (100 / (1 + rs)));
    }
    
    return rsiValues;
}

// Исправленная функция расчета SMA
function calculateSMA(data, period) {
    if (data.length < period) return [];
    
    const smaData = [];
    for (let i = period - 1; i < data.length; i++) {
        let sum = 0;
        for (let j = 0; j < period; j++) {
            sum += data[i - j].close;
        }
        smaData.push({ 
            time: data[i].time, 
            value: sum / period 
        });
    }
    return smaData;
}

// Обновление отображения RSI
function updateRsiDisplay(rsiValues) {
    var rsiValueEl = document.getElementById("rsiValue");
    if (!rsiValueEl) return;
    
    if (rsiValues.length === 0) {
        rsiValueEl.textContent = '--';
        return;
    }
    
    var lastRSI = rsiValues[rsiValues.length - 1];
    
    rsiValueEl.textContent = lastRSI.toFixed(2);
    rsiValueEl.className = 'rsi-value ' + (
        lastRSI > 70 ? 'rsi-overbought' : 
        lastRSI < 30 ? 'rsi-oversold' : 'rsi-neutral'
    );
}

// Обновление тепловой карты
function updateHeatmap() {
    var container = document.getElementById("heatmap-container");
    if (!container) return;
    container.innerHTML = "";

    var topTokens = allTokensData.slice()
        .sort(function(a, b) {
            if (heatmapType === 'volume') {
                return parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume);
            } else if (heatmapType === 'funding_rate') {
                return Math.abs(parseFloat(b.fundingRate)) - Math.abs(parseFloat(a.fundingRate));
            } else {
                return Math.abs(parseFloat(b.priceChangePercent)) - Math.abs(parseFloat(a.priceChangePercent));
            }
        })
        .slice(0, 48);

    var maxValue = 0;
    if (heatmapType === 'volume') {
        maxValue = Math.max(...topTokens.map(t => parseFloat(t.quoteVolume)));
    } else if (heatmapType === 'funding_rate') {
        maxValue = Math.max(...topTokens.map(t => Math.abs(t.fundingRate || 0)));
    } else {
        maxValue = Math.max(...topTokens.map(t => Math.abs(parseFloat(t.priceChangePercent))));
    }

    topTokens.forEach(function(token) {
        var cell = document.createElement("div");
        cell.className = "heatmap-cell";
        
        var symbol = token.symbol.replace("USDT", "");
        var price = parseFloat(token.lastPrice);
        var change = parseFloat(token.priceChangePercent);
        var volume = parseFloat(token.quoteVolume);
        var fundingRate = token.fundingRate || 0;
        
        // Определение цвета на основе изменения цены
        var bgColor, changeColor;
        if (heatmapType === 'funding_rate') {
            if (fundingRate >= 0) {
                bgColor = "var(--heatmap-bg-up)";
                changeColor = isDarkMode ? "#22c55e" : "#166534";
            } else {
                bgColor = "var(--heatmap-bg-down)";
                changeColor = isDarkMode ? "#ef4444" : "#991b1b";
            }
        } else {
            if (change >= 0) {
                bgColor = "var(--heatmap-bg-up)";
                changeColor = isDarkMode ? "#22c55e" : "#166534";
            } else {
                bgColor = "var(--heatmap-bg-down)";
                changeColor = isDarkMode ? "#ef4444" : "#991b1b";
            }
        }
        
        cell.style.background = bgColor;
        
        // Интенсивность для высоты полосы
        var value = 0;
        if (heatmapType === 'volume') {
            value = volume;
        } else if (heatmapType === 'funding_rate') {
            value = Math.abs(fundingRate);
        } else {
            value = Math.abs(change);
        }
        
        var intensity = Math.min(1, value / maxValue);
        
        // Индикатор тренда (треугольник)
        var trendIndicator = document.createElement("div");
        trendIndicator.className = "trend-indicator";
        if (heatmapType === 'funding_rate') {
            if (fundingRate >= 0) {
                trendIndicator.style.borderWidth = "0 5px 8px 5px";
                trendIndicator.style.borderColor = "transparent transparent " + changeColor + " transparent";
            } else {
                trendIndicator.style.borderWidth = "8px 5px 0 5px";
                trendIndicator.style.borderColor = changeColor + " transparent transparent transparent";
            }
        } else {
            if (change >= 0) {
                trendIndicator.style.borderWidth = "0 5px 8px 5px";
                trendIndicator.style.borderColor = "transparent transparent " + changeColor + " transparent";
            } else {
                trendIndicator.style.borderWidth = "8px 5px 0 5px";
                trendIndicator.style.borderColor = changeColor + " transparent transparent transparent";
            }
        }
        cell.appendChild(trendIndicator);
        
        // Название токена
        var tokenSymbol = document.createElement("div");
        tokenSymbol.className = "heatmap-token";
        tokenSymbol.textContent = symbol;
        cell.appendChild(tokenSymbol);
        
        // Цена
        var priceElement = document.createElement("div");
        priceElement.className = "heatmap-price";
        priceElement.textContent = '$' + formatPrice(price);
        cell.appendChild(priceElement);
        
        // Значение в зависимости от типа тепловой карты
        var valueElement = document.createElement("div");
        valueElement.className = "heatmap-change";
        
        if (heatmapType === 'funding_rate') {
            valueElement.textContent = (fundingRate >= 0 ? '+' : '') + fundingRate.toFixed(4) + '%';
        } else if (heatmapType === 'change') {
            valueElement.textContent = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
        } else {
            valueElement.textContent = formatLargeNumber(volume);
        }
        
        valueElement.style.backgroundColor = heatmapType === 'funding_rate' ? 
            (fundingRate >= 0 ? 
                isDarkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(22, 101, 52, 0.2)' : 
                isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(153, 27, 27, 0.2)') : 
            (change >= 0 ? 
                isDarkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(22, 101, 52, 0.2)' : 
                isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(153, 27, 27, 0.2)');
        
        valueElement.style.color = changeColor;
        cell.appendChild(valueElement);
        
        // Полоса объема
        var volumeBar = document.createElement("div");
        volumeBar.className = "heatmap-volume-bar";
        volumeBar.style.width = "100%";
        volumeBar.style.background = heatmapType === 'funding_rate' ? 
            (fundingRate >= 0 ? 
                isDarkMode ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'linear-gradient(90deg, #166534, #14532d)' : 
                isDarkMode ? 'linear-gradient(90deg, #ef4444, #991b1b)' : 'linear-gradient(90deg, #7f1d1d, #450a0a)') : 
            (change >= 0 ? 
                isDarkMode ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'linear-gradient(90deg, #166534, #14532d)' : 
                isDarkMode ? 'linear-gradient(90deg, #ef4444, #991b1b)' : 'linear-gradient(90deg, #7f1d1d, #450a0a)');
        
        volumeBar.style.opacity = 0.1 + intensity * 0.7;
        cell.appendChild(volumeBar);
        
        // Обработчик клика
        cell.onclick = function() {
            var prevFilter = document.getElementById("filter-select").value;
            document.getElementById("filter-select").value = "all";
            document.getElementById("searchInput").value = symbol;
            updateUI().then(function() {
                var tokenElement = document.querySelector('[data-symbol="' + token.symbol + '"]');
                if (tokenElement) {
                    tokenElement.scrollIntoView({behavior: "smooth"});
                }
                document.getElementById("filter-select").value = prevFilter;
            });
        };
        
        container.appendChild(cell);
    });
};

// Инициализация графика TradingView (ИСПРАВЛЕННАЯ)
function initTradingViewChart(containerId, symbol, timeframe) {
    // Закрываем предыдущий вебсокет
    if (chartWebSocket) {
        chartWebSocket.close();
        chartWebSocket = null;
    }
    
    if (timeframe === undefined) timeframe = '15m';
    
    currentTimeframe = timeframe;
    var container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Создаем контейнер для ошибок
    var errorContainer = document.createElement('div');
    errorContainer.id = containerId + '-error';
    container.appendChild(errorContainer);
    
    // Проверяем доступность библиотеки
    if (typeof LightweightCharts === 'undefined') {
        errorContainer.innerHTML = '<div class="error-message">' + translations[currentLanguage].network_error + '</div>';
        return;
    }
    
    try {
        var chart = LightweightCharts.createChart(container, {
            layout: {
                background: { color: 'transparent' },
                textColor: isDarkMode ? '#e2e8f0' : '#1e293b',
            },
            grid: {
                vertLines: { color: isDarkMode ? '#334155' : '#cbd5e1' },
                horzLines: { color: isDarkMode ? '#334155' : '#cbd5e1' },
            },
            timeScale: {
                borderColor: isDarkMode ? '#475569' : '#94a3b8',
                timeVisible: true,
                secondsVisible: false,
            },
            crosshair: {
                mode: LightweightCharts.CrosshairMode.Normal,
                vertLine: {
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    width: 1,
                    style: 2,
                },
                horzLine: {
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    width: 1,
                    style: 2,
                },
            },
            localization: {
                priceFormatter: function(price) { return formatPrice(price); }
            },
            rightPriceScale: {
                borderVisible: false,
            },
            leftPriceScale: {
                visible: false,
            }
        });

        var series = chart.addCandlestickSeries({
            upColor: isDarkMode ? '#22c55e' : '#16a34a',
            downColor: isDarkMode ? '#ef4444' : '#dc2626',
            borderUpColor: isDarkMode ? '#22c55e' : '#16a34a',
            borderDownColor: isDarkMode ? '#ef4444' : '#dc2626',
            wickUpColor: isDarkMode ? '#22c55e' : '#16a34a',
            wickDownColor: isDarkMode ? '#ef4444' : '#dc2626',
            priceFormat: {
                type: 'price',
                precision: 8,
                minMove: 0.00000001
            }
        });

        fetch('https://fapi.binance.com/fapi/v1/klines?symbol=' + symbol + '&interval=' + timeframe + '&limit=200')
            .then(function(res) {
                if (!res.ok) throw new Error(translations[currentLanguage].network_error + ': ' + res.status);
                return res.json();
            })
            .then(function(data) {
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error(translations[currentLanguage].network_error);
                }
                
                chartData = data.map(function(d) {
                    return {
                        time: d[0] / 1000, // Преобразуем в секунды
                        open: parseFloat(d[1]),
                        high: parseFloat(d[2]),
                        low: parseFloat(d[3]),
                        close: parseFloat(d[4]),
                    };
                });
                
                series.setData(chartData);
                
                // Рассчитываем RSI
                var rsiValues = calculateRSI(chartData);
                updateRsiDisplay(rsiValues);
                
                // Добавляем технические индикаторы
                addTechnicalIndicators(chart, chartData);
                
                // Вебсокет для обновления данных в реальном времени
                chartWebSocket = new WebSocket('wss://fstream.binance.com/ws/' + symbol.toLowerCase() + '@kline_' + timeframe);
                
                chartWebSocket.onmessage = function(event) {
                    try {
                        var message = JSON.parse(event.data);
                        if (message.k) {
                            var k = message.k;
                            var newCandle = {
                                time: k.t / 1000, // Время в секундах
                                open: parseFloat(k.o),
                                high: parseFloat(k.h),
                                low: parseFloat(k.l),
                                close: parseFloat(k.c),
                            };
                            
                            // Проверяем, не обновляется ли текущая последняя свеча
                            var lastCandle = chartData.length > 0 ? chartData[chartData.length-1] : null;
                            if (lastCandle && lastCandle.time === newCandle.time) {
                                // Обновляем последнюю свечу
                                chartData[chartData.length-1] = newCandle;
                                series.update(newCandle);
                            } else {
                                // Добавляем новую свечу
                                series.update(newCandle);
                                chartData.push(newCandle);
                                // Ограничиваем длину
                                if (chartData.length > 500) {
                                    chartData.shift();
                                }
                            }
                            
                            // Обновляем RSI
                            var rsiValues = calculateRSI(chartData);
                            updateRsiDisplay(rsiValues);
                        }
                    } catch (e) {
                        console.error('WebSocket data processing error:', e);
                    }
                };
                
                chartWebSocket.onerror = function(error) {
                    console.error('WebSocket Error:', error);
                    showNotification(translations[currentLanguage].network_error, 'error');
                };
            })
            .catch(function(error) {
                console.error('TradingView Error:', error);
                if (errorContainer) {
                    errorContainer.innerHTML = '<div class="error-message">' + translations[currentLanguage].network_error + ': ' + error.message + '</div>';
                }
            });

        // Добавляем обработчик ресайза окна
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
        }
        
        resizeHandler = function() {
            if (chart) {
                chart.resize(
                    container.clientWidth,
                    container.clientHeight
                );
            }
        };
        
        window.addEventListener('resize', resizeHandler);

        // Принудительный ресайз после загрузки данных
        setTimeout(() => {
            if (chart) {
                chart.resize(
                    container.clientWidth,
                    container.clientHeight
                );
            }
        }, 500);
    } catch (error) {
        console.error('Chart initialization error:', error);
        if (container) {
            container.innerHTML = '<div class="error-message">' + translations[currentLanguage].network_error + ': ' + error.message + '</div>';
        }
    }
}

// Добавляем технические индикаторы на график
function addTechnicalIndicators(chart, data) {
    // Добавляем SMA 50, если данных достаточно
    if (indicators.activeIndicators.has('sma50') && data.length >= 50) {
        const sma50 = calculateSMA(data, 50);
        if (sma50.length > 0) {
            const sma50Series = chart.addLineSeries({
                color: '#3b82f6',
                lineWidth: 2,
                priceScaleId: 'left',
            });
            sma50Series.setData(sma50);
        }
    }
    
    // Добавляем SMA 200, если данных достаточно
    if (indicators.activeIndicators.has('sma200') && data.length >= 200) {
        const sma200 = calculateSMA(data, 200);
        if (sma200.length > 0) {
            const sma200Series = chart.addLineSeries({
                color: '#ef4444',
                lineWidth: 2,
                priceScaleId: 'left',
            });
            sma200Series.setData(sma200);
        }
    }
    
    // Добавляем RSI, если данных достаточно
    if (indicators.activeIndicators.has('rsi') && data.length >= 28) { // 14*2
        const rsi = calculateRSI(data, 14);
        if (rsi.length > 0) {
            const rsiSeries = chart.addLineSeries({
                color: '#8b5cf6',
                lineWidth: 2,
                priceScaleId: 'right',
            });
            // Убедимся, что количество точек RSI соответствует данным
            const rsiData = [];
            for (let i = 0; i < rsi.length; i++) {
                if (data[i + 14]) {
                    rsiData.push({ time: data[i + 14].time, value: rsi[i] });
                }
            }
            rsiSeries.setData(rsiData);
        }
    }
}

// Обновление UI
function updateUI() {
    var loadingEl = document.getElementById("loading");
    if (loadingEl) loadingEl.classList.remove("hidden");
    
    Promise.all([
        fetchCryptoData(), 
        fetchSpotData(), 
        fetchFundingRates()
    ]).then(([futuresData, spotData, fundingRates]) => {
        // Объединяем фьючерсы и спот
        const combinedData = [
            ...futuresData.map(item => ({...item, type: 'futures'})),
            ...spotData.map(item => ({...item, type: 'spot'}))
        ];
        
        // Добавляем фандинг-рейты (только для фьючерсов)
        const mergedData = combinedData.map(token => ({
            ...token,
            fundingRate: token.type === 'futures' ? 
                (fundingRates[token.symbol] || 0) : null
        }));
        
        allTokensData = mergedData;
        const filteredData = applyFilters(mergedData);
        const sortedData = sortData(filteredData);
        
        if (cardView) renderCards(sortedData);
        else renderTable(sortedData);
        
        updateHeatmap();
        updateSocialSentiment();
        calculateValueAtRisk();
    }).catch(error => {
        console.error('Error updating UI:', error);
    }).finally(() => {
        if (loadingEl) loadingEl.classList.add("hidden");
        if (currentPage === 'portfolio') renderPortfolio();
    });
};

// ========================
// ИНТЕГРАЦИЯ НОВЫХ API
// ========================

// Функция для получения социальных настроений
async function updateSocialSentiment() {
  try {
    // Для Bitcoin
    const btcIndex = await fetchFearGreedIndex();
    
    // Для Ethereum используем упрощенный подход
    const ethIndex = {
      value: Math.min(100, Math.max(0, btcIndex.value + 5)),
      label: btcIndex.label.replace('Bitcoin', 'Ethereum')
    };
    
    // Обновляем интерфейс
    document.getElementById("btc-sentiment").textContent = btcIndex.label;
    document.getElementById("eth-sentiment").textContent = ethIndex.label;
    
    document.getElementById("btc-sentiment-change").innerHTML = `
      <span class="${btcIndex.value > 50 ? 'increase' : 'decrease'}">
        ${btcIndex.value}
      </span>`;
    
    document.getElementById("eth-sentiment-change").innerHTML = `
      <span class="${ethIndex.value > 50 ? 'increase' : 'decrease'}">
        ${ethIndex.value}
      </span>`;
      
  } catch (error) {
    console.error('Sentiment data error:', error);
    // Fallback данные
    document.getElementById("btc-sentiment").textContent = "Neutral";
    document.getElementById("eth-sentiment").textContent = "Neutral";
  }
}

// Вспомогательная функция для Fear & Greed Index
async function fetchFearGreedIndex() {
  const response = await fetch('https://api.alternative.me/fng/?limit=1');
  const data = await response.json();
  return {
    value: parseInt(data.data[0].value),
    label: data.data[0].value_classification
  };
}

// Функция для расчета показателей риска
async function calculateValueAtRisk() {
  try {
    // Получаем исторические данные BTC для расчета волатильности
    const btcResponse = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily'
    );
    
    const btcData = await btcResponse.json();
    const prices = btcData.prices.map(p => p[1]);
    
    // Рассчитываем волатильность
    const returns = [];
    for (let i = 1; i < prices.length; i++) {
      returns.push((prices[i] - prices[i-1]) / prices[i-1]);
    }
    
    const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
    const variance = returns.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / returns.length;
    const volatility = Math.sqrt(variance) * Math.sqrt(365); // Годовая волатильность
    
    // Рассчитываем VaR для портфеля
    const portfolioValue = portfolio.reduce((sum, asset) => {
      const token = allTokensData.find(t => t.symbol === asset.symbol) || {};
      return sum + (parseFloat(token.lastPrice || 0) * asset.amount);
    }, 0);
    
    // VaR (95% доверительный интервал, 1 день)
    const varValue = portfolioValue * 1.645 * (volatility / Math.sqrt(365));
    
    // Обновляем интерфейс
    document.getElementById("var-value").textContent = `$${formatPrice(varValue)}`;
    document.getElementById("volatility-value").textContent = 
      volatility > 0.8 ? "High" : volatility > 0.5 ? "Medium" : "Low";
    
  } catch (error) {
    console.error('Risk analysis error:', error);
  }
}

// ========================
// ПОРТФЕЛЬ И АЛЕРТЫ
// ========================

// Рендеринг портфеля (обновленная версия)
function renderPortfolio() {
    var container = document.getElementById('portfolio-list');
    if (!container) return;
    
    if (portfolio.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-wallet text-4xl mb-3"></i>
                <p>${translations[currentLanguage].no_assets}</p>
                <button onclick="openAddAssetModal()" class="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg">
                    <i class="fas fa-plus mr-2"></i>
                    ${translations[currentLanguage].add_first_asset}
                </button>
            </div>
        `;
        return;
    }
    
    var totalValue = 0;
    var portfolioHTML = '';
    
    portfolio.forEach(function(asset, index) {
        // Исправление: используем lastPrice вместо openPrice
        var token = allTokensData.find(function(t) { return t.symbol === asset.symbol; }) || {};
        var currentPrice = token.lastPrice ? parseFloat(token.lastPrice) : 0;
        var value = currentPrice * asset.amount;
        var profit = value - (asset.entryPrice * asset.amount);
        var profitPercent = asset.entryPrice > 0 ? (profit / (asset.entryPrice * asset.amount)) * 100 : 0;
        
        totalValue += value;
        
        portfolioHTML += `
            <div class="portfolio-item">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src="${getTokenIconURL(asset.symbol)}" 
                            alt="${asset.symbol}" 
                            class="token-icon mr-3" 
                            onerror="handleIconError(this)"/>
                        <div>
                            <div class="font-bold">${asset.symbol.replace('USDT', '')}</div>
                            <div class="text-sm text-gray-400">${asset.amount} @ $${formatPrice(asset.entryPrice)}</div>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="font-bold">${value > 0 ? '$' + formatPrice(value) : 'N/A'}</div>
                        <div class="${profit >= 0 ? 'text-green-500' : 'text-red-500'}">
                            ${value > 0 ? '$' + formatPrice(profit) + ' (' + profitPercent.toFixed(2) + '%)' : 'N/A'}
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-2">
                    <button onclick="removeAsset(${index})" class="text-red-500 hover:text-red-400 text-sm">
                        <i class="fas fa-trash mr-1"></i>
                        ${translations[currentLanguage].remove}
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = portfolioHTML;
    
    // Обновляем общую стоимость портфеля
    var portfolioValueEl = document.getElementById('portfolio-value');
    if (portfolioValueEl) portfolioValueEl.textContent = '$' + formatPrice(totalValue);
    
    // Обновляем график распределения
    updatePortfolioChart();
}

// Добавление актива (обновленная версия)
function addAsset(symbol, amount, entryPrice) {
    // Проверяем, есть ли уже такой актив
    const existingIndex = portfolio.findIndex(a => a.symbol === symbol);
    
    if (existingIndex !== -1) {
        // Обновляем существующий актив
        portfolio[existingIndex].amount += amount;
        portfolio[existingIndex].entryPrice = 
            (portfolio[existingIndex].entryPrice + entryPrice) / 2;
    } else {
        // Добавляем новый актив
        portfolio.push({ 
            symbol: symbol, 
            amount: amount, 
            entryPrice: entryPrice 
        });
    }
    
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
    renderPortfolio();
    showNotification(`${translations[currentLanguage].add_asset}: ${symbol}`, 'success');
}

// Удаление актива
function removeAsset(index) {
    var asset = portfolio[index];
    portfolio.splice(index, 1);
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
    renderPortfolio();
    showNotification(translations[currentLanguage].remove + ': ' + asset.symbol, 'warning');
}

// Рендеринг алертов
function renderAlerts() {
    var container = document.getElementById('alerts-list');
    if (!container) return;
    
    if (priceAlerts.length === 0) {
        container.innerHTML = `
            <div class="text-center py-4 text-gray-500">
                <i class="fas fa-bell-slash text-2xl mb-2"></i>
                <p>${translations[currentLanguage].no_assets}</p>
            </div>
        `;
        return;
    }
    
    var alertsHTML = '';
    
    priceAlerts.forEach(function(alert, index) {
        var token = allTokensData.find(function(t) { return t.symbol === alert.symbol; }) || {};
        var currentPrice = token.lastPrice ? parseFloat(token.lastPrice) : 0;
        
        alertsHTML += `
            <div class="border-b border-gray-700 py-3">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-bold">${alert.symbol.replace('USDT', '')}</div>
                        <div class="text-sm">${translations[currentLanguage].price} ${alert.condition === 'above' ? translations[currentLanguage].above : translations[currentLanguage].below} $${formatPrice(alert.targetPrice)}</div>
                    </div>
                    <div>
                        <span class="${alert.triggered ? 'text-gray-500' : 'text-green-500'} text-sm">
                            ${alert.triggered ? translations[currentLanguage].alert_triggered : translations[currentLanguage].alert_active}
                        </span>
                        <button onclick="removeAlert(${index})" class="text-red-500 hover:text-red-400 ml-3">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-1 text-sm">
                    ${translations[currentLanguage].price}: $${formatPrice(currentPrice)}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = alertsHTML;
}

// Добавление алерта
function addAlert(symbol, targetPrice, condition) {
    priceAlerts.push({
        symbol: symbol,
        targetPrice: targetPrice,
        condition: condition,
        triggered: false,
        timestamp: Date.now()
    });
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
    renderAlerts();
    showNotification(translations[currentLanguage].add_alert_btn + ': ' + symbol, 'success');
}

// Удаление алерта
function removeAlert(index) {
    var alert = priceAlerts[index];
    priceAlerts.splice(index, 1);
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
    renderAlerts();
    showNotification(translations[currentLanguage].remove + ': ' + alert.symbol, 'warning');
}

// Проверка срабатывания алертов
function checkAlerts() {
    priceAlerts.forEach(function(alert, index) {
        if (alert.triggered) return;
        
        var token = allTokensData.find(function(t) { return t.symbol === alert.symbol; }) || {};
        if (!token) return;
        
        var currentPrice = parseFloat(token.lastPrice) || 0;
        var triggered = false;
        
        if (alert.condition === 'above' && currentPrice > alert.targetPrice) {
            triggered = true;
        } else if (alert.condition === 'below' && currentPrice < alert.targetPrice) {
            triggered = true;
        }
        
        if (triggered) {
            priceAlerts[index].triggered = true;
            localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
            showNotification(translations[currentLanguage].add_alert + ': ' + alert.symbol + ' $' + currentPrice.toFixed(4), 'alert');
            
            // Звуковое уведомление
            try {
                var audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
                audio.play();
            } catch (e) {
                console.error('Failed to play alert sound:', e);
            }
        }
    });
    
    renderAlerts();
}

// ========================
// ИНСТРУМЕНТЫ
// ========================

// Калькулятор позиции
function calculatePosition() {
    var entryPrice = parseFloat(document.getElementById('entry-price').value);
    var exitPrice = parseFloat(document.getElementById('exit-price').value);
    var positionSize = parseFloat(document.getElementById('position-size').value);
    var leverage = parseFloat(document.getElementById('leverage').value) || 1;
    
    if (isNaN(entryPrice) || isNaN(exitPrice) || isNaN(positionSize)) {
        showNotification(translations[currentLanguage].loading, 'error');
        return;
    }
    
    var pnl = (exitPrice - entryPrice) * positionSize * leverage;
    var roi = (pnl / (entryPrice * positionSize)) * 100;
    var fees = (entryPrice * positionSize * 0.0004) + (exitPrice * positionSize * 0.0004);
    
    var pnlResult = document.getElementById('pnl-result');
    if (pnlResult) pnlResult.textContent = '$' + pnl.toFixed(2);
    
    var roiResult = document.getElementById('roi-result');
    if (roiResult) roiResult.textContent = roi.toFixed(2) + '%';
    
    var feesResult = document.getElementById('fees-result');
    if (feesResult) feesResult.textContent = '$' + fees.toFixed(2);
    
    var results = document.getElementById('calculation-results');
    if (results) results.classList.remove('hidden');
}

// Калькулятор риска
function calculateRisk() {
    var capital = parseFloat(document.getElementById('risk-capital').value);
    var riskPerTrade = parseFloat(document.getElementById('risk-per-trade').value);
    var entryPrice = parseFloat(document.getElementById('risk-entry-price').value);
    var stopLoss = parseFloat(document.getElementById('risk-stop-loss').value);
    
    if (isNaN(capital) || isNaN(riskPerTrade) || isNaN(entryPrice) || isNaN(stopLoss)) {
        showNotification(translations[currentLanguage].loading, 'error');
        return;
    }
    
    var riskAmount = capital * (riskPerTrade / 100);
    var priceDifference = Math.abs(entryPrice - stopLoss);
    var positionSize = riskAmount / priceDifference;
    var stopDistance = (priceDifference / entryPrice) * 100;
    
    var positionSizeResult = document.getElementById('position-size-result');
    if (positionSizeResult) positionSizeResult.textContent = positionSize.toFixed(4);
    
    var riskAmountResult = document.getElementById('risk-amount-result');
    if (riskAmountResult) riskAmountResult.textContent = '$' + riskAmount.toFixed(2);
    
    var stopDistanceResult = document.getElementById('stop-distance-result');
    if (stopDistanceResult) stopDistanceResult.textContent = stopDistance.toFixed(2) + '%';
    
    var riskResults = document.getElementById('risk-results');
    if (riskResults) riskResults.classList.remove('hidden');
}

// ========================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ========================

// Обновление индекса страха и жадности
function updateFearGreedIndex() {
    fetch('https://api.alternative.me/fng/?limit=1')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            var index = parseInt(data.data[0].value);
            
            var indicator = document.getElementById('fearGreedIndicator');
            var valueElem = document.getElementById('fearGreedValue');
            var textElem = document.getElementById('fearGreedText');
            
            var container = document.querySelector('.fear-greed-container');
            if (container && indicator && valueElem && textElem) {
                var containerWidth = container.offsetWidth;
                indicator.style.left = Math.min(Math.max((index / 100) * containerWidth, 2), containerWidth - 2) + 'px';
                
                valueElem.textContent = index;
                var statusText = '';
                var textColor = '';
                if(index <= 25) {
                    statusText = translations[currentLanguage].extreme_fear;
                    textColor = 'text-red-500';
                }
                else if(index <= 45) {
                    statusText = translations[currentLanguage].fear;
                    textColor = 'text-orange-500';
                }
                else if(index <= 55) {
                    statusText = translations[currentLanguage].neutral;
                    textColor = 'text-yellow-500';
                }
                else if(index <= 75) {
                    statusText = translations[currentLanguage].greed;
                    textColor = 'text-green-500';
                }
                else {
                    statusText = translations[currentLanguage].extreme_greed;
                    textColor = 'text-emerald-500';
                }
                
                textElem.textContent = statusText;
                textElem.className = textColor;
            }
        })
        .catch(function(error) {
            console.error('Failed to fetch Fear & Greed Index:', error);
            var textElem = document.getElementById('fearGreedText');
            if (textElem) textElem.textContent = translations[currentLanguage].loading;
        });
};

// Получение крипто-новостей
function fetchCryptoNews() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://cointelegraph.com/rss')
        .then(function(res) {
            if (!res.ok) throw new Error(translations[currentLanguage].network_error);
            return res.json();
        })
        .then(function(data) {
            if (!data.items) throw new Error(translations[currentLanguage].news_error);

            var container = document.getElementById("news-container");
            if (!container) return;
            
            container.innerHTML = data.items.slice(0, 5).map(function(item) {
                return `
                    <div class="bg-gray-800 p-3 rounded-lg mb-2">
                        <a href="${item.link}" target="_blank" rel="noopener" class="text-blue-400 hover:underline font-medium">${item.title}</a>
                        <div class="text-gray-400 text-sm mt-1">${new Date(item.pubDate).toLocaleString()}</div>
                    </div>
                `;
            }).join('');

        })
        .catch(function(error) {
            console.error('Error:', error);
            var container = document.getElementById("news-container");
            if (container) {
                container.innerHTML = `
                    <div class="text-red-500">${translations[currentLanguage].news_error}</div>
                `;
            }
        });
}

// Показ уведомлений
function showNotification(message, type) {
    if (type === undefined) type = 'info';
    var container = document.getElementById('notifications-container');
    if (!container) return;
    
    var notification = document.createElement('div');
    
    var bgColor = 'bg-blue-900';
    if (type === 'success') bgColor = 'bg-green-900';
    if (type === 'warning') bgColor = 'bg-yellow-900';
    if (type === 'error') bgColor = 'bg-red-900';
    if (type === 'alert') bgColor = 'bg-purple-900';
    
    notification.className = bgColor + " text-white p-4 rounded-lg mb-2 flex items-center";
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'} mr-3"></i>
        <div>${message}</div>
    `;
    
    container.appendChild(notification);
    
    // Автоудаление через 5 секунд
    setTimeout(function() {
        notification.style.opacity = '0';
        setTimeout(function() { notification.remove(); }, 300);
    }, 5000);
}

// Обновление графиков портфеля
function updatePortfolioChart() {
    var ctx = document.getElementById('portfolio-distribution');
    if (!ctx || portfolio.length === 0) return;
    ctx = ctx.getContext('2d');
    
    var labels = portfolio.map(function(a) { return a.symbol.replace('USDT', ''); });
    var data = portfolio.map(function(a) {
        var token = allTokensData.find(function(t) { return t.symbol === a.symbol; }) || {};
        var currentPrice = parseFloat(token.lastPrice) || 0;
        return currentPrice * a.amount;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
                    '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Переключение темы
function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    
    // Применяем классы к корневому элементу
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
    
    // Перерисовываем тепловую карту
    updateHeatmap();
    
    // Перерисовываем модальное окно, если оно открыто
    if (!document.getElementById('modal').classList.contains('hidden')) {
        initTradingViewChart("modalChartTV", currentSymbol, currentTimeframe);
    }
};

// Открытие модального окна добавления актива
function openAddAssetModal() {
    var modal = document.getElementById('add-asset-modal');
    if (modal) modal.classList.remove('hidden');
    
    // Очищаем предыдущий выбор
    var assetForm = document.getElementById('asset-form');
    if (assetForm) assetForm.classList.add('hidden');
    
    var assetSearch = document.getElementById('asset-search');
    if (assetSearch) assetSearch.value = '';
    
    // Заполняем список токенов
    var assetsList = document.getElementById('assets-list');
    if (!assetsList) return;
    
    assetsList.innerHTML = '';
    
    // Показываем топ 300 токенов
    var topTokens = allTokensData.slice(0, 300);
    
    topTokens.forEach(function(token) {
        var symbol = token.symbol.replace('USDT', '');
        var assetDiv = document.createElement('div');
        assetDiv.className = 'asset-item';
        assetDiv.innerHTML = `
            <img src="${getTokenIconURL(token.symbol)}" 
                 alt="${symbol}" 
                 class="w-6 h-6" 
                 onerror="handleIconError(this, '${symbol}')">
            <span>${symbol}</span>
        `;
        
        assetDiv.onclick = function() { selectAsset(token.symbol); };
        assetsList.appendChild(assetDiv);
    });
    
    // Настройка поиска
    if (assetSearch) {
        assetSearch.addEventListener('input', function(e) {
            var searchTerm = e.target.value.toUpperCase();
            var items = assetsList.querySelectorAll('.asset-item');
            
            items.forEach(function(item) {
                var symbol = item.querySelector('span').textContent;
                if (symbol.indexOf(searchTerm) !== -1) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// Закрытие модального окна добавления актива
function closeAddAssetModal() {
    var modal = document.getElementById('add-asset-modal');
    if (modal) modal.classList.add('hidden');
}

// Выбор актива в модальном окне
function selectAsset(symbol) {
    var selectedAsset = document.getElementById('selected-asset');
    if (selectedAsset) selectedAsset.textContent = symbol.replace('USDT', '');
    
    var assetForm = document.getElementById('asset-form');
    if (assetForm) assetForm.classList.remove('hidden');
    
    // Автозаполнение текущей цены
    var token = allTokensData.find(function(t) { return t.symbol === symbol; }) || {};
    var assetPrice = document.getElementById('asset-price');
    if (assetPrice && token.lastPrice) {
        assetPrice.value = parseFloat(token.lastPrice).toFixed(8);
    }
    
    // Обработчик подтверждения
    var confirmBtn = document.getElementById('confirm-add-asset');
    if (confirmBtn) {
        confirmBtn.onclick = function() {
            var amount = parseFloat(document.getElementById('asset-amount').value);
            var entryPrice = parseFloat(document.getElementById('asset-price').value);
            
            if (isNaN(amount) || isNaN(entryPrice)) {
                showNotification(translations[currentLanguage].loading, 'error');
                return;
            }
            
            addAsset(symbol, amount, entryPrice);
            closeAddAssetModal();
        };
    }
}

// Инициализация ротации баннеров
function initBannerRotation() {
    let current = 0;
    const linkEl = document.getElementById("rotatingLink");
    const nameEl = document.getElementById("exchangeName");
    const bonusEl = document.getElementById("exchangeBonus");

    if (!linkEl || !nameEl || !bonusEl) return;

    // Функция обновления текста баннера
    function updateBannerText() {
        const ex = exchanges[current];
        linkEl.href = ex.url;
        nameEl.textContent = `🔥 ${ex.name[currentLanguage] || ex.name.en}`;
        bonusEl.textContent = ex.bonus[currentLanguage] || ex.bonus.en;
        
        // Анимация появления
        nameEl.classList.remove("banner-text-hidden");
        bonusEl.classList.remove("banner-text-hidden");
    }

    function showNext() {
        // Скрываем текущий текст перед сменой
        nameEl.classList.add("banner-text-hidden");
        bonusEl.classList.add("banner-text-hidden");
        
        setTimeout(() => {
            current = (current + 1) % exchanges.length;
            updateBannerText();
        }, 300);
    }

    // Инициализируем первый баннер
    updateBannerText();
    
    // Запускаем ротацию
    setInterval(showNext, 4000);
    
    // Возвращаем функцию для обновления при смене языка
    return updateBannerText;
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация по страницам
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var page = tab.dataset.page;
            
            // Обновляем активную страницу
            tabs.forEach(function(t) { t.classList.remove('active'); });
            var pages = document.querySelectorAll('.page');
            pages.forEach(function(p) { p.classList.remove('active'); });
            
            tab.classList.add('active');
            var pageEl = document.getElementById(page);
            if (pageEl) pageEl.classList.add('active');
            currentPage = page;
        });
    });
    
    // Переключение вида
    var viewToggle = document.getElementById("viewToggle");
    if (viewToggle) {
        viewToggle.addEventListener('click', function() {
            cardView = !cardView;
            updateUI();
            updateViewToggleButton();
        });
    }
    
    // Фильтры
    var filterSelect = document.getElementById("filter-select");
    if (filterSelect) {
        filterSelect.addEventListener('change', updateUI);
    }
    
    var searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener('input', updateUI);
    }
    
    // Тепловая карта
    var heatmapVolumeBtn = document.getElementById("heatmapVolumeBtn");
    if (heatmapVolumeBtn) {
        heatmapVolumeBtn.addEventListener('click', function() {
            heatmapType = 'volume';
            updateHeatmap();
        });
    }
    
    var heatmapChangeBtn = document.getElementById("heatmapChangeBtn");
    if (heatmapChangeBtn) {
        heatmapChangeBtn.addEventListener('click', function() {
            heatmapType = 'change';
            updateHeatmap();
        });
    }

    var heatmapFundingBtn = document.getElementById("heatmapFundingBtn");
    if (heatmapFundingBtn) {
        heatmapFundingBtn.addEventListener('click', function() {
            heatmapType = 'funding_rate';
            updateHeatmap();
        });
    }
    
    // Тема
    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Портфель
    var addAssetBtn = document.getElementById('add-asset-btn');
    if (addAssetBtn) {
        addAssetBtn.addEventListener('click', openAddAssetModal);
    }
    
    // Алерты
    var addAlertBtn = document.getElementById('add-alert-btn');
    if (addAlertBtn) {
        addAlertBtn.addEventListener('click', function() {
            var rawSymbol = document.getElementById('alert-asset-search').value.trim().toUpperCase();
            if (!rawSymbol) {
                showNotification(translations[currentLanguage].token, 'error');
                return;
            }
            var symbol = rawSymbol.endsWith('USDT') ? rawSymbol : rawSymbol + 'USDT';
            var targetPrice = parseFloat(document.getElementById('alert-price').value);
            var condition = document.getElementById('alert-condition').value;
            
            if (isNaN(targetPrice)) {
                showNotification(translations[currentLanguage].target_price, 'error');
                return;
            }
            
            addAlert(symbol, targetPrice, condition);
        });
    }

    // Обработчик поиска для алертов
    var alertAssetSearch = document.getElementById('alert-asset-search');
    if (alertAssetSearch) {
        alertAssetSearch.addEventListener('input', function(e) {
            var searchTerm = e.target.value.toUpperCase();
            var assetsList = document.getElementById('alert-assets-list');
            if (!assetsList) return;
            
            assetsList.innerHTML = '';
            assetsList.classList.remove('hidden');
            
            if (searchTerm.length < 2) {
                assetsList.classList.add('hidden');
                return;
            }
            
            var filteredTokens = allTokensData.filter(function(token) {
                return token.symbol.indexOf(searchTerm) !== -1;
            }).slice(0, 10);
            
            if (filteredTokens.length === 0) {
                assetsList.innerHTML = '<div class="p-2 text-gray-500">No tokens found</div>';
                return;
            }
            
            filteredTokens.forEach(function(token) {
                var div = document.createElement('div');
                div.className = 'token-selector-item';
                div.innerHTML = `
                    <img src="${getTokenIconURL(token.symbol)}" 
                         alt="${token.symbol}" 
                         class="w-6 h-6"
                         onerror="handleIconError(this, '${token.symbol.replace('USDT','')}')">
                    <span>${token.symbol.replace('USDT','')}</span>
                `;
                div.onclick = function() {
                    document.getElementById('alert-asset-search').value = token.symbol.replace('USDT', '');
                    assetsList.classList.add('hidden');
                };
                assetsList.appendChild(div);
            });
        });
    }
    
    // Инструменты
    var calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculatePosition);
    }
    
    var calculateRiskBtn = document.getElementById('calculate-risk-btn');
    if (calculateRiskBtn) {
        calculateRiskBtn.addEventListener('click', calculateRisk);
    }
    
    // Закрытие модального окна
    var closeModal = document.getElementById("closeModal");
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            var modal = document.getElementById("modal");
            if (modal) modal.classList.add("hidden");
            var container = document.getElementById("modalChartTV");
            if (container) container.innerHTML = '';
            
            // Закрываем вебсокет
            if (chartWebSocket) {
                chartWebSocket.close();
                chartWebSocket = null;
            }
            
            // Удаляем обработчик ресайза
            if (resizeHandler) {
                window.removeEventListener('resize', resizeHandler);
                resizeHandler = null;
            }
        });
    }

// В функции setupEventListeners:
var binanceTradingMatrixBtn = document.getElementById("binanceTradingMatrixBtn");
if (binanceTradingMatrixBtn) {
    binanceTradingMatrixBtn.addEventListener('click', function() {
        const activatedPromo = localStorage.getItem('activated_promo');
        if (activatedPromo) {
            window.open('Binance Trading Matrix.html?symbol=' + currentSymbol, '_blank');
        } else {
            window.location.href = 'Subscription.html';
        }
    });
}

    // Кнопка TradingView
    var tradingViewBtn = document.getElementById("tradingViewBtn");
    if (tradingViewBtn) {
        tradingViewBtn.addEventListener('click', function() {
            var tradingViewSymbol = currentSymbol.endsWith('USDT') ? 
                currentSymbol.replace('USDT', '') : 
                currentSymbol;
            window.open(
                "https://www.tradingview.com/chart/?symbol=BINANCE:" + tradingViewSymbol + "USDT",
                '_blank'
            );
        });
    }
    
    // Обработчики для кнопок таймфреймов
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('timeframe-btn') && e.target.dataset.tf) {
            e.stopPropagation();
            var buttons = document.querySelectorAll('.timeframe-btn');
            buttons.forEach(function(b) { b.classList.remove('active'); });
            e.target.classList.add('active');
            var timeframe = e.target.dataset.tf;
            initTradingViewChart("modalChartTV", currentSymbol, timeframe);
        }
    });
    
    // Изменение языка
    var languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            currentLanguage = e.target.value;
            translatePage(currentLanguage);
        });
    }
    
    // Обработчики для сохранения/загрузки данных
    document.getElementById('saveDataBtn').addEventListener('click', saveData);
    document.getElementById('loadDataBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });
    document.getElementById('fileInput').addEventListener('change', loadDataFromFile);

    // Обработчики для индикаторов
    document.addEventListener('click', function(e) {
        if (e.target.dataset.indicator) {
            indicators.toggle(e.target.dataset.indicator);
            e.target.classList.toggle('active', indicators.activeIndicators.has(e.target.dataset.indicator));
            
            if (currentSymbol) {
                initTradingViewChart("modalChartTV", currentSymbol, currentTimeframe);
            }
        }
    });
} 

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Установка темы
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
    
    // Применяем перевод
    var savedLang = localStorage.getItem('language') || 'en';
    document.getElementById('languageSelect').value = savedLang;
    translatePage(savedLang);
    
    // Проверка разрешения на уведомления
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
    
    // Обновляем текст кнопки вида
    updateViewToggleButton();
    
    // Загрузка данных
    updateUI();
    updateFearGreedIndex();
    fetchCryptoNews();
    renderPortfolio();
    renderAlerts();
    
    // Настройка обработчиков событий
    setupEventListeners();
    
    // Запуск периодических обновлений
    setInterval(updateUI, 30000);
    setInterval(updateFearGreedIndex, 30000);
    setInterval(checkAlerts, 60000);
    
    // Инициализация ротации баннеров
    const updateBannerText = initBannerRotation();
    
    // Обновление баннера при смене языка
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        if (updateBannerText) updateBannerText();
    });
});

// ========================
// ПРОВЕРКА ДОСТУПА К ФУНКЦИЯМ PRO
// ========================

// Проверка доступа для страницы ликвидаций
function setupLiquidationsAccessCheck() {
    const liquidationsLink = document.getElementById('liquidationsLink');
    if (liquidationsLink) {
        liquidationsLink.addEventListener('click', function(e) {
            const activatedPromo = localStorage.getItem('activated_promo');
            if (!activatedPromo) {
                e.preventDefault();
                alert(translations[currentLanguage].support_project);
                window.location.href = 'Subscription.html#activate-promo';
            }
        });
    }
}

// Обновленная функция инициализации
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код инициализации ...
    
    // Добавляем проверку доступа
    setupLiquidationsAccessCheck();
    
    // ... остальной код инициализации ...
});