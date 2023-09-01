function getData() {
  document.getElementById("myBtn").addEventListener("click", () => {
    var url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var item = "";
        data.map((itemData) => {
          item += "<tr>";
          item += "<td>" + itemData.userId + "</td>";
          item += "<td>" + itemData.id + "</td>";
          item += "<td>" + itemData.title + "</td>";
          item += "<td>" + itemData.body + "</td>";

        });
        document.getElementById("tableBody").innerHTML = item;
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  });
}
getData();
