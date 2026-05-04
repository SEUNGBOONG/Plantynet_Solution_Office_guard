const copyBtn = document.getElementById("copyBtn");
const copyFeedback = document.getElementById("copyFeedback");

if (copyBtn && copyFeedback) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("tmdduqflfl@plantynet.com");
      copyFeedback.textContent = "문의 메일 주소가 복사되었습니다.";
    } catch (error) {
      copyFeedback.textContent = "복사에 실패했습니다. tmdduqflfl@plantynet.com";
    }
  });
}
