
import { Story, Sentence } from './types';

import generatedData from './generated_lessons_full.json';

const MANUAL_STORIES: Story[] = [
  {
    id: 'coffee-shop',
    title: 'Ordering Coffee',
    description: 'A morning visit to a busy coffee shop in Shanghai.',
    sentences: [
      {
        mandarin: '你好，我要一杯大杯的热美式咖啡。',
        pinyin: 'Nǐhǎo, wǒ yào yì bēi dà bēi de rè měishì kāfēi.',
        translation: 'Hello, I want a large cup of hot Americano.',
        words: [
          { pinyin: 'Nǐhǎo', hanzi: '你好', meaning: 'Hello' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'yào', hanzi: '要', meaning: 'want' },
          { pinyin: 'yì bēi', hanzi: '一杯', meaning: 'a cup of' },
          { pinyin: 'dà bēi de', hanzi: '大杯的', meaning: 'large cup' },
          { pinyin: 'rè', hanzi: '热', meaning: 'hot' },
          { pinyin: 'měishì kāfēi', hanzi: '美式咖啡', meaning: 'Americano' }
        ]
      },
      {
        mandarin: '好的，需要加糖或者牛奶吗？',
        pinyin: 'Hǎode, xūyào jiātáng huòzhě niúnǎi ma?',
        translation: 'Okay, do you need to add sugar or milk?',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'xūyào', hanzi: '需要', meaning: 'need' },
          { pinyin: 'jiā', hanzi: '加', meaning: 'add' },
          { pinyin: 'táng', hanzi: '糖', meaning: 'sugar' },
          { pinyin: 'huòzhě', hanzi: '或者', meaning: 'or' },
          { pinyin: 'niúnǎi', hanzi: '牛奶', meaning: 'milk' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '不用糖，加一点点冷牛奶就行。',
        pinyin: 'Búyòng táng, jiā yìdiǎndiǎn lěng niúnǎi jiù xíng.',
        translation: 'No sugar, just add a little bit of cold milk.',
        words: [
          { pinyin: 'Búyòng', hanzi: '不用', meaning: 'no need' },
          { pinyin: 'táng', hanzi: '糖', meaning: 'sugar' },
          { pinyin: 'jiā', hanzi: '加', meaning: 'add' },
          { pinyin: 'yìdiǎndiǎn', hanzi: '一点点', meaning: 'a little bit' },
          { pinyin: 'lěng', hanzi: '冷', meaning: 'cold' },
          { pinyin: 'niúnǎi', hanzi: '牛奶', meaning: 'milk' },
          { pinyin: 'jiù xíng', hanzi: '就行', meaning: 'will be fine' }
        ]
      },
      {
        mandarin: '好的，扫这里支付，请在旁边稍等。',
        pinyin: 'Hǎode, sǎo zhèlǐ zhīfù, qǐng zài pángbiān shāoděng.',
        translation: 'Okay, scan here to pay, please wait at the side.',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'sǎo', hanzi: '扫', meaning: 'scan' },
          { pinyin: 'zhèlǐ', hanzi: '这里', meaning: 'here' },
          { pinyin: 'zhīfù', hanzi: '支付', meaning: 'pay' },
          { pinyin: 'qǐng', hanzi: '请', meaning: 'please' },
          { pinyin: 'zài pángbiān', hanzi: '在旁边', meaning: 'at the side' },
          { pinyin: 'shāoděng', hanzi: '稍等', meaning: 'wait a moment' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '他点了什么咖啡？',
        questionPinyin: 'Tā diǎnle shénme kāfēi?',
        questionTranslation: 'What coffee did he order?',
        options: [
          { text: '热美式 (Hot Americano)', isCorrect: true },
          { text: '冰拿铁 (Iced Latte)', isCorrect: false },
          { text: '卡布奇诺 (Cappuccino)', isCorrect: false }
        ],
        answerExplanation: 'He ordered a hot Americano (热美式).'
      },
      {
        id: 'q2',
        questionMandarin: '店员问了什么？',
        questionPinyin: 'Diànyuán wènle shénme?',
        questionTranslation: 'What did the staff ask?',
        options: [
          { text: '需要袋子吗 (Need a bag?)', isCorrect: false },
          { text: '加糖或奶吗 (Sugar or milk?)', isCorrect: true },
          { text: '有会员吗 (Have membership?)', isCorrect: false }
        ],
        answerExplanation: 'Asked about adding sugar or milk (需要加糖或者牛奶吗).'
      },
      {
        id: 'q3',
        questionMandarin: '他最后加了什么？',
        questionPinyin: 'Tā zuìhòu jiāle shénme?',
        questionTranslation: 'What did he add in the end?',
        options: [
          { text: '糖 (Sugar)', isCorrect: false },
          { text: '热牛奶 (Hot milk)', isCorrect: false },
          { text: '冷牛奶 (Cold milk)', isCorrect: true }
        ],
        answerExplanation: 'He asked for a little cold milk (一点点冷牛奶).'
      },
      {
        id: 'q4',
        questionMandarin: '店员让他怎么支付？',
        questionPinyin: 'Diànyuán ràng tā zěnme zhīfù?',
        questionTranslation: 'How did the staff ask him to pay?',
        options: [
          { text: '付现金 (Pay cash)', isCorrect: false },
          { text: '扫码支付 (Scan code)', isCorrect: true },
          { text: '刷卡 (Swipe card)', isCorrect: false }
        ],
        answerExplanation: 'Scan here to pay (扫这里支付).'
      }
    ]
  },
  {
    id: 'convenience-store',
    title: 'Convenience Store',
    description: 'Buying snacks and heating up food at 7-Eleven.',
    sentences: [
      {
        mandarin: '你好，一共二十五块钱。',
        pinyin: 'Nǐhǎo, yígòng èrshíwǔ kuài qián.',
        translation: 'Hello, that makes 25 yuan in total.',
        words: [
          { pinyin: 'Nǐhǎo', hanzi: '你好', meaning: 'Hello' },
          { pinyin: 'yígòng', hanzi: '一共', meaning: 'altogether' },
          { pinyin: 'èrshíwǔ', hanzi: '二十五', meaning: 'twenty-five' },
          { pinyin: 'kuài qián', hanzi: '块钱', meaning: 'yuan (colloquial)' }
        ]
      },
      {
        mandarin: '这个便当需要帮您加热吗？',
        pinyin: 'Zhège biàndāng xūyào bāng nín jiārè ma?',
        translation: 'Do you need me to heat up this bento box for you?',
        words: [
          { pinyin: 'Zhège', hanzi: '这个', meaning: 'this' },
          { pinyin: 'biàndāng', hanzi: '便当', meaning: 'bento box' },
          { pinyin: 'xūyào', hanzi: '需要', meaning: 'need' },
          { pinyin: 'bāng', hanzi: '帮', meaning: 'help' },
          { pinyin: 'nín', hanzi: '您', meaning: 'you (polite)' },
          { pinyin: 'jiārè', hanzi: '加热', meaning: 'heat up' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '好的，麻烦加热一下。还要一个塑料袋。',
        pinyin: 'Hǎode, máfan jiārè yíxià. Hái yào yí gè sùliàodài.',
        translation: 'Yes, please heat it up. Also I need a plastic bag.',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'máfan', hanzi: '麻烦', meaning: 'trouble (please)' },
          { pinyin: 'jiārè', hanzi: '加热', meaning: 'heat up' },
          { pinyin: 'yíxià', hanzi: '一下', meaning: 'a bit' },
          { pinyin: 'Hái', hanzi: '还', meaning: 'also' },
          { pinyin: 'yào', hanzi: '要', meaning: 'want' },
          { pinyin: 'yí gè', hanzi: '一个', meaning: 'one' },
          { pinyin: 'sùliàodài', hanzi: '塑料袋', meaning: 'plastic bag' }
        ]
      },
      {
        mandarin: '袋子两毛钱。微波炉在旁边，好了会叫您。',
        pinyin: 'Dàizi liǎng máo qián. Wēibōlú zài pángbiān, hǎole huì jiào nín.',
        translation: 'The bag is 20 cents. Microwave is to the side, I’ll call you when ready.',
        words: [
          { pinyin: 'Dàizi', hanzi: '袋子', meaning: 'bag' },
          { pinyin: 'liǎng máo qián', hanzi: '两毛钱', meaning: '20 cents' },
          { pinyin: 'Wēibōlú', hanzi: '微波炉', meaning: 'microwave' },
          { pinyin: 'zài pángbiān', hanzi: '在旁边', meaning: 'at the side' },
          { pinyin: 'hǎole', hanzi: '好了', meaning: 'ready' },
          { pinyin: 'huì', hanzi: '会', meaning: 'will' },
          { pinyin: 'jiào', hanzi: '叫', meaning: 'call' },
          { pinyin: 'nín', hanzi: '您', meaning: 'you (polite)' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '一共多少钱？',
        questionPinyin: 'Yígòng duōshǎo qián?',
        questionTranslation: 'How much is the total?',
        options: [
          { text: '15块 (15)', isCorrect: false },
          { text: '25块 (25)', isCorrect: true },
          { text: '30块 (30)', isCorrect: false }
        ],
        answerExplanation: 'It is 25 yuan (二十五块钱).'
      },
      {
        id: 'q2',
        questionMandarin: '店员问便当需要什么？',
        questionPinyin: 'Diànyuán wèn biàndāng xūyào shénme?',
        questionTranslation: 'What did the clerk ask about the bento?',
        options: [
          { text: '打包 (Take away)', isCorrect: false },
          { text: '加热 (Heat up)', isCorrect: true },
          { text: '退货 (Return)', isCorrect: false }
        ],
        answerExplanation: 'Asked if it needs heating (需要帮您加热吗).'
      },
      {
        id: 'q3',
        questionMandarin: '顾客还要了什么？',
        questionPinyin: 'Gùkè hái yàole shénme?',
        questionTranslation: 'What else did the customer want?',
        options: [
          { text: '筷子 (Chopsticks)', isCorrect: false },
          { text: '纸巾 (Napkin)', isCorrect: false },
          { text: '塑料袋 (Plastic bag)', isCorrect: true }
        ],
        answerExplanation: 'He asked for a plastic bag (一个塑料袋).'
      },
      {
        id: 'q4',
        questionMandarin: '塑料袋多少钱？',
        questionPinyin: 'Sùliàodài duōshǎo qián?',
        questionTranslation: 'How much is the plastic bag?',
        options: [
          { text: '免费 (Free)', isCorrect: false },
          { text: '两毛 (20 cents)', isCorrect: true },
          { text: '一块 (1 yuan)', isCorrect: false }
        ],
        answerExplanation: 'It is 20 cents (两毛钱).'
      }
    ]
  },
  {
    id: 'mobile-payment',
    title: 'Mobile Payment',
    description: 'Scanning a QR code to pay.',
    sentences: [
      {
        mandarin: '老板，可以微信支付吗？',
        pinyin: 'Lǎobǎn, kěyǐ Wēixìn zhīfù ma?',
        translation: 'Boss, can I pay with WeChat?',
        words: [
          { pinyin: 'Lǎobǎn', hanzi: '老板', meaning: 'boss' },
          { pinyin: 'kěyǐ', hanzi: '可以', meaning: 'can' },
          { pinyin: 'Wēixìn', hanzi: '微信', meaning: 'WeChat' },
          { pinyin: 'zhīfù', hanzi: '支付', meaning: 'pay' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '可以，二维码墙上贴着，你自己扫。',
        pinyin: 'Kěyǐ, èrwéimǎ qiángshàng tiēzhe, nǐ zìjǐ sǎo.',
        translation: 'Yes, the QR code is on the wall, scan it yourself.',
        words: [
          { pinyin: 'Kěyǐ', hanzi: '可以', meaning: 'Yes/Can' },
          { pinyin: 'èrwéimǎ', hanzi: '二维码', meaning: 'QR code' },
          { pinyin: 'qiángshàng', hanzi: '墙上', meaning: 'on the wall' },
          { pinyin: 'tiēzhe', hanzi: '贴着', meaning: 'pasted/sticking' },
          { pinyin: 'nǐ', hanzi: '你', meaning: 'you' },
          { pinyin: 'zìjǐ', hanzi: '自己', meaning: 'yourself' },
          { pinyin: 'sǎo', hanzi: '扫', meaning: 'scan' }
        ]
      },
      {
        mandarin: '扫过去了，五十块，你确认一下。',
        pinyin: 'Sǎo guòqù le, wǔshí kuài, nǐ quèrèn yíxià.',
        translation: 'Scanned through, 50 yuan, please confirm.',
        words: [
          { pinyin: 'Sǎo', hanzi: '扫', meaning: 'scan' },
          { pinyin: 'guòqù', hanzi: '过去', meaning: 'pass/through' },
          { pinyin: 'le', hanzi: '了', meaning: '(completed action marker)' },
          { pinyin: 'wǔshí', hanzi: '五十', meaning: 'fifty' },
          { pinyin: 'kuài', hanzi: '块', meaning: 'yuan' },
          { pinyin: 'nǐ', hanzi: '你', meaning: 'you' },
          { pinyin: 'quèrèn', hanzi: '确认', meaning: 'confirm' },
          { pinyin: 'yíxià', hanzi: '一下', meaning: 'a bit' }
        ]
      },
      {
        mandarin: '听到了，收款五十元。慢走啊！',
        pinyin: 'Tīngdào le, shōukuǎn wǔshí yuán. Mànzǒu a!',
        translation: 'Heard it (the voice notification), received 50 yuan. Take care!',
        words: [
          { pinyin: 'Tīngdào', hanzi: '听到', meaning: 'heard' },
          { pinyin: 'le', hanzi: '了', meaning: '(completed action marker)' },
          { pinyin: 'shōukuǎn', hanzi: '收款', meaning: 'receive payment' },
          { pinyin: 'wǔshí', hanzi: '五十', meaning: 'fifty' },
          { pinyin: 'yuán', hanzi: '元', meaning: 'yuan' },
          { pinyin: 'Mànzǒu', hanzi: '慢走', meaning: 'take care (lit. walk slowly)' },
          { pinyin: 'a', hanzi: '啊', meaning: '!' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '顾客想用什么支付？',
        questionPinyin: 'Gùkè xiǎng yòng shénme zhīfù?',
        questionTranslation: 'How does the customer want to pay?',
        options: [
          { text: '现金 (Cash)', isCorrect: false },
          { text: '支付宝 (Alipay)', isCorrect: false },
          { text: '微信 (WeChat)', isCorrect: true }
        ],
        answerExplanation: 'He asked about WeChat Pay (微信支付).'
      },
      {
        id: 'q2',
        questionMandarin: '二维码在哪里？',
        questionPinyin: 'Èrwéimǎ zài nǎlǐ?',
        questionTranslation: 'Where is the QR code?',
        options: [
          { text: '桌子上 (On table)', isCorrect: false },
          { text: '手机里 (In phone)', isCorrect: false },
          { text: '墙上 (On wall)', isCorrect: true }
        ],
        answerExplanation: 'It is sticking on the wall (墙上贴着).'
      },
      {
        id: 'q3',
        questionMandarin: '顾客付了多少钱？',
        questionPinyin: 'Gùkè fùle duōshǎo qián?',
        questionTranslation: 'How much did the customer pay?',
        options: [
          { text: '10块', isCorrect: false },
          { text: '50块', isCorrect: true },
          { text: '100块', isCorrect: false }
        ],
        answerExplanation: 'Identify 50 yuan (五十块).'
      },
      {
        id: 'q4',
        questionMandarin: '老板怎么确认收到了钱？',
        questionPinyin: 'Lǎobǎn zěnme quèrèn shōudàole qián?',
        questionTranslation: 'How did the boss confirm receipt?',
        options: [
          { text: '看手机 (Looked at phone)', isCorrect: false },
          { text: '听到声音 (Heard sound)', isCorrect: true },
          { text: '查银行卡 (Checked bank)', isCorrect: false }
        ],
        answerExplanation: 'He heard the notification (听到了).'
      }
    ]
  },
  {
    id: 'bubble-tea',
    title: 'Ordering Bubble Tea',
    description: 'Customizing sugar and ice levels for milk tea.',
    sentences: [
      {
        mandarin: '你好，我要一杯珍珠奶茶，打包。',
        pinyin: 'Nǐhǎo, wǒ yào yì bēi zhēnzhū nǎichá, dǎbāo.',
        translation: 'Hello, I want a bubble tea, to go.',
        words: [
          { pinyin: 'Nǐhǎo', hanzi: '你好', meaning: 'Hello' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'yào', hanzi: '要', meaning: 'want' },
          { pinyin: 'yì bēi', hanzi: '一杯', meaning: 'a cup of' },
          { pinyin: 'zhēnzhū nǎichá', hanzi: '珍珠奶茶', meaning: 'bubble tea' },
          { pinyin: 'dǎbāo', hanzi: '打包', meaning: 'to go / take away' }
        ]
      },
      {
        mandarin: '好的，要中杯还是大杯？',
        pinyin: 'Hǎode, yào zhōngbēi háishi dàbēi?',
        translation: 'Okay, medium or large cup?',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'yào', hanzi: '要', meaning: 'want' },
          { pinyin: 'zhōngbēi', hanzi: '中杯', meaning: 'medium cup' },
          { pinyin: 'háishi', hanzi: '还是', meaning: 'or' },
          { pinyin: 'dàbēi', hanzi: '大杯', meaning: 'large cup' }
        ]
      },
      {
        mandarin: '中杯。少冰，三分甜。',
        pinyin: 'Zhōngbēi. Shǎobīng, sānfēntián.',
        translation: 'Medium. Less ice, 30% sugar.',
        words: [
          { pinyin: 'Zhōngbēi', hanzi: '中杯', meaning: 'Medium cup' },
          { pinyin: 'Shǎobīng', hanzi: '少冰', meaning: 'less ice' },
          { pinyin: 'sānfēntián', hanzi: '三分甜', meaning: '30% sugar' }
        ]
      },
      {
        mandarin: '好的，一共十五元，请在那边取餐。',
        pinyin: 'Hǎode, yígòng shíwǔ yuán, qǐng zài nàbiān qǔcān.',
        translation: 'Okay, total 15 yuan, please pick it up over there.',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'yígòng', hanzi: '一共', meaning: 'altogether' },
          { pinyin: 'shíwǔ', hanzi: '十五', meaning: 'fifteen' },
          { pinyin: 'yuán', hanzi: '元', meaning: 'yuan' },
          { pinyin: 'qǐng', hanzi: '请', meaning: 'please' },
          { pinyin: 'zài nàbiān', hanzi: '在那边', meaning: 'over there' },
          { pinyin: 'qǔcān', hanzi: '取餐', meaning: 'pick up meal' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '他要了什么饮料？',
        questionPinyin: 'Tā yàole shénme yǐnliào?',
        questionTranslation: 'What drink did he order?',
        options: [
          { text: '果汁 (Juice)', isCorrect: false },
          { text: '珍珠奶茶 (Bubble tea)', isCorrect: true },
          { text: '绿茶 (Green tea)', isCorrect: false }
        ],
        answerExplanation: 'He ordered bubble tea (珍珠奶茶).'
      },
      {
        id: 'q2',
        questionMandarin: '他要了什么甜度？',
        questionPinyin: 'Tā yàole shénme tiándù?',
        questionTranslation: 'What sugar level did he want?',
        options: [
          { text: '全糖 (Full sugar)', isCorrect: false },
          { text: '半糖 (50% sugar)', isCorrect: false },
          { text: '三分甜 (30% sugar)', isCorrect: true }
        ],
        answerExplanation: 'He asked for 30% sugar (三分甜).'
      },
      {
        id: 'q3',
        questionMandarin: '他要了多少冰？',
        questionPinyin: 'Tā yàole duōshǎo bīng?',
        questionTranslation: 'How much ice did he want?',
        options: [
          { text: '去冰 (No ice)', isCorrect: false },
          { text: '少冰 (Less ice)', isCorrect: true },
          { text: '多冰 (More ice)', isCorrect: false }
        ],
        answerExplanation: 'He asked for less ice (少冰).'
      },
      {
        id: 'q4',
        questionMandarin: '他是在这里喝吗？',
        questionPinyin: 'Tā shì zài zhèlǐ hē ma?',
        questionTranslation: 'Is he drinking it here?',
        options: [
          { text: '是 (Yes)', isCorrect: false },
          { text: '不是，打包 (No, to go)', isCorrect: true },
          { text: '即在这里也没打包', isCorrect: false }
        ],
        answerExplanation: 'He said "to go" (打包).'
      }
    ]
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Call',
    description: 'Picking up a food delivery order.',
    sentences: [
      {
        mandarin: '喂，你好，你的外卖到了。',
        pinyin: 'Wéi, nǐhǎo, nǐde wàimài dàole.',
        translation: 'Hello, your takeout has arrived.',
        words: [
          { pinyin: 'Wéi', hanzi: '喂', meaning: 'Hello (phone)' },
          { pinyin: 'nǐhǎo', hanzi: '你好', meaning: 'hello' },
          { pinyin: 'nǐde', hanzi: '你的', meaning: 'your' },
          { pinyin: 'wàimài', hanzi: '外卖', meaning: 'takeout/delivery' },
          { pinyin: 'dàole', hanzi: '到了', meaning: 'arrived' }
        ]
      },
      {
        mandarin: '好的，麻烦你帮我放在门口的外卖柜里。',
        pinyin: 'Hǎode, máfan nǐ bāng wǒ fàng zài ménkǒu de wàimàiguì lǐ.',
        translation: 'Okay, please help me put it in the locker at the entrance.',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'máfan', hanzi: '麻烦', meaning: 'trouble (please)' },
          { pinyin: 'nǐ', hanzi: '你', meaning: 'you' },
          { pinyin: 'bāng', hanzi: '帮', meaning: 'help' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'me' },
          { pinyin: 'fàng zài', hanzi: '放在', meaning: 'put in/on' },
          { pinyin: 'ménkǒu', hanzi: '门口', meaning: 'entrance/doorway' },
          { pinyin: 'de', hanzi: '的', meaning: '(possessive)' },
          { pinyin: 'wàimàiguì', hanzi: '外卖柜', meaning: 'delivery locker' },
          { pinyin: 'lǐ', hanzi: '里', meaning: 'inside' }
        ]
      },
      {
        mandarin: '外卖柜满了，放不进去了。',
        pinyin: 'Wàimàiguì mǎnle, fàng bú jìnqù le.',
        translation: 'The lockers are full, I cannot put it in.',
        words: [
          { pinyin: 'Wàimàiguì', hanzi: '外卖柜', meaning: 'delivery locker' },
          { pinyin: 'mǎnle', hanzi: '满了', meaning: 'full' },
          { pinyin: 'fàng bú jìnqù', hanzi: '放不进去', meaning: 'cannot put inside' },
          { pinyin: 'le', hanzi: '了', meaning: '(change of state)' }
        ]
      },
      {
        mandarin: '那我马上下楼来拿，请等一分钟。',
        pinyin: 'Nà wǒ mǎshàng xiàlóu lái ná, qǐng děng yì fēnzhōng.',
        translation: 'Then I will come downstairs immediately to get it, please wait a minute.',
        words: [
          { pinyin: 'Nà', hanzi: '那', meaning: 'then' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'mǎshàng', hanzi: '马上', meaning: 'immediately' },
          { pinyin: 'xiàlóu', hanzi: '下楼', meaning: 'go downstairs' },
          { pinyin: 'lái', hanzi: '来', meaning: 'come' },
          { pinyin: 'ná', hanzi: '拿', meaning: 'get/take' },
          { pinyin: 'qǐng', hanzi: '请', meaning: 'please' },
          { pinyin: 'děng', hanzi: '等', meaning: 'wait' },
          { pinyin: 'yì fēnzhōng', hanzi: '一分钟', meaning: 'one minute' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '打电话的人是谁？',
        questionPinyin: 'Dǎ diànhuà de rén shì shéi?',
        questionTranslation: 'Who is calling?',
        options: [
          { text: '快递员 (Courier)', isCorrect: false },
          { text: '外卖员 (Delivery guy)', isCorrect: true },
          { text: '房东 (Landlord)', isCorrect: false }
        ],
        answerExplanation: 'The delivery has arrived (你的外卖到了).'
      },
      {
        id: 'q2',
        questionMandarin: '顾客开始想让外卖员放哪里？',
        questionPinyin: 'Gùkè kāishǐ xiǎng ràng wàimàiyuán fàng nǎlǐ?',
        questionTranslation: 'Where did the customer initially want it put?',
        options: [
          { text: '房门口 (Doorstep)', isCorrect: false },
          { text: '前台 (Reception)', isCorrect: false },
          { text: '外卖柜 (Locker)', isCorrect: true }
        ],
        answerExplanation: 'Asked to put in the locker (外卖柜里).'
      },
      {
        id: 'q3',
        questionMandarin: '为什么不能放进去？',
        questionPinyin: 'Wèishénme bùnéng fàng jìnqù?',
        questionTranslation: 'Why couldn\'t it be put in?',
        options: [
          { text: '坏了 (Broken)', isCorrect: false },
          { text: '满了 (Full)', isCorrect: true },
          { text: '要收费 (Costs money)', isCorrect: false }
        ],
        answerExplanation: 'The lockers were full (外卖柜满了).'
      },
      {
        id: 'q4',
        questionMandarin: '顾客最后决定怎么做？',
        questionPinyin: 'Gùkè zuìhòu juédìng zěnme zuò?',
        questionTranslation: 'What did the customer decide to do in the end?',
        options: [
          { text: '不要了 (Cancel)', isCorrect: false },
          { text: '下楼拿 (Go down)', isCorrect: true },
          { text: '让放地上 (Put on ground)', isCorrect: false }
        ],
        answerExplanation: 'He will come downstairs (下楼来拿).'
      }
    ]
  },
  {
    id: 'taking-taxi',
    title: 'Taking a Taxi',
    description: 'Giving directions to a taxi driver.',
    sentences: [
      {
        mandarin: '师傅，你好，去火车站。',
        pinyin: 'Shīfu, nǐhǎo, qù huǒchēzhàn.',
        translation: 'Driver, hello, to the train station.',
        words: [
          { pinyin: 'Shīfu', hanzi: '师傅', meaning: 'master/driver' },
          { pinyin: 'nǐhǎo', hanzi: '你好', meaning: 'hello' },
          { pinyin: 'qù', hanzi: '去', meaning: 'go to' },
          { pinyin: 'huǒchēzhàn', hanzi: '火车站', meaning: 'train station' }
        ]
      },
      {
        mandarin: '好的，系好安全带。走高速吗？',
        pinyin: 'Hǎode, xìhǎo ānquándài. Zǒu gāosù ma?',
        translation: 'Okay, fasten your seatbelt. Take the highway?',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'xìhǎo', hanzi: '系好', meaning: 'fasten well' },
          { pinyin: 'ānquándài', hanzi: '安全带', meaning: 'seatbelt' },
          { pinyin: 'Zǒu', hanzi: '走', meaning: 'walk/take' },
          { pinyin: 'gāosù', hanzi: '高速', meaning: 'highway' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '走高速吧，我赶时间，怕堵车。',
        pinyin: 'Zǒu gāosù ba, wǒ gǎn shíjiān, pà dǔchē.',
        translation: 'Take the highway, I am in a hurry and afraid of traffic.',
        words: [
          { pinyin: 'Zǒu', hanzi: '走', meaning: 'take' },
          { pinyin: 'gāosù', hanzi: '高速', meaning: 'highway' },
          { pinyin: 'ba', hanzi: '吧', meaning: '(suggestion)' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'gǎn shíjiān', hanzi: '赶时间', meaning: 'in a hurry' },
          { pinyin: 'pà', hanzi: '怕', meaning: 'afraid of' },
          { pinyin: 'dǔchē', hanzi: '堵车', meaning: 'traffic jam' }
        ]
      },
      {
        mandarin: '没问题，大概二十分钟就到了。',
        pinyin: 'Méiwèntí, dàgài èrshí fēnzhōng jiù dào le.',
        translation: 'No problem, we will arrive in about 20 minutes.',
        words: [
          { pinyin: 'Méiwèntí', hanzi: '没问题', meaning: 'no problem' },
          { pinyin: 'dàgài', hanzi: '大概', meaning: 'around' },
          { pinyin: 'èrshí fēnzhōng', hanzi: '二十分钟', meaning: '20 minutes' },
          { pinyin: 'jiù', hanzi: '就', meaning: 'then/just' },
          { pinyin: 'dào', hanzi: '到', meaning: 'arrive' },
          { pinyin: 'le', hanzi: '了', meaning: '(change of state)' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '乘客要去哪里？',
        questionPinyin: 'Chéngkè yào qù nǎlǐ?',
        questionTranslation: 'Where is the passenger going?',
        options: [
          { text: '机场 (Airport)', isCorrect: false },
          { text: '火车站 (Train station)', isCorrect: true },
          { text: '酒店 (Hotel)', isCorrect: false }
        ],
        answerExplanation: 'He is going to the train station (去火车站).'
      },
      {
        id: 'q2',
        questionMandarin: '司机提醒乘客做什么？',
        questionPinyin: 'Sījī tíxǐng chéngkè zuò shénme?',
        questionTranslation: 'What did the driver remind the passenger to do?',
        options: [
          { text: '喝水 (Drink water)', isCorrect: false },
          { text: '系安全带 (Seatbelt)', isCorrect: true },
          { text: '付款 (Pay)', isCorrect: false }
        ],
        answerExplanation: 'Reminded to fasten seatbelt (系好安全带).'
      },
      {
        id: 'q3',
        questionMandarin: '乘客为什么选择走高速？',
        questionPinyin: 'Chéngkè wèishénme xuǎnzé zǒu gāosù?',
        questionTranslation: 'Why did the passenger choose the highway?',
        options: [
          { text: '风景好 (Good view)', isCorrect: false },
          { text: '便宜 (Cheap)', isCorrect: false },
          { text: '赶时间 (In a hurry)', isCorrect: true }
        ],
        answerExplanation: 'He is in a hurry (赶时间).'
      },
      {
        id: 'q4',
        questionMandarin: '大概多久能到？',
        questionPinyin: 'Dàgài duōjiǔ néng dào?',
        questionTranslation: 'About how long to arrive?',
        options: [
          { text: '10分钟', isCorrect: false },
          { text: '20分钟', isCorrect: true },
          { text: '1小时', isCorrect: false }
        ],
        answerExplanation: 'About 20 minutes (二十分钟).'
      }
    ]
  },
  {
    id: 'hotel-checkin',
    title: 'Hotel Check-in',
    description: 'Checking into a hotel.',
    sentences: [
      {
        mandarin: '你好，我预订了一间大床房。',
        pinyin: 'Nǐhǎo, wǒ yùdìngle yì jiān dàchuángfáng.',
        translation: 'Hello, I booked a room with a king bed.',
        words: [
          { pinyin: 'Nǐhǎo', hanzi: '你好', meaning: 'Hello' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'yùdìngle', hanzi: '预订了', meaning: 'booked' },
          { pinyin: 'yì jiān', hanzi: '一间', meaning: 'one (mw for rooms)' },
          { pinyin: 'dàchuángfáng', hanzi: '大床房', meaning: 'king bed room' }
        ]
      },
      {
        mandarin: '好的，请出示您的身份证或者护照。',
        pinyin: 'Hǎode, qǐng chūshì nínde shēnfènzhèng huòzhě hùzhào.',
        translation: 'Okay, please show your ID card or passport.',
        words: [
          { pinyin: 'Hǎode', hanzi: '好的', meaning: 'Okay' },
          { pinyin: 'qǐng', hanzi: '请', meaning: 'please' },
          { pinyin: 'chūshì', hanzi: '出示', meaning: 'show' },
          { pinyin: 'nínde', hanzi: '您的', meaning: 'your (polite)' },
          { pinyin: 'shēnfènzhèng', hanzi: '身份证', meaning: 'ID card' },
          { pinyin: 'huòzhě', hanzi: '或者', meaning: 'or' },
          { pinyin: 'hùzhào', hanzi: '护照', meaning: 'passport' }
        ]
      },
      {
        mandarin: '给您。请问房间里有无线网吗？',
        pinyin: 'Gěi nín. Qǐngwèn fángjiān lǐ yǒu wúxiànwǎng ma?',
        translation: 'Here you go. Is there Wi-Fi in the room?',
        words: [
          { pinyin: 'Gěi nín', hanzi: '给您', meaning: 'give you (here you go)' },
          { pinyin: 'Qǐngwèn', hanzi: '请问', meaning: 'may I ask' },
          { pinyin: 'fángjiān', hanzi: '房间', meaning: 'room' },
          { pinyin: 'lǐ', hanzi: '里', meaning: 'inside' },
          { pinyin: 'yǒu', hanzi: '有', meaning: 'have' },
          { pinyin: 'wúxiànwǎng', hanzi: '无线网', meaning: 'Wi-Fi' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '有的，密码是房间号。这是您的房卡。',
        pinyin: 'Yǒude, mìmǎ shì fángjiānhào. Zhè shì nínde fángkǎ.',
        translation: 'Yes, the password is the room number. Here is your key card.',
        words: [
          { pinyin: 'Yǒude', hanzi: '有的', meaning: 'Yes/Have' },
          { pinyin: 'mìmǎ', hanzi: '密码', meaning: 'password' },
          { pinyin: 'shì', hanzi: '是', meaning: 'is' },
          { pinyin: 'fángjiānhào', hanzi: '房间号', meaning: 'room number' },
          { pinyin: 'Zhè', hanzi: '这', meaning: 'this' },
          { pinyin: 'nínde', hanzi: '您的', meaning: 'your' },
          { pinyin: 'fángkǎ', hanzi: '房卡', meaning: 'room card' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '他订了什么房间？',
        questionPinyin: 'Tā dìngle shénme fángjiān?',
        questionTranslation: 'What room did he book?',
        options: [
          { text: '双床房 (Twin)', isCorrect: false },
          { text: '大床房 (King)', isCorrect: true },
          { text: '套房 (Suite)', isCorrect: false }
        ],
        answerExplanation: 'Booked a King bed room (大床房).'
      },
      {
        id: 'q2',
        questionMandarin: '前台要了什么证件？',
        questionPinyin: 'Qiántái yàole shénme zhèngjiàn?',
        questionTranslation: 'What ID did the reception ask for?',
        options: [
          { text: '驾照 (License)', isCorrect: false },
          { text: '身份证/护照 (ID/Passport)', isCorrect: true },
          { text: '学生证 (Student ID)', isCorrect: false }
        ],
        answerExplanation: 'ID card or passport (身份证或者护照).'
      },
      {
        id: 'q3',
        questionMandarin: '无线网密码是什么？',
        questionPinyin: 'Wúxiànwǎng mìmǎ shì shénme?',
        questionTranslation: 'What is the Wi-Fi password?',
        options: [
          { text: '123456', isCorrect: false },
          { text: '手机号 (Phone number)', isCorrect: false },
          { text: '房间号 (Room number)', isCorrect: true }
        ],
        answerExplanation: 'It is the room number (房间号).'
      },
      {
        id: 'q4',
        questionMandarin: '前台最后给了他什么？',
        questionPinyin: 'Qiántái zuìhòu gěile tā shénme?',
        questionTranslation: 'What did the reception give him in the end?',
        options: [
          { text: '发票 (Receipt)', isCorrect: false },
          { text: '房卡 (Key card)', isCorrect: true },
          { text: '地图 (Map)', isCorrect: false }
        ],
        answerExplanation: 'Gave him the room card (房卡).'
      }
    ]
  },
  {
    id: 'buying-clothes',
    title: 'Buying Clothes',
    description: 'Asking about size and discount.',
    sentences: [
      {
        mandarin: '这件衣服我可以试一下吗？',
        pinyin: 'Zhè jiàn yīfu wǒ kěyǐ shì yíxià ma?',
        translation: 'Can I try this piece of clothing on?',
        words: [
          { pinyin: 'Zhè jiàn', hanzi: '这件', meaning: 'this piece' },
          { pinyin: 'yīfu', hanzi: '衣服', meaning: 'clothing' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'kěyǐ', hanzi: '可以', meaning: 'can' },
          { pinyin: 'shì yíxià', hanzi: '试一下', meaning: 'try on a bit' },
          { pinyin: 'ma', hanzi: '吗', meaning: '?' }
        ]
      },
      {
        mandarin: '当然可以，试衣间在那边。',
        pinyin: 'Dāngrán kěyǐ, shìyījiān zài nàbiān.',
        translation: 'Of course, the fitting room is over there.',
        words: [
          { pinyin: 'Dāngrán kěyǐ', hanzi: '当然可以', meaning: 'of course' },
          { pinyin: 'shìyījiān', hanzi: '试衣间', meaning: 'fitting room' },
          { pinyin: 'zài nàbiān', hanzi: '在那边', meaning: 'is over there' }
        ]
      },
      {
        mandarin: '这件有点小，有没有大一号的？',
        pinyin: 'Zhè jiàn yǒudiǎn xiǎo, yǒu méiyǒu dà yíhào de?',
        translation: 'This is a bit small, do you have one size bigger?',
        words: [
          { pinyin: 'Zhè jiàn', hanzi: '这件', meaning: 'this one' },
          { pinyin: 'yǒudiǎn', hanzi: '有点', meaning: 'a bit' },
          { pinyin: 'xiǎo', hanzi: '小', meaning: 'small' },
          { pinyin: 'yǒu méiyǒu', hanzi: '有没有', meaning: 'do you have' },
          { pinyin: 'dà yíhào de', hanzi: '大一号的', meaning: 'one size bigger' }
        ]
      },
      {
        mandarin: '有，我去帮您拿一件L号的。',
        pinyin: 'Yǒu, wǒ qù bāng nín ná yí jiàn L hào de.',
        translation: 'Yes, I will go get a size L for you.',
        words: [
          { pinyin: 'Yǒu', hanzi: '有', meaning: 'Yes/Have' },
          { pinyin: 'wǒ', hanzi: '我', meaning: 'I' },
          { pinyin: 'qù', hanzi: '去', meaning: 'go' },
          { pinyin: 'bāng', hanzi: '帮', meaning: 'help' },
          { pinyin: 'nín', hanzi: '您', meaning: 'you (polite)' },
          { pinyin: 'ná', hanzi: '拿', meaning: 'get' },
          { pinyin: 'yí jiàn', hanzi: '一件', meaning: 'one piece' },
          { pinyin: 'L hào de', hanzi: 'L号的', meaning: 'size L' }
        ]
      }
    ],
    questions: [
      {
        id: 'q1',
        questionMandarin: '顾客想要做什么？',
        questionPinyin: 'Gùkè xiǎngyào zuò shénme?',
        questionTranslation: 'What does the customer want to do?',
        options: [
          { text: '退货 (Return)', isCorrect: false },
          { text: '试穿 (Try on)', isCorrect: true },
          { text: '付款 (Pay)', isCorrect: false }
        ],
        answerExplanation: 'Waits to try it on (试一下).'
      },
      {
        id: 'q2',
        questionMandarin: '试衣间在哪里？',
        questionPinyin: 'Shìyījiān zài nǎlǐ?',
        questionTranslation: 'Where is the fitting room?',
        options: [
          { text: '门口 (Entrance)', isCorrect: false },
          { text: '那边 (Over there)', isCorrect: true },
          { text: '二楼 (2nd floor)', isCorrect: false }
        ],
        answerExplanation: 'It is over there (那边).'
      },
      {
        id: 'q3',
        questionMandarin: '第一件衣服怎么样？',
        questionPinyin: 'Dì-yī jiàn yīfu zěnmeyàng?',
        questionTranslation: 'How was the first piece?',
        options: [
          { text: '太大了 (Too big)', isCorrect: false },
          { text: '有点小 (Bit small)', isCorrect: true },
          { text: '正好 (Just right)', isCorrect: false }
        ],
        answerExplanation: 'It was a bit small (有点小).'
      },
      {
        id: 'q4',
        questionMandarin: '店员去拿什么号了？',
        questionPinyin: 'Diànyuán qù ná shénme hào le?',
        questionTranslation: 'What size did the clerk go to get?',
        options: [
          { text: 'S号', isCorrect: false },
          { text: 'M号', isCorrect: false },
          { text: 'L号', isCorrect: true }
        ],
        answerExplanation: 'Went to get size L (L号).'
      }
    ]
  }
];

export const STORIES: Story[] = [...MANUAL_STORIES, ...(generatedData as unknown as Story[])];
