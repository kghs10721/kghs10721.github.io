const note = document.getElementById("note");
const result = document.getElementById("result");

let noteX = 600;
let speed = 4;
let active = true;

// 音符移動
function moveNote() {
  if (!active) return;

  noteX -= speed;
  note.style.right = noteX + "px";

  if (noteX < -50) {
    result.textContent = "Miss ❌";
    active = false;
  } else {
    requestAnimationFrame(moveNote);
  }
}

moveNote();

// 監聽空白鍵
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && active) {
    // 判定區間
    if (noteX > 450 && noteX < 520) {
      result.textContent = "Perfect 🎉";
    } else {
      result.textContent = "Bad 😢";
    }
    active = false;
  }
});

