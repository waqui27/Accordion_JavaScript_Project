const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

function showFaq(question, answer) {
  const faq = document.createElement("div");
  faq.className = "faq";
  accordianBody.appendChild(faq);


  const faq_header = document.createElement("div");
  faq_header.className = "faq_header";
  faq.appendChild(faq_header);

  const heading = document.createElement("h3");
  heading.innerText = question;
  faq_header.appendChild(heading);

  const buttons = document.createElement("button");
  buttons.className = "show_btn";
  buttons.innerText = "+"
  faq_header.appendChild(buttons);

  const para = document.createElement("p");
  para.className = "hidden";
  para.innerText = answer;
  faq.appendChild(para);
}


function createFaq() {
  faqData.forEach((faq) => {
    showFaq(faq.question, faq.answer)
  })
}

createFaq();

  const buttons = document.querySelectorAll(".show_btn")
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const para = btn.parentElement.parentElement.lastChild;
      para.classList.toggle("hidden");
      
      
    });
  });
