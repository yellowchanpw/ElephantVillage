const filterGroup = document.querySelector("[data-filter-group]");
const tabs = filterGroup?.querySelectorAll(".tab-btn") || [];
const menuGroups = document.querySelectorAll(".menu-group");

if (tabs.length > 0) {
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      menuGroups.forEach((group) => {
        const groupCategory = group.dataset.categoryGroup;

        if (category === "all") {
          group.style.display = "";
        } else {
          group.style.display = groupCategory === category ? "" : "none";
        }
      });
    });
  });
}