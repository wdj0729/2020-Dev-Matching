class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick}) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.$searchResult.innerHTML = "데이터 로딩중...";

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    if(this.data.length!==0){
      setTimeout(() => this.render(),1000);
      this.$searchResult.innerHTML = "데이터 로딩중...";
    }
    else{
      this.$searchResult.innerHTML = "데이터 없음";
    }
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
    .join("");


    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}