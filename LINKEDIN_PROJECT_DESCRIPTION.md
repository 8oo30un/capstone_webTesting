# LinkedIn Project Description

## 📋 Project Title
**Automated E2E Testing Framework for B2B SaaS Dashboard using Donobu & Playwright**

---

## 🎯 Project Overview (Summary)
Developed and implemented a comprehensive end-to-end (E2E) testing framework for a B2B SaaS learning management dashboard using Donobu's AI-powered testing platform and Playwright. The project focuses on ensuring data integrity, automating user workflows, and improving test reliability through self-healing capabilities.

**Duration:** September 2024 - October 2024  
**Role:** Test Automation Engineer / QA Engineer  
**Organization:** Capstone Development Project

---

## 💼 Key Responsibilities & Achievements

### 🔧 Problem Identification & Resolution
- **Identified Critical Bug:** Discovered and resolved a data integrity issue in Donobu-generated test code where user selection was not following the correct Time on Site (TOS) descending order
- **Root Cause Analysis:** Diagnosed that the original implementation was selecting users based on visible viewport elements rather than absolute DOM position after sorting
- **Impact:** Prevented potential data validation failures that could affect 43+ users in production

### 🚀 Technical Implementation
- **Automated Testing Suite:** Built 5 comprehensive test suites covering login, dashboard verification, data sorting, and data integrity validation
- **Dynamic User Detection:** Implemented intelligent algorithm to automatically detect and test all users with TOS > 0 (43 users), replacing hardcoded 10-user limitation
- **Code Optimization:** Reduced test code from 683 lines to 360 lines (47% reduction) through dynamic loops and automated user detection
- **100% Accuracy:** Achieved perfect sequential testing accuracy in descending TOS order across all 43 users

### 📊 Test Coverage & Quality Assurance
- **Data Validation:** Verified Time on Site and Activities Completed totals with ±4 minute tolerance across multiple categories (Asynchronous Activities, Social Events, Trainer-Led Classes, Other)
- **Regex-Based Filtering:** Implemented HH:MM format validation (`/^\d{1,3}:\d{2}$/`) to filter valid time entries and exclude edge cases
- **Cross-Browser Testing:** Configured tests for Chromium with headed mode and slow-motion playback for debugging
- **CI/CD Integration:** Set up GitHub Actions workflow with automated reporting and Slack notifications

### 🛠️ DevOps & Documentation
- **Environment Configuration:** Created comprehensive setup guides (`.env.example`, `README_ENV_SETUP.md`) for seamless team onboarding
- **Security Best Practices:** Implemented `.gitignore` rules to protect sensitive data (API keys, session tokens)
- **Version Control:** Maintained clean Git history with descriptive commits following conventional commit standards
- **Technical Documentation:** Authored detailed README with toggle-based sections for improved readability and navigation

---

## 🛠️ Technologies & Tools

### Core Technologies
- **Testing Frameworks:** Playwright 1.53.2, Donobu (latest)
- **Programming Language:** TypeScript
- **AI Integration:** Google Gemini 2.5-flash (for self-healing tests)
- **Version Control:** Git, GitHub

### Development Tools
- **Package Manager:** npm
- **IDE Configuration:** VS Code with Playwright extensions
- **Browser Automation:** Chromium (headless & headed modes)

### CI/CD & DevOps
- **CI/CD Platform:** GitHub Actions
- **Artifact Management:** Automated upload of test results, HTML reports, screenshots, and videos
- **Monitoring & Alerts:** Slack webhook integration for real-time test result notifications
- **Self-Healing:** AI-powered automatic test recovery with `SELF_HEAL_TESTS_ENABLED`

### Testing Methodologies
- **E2E Testing:** Full user workflow automation from login to data validation
- **Visual Assertions:** AI-powered visual verification using `page.visuallyAssert()`
- **Text Analysis:** LLM-based data extraction using `page.analyzePageText()`
- **Selector Strategies:** Multi-fallback selector arrays with `data-testid`, CSS selectors, and XPath

---

## 📈 Key Metrics & Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Test Coverage** | 10 users (hardcoded) | 43 users (auto-detected) | +330% |
| **Code Lines** | 683 lines | 360 lines | -47% |
| **Accuracy** | Random user selection | 100% sequential order | Perfect |
| **Test Success Rate** | Partial (⚠️) | 100% (✅) | Complete |
| **Execution Time** | ~6.6 min (10 users) | ~20 min (43 users) | Scalable |

---

## 🎓 Skills Demonstrated

### Technical Skills
- ✅ End-to-End (E2E) Test Automation
- ✅ TypeScript Programming
- ✅ Playwright Test Framework
- ✅ AI-Powered Testing (Donobu)
- ✅ DOM Manipulation & Web Scraping
- ✅ Regex & Data Validation
- ✅ Git Version Control
- ✅ GitHub Actions CI/CD
- ✅ Environment Configuration Management
- ✅ API Integration (Google Gemini, OpenAI, Anthropic)

### Soft Skills
- ✅ Problem Solving & Debugging
- ✅ Root Cause Analysis
- ✅ Technical Documentation
- ✅ Code Optimization
- ✅ Quality Assurance
- ✅ Process Improvement
- ✅ Attention to Detail
- ✅ Independent Learning (Donobu platform)

---

## 🔗 Project Links

**GitHub Repository:** [github.com/8oo30un/capstone_webTesting](https://github.com/8oo30un/capstone_webTesting)

**Test Coverage:**
1. ✅ Basic Login Test
2. ✅ Dashboard Data Verification Test
3. ✅ TOS Column Sorting Test
4. ❌ Learner Tray View Test (Pending)
5. ✅ **Data Integrity Verification Test ⭐** (43 users, 100% accuracy)
6. ❌ Learner Onboarding Test (Pending)

---

## 💡 Technical Highlights

### Code Sample: Dynamic User Detection Algorithm
```typescript
// Automatically detect all users with TOS > 0
const allRows = await page.locator("[data-testid='learners-table'] tbody tr").all();
const usersWithTOS: Array<{ index: number; tosValue: string }> = [];

for (let i = 0; i < allRows.length; i++) {
  const tosCell = row.locator("td:nth-child(8)");
  const tosValue = tosText?.trim() || "";
  const isValidTimeFormat = /^\d{1,3}:\d{2}$/.test(tosValue);
  const isNotZero = tosValue !== "00:00";
  
  if (isValidTimeFormat && isNotZero) {
    usersWithTOS.push({ index: i + 1, tosValue: tosValue });
  }
}
```

### Problem Solved
**Original Issue:** Hardcoded `nth-child(1)` through `nth-child(10)` selectors were selecting users based on viewport position after scrolling, causing incorrect sequential order.

**Solution:** Implemented scroll-to-top before each user click + dynamic index-based selection to ensure absolute DOM position regardless of scroll state.

**Result:** Perfect TOS descending order validation across all 43 users.

---

## 🌟 Unique Value Proposition

This project demonstrates proficiency in:
- **AI-Augmented Testing:** Leveraging cutting-edge Donobu platform with Google Gemini for intelligent test self-healing
- **Production-Ready Code:** Enterprise-level configuration with CI/CD, security best practices, and comprehensive documentation
- **Problem-Solving Mindset:** Identified critical bug in AI-generated code and implemented robust solution
- **Scalability:** Transformed fixed 10-user test to dynamic 43-user automation with extensibility for future growth

---

## 📝 Additional Notes

**Why This Project Matters:**
- Ensures data accuracy for B2B SaaS platform serving educational institutions
- Reduces manual QA time from hours to minutes
- Provides automated regression testing for critical user workflows
- Demonstrates ability to work with emerging AI testing technologies

**Lessons Learned:**
- AI-generated tests require validation and optimization
- DOM selection strategies must account for dynamic viewport states
- Comprehensive documentation is crucial for team collaboration
- Test automation is as much about code quality as test coverage

---

## 🎯 Keywords for LinkedIn Search Optimization

`E2E Testing` `Playwright` `TypeScript` `Test Automation` `QA Engineering` `Donobu` `AI Testing` `CI/CD` `GitHub Actions` `Data Validation` `Web Scraping` `DOM Manipulation` `Regression Testing` `SaaS Testing` `Quality Assurance` `Automated Testing` `LLM Integration` `Self-Healing Tests` `B2B Testing` `DevOps`

