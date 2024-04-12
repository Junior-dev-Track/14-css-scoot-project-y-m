const qa_items = document.querySelectorAll(".qa_item");

for (let i = 0; i < qa_items.length; i++) {
  const qa_item = qa_items[i];
  const question = qa_item.querySelector(".question");

  question.addEventListener("click", () => {
    qa_item.classList.toggle("open");
  });
}
