class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;


      this.$imageInfo.style.display = "block";

      // 모달 우측의 닫기(x) 버튼 누르면 닫힘
      const close = document.getElementsByClassName("close")[0];
      if(close){
        close.addEventListener("click", () => this.$imageInfo.style.display = "none");
      }

      // ESC 버튼 누르면 닫힘
      document.addEventListener("keydown", (event) => 
        event.key === "Escape" ? this.$imageInfo.style.display = "none" : "");

      // 모달 영역 밖을 누르면 닫힘
      document.addEventListener("click",(event) => {
        if(event.target.style.display === "block"){
          this.$imageInfo.style.display = "none";
        }
      });

    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
