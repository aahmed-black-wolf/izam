export class Dropdown {
  dropdownButton: HTMLElement;
  dropdownMenu: HTMLElement;
  selectedOption: HTMLElement;
  dropdownItems: NodeListOf<HTMLElement>;

  constructor(
    buttonSelector: string,
    menuSelector: string,
    selectedOptionSelector: string,
    itemSelector: string
  ) {
    this.dropdownButton = document.querySelector(buttonSelector) as HTMLElement;
    this.dropdownMenu = document.querySelector(menuSelector) as HTMLElement;
    this.selectedOption = document.querySelector(
      selectedOptionSelector
    ) as HTMLElement;
    this.dropdownItems = document.querySelectorAll(
      itemSelector
    ) as NodeListOf<HTMLElement>;

    this.init();
  }

  init() {
    // Initialize event listeners
    this.dropdownButton.addEventListener("click", () => this.toggleMenu());
    this.dropdownItems.forEach((item) =>
      item.addEventListener("click", () => this.selectItem(item))
    );

    // Close the dropdown if clicked outside
    document.addEventListener("click", (event) =>
      this.closeIfClickedOutside(event)
    );
  }

  // Toggle dropdown visibility
  toggleMenu() {
    this.dropdownMenu.classList.toggle("hidden");
  }

  // Set active item and update selected option
  selectItem(item: HTMLElement) {
    // Remove active class from all items
    this.dropdownItems.forEach((item) => item.classList.remove("active"));

    // Set the selected item as active
    item.classList.add("active");

    // Update the selected option text
    //   @ts-ignore
    this.selectedOption.textContent = item.dataset.value;

    // Close the dropdown menu
    this.dropdownMenu.classList.add("hidden");
  }

  // Close the dropdown if clicked outside
  closeIfClickedOutside(event: MouseEvent) {
    if (
      !this.dropdownButton.contains(event.target as Node) &&
      !this.dropdownMenu.contains(event.target as Node)
    ) {
      this.dropdownMenu.classList.add("hidden");
    }
  }
}

export class AsideMenu {
  buttons: NodeListOf<HTMLElement>;

  constructor(buttonSelector: string) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.init();
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.toggleSubmenu(button));
    });
  }

  toggleSubmenu(button: HTMLElement) {
    const targetId = button.getAttribute("data-toggle");
    const submenu = document.getElementById(targetId as any);

    if (submenu) {
      submenu.classList.toggle("hidden");

      // Toggle arrow direction
      const arrow = button.querySelector(".arrow");
      if (submenu.classList.contains("hidden")) {
        if (arrow)
          arrow.innerHTML = `<img src="./public/icons/arrow-down.svg" alt=""/>`; // Down arrow
      } else {
        if (arrow)
          arrow.innerHTML = `<img src="./public/icons/arrow-up.svg" alt=""/>`; // Up arrow
      }
    }
  }
}

export class JobList {
  private jobListElement: HTMLElement;

  constructor(listSelector: string) {
    this.jobListElement = document.querySelector(listSelector) as HTMLElement;
    this.generateJobs();
  }

  // Method to generate random job data
  private generateRandomJobData(): JobData {
    const jobTitles = [
      "Senior UX UI Designer",
      "Frontend Developer",
      "Backend Engineer",
      "Product Manager",
      "Data Scientist",
      "QA Engineer",
    ];
    const companies = [
      "Egabi",
      "Google",
      "Microsoft",
      "Meta",
      "Amazon",
      "Netflix",
    ];
    const locations = [
      "Cairo, Egypt",
      "New York, USA",
      "London, UK",
      "Berlin, Germany",
      "Paris, France",
      "Sydney, Australia",
    ];
    const timesPosted = [
      "month ago",
      "2 weeks ago",
      "10 days ago",
      "5 days ago",
      "yesterday",
      "3 months ago",
    ];
    const experiences = [
      "0 - 3y of exp",
      "3 - 5y of exp",
      "5 - 7y of exp",
      "7 - 10y of exp",
      "10+ years",
    ];
    const jobTypes = ["Full time", "Part time", "Freelance", "Contract"];
    const workFormats = ["Hybrid", "Remote", "On-site"];
    const fields = [
      "Creative / Design",
      "IT / Software development",
      "Engineering",
      "Marketing",
      "Operations",
    ];
    const companyLogos = [
      "./public/assets/company-1.png",
      "./public/assets/company-2.png",
      "./public/assets/company-3.png",
    ];

    return {
      title: this.getRandomValue(jobTitles),
      company: this.getRandomValue(companies),
      location: this.getRandomValue(locations),
      timePosted: this.getRandomValue(timesPosted),
      experience: this.getRandomValue(experiences),
      jobType: this.getRandomValue(jobTypes),
      workFormat: this.getRandomValue(workFormats),
      field: this.getRandomValue(fields),
      companyLogo: this.getRandomValue(companyLogos),
    };
  }

  // Helper method to get a random value from an array
  private getRandomValue(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Method to generate 6 random job cards and insert them
  private generateJobs() {
    for (let i = 0; i < 6; i++) {
      const jobData = this.generateRandomJobData();
      const jobCardHTML = this.createJobCard(jobData, i);
      this.jobListElement.insertAdjacentHTML("beforeend", jobCardHTML);
    }
  }

  // Method to create the HTML structure for a job card
  private createJobCard(data: JobData, index: number): string {
    return `
      <div class="job-card ${index === 0 ? " active-card" : ""}">
        <div class="job-content">
          <div class="job-details">
            <div style="gap: 0" class="flex">
              <div class="job-image">
                <img src="${data.companyLogo}" alt="Company Logo" />
              </div>
              <div>
                <h2>${data.title}</h2>
                <a href="#">${data.company}</a>
              </div>
            </div>

            <div class="location">
              <span>📍 ${data.location}</span>
              <span>•</span>
              <span style="gap: 4px" class="flex">
                <img width="12px" height="12px" src="./public/icons/date.svg" alt="Date icon" />
                ${data.timePosted}
              </span>
            </div>
            <div class="tags">
              <span>${data.experience}</span>
              <span>${data.jobType}</span>
              <span>${data.workFormat}</span>
            </div>
            <div class="h-divider my-xl"></div>
            <p>${data.field}</p>
          </div>
        </div>

        <div class="favorite">
          <button class="favorite-button">
            <img src="./public/icons/heart.svg" alt="Favorite" />
          </button>
        </div>
      </div>
    `;
  }
}

export class AsideToggle {
  private asideElement: HTMLElement;
  private toggleButton: HTMLElement;
  private asideCloseElement: HTMLElement;

  constructor(
    asideSelector: string,
    toggleButtonSelector: string,
    asideCloseElement: string
  ) {
    this.asideElement = document.querySelector(asideSelector) as HTMLElement;
    this.asideCloseElement = document.querySelector(
      asideCloseElement
    ) as HTMLElement;
    this.toggleButton = document.querySelector(
      toggleButtonSelector
    ) as HTMLElement;

    this.init();
  }

  private init() {
    this.toggleButton.addEventListener("click", () => this.toggleAside());
    this.asideCloseElement.addEventListener("click", () => this.closeAside());
  }

  private toggleAside() {
    this.asideElement.classList.toggle("open");
  }

  private closeAside() {
    this.asideElement.classList.remove("open");
  }
}

export class MenuToggle {
  private menuElement: HTMLElement;
  private profileButton: HTMLElement;
  private overlayElement: HTMLElement;

  constructor(
    menuSelector: string,
    profileButtonSelector: string,
    overlaySelector: string
  ) {
    this.menuElement = document.querySelector(menuSelector) as HTMLElement;
    this.profileButton = document.querySelector(
      profileButtonSelector
    ) as HTMLElement;
    this.overlayElement = document.querySelector(
      overlaySelector
    ) as HTMLElement;

    this.init();
  }

  private init() {
    this.profileButton.addEventListener("click", () => this.toggleMenu());
    this.overlayElement.addEventListener("click", () => this.closeMenu());
  }

  private toggleMenu() {
    this.menuElement.classList.toggle("open");
  }

  private closeMenu() {
    this.menuElement.classList.remove("open");
  }
}
