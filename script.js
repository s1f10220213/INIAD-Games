// 作品データのサンプル
// 本来はデータベースなどから取得しますが、今回はここに直接記述します。
// パスはご自身の環境に合わせて変更してください。
const gameData = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    // ... ここに作品データを追加できます
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
        } else {
            thumbnailHTML = `<img class="card-thumbnail" src="${game.thumbnail}" alt="${game.title}">`;
        }

        card.innerHTML = `
            ${thumbnailHTML}
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
        gameLink.href = game.link;
        genre.textContent = game.genre;
        playtime.textContent = game.playtime;
        controls.innerHTML = game.controls; // <br>を反映させるためinnerHTMLを使用
        description.textContent = game.description;
        authorImg.src = game.authorImage;

        // 初期メッセージを隠し、詳細を表示
        initialMessage.classList.add('hidden');
        gameDetails.classList.remove('hidden');
    }
});