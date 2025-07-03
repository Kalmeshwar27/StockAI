const articles = [
  {
    "id": 1,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "NMDC share price declines led by domestic price cuts amidst rising  volumes",
    "answer": "NMDC share price declined in intraday trades on Wednesday .",
    "overview": "NMDC share price",
    "articleLink": "https://www.livemint.com/market/stock-market-news/nmdc-share-price-declines-led-by-domestic-price-cuts-amidst-rising-volumes-11751435830786.html"
  },
  {
    "id": 2,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Reliance, ITC to SBI: LIC's top 5 shareholdings that you may like to know",
    "answer": "Life Insurance Corporation of India is a major institutional investor with significant stakes in blue-chip stocks worth over  ₹4 lakh crore .",
    "overview": "4 lakh crore, Life Insurance Corporation, bluechip stocks, significant stakes, a major institutional investor",
    "articleLink": "https://www.livemint.com/market/stock-market-news/reliance-itc-to-sbi-lics-top-5-shareholdings-that-you-may-like-to-know-11751443120320.html"
  },
  {
    "id": 3,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "$4 billion question: If promoters are selling, MFs are buying, should SIP investors worry?",
    "answer": "Mutual funds are actively buying, investing nearly $4 billion in the last three months .",
    "overview": "the last three months, Mutual funds",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/4-billion-question-if-promoters-are-selling-mfs-are-buying-should-sip-investors-worry/articleshow/122195577.cms"
  },
  {
    "id": 4,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Stock market update: Stocks that hit 52-week highs on NSE",
    "answer": "Gabriel India, TN Telecom, Sai Life Science, NACL Industries and Reliance Naval &amp; Engg, hit their fresh 52-week highs at 10:04AM.",
    "overview": "their fresh 52week highs, Sai Life Science, Reliance Naval, TN Telecom, NACL Industries, Gabriel India",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-stocks-that-hit-52-week-highs-on-nse/articleshow/122196330.cms"
  },
  {
    "id": 5,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Indian bonds confined as traders await RBI's liquidity steps, US data",
    "answer": "Indian government bond yields remained stable as traders awaited the Reserve Bank of India's next liquidity measure and crucial U.S. jobs data .",
    "overview": "Indian government bond yields, crucial US jobs data",
    "articleLink": "https://economictimes.indiatimes.com/markets/bonds/indian-bonds-confined-as-traders-await-rbis-liquidity-steps-us-data/articleshow/122196779.cms"
  },
  {
    "id": 6,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: Sugar stocks  down  as market  falls",
    "answer": "The 30-share BSE Sensex was  down  13.19 points at 83684.1 .",
    "overview": "1319 points, The 30share BSE Sensex",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-sugar-stocks-down-as-market-falls/articleshow/122196927.cms"
  },
  {
    "id": 7,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: Power stocks  down  as market  falls",
    "answer": "The 30-share BSE Sensex was  down 44.1 points at 83653.19 .",
    "overview": "The 30share BSE Sensex",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-power-stocks-down-as-market-falls/articleshow/122197005.cms"
  },
  {
    "id": 8,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: FMCG stocks  down  as market  falls",
    "answer": "The 30-share BSE Sensex was  down  126.68 points at 83570.61 .",
    "overview": "12668 points, The 30share BSE Sensex",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-fmcg-stocks-down-as-market-falls/articleshow/122197405.cms"
  },
  {
    "id": 9,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Beyond India and China: Shankar Sharma highlights the real bull market is in THIS country",
    "answer": "Indian stock market maintained steady gains among Asian markets . But lagged behind peers such as Taiwan, Hong Kong, and South Korea .",
    "overview": "steady gains, Hong Kong, South Korea",
    "articleLink": "https://www.livemint.com/market/stock-market-news/beyond-india-and-china-shankar-sharma-highlights-the-real-bull-market-is-in-this-country-11751441970963.html"
  },
  {
    "id": 10,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: Fertilisers stocks  down  as market  falls",
    "answer": "The 30-share BSE Sensex was  down 135.14 points at 83562.15 .",
    "overview": "The 30share BSE Sensex",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-fertilisers-stocks-down-as-market-falls/articleshow/122197527.cms"
  },
  {
    "id": 11,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: Mining stocks  mixed  as market  falls",
    "answer": "The 30-share BSE Sensex was  down 191.03 points at 83506.26 .",
    "overview": "The 30share BSE Sensex",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-mining-stocks-mixed-as-market-falls/articleshow/122197794.cms"
  },
  {
    "id": 12,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Dollar sentiment deeply negative, but yield moves may stir volatility: Steve Englander",
    "answer": "The market anticipates a benign resolution to the tariff deadline . Focus shifts to growth and profits, with AI potentially influencing market tone .",
    "overview": "the tariff deadline, Focus shifts, a benign resolution",
    "articleLink": "https://economictimes.indiatimes.com/markets/expert-view/dollar-sentiment-deeply-negative-but-yield-moves-may-stir-volatility-steve-englander/articleshow/122197818.cms"
  },
  {
    "id": 13,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Stock market update: Nifty Auto index  advances  0.24% in  a weak  market",
    "answer": "The Nifty Auto index was trading 0.24 per cent  up at 23880.65.65 .",
    "overview": "024 per cent, The Nifty Auto index",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-nifty-auto-index-advances-0-24-in-a-weak-market/articleshow/122198008.cms"
  },
  {
    "id": 14,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Inox Wind jumps 4% after Motilal Oswal initiates ‘Buy’ call, sees strong growth on order book, O&amp;M expansion",
    "answer": "Motilal Oswal initiated coverage with a ‘Buy’ rating and a target price of Rs 210 .",
    "overview": "a Buy rating, Motilal Oswal, a target price",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/inox-wind-jumps-4-after-motilal-oswal-initiates-buy-call-sees-strong-growth-on-order-book-om-expansion/articleshow/122198661.cms"
  },
  {
    "id": 15,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Crizac IPO subscribed 16% on Day 1 so far. Check GMP, price band and other key details",
    "answer": "Crizac Limited’s Rs 860-crore IPO was subscribed 16% by midday on the first day of bidding .",
    "overview": "the first day, Crizac Limiteds Rs 860crore IPO",
    "articleLink": "https://economictimes.indiatimes.com/markets/ipos/fpos/crizac-ipo-subscribed-16-on-day-1-so-far-check-gmp-price-band-and-other-key-details/articleshow/122200259.cms"
  },
  {
    "id": 16,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "HDB Financial gives IPO investors 14% listing day gains. Should you buy, sell, or hold?",
    "answer": "HDFC Bank-backed HDB Financial Services made a strong market debut . The Rs 12,500 crore IPO saw robust institutional interest with QIBs subscribing 55.47 times .",
    "overview": "HDFC Bankbacked HDB Financial Services, robust institutional interest, 5547 times, The Rs 12500 crore IPO",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/hdb-financial-gives-ipo-investors-14-listing-day-gains-should-you-buy-sell-or-hold/articleshow/122200670.cms"
  },
  {
    "id": 17,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "4 reasons why Reliance Industries shares could rally up to 18%",
    "answer": "Reliance Industries share price, share market news, markets news and market news . RIL share price is currently at a low of $2.2 billion .",
    "overview": "RIL share price, Reliance Industries share price, a low",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/4-reasons-why-reliance-industries-shares-could-rally-up-to-18/articleshow/122201387.cms"
  },
  {
    "id": 18,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Share market update: Most active stocks on D-Street today in terms of volume",
    "answer": "The NSE Nifty index was trading 56.8 points  down at 25485.0 .",
    "overview": "The NSE Nifty index",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/share-market-update-most-active-stocks-on-d-street-today-in-terms-of-volume/articleshow/122197625.cms"
  },
  {
    "id": 19,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Divis Labs to JSW Steel - Jay Thakkar suggests three stocks to buy for short-term in F&amp;O segment",
    "answer": "HDB Financial Services launched successfully . Jay Thakkar suggest buying futures for Godrej Consumer Products, Divis Laboratories, and JSW Steel .",
    "overview": "Jay Thakkar, JSW Steel, HDB Financial Services, Divis Laboratories, Godrej Consumer Products",
    "articleLink": "https://www.livemint.com/market/stock-market-news/divis-labs-to-jsw-steel-jay-thakkar-suggests-three-stocks-to-buy-for-short-term-in-f-o-segment-11751440622842.html"
  },
  {
    "id": 20,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Stocks to buy: Lupin, Kalpataru Projects, Max Healthcare, among small-cap, mid-cap stock picks for July",
    "answer": "Axis Securities highlights mid-cap and small-cap stocks as the Indian market recovers .",
    "overview": "cap and smallcap stocks, Axis Securities",
    "articleLink": "https://www.livemint.com/market/stock-market-news/stocks-to-buy-lupin-kalpataru-projects-max-healthcare-among-small-cap-mid-cap-stock-picks-for-july-11751435753447.html"
  },
  {
    "id": 21,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Solar Industries share price falls 4% in two days; is it an opportunity to buy this multibagger defence stock?",
    "answer": "Solar Industries India shares faced profit booking for the second day on July 2 . The stock has declined nearly 4% over two sessions amid a weak market .",
    "overview": "the second day, The stock, profit booking, two sessions, Solar Industries India shares",
    "articleLink": "https://www.livemint.com/market/stock-market-news/solar-industries-share-price-falls-4-in-two-days-is-it-an-opportunity-to-buy-this-multibagger-defence-stock-11751438139892.html"
  },
  {
    "id": 22,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Why BP Became Target of Biggest Potential Oil Deal in Decades",
    "answer": "Reports and rumors have intensified this year that BP is in the crosshairs of rivals, especially Shell, for a potential takeover that would be the largest deal in the oil industry since the.",
    "overview": "the largest deal, the oil industry, especially Shell, a potential takeover, the crosshairs",
    "articleLink": "https://oilprice.com/Energy/Energy-General/Why-BP-Became-Target-of-Biggest-Potential-Oil-Deal-in-Decades.html"
  },
  {
    "id": 23,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Stock Market Live: Nifty, Sensex Trade In Narrow Range; HDFC Bank, RIL Weighs",
    "answer": "Track live update on Indian stock markets here on July 2 . Track live updates from Indian stock market here on the July 2. Track live live updates on Indian markets here .",
    "overview": "live update, live updates, the July, Track live updates",
    "articleLink": "https://www.ndtvprofit.com/markets/stock-market-live-update-gift-nifty-sensex-nifty-50-nifty-bank-trading-levels-on-july-2"
  },
  {
    "id": 24,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Market Experts' LIVE Stock Recommendations: Buy, Sell or Hold Today?",
    "answer": "NDTV Profit advises readers to consult their financial advisers before investment . The views and opinions expressed by the investment advisers are of their own .",
    "overview": "their financial advisers, The views, NDTV Profit, the investment advisers",
    "articleLink": "https://www.ndtvprofit.com/markets/stock-recommendations-today-live-market-expert-buy-sell-hold-calls-best-midcap-psu-stocks-to-invest-now-july-2-2025"
  },
  {
    "id": 25,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Trump’s 35% Tariff Threat Feeds Japan’s Worst-Case Scenario Fear",
    "answer": "US President Donald Trump threatens Japan with tariffs of up to 35% . US President Trump ramped up tensions for a third straight day, fueling fears of a worst-case scenario .",
    "overview": "US President Donald Trump, up to 35, a third straight day, a worstcase scenario, US President Trump",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-02/traders-watch-as-trump-s-35-tariff-threat-sparks-doubts-over-tokyo-s-tactics"
  },
  {
    "id": 26,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Biggest Hedge Funds Extend Gains During Chaotic Six Months",
    "answer": "The biggest hedge funds added to their gains in June, sailing through the first half of the year amid global market chaos .",
    "overview": "their gains, the first half, the year, The biggest hedge funds",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-01/biggest-hedge-funds-extend-gains-during-chaotic-six-months"
  },
  {
    "id": 27,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Odd Lots: Greatest Panel Ever on the Treasury Market (Podcast)",
    "answer": "&mdash; recorded live onstage at our June 26 event in New York City . We bring together some of the best thinkers we know when it comes to the US Treasury market .",
    "overview": "live onstage, New York City, the best thinkers, our June 26 event",
    "articleLink": "https://www.bloomberg.com/news/audio/2025-07-02/odd-lots-live-on-us-treasury-market-podcast"
  },
  {
    "id": 28,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "The Greatest Ever Panel on the World's Most Important Market",
    "answer": "Talking US Treasuries. Talking US Treasury Treasury Treasury bonds. Talking U.S. Treasury Treasury Bonds. Talking Treasury Bonds . Talking Treasury bonds . Talking Treasities.",
    "overview": "Treasury Bonds, US Treasury Treasury Bonds, US Treasuries, US Treasury Treasury Treasury bonds, Treasury bonds",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-02/odd-lots-live-panel-on-us-treasuries"
  },
  {
    "id": 29,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Actress Bella Thorne lists colorful Topanga home for $4 million",
    "answer": "Former child star Bella Thorne has put her hilltop villa on the market for $3.99 million .",
    "overview": "her hilltop villa, Former child star Bella Thorne",
    "articleLink": "https://www.marketwatch.com/story/actress-bella-thorne-lists-colorful-topanga-home-for-4-million-5206c4eb?mod=mw_rss_topstories"
  },
  {
    "id": 30,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Gold price today: Rates drop on profit booking ahead of US payroll data; experts unveil strategy for MCX Gold",
    "answer": "MCX Gold August contracts dropped to  ₹97,160 per 10 grams after previously rising over 1% due to a weak dollar index .",
    "overview": "10 grams, MCX Gold August contracts, a weak dollar index",
    "articleLink": "https://www.livemint.com/market/commodities/gold-price-today-rates-drop-on-profit-booking-ahead-of-us-payroll-data-experts-unveil-strategy-for-mcx-gold-11751426639619.html"
  },
  {
    "id": 31,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Penny stock to be in focus on Wednesday after Capex expansion, cost-saving move",
    "answer": "Penny stock is to be in focus on Wednesday after a CAPEX expansion with the installation of a solar power project and a cost-saving move .",
    "overview": "a solar power project, a CAPEX expansion, a costsaving move, Penny stock, the installation",
    "articleLink": "https://www.livemint.com/market/stock-market-news/penny-stock-to-be-in-focus-on-wednesday-after-capex-expansion-cost-saving-move-11751426028873.html"
  },
  {
    "id": 32,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Keystone Realtors share price soars 10% after securing  ₹3,000 crore redevelopment project",
    "answer": "Keystone Realtors shares surged 10% to  ₹697 after winning a redevelopment project in Andheri West, Mumbai . The project covers 4.",
    "overview": "a redevelopment project, Andheri West, Keystone Realtors shares, The project",
    "articleLink": "https://www.livemint.com/market/stock-market-news/keystone-realtors-share-price-soars-10-after-securing-rs-3-000-crore-redevelopment-project-11751428336556.html"
  },
  {
    "id": 33,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Stock Picks: Sagar Doshi suggests Titagarh Rail, ICICI Prudential, CESC shares to buy today - 2 July",
    "answer": "Sagar Doshi recommends Titagarh Rail, ICICI Prudential, and CESC as potential buys . Despite gains, caution is advised due to foreign outflows .",
    "overview": "Sagar Doshi, foreign outflows, ICICI Prudential, Titagarh Rail, potential buys",
    "articleLink": "https://www.livemint.com/market/stock-picks-sagar-doshi-suggests-titagarh-rail-icici-prudential-cesc-shares-to-buy-today-2-july-11751428625045.html"
  },
  {
    "id": 34,
    "keywords": "market",
    "direction": "side",
    "articleTitle": "Rama Telecom shares open at  ₹72, listing at 6% premium; details here",
    "answer": "Rama Telecom shares debuted at  ₹72 on July 2, a nearly 6% premium over the issue price .",
    "overview": "the issue price, Rama Telecom shares, a nearly 6 premium",
    "articleLink": "https://www.livemint.com/market/stock-market-news/rama-telecom-shares-opens-at-a-6-premium-of-72-details-here-11751430553308.html"
  },
  {
    "id": 35,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "IDFC First Bank share price dips after 3 straight sessions of rise: Should you buy or sell the stock?",
    "answer": "IDFC First Bank share price declined slightly in the morning trades on Wednesday after having risen for 3 straight sessions .",
    "overview": "3 straight sessions, the morning trades, IDFC First Bank share price",
    "articleLink": "https://www.livemint.com/market/stock-market-news/idfc-first-bank-share-price-dips-after-4-straight-sessions-of-rise-should-you-buy-or-sell-the-stock-11751428488276.html"
  },
  {
    "id": 36,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Sambhv Steel Tubes shares make stellar debut, lists at 34% premium over issue price",
    "answer": "The stock debuted stronger than anticipated, exceeding expectations indicated by the grey market premium, which had pointed to a 17 per cent gain at listing .",
    "overview": "a 17 per cent gain, The stock",
    "articleLink": "https://www.livemint.com/market/stock-market-news/sambhv-steel-tubes-shares-makes-stellar-debut-lists-at-34-premium-over-issue-price-11751430967382.html"
  },
  {
    "id": 37,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Infosys, Wipro, Mphasis among top gainers as IT stocks rise up to 3% on Fed’s dovish signal",
    "answer": "IT stocks experienced a notable increase on Wednesday, with the Nifty IT index climbing 1.8% . This uptick follows supportive comments from the US Federal Reserve about potential future rate cuts .",
    "overview": "IT stocks, the Nifty IT index, a notable increase, potential future rate cuts, supportive comments, the US Federal Reserve",
    "articleLink": "https://www.livemint.com/market/stock-market-news/infosys-wipro-mphasis-among-top-gainers-as-it-stocks-rise-up-to-3-on-fed-s-dovish-signal-11751434196494.html"
  },
  {
    "id": 38,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "IndusInd Bank hit by Goldman downgrade; stock tumbles 3.5% on growth concerns",
    "answer": "Goldman Sachs downgraded IndusInd Bank to 'Sell', leading to a 3.5% drop in shares .",
    "overview": "a 35 drop, IndusInd Bank, Goldman Sachs",
    "articleLink": "https://www.livemint.com/market/stock-market-news/indusind-bank-hit-by-goldman-downgrade-stock-tumbles-3-5-on-growth-concerns-11751436791887.html"
  },
  {
    "id": 39,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "HDB Financial Services listing: Shares make strong market debut at 12.84% premium",
    "answer": "HDB Financial Services shares made a robust stock market entry, listing at a 12.84% premium of Rs 835 over the issue price .",
    "overview": "a 1284 premium, HDB Financial Services shares, the issue price",
    "articleLink": "https://timesofindia.indiatimes.com/business/india-business/hdb-financial-services-listing-shares-make-strong-market-debut-at-12-84-premium-open-at-rs-835-on-stock-exchanges/articleshow/122196315.cms"
  },
  {
    "id": 40,
    "keywords": "market",
    "direction": "down",
    "articleTitle": "Gold price prediction today: Where is gold rate headed in the near future?",
    "answer": "Recent corrective moves followed easing geopolitical tensions and trade policy progress . Mixed economic data from the US, Euro area, UK, Japan, and India influenced market sentiment .",
    "overview": "Recent corrective moves, the US Euro area, trade policy progress, geopolitical tensions, Mixed economic data",
    "articleLink": "https://timesofindia.indiatimes.com/business/india-business/gold-price-prediction-today-india-where-is-gold-rate-headed-on-july-03-2025-heres-the-outlook/articleshow/122195750.cms"
  },
  {
    "id": 41,
    "keywords": "market",
    "direction": "up",
    "articleTitle": "Fixed income favored amid global uncertainty: Freeman picks safety over risk for 2025",
    "answer": "Seth R Freeman discusses the conflicting signals in the market, with equity upticks clashing with bond yield concerns . He notes the weakening dollar's positive impact on emerging markets, particularly Brazil .",
    "overview": "equity upticks, the weakening dollars positive impact, bond yield concerns, particularly Brazil, the conflicting signals, Seth R Freeman",
    "articleLink": "https://economictimes.indiatimes.com/markets/expert-view/fixed-income-favored-amid-global-uncertainty-freeman-picks-safety-over-risk-for-2025/articleshow/122198703.cms"
  },
  {
    "id": 42,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Nothing Phone 3 overpriced? Three mobiles with Snapdragon 8s Gen 4 SoC at less than half the price - Hindustan Times",
    "answer": "Nothing Phone (3)’s new Glyph Matrix interface is fun and full of nostalgia.",
    "overview": "Related discussion, emerging details, current update, expert reactions",
    "articleLink": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQRGVyeU5pNTBES3o1d2p5bjlISnFkcjA5UWZuUWJyeDVYNmMyWlMxRG5TcDh0VTBsbm95bTc3TEh5MUxNeXB0RlBsNEI5MldVR1JMUDdUb0ZUZXZZY2pKM0E1WktmTFNDR0RjMUN5anFiV0RyNUpMWFlfSnFwVDE0NE4yMWFVX1RlZVh3dno1UnJpektVbzJZSEZVQ18wNF9zZF8tcFNrWlRfXzIyRlJtMjdMTGlNQzZUUlYwMWcxaWgtOGc1enBQLXVWemZEMmU3SEkxcHpyZXNDYU05M0tGV1hQU1lKS05lOHZXb0VqMXREdw?oc=5"
  },
  {
    "id": 43,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Travel Food Services IPO: Price band set at  ₹1,045-1,100 per share; check GMP, issue details, more",
    "answer": "Travel Food Services IPO offers shares priced between  ₹1,045 and  � 1,100 .",
    "overview": "1045 and  , Travel Food Services IPO",
    "articleLink": "https://www.livemint.com/market/travel-food-services-ipo-price-band-set-at-rs-1-045-1-100-per-share-check-gmp-issue-details-more-11751427287879.html"
  },
  {
    "id": 44,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "6200% returns in one year! Multibagger stock hits upper circuit; here’s why",
    "answer": "Elitecon International share price has rallied 48% in one month and 106% in three months .",
    "overview": "three months, one month, Elitecon International share price",
    "articleLink": "https://www.livemint.com/market/stock-market-news/6200-returns-in-one-year-multibagger-stock-elitecon-international-share-price-hits-upper-circuit-here-s-why-11751432625439.html"
  },
  {
    "id": 45,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "Hero MotoCorp shares in focus as June sales rise 10% on strong exports, EV push",
    "answer": "Hero MotoCorp reported 9.6% year-on-year rise in June sales, reaching 5.54 lakh units .",
    "overview": "June sales, 554 lakh units, Hero MotoCorp",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/hero-motocorp-shares-in-focus-as-june-sales-rise-10-on-strong-exports-ev-push/articleshow/122195498.cms"
  },
  {
    "id": 46,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "​Fed Chair Signals Patience Amid Inflation &amp; Tariff Uncertainty​",
    "answer": "Jerome Powell indicates the US Federal Reserve will wait for more data on inflation before cutting interest rates . This decision comes despite President Trump's request for immediate rate reductions .",
    "overview": "immediate rate reductions, This decision, interest rates, the US Federal Reserve, Jerome Powell, President Trumps request",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/fed-chair-signals-patience-amid-inflation-amp-tariff-uncertainty/slideshow/122196339.cms"
  },
  {
    "id": 47,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "HDB Financial Services gets Rs 900 target price. Should you buy after 13% listing pop?",
    "answer": "After listing at Rs 835, HDB Financial shares gained another 1%, reaching Rs 845.75 on the BSE . The IPO attracted bids worth over Rs 1.",
    "overview": "the BSE, another 1, The IPO, HDB Financial shares",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/hdb-financial-services-gets-rs-900-target-price-should-you-buy-after-13-listing-pop/articleshow/122196871.cms"
  },
  {
    "id": 48,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "RBL Bank shares rally 3% as Dubai-based Emirates NBD Bank eyes up to 20% stake",
    "answer": "RBL Bank shares closed on Tuesday at Rs 259.95, up 4.6%, with a market capitalization of Rs 15,831.21 crore .",
    "overview": "Rs 1583121 crore, a market capitalization, RBL Bank shares",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/rbl-bank-shares-rally-3-as-dubai-based-emirates-nbd-bank-eyes-up-to-20-stake/articleshow/122197763.cms"
  },
  {
    "id": 49,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Sensex  falls! These  stocks are down 5% or more on BSE",
    "answer": "In the Nifty pack, 22 stocks were trading in the green, while 28 stocks were in the red .",
    "overview": "28 stocks, 22 stocks, the Nifty pack, the red, the green",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/sensex-falls-these-stocks-are-down-5-or-more-on-bse/articleshow/122197890.cms"
  },
  {
    "id": 50,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "PM Modi on 5-nation tour: Ghana, Brazil & more on itinerary; Brics, trade in focus",
    "answer": "Prime Minister Narendra Modi embarked on a five-nation tour from July 2-9 .",
    "overview": "Prime Minister Narendra Modi, a fivenation tour",
    "articleLink": "https://timesofindia.indiatimes.com/india/pm-modi-kicks-off-5-nation-tour-ghana-argentina-brazil-and-more-on-itinerary-brics-trade-in-focus/articleshow/122195015.cms"
  },
  {
    "id": 51,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "IND vs ENG: Former captain asks Gill to be proactive; wants Siraj, Jadeja to step up",
    "answer": "Ajinkya Rahane has advised Shubman Gill to be more proactive as a captain .",
    "overview": "a captain, Ajinkya Rahane, Shubman Gill",
    "articleLink": "https://timesofindia.indiatimes.com/sports/cricket/india-tour-of-england/ind-vs-eng-2nd-test-former-india-captain-asks-shubman-gill-to-be-proactive-wants-siraj-jadeja-to-step-up-in-bumrahs-absence/articleshow/122200841.cms"
  },
  {
    "id": 52,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "IND v ENG: 'Team's needs more important' - Ex-Eng cricketer on Bumrah's availability",
    "answer": "Mark Butcher urges India to prioritise winning the Edgbaston Test over managing Jasprit Bumrah's workload .",
    "overview": "Mark Butcher, Jasprit Bumrahs workload, the Edgbaston Test",
    "articleLink": "https://timesofindia.indiatimes.com/sports/cricket/india-tour-of-england/ind-vs-eng-teams-needs-more-important-than-his-wish-former-england-cricketer-on-jasprit-bumrahs-availability-for-edgbaston-test/articleshow/122200096.cms"
  },
  {
    "id": 53,
    "keywords": "more",
    "direction": "down",
    "articleTitle": "Sustainable Investment Stumbles on Uncertain Pace of Energy Transition",
    "answer": "The sustainable investment bubble has burst, once again this century .",
    "overview": "The sustainable investment bubble",
    "articleLink": "https://oilprice.com/Alternative-Energy/Renewable-Energy/Sustainable-Investment-Stumbles-on-Uncertain-Pace-of-Energy-Transition.html"
  },
  {
    "id": 54,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Oppo Reno 14 set to debut in India on July 3: All you need to know - The Indian Express",
    "answer": "Oppo Reno 14 set to debut in India on July 3: All you need to know about them .",
    "overview": "Oppo Reno 14 set",
    "articleLink": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPUF9VNTR2ZEFpZkdFMVRhSXZLNVJZR3hXR3BPT013aGFTS0xPUlA4cjZCbjNSVjdOZ1RSdDZIallpMV9BdnhRbzA3VGpqNDhxZk5fdG1HNzFMNWVvdDdRUkN5M0s3SnNBWEhiOUFRMGtQcGQ3WkVVQndyTGE0emRCU3JFU0JyVk14UV9rQWwwN0JJZ0plbzJxYzdoMFVPTm1pSHREQnpraGl2V0dMZVFuT1JFb1cyZ2tGb0lBb2JUbktHbFcwQmxVbTVNemLSAdMBQVVfeXFMTkFHd096NVpybnpWcHR6RkVZVjNmSjg3VUFmTFBFMTdjZTR3dXNFNE9oa3lmRl9QV1g2aXd2T2FFVExBWGNrQUdTSXJwRk5VOEZ3V1JOeGJOTlI1VU5EeVNfZWtFcXVyd3NaNnAwa1Z6QVE1cy1xUm45Rjd2dDZCNmhJbTd4NmZPb01qQjZqOVF3ak5yVUpGMktONEVIaG82cU1RMW0zMlZ0VTVKSkd0b0tSeUFwQXBUX1RjYVRUQ3RlSHp5RXRYSmtoeGR4MVY5VW1ZVQ?oc=5"
  },
  {
    "id": 55,
    "keywords": "more",
    "direction": "down",
    "articleTitle": "16 cloudbursts, three flashfloods wreak havoc, cause Rs 356 crore loss in Himachal - Tribune India",
    "answer": "16 cloudbursts, three flashfloods wreak havoc, cause Rs 356 crore loss in Himachal Pradesh .",
    "overview": "three flashfloods, Himachal Pradesh, Rs 356 crore loss, 16 cloudbursts",
    "articleLink": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNVHNvRnRKR2dBUGRfMU9SWEF0cnFTREZJZ0tkN0xtdUNHVUl1bUw2X292VU5mM2lvVVVsWTR1Z084Y0ZuN0tpSTRhdDRLbXpZNHRENnROZTc2WEhZTEJucHhXVXZLUnNmM3poUmwtc0VuM0lnazZoUDhSZlZfS3ZQYU9VS0YyLWVMSWhzQnByelVZazhMbE5QZVR0QTl2QkJidHZwM0pkMklNdkV5ZzZsNGl30gG2AUFVX3lxTFBOTkFFenZsQzFIQW1RYzBnMFBadEMzYV85Y29ISlZJVmVwLU0zZXRtMkVaMTh4dHZLNWhHX1RNdUVjRWVSTzl5d0FKdDlKN1BLUWlpSi1XaDNiaFBIYnpyM3JTREQ4Y1ltc29VMjZTdHYydndtaGZpM2szYVB4MUhLWkk1NFI1YXNBNm9kZU5aSEl5ZmhGWVh6T0tMeXplcWViS0gyRVRaXzBGTm0ycHQ3SGtSTzZn?oc=5"
  },
  {
    "id": 56,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "5 nations, 8 days: PM Modi begins longest diplomatic tour to boost Atlantic ties - India Today",
    "answer": "PM Modi kicks off 5-nation tour: Ghana, Argentina, Brazil and more on itinerary; Brics, trade in focus .",
    "overview": "5nation tour",
    "articleLink": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxNc21Oa1lwOHJfSVFxRlVtN1c3SjlPOE02YVJJMnNCWHdwQi13cldCNzBQSzRKZjYtdDltcFJRNktCVHFqdEFrMjNmZkNJd2wzeXRBaVNjMWxjbGZNbnFVcTJKY3QyNHA4eUQxMm14VXN0ajlBM0dqZ3Raa254Yl9XT1hZbGVHRlRPVVI5U2hRN0tKNVV4RGpNRVpEcGNOazEtWVdEaExSaDVzaFhlMVc1UkQybzVGZERNTUN6alg4TDNhTU9yWlFCQ1ZtbEw4TVZjVjgzSFdXeEQyM2ZGdFVvWVYyT1c1czJjdFJCTk14S0ZxSkQwblFv0gH8AUFVX3lxTE4wZVphZmJEY1pTRkI3dlNLOVVTc2s0LUpmRHhBcU5MRk5hbmgtTHUydzlKc1djTUN3OXdnZHRKaF91QU9NNkE2Q29YVkpLUFJaVkZIdmwteE9DTnNWWHFjekpwSlpsYzlPRUx4N3pOSWt4MElSd0t3Y2JjZWI2OWM2SE5oaVlvNmI4c241bFRNZTFtUFR0Q3NfRFFvMk5VX24tamdiRUZOeENkVG8tRmRzMW5GVldiUFR6V1UyaUpQWG5jTHBsU1dUdTNrVUNGMFl5NTV1eTFBRU0xUEV6eG9oT19fX2RRNFZ3Y1htZ3Rxay1BVUNITGwxU3ZDcA?oc=5"
  },
  {
    "id": 57,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "K-pop supergroup BTS promises a new album and a world tour next year - Reuters",
    "answer": "K-pop supergroup BTS promises a new album and a world tour next year . BTS have been on hiatus for three years .",
    "overview": "a new album, three years, a world tour, Kpop supergroup BTS",
    "articleLink": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQQ0NmaVdRV0FJOTdITkFkcG9oaFZ4WVdNMWhobEFsaXVsSXI1N1p4TzBYMWtONXNKTjJMLVRaRFA2akdTVEMwUUtTSm5iWFhkZ29hS2lIZmpjTjFDcUNMaFVrRGVrOTlja1RYdUtiaTVmd3hxSDNOZVhwU3ZPR0hWdlQ3ZmdDcWszT0tFZHg1TVZkWDVIbDgxeWs5b2RrX0kxOTZ6R0tVbnFsaFZneUVoOC12ZzRtYi1oWFZB?oc=5"
  },
  {
    "id": 58,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Gujarat govt allocates 10 acres to Tata Group for constructing residential apartments at Dholera near Ahmedabad",
    "answer": "Dholera Industrial City Development auctions plots to private developers to construct 1,000 more service-apartments .",
    "overview": "Dholera Industrial City Development auctions, private developers",
    "articleLink": "https://www.thehindubusinessline.com/news/national/gujarat-govt-allocates-10-acres-to-tata-group-for-constructing-residential-apartments-at-dholera-near-ahmedabad/article69759491.ece"
  },
  {
    "id": 59,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "India to host 2009 World Police and Fire Games",
    "answer": "Ahmedabad selected as the venue for the event that brings together police, fire, and disaster services to compete in more than 50 sports .",
    "overview": "disaster services, the event, the venue",
    "articleLink": "https://www.thehindubusinessline.com/news/national/india-to-host-2009-world-police-and-fire-games/article69748329.ece"
  },
  {
    "id": 60,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "World Bank approves $150 million for Tamil Nadu Women Employment and Safety Programme",
    "answer": "More than 6,00,000 women to receive skills training and career support . 18,000 entrepreneurs to get incubation support under programme .",
    "overview": "incubation support, skills training, 18000 entrepreneurs, career support",
    "articleLink": "https://www.thehindubusinessline.com/news/national/world-bank-approves-150-million-for-tamil-nadu-women-employment-and-safety-programme/article69734759.ece"
  },
  {
    "id": 61,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "AP Cabinet decides to acquire more land for Amaravati capital project",
    "answer": "Cabinet has also approved a proposal to lease land to the India International University of Legal Education and Research at ₹1 per acre for a period of 60 years .",
    "overview": "Legal Education, the India International University, a proposal, 60 years, a period",
    "articleLink": "https://www.thehindubusinessline.com/news/national/ap-cabinet-decides-to-acquire-more-land-for-amaravati-capital-project/article69732853.ece"
  },
  {
    "id": 62,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "Quad Leaders Condemn Terrorism: No Mention of Pakistan in Pahalgam Attack Statement - Deccan Herald",
    "answer": "Quad Leaders Condemn Terrorism: No Mention of Pakistan in Pahalgam Attack Statement . A more focused Quad will help deliver better, says Jaishankar .",
    "overview": "No Mention, Pahalgam Attack Statement, Quad Leaders",
    "articleLink": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNSW1EWGduVXZidkVDMHhtZWtuclZMc2F2SjZYWlNyNEZOak44dENsTXF3SklUTE1nYTNpNEFsMktjNVFoX3ZxUlV1cl8wR2tER0FzYWU4TmFNYjJ3ckJvTDN2emJUd29YcGFIbjJrdnBzMHNsMm5FNjVsX1pudGdva1V1ZktyaU5TRTBVQm9ValpIOWFLbi00WkJEYUxKc0Q4bXI3UVZZSFA5REtsRU1nTlF3?oc=5"
  },
  {
    "id": 63,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "Surprise Crude Oil Inventory Build Ends 5-Week Draw Streak",
    "answer": "American Petroleum Institute estimated that crude oil inventories in the United States rose this week .",
    "overview": "crude oil inventories, American Petroleum Institute, the United States",
    "articleLink": "https://oilprice.com/Latest-Energy-News/World-News/Surprise-Crude-Oil-Inventory-Build-Ends-5-Week-Draw-Streak.html"
  },
  {
    "id": 64,
    "keywords": "more",
    "direction": "down",
    "articleTitle": "Here’s what’s worth streaming in July 2025 on Netflix, Hulu, Max, Disney+ and more",
    "answer": "‘Happy Gilmore 2,’ ‘It’s Always Sunny’ and ‘Star Trek: Strange New Worlds’ are the highlights of a slow month .",
    "overview": "Star Trek, a slow month, the highlights,  Strange New Worlds",
    "articleLink": "https://www.marketwatch.com/story/heres-whats-worth-streaming-in-july-2025-on-netflix-hulu-max-disney-and-more-e91e8368?mod=mw_rss_topstories"
  },
  {
    "id": 65,
    "keywords": "more",
    "direction": "down",
    "articleTitle": "Why Your Fourth of July Fireworks May Be Disrupted &mdash; Next Year",
    "answer": "The US is arguably never more dependent on China than on July 4, when the nation celebrates its rebellion against British rule with fireworks that are inevitably imported from China .",
    "overview": "the nation, The US, its rebellion, British rule",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-02/boom-in-cheap-fireworks-faces-reckoning-with-trump-china-tariffs"
  },
  {
    "id": 66,
    "keywords": "more",
    "direction": "up",
    "articleTitle": "Horizons Middle East & Africa 07/02/2025",
    "answer": "Horizons Middle East & Africa is your daily spotlight on one of the world's fastest-growing regions .",
    "overview": "your daily spotlight, the worlds fastestgrowing regions, Horizons Middle East",
    "articleLink": "https://www.bloomberg.com/news/videos/2025-07-02/horizons-middle-east-africa-07-02-2025-video"
  },
  {
    "id": 67,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Indian Railways RailOne App: Here's How You Can Book IRCTC Tickets, Check PNR And More",
    "answer": "RailOne app offers ticket booking, PNR information, seat availability and food ordering . Users can access several train-related services such as ticket booking .",
    "overview": "PNR information, seat availability, ticket booking, several trainrelated services, RailOne app",
    "articleLink": "https://www.ndtvprofit.com/nation/indian-railways-railone-app-heres-how-you-can-book-irctc-tickets-check-pnr-and-more"
  },
  {
    "id": 68,
    "keywords": "more",
    "direction": "down",
    "articleTitle": "Swissquote Ordered by Regulator to Slash Suspicious Activity",
    "answer": "Swissquote Group Holding SA to do more to curb suspicious activity amid a surge in attempted fraud and hacks . Switzerland’s financial watchdog has stepped up pressure on trading platform Swissquote .",
    "overview": "Switzerlands financial watchdog, attempted fraud, trading platform Swissquote, suspicious activity, Swissquote Group Holding SA, a surge",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-01/swissquote-ordered-by-regulator-to-reduce-suspicious-activity"
  },
  {
    "id": 69,
    "keywords": "more",
    "direction": "side",
    "articleTitle": "Breaking News Live: FIR Registered Against Sigachi Industries Management In Plant Blast Case",
    "answer": "Track live updates on national and international news, monsoon monsoon and more . Track updates from the monsoon with CNN.com Live .",
    "overview": "the monsoon, national and international news, monsoon monsoon",
    "articleLink": "https://www.ndtvprofit.com/nation/nation-world-narendra-modi-donald-trump-india-us-israel-gaza-ceasefire-monsoon-jaishankar-quad-meet-monsoon-rains-weather-trending-breaking-news-july-2"
  },
  {
    "id": 70,
    "keywords": "high",
    "direction": "down",
    "articleTitle": "Maintenance Pushes U.S. LNG Exports Down in June",
    "answer": "Maintenance at some LNG export facilities last month drove U.S. exports of the commodity lower . The June total stood at 8.",
    "overview": "some LNG export facilities, US exports, The June total, the commodity",
    "articleLink": "https://oilprice.com/Latest-Energy-News/World-News/Maintenance-Pushes-US-LNG-Exports-Down-in-June.html"
  },
  {
    "id": 71,
    "keywords": "high",
    "direction": "down",
    "articleTitle": "Australia's Commodity Exports Face Headwinds",
    "answer": "Australia’s consumer watchdog just this week warned the east coast could face a gas shortage as soon as this year .",
    "overview": "the east coast, a gas shortage, this year, Australias consumer watchdog",
    "articleLink": "https://oilprice.com/Metals/Commodities/Australias-Commodity-Exports-Face-Headwinds.html"
  },
  {
    "id": 72,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "Cheer for middle class soon? GST rates may come down on household items, say reports",
    "answer": "The government is planning to lower GST rates for household items, reports claim . Gross GST collections reached a record high in fiscal year 2024-25 .",
    "overview": "GST rates, The government, Gross GST collections, household items, fiscal year",
    "articleLink": "https://timesofindia.indiatimes.com/business/india-business/cheer-for-middle-class-soon-after-income-tax-relief-gst-rates-may-come-down-on-household-items-say-reports/articleshow/122201359.cms"
  },
  {
    "id": 73,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Stock market today: Trade setup for Nifty 50 to global markets; eight stocks to buy or sell Wednesday—2 July 2025 - Mint",
    "answer": "Sensex falls over 400 pts; Nifty tests 25,400; bank, financials drag .",
    "overview": "over 400 pts",
    "articleLink": "https://news.google.com/rss/articles/CBMijgJBVV95cUxPTl9VTTd0b1AtUS04UEZQc0o0RVc5UmVqZEs4akFTMVFkY19JTG5FVDRPTHNlazA5QTVna01ZQUhYVUFHOUNSVk00a0c1WDM2bGxkUnM3cVk2Y294LUNtaFhQUlY2bDdUNDczd0ZscHVsZjI1anR4RWtpbmJEZ2RfaE9BYk1vdDBTZGI2S1Y0MVdMZjdlX0pSOE1MU0VSU1IwWkV1cWtFWVdTUzBfc0pIWTBXWU1wTE55b244U3ZtZUV1VHlJWmtOUE5KUU0zMWhSZlNsQV9haEdKSXZPZzU5bkVxUkFOdkFnSFBmWGFETzFwaHdFT3hUdkdPWndFMW5zbTVCbS1wVzJVVnlMOEHSAZMCQVVfeXFMT3NUbHJlUzhEbk02M2ZpdFVLS0k2S3hnQ3pMS1FEanpQTVRBTlhvU3ZpWmstSW5EUDZuWGdENG8wc2laM2Q1NHI4cDdCbk1mWS00eTlVM05QN19VNV8zQTBnRlp1a1BKSkNiMXl2cV9sMXF3MEtMM1d0enhlNUVKT25rTXhjMmdSNk5abG1XRHNuMFh0VzNSdXdPYzh4SlR6dnBnQ183eGtNMDJDdnAyR0xiZVNOTlROYk1aM19tYW55Q0tTUEk2UHJWRDhDTzRaeUg4QkQweHlvcnU2SF9IMTFmdi1QM0M3ejlvdlo2eEd6eW1LcmlFcDVNdmZSV1d0WXRUSGZzZndHdHdjekRRUjhhQWc?oc=5"
  },
  {
    "id": 74,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "HDB Financial becomes 8th most valuable NBFC with Rs 70,200-crore market cap",
    "answer": "On listing day, HDB Financial hit a high of Rs 845.75, pushing the company’s market capitalisation to Rs 70,198 crore .",
    "overview": "the companys market capitalisation, HDB Financial, Rs 70198 crore",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/c-becomes-8th-most-valuable-nbfc-with-rs-70200-crore-market-cap/articleshow/122198024.cms"
  },
  {
    "id": 75,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "India’s Wind and Solar Output Growth Hits Three-Year High",
    "answer": "Wind and solar electricity generation in India rose at the fastest rate since 2022 over the first half of the year .",
    "overview": "the first half, solar electricity generation, the year, the fastest rate",
    "articleLink": "https://oilprice.com/Latest-Energy-News/World-News/Indias-Wind-and-Solar-Output-Growth-Hits-Three-Year-High.html"
  },
  {
    "id": 76,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Insight with Haslinda Amin 7/2/2025",
    "answer": "Insight with Haslinda Amin is a daily news program featuring in-depth, high-profile interviews and analysis .",
    "overview": "a daily news program, Haslinda Amin",
    "articleLink": "https://www.bloomberg.com/news/videos/2025-07-02/insight-with-haslinda-amin-7-2-2025-video"
  },
  {
    "id": 77,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "India hopes to conclude trade deals with US, EU soon: FM Sitharaman",
    "answer": "At Exim Bank’s trade conclave, Finance Minister highlighted ongoing FTA negotiations and record-high export growth .",
    "overview": "Finance Minister, Exim Banks trade conclave, ongoing FTA negotiations",
    "articleLink": "https://www.thehindubusinessline.com/economy/india-hopes-to-conclude-trade-deals-with-us-eu-soon-fm-sitharaman/article69731081.ece"
  },
  {
    "id": 78,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "UP CM lays foundation of CEL-ESDS green data centre entailing ₹1,000-cr investment",
    "answer": "The data centre is designed to be a tier 3 grade uptime compliant at Sahibabad in Uttar Pradesh .",
    "overview": "Uttar Pradesh, The data centre",
    "articleLink": "https://www.thehindubusinessline.com/news/national/up-cm-lays-foundation-of-cel-esds-green-data-centre-entailing-1000-cr-investment/article69739567.ece"
  },
  {
    "id": 79,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Jammu and Kashmir to rollout unique family ID for every household",
    "answer": "Chief Secretary Atal Dulloo chaired a high-level meeting on Saturday to lay the groundwork for creation of the family IDs for every household in Jammu and Kashmir .",
    "overview": "the family IDs, every household, Chief Secretary Atal Dulloo, the groundwork",
    "articleLink": "https://www.thehindubusinessline.com/news/national/jammu-and-kashmir-to-rollout-unique-family-id-for-every-household/article69751085.ece"
  },
  {
    "id": 80,
    "keywords": "high",
    "direction": "down",
    "articleTitle": "Bhopal gas tragedy waste fully incinerated after 40 years, marks end of toxic legacy",
    "answer": "The waste is a lingering remnant of the 1984 Bhopal gas tragedy that killed over 5,000 people .",
    "overview": "a lingering remnant, The waste, the 1984 Bhopal gas tragedy, over 5000 people",
    "articleLink": "https://www.thehindubusinessline.com/news/national/bhopal-gas-tragedy-toxic-waste-disposed-pithampur/article69758201.ece"
  },
  {
    "id": 81,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "ICMR study flags HIV burden in South India; 54 high-priority districts identified - - News on Air",
    "answer": "ICMR study flags HIV burden in South India; 54 high-priority districts identified .",
    "overview": "HIV burden, South India",
    "articleLink": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQb2lGd1MxT0pxbEN0TXFmQ09tb1NZWUNaNUF6NE4wUllidkRSYmVqQno4dkdZRC15VHR4RW1HVjZIS1lnZjlzOWdYU2J5LVplQ2xnb0RYRTRkdng1N2NsZkdXVDkyNTNoMnFxWHNVQnVSOVhSWEdiZ0lDb01XSkNRTmJlZVZmM0FqbXd0RUxzQkpjc1BuQ1BqNG5WajFGREtQbUM2cWRwSE1yYmc2ckV3?oc=5"
  },
  {
    "id": 82,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Why Was Mohammed Shami Ordered To Pay Rs 4 Lakh Alimony To Wife, Daughter? Judge Explains - NDTV Sports",
    "answer": "Mohammed Shami suffers legal setback as Calcutta high court orders big monthly payment to wife Hasin Jahan . Cricketer Shami to pay 4L as interim maintenance .",
    "overview": "Hasin Jahan, interim maintenance, legal setback, big monthly payment, Mohammed Shami, Cricketer Shami",
    "articleLink": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNXzVORWp5ekpRWG1xS1VVVk14ekVLbjVvNTNFbjZabFU5VmtoQ1ZackFPNnllLWVCQzI0LXBUVC1pMkZpLXdIdTFrU2tjRXZtT2dtSXlxVGMyUzRnMkNCQkhVLTlobTBEWk85MmlvY2xBMVRZU2pES2kxNngxaGtkak10RmJmTVJkX3BCZThlRm5GXzRjNW9aMWlQakVHSVVVSjd5d2stck9Bdm5LY1lMRklUNEVCMWFONTRoSEpkaVg1XzJ3TFHSAc4BQVVfeXFMTTBYOVZyZ0pLTmRfdnlMbnJJRHVoLUFKSngybUJOZUY4LW4yVVZyTG4tQV9CSV9pc1g4dmRZZmVKTE8zYU1sdXF1ZUZNV2NTSk1uZGo3M0o1SEo5ZjQ2OXFfVEV5SnBlQ3hxVVVEbzJldDVWUHFyMnNKWFpVQXpEa0I2bWNzaC1KX250cXpYV3pjX01sVUo4YVAxZ0YxS0pTRFZPbmpRQUZvWS1oa3NDcTB6N0c4YUp4TkVCRi0wS0E2aEVjdGhsY2ZOS3lERmc?oc=5"
  },
  {
    "id": 83,
    "keywords": "high",
    "direction": "down",
    "articleTitle": "Mega IPOs turn into mega disasters: Can HDB Financial break the Rs 10,000 crore curse? - The Economic Times",
    "answer": "HDB Financial delivers biggest listing gains among over Rs 10,000-crore IPOs post-Covid . Shares make strong debut with 12.",
    "overview": "strong debut, HDB Financial, biggest listing gains",
    "articleLink": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOUzZQNTU4M3EyYlRqUEVXbU5SZnJJd3J3Sm91SGFuSEoyZjljREc5MS1qblZjN0VmbmtCMjRHa3pVai1CaTRVX0stakpCa0I0ay1fOThiOWpNdjRrbzhjZDdMUE5UbnQwWkpBR0ZwTktOdFUycmpxZHF0aDc1MDd6VlVtcVozdWxxZjFnRkZYb0MxMllsNVlDVG9DZ0llREhsNHpvQkJFaTM0VVduOVY0UFEzX2tIdlkzWVJ6VnlSakw1c0tMLTZOVmZPTXJzVW9fWW1veGUyS3hYUHNnUXM4TVJPQWxtUEU3eDRURFdB0gHzAUFVX3lxTE5mLU0xUzZvUmpka29NNjRkNHJZQzlobmRJMDdaLVJDeUVWQVhZSmdzX3NWaW1fdzNiWGxMenhKTk9KN0NjQUh4YnB3Sll4TFNqd1luU0VpZnEzSWtNTzZWLVo0QkJVOHhCUFNxMHRzbzk4cWY4bjY5RThEZDlyYktWY1VPN1lpUElrdVpjUHA5UFkyRTBCby02Um9aczFGeGg5a2RNTFBObzBFcFA3RnhMRmVLWkVmYV9zYUVQcGlzMTVsa0tNSXZtUDloekFuYTJlc0NZMjJCdkl3U1BaWGFJXzljWUJPdk85cE5lNng5VkV3OA?oc=5"
  },
  {
    "id": 84,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Parliament Security Breach: Delhi High Court grants bail to two accused - Bar and Bench",
    "answer": "Delhi High Court grants bail to Neelam Azad, Mahesh Kumawat in 2023 Parliament breach case . High Court bars them from giving interviews, posting on soc.",
    "overview": "Neelam Azad, 2023 Parliament breach case, Mahesh Kumawat",
    "articleLink": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNblJlTlBJcloxM2RoQ3M4RHlvUHc2Y3FKRE0xVWFua0VXeDYtcHBSeDhPMTRxZnZQVTdTRmhUZmhvNThiRVdZcGZ1YmJDTXRQdTN6azBnSEZhUGliS1ZxTTVyUEJOWDEzQmRPblFWd3g5aHI4OC1WYnVJanZtR2EwMzhQMnNtazhOVzJTNVhTamRNNFkwZG9wbWdidGlVT0ZjRDh6LTZ3OHZQdUczcEtXVWlEaFrSAcIBQVVfeXFMTVRnOF9JT0JjdlllMGtJcDFNVldhLXVJb2JPWFc2c0d6NWZad3dXcW4wXzlNeTRlZ2U5VzFSTGptbkFUZFBwZWpZQjVZQjNQdjFkVWFFbGhDYmVuSm5EVDZPeDZ6QjJnYVU3Q3RJazV0WlBSekdEcW8wdkdMZkxmeVN6VlRNUURBa3VSVmZLTnNmQUE4d01MQjhqZ2xrNEpaOEoxX0lGNkhhbTl5NnA4dlBIclNKSmg3VC1SOGd3MTRaOUE?oc=5"
  },
  {
    "id": 85,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "HDB Financial Services share price extends gains after decent listing; Should you buy, hold or sell?",
    "answer": "The stock witnessed buying momentum after listing and made a high of  ₹845.75 apiece on the BSE .",
    "overview": "buying momentum, The stock, the BSE",
    "articleLink": "https://www.livemint.com/market/stock-market-news/hdb-financial-services-share-price-extends-gains-after-decent-listing-should-you-buy-hold-or-sell-11751438275410.html"
  },
  {
    "id": 86,
    "keywords": "high",
    "direction": "up",
    "articleTitle": "Gabriel India shares surge 44% in 2 days, hit 52-week high on restructuring plan",
    "answer": "Gabriel India's shares soared, reaching a 52-week high . The company will absorb Asia Investments Private Limited, expanding its product lines and strategic investments .",
    "overview": "its product lines, Asia Investments Private Limited, The company, strategic investments, Gabriel Indias shares",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/gabriel-india-shares-surge-44-in-2-days-hit-52-week-high-on-restructuring-plan/articleshow/122197158.cms"
  },
  {
    "id": 87,
    "keywords": "high",
    "direction": "side",
    "articleTitle": "Flying high at 80: India's oldest woman skydives on birthday",
    "answer": "Dr. Shraddha Chauhan became India's oldest woman to complete a tandem skydive .",
    "overview": "Indias oldest woman, a tandem, Dr Shraddha Chauhan",
    "articleLink": "https://timesofindia.indiatimes.com/india/flying-high-at-80-indias-oldest-woman-skydives-on-birthday-says-fulfilled-her-childhood-wish/articleshow/122196280.cms"
  },
  {
    "id": 88,
    "keywords": "stock",
    "direction": "down",
    "articleTitle": "An upgrade for Apple’s stock? It’s not the endorsement you might think.",
    "answer": "Jefferies analyst thinks Apple’s stock could see ‘stable’ performance . But he voices concerns about tariffs and future sales in his latest upgrade to a hold rating .",
    "overview": "his latest upgrade, Jefferies analyst, future sales, stable performance, a hold rating",
    "articleLink": "https://www.marketwatch.com/story/an-upgrade-for-apples-stock-its-not-the-endorsement-you-might-think-49d629ae?mod=mw_rss_topstories"
  },
  {
    "id": 89,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Defense stock surge triggers one of the hottest ETF launches in European history",
    "answer": "A new European ETF that invests in defense stocks has quickly amassed assets . The new European fund is a defense-focused European fund that focuses on defense stocks .",
    "overview": "The new European fund, a defensefocused European fund, A new European ETF",
    "articleLink": "https://www.marketwatch.com/story/defense-stock-surge-triggers-one-of-the-hottest-etf-launches-in-european-history-23aff504?mod=mw_rss_topstories"
  },
  {
    "id": 90,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Multibagger PSU railway stock jumps over 7% after bagging two major orders. Do you own?",
    "answer": "PSU railway stock is flat on a year-to-date (YTD) basis, while it has dropped 16% in one year .",
    "overview": "one year",
    "articleLink": "https://www.livemint.com/market/stock-market-news/multibagger-psu-railway-stock-rites-share-price-jumps-over-7-after-bagging-two-major-orders-do-you-own-11751429128572.html"
  },
  {
    "id": 91,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "₹12.50 to  ₹818: Multibagger stock turns  ₹1 lakh into  ₹65 lakh in nine years",
    "answer": "Multibagger stock Fredun Pharmacueticals share price was trading at  ₹818 apiece on BSE on Wednesday .",
    "overview": "Fredun Pharmacueticals",
    "articleLink": "https://www.livemint.com/market/stock-market-news/1250-to-818-multibagger-stock-fredun-pharmaceuticals-turns-1-lakh-into-65-lakh-in-nine-years-11751434229650.html"
  },
  {
    "id": 92,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Auto stocks to buy: Maruti Suzuki, M&amp;M, TVS, Eicher Motors among top stock picks after June sales data",
    "answer": "Retail demand saw only modest year-on-year (YoY) growth in PVs, CVs, and 2Ws, while export performance remained a bright spot .",
    "overview": "Retail demand, export performance, a bright spot",
    "articleLink": "https://www.livemint.com/market/stock-market-news/auto-stocks-to-buy-maruti-suzuki-m-m-tvs-eicher-motors-among-top-stock-picks-after-june-sales-data-11751444872514.html"
  },
  {
    "id": 93,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Sensex jumps 200 pts, Nifty tops 25,600 as Trump’s comment boosts trade deal hopes",
    "answer": "President Trump's suggestion of a possible trade agreement, coupled with Treasury Secretary Bessent's indication of nearing a deal to avoid tariff hikes, boosted investor confidence .",
    "overview": "a possible trade agreement, a deal, Treasury Secretary Bessents indication, President Trumps suggestion, investor confidence, tariff hikes",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/sensex-jumps-200-pts-nifty-top-25600-as-trumps-comment-boosts-trade-deal-hopes/articleshow/122195729.cms"
  },
  {
    "id": 94,
    "keywords": "stock",
    "direction": "side",
    "articleTitle": "Rupee falls 4 paise to 85.63 against US dollar in early trade",
    "answer": "The Indian Rupee slightly weakened against the US dollar . Investors are keenly watching the progress of the India-US trade negotiations .",
    "overview": "the US dollar, the IndiaUS trade negotiations, The Indian Rupee, the progress",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/rupee-falls-4-paise-to-85-63-against-us-dollar-in-early-trade/articleshow/122196671.cms"
  },
  {
    "id": 95,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Paras Defence shares climb over 4% as anti-drone tech unit bags Rs 22 crore order from French firm",
    "answer": "Paras Defence shares surge following a new international order . The company will supply its CHIMERA 200 anti-drone system to French firm Cerbair .",
    "overview": "a new international order, Paras Defence shares, its CHIMERA 200 antidrone system, French firm Cerbair, The company",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/paras-defence-shares-climb-over-4-as-anti-drone-tech-unit-bags-rs-22-crore-order-from-french-firm/articleshow/122199107.cms"
  },
  {
    "id": 96,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "Fall In Promoter Ownerships Good For Markets In Long-Term, Sushant Bhansali Says",
    "answer": "Domestic investors have been conservative, and judicious to buy stocks in QIPs, promoter's stock sales and primary markets, Bhansali said .",
    "overview": "Domestic investors, primary markets",
    "articleLink": "https://www.ndtvprofit.com/markets/stock-market-fall-in-promoter-ownerships-good-for-markets-in-long-term-sushant-bhansali-says"
  },
  {
    "id": 97,
    "keywords": "stock",
    "direction": "up",
    "articleTitle": "US Stock Futures Steady as Traders Eye Jobs Data:  Markets Wrap",
    "answer": "US equity futures held firm as traders await June’s payrolls report on Thursday . Traders also navigate how trade talks develop ahead of the July 9 deadline .",
    "overview": "trade talks, US equity futures, the July 9 deadline, Junes payrolls report",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-01/stock-market-today-dow-s-p-live-updates"
  },
  {
    "id": 98,
    "keywords": "growth",
    "direction": "up",
    "articleTitle": "Thiruvananthapuram Zone sees 18% growth in GST revenue collection",
    "answer": "The Central Board of Indirect Taxes and Customs (CBIC) have conferred a ‘Commendation Certificate’ on the Thiruvananthapuram CGST Zone .",
    "overview": "the Thiruvananthapuram CGST Zone, a Commendation Certificate, Indirect Taxes, The Central Board",
    "articleLink": "https://www.thehindubusinessline.com/economy/thiruvananthapuram-zone-sees-18-growth-in-gst-revenue-collection/article69755398.ece"
  },
  {
    "id": 99,
    "keywords": "growth",
    "direction": "up",
    "articleTitle": "AU Small Finance Bank Appoints New Directors, Sets Mumbai As Growth Hub",
    "answer": "AU Small Finance Bank's deposits were at Rs 1,24,269 crore . As of March 31, 2025, the bank's loans stood at 1,15,704 crore .",
    "overview": "Rs 124269 crore, AU Small Finance Banks deposits, the banks loans, 115704 crore",
    "articleLink": "https://www.ndtvprofit.com/business/au-small-finance-bank-appoints-new-directors-sets-mumbai-as-growth-hub"
  },
  {
    "id": 100,
    "keywords": "growth",
    "direction": "up",
    "articleTitle": "Apollo Hospitals MD on Growth Outlook, Healthtech Arm Spinoff",
    "answer": "Apollo Hospitals Managing Director, Suneeta Reddy, says she expects to see 14% growth in company revenue in the next three years .",
    "overview": "Apollo Hospitals Managing Director, company revenue, the next three years, Suneeta Reddy",
    "articleLink": "https://www.bloomberg.com/news/videos/2025-07-02/apollo-hospitals-md-on-healthtech-arm-spinoff-video"
  },
  {
    "id": 101,
    "keywords": "growth",
    "direction": "side",
    "articleTitle": "Epiroc has plans to invest ₹1,500 cr by 2030, charts long-term growth strategy",
    "answer": "Epiroc CEO Arun Kumar shared the company’s long-term vision and outlined its investment plans .",
    "overview": "the companys longterm vision, Epiroc CEO Arun Kumar, its investment plans",
    "articleLink": "https://www.thehindubusinessline.com/news/national/epiroc-commits-1500-cr-to-k-by-2030-charts-long-term-growth-strategy/article69710267.ece"
  },
  {
    "id": 102,
    "keywords": "growth",
    "direction": "side",
    "articleTitle": "137,000 startups, 4.25 lakh jobs: can Mission YUVA deliver for J&K’s youth?",
    "answer": "The government programme aims to create 137,000 enterprises and generate 425,000 jobs over five years . It aims to promote entrepreneurship-led growth across the region .",
    "overview": "425000 jobs, The government programme, 137000 enterprises, five years, the region",
    "articleLink": "https://www.thehindubusinessline.com/news/national/137000-startups-425-lakh-jobs-can-mission-yuva-deliver-for-jks-youth/article69752000.ece"
  },
  {
    "id": 103,
    "keywords": "growth",
    "direction": "side",
    "articleTitle": "Paytm karo or think twice: From 164% surge to 9% H1CY25 slide, will it be a comeback story in H2?",
    "answer": "After a 164% surge, Paytm shares faced a 9% dip in H1CY25 . Despite regulatory hurdles, challenges persist alongside opportunities .",
    "overview": "regulatory hurdles, a 164 surge, Paytm shares, a 9 dip",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/paytm-karo-or-think-twice-from-164-surge-to-9-h1cy25-slide-will-it-be-a-comeback-story-in-h2/articleshow/122197309.cms"
  },
  {
    "id": 104,
    "keywords": "growth",
    "direction": "up",
    "articleTitle": "Financials poised to power Nifty’s next leap: Anshul Saigal",
    "answer": "Housing finance and general lenders are expected to perform strongly . Manufacturing is experiencing a surge, driven by the Atmanirbhar Bharat initiative and China plus one strategy .",
    "overview": "the Atmanirbhar Bharat initiative, general lenders, a surge, Housing finance, one strategy",
    "articleLink": "https://economictimes.indiatimes.com/markets/expert-view/financials-poised-to-power-niftys-next-leap-anshul-saigal/articleshow/122196676.cms"
  },
  {
    "id": 105,
    "keywords": "lower",
    "direction": "side",
    "articleTitle": "ECB Is in No Rush to Lower Interest Rates Further, Centeno Says",
    "answer": "The European Central Bank isn’t in a hurry to reduce borrowing costs further, according to Governing Council member Mario Centeno .",
    "overview": "a hurry, The European Central Bank, borrowing costs, Governing Council member Mario Centeno",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-02/ecb-is-in-no-rush-to-lower-interest-rates-further-centeno-says"
  },
  {
    "id": 106,
    "keywords": "lower",
    "direction": "down",
    "articleTitle": "Japan's Nikkei edges lower as tariff stalemate weighs",
    "answer": "Japanese shares fell slightly on Wednesday, reacting to a selloff in U.S. technology heavyweights and uncertainty about trade tariffs .",
    "overview": "a selloff, US technology heavyweights, Japanese shares, trade tariffs",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/japans-nikkei-edges-lower-as-tariff-stalemate-weighs/articleshow/122200413.cms"
  },
  {
    "id": 107,
    "keywords": "lower",
    "direction": "side",
    "articleTitle": "As paints industry consolidates, what happens to the margin? Deven Choksey explains",
    "answer": "The paint sector is experiencing consolidation, leading to margin pressure . While integrated players like Asian Paints are well-positioned, significant market share gains may take time .",
    "overview": "Asian Paints, integrated players, wellpositioned significant market share gains, margin pressure, The paint sector",
    "articleLink": "https://economictimes.indiatimes.com/markets/expert-view/as-paints-industry-consolidates-what-happens-to-the-margin-deven-choksey-explains/articleshow/122196355.cms"
  },
  {
    "id": 108,
    "keywords": "lower",
    "direction": "up",
    "articleTitle": "Punjab, Tamil Nadu report significantly lower off-budget borrowings in FY25",
    "answer": "Punjab’s OBB shrinks to ₹3.78 crore in FY25 as against over � 1,600 crops in FY24 .",
    "overview": "1600 crops, Punjabs OBB shrinks, 378 crore",
    "articleLink": "https://www.thehindubusinessline.com/economy/punjab-tamil-nadu-report-significantly-lower-off-budget-borrowings-in-fy25/article69743266.ece"
  },
  {
    "id": 109,
    "keywords": "lower",
    "direction": "up",
    "articleTitle": "Danish firm Novo Nordisk launches Wegovy in India for weight loss",
    "answer": "Delivery device is a 4-dose pen that comes at a price of ₹17,345 for a month for lower strengths .",
    "overview": "a 4dose pen, a month, a price, Delivery device",
    "articleLink": "https://www.thehindubusinessline.com/companies/danish-firm-novo-nordisk-set-to-launch-wegovy-in-india-for-weight-loss/article69730752.ece"
  },
  {
    "id": 110,
    "keywords": "lower",
    "direction": "up",
    "articleTitle": "Banking sector a bright spot amid valuation concerns: Mahesh Nandurkar",
    "answer": "Jefferies' Mahesh Nandurkar anticipates a sideways market movement in the next six to nine months .",
    "overview": "a sideways market movement, Jefferies Mahesh Nandurkar",
    "articleLink": "https://economictimes.indiatimes.com/markets/expert-view/banking-sector-a-bright-spot-amid-valuation-concerns-mahesh-nandurkar/articleshow/122201356.cms"
  },
  {
    "id": 111,
    "keywords": "rise",
    "direction": "up",
    "articleTitle": "European Stocks Rise as M&amp;A Lifts Banco Sabadell and Spectris",
    "answer": "Banco de Sabadell SA agreed to sell its British unit and Spectris Plc received an offer from KKR &amp; Co Inc. European stocks advanced on deals news .",
    "overview": "deals news, Spectris Plc, an offer, its British unit, Banco de Sabadell SA, European stocks",
    "articleLink": "https://www.bloomberg.com/news/articles/2025-07-02/european-stocks-rise-as-m-a-lifts-banco-sabadell-and-spectris"
  },
  {
    "id": 112,
    "keywords": "rise",
    "direction": "side",
    "articleTitle": "“Dignified living is our priority”: Bihar CM hikes pensions to ₹1,100 for elderly, widows, disabled",
    "answer": "From July 2025, monthly pensions will rise from � 400 to ₹1,100 .",
    "overview": "monthly pensions",
    "articleLink": "https://www.thehindubusinessline.com/news/national/bihar-hikes-pension-to-1100-ahead-of-elections/article69720625.ece"
  },
  {
    "id": 113,
    "keywords": "rise",
    "direction": "side",
    "articleTitle": "Railways eyes 2 paise per km AC fare hike starting July 1",
    "answer": "Officials said train fare will rise by 0.05 paisa per km for second class travel beyond 500 km .",
    "overview": "second class travel, train fare, 500 km, 005 paisa",
    "articleLink": "https://www.thehindubusinessline.com/news/national/railways-eyes-2-paise-per-km-ac-fare-hike-starting-july-1/article69731667.ece"
  },
  {
    "id": 114,
    "keywords": "rise",
    "direction": "up",
    "articleTitle": "European shares rise; investors await signs on trade progress",
    "answer": "European shares nudged higher on Wednesday, led by industrial miners . Investors tracked signs of any progress on U.S. trade talks as the July tariff deadline nears .",
    "overview": "US trade talks, industrial miners, any progress, European shares, the July tariff deadline",
    "articleLink": "https://economictimes.indiatimes.com/markets/stocks/news/european-shares-rise-investors-await-signs-on-trade-progress/articleshow/122200977.cms"
  },
  {
    "id": 115,
    "keywords": "rise",
    "direction": "side",
    "articleTitle": "Stay Tick-Safe Year-Round: Tips for Every Season - Deccan Chronicle",
    "answer": "T.H. Chan School of Public Health: Tick risks vary by region . Stay Tick-Safe Year-Round: Tips for every Season .",
    "overview": "Public Health, every Season, TickSafe YearRound, TH Chan School, Tick risks",
    "articleLink": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNcko3ZWYzMTVmTmlndWQ4RjJuV2lQVURyYlVYdEJ3dWdpTnBIVzh6RjJoVWhGc25RM3o3UjdoMWpCNnVlak5GTERKdzZ1S0F6TkxEemN3Rm5pajBWSFdtMEF4RlFjMkpmNkk4eVkzOFhvbGN6ZVhheW1mZWx0NzI0NllSbzJGaG1raWtPcGRmc1lVbDJfZjVjcXNBTENJVm1aR0tydWxDUzBWcUZfSXptb3cxT1VHb1Utd0t30gHAAUFVX3lxTE9VS3FrS01ZQkZGRVlNcXNNdnFmNnh4RDFwVmgxTEkzWU4xQ2NPWGdCQmc4M3BJZW5NekZaaUduOWNxWjVrUkQ3dVVabnZ5dmhEYkFMTGQ5WmdNNGxNXzlmR29saG5Tb1FHSEtMbGZCMVd0NEdEZjdud1RqQ2pUMFpGUkgyZFNGMXc1T25oeFJZRFBGR1lSc09fczlkY2Ytd0Y0NG90MHYzZVJWMzZ5NlM3b3VObUlISEJhTDNOMXRPNA?oc=5"
  },
  {
    "id": 116,
    "keywords": "rise",
    "direction": "side",
    "articleTitle": "Maharashtra to cut electricity tariffs by 26% over 5 years: Fadnavis",
    "answer": "Chief Minister Devendra Fadnavis said this is the first time in the state’s history that power rates will decrease rather than rise .",
    "overview": "the states history, power rates, Chief Minister Devendra Fadnavis, the first time",
    "articleLink": "https://www.thehindubusinessline.com/news/national/maharashtra-power-tariff-cut-merc-mahavitaran-fadnavis-electricity-rate-reduction/article69738710.ece"
  },
  {
    "id": 117,
    "keywords": "higher",
    "direction": "side",
    "articleTitle": "Maruti Suzuki share price edges higher despite 13.3% drop in domestic PV dispatches in June",
    "answer": "Maruti Suzuki's shares rose nearly 1% to  ₹12,560 despite a 13.3% decline in domestic passenger vehicle sales .",
    "overview": "domestic passenger vehicle sales, Maruti Suzukis shares, a 133 decline",
    "articleLink": "https://www.livemint.com/market/stock-market-news/maruti-suzuki-share-price-edges-higher-despite-13-3-drop-in-domestic-pv-dispatches-in-june-11751440007757.html"
  },
  {
    "id": 118,
    "keywords": "higher",
    "direction": "down",
    "articleTitle": "India’s ban on ships carrying Pakistani cargo hits shipping costs, delays freight: Report",
    "answer": "Pakistani importers said the Indian ban has resulted in longer shipping times and higher freight charges . Pakistani importer said the ban has led to higher shipping times, higher freight costs .",
    "overview": "Pakistani importer, longer shipping times, the ban, Pakistani importers, the Indian ban",
    "articleLink": "https://www.thehindubusinessline.com/economy/indias-ban-on-ships-carrying-pakistani-cargo-hits-shipping-costs-delays-freight-report/article69751132.ece"
  },
  {
    "id": 119,
    "keywords": "higher",
    "direction": "side",
    "articleTitle": "Karnataka Transport Minister orders crackdown on overcharging autos in Bengaluru",
    "answer": "'If there is a complaint from passengers about overcharging, cancellation of the journey if the higher fare is not paid, immediate action should be taken'.",
    "overview": "the journey, immediate action, a complaint",
    "articleLink": "https://www.thehindubusinessline.com/news/national/karnataka-transport-minister-orders-crackdown-on-overcharging-autos-in-bengaluru/article69751088.ece"
  },
  {
    "id": 120,
    "keywords": "higher",
    "direction": "down",
    "articleTitle": "Russia’s Oil Exports Stagnate as Prices Sink and Sanctions Bite",
    "answer": "Russia's seaborne crude oil shipments barely budged in late June, holding near two-month lows . In the four weeks to June 29, crude exports averaged 3.",
    "overview": "crude exports, the four weeks, twomonth lows, Russias seaborne crude oil shipments, late June",
    "articleLink": "https://oilprice.com/Latest-Energy-News/World-News/Russias-Oil-Exports-Stagnate-as-Prices-Sink-and-Sanctions-Bite.html"
  },
  {
    "id": 121,
    "keywords": "loss",
    "direction": "side",
    "articleTitle": "IND vs ENG Test: What time will England vs India 2nd Test start? What are the session timings?",
    "answer": "Jasprit Bumrah will be fit to face England in Edgbaston Test .",
    "overview": "Edgbaston Test, Jasprit Bumrah",
    "articleLink": "https://timesofindia.indiatimes.com/sports/cricket/india-tour-of-england/ind-vs-eng-test-match-what-time-will-england-vs-india-2nd-test-start-what-are-the-session-timings/articleshow/122198348.cms"
  },
  {
    "id": 122,
    "keywords": "loss",
    "direction": "side",
    "articleTitle": "Can I claim short-term capital loss by selling and buying shares on the same day?",
    "answer": "To offset losses from selling shares bought in April 2025, you can either use different brokers or on consecutive days .",
    "overview": "different brokers, consecutive days",
    "articleLink": "https://www.livemint.com/market/stock-market-news/can-i-claim-short-term-capital-loss-by-selling-and-buying-shares-on-the-same-day-11751436553449.html"
  },
  {
    "id": 123,
    "keywords": "loss",
    "direction": "down",
    "articleTitle": "Zverev, Gauff among record Wimbledon seeds exodus - ATP Tour",
    "answer": "Coco Gauff suffers shock first-round loss to Dayana Yastremska as women's second seed .",
    "overview": "Dayana Yastremska, womens second seed, Coco Gauff",
    "articleLink": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBmcmJsdlhJNkRpX0dxekdJRjQwMW52N01WVVNab040eDFsai1NMi1UNWhteE5meWRKSTNmcjRkY1pyT1lPVDZfM0V2QzJEdElpZVNfdTkwQks1STNYMlhQY2dWNFZhbWwtT3k4aVI5RExVb3c?oc=5"
  },
  {
    "id": 124,
    "keywords": "loss",
    "direction": "side",
    "articleTitle": "AIIMS gut doctor reveals 5 science backed changes that happen when you quit sugar for 30 days: Liver fat starts to drop | Health - Hindustan Times - Hindustan Times",
    "answer": "AIIMS gut doctor reveals 5 science backed changes that happen when you quit sugar for 30 days: Liver fat starts to drop .",
    "overview": "AIIMS gut doctor, 5 science backed changes, 30 days, Liver fat",
    "articleLink": "https://news.google.com/rss/articles/CBMilgJBVV95cUxPUnQ4OGg1T2N2ekwzUTVVdGVQNTNHMVlkcGkyakxLVXNkYmZkV1k0cjdkckRYZWNmVkpSR2pMNHlwZjRGNXFTSmhuRVhYQ0d3dUtFc0VOQ0JSbTVYYlVuV1ZNQXZmSmU4b2taUHVpbS14UFE3Z2R0OW52SWVkYkhwcllLcDlJdnZQQmF0NjFhRUNTTXRDWHNEa1Vpdl85OWhyc3ZKMUt3anlaTlFLOElVeU1COEpiaXNWSEVURXMxeTBVMWJwUEh2UEtUWV95M3N3ZmQ2UXhsZmFnbjZPRDk0ejMzNG51Y1BVQldWSXdMaEpfQlVJVkxoNGFlVEdMR1dDMDhISnFkQWtEMWt2cW0tQXNNcE10QdIBmwJBVV95cUxNWDNOcDRjTGFzOVVQeFNlWFF6ZTcyeUVLUGZnSTVfbkE1ZVNxNHR2QXBKV3dUMUVnMjFxc29uakpkVGxiWjU3WGdfLUFGdVUtMG5Vci1VUTI4a0J6bG13Y1czZ0s2SzhhQkhwSlBJR1JMWUkxRHRBYWVsZnU1TjJnTHp2YktlTTVsR2U5NThVelREUUx4VllIT1dvMXhKT2RqYlZabV9WaDQ2OHpraU9zeWlaSHE3aUsxeFpGX2tsU2dUbmdtQk1aMlphUy1HWWFjVVhoMlUwV1Y0TDFWNWZ0YTJicUhsczhVNXFtSEc1ZlR4ME5HRnFLNXZlNnNmOUdSNlBqMjBveUNJaGRZa3p2Y2ZWRUNyWEZtZ3Fz?oc=5"
  },
  {
    "id": 125,
    "keywords": "capital",
    "direction": "side",
    "articleTitle": "Delhi to inaugurate Narela bus depot on June 27, launch over 100 electric buses",
    "answer": "The depot will also act as a crucial charging and maintenance hub for capital's growing fleet of electric buses . It will also be a crucial hub for Delhi's growing electric bus fleet .",
    "overview": "Delhis growing electric bus fleet, The depot, electric buses, a crucial hub",
    "articleLink": "https://www.thehindubusinessline.com/economy/logistics/delhi-to-inaugurate-narela-bus-depot-on-june-27-launch-over-100-electric-buses/article69717987.ece"
  },
  {
    "id": 126,
    "keywords": "capital",
    "direction": "side",
    "articleTitle": "AT Capital arm pledges €1.5 million for Thane creek clean-up",
    "answer": "Project will deploy a combination of The Ocean Clean-up Interceptor solutions with a walkable log-boom for plastic interception and additional Interceptor Guard booms .",
    "overview": "The Ocean Cleanup Interceptor solutions, a walkable logboom, plastic interception, additional Interceptor Guard booms, a combination",
    "articleLink": "https://www.thehindubusinessline.com/news/national/at-capital-arm-pledges-15-million-for-thane-creek-clean-up/article69763425.ece"
  },
  {
    "id": 127,
    "keywords": "capital",
    "direction": "down",
    "articleTitle": "Supertech EV share price lists with 20% discount at  ₹73.60 on BSE SME, slides further post-listing",
    "answer": "Supertech EV IPO debuted poorly today, listing with a 20% discount . IPO valued at  ₹29.90 crore was oversubscribed 4.40 times .",
    "overview": "Supertech EV IPO, 2990 crore, a 20 discount",
    "articleLink": "https://www.livemint.com/market/stock-market-news/supertech-ev-share-price-lists-with-20-discount-at-rs-73-60-on-bse-sme-slides-further-postlisting-11751430961133.html"
  }
];