// 1. 変数の準備
let mana = 0;
let totalPower = 0;

let slimeCount = 0;
let fairyCount = 0;
let goblinCount = 0;
let dragonCount = 0;

let slimeCost = 10;
let fairyCost = 100;
let goblinCost = 100;
let dragonCost = 5000;

// 購入時のコスト増加率
let costRate = 1.5;

// 2. HTMLのパーツ（DOM）を取得
const manaBtn = document.getElementById('mana-btn');
const manaDisplay = document.getElementById('mana-count');
const totalPowerDisplay = document.getElementById('total-power');

const buySlimeBtn = document.getElementById('buy-slime-btn');
const slimeCountDisplay = document.getElementById('slime-count');
const slimeCostDisplay = document.getElementById('slime-cost');

const buyFairyBtn = document.getElementById('buy-fairy-btn');
const fairyCountDisplay = document.getElementById('fairy-count');
const fairyCostDisplay = document.getElementById('fairy-cost');

const buyGoblinBtn = document.getElementById('buy-goblin-btn');
const goblinCountDisplay = document.getElementById('goblin-count');
const goblinCostDisplay = document.getElementById('goblin-cost');

const buyDragonBtn = document.getElementById('buy-dragon-btn');
const dragonCountDisplay = document.getElementById('dragon-count');
const dragonCostDisplay = document.getElementById('dragon-cost');

// 3. 画面の更新関数（カンマ区切り＆ボタンの色替え）
function updateDisplay() {
    // 数字をカンマ付きの文字にして画面に表示
    manaDisplay.textContent = mana.toLocaleString();
    totalPowerDisplay.textContent = totalPower.toLocaleString();

    slimeCountDisplay.textContent = slimeCount.toLocaleString();
    slimeCostDisplay.textContent = slimeCost.toLocaleString();
    
    fairyCountDisplay.textContent = fairyCount.toLocaleString();
    fairyCostDisplay.textContent = fairyCost.toLocaleString();

    goblinCountDisplay.textContent = goblinCount.toLocaleString();
    goblinCostDisplay.textContent = goblinCost.toLocaleString();

    dragonCountDisplay.textContent = dragonCount.toLocaleString();
    dragonCostDisplay.textContent = dragonCost.toLocaleString();

    // マナが足りない時はボタンを無効化（灰色）にする
    buySlimeBtn.disabled = (mana < slimeCost);
    buyFairyBtn.disabled = (mana < fairyCost);
    buyGoblinBtn.disabled = (mana < goblinCost);
    buyDragonBtn.disabled = (mana < dragonCost);
}

// 4. クリック時の処理（マナを集める）
manaBtn.addEventListener( 'click', () => {
    mana += 1
    updateDisplay();
});

// 5. モンスターの召喚（購入）処理

// スライム
buySlimeBtn.addEventListener( 'click', () => {
    if ( mana >= slimeCost) {
        mana -= slimeCost;
        slimeCount += 1;
        totalPower += 1;
        slimeCost = Math.floor( slimeCost * costRate);
        updateDisplay();
    }
});

// フェアリー
buyFairyBtn.addEventListener( 'click', () => {
    if ( mana >= fairyCost) {
        mana -= fairyCost;
        fairyCount += 1;
        totalPower += 2;
        fairyCost = Math.floor( fairyCost * costRate);
        updateDisplay();
    }
});

// ゴブリン
buyGoblinBtn.addEventListener( 'click', () => {
    if ( mana >= goblinCost) {
        mana -= goblinCost;
        goblinCount += 1;
        totalPower += 20;
        goblinCost = Math.floor( goblinCost * costRate);
        updateDisplay();
    }
});

// ドラゴン
buyDragonBtn.addEventListener( 'click', () => {
    if ( mana >= dragonCost) {
        mana -= dragonCost;
        dragonCount += 1;
        totalPower += 1000;
        dragonCost = Math.floor( dragonCost * costRate);
        updateDisplay();
    }
});

// 6. 自動生産ループ（1秒ごと）
setInterval( () => {
    // 全モンスターの生産量を計算
    const production = ( slimeCount * 1) + ( fairyCount * 15) + ( goblinCount * 2) + ( dragonCount * 50);
    if ( production > 0) {
        mana += production;
        updateDisplay();
    }
}, 1000);

// 7. ゲーム開始時の初期化
updateDisplay();
