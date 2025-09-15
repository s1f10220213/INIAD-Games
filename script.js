// 作品データのサンプル
// 本来はデータベースなどから取得しますが、今回はここに直接記述します。
// パスはご自身の環境に合わせて変更してください。
const gameData = [
    {//　Natsuki
        id: 1,
        title: "Catch Fish",
        thumbnail: "img/catchfish_thum.gif", // 画像の例
        thumbnailType: "gif",
        intro: "",
        link: "https://unityroom.com/games/catchfishboids",
        genre: "2Dアクション（スコアアタック）",
        playtime: "約10分",
        controls: "操作方法 移動：W / A / S / D <br>ダッシュ(ブースト)：Shift(スコアを消費して加速) <br>ショップ／UI 操作：マウスで選択・購入（クリック）",
        description: "<strong>『Catch Fish』は、群れを追いかけ<br>魚を捕まえる2Dアクションゲームです</strong><br>トゲを避けながらスコアを稼ぎ、ラウンドの合間に<br>ショップで戦略的に強化していきます。",
        authorImage: "img/catchfish_per.png"
    },
    {//　Enoki
        id: 2,
        title: "WayBackers",
        thumbnail: "img/way_thum.png",
        thumbnailType: "image",
        intro: "",
        link: "https://unityroom.com/games/waybackers",
        genre: "2Dパズル",
        playtime: "約10分",
        controls: "〇メニュー操作<br>W:↑<br>S:↓<br>L:決定<br><br>〇通常時<br>WASD:移動<br>L:押している方向のブロックを掘る<br>K:押している間カーソルを表示<br>〇カーソル表示中<br><br>WASD:カーソルの移動<br>L:フラグの設置",
        description: "<strong>無限に遊べるマインスイーパ！</strong><br>推理力と集中力が試される2Dパズルゲーム。<br>さまざまなモードでスコアを競い合え！",
        authorImage: "img/way_per.png"
    },
    {//　kirihi
        id: 3,
        title: "NoNameMech",
        thumbnail: "img/NoName_thum.jpg", // 画像の例
        thumbnailType: "image",
        intro: "洋館に隠された謎を解き明かせ！",
        link: "https://unityroom.com/games/as_nonamemech4",
        genre: "3Dアクション",
        playtime: "約30分",
        controls: "＝＝＝ コントローラー(Xbox) ＝＝＝<br>左スティック: 移動<br>右スティック: 旋回<br>左Shoulderボタン: ブースト<br>右Shoulderボタン: ジャンプ<br>左/右トリガー: 攻撃<br>右スティック押し込み: ロックオン<br>Yボタン&攻撃: リロード<br><br>＝＝＝ キーボード&マウス ＝＝＝<br>WASDキー: 移動<br>マウス操作: 旋回<br>左Shiftキー: ブースト<br>Spaceキー: ジャンプ<br>左/右クリック: 攻撃<br>マウスホイールクリック: ロックオン<br>Rキー&攻撃: リロード",
        description: "<strong>これは名もなき機体の戦闘テスト。</strong><br>シミュレーターを跳び回り、仮想空間の脅威を<br>突破する3Dメカアクション。",
        authorImage: "img/NoName_per.png"
    },//　松原
    {
        id: 4,
        title: "GLORIOSA",
        thumbnail: "img/gloriosa_thum.png", // 画像の例
        thumbnailType: "image",
        intro: "宇宙を駆け抜ける爽快アクション！",
        link: "https://unityroom.com/games/gloriosa",
        genre: "3Dアクション",
        playtime: "約10分",
        controls: "移動：WASDキー<br>ダッシュ：Lキー<br>ジャンプ：スペースキー<br>弱攻撃：Eキー<br>強攻撃：Rキー<br>遠距離攻撃：Qキー(YP消費)<br>ターゲット取り：Tキー",
        description: "障害物を避けながらゴールを目指す、シンプルな横スクロールアクションゲームです。ハイスコアを目指しましょう！",
        authorImage: "img/gloriosa_per.jpg"
    },
    {//　kazupin
        id: 5,
        title: "The Darts",
        thumbnail: "img/darts_thum.png",
        thumbnailType: "image",
        intro: "動物たちと挑む、癒やしのパズル。",
        link: "https://unityroom.com/games/439k_darts",
        genre: "3Dシューティング、シミュレーション",
        playtime: "約10分",
        controls: "【ゲームプレイ時】<br>マウスカーソル: ダーツの照準<br>マウス左クリック: ダーツの発射<br>Rキー: 視点のリセット<br>Escキー: ポーズ（設定）画面<br>SE: 効果音の音量調整<br>Sensitivity: マウス感度の調整",
        description: "マウスひとつでダーツを投げる、<br><strong>シンプルながらも奥深いスキルベースのゲーム。</strong>",
        authorImage: "img/darts_per.PNG"
    },
    {//　kowa
        id: 6,
        title: "海底",
        thumbnail: "img/kaitei_thum.mp4",
        thumbnailType: "video",
        intro: "洋館に隠された謎を解き明かせ！",
        link: "https://unityroom.com/games/undersea",
        genre: "3DRPG",
        playtime: "約10分",
        controls: "カメラ移動: マウス移動<br> UI操作: クリック<br>前,後,左,右:W,A,S,D<br>潜水,浮上:SHIFT,SPACE<br>インタラクト、インベントリ、メニュー:I, E, Escape<br><br>※一部体の不自由感を出すために独特な操作になっている場所があります。",
        description: "<strong>海底を舞台にしたRPGです。</strong><br>分断された海から脱出し巨大で危険な生物のいる海の中から安住の地を探します。",
        authorImage: "img/kaitei_per.png"
    },
    {
        id: 7,
        title: "疾走！スペースランナー",
        thumbnail: "https://via.placeholder.com/300x200.png?text=Game1+Image", // 画像の例
        thumbnailType: "image",
        intro: "宇宙を駆け抜ける爽快アクション！",
        link: "#",
        genre: "アクション",
        playtime: "約5分",
        controls: "矢印キー: 移動<br>スペースキー: ジャンプ",
        description: "障害物を避けながらゴールを目指す、シンプルな横スクロールアクションゲームです。ハイスコアを目指しましょう！",
        authorImage: "https://via.placeholder.com/200x200.png?text=Author1"
    },
    {
        id: 8,
        title: "森のパズル",
        thumbnail: "path/to/your/video.mp4", // ★★★ご自身の動画ファイルのパスに変更してください★★★
        thumbnailType: "video",
        intro: "動物たちと挑む、癒やしのパズル。",
        link: "#",
        genre: "パズル",
        playtime: "約10分",
        controls: "マウスドラッグ: ブロックを移動",
        description: "同じ色のブロックを3つ揃えて消していく、定番のパズルゲーム。連鎖を狙って高得点を目指そう。",
        authorImage: "https://via.placeholder.com/200x200.png?text=Author2"
    },
    {
        id: 9,
        title: "ミステリーハウス",
        thumbnail: "https://via.placeholder.com/300x200.png?text=Game3+Image", // 画像の例
        thumbnailType: "image",
        intro: "洋館に隠された謎を解き明かせ！",
        link: "#",
        genre: "アドベンチャー",
        playtime: "約30分",
        controls: "マウスクリック: 調べる、移動",
        description: "あなたは探偵となり、怪しい洋館を探索します。様々なアイテムやヒントを見つけ出し、事件の真相を解き明かしてください。",
        authorImage: "https://via.placeholder.com/200x200.png?text=Author3"
    },
    {
        id: 10,
        title: "疾走！スペースランナー",
        thumbnail: "https://via.placeholder.com/300x200.png?text=Game1+Image", // 画像の例
        thumbnailType: "image",
        intro: "宇宙を駆け抜ける爽快アクション！",
        link: "#",
        genre: "アクション",
        playtime: "約5分",
        controls: "矢印キー: 移動<br>スペースキー: ジャンプ",
        description: "障害物を避けながらゴールを目指す、シンプルな横スクロールアクションゲームです。ハイスコアを目指しましょう！",
        authorImage: "https://via.placeholder.com/200x200.png?text=Author1"
    }
];


// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const initialMessage = document.getElementById('initial-message');
    const gameDetails = document.getElementById('game-details');

    // --- 1. 左側に作品カードを生成 ---
    gameData.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.id = game.id; // カードにIDを持たせる

        let thumbnailHTML = '';
        if (game.thumbnailType === 'video') {
        thumbnailHTML = `<video class="card-thumbnail" src="${game.thumbnail}" muted loop playsinline></video>`;
        } else if (game.thumbnailType === 'gif') { // ★GIFタイプを追加
            thumbnailHTML = `<img class="card-thumbnail gif-thumbnail" src="${game.thumbnail}" alt="${game.title}">`;
        } else { // imageタイプの場合
            thumbnailHTML = `<img class="card-thumbnail" src="${game.thumbnail}" alt="${game.title}">`;
        }

        card.innerHTML = `
            <div class="card-thumbnail-wrapper">
                ${thumbnailHTML}
                <div class="card-title-overlay">
                    <p>${game.title}</p>
                </div>
            </div>
            <div class="card-intro">
                <p>${game.intro}</p>
            </div>
        `;
        galleryContainer.appendChild(card);
    });

    // --- 2. カードのイベント処理 ---
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        const video = card.querySelector('video');

        // マウスオーバーで動画再生
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play();
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // 動画を最初に戻す
            });
        }

        // クリックで右側に詳細表示
        card.addEventListener('click', () => {
            const gameId = parseInt(card.dataset.id);
            const selectedGame = gameData.find(game => game.id === gameId);
            
            if (selectedGame) {
                updateDetails(selectedGame);
            }
        });
    });

    // --- 3. 右側の詳細情報を更新する関数 ---
    function updateDetails(game) {
        // 各要素を取得
        const detailsThumbnailContainer = document.getElementById('details-thumbnail-container');
        const title = document.getElementById('details-title');
        const gameLink = document.getElementById('game-link');
        const genre = document.getElementById('details-genre');
        const playtime = document.getElementById('details-playtime');
        const controls = document.getElementById('details-controls');
        const description = document.getElementById('details-description');
        const authorImg = document.getElementById('details-author-img');

        // サムネイルを設定
        let thumbnailHTML = '';
        if (game.thumbnailType === 'video') {
            thumbnailHTML = `<video id="details-thumbnail" src="${game.thumbnail}" controls autoplay muted loop></video>`;
        } else {
            thumbnailHTML = `<img id="details-thumbnail" src="${game.thumbnail}" alt="${game.title}">`;
        }
        detailsThumbnailContainer.innerHTML = thumbnailHTML;

        // その他の情報を設定
        title.textContent = game.title;
        gameLink.href = game.link;
        genre.textContent = game.genre;
        playtime.textContent = game.playtime;
        controls.innerHTML = game.controls; // <br>を反映させるためinnerHTMLを使用
        description.innerHTML = game.description;
        authorImg.src = game.authorImage;

        // 初期メッセージを隠し、詳細を表示
        initialMessage.classList.add('hidden');
        gameDetails.classList.remove('hidden');
    }
});