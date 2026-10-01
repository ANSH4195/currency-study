// The single source of truth. Topics are ordered by foundation:
// what must be understood first comes first. Nesting = finer granularity.
// `n` is the order in which the question was actually asked.

export type Source = { label: string; url: string }
export type Q = { n: number; q: string; a: string; sources: Source[] }
export type Topic = { title: string; questions: Q[]; children?: Topic[] }

const BOE_SPEECH = {
  label: 'Bank of England, "It’s all about the role of money"',
  url: 'https://www.bankofengland.co.uk/speech/2026/july/nathanael-benjamin-speech-at-omfif',
}
const BOE_EXPLAINER = {
  label: 'Bank of England, What is money?',
  url: 'https://www.bankofengland.co.uk/explainers/what-is-money',
}

const BOE_CREATION = {
  label: 'Bank of England, Money creation in the modern economy (UK)',
  url: 'https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy',
}
const FED_GOLD_ACT = {
  label: 'Federal Reserve History, Gold Reserve Act of 1934',
  url: 'https://www.federalreservehistory.org/essays/gold-reserve-act',
}
const FED_ROOSEVELT = {
  label: 'Federal Reserve History, Roosevelt’s Gold Program',
  url: 'https://www.federalreservehistory.org/essays/roosevelts-gold-program',
}
const FED_FAQ = {
  label: 'Federal Reserve, Fed buying securities vs government borrowing (FAQ)',
  url: 'https://www.federalreserve.gov/faqs/how-does-the-federal-reserve-buying-and-selling-of-securities-relate-to-the-borrowing-decisions-of-the-federal-government.htm',
}
const FED_LSAP = {
  label: 'Federal Reserve, The Fed’s Large-Scale Asset Purchase Programs (FEDS 2012-85)',
  url: 'https://www.federalreserve.gov/pubs/feds/2012/201285/index.html',
}
const BLS_CPI = {
  label: 'BLS, CPI-U all items, US city average (series CUUR0000SA0)',
  url: 'https://data.bls.gov/timeseries/CUUR0000SA0',
}
const LBMA_1971 = {
  label: 'LBMA Alchemist, 15 August 1971 and the London Gold Market',
  url: 'https://www.lbma.org.uk/alchemist/issue-102/15-august-1971-and-the-london-gold-market',
}
const LBMA_Q1_2026 = {
  label: 'LBMA, Precious Metals Market Report Q1 2026',
  url: 'https://www.lbma.org.uk/articles/lbma-precious-metals-market-report-q1-2026',
}
const LBMA_MONETARY = {
  label: 'LBMA Alchemist, Gold in Monetary History',
  url: 'https://www.lbma.org.uk/alchemist/issue-115/gold-in-monetary-history',
}
const WGC_CURRENCY = {
  label: 'World Gold Council, Gold as Currency',
  url: 'https://www.gold.org/history-gold/gold-as-currency',
}
const ROYAL_MINT = {
  label: 'Royal Mint, A Brief History of Gold',
  url: 'https://www.royalmint.com/invest/discover/gold-news/a-brief-history-of-gold/',
}
const BOE_GOLD = {
  label: 'Bank of England Museum, As good as gold',
  url: 'https://www.bankofengland.co.uk/museum/online-collections/blog/as-good-as-gold',
}
const WGC_CLASSICAL = {
  label: 'World Gold Council, The Classical Gold Standard',
  url: 'https://www.gold.org/history-gold/the-classical-gold-standard',
}
const WGC_BW = {
  label: 'World Gold Council, The Bretton Woods System',
  url: 'https://www.gold.org/history-gold/bretton-woods-system',
}
const FED_BW = {
  label: 'Federal Reserve History, Creation of the Bretton Woods System',
  url: 'https://www.federalreservehistory.org/essays/bretton-woods-created',
}
const LBMA_80S = {
  label: 'LBMA Alchemist, Echoes of the ’80s: gold prices and inflation',
  url: 'https://www.lbma.org.uk/alchemist/issue-118/echoes-of-the-80s-gold-prices-and-inflation-then-and-now',
}

export const topics: Topic[] = [
  {
    title: 'Foundations',
    questions: [],
    children: [
      {
        title: 'What is currency?',
        questions: [
          {
            n: 1,
            q: 'What is a currency?',
            a: 'Money does three jobs:\n1. Medium of exchange: lets people trade without barter.\n2. Unit of account: one common measure for prices and contracts.\n3. Store of value: holds purchasing power so you can use it later.\n\nYour "store of value" is right, with a tweak: it must keep its purchasing power reliably, at least in the short term. "Physically touchable" is not required: 96% of money is held electronically, only 4% as cash.',
            sources: [BOE_SPEECH, BOE_EXPLAINER],
          },
        ],
      },
      {
        title: 'Why gold?',
        questions: [
          {
            n: 6,
            q: 'Why gold? Has it been the primary currency for 5,000 years?',
            a: 'Not 5,000. Coinage began around the mid-7th century BC in Lydia (today’s Turkey), so gold as money is about 2,700 years old.\n\nGold the metal is older, but that is not the same as currency: smelted in Egypt c. 3600 BC, jewellery c. 2600 BC.\n\nThe first Lydian coins were electrum, a natural gold-silver alloy. Only under King Croesus (c. 550 BC) were gold and silver struck as separate coins. So gold was one of the money metals from the start, alongside silver. I found no trusted source saying gold was the single primary one.\n\nWhy gold:\n• It cannot rust or tarnish.\n• It can be hammered into shape without melting.\n• It is rare, non-renewable and hard to obtain.\n\nNot yet confirmed: that gold beat cattle, shells or salt as money because it is portable and divisible. No trusted source I read says so.',
            sources: [LBMA_MONETARY, WGC_CURRENCY, ROYAL_MINT, BOE_GOLD],
          },
        ],
      },
      {
        title: 'The gold standard',
        questions: [
          {
            n: 7,
            q: 'Was the gold standard ancient, or invented around WWII?',
            a: 'Neither. It is a 19th-century system, and WWII brought a looser one.\n\n• Britain formally adopted the gold standard after reforms in 1817.\n• Classical gold standard, 1870s to 1914: nearly all countries fixed their currency to a set amount of gold, with free convertibility at the fixed price and no limits on moving gold across borders.\n• WWI disrupted it. Attempts to restore it did not survive the 1930s Depression.\n• Bretton Woods (July 1944): only the dollar was fixed to gold ($35/oz). Other currencies were fixed, within a 1% band, to the dollar. It replaced the gold standard and was more flexible. It ran until 1971.\n\nAncient gold coins were not a gold standard. The standard means paper money exchangeable for gold on demand.',
            sources: [LBMA_MONETARY, WGC_CLASSICAL, FED_BW, WGC_BW],
          },
        ],
      },
      {
        title: 'What is a bond?',
        questions: [
          {
            n: 8,
            q: 'What is a bond?',
            a: 'A bond is a loan you make to a government or company, packaged as something you can hold and sell. They promise to pay you back at a set date, plus interest.\n\nThe parts:\n• Face value (par): the amount repaid at the end, e.g. $100.\n• Coupon: the interest, as a % of face value. A one-year $100 bond with a 5% coupon pays back $105: $100 principal plus $5 interest.\n• Maturity: the repayment date. Government bonds typically run 1 to 30 years. US Treasury savings bonds (a related retail product) mature in 20-30 years.\n\nPrice and yield move in opposite directions. Bonds trade after issue. If you will only pay $98 for that $100 bond, your return is 7.1%, not 5%. If market rates fall, the same bond trades above par ($101.95 in the IMF example at a 3% yield). Rates up means price down; rates down means price up.\n\nWhy it matters here: when the Fed does QE (asked #4), the "securities" it buys are mostly these bonds.\n\nNote: I could only read the IMF article through search excerpts (the page blocked direct access). The numbers above are from those excerpts.',
            sources: [
              {
                label: 'IMF Finance & Development, Back to Basics: Bonds and Yields',
                url: 'https://www.imf.org/en/publications/fandd/issues/2025/03/back-to-basics-bonds-and-yields-s-ali-abbas',
              },
              {
                label: 'Treasury FiscalData, Treasury Savings Bonds Explained',
                url: 'https://fiscaldata.treasury.gov/treasury-savings-bonds/',
              },
            ],
          },
        ],
      },
      {
        title: 'Is electronic money the problem?',
        questions: [
          {
            n: 2,
            q: 'Is electronic money a forced trap that loses value, and are metals the proper currency?',
            a: 'Partly right, partly not.\n\nRight: inflation is real. Money that keeps losing purchasing power fails as a store of value.\n\nNot quite:\n• The central bank is not the only source. Commercial banks create the majority of money by making loans (BoE, UK). QE is a second, real source. See asked #4.\n• Gold is not a stable store either. Its real price peaked in Jan 1980 and did not regain that level until April 2024. Holding gold through that stretch meant years of lost purchasing power.\n• Gold cannot buy your groceries today. It is a store of value, but not a medium of exchange.\n\nOpen point: can a government take physical gold? See asked #3.',
            sources: [BOE_CREATION, LBMA_80S],
          },
          {
            n: 3,
            q: 'Can a government take your physical gold?',
            a: 'Yes, it has happened. In 1933 the US Treasury was given power to compel citizens to surrender gold coins and certificates. The Gold Reserve Act (signed 30 Jan 1934) transferred ownership of all monetary gold in the US to the Treasury. Holders were paid in currency at $35 per ounce.\n\nSo "touchable" does not mean "safe from the state".',
            sources: [FED_ROOSEVELT, FED_GOLD_ACT],
          },
          {
            n: 4,
            q: 'Isn’t quantitative easing the Fed pumping digital dollars to cover government debt?',
            a: 'You are right that QE is real and large. My earlier wording played it down.\n\nFacts:\n• QE1 (Nov 2008 to Mar 2010): the Fed bought agency mortgage debt and MBS (up to $1.25tn) plus $300bn of long-term Treasuries.\n• QE2 (Nov 2010 to Jun 2011): a further $600bn of Treasuries.\n\nThe debt-cover part is contested:\n• The Fed says it buys Treasuries from the public, not directly from the Treasury, and does not bid at Treasury auctions.\n• It says these purchases are "not a means of financing the federal deficit" and aim only at jobs and stable prices.\n\nWhether buying debt in the market *indirectly* props up government borrowing is an open debate. I will not claim it either way without a trusted source.',
            sources: [FED_LSAP, FED_FAQ],
          },
        ],
      },
      {
        title: 'Dollar vs gold since 1971',
        questions: [
          {
            n: 5,
            q: 'Since 1971, what is today’s $1 worth against 1971’s $1, and who held its ground: the dollar or gold?',
            a: 'Dollar (CPI-U, Jul 1971 = 40.7, Mar 2026 = 330.213):\n• Prices are 8.11x higher.\n• Today’s $1 buys 12.3% of what $1 bought in 1971. It lost 87.7% of its purchasing power.\n\nGold (London, USD/oz):\n• End Jul 1971: $42.47. 31 Mar 2026: $4,608.35.\n• In dollars: up 108.5x.\n• Net of the dollar’s loss: one ounce buys 13.4x more goods than in 1971.\n\nVerdict: gold held its ground, the dollar did not.\n\nCaveats:\n• 1971 is a flattering start for gold. Its price was held at $35 officially until 15 Aug 1971, then freed.\n• Gold is volatile: in Q1 2026 alone it ranged from $4,263.55 to $5,501.70 (a 29% swing).\n• Its real price fell for years after 1980 (see asked #2).\n• CPI was not cross-checked with a second publisher. LBMA/WGC history is licence-restricted, so gold points come from LBMA reports, not a full series.',
            sources: [BLS_CPI, LBMA_1971, LBMA_Q1_2026],
          },
        ],
      },
    ],
  },
]
