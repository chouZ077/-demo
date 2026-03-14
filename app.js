const UNIVERSITIES = [
  { id: 1, name: "大学城 A 校区", x: 30, y: 42, color: "#ff7a45" },
  { id: 2, name: "大学城 B 校区", x: 58, y: 48, color: "#5b8dfd" },
  { id: 3, name: "大学城 C 校区", x: 74, y: 32, color: "#22c55e" }
];

const RESTAURANTS = [
  {
    id: 101,
    uniId: 1,
    name: "橘子茶坊",
    type: "奶茶店",
    category: "奶茶",
    emoji: "🧋",
    x: 32,
    y: 42,
    rating: 4.8,
    reviews: 1250,
    meituan: 4.8,
    dianping: 4.7,
    location: "距 A 校区东门步行 4 分钟",
    reviewSnippets: [
      { platform: "美团", stars: 5, text: "芝士奶盖很厚，甜度可调，晚上自习后来一杯很舒服" },
      { platform: "大众点评", stars: 4, text: "草莓冰沙颜值很高，出杯速度快，排队也不会太久" }
    ],
    baseVotes: { rec: 450, unrec: 12 }
  },
  {
    id: 102,
    uniId: 1,
    name: "王记湘菜馆",
    type: "饭店",
    category: "湘菜",
    emoji: "🌶️",
    x: 27,
    y: 38,
    rating: 4.5,
    reviews: 890,
    meituan: 4.6,
    dianping: 4.4,
    location: "距 A 校区南门步行 6 分钟",
    reviewSnippets: [
      { platform: "美团", stars: 5, text: "辣度很正宗，干锅鸡分量大，三个人吃完全够" },
      { platform: "大众点评", stars: 4, text: "人多的时候上菜略慢，但性价比确实高，适合聚餐" }
    ],
    baseVotes: { rec: 320, unrec: 45 }
  },
  {
    id: 103,
    uniId: 1,
    name: "甜心果切铺",
    type: "水果店",
    category: "水果",
    emoji: "🍓",
    x: 34,
    y: 37,
    rating: 4.4,
    reviews: 420,
    meituan: 4.5,
    dianping: 4.3,
    location: "A 校区宿舍区商业街",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "芒果很新鲜，套餐价格对学生比较友好" },
      { platform: "大众点评", stars: 4, text: "盒子装得很整齐，晚上去买常常还能碰到打折" }
    ],
    baseVotes: { rec: 210, unrec: 21 }
  },
  {
    id: 201,
    uniId: 2,
    name: "川流不息",
    type: "饭店",
    category: "川菜",
    emoji: "🥘",
    x: 59,
    y: 50,
    rating: 4.7,
    reviews: 1080,
    meituan: 4.8,
    dianping: 4.6,
    location: "距 B 校区北门步行 5 分钟",
    reviewSnippets: [
      { platform: "美团", stars: 5, text: "水煮牛肉很香，米饭还能免费续，学生党友好" },
      { platform: "大众点评", stars: 4, text: "口味偏麻，喜欢重口的会很满意，饭点要早点去" }
    ],
    baseVotes: { rec: 518, unrec: 33 }
  },
  {
    id: 202,
    uniId: 2,
    name: "樱町日料",
    type: "日料店",
    category: "日料",
    emoji: "🍣",
    x: 54,
    y: 46,
    rating: 4.6,
    reviews: 660,
    meituan: 4.6,
    dianping: 4.7,
    location: "B 校区西侧商圈二层",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "鳗鱼饭很稳，定食套餐适合一个人吃，不会太贵" },
      { platform: "大众点评", stars: 5, text: "环境安静，适合约朋友聊天，玉子烧很受欢迎" }
    ],
    baseVotes: { rec: 286, unrec: 18 }
  },
  {
    id: 203,
    uniId: 2,
    name: "泡泡奶盖",
    type: "奶茶店",
    category: "奶茶",
    emoji: "🥤",
    x: 62,
    y: 44,
    rating: 4.3,
    reviews: 540,
    meituan: 4.4,
    dianping: 4.2,
    location: "B 校区图书馆对面",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "奶盖比较轻，水果茶比较适合夏天，活动很多" },
      { platform: "大众点评", stars: 4, text: "门店不大但干净，学生下午经常来点单坐一会儿" }
    ],
    baseVotes: { rec: 230, unrec: 27 }
  },
  {
    id: 301,
    uniId: 3,
    name: "岭南味道",
    type: "饭店",
    category: "粤菜",
    emoji: "🥟",
    x: 77,
    y: 31,
    rating: 4.5,
    reviews: 730,
    meituan: 4.5,
    dianping: 4.6,
    location: "C 校区东南角商业街",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "煲仔饭锅巴很香，双拼很受欢迎，适合晚上吃正餐" },
      { platform: "大众点评", stars: 5, text: "肠粉出品稳定，口味清爽，早午餐时间人很多" }
    ],
    baseVotes: { rec: 308, unrec: 19 }
  },
  {
    id: 302,
    uniId: 3,
    name: "首尔小馆",
    type: "韩餐店",
    category: "韩餐",
    emoji: "🍲",
    x: 71,
    y: 35,
    rating: 4.4,
    reviews: 610,
    meituan: 4.3,
    dianping: 4.5,
    location: "距 C 校区正门步行 7 分钟",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "部队锅很适合多人分享，芝士玉米是热门配菜" },
      { platform: "大众点评", stars: 4, text: "装修很适合拍照，午间套餐价格比晚餐便宜一些" }
    ],
    baseVotes: { rec: 254, unrec: 26 }
  },
  {
    id: 303,
    uniId: 3,
    name: "日落西餐社",
    type: "西餐厅",
    category: "西餐",
    emoji: "🍝",
    x: 73,
    y: 28,
    rating: 4.2,
    reviews: 358,
    meituan: 4.1,
    dianping: 4.3,
    location: "C 校区艺术楼外街区",
    reviewSnippets: [
      { platform: "美团", stars: 4, text: "意面口味偏奶香，环境好，适合约会或者庆祝" },
      { platform: "大众点评", stars: 4, text: "下午茶套餐比正餐更划算，甜点出片效果不错" }
    ],
    baseVotes: { rec: 172, unrec: 24 }
  }
];

const CATEGORIES = ["湘菜", "川菜", "粤菜", "日料", "韩餐", "西餐", "奶茶", "水果", "烧烤", "火锅", "轻食", "甜品"];
const SERVICES = [
  { label: "美团直播", glyph: "📺" },
  { label: "美团酒店", glyph: "🏨" },
  { label: "美团团购", glyph: "🛍️" },
  { label: "美团优选", glyph: "📦" }
];
const LEVEL_META = {
  1: { scale: 1, label: "总览" },
  2: { scale: 2.85, label: "周边" },
  3: { scale: 3.45, label: "细节" }
};
const VOTE_STORAGE_KEY = "campus-food-votes";

const state = {
  zoomLevel: 1,
  selectedUniId: null,
  selectedShopId: null,
  activeCategory: null,
  sortBy: "reviews",
  searchQuery: "",
  panX: 0,
  panY: 0,
  drag: {
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    panStartX: 0,
    panStartY: 0
  },
  userVotes: loadVotes()
};

const mapStage = document.querySelector("#mapStage");
const schoolLayer = document.querySelector("#schoolLayer");
const shopLayer = document.querySelector("#shopLayer");
const categoryRail = document.querySelector("#categoryRail");
const serviceRail = document.querySelector("#serviceRail");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
const statusText = document.querySelector("#statusText");
const zoomInButton = document.querySelector("#zoomInButton");
const zoomOutButton = document.querySelector("#zoomOutButton");
const backButton = document.querySelector("#backButton");
const categoryPanel = document.querySelector("#categoryPanel");
const categoryTitle = document.querySelector("#categoryTitle");
const categorySubline = document.querySelector("#categorySubline");
const categoryList = document.querySelector("#categoryList");
const closeCategoryPanel = document.querySelector("#closeCategoryPanel");
const sortTabs = document.querySelector("#sortTabs");
const detailSheet = document.querySelector("#detailSheet");
const detailContent = document.querySelector("#detailContent");
const sheetHandle = document.querySelector("#sheetHandle");
const toast = document.querySelector("#toast");

function loadVotes() {
  try {
    const raw = localStorage.getItem(VOTE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function saveVotes() {
  localStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(state.userVotes));
}

function getUniversityById(id) {
  return UNIVERSITIES.find((uni) => uni.id === id) || null;
}

function getShopById(id) {
  return RESTAURANTS.find((shop) => shop.id === id) || null;
}

function getSelectedUniversity() {
  return getUniversityById(state.selectedUniId);
}

function getSelectedShop() {
  return getShopById(state.selectedShopId);
}

function truncate(text) {
  return `${text.replace(/[。！!.?？]+$/, "")}...`;
}

function getVoteTotals(shop) {
  const vote = state.userVotes[String(shop.id)];
  return {
    rec: shop.baseVotes.rec + (vote === "rec" ? 1 : 0),
    unrec: shop.baseVotes.unrec + (vote === "unrec" ? 1 : 0),
    voted: Boolean(vote)
  };
}

function renderStars(value) {
  const full = Math.round(value);
  return Array.from({ length: 5 }, (_, index) => {
    return `<span>${index < full ? "★" : "☆"}</span>`;
  }).join("");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getReferencePoint() {
  const uni = getSelectedUniversity();
  if (uni) {
    return { x: uni.x, y: uni.y };
  }
  return { x: 50, y: 50 };
}

function getDistanceLabel(shop) {
  const point = getReferencePoint();
  const raw = Math.hypot(shop.x - point.x, shop.y - point.y) * 0.17;
  if (raw < 1) {
    return `离当前位置约 ${Math.max(120, Math.round(raw * 1000 / 10) * 10)}m`;
  }
  return `离当前位置约 ${raw.toFixed(1)}km`;
}

function focusUniversity(uniId) {
  state.selectedUniId = uniId;
  state.selectedShopId = null;
  state.panX = 0;
  state.panY = 0;
  setZoomLevel(2);
  const uni = getUniversityById(uniId);
  if (uni) showToast(`已进入 ${uni.name} 周边视图`);
}

function categoryColor(category) {
  switch (category) {
    case "湘菜":
      return "#ff7a45";
    case "川菜":
      return "#ef4444";
    case "粤菜":
      return "#f59e0b";
    case "日料":
      return "#8b5cf6";
    case "韩餐":
      return "#ec4899";
    case "西餐":
      return "#3b82f6";
    case "奶茶":
      return "#14b8a6";
    default:
      return "#22c55e";
  }
}

function syncScene() {
  const uni = getSelectedUniversity();
  const meta = LEVEL_META[state.zoomLevel];
  const rect = mapStage.getBoundingClientRect();
  const focusX = uni ? ((50 - uni.x) / 100) * rect.width : 0;
  const focusY = uni ? ((50 - uni.y) / 100) * rect.height : 0;

  mapStage.style.setProperty("--scene-scale", String(meta.scale));
  mapStage.style.setProperty("--scene-origin-x", uni ? `${uni.x}%` : "50%");
  mapStage.style.setProperty("--scene-origin-y", uni ? `${uni.y}%` : "50%");
  mapStage.style.setProperty("--scene-pan-x", `${Math.round(focusX + state.panX)}px`);
  mapStage.style.setProperty("--scene-pan-y", `${Math.round(focusY + state.panY)}px`);

  mapStage.classList.toggle("detail-mode", state.zoomLevel >= 3);
  mapStage.classList.toggle("campus-mode", state.zoomLevel === 2 && !!state.selectedUniId);
  mapStage.classList.toggle("is-draggable", state.zoomLevel > 1 && !state.selectedShopId);
}

function setZoomLevel(level) {
  const nextLevel = clamp(level, 1, 3);
  state.zoomLevel = nextLevel;

  if (nextLevel === 1) {
    state.selectedUniId = null;
    state.selectedShopId = null;
    state.panX = 0;
    state.panY = 0;
  }

  if (nextLevel < 3 && state.selectedShopId) {
    state.selectedShopId = null;
  }

  renderAll();
}

function renderCategoryRail() {
  categoryRail.innerHTML = "";
  CATEGORIES.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-button${state.activeCategory === category ? " active" : ""}`;
    button.style.animationDelay = `${index * 70}ms`;
    button.style.setProperty("--cat-accent", categoryColor(category));
    button.innerHTML = `<span class="category-dot"></span><span>${category}</span>`;
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderCategoryRail();
      renderCategoryPanel();
    });
    categoryRail.appendChild(button);
  });
}

function renderServiceRail() {
  serviceRail.innerHTML = "";
  SERVICES.forEach((service) => {
    const wrap = document.createElement("div");
    wrap.className = "service-wrap";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "service-button";
    button.innerHTML = `<span class="service-glyph">${service.glyph}</span>`;
    button.addEventListener("click", () => {
      showToast(`${service.label} 入口已预留，当前 demo 暂未接入。`);
    });

    const label = document.createElement("span");
    label.className = "service-label";
    label.textContent = service.label;

    wrap.appendChild(button);
    wrap.appendChild(label);
    serviceRail.appendChild(wrap);
  });
}

function renderSchools() {
  schoolLayer.innerHTML = "";
  UNIVERSITIES.forEach((uni, index) => {
    const marker = document.createElement("div");
    marker.className = "school-marker";
    marker.style.left = `${uni.x}%`;
    marker.style.top = `${uni.y}%`;
    marker.style.animationDelay = `${index * 120}ms`;
    if (state.zoomLevel > 1 && state.selectedUniId !== uni.id) {
      marker.classList.add("is-dimmed");
    }
    if (state.selectedUniId === uni.id && state.zoomLevel > 1) {
      marker.classList.add("is-selected");
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "school-button";
    button.innerHTML = `
      <span class="school-pill">
        <span class="school-badge" style="background:${uni.color}">🏫</span>
        <span>${uni.name}</span>
      </span>
      <span class="school-stem"></span>
    `;
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      focusUniversity(uni.id);
    });

    marker.appendChild(button);
    schoolLayer.appendChild(marker);
  });
}

function renderShops() {
  shopLayer.innerHTML = "";

  const showLabels = state.zoomLevel >= 2;

  RESTAURANTS.filter((shop) => {
    if (state.zoomLevel === 1) {
      return false;
    }
    return !state.selectedUniId || shop.uniId === state.selectedUniId;
  }).forEach((shop, index) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = showLabels ? "shop-marker shop-labeled" : "shop-marker";
    marker.style.left = `${shop.x}%`;
    marker.style.top = `${shop.y}%`;
    if (!showLabels) {
      marker.style.animationDelay = `${index * 70}ms`;
    }
    marker.innerHTML = `
      <span class="shop-core">
        <span class="shop-point" style="background:${categoryColor(shop.category)}"></span>
        <span class="shop-chip${showLabels ? ' chip-visible' : ''}">
          <span class="shop-emoji">${shop.emoji}</span>
          <span>
            <span class="shop-name">${shop.name}</span>
            <span class="shop-type">${shop.type}</span>
          </span>
        </span>
      </span>
    `;
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedUniId = shop.uniId;
      state.selectedShopId = shop.id;
      state.zoomLevel = 3;
      renderAll();
    });
    shopLayer.appendChild(marker);
  });
}

function renderSearchResults() {
  const query = state.searchQuery.trim().toLowerCase();
  if (!query) {
    searchResults.classList.add("hidden");
    searchResults.innerHTML = "";
    return;
  }

  const matched = RESTAURANTS.filter((shop) => {
    const uni = getUniversityById(shop.uniId);
    return (
      shop.name.toLowerCase().includes(query) ||
      shop.category.toLowerCase().includes(query) ||
      uni.name.toLowerCase().includes(query)
    );
  }).slice(0, 6);

  searchResults.innerHTML = "";
  searchResults.classList.remove("hidden");

  if (!matched.length) {
    const empty = document.createElement("div");
    empty.className = "search-result";
    empty.innerHTML = `
      <span class="result-emoji">🔎</span>
      <div>
        <div class="result-name">没有找到匹配店铺</div>
        <div class="result-meta">试试输入店名、菜系或学校名称</div>
      </div>
      <span class="result-score">-</span>
    `;
    searchResults.appendChild(empty);
    return;
  }

  matched.forEach((shop) => {
    const uni = getUniversityById(shop.uniId);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    button.innerHTML = `
      <span class="result-emoji">${shop.emoji}</span>
      <div>
        <div class="result-name">${shop.name}</div>
        <div class="result-meta">${uni.name} · ${shop.category}</div>
      </div>
      <span class="result-score">${shop.rating.toFixed(1)}</span>
    `;
    button.addEventListener("click", () => {
      state.searchQuery = shop.name;
      searchInput.value = shop.name;
      state.selectedUniId = shop.uniId;
      state.selectedShopId = shop.id;
      state.zoomLevel = 3;
      state.panX = 0;
      state.panY = 0;
      renderAll();
    });
    searchResults.appendChild(button);
  });
}

function renderCategoryPanel() {
  if (!state.activeCategory) {
    categoryPanel.classList.add("hidden");
    return;
  }

  categoryPanel.classList.remove("hidden");
  categoryTitle.textContent = state.activeCategory;
  const scope = getSelectedUniversity();
  categorySubline.textContent = scope
    ? `当前聚焦 ${scope.name} 周边，也可浏览该分类的全部餐厅。`
    : "按当前分类展示所有校园范围内的餐厅。";

  const list = RESTAURANTS.filter((shop) => shop.category === state.activeCategory).sort((a, b) => {
    if (state.sortBy === "rating") {
      return b.rating - a.rating || b.reviews - a.reviews;
    }
    return b.reviews - a.reviews || b.rating - a.rating;
  });

  categoryList.innerHTML = "";
  if (!list.length) {
    categoryList.innerHTML = `
      <div class="category-item" style="cursor:default">
        <span class="item-emoji">🗂️</span>
        <span class="item-main">
          <strong>这个分类的示例店铺还没补充</strong>
          <span>后续可以继续往这个菜系里加学校周边店铺数据</span>
        </span>
        <span class="item-side">
          <strong>--</strong>
          <span>待补充</span>
        </span>
      </div>
    `;
  }
  list.forEach((shop) => {
    const uni = getUniversityById(shop.uniId);
    const item = document.createElement("button");
    item.type = "button";
    item.className = "category-item";
    item.innerHTML = `
      <span class="item-emoji">${shop.emoji}</span>
      <span class="item-main">
        <strong>${shop.name}</strong>
        <span>${uni.name} · ${shop.type}</span>
        <span>${getDistanceLabel(shop)}</span>
      </span>
      <span class="item-side">
        <strong>${shop.rating.toFixed(1)} ★</strong>
        <span>${shop.reviews} 条评价</span>
      </span>
    `;
    item.addEventListener("click", () => {
      state.selectedUniId = shop.uniId;
      state.selectedShopId = shop.id;
      state.zoomLevel = 3;
      state.panX = 0;
      state.panY = 0;
      renderAll();
    });
    categoryList.appendChild(item);
  });

  [...sortTabs.querySelectorAll(".sort-tab")].forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.sort === state.sortBy);
  });
}

function renderDetailSheet() {
  const shop = getSelectedShop();
  if (!shop) {
    detailSheet.classList.remove("is-open");
    detailSheet.classList.add("hidden");
    detailContent.innerHTML = "";
    return;
  }

  const uni = getUniversityById(shop.uniId);
  const votes = getVoteTotals(shop);
  detailContent.innerHTML = `
    <div class="detail-wrap">
      <div class="detail-head">
        <div class="detail-title">
          <div class="detail-badge">${shop.emoji}</div>
          <div>
            <h2>${shop.name}</h2>
            <div class="detail-meta">
              <span class="meta-pill">${shop.type}</span>
              <span class="meta-pill">${uni.name}</span>
              <span class="meta-pill">${shop.location}</span>
              <span class="meta-pill">${shop.reviews} 条总评价</span>
            </div>
          </div>
        </div>
        <button class="close-detail" id="closeDetailButton" type="button" aria-label="关闭详情">×</button>
      </div>

      <div class="score-grid">
        <article class="score-card">
          <div class="score-platform">美团评分</div>
          <div class="score-value">
            <span>${shop.meituan.toFixed(1)}</span>
            <span class="star-row">${renderStars(shop.meituan)}</span>
          </div>
        </article>
        <article class="score-card">
          <div class="score-platform">大众点评评分</div>
          <div class="score-value">
            <span>${shop.dianping.toFixed(1)}</span>
            <span class="star-row">${renderStars(shop.dianping)}</span>
          </div>
        </article>
      </div>

      <div class="comment-grid">
        ${shop.reviewSnippets.map((review) => `
          <article class="comment-card">
            <div class="comment-head">
              <div>
                <div class="star-row">${renderStars(review.stars)}</div>
                <div class="comment-platform">来自 ${review.platform}</div>
              </div>
            </div>
            <p>${truncate(review.text)}</p>
            <a class="comment-link" href="#" data-platform="${review.platform}">
              点击跳转到 App 查看具体内容 <span aria-hidden="true">↗</span>
            </a>
          </article>
        `).join("")}
      </div>

      <div class="vote-panel">
        <div class="vote-head">
          <h3>🎓 大学生严选</h3>
          <p>匿名统计，你可以选择推荐或不推荐。每个用户在当前浏览器下仅可投票一次。</p>
        </div>
        <div class="vote-grid">
          <button class="vote-button recommend" type="button" data-vote="rec" ${votes.voted ? "disabled" : ""}>
            <span class="vote-glyph">😊⭐</span>
            <span class="vote-label">推荐</span>
            <span class="vote-count">${votes.rec}</span>
          </button>
          <button class="vote-button reject" type="button" data-vote="unrec" ${votes.voted ? "disabled" : ""}>
            <span class="vote-glyph">🥲⭐</span>
            <span class="vote-label">不推荐</span>
            <span class="vote-count">${votes.unrec}</span>
          </button>
        </div>
        <div class="vote-note">${votes.voted ? "感谢你的严选，每位大学生限投一票。" : "还没投票的话，可以帮后来的同学做个参考。"}</div>
      </div>
    </div>
  `;

  detailSheet.classList.remove("hidden");
  requestAnimationFrame(() => detailSheet.classList.add("is-open"));

  document.querySelector("#closeDetailButton").addEventListener("click", closeDetail);
  [...detailContent.querySelectorAll(".comment-link")].forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(`Demo 中已预留跳转到 ${event.currentTarget.dataset.platform} App 查看完整评论。`);
    });
  });
  [...detailContent.querySelectorAll(".vote-button")].forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.vote;
      if (state.userVotes[String(shop.id)]) {
        return;
      }
      state.userVotes[String(shop.id)] = choice;
      saveVotes();
      renderDetailSheet();
      showToast(choice === "rec" ? "已投出推荐票" : "已记录不推荐票");
    });
  });
}

function renderStatus() {
  const uni = getSelectedUniversity();
  const shop = getSelectedShop();

  if (shop) {
    statusText.textContent = `正在查看 ${shop.name}，可以继续查看评分、评论摘要和大学生严选投票。`;
  } else if (uni) {
    statusText.textContent = `已进入 ${uni.name} 周边，点击任意店铺查看评分与详情。`;
  } else {
    statusText.textContent = "先从总地图里点击一所学校，再逐步放大查看周边餐饮店。";
  }
}

function renderAll() {
  syncScene();
  renderStatus();
  renderSchools();
  renderShops();
  renderSearchResults();
  renderCategoryPanel();
  renderDetailSheet();
}

function closeDetail() {
  detailSheet.classList.remove("is-open");
  const closingShopId = state.selectedShopId;
  setTimeout(() => {
    if (state.selectedShopId === closingShopId) {
      state.selectedShopId = null;
      if (state.zoomLevel > 2) {
        state.zoomLevel = 2;
      }
      renderAll();
    } else if (!state.selectedShopId) {
      detailSheet.classList.add("hidden");
    }
  }, 360);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

function handlePointerDown(event) {
  if (state.zoomLevel === 1 || state.selectedShopId) {
    return;
  }
  if (event.target.closest(".school-marker, .shop-marker, .category-panel, .detail-sheet")) {
    return;
  }
  state.drag.active = true;
  state.drag.moved = false;
  state.drag.startX = event.clientX;
  state.drag.startY = event.clientY;
  state.drag.panStartX = state.panX;
  state.drag.panStartY = state.panY;
  mapStage.classList.add("is-dragging");
}

function handlePointerMove(event) {
  if (!state.drag.active) {
    return;
  }
  const deltaX = event.clientX - state.drag.startX;
  const deltaY = event.clientY - state.drag.startY;
  if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
    state.drag.moved = true;
  }
  state.panX = clamp(state.drag.panStartX + deltaX, -180, 180);
  state.panY = clamp(state.drag.panStartY + deltaY, -140, 140);
  syncScene();
}

function handlePointerUp() {
  state.drag.active = false;
  mapStage.classList.remove("is-dragging");
}

searchInput.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderSearchResults();
});

searchInput.addEventListener("focus", renderSearchResults);

document.addEventListener("click", (event) => {
  if (!event.target.closest(".top-search")) {
    searchResults.classList.add("hidden");
  }
});

zoomInButton.addEventListener("click", () => {
  if (state.zoomLevel === 1 && !state.selectedUniId) {
    state.selectedUniId = UNIVERSITIES[0].id;
  }
  setZoomLevel(state.zoomLevel + 1);
});

zoomOutButton.addEventListener("click", () => {
  if (state.selectedShopId) {
    closeDetail();
    return;
  }
  setZoomLevel(state.zoomLevel - 1);
});

backButton.addEventListener("click", () => {
  state.activeCategory = null;
  setZoomLevel(1);
  renderCategoryRail();
});

closeCategoryPanel.addEventListener("click", () => {
  state.activeCategory = null;
  renderCategoryRail();
  renderCategoryPanel();
});

sortTabs.addEventListener("click", (event) => {
  const target = event.target.closest(".sort-tab");
  if (!target) {
    return;
  }
  state.sortBy = target.dataset.sort;
  renderCategoryPanel();
});

sheetHandle.addEventListener("click", closeDetail);

detailSheet.addEventListener("click", (event) => {
  if (!event.target.closest(".sheet-modal")) {
    closeDetail();
  }
});

mapStage.addEventListener("click", (event) => {
  if (state.drag.moved) {
    state.drag.moved = false;
    return;
  }
  if (event.target.closest(".school-marker, .shop-marker, .category-panel, .detail-sheet")) {
    return;
  }
  if (state.selectedShopId) {
    closeDetail();
  } else if (state.zoomLevel > 1) {
    setZoomLevel(state.zoomLevel - 1);
  }
});

mapStage.addEventListener("wheel", (event) => {
  if (state.zoomLevel === 1 && !state.selectedUniId) {
    return;
  }
  event.preventDefault();
  if (event.deltaY < 0) {
    setZoomLevel(state.zoomLevel + 1);
  } else {
    setZoomLevel(state.zoomLevel - 1);
  }
}, { passive: false });

mapStage.addEventListener("pointerdown", handlePointerDown);
window.addEventListener("pointermove", handlePointerMove);
window.addEventListener("pointerup", handlePointerUp);
window.addEventListener("pointercancel", handlePointerUp);
window.addEventListener("resize", syncScene);

renderCategoryRail();
renderServiceRail();
renderAll();
