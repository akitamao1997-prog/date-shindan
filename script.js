// ■ 設定: アフィリエイトリンクのURL
// ここを自分のリンク（A8.netなど）に書き換えるだけでOK
const LINKS = {
    movie: "https://video.unext.jp/",           // U-NEXTなど
    car: "https://travel.rakuten.co.jp/cars/", // レンタカー
    hotel: "https://travel.rakuten.co.jp/",     // 宿泊・旅行
    restaurant: "https://restaurant.ikyu.com/", // レストラン予約
    activity: "https://www.asoview.com/",       // アソビュー
    amazon: "https://www.amazon.co.jp/",        // グッズ購入
    map: "https://www.google.co.jp/maps/"       // マップ（収益なし用）
};

// ■ データ: 30種類以上のデートプラン
// types: [インドア/アウトドア, 予算(1:安~3:高), 元気度(1:低~3:高)]
const dateDatabase = [
    // --- 家・インドア・まったり (予算1, 元気1) ---
    {
        id: 1,
        title: "🎬 おこもりホラー映画会",
        desc: "部屋を真っ暗にして恐怖体験。吊り橋効果で距離が縮まるかも？",
        action: "コンビニでお菓子を買い込み、一番評価の高いホラー映画を見る。",
        tags: ["#インドア", "#映画", "#ドキドキ"],
        linkText: "31日間無料でホラー映画見放題 (U-NEXT)",
        linkUrl: LINKS.movie,
        conditions: { type: 'indoor', cost: 1, energy: 1 }
    },
    {
        id: 2,
        title: "📺 懐かしドラマ一気見",
        desc: "「これ流行ったよね！」学生時代のドラマを見て思い出話に花を咲かせる。",
        action: "2人の世代のヒット作を検索して、第1話から再生する。",
        tags: ["#インドア", "#エモい", "#のんびり"],
        linkText: "過去の名作ドラマを探す (U-NEXT)",
        linkUrl: LINKS.movie,
        conditions: { type: 'indoor', cost: 1, energy: 1 }
    },
    {
        id: 3,
        title: "🍿 アニメ鑑賞マラソン",
        desc: "話題のアニメを最新話まで追いつく日。ピザでも頼んで動かない贅沢。",
        action: "気になってたけど見てなかったアニメを1クール見切る。",
        tags: ["#インドア", "#アニメ", "#チル"],
        linkText: "話題のアニメを無料視聴する",
        linkUrl: LINKS.movie,
        conditions: { type: 'indoor', cost: 1, energy: 1 }
    },
    {
        id: 4,
        title: "📚 お互いの「推し漫画」布教",
        desc: "自分の人生を変えた漫画を相手に読ませる会。感想戦で盛り上がろう。",
        action: "漫画を持ち寄るか、電子書籍で読み漁る。",
        tags: ["#インドア", "#漫画", "#プレゼン"],
        linkText: "電子書籍の読み放題を探す",
        linkUrl: LINKS.movie,
        conditions: { type: 'indoor', cost: 1, energy: 1 }
    },
    {
        id: 5,
        title: "🎮 協力プレイでゲーム三昧",
        desc: "対戦は喧嘩になるから禁止。協力してクリアを目指す平和な世界。",
        action: "Switchやスマホで協力ゲームを探してプレイ。",
        tags: ["#ゲーム", "#協力", "#インドア"],
        linkText: "2人で遊べるゲームを探す (Amazon)",
        linkUrl: LINKS.amazon,
        conditions: { type: 'indoor', cost: 1, energy: 1 }
    },
    {
        id: 6,
        title: "🍳 本気のフルコース自炊",
        desc: "外食の半額で高級食材が買える。2人でキッチンに立つ幸せ。",
        action: "スーパーで良いお肉を買って、ステーキやパスタを作る。",
        tags: ["#料理", "#同棲気分", "#節約"],
        linkText: "ネットスーパーで食材を見る",
        linkUrl: LINKS.amazon,
        conditions: { type: 'indoor', cost: 2, energy: 2 }
    },

    // --- 外出・アクティブ・元気 (予算1~2, 元気3) ---
    {
        id: 7,
        title: "🎳 スポッチャ・ボウリング対決",
        desc: "負けた方がジュース奢り！たまには身体を動かしてストレス発散。",
        action: "ラウンドワンやスポッチャに行って3時間パックで遊ぶ。",
        tags: ["#アクティブ", "#スポーツ", "#対決"],
        linkText: "近くのアクティビティを探す (アソビュー)",
        linkUrl: LINKS.activity,
        conditions: { type: 'outdoor', cost: 2, energy: 3 }
    },
    {
        id: 8,
        title: "🎤 3時間耐久カラオケ",
        desc: "上手い下手は関係なし。懐メロ縛りやアニソン縛りで喉を潰そう。",
        action: "フリータイムで入室し、履歴を自分たちで埋め尽くす。",
        tags: ["#ストレス発散", "#個室", "#音楽"],
        linkText: "近くのカラオケ店を探す",
        linkUrl: LINKS.map,
        conditions: { type: 'indoor', cost: 2, energy: 2 }
    },
    {
        id: 9,
        title: "🚶 目的地のない「散歩」",
        desc: "スマホの地図を見るのは禁止。気になった路地に入ってみる冒険。",
        action: "普段降りない駅で降りて、直感だけでお店を探す。",
        tags: ["#散歩", "#0円", "#発見"],
        linkText: "Googleマップで現在地を見る",
        linkUrl: LINKS.map,
        conditions: { type: 'outdoor', cost: 1, energy: 2 }
    },
    {
        id: 10,
        title: "⛩ パワースポット神社巡り",
        desc: "2人の相性祈願。おみくじを引いて、書いてある通りに行動してみる。",
        action: "近くの有名な神社や寺院を調べて行ってみる。",
        tags: ["#散歩", "#運勢", "#落ち着く"],
        linkText: "近くの神社・仏閣を探す",
        linkUrl: LINKS.map,
        conditions: { type: 'outdoor', cost: 1, energy: 2 }
    },

    // --- ドライブ・遠出 (予算2~3, 元気2~3) ---
    {
        id: 11,
        title: "🌃 夜景ハント・ドライブ",
        desc: "ロマンチックな雰囲気作りは夜景にお任せ。BGMはとびきりお洒落に。",
        action: "山や港など、夜景が綺麗なスポットへ車を走らせる。",
        tags: ["#ドライブ", "#夜景", "#ロマンチック"],
        linkText: "格安レンタカーを比較する (楽天トラベル)",
        linkUrl: LINKS.car,
        conditions: { type: 'outdoor', cost: 2, energy: 2 }
    },
    {
        id: 12,
        title: "🛒 IKEA / コストコ爆買い",
        desc: "将来の部屋の妄想が捗る。ホットドッグを食べて海外気分。",
        action: "車で大型倉庫店へ行き、謎のぬいぐるみや雑貨を見る。",
        tags: ["#買い物", "#ドライブ", "#妄想"],
        linkText: "レンタカーを予約する",
        linkUrl: LINKS.car,
        conditions: { type: 'outdoor', cost: 2, energy: 2 }
    },
    {
        id: 13,
        title: "♨️ 日帰り温泉・サウナ旅",
        desc: "ちょっと遠くの温泉へ。湯上がりコーヒー牛乳で乾杯。",
        action: "車で1〜2時間の距離にある「道の駅」や「温泉」へ行く。",
        tags: ["#癒やし", "#ドライブ", "#温泉"],
        linkText: "日帰り温泉プランを見る (アソビュー)",
        linkUrl: LINKS.activity,
        conditions: { type: 'outdoor', cost: 2, energy: 2 }
    },
    {
        id: 14,
        title: "🌊 海を見て黄昏れる",
        desc: "波の音を聞くだけでいい。エモい写真を撮り合おう。",
        action: "海沿いのカフェを目指してドライブし、浜辺を歩く。",
        tags: ["#海", "#エモい", "#ドライブ"],
        linkText: "海沿いのレンタカーを探す",
        linkUrl: LINKS.car,
        conditions: { type: 'outdoor', cost: 2, energy: 2 }
    },
    {
        id: 15,
        title: "🌌 星空観賞会",
        desc: "街の明かりがない場所へ。星座アプリを片手に空を見上げる。",
        action: "防寒対策をして、峠や公園の駐車場で空を見る。",
        tags: ["#夜", "#星空", "#静寂"],
        linkText: "レンタカーを予約する",
        linkUrl: LINKS.car,
        conditions: { type: 'outdoor', cost: 1, energy: 2 }
    },

    // --- リッチ・食事・記念日 (予算3, 元気1~2) ---
    {
        id: 16,
        title: "🥩 焼肉で優勝する",
        desc: "カロリーなんて気にするな。肉を焼いて米を食らう、それが正義。",
        action: "食べ放題じゃない、少し良い焼肉屋を予約する。",
        tags: ["#グルメ", "#肉", "#贅沢"],
        linkText: "評判の良い焼肉店を予約 (一休.com)",
        linkUrl: LINKS.restaurant,
        conditions: { type: 'outdoor', cost: 3, energy: 2 }
    },
    {
        id: 17,
        title: "🍰 ホテル・アフタヌーンティー",
        desc: "貴族の遊びを体験。甘いものと紅茶で優雅な午後を。",
        action: "ホテルのラウンジやカフェのアフタヌーンティーに行く。",
        tags: ["#ヌン活", "#映え", "#甘党"],
        linkText: "アフタヌーンティー特集を見る (一休)",
        linkUrl: LINKS.restaurant,
        conditions: { type: 'outdoor', cost: 3, energy: 1 }
    },
    {
        id: 18,
        title: "🍣 回らないお寿司ランチ",
        desc: "夜は高いけどランチなら行ける。職人が握る寿司を体験。",
        action: "カウンターのあるお寿司屋さんのランチに行く。",
        tags: ["#グルメ", "#大人", "#ランチ"],
        linkText: "美味しいお寿司屋さんを探す",
        linkUrl: LINKS.restaurant,
        conditions: { type: 'outdoor', cost: 3, energy: 2 }
    },
    {
        id: 19,
        title: "🏨 都内ホテルでお泊まり会",
        desc: "観光しなくていい。綺麗なホテルでダラダラするためだけに泊まる。",
        action: "直前割などで安くなっているビジホやシティホテルを予約。",
        tags: ["#ホテル", "#非日常", "#宿泊"],
        linkText: "お得なホテルプランを探す (楽天トラベル)",
        linkUrl: LINKS.hotel,
        conditions: { type: 'indoor', cost: 3, energy: 1 }
    },

    // --- テーマパーク・施設 (予算2~3, 元気3) ---
    {
        id: 20,
        title: "🐬 水族館デート",
        desc: "薄暗くてムード満点。クラゲを見て癒やされよう。",
        action: "近くの水族館へ行く。イルカショーの時間をチェック。",
        tags: ["#定番", "#癒やし", "#雨でもOK"],
        linkText: "水族館のチケットを探す (アソビュー)",
        linkUrl: LINKS.activity,
        conditions: { type: 'indoor', cost: 2, energy: 2 }
    },
    {
        id: 21,
        title: "🎢 遊園地・テーマパーク",
        desc: "待ち時間も会話のチャンス。叫んで笑って疲れ果てよう。",
        action: "ディズニー、USJ、または地元の遊園地へ。",
        tags: ["#遊園地", "#アクティブ", "#一日中"],
        linkText: "テーマパークのチケットを探す",
        linkUrl: LINKS.activity,
        conditions: { type: 'outdoor', cost: 3, energy: 3 }
    },
    {
        id: 22,
        title: "🦁 動物園・サファリパーク",
        desc: "動物の可愛さに悶絶する。ふれあいコーナーは必須。",
        action: "動物園に行き、お揃いの動物キーホルダーを買う。",
        tags: ["#動物", "#散歩", "#癒やし"],
        linkText: "動物園のチケットを探す",
        linkUrl: LINKS.activity,
        conditions: { type: 'outdoor', cost: 1, energy: 3 }
    },
    {
        id: 23,
        title: "🖼 美術館・博物館デート",
        desc: "知的な一面を見せるチャンス？静かな空間で大人な時間を。",
        action: "開催中の企画展を調べて見に行く。グッズ売り場も見る。",
        tags: ["#アート", "#知育", "#静か"],
        linkText: "美術館のチケットを探す",
        linkUrl: LINKS.activity,
        conditions: { type: 'indoor', cost: 2, energy: 1 }
    },
    {
        id: 24,
        title: "🐈 猫カフェ・動物カフェ",
        desc: "家で飼えない2人へ。ひたすらモフモフして溶ける時間。",
        action: "猫、フクロウ、ハリネズミなどのカフェに行く。",
        tags: ["#猫", "#癒やし", "#インドア"],
        linkText: "近くのアニマルカフェを探す (アソビュー)",
        linkUrl: LINKS.activity,
        conditions: { type: 'indoor', cost: 2, energy: 1 }
    },
    {
        id: 25,
        title: "🧗‍♀️ ボルダリング体験",
        desc: "壁を登る2人の姿はシュールかも。運動不足を解消。",
        action: "初心者講習があるボルダリングジムに行く。",
        tags: ["#スポーツ", "#筋肉痛", "#体験"],
        linkText: "ボルダリング体験を探す",
        linkUrl: LINKS.activity,
        conditions: { type: 'indoor', cost: 2, energy: 3 }
    },
    {
        id: 26,
        title: "🕵️ リアル脱出ゲーム",
        desc: "協力しないと出られない。2人の絆と知能が試される。",
        action: "常設型の脱出ゲームや謎解きイベントに参加する。",
        tags: ["#謎解き", "#協力", "#頭脳戦"],
        linkText: "脱出ゲームを探す (アソビュー)",
        linkUrl: LINKS.activity,
        conditions: { type: 'indoor', cost: 2, energy: 2 }
    }
];

// SSR（スーパーレア）枠
const ssrResult = {
    id: 999,
    title: "✨ 【SSR】ダーツの旅",
    desc: "行き先は運任せ。地図にダーツ（指）を投げてそこに決定！",
    action: "スマホの地図を適当にスクロールして、指で止めた場所に行く。",
    tags: ["#伝説", "#神回", "#冒険"],
    linkText: "📸 結果をスクショして保存！",
    linkUrl: "#",
    conditions: { type: 'any', cost: 3, energy: 3 }
};


// 質問リスト
const questions = [
    {
        text: "Q1. 今日の「お財布事情」は？",
        a: "節約したい… 💸 (予算低)",
        b: "奮発できる！ 💎 (予算高)",
        key: "cost"
    },
    {
        text: "Q2. 今日の「元気」残量は？",
        a: "まったりしたい 🪫 (省エネ)",
        b: "動き回りたい！ 💪 (元気)",
        key: "energy"
    },
    {
        text: "Q3. お外の「天気」はどう？",
        a: "雨 / 室内がいい ☔️",
        b: "晴れ / 外に出たい ☀️",
        key: "weather"
    },
    {
        text: "Q4. 移動距離はどれくらい？",
        a: "近場・徒歩圏内 🏠",
        b: "車・電車で遠出 🚃",
        key: "distance"
    },
    {
        text: "Q5. 今の気分はどっち？",
        a: "癒やされたい 🥰",
        b: "刺激が欲しい 😆",
        key: "mood"
    },
    {
        text: "Q6. お腹の減り具合は？",
        a: "お腹すいた 🍔",
        b: "まだ大丈夫 ☕️",
        key: "hunger"
    },
    {
        text: "Q7. 最終確認！今日の2人は？",
        a: "仲良し・安定モード",
        b: "マンネリ・打開モード",
        key: "final"
    }
];

let currentQuestionIndex = 0;
let userAnswers = {}; // { cost: 1, energy: 2, weather: 'indoor' ... }

// HTML要素
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");

// --- 関数 ---

function startQuiz() {
    startScreen.classList.remove("active");
    questionScreen.classList.add("active");
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("q-number").textContent = `Q${currentQuestionIndex + 1}`;
    document.getElementById("q-text").textContent = q.text;
    document.getElementById("opt-a").textContent = q.a;
    document.getElementById("opt-b").textContent = q.b;
    
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

function selectOption(choice) {
    const q = questions[currentQuestionIndex];
    
    // 回答をスコア化して保存
    // Aを選んだら低コスト・インドア寄り、Bなら高コスト・アウトドア寄り等の簡易ロジック
    if (q.key === 'cost') userAnswers.cost = (choice === 'A') ? 1 : 3;
    if (q.key === 'energy') userAnswers.energy = (choice === 'A') ? 1 : 3;
    if (q.key === 'weather') userAnswers.type = (choice === 'A') ? 'indoor' : 'outdoor';
    
    // 他の質問は「タグ」として保存（今回は簡易化のためログに残すのみ）
    userAnswers[q.key] = choice;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    questionScreen.classList.remove("active");
    loadingScreen.classList.add("active");
    
    // 計算演出（1.5秒待機）
    setTimeout(() => {
        const result = calculateResult();
        displayResult(result);
        loadingScreen.classList.remove("active");
        resultScreen.classList.add("active");
    }, 1500);
}

// ■ 結果選定ロジック（ここが重要）
function calculateResult() {
    // 1. SSR判定 (5%の確率)
    if (Math.random() < 0.05) return ssrResult;

    // 2. フィルタリング
    // ユーザーの条件（予算、天気など）に合うデートだけを抽出する
    let candidates = dateDatabase.filter(plan => {
        // 天気チェック: 雨(indoor指定)なら、outdoorプランを除外
        if (userAnswers.type === 'indoor' && plan.conditions.type === 'outdoor') return false;
        
        // 予算チェック: ユーザー予算より高いプランは除外
        if (plan.conditions.cost > userAnswers.cost) return false;

        // 元気チェック: ユーザー元気度より激しいプランは除外
        // (ただし、元気がある時にまったりプランが出るのはOKとする)
        if (plan.conditions.energy > userAnswers.energy) return false;

        return true;
    });

    // 3. 候補が0になってしまった場合の救済措置
    // （条件が厳しすぎた場合、条件を緩めて再検索）
    if (candidates.length === 0) {
        candidates = dateDatabase.filter(plan => {
            // 天気だけは守る
            return (userAnswers.type === 'indoor' ? plan.conditions.type !== 'outdoor' : true);
        });
    }

    // 4. ランダムに1つ選ぶ（これが「毎日変わる」秘訣）
    const randomIndex = Math.floor(Math.random() * candidates.length);
    return candidates[randomIndex];
}

function displayResult(data) {
    document.getElementById("result-title").textContent = data.title;
    document.getElementById("result-desc").textContent = data.desc;
    document.getElementById("result-action").textContent = data.action;

    // タグ生成
    const tagBox = document.querySelector(".result-tags");
    tagBox.innerHTML = "";
    data.tags.forEach(tag => {
        const span = document.createElement("span");
        span.textContent = tag;
        tagBox.appendChild(span);
    });

    // アフィリエイトリンク
    const linkBtn = document.getElementById("affiliate-link");
    document.getElementById("affiliate-text").textContent = data.linkText;
    linkBtn.href = data.linkUrl;
    
    // SSR演出
    const card = document.querySelector(".result-card");
    if (data.id === 999) {
        card.style.borderColor = "#FFD700"; // 金色
        card.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.3)";
    } else {
        card.style.borderColor = "var(--primary-color)";
        card.style.boxShadow = "var(--card-shadow)";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}
