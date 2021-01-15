const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    const $randdomButton = document.createElement("button");
    this.$randdomButton = $randdomButton;
    this.$randdomButton.innerHTML = "Click Me";
    this.$randdomButton.onclick = onRandomClick();

    $randdomButton.id = "btn";
    $target.appendChild($randdomButton);

    $searchInput.addEventListener("keyup", e => { 
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
    
    this.render();
  }


  render() {

  }
}
