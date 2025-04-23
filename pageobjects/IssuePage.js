import helper from "../helper/helper.json";
exports.IssuePage = class IssuePage {
  constructor(page) {
    this.page = page;
    this.CheckBox = page.locator("#cb_status_id");
    this.filterStatus = page.locator("#operators_status_id");
    this.selectedOption = this.filterStatus.locator("option:checked");
    this.dropDownMenuAddFilter = page.locator("#add_filter_select");
    this.trackerOption = this.dropDownMenuAddFilter.locator(
      'option:has-text("Tracker")'
    );
    this.checkBoxTracker = page.locator("#cb_tracker_id");
    this.clearButton = page.locator("a.icon.icon-reload");
    this.trackerFilterLabel = page.locator(
      'label[for="cb_tracker_id"]:has-text("Tracker")'
    );
    this.newObjectButton = page.locator("a#new-object");
    this.newIssueLink = page.locator("ul.menu-children li a.new-issue-sub");
    this.newWikiPageLink = page.locator("ul.menu-children li a.new-wiki-page");
    this.overviewLink = page.locator("li a.overview");
    this.downloadLink = page.locator("li a.download");
    this.activityLink = page.locator("li a.activity");
    this.roadmapLink = page.locator("li a.roadmap");
    this.issuesLink = page.locator('a[href="/projects/redmine/issues"]');
    this.newsLink = page.locator("li a.news");
    this.wikiLink = page.locator("li a.wiki");
    this.forumsLink = page.locator("li a.boards");
    this.repositoryLink = page.locator("li a.repository");
    this.applyButton = page.locator('a.icon.icon-checked:has-text("Apply")');
    this.statusColumnCells = page.locator("table tbody tr td.status");
    this.statusColumnCells = this.page.locator("td.status");
  }
  async areAllRowsClosed() {
    const statusColumnTexts = await this.statusColumnCells.allTextContents();
    return statusColumnTexts.every((status) => status.includes("Closed"));
  }
  async isTableNotFilteredByClosed() {
    await this.statusColumnCells.first().waitFor({ timeout: 5000 });
    const statusColumnTexts = await this.statusColumnCells.allTextContents();
    return statusColumnTexts.some((status) => !status.includes("Closed"));
  }
  async clickApplyButton() {
    await this.applyButton.click();
  }
  async clickOnDropDownMenuStatus() {
    await this.filterStatus.click();
  }
  async clickOnCloseOption() {
    await this.page
      .locator("#operators_status_id")
      .selectOption({ value: "c" });
  }
  async goToIssuePage() {
    await this.page.goto(helper.IssuePage);
  }
  async isCheckboxChecked() {
    const isChecked = await this.CheckBox.isChecked();
    return isChecked;
  }
  async isFilterStatusOpen() {
    const selectedValue = await this.selectedOption.getAttribute("value");
    return selectedValue === "o";
  }
  async clickDropDownMenu() {
    await this.dropDownMenuAddFilter.click();
  }
  async isDropdownVisible() {
    await this.dropDownMenuAddFilter.waitFor({ state: "visible" });
    return this.dropDownMenuAddFilter.isVisible();
  }
  async checkDropdownHasOptions() {
    await this.dropDownMenuAddFilter.waitFor({ state: "visible" });
    const options = this.dropDownMenuAddFilter.locator("option");
    const count = await options.count();
    if (count === 0) {
      throw new Error("Dropdown has no options");
    }
    return count;
  }
  async clickDropDownMenuOption() {
    await this.dropDownMenuAddFilter
      .locator('option[value="tracker_id"]')
      .evaluate((option) => {
        option.removeAttribute("disabled");
      });
    await this.dropDownMenuAddFilter.selectOption({ label: "Tracker" });
  }
  async isTrackerOptionSelected() {
    const selectedOption = await this.dropDownMenuAddFilter.locator(
      "option:checked"
    );
    const optionText = await selectedOption.textContent();
    return optionText === "Tracker";
  }
  async isCheckboxTrackerChecked() {
    const isChecked = await this.checkBoxTracker.isChecked();
    return isChecked;
  }
  async clickClearButton() {
    await this.clearButton.click();
  }
  async clickOverviewLink() {
    await this.overviewLink.click();
  }
  async clickDownloadLink() {
    await this.downloadLink.click();
  }
  async clickActivityLink() {
    await this.activityLink.click();
  }
  async clickRoadmapLink() {
    await this.roadmapLink.click();
  }
  async clickIssuesLink() {
    await this.issuesLink.click();
  }
  async clickNewsLink() {
    await this.newsLink.click();
  }
  async clickWikiLink() {
    await this.wikiLink.click();
  }
  async clickForumsLink() {
    await this.forumsLink.click();
  }
  async clickRepositoryLink() {
    await this.repositoryLink.click();
  }
  async isOnWikiPage() {
    return this.page.url().includes("/wiki");
  }
  async isOnOverviewLinkPage() {
    return this.page.url().includes("/redmine");
  }
  async isOnDownloadPage() {
    return this.page.url().includes("/Download");
  }
  async isOnActivityPage() {
    return this.page.url().includes("/activity");
  }
  async isOnRoadmapPage() {
    return this.page.url().includes("/roadmap");
  }
  async isOnIssuesPage() {
    return this.page.url().includes("/issues");
  }
  async isOnNewsPage() {
    return this.page.url().includes("/news");
  }
  async isOnForumsPage() {
    return this.page.url().includes("/boards");
  }
  async isOnRepositoryPage() {
    return this.page.url().includes("/repository");
  }
};
